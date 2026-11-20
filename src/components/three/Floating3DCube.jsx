import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * Interactive 3D Cyber Cube / Server Block
 * Adds physical 3D volumetric presence to sections with mouse tilt.
 */
export function Floating3DCube({ size = 180, color = 0x0c6bf5, className = '' }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    let animationFrameId;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
    camera.position.z = 100;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(size, size);
    renderer.setClearColor(0x000000, 0);

    const canvas = renderer.domElement;
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.display = 'block';
    mount.appendChild(canvas);

    // Group
    const cubeGroup = new THREE.Group();
    scene.add(cubeGroup);

    // Outer Wireframe Box
    const boxSize = 36;
    const geometry = new THREE.BoxGeometry(boxSize, boxSize, boxSize);
    const wireframe = new THREE.WireframeGeometry(geometry);
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending
    });
    const wireframeMesh = new THREE.LineSegments(wireframe, lineMat);
    cubeGroup.add(wireframeMesh);

    // Inner Glowing Core
    const innerGeo = new THREE.BoxGeometry(boxSize * 0.7, boxSize * 0.7, boxSize * 0.7);
    const innerMat = new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity: 0.28
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    cubeGroup.add(innerMesh);

    // 8 Corner Nodes
    const sphereGeo = new THREE.SphereGeometry(2.5, 12, 12);
    const sphereMat = new THREE.MeshBasicMaterial({ color: 0x00d2ff });
    const half = boxSize / 2;
    const corners = [
      [-half, -half, -half], [half, -half, -half],
      [-half, half, -half], [half, half, -half],
      [-half, -half, half], [half, -half, half],
      [-half, half, half], [half, half, half]
    ];
    corners.forEach(([x, y, z]) => {
      const node = new THREE.Mesh(sphereGeo, sphereMat);
      node.position.set(x, y, z);
      cubeGroup.add(node);
    });

    let targetRotX = 0.4;
    let targetRotY = 0.6;

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      targetRotX = y * 0.8 + 0.4;
      targetRotY = x * 0.8 + 0.6;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      targetRotY += 0.005;
      cubeGroup.rotation.x += (targetRotX - cubeGroup.rotation.x) * 0.05;
      cubeGroup.rotation.y += (targetRotY - cubeGroup.rotation.y) * 0.05;

      cubeGroup.position.y = Math.sin(elapsed * 1.5) * 4;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', onMouseMove);
      if (canvas && canvas.parentNode) canvas.parentNode.removeChild(canvas);
      geometry.dispose();
      wireframe.dispose();
      lineMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      sphereGeo.dispose();
      sphereMat.dispose();
      renderer.dispose();
    };
  }, [size, color]);

  return (
    <div
      ref={mountRef}
      className={`floating-3d-cube ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        pointerEvents: 'none'
      }}
      aria-hidden="true"
    />
  );
}

export default Floating3DCube;
