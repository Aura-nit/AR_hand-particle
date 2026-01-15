import * as THREE from 'three';
import { HandTracker } from './vision/HandTracker';
import { ParticleSystem } from './graphics/ParticleSystem';

async function main() {
  const app = document.getElementById('app');
  const videoInput = document.getElementById('video-input') as HTMLVideoElement;
  const loading = document.getElementById('loading');

  if (!app || !videoInput) {
    console.error("Missing DOM elements");
    return;
  }

  // --- Three.js Setup ---
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 5;

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  app.appendChild(renderer.domElement);

  // Resize handler
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  // --- Components ---
  const particleSystem = new ParticleSystem(scene);
  const handTracker = new HandTracker(videoInput);

  // --- Initialization ---
  console.log("Initializing HandTracker...");
  await handTracker.initialize();

  if (loading) {
    loading.style.display = 'none';
  }

  // --- Animation Loop ---
  function animate() {
    requestAnimationFrame(animate);

    // Vision Update
    handTracker.detect();

    // Logic Update
    particleSystem.update(
      handTracker.isHandDetected,
      handTracker.isHandOpen,
      handTracker.handPosition,
      handTracker.isPointing,
      handTracker.indexFingerPosition,
      handTracker.isOkSign,
      handTracker.isDoubleOpen,
      handTracker.isDomainExpansion,
      handTracker.hands
    );

    // Domain Expansion Effect (Background Black)
    if (handTracker.isDomainExpansion) {
      videoInput.style.opacity = '0';
      document.body.style.backgroundColor = 'black';
    } else {
      videoInput.style.opacity = '1';
      document.body.style.backgroundColor = 'black';
    }

    // Render
    renderer.render(scene, camera);
  }

  animate();
}

main().catch(err => console.error(err));
