import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * Hero 3D Interactive Network Globe / Hologram Sphere
 * Interactive 3D Cisco & Cloud Network topology visualization with rotating orbital rings,
 * glowing network nodes, and responsive mouse interaction.
 */
export function Hero3DGlobe({ size = 520, className = '' }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    let animationFrameId;
    let isVisible = true;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
    camera.position.z = 240;

    // WebGL Renderer
    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance'
      });
    } catch {
      return;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(size, size);
    renderer.setClearColor(0x000000, 0);

    const canvas = renderer.domElement;
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.maxWidth = `${size}px`;
    canvas.style.maxHeight = `${size}px`;
    canvas.style.display = 'block';
    canvas.style.margin = '0 auto';
    mount.appendChild(canvas);

    // Group to hold all 3D components
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // 1. Core Wireframe Icosahedron (Lattice Topology)
    const sphereRadius = 72;
    const icoGeometry = new THREE.IcosahedronGeometry(sphereRadius, 3);
    const icoWireframe = new THREE.WireframeGeometry(icoGeometry);
    const icoMaterial = new THREE.LineBasicMaterial({
      color: 0x0c6bf5,
      transparent: true,
      opacity: 0.42,
      blending: THREE.AdditiveBlending
    });
    const icoMesh = new THREE.LineSegments(icoWireframe, icoMaterial);
    globeGroup.add(icoMesh);

    // 2. Glowing Network Vertices (Cisco Routers / Cloud Nodes)
    const vertices = icoGeometry.attributes.position.array;

    // Canvas particle texture
    const pCanvas = document.createElement('canvas');
    pCanvas.width = 32;
    pCanvas.height = 32;
    const pCtx = pCanvas.getContext('2d');
    const grad = pCtx.createRadialGradient(16, 16, 0, 16, 16, 16);
    grad.addColorStop(0, 'rgba(56, 189, 248, 1)');
    grad.addColorStop(0.3, 'rgba(12, 107, 245, 0.9)');
    grad.addColorStop(1, 'rgba(12, 107, 245, 0)');
    pCtx.fillStyle = grad;
    pCtx.fillRect(0, 0, 32, 32);
    const pointTexture = new THREE.CanvasTexture(pCanvas);

    const pointsGeometry = new THREE.BufferGeometry();
    pointsGeometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));

    const pointsMaterial = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 6,
      map: pointTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    const pointsMesh = new THREE.Points(pointsGeometry, pointsMaterial);
    globeGroup.add(pointsMesh);

    // 3. Inner Pulsating Semi-Transparent Hologram Sphere
    const innerGeometry = new THREE.SphereGeometry(sphereRadius * 0.92, 24, 24);
    const innerMaterial = new THREE.MeshBasicMaterial({
      color: 0x072758,
      transparent: true,
      opacity: 0.48,
      wireframe: false
    });
    const innerSphere = new THREE.Mesh(innerGeometry, innerMaterial);
    globeGroup.add(innerSphere);

    // 4. Three 3D Orbital Rings (Global Telecommunication Routing Arcs)
    const createOrbitalRing = (radius, tiltX, tiltY, color, speed) => {
      const ringGeo = new THREE.RingGeometry(radius, radius + 1.2, 64);
      const ringMat = new THREE.MeshBasicMaterial({
        color,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.58,
        blending: THREE.AdditiveBlending
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = tiltX;
      ring.rotation.y = tiltY;
      globeGroup.add(ring);
      return { ring, speed };
    };

    const rings = [
      createOrbitalRing(sphereRadius * 1.34, Math.PI / 3, Math.PI / 6, 0x00d2ff, 0.008),
      createOrbitalRing(sphereRadius * 1.50, -Math.PI / 4, Math.PI / 4, 0x0c6bf5, -0.006),
      createOrbitalRing(sphereRadius * 1.65, Math.PI / 2.2, -Math.PI / 8, 0x38bdf8, 0.005)
    ];

    // 5. Data Packet Pulses Traversing the Orbit
    const packetCount = 10;
    const packetGeometry = new THREE.BufferGeometry();
    const packetPositions = new Float32Array(packetCount * 3);
    for (let p = 0; p < packetCount * 3; p += 3) {
      packetPositions[p] = (Math.random() - 0.5) * sphereRadius * 2.2;
      packetPositions[p + 1] = (Math.random() - 0.5) * sphereRadius * 2.2;
      packetPositions[p + 2] = (Math.random() - 0.5) * sphereRadius * 2.2;
    }
    packetGeometry.setAttribute('position', new THREE.BufferAttribute(packetPositions, 3));
    const packetMaterial = new THREE.PointsMaterial({
      color: 0x67e8f9,
      size: 4.5,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending
    });
    const packets = new THREE.Points(packetGeometry, packetMaterial);
    globeGroup.add(packets);

    // Intersection Observer to stop rendering when scrolled out of view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(mount);

    // Interactive Drag and Mouse Tilt
    let isDragging = false;
    let prevMousePos = { x: 0, y: 0 };
    let mouseVelocity = { x: 0, y: 0 };
    let targetRotationX = 0.2;
    let targetRotationY = 0;

    const onMouseDown = (e) => {
      isDragging = true;
      prevMousePos = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e) => {
      if (isDragging) {
        const deltaX = e.clientX - prevMousePos.x;
        const deltaY = e.clientY - prevMousePos.y;
        mouseVelocity.x = deltaX * 0.005;
        mouseVelocity.y = deltaY * 0.005;
        targetRotationY += mouseVelocity.x;
        targetRotationX += mouseVelocity.y;
        prevMousePos = { x: e.clientX, y: e.clientY };
      } else {
        // Subtle tilt when hovering near
        const rect = canvas.getBoundingClientRect();
        const normX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        const normY = ((e.clientY - rect.top) / rect.height) * 2 - 1;
        targetRotationX = normY * 0.35 + 0.15;
        targetRotationY = normX * 0.45;
      }
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    canvas.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseup', onMouseUp);

    // Touch events for mobile devices
    const onTouchStart = (e) => {
      if (e.touches.length === 1) {
        isDragging = true;
        prevMousePos = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const onTouchMove = (e) => {
      if (isDragging && e.touches.length === 1) {
        const deltaX = e.touches[0].clientX - prevMousePos.x;
        const deltaY = e.touches[0].clientY - prevMousePos.y;
        targetRotationY += deltaX * 0.006;
        targetRotationX += deltaY * 0.006;
        prevMousePos = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const onTouchEnd = () => {
      isDragging = false;
    };

    canvas.addEventListener('touchstart', onTouchStart, { passive: true });
    canvas.addEventListener('touchmove', onTouchMove, { passive: true });
    canvas.addEventListener('touchend', onTouchEnd);

    // Resize observer
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const w = entry.contentRect.width || size;
        const h = entry.contentRect.height || size;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      }
    });
    resizeObserver.observe(mount);

    // Animation Loop
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const elapsed = clock.getElapsedTime();

      // Continuous base rotation
      if (!isDragging) {
        targetRotationY += 0.0035;
      }

      // Smooth interpolation
      globeGroup.rotation.y += (targetRotationY - globeGroup.rotation.y) * 0.06;
      globeGroup.rotation.x += (targetRotationX - globeGroup.rotation.x) * 0.06;

      // Animate rings
      rings.forEach(({ ring, speed }) => {
        ring.rotation.z += speed;
      });

      // Pulse inner sphere scale
      const pulseScale = 1 + Math.sin(elapsed * 2.2) * 0.035;
      innerSphere.scale.set(pulseScale, pulseScale, pulseScale);

      // Rotate data packets
      packets.rotation.y -= 0.012;
      packets.rotation.x += 0.006;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      canvas.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      canvas.removeEventListener('touchstart', onTouchStart);
      canvas.removeEventListener('touchmove', onTouchMove);
      canvas.removeEventListener('touchend', onTouchEnd);
      resizeObserver.disconnect();

      if (canvas && canvas.parentNode) {
        canvas.parentNode.removeChild(canvas);
      }

      icoGeometry.dispose();
      icoWireframe.dispose();
      icoMaterial.dispose();
      pointsGeometry.dispose();
      pointsMaterial.dispose();
      pointTexture.dispose();
      innerGeometry.dispose();
      innerMaterial.dispose();
      packetGeometry.dispose();
      packetMaterial.dispose();
      renderer.dispose();
    };
  }, [size]);

  return (
    <div
      ref={mountRef}
      className={`hero-3d-globe-wrapper ${className}`}
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        maxWidth: `${size}px`,
        aspectRatio: '1 / 1',
        pointerEvents: 'auto',
        cursor: 'grab',
        touchAction: 'none',
        zIndex: 1
      }}
      title="Interactive 3D Network Globe (Click and drag to rotate)"
      role="img"
      aria-label="Interactive 3D Cisco & Cloud Network Globe"
    />
  );
}

export default Hero3DGlobe;
