import * as THREE from 'three';
import { HandTracker } from './vision/HandTracker';
import { ParticleSystem } from './graphics/ParticleSystem';
import purpleAudioUrl from '../music/Purple.mp3';
import voidAudioUrl from '../music/void.mp3';
import redAudioUrl from '../music/red.mp3';
import blueAudioUrl from '../music/blue.mp3';

class FadeAudio {
  audio: HTMLAudioElement;
  fadeInterval: ReturnType<typeof setInterval> | null = null;
  constructor(url: string, loop: boolean = true) {
    this.audio = new Audio(url);
    this.audio.loop = loop;
  }

  play() {
    if (this.fadeInterval) {
      clearInterval(this.fadeInterval);
      this.fadeInterval = null;
    }
    this.audio.volume = 1;
    this.audio.play().catch(e => console.error("Audio play failed:", e));
  }

  fadeOut(duration: number = 2000) {
    if (this.fadeInterval) return;
    if (this.audio.paused) return;
    const step = 50;
    const volumeStep = 1 / (duration / step);
    this.fadeInterval = setInterval(() => {
      if (this.audio.volume > volumeStep) {
        this.audio.volume -= volumeStep;
      } else {
        this.audio.volume = 0;
        this.audio.pause();
        this.audio.currentTime = 0;
        clearInterval(this.fadeInterval!);
        this.fadeInterval = null;
      }
    }, step);
  }
}

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

  // --- Technique Name Display ---
  const techniqueNameEl = document.getElementById('technique-name');
  let currentTechnique = '';
  let domainTimer: ReturnType<typeof setTimeout> | null = null;
  let domainCharsContainer: HTMLDivElement | null = null;

  const purpleAudio = new FadeAudio(purpleAudioUrl);
  const voidAudio = new FadeAudio(voidAudioUrl);
  const redAudio = new FadeAudio(redAudioUrl);
  const blueAudio = new FadeAudio(blueAudioUrl);

  function showTechniqueName(name: string, color: string) {
    if (!techniqueNameEl) return;
    techniqueNameEl.textContent = name;
    techniqueNameEl.style.color = color;
    techniqueNameEl.style.textShadow = `
      0 0 20px ${color},
      0 0 40px ${color},
      0 0 80px ${color}
    `;
    techniqueNameEl.classList.remove('show');
    void techniqueNameEl.offsetWidth;
    techniqueNameEl.classList.add('show');
  }

  function showDomainName() {
    // Remove old container if exists
    if (domainCharsContainer) {
      domainCharsContainer.remove();
    }
    domainCharsContainer = document.createElement('div');
    domainCharsContainer.className = 'domain-chars';

    const chars = ['無', '量', '空', '処'];
    for (const ch of chars) {
      const el = document.createElement('div');
      el.className = 'domain-char';
      el.textContent = ch;
      domainCharsContainer.appendChild(el);
    }
    document.body.appendChild(domainCharsContainer);

    // Trigger animation on next frame
    requestAnimationFrame(() => {
      if (!domainCharsContainer) return;
      const charEls = domainCharsContainer.querySelectorAll('.domain-char');
      charEls.forEach(el => el.classList.add('show'));
    });

    // Clean up after animation
    setTimeout(() => {
      if (domainCharsContainer) {
        domainCharsContainer.remove();
        domainCharsContainer = null;
      }
    }, 2500);
  }

  // --- Animation Loop ---
  function animate() {
    requestAnimationFrame(animate);

    // Vision Update
    handTracker.detect();

    // Technique Evaluation
    let newTechnique = '';

    // Priority and state locking
    // 蒼が発動中は領域展開できないようにする (Prevent Domain Expansion while Blue is active)
    if (currentTechnique === 'blue' && handTracker.isDoubleOpen) {
      newTechnique = 'blue';
    } else if (handTracker.isDomainExpansion) {
      newTechnique = 'domainExpansion';
    } else if (handTracker.isOkSign) {
      newTechnique = 'purple';
    } else if (handTracker.isDoubleOpen) {
      newTechnique = 'blue';
    } else if (handTracker.isPointing) {
      newTechnique = 'red';
    }

    // Logic Update using resolved techniques
    particleSystem.update(
      handTracker.isHandDetected,
      handTracker.isHandOpen,
      handTracker.handPosition,
      newTechnique === 'red',
      handTracker.indexFingerPosition,
      newTechnique === 'purple',
      newTechnique === 'blue',
      newTechnique === 'domainExpansion',
      handTracker.hands
    );

    if (newTechnique !== currentTechnique) {
      if (currentTechnique === 'purple') {
        purpleAudio.fadeOut(1500); // 1.5 seconds fade out
      } else if (currentTechnique === 'domainExpansion') {
        voidAudio.fadeOut(1500);
      } else if (currentTechnique === 'red') {
        redAudio.fadeOut(1500);
      } else if (currentTechnique === 'blue') {
        blueAudio.fadeOut(1500);
      }

      if (newTechnique) {
        // Clean up pending domain timer
        if (domainTimer) {
          clearTimeout(domainTimer);
          domainTimer = null;
        }

        switch (newTechnique) {
          case 'domainExpansion':
            showTechniqueName('領域展開', '#ffffff');
            voidAudio.play();
            domainTimer = setTimeout(() => {
              showDomainName();
              domainTimer = null;
            }, 1300);
            break;
          case 'purple':
            showTechniqueName('茈', '#aa00ff');
            purpleAudio.play();
            break;
          case 'blue':
            showTechniqueName('蒼', '#0088ff');
            blueAudio.play();
            break;
          case 'red':
            showTechniqueName('赫', '#ff2200');
            redAudio.play();
            break;
        }
      }
    }
    currentTechnique = newTechnique;

    // Domain Expansion Effect (Background Black)
    if (currentTechnique === 'domainExpansion') {
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
