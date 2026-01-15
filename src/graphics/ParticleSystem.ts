import * as THREE from 'three';

export class ParticleSystem {
    private scene: THREE.Scene;
    private particles: THREE.Points;
    private particleCount = 4000; // Increased count for stars
    private positions: Float32Array;
    private velocities: Float32Array;
    private colors: Float32Array;
    private sizes: Float32Array;

    // Interaction State
    private targetPosition = new THREE.Vector3();
    private isGathering = false;

    constructor(scene: THREE.Scene) {
        this.scene = scene;

        // Geometry
        const geometry = new THREE.BufferGeometry();
        this.positions = new Float32Array(this.particleCount * 3);
        this.velocities = new Float32Array(this.particleCount * 3);
        this.colors = new Float32Array(this.particleCount * 3);
        this.sizes = new Float32Array(this.particleCount);

        const colorPalette = [
            new THREE.Color(0xffffff), // White
            new THREE.Color(0xaaccff), // Light Blue
            new THREE.Color(0x8800ff), // Purple
            new THREE.Color(0xff0088), // Pink
            new THREE.Color(0x0000aa), // Deep Blue
        ];

        for (let i = 0; i < this.particleCount; i++) {
            // Spread stars wide
            const r = 5 + Math.random() * 10;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.random() * Math.PI * 2;

            const x = r * Math.sin(theta) * Math.cos(phi);
            const y = r * Math.sin(theta) * Math.sin(phi);
            const z = r * Math.cos(theta);

            this.positions[i * 3] = x;
            this.positions[i * 3 + 1] = y;
            this.positions[i * 3 + 2] = z;

            this.velocities[i * 3] = 0;
            this.velocities[i * 3 + 1] = 0;
            this.velocities[i * 3 + 2] = 0;

            // Colors
            const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
            this.colors[i * 3] = color.r;
            this.colors[i * 3 + 1] = color.g;
            this.colors[i * 3 + 2] = color.b;

            // Sizes
            this.sizes[i] = Math.random() < 0.9 ? 0.05 : 0.2; // Mostly small stars, some bright ones
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(this.positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(this.colors, 3));
        // Note: 'size' attribute in ShaderMaterial, but PointsMaterial doesn't support per-vertex size easily without custom shader.
        // For simplicity with standard PointsMaterial, we can't do per-pixel size easily unless we use GlPoint or Shader.
        // Let's stick to uniform size for now or try to use a texture. 
        // Actually, let's keep it simple: uniform size but use alpha/brightness via color to simulate size/dist.

        // Material
        const material = new THREE.PointsMaterial({
            size: 0.08,
            vertexColors: true,
            transparent: true,
            opacity: 0.9,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });

        this.particles = new THREE.Points(geometry, material);
        this.scene.add(this.particles);
    }

    update(
        handDetected: boolean,
        handOpen: boolean,
        handPos: { x: number, y: number },
        isPointing: boolean = false,
        indexFingerPos: { x: number, y: number } = { x: 0, y: 0 },
        isOkSign: boolean = false,
        isDoubleOpen: boolean = false,
        isDomainExpansion: boolean = false,
        hands: { x: number, y: number }[] = [] // Array of hand positions from tracker
    ) {
        // Target Calculation
        // Default: Primary hand center
        let targetX = (1 - handPos.x - 0.5) * 12;
        let targetY = (0.5 - handPos.y) * 8;

        if (isPointing) {
            targetX = (1 - indexFingerPos.x - 0.5) * 12;
            targetY = (0.5 - indexFingerPos.y) * 8;
        } else if (isDoubleOpen && hands.length >= 2) {
            // Blue: Midpoint between two hands
            const h1 = hands[0];
            const h2 = hands[1];
            const midX = (h1.x + h2.x) / 2;
            const midY = (h1.y + h2.y) / 2;
            targetX = (1 - midX - 0.5) * 12;
            targetY = (0.5 - midY) * 8;
        }

        this.targetPosition.set(targetX, targetY, 0);

        // State Determinationc
        this.isGathering = !handOpen && handDetected && !isPointing && !isOkSign && !isDoubleOpen;
        const isDispersing = handOpen && handDetected && !isPointing && !isOkSign && !isDoubleOpen;

        const positionAttribute = this.particles.geometry.attributes.position as THREE.BufferAttribute;
        const colorAttribute = this.particles.geometry.attributes.color as THREE.BufferAttribute;

        const positions = positionAttribute.array as Float32Array;
        const colors = colorAttribute.array as Float32Array;

        // Target Color
        const targetColor = new THREE.Color();
        let useForcedColor = false;

        if (isDomainExpansion) {
            targetColor.setHex(0xffffff); // White against black background
            useForcedColor = true;
        } else if (isDoubleOpen) {
            targetColor.setHex(0x0088ff); // Blue
            useForcedColor = true;
        } else if (isOkSign) {
            targetColor.setHex(0x8800ff); // Purple
            useForcedColor = true;
        } else if (isPointing) {
            targetColor.setHex(0xff0000); // Red
            useForcedColor = true;
        }

        for (let i = 0; i < this.particleCount; i++) {
            const px = positions[i * 3];
            const py = positions[i * 3 + 1];
            const pz = positions[i * 3 + 2];

            let vx = this.velocities[i * 3];
            let vy = this.velocities[i * 3 + 1];
            let vz = this.velocities[i * 3 + 2];

            // --- Physics ---

            if (isOkSign) {
                // Purple Orb: Dense Ball (Hollow Purple)
                const dx = this.targetPosition.x - px;
                const dy = this.targetPosition.y - py;
                const dz = this.targetPosition.z - pz;
                const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

                // Super strong attraction to create a solid ball of size ~0.5
                // Force particles to stay within radius
                if (dist > 0.4) {
                    const force = (dist - 0.3) * 0.5; // Strong containment
                    vx += (dx / dist) * force;
                    vy += (dy / dist) * force;
                    vz += (dz / dist) * force;
                }

                // Internal turmoil/noise
                vx += (Math.random() - 0.5) * 0.05;
                vy += (Math.random() - 0.5) * 0.05;
                vz += (Math.random() - 0.5) * 0.05;

                // Strong damping to hold shape
                vx *= 0.8;
                vy *= 0.8;
                vz *= 0.8;

            } else if (isDoubleOpen) {
                // Blue: Azure (Midpoint Convergence + Generation)
                const dx = this.targetPosition.x - px;
                const dy = this.targetPosition.y - py;
                const dz = this.targetPosition.z - pz;
                const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
                const safeDist = Math.max(dist, 0.1);

                // 1. Particle Generation (From Center)
                // Randomly respawn particles at center to simulate "generation"
                // Or respawn if they get sucked in too close (Singularity)
                if (dist < 0.2 || Math.random() < 0.1) {
                    positions[i * 3] = this.targetPosition.x + (Math.random() - 0.5) * 0.1;
                    positions[i * 3 + 1] = this.targetPosition.y + (Math.random() - 0.5) * 0.1;
                    positions[i * 3 + 2] = this.targetPosition.z + (Math.random() - 0.5) * 0.1;

                    // Initial outward burst (Generation)
                    vx = (Math.random() - 0.5) * 0.6;
                    vy = (Math.random() - 0.5) * 0.6;
                    vz = (Math.random() - 0.5) * 0.6;
                }

                // 2. Strong Attraction (Convergence)
                const force = 0.5;
                vx += (dx / safeDist) * force * 0.2;
                vy += (dy / safeDist) * force * 0.2;
                vz += (dz / safeDist) * force * 0.2;

                // 3. Rotation (Spin)
                const spinSpeed = 0.1;
                vx += -dy * spinSpeed;
                vy += dx * spinSpeed;

                // Damping
                vx *= 0.90;
                vy *= 0.90;
                vz *= 0.90;

            } else if (isPointing) {
                // Red: Reversal Red (Sea Emission & Convergence)
                const dx = this.targetPosition.x - px;
                const dy = this.targetPosition.y - py;
                const dz = this.targetPosition.z - pz;
                const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
                const safeDist = Math.max(dist, 0.1);

                // "Convergence": Strong pull towards center
                // "Emission": Chaotic ejection from center?

                // Let's create a cycle or mixture:
                // Core is extremely dense (Convergence)
                // Outer area is turbulent (Sea/Emission)

                if (dist > 1.5) {
                    // Strong Pull (Convergence) from afar
                    const force = 0.2;
                    vx += (dx / safeDist) * force;
                    vy += (dy / safeDist) * force;
                    vz += (dz / safeDist) * force;
                } else {
                    // Close range: Chaotic Emission (The "Sea" erupting)
                    // Push out with noise
                    const repel = 1.5 / safeDist;
                    vx -= (dx / safeDist) * repel * 0.5;
                    vy -= (dy / safeDist) * repel * 0.5;
                    vz -= (dz / safeDist) * repel * 0.5;

                    // Add turbulent noise
                    vx += (Math.random() - 0.5) * 0.2;
                    vy += (Math.random() - 0.5) * 0.2;
                    vz += (Math.random() - 0.5) * 0.2;
                }

                // Respawn if too far to maintain density
                if (dist > 6.0) {
                    // Respawn at source for continuous "Emission"
                    positions[i * 3] = this.targetPosition.x + (Math.random() - 0.5) * 0.2;
                    positions[i * 3 + 1] = this.targetPosition.y + (Math.random() - 0.5) * 0.2;
                    positions[i * 3 + 2] = this.targetPosition.z + (Math.random() - 0.5) * 0.2;
                    vx = (Math.random() - 0.5) * 0.5;
                    vy = (Math.random() - 0.5) * 0.5;
                    vz = (Math.random() - 0.5) * 0.5;
                }

                // Drag/Friction
                vx *= 0.90;
                vy *= 0.90;
                vz *= 0.90;

            } else if (this.isGathering) {
                // Standard Black Hole Gather
                const dx = this.targetPosition.x - px;
                const dy = this.targetPosition.y - py;
                const dz = this.targetPosition.z - pz;
                const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
                const safeDist = Math.max(dist, 0.1);

                const force = 2.0 / safeDist; // Linear falloff

                const ax = (dx / safeDist) * force * 0.1;
                const ay = (dy / safeDist) * force * 0.1;
                const az = (dz / safeDist) * force * 0.1;

                vx += ax;
                vy += ay;
                vz += az;

                // Spiral
                vx += -ay * 0.5;
                vy += ax * 0.5;

                // Damping
                vx *= 0.85;
                vy *= 0.85;
                vz *= 0.85;

            } else if (isDispersing) {
                // Standard Explosion
                const dx = px - this.targetPosition.x;
                const dy = py - this.targetPosition.y;
                const dz = pz - this.targetPosition.z;
                const dist = Math.sqrt(dx * dx + dy * dy + dz * dz) + 0.01;

                if (dist < 5.0) {
                    // Constant gentle push instead of explosive blast
                    const blast = 0.05;
                    vx += (dx / dist) * blast;
                    vy += (dy / dist) * blast;
                    vz += (dz / dist) * blast;
                }
                vx *= 0.98;
                vy *= 0.98;
                vz *= 0.98;

            } else {
                // Idle
                const distsq = px * px + py * py + pz * pz;
                if (distsq > 400) {
                    vx -= px * 0.0002;
                    vy -= py * 0.0002;
                    vz -= pz * 0.0002;
                }
                vx += (Math.random() - 0.5) * 0.001;
                vy += (Math.random() - 0.5) * 0.001;
                vz += (Math.random() - 0.5) * 0.001;
                vx *= 0.99;
                vy *= 0.99;
                vz *= 0.99;
            }

            // --- Update Position ---
            this.velocities[i * 3] = vx;
            this.velocities[i * 3 + 1] = vy;
            this.velocities[i * 3 + 2] = vz;

            positions[i * 3] += vx;
            positions[i * 3 + 1] += vy;
            positions[i * 3 + 2] += vz;

            // --- Color Blending ---
            if (useForcedColor) {
                colors[i * 3] = THREE.MathUtils.lerp(colors[i * 3], targetColor.r, 0.1);
                colors[i * 3 + 1] = THREE.MathUtils.lerp(colors[i * 3 + 1], targetColor.g, 0.1);
                colors[i * 3 + 2] = THREE.MathUtils.lerp(colors[i * 3 + 2], targetColor.b, 0.1);
            } else {
                // Slowly drift to white for neutral
                colors[i * 3] = THREE.MathUtils.lerp(colors[i * 3], 1.0, 0.02);
                colors[i * 3 + 1] = THREE.MathUtils.lerp(colors[i * 3 + 1], 1.0, 0.02);
                colors[i * 3 + 2] = THREE.MathUtils.lerp(colors[i * 3 + 2], 1.0, 0.02);
            }
        }

        positionAttribute.needsUpdate = true;
        colorAttribute.needsUpdate = true;
    }
}
