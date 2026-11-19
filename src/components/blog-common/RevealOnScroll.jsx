import React, { useEffect, useRef, useState } from 'react';
import styles from './RevealOnScroll.module.css';

export function RevealOnScroll({
  children,
  animation = 'fade-up', // 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'scale'
  delay = 0,
  duration = 650,
  threshold = 0.12,
  className = ''
}) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    // Respect user's motion preferences
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (domRef.current) {
              observer.unobserve(domRef.current);
            }
          }
        });
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );

    const currentEl = domRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) {
        observer.unobserve(currentEl);
      }
    };
  }, [threshold]);

  const animClass = styles[animation] || styles['fade-up'];

  return (
    <div
      ref={domRef}
      className={`${styles.revealWrapper} ${animClass} ${isVisible ? styles.isRevealed : ''} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`
      }}
    >
      {children}
    </div>
  );
}

export default RevealOnScroll;
