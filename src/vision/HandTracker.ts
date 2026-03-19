import { FilesetResolver, HandLandmarker } from "@mediapipe/tasks-vision";

export class HandTracker {
    private handLandmarker: HandLandmarker | undefined;
    private video: HTMLVideoElement;
    private lastVideoTime = -1;
    private isLoaded = false;

    // State to export
    public isHandDetected = false;
    public handPosition = { x: 0, y: 0 }; // Primary hand position (legacy use)
    public hands: { x: number, y: number }[] = []; // All detected hands

    // Gestures
    public isHandOpen = false;       // General state
    public isPointing = false;       // Red
    public isOkSign = false;         // Purple
    public isDoubleOpen = false;     // Blue
    public isDomainExpansion = false; // Black Background

    public indexFingerPosition = { x: 0, y: 0 };

    constructor(videoElement: HTMLVideoElement) {
        this.video = videoElement;
    }

    async initialize() {
        try {
            const vision = await FilesetResolver.forVisionTasks(
                "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.0/wasm"
            );

            // Hand Landmarker
            this.handLandmarker = await HandLandmarker.createFromOptions(vision, {
                baseOptions: {
                    modelAssetPath: `https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task`,
                    delegate: "GPU",
                },
                runningMode: "VIDEO",
                numHands: 2,
            });

            this.isLoaded = true;
            console.log("Vision tasks loaded");

            // Start camera
            await this.setupCamera();
        } catch (error) {
            console.error("Error initializing HandTracker:", error);
        }
    }

    private async setupCamera() {
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
            this.showError("Browser API navigator.mediaDevices.getUserMedia not available");
            throw new Error("Browser API navigator.mediaDevices.getUserMedia not available");
        }

        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                video: {
                    width: 1280,
                    height: 720,
                },
            });
            this.video.srcObject = stream;
            await new Promise<void>((resolve) => {
                this.video.onloadedmetadata = () => {
                    resolve();
                };
            });
            this.video.play();
        } catch (error) {
            console.error("Camera setup failed:", error);
            this.showError(`Camera Error: ${error}`);
            throw error;
        }
    }

    private showError(msg: string) {
        const div = document.createElement('div');
        div.style.position = 'absolute';
        div.style.top = '10px';
        div.style.left = '10px';
        div.style.color = 'red';
        div.style.backgroundColor = 'rgba(0,0,0,0.7)';
        div.style.padding = '10px';
        div.style.zIndex = '9999';
        div.textContent = msg;
        document.body.appendChild(div);
    }

    detect() {
        if (!this.handLandmarker || !this.isLoaded || this.video.paused || this.video.ended) {
            return;
        }

        if (this.video.currentTime !== this.lastVideoTime) {
            const startTimeMs = performance.now();

            // 1. Hand Landmarks
            const results = this.handLandmarker.detectForVideo(this.video, startTimeMs);

            this.lastVideoTime = this.video.currentTime;

            if (results.landmarks && results.landmarks.length > 0) {
                this.isHandDetected = true;
                this.analyzeGestures(results.landmarks);
            } else {
                this.isHandDetected = false;
                this.resetStates();
            }
        }
    }

    private resetStates() {
        this.isHandOpen = false;
        this.isPointing = false;
        this.isOkSign = false;
        this.isDoubleOpen = false;
        this.isDomainExpansion = false;
        this.hands = [];
    }

    private analyzeGestures(allLandmarks: any[][]) {
        // Reset per-frame flags
        this.resetStates();

        let openHandsCount = 0;
        let pointingHandsCount = 0;
        let okSignCount = 0;
        let domainExpansionCount = 0;

        let primaryHandLandmarks = allLandmarks[0];

        for (const landmarks of allLandmarks) {
            const wrist = landmarks[0];
            const thumbTip = landmarks[4];
            const indexTip = landmarks[8];
            const middleTip = landmarks[12];
            const ringTip = landmarks[16];
            const pinkyTip = landmarks[20];

            // Record hand position
            this.hands.push({
                x: (thumbTip.x + wrist.x) / 2,
                y: (thumbTip.y + wrist.y) / 2
            });

            const distSq = (p1: any, p2: any) => Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);

            // Distances from wrist
            const dIndex = distSq(wrist, indexTip);
            const dMiddle = distSq(wrist, middleTip);
            const dRing = distSq(wrist, ringTip);
            const dPinky = distSq(wrist, pinkyTip);

            // 1. Check Open Hand
            // Helper: Open if fingers are far from wrist and thumb-index far
            const dThumbIndex = Math.sqrt(distSq(thumbTip, indexTip));
            // 0.15 is roughly "open" threshold based on previous tuning
            const isOpen = dThumbIndex > 0.15 && dMiddle > 0.1 && dRing > 0.1;
            if (isOpen) openHandsCount++;

            // 2. Check Pointing (Red)
            // Index extended, others curled
            const isIndexExtended = dIndex > 0.1;
            const areOthersCurled = dMiddle < 0.1 && dRing < 0.1 && dPinky < 0.1;
            const isPointing = isIndexExtended && areOthersCurled;

            if (isPointing) {
                pointingHandsCount++;
                this.indexFingerPosition = { x: indexTip.x, y: indexTip.y };
                primaryHandLandmarks = landmarks;
            }

            // 3. Check OK Sign (Purple)
            // Thumb and Middle touching (circle), others extended
            // 逆手（手の甲向き）対応: 閾値を緩めに設定
            const dThumbMiddle = Math.sqrt(distSq(thumbTip, middleTip));
            const isThumbMiddleTouching = dThumbMiddle < 0.08;
            // Index/Ring/Pinky should be extended (逆手では短く見えるため閾値を下げる)
            const areThreeFingersExtended = dIndex > 0.07 && dRing > 0.07 && dPinky > 0.07;

            if (isThumbMiddleTouching && areThreeFingersExtended) {
                okSignCount++;
                primaryHandLandmarks = landmarks;
            }

            // 4. Check Domain Expansion (Crossed Fingers)
            // Index and Middle extended. Ring and Pinky curled.
            // Index and Middle significantly close or overlapping.
            // Peace sign also matches "Index and Middle extended", so check closeness.
            const isIndexMiddleExtended = dIndex > 0.1 && dMiddle > 0.1;
            const areRingPinkyCurled = dRing < 0.1 && dPinky < 0.1;
            const dIndexMiddle = Math.sqrt(distSq(indexTip, middleTip));

            if (isIndexMiddleExtended && areRingPinkyCurled && dIndexMiddle < 0.04) {
                domainExpansionCount++;
                primaryHandLandmarks = landmarks;
            }
        }

        // --- Aggregate Logic ---
        this.isDomainExpansion = domainExpansionCount > 0;
        this.isOkSign = okSignCount > 0;
        this.isDoubleOpen = allLandmarks.length >= 2;
        this.isPointing = pointingHandsCount > 0;
        this.isHandOpen = openHandsCount > 0;

        // Update Position of primary hand
        if (primaryHandLandmarks) {
            const wrist = primaryHandLandmarks[0];
            const thumbTip = primaryHandLandmarks[4];
            this.handPosition = {
                x: (thumbTip.x + wrist.x) / 2,
                y: (thumbTip.y + wrist.y) / 2
            };
        }
    }
}
