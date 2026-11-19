import React, { useEffect, useRef, useState } from 'react';
import styles from './StaggerContainer.module.css';

export function StaggerContainer({
  children,
  staggerDelay = 90,
  baseDelay = 0,
  threshold = 0.1,
  className = ''
}) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (containerRef.current) {
              observer.unobserve(containerRef.current);
            }
          }
        });
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
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
  }, [threshold]);

  const childArray = React.Children.toArray(children);

  return (
    <div
      ref={containerRef}
      className={`${styles.staggerContainer} ${isVisible ? styles.isRevealed : ''} ${className}`}
    >
      {childArray.map((child, index) => {
        const itemDelay = baseDelay + index * staggerDelay;
        return (
          <div
            key={index}
            className={`${styles.staggerItem} ${isVisible ? styles.itemRevealed : ''}`}
            style={{
              transitionDelay: `${itemDelay}ms`
            }}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
}

export default StaggerContainer;
