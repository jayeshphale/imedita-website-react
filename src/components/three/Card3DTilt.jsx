import React, { useRef, useState, useCallback, useEffect } from 'react';

/**
 * Enterprise 3D Tilt Card Wrapper
 * Adds Apple Vision Pro / Stripe style 3D perspective and specular reflection
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {string} [props.className]
 * @param {Object} [props.style]
 * @param {number} [props.maxTilt=10] Maximum tilt angle in degrees
 * @param {number} [props.perspective=1000] Perspective distance in px
 * @param {number} [props.scale=1.02] Scale on hover
 * @param {boolean} [props.glare=true] Whether to show dynamic specular glare
 * @param {number} [props.elevation=18] Z-axis translation in px
 */
export function Card3DTilt({
  children,
  className = '',
  style = {},
  maxTilt = 8,
  perspective = 1000,
  scale = 1.02,
  glare = true,
  elevation = 16,
  as: Component = 'div',
  ...restProps
}) {
  const cardRef = useRef(null);
  const [transformStyle, setTransformStyle] = useState('');
  const [glareStyle, setGlareStyle] = useState({ opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const rafId = useRef(null);

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;

    if (rafId.current) cancelAnimationFrame(rafId.current);

    rafId.current = requestAnimationFrame(() => {
      const rect = cardRef.current.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      // Mouse position from -1 to 1 (center is 0, 0)
      const x = ((e.clientX - rect.left) / width) * 2 - 1;
      const y = ((e.clientY - rect.top) / height) * 2 - 1;

      // Tilt angle calculations: tilt up/down (rotateX based on y) and left/right (rotateY based on x)
      const rotateX = -y * maxTilt;
      const rotateY = x * maxTilt;

      setTransformStyle(
        `perspective(${perspective}px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateZ(${elevation}px) scale3d(${scale}, ${scale}, ${scale})`
      );

      if (glare) {
        // Calculate angle of specular reflection
        const glareX = ((e.clientX - rect.left) / width) * 100;
        const glareY = ((e.clientY - rect.top) / height) * 100;
        setGlareStyle({
          opacity: 0.45,
          background: `radial-gradient(circle 240px at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.45), transparent 75%)`
        });
      }
    });
  }, [maxTilt, perspective, scale, glare, elevation]);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (rafId.current) cancelAnimationFrame(rafId.current);
    setIsHovered(false);
    setTransformStyle(
      `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale3d(1, 1, 1)`
    );
    setGlareStyle({ opacity: 0 });
  }, [perspective]);

  useEffect(() => {
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <Component
      ref={cardRef}
      className={`card-3d ${className}`}
      style={{
        transform: transformStyle || `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) translateZ(0px)`,
        transformStyle: 'preserve-3d',
        transition: isHovered
          ? 'transform 0.08s ease-out, box-shadow 0.2s ease'
          : 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease',
        ...style
      }}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...restProps}
    >
      {glare && (
        <div
          className="card-3d-glare-overlay"
          style={glareStyle}
          aria-hidden="true"
        />
      )}
      {children}
    </Component>
  );
}

export default Card3DTilt;
