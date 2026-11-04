import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Automatically scrolls window to top on route change,
 * synchronizing with both native browser scroll and Lenis smooth scroll engine.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // If navigating with a hash (e.g. /#trainers, /#reviews)
      const element = document.querySelector(hash);
      if (element) {
        if (window.__lenis) {
          window.__lenis.scrollTo(element, { offset: -80 });
        } else {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        return;
      }
    }

    // Otherwise scroll to top immediately
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

