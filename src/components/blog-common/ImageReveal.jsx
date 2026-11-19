import React, { useEffect, useRef, useState } from 'react';
import styles from './ImageReveal.module.css';

export function ImageReveal({
  src,
  alt = '',
  caption = '',
  aspectRatio = '16/9',
  className = ''
}) {
  const [isRevealed, setIsRevealed] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          if (containerRef.current) {
            observer.unobserve(containerRef.current);
          }
        }
      },
      { threshold: 0.15 }
    );

    const currentEl = containerRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) {
        observer.unobserve(currentEl);
      }
    };
  }, []);

  return (
    <figure className={`${styles.figure} ${className}`} ref={containerRef}>
      <div 
        className={`${styles.imageWrapper} ${isRevealed ? styles.revealed : ''}`}
        style={{ aspectRatio }}
      >
        <img 
          src={src} 
          alt={alt} 
          loading="lazy" 
          decoding="async" 
          className={styles.image}
        />
        <div className={`${styles.wipeMask} ${isRevealed ? styles.wipeFinished : ''}`} />
      </div>
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
}

export default ImageReveal;
