import React, { useEffect } from 'react';

export function ScrollRevealManager() {
  useEffect(() => {
    // If user prefers reduced motion, mark everything immediately
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll(
        '.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale, .scroll-header, .scroll-stagger-cards, section'
      ).forEach(el => el.classList.add('is-revealed'));
      return;
    }

    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          // Also reveal nested scroll elements if parent section intersected
          const nested = entry.target.querySelectorAll(
            '.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale, .scroll-header, .scroll-stagger-cards'
          );
          nested.forEach(el => el.classList.add('is-revealed'));
          
          observer.unobserve(entry.target);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.08
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const observeElements = () => {
      const targets = document.querySelectorAll(
        '.scroll-reveal:not(.is-revealed), .scroll-reveal-left:not(.is-revealed), .scroll-reveal-right:not(.is-revealed), .scroll-reveal-scale:not(.is-revealed), .scroll-header:not(.is-revealed), .scroll-stagger-cards:not(.is-revealed), section:not(.is-revealed)'
      );
      targets.forEach(el => observer.observe(el));
    };

    observeElements();

    // Re-observe when dynamic content renders (e.g., course tab switching)
    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true
    });

    // Initial pass for elements already in viewport
    const timer = setTimeout(() => {
      const windowHeight = window.innerHeight;
      document.querySelectorAll(
        '.scroll-reveal:not(.is-revealed), .scroll-reveal-left:not(.is-revealed), .scroll-reveal-right:not(.is-revealed), .scroll-reveal-scale:not(.is-revealed), .scroll-header:not(.is-revealed), .scroll-stagger-cards:not(.is-revealed), section:not(.is-revealed)'
      ).forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < windowHeight * 0.95 && rect.bottom > 0) {
          el.classList.add('is-revealed');
          const nested = el.querySelectorAll(
            '.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale, .scroll-header, .scroll-stagger-cards'
          );
          nested.forEach(nestedEl => nestedEl.classList.add('is-revealed'));
        }
      });
    }, 150);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
}

export default ScrollRevealManager;

