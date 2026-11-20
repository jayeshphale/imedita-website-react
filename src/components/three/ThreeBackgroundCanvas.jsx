import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * Enterprise 3D WebGL Background Canvas
 * Renders a lightweight, high-performance 3D ambient particle & network constellation
 * with mouse parallax and scroll depth.
 */
export function ThreeBackgroundCanvas() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check WebGL availability & reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    let animationFrameId;
    let isVisible = true;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0xf8fafc, 0.00085);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      1,
      2000
    );
    camera.position.z = 700;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // Transparent background

    const domElement = renderer.domElement;
    domElement.style.position = 'fixed';
    domElement.style.top = '0';
    domElement.style.left = '0';
    domElement.style.width = '100%';
    domElement.style.height = '100%';
    domElement.style.pointerEvents = 'none';
    domElement.style.zIndex = '0';
    domElement.style.opacity = '0.75';
    container.appendChild(domElement);

    // Create 3D Particle Constellation & Network Mesh
    const particleCount = window.innerWidth < 768 ? 120 : 260;
    const maxDistance = 140; // Max distance for network lines
    const positions = new Float32Array(particleCount * 3);
    const velocities = [];

    const bounds = {
      x: 900,
      y: 600,
      z: 700
    };

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * bounds.x * 2;
      positions[i * 3 + 1] = (Math.random() - 0.5) * bounds.y * 2;
      positions[i * 3 + 2] = (Math.random() - 0.5) * bounds.z * 2;

      velocities.push({
        x: (Math.random() - 0.5) * 0.45,
        y: (Math.random() - 0.5) * 0.45,
        z: (Math.random() - 0.5) * 0.35
      });
    }

    // Particle Points
    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Create soft glowing circle texture for particles
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    grad.addColorStop(0, 'rgba(12, 107, 245, 1)');
    grad.addColorStop(0.35, 'rgba(56, 189, 248, 0.85)');
    grad.addColorStop(1, 'rgba(56, 189, 248, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 32, 32);
    const particleTexture = new THREE.CanvasTexture(canvas);

    const particleMaterial = new THREE.PointsMaterial({
      color: 0x0c6bf5,
      size: 9,
      map: particleTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Dynamic Network Lines
    // Allocate maximum possible lines buffer
    const maxLineSegments = particleCount * 6;
    const linePositions = new Float32Array(maxLineSegments * 6); // 2 points per segment * 3 coords
    const lineColors = new Float32Array(maxLineSegments * 6); // 2 points per segment * 3 colors

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3).setUsage(THREE.DynamicDrawUsage));
    lineGeometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3).setUsage(THREE.DynamicDrawUsage));

    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.32,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);

    // Mouse Tracking for Interactive 3D Parallax
    let targetMouseX = 0;
    let targetMouseY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e) => {
      targetMouseX = (e.clientX - window.innerWidth / 2) * 0.45;
      targetMouseY = (e.clientY - window.innerHeight / 2) * 0.45;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Scroll Tracking for 3D Camera Depth Drift
    let targetScrollY = 0;
    let currentScrollY = 0;

    const handleScroll = () => {
      targetScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Window Resize Handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Visibility Change Handler (Pause loop when tab inactive to save power)
    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Animation Loop
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const delta = Math.min(clock.getDelta(), 0.1);

      // Smooth camera interpolation
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;
      currentScrollY += (targetScrollY - currentScrollY) * 0.05;

      camera.position.x = mouseX * 0.65;
      camera.position.y = -mouseY * 0.65 - (currentScrollY * 0.22);
      camera.lookAt(scene.position.x, scene.position.y - (currentScrollY * 0.22), scene.position.z);

      // Update particle positions
      const pos = particleGeometry.attributes.position.array;
      let lineVertexIndex = 0;
      let lineSegmentsCount = 0;

      for (let i = 0; i < particleCount; i++) {
        // Move particle by velocity
        pos[i * 3] += velocities[i].x;
        pos[i * 3 + 1] += velocities[i].y;
        pos[i * 3 + 2] += velocities[i].z;

        // Bounce within 3D bounding box
        if (Math.abs(pos[i * 3]) > bounds.x) velocities[i].x *= -1;
        if (Math.abs(pos[i * 3 + 1]) > bounds.y) velocities[i].y *= -1;
        if (Math.abs(pos[i * 3 + 2]) > bounds.z) velocities[i].z *= -1;

        // Connect nearby particles with 3D lines
        for (let j = i + 1; j < particleCount; j++) {
          const dx = pos[i * 3] - pos[j * 3];
          const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
          const dz = pos[i * 3 + 2] - pos[j * 3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < maxDistance && lineSegmentsCount < maxLineSegments) {
            const alpha = 1 - dist / maxDistance;

            // Point 1
            linePositions[lineVertexIndex] = pos[i * 3];
            linePositions[lineVertexIndex + 1] = pos[i * 3 + 1];
            linePositions[lineVertexIndex + 2] = pos[i * 3 + 2];

            // Color 1 (brand blue with distance-based alpha)
            lineColors[lineVertexIndex] = 0.05 * alpha;
            lineColors[lineVertexIndex + 1] = 0.42 * alpha;
            lineColors[lineVertexIndex + 2] = 0.96 * alpha;

            // Point 2
            linePositions[lineVertexIndex + 3] = pos[j * 3];
            linePositions[lineVertexIndex + 4] = pos[j * 3 + 1];
            linePositions[lineVertexIndex + 5] = pos[j * 3 + 2];

            // Color 2 (cyan with distance-based alpha)
            lineColors[lineVertexIndex + 3] = 0.22 * alpha;
            lineColors[lineVertexIndex + 4] = 0.74 * alpha;
            lineColors[lineVertexIndex + 5] = 0.97 * alpha;

            lineVertexIndex += 6;
            lineSegmentsCount++;
          }
        }
      }

      particleGeometry.attributes.position.needsUpdate = true;
      lineGeometry.setDrawRange(0, lineSegmentsCount * 2);
      lineGeometry.attributes.position.needsUpdate = true;
      lineGeometry.attributes.color.needsUpdate = true;

      // Slow 3D rotation of entire mesh
      particles.rotation.y += 0.0006;
      lines.rotation.y += 0.0006;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);

      if (domElement && domElement.parentNode) {
        domElement.parentNode.removeChild(domElement);
      }

      particleGeometry.dispose();
      particleMaterial.dispose();
      particleTexture.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="three-background-canvas" aria-hidden="true" />;
}

export default ThreeBackgroundCanvas;
