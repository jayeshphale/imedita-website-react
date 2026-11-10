import React, { useState, useEffect } from 'react';
import styles from './CourseStickyNav.module.css';

const defaultNavItems = [
  { id: 'overview', label: 'Overview' },
  { id: 'syllabus', label: 'Syllabus' },
  { id: 'trainers', label: 'Trainers' },
  { id: 'placement', label: 'Placement' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'faq', label: 'FAQ' },
  { id: 'events', label: 'Events' }
];

export function CourseStickyNav({ items = defaultNavItems }) {
  const [activeSection, setActiveSection] = useState(items[0]?.id || 'overview');
  const [isSticky, setIsSticky] = useState(false);

  // Smooth scroll handler with offset for both global navbar and course sticky nav
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      const isMobile = window.innerWidth <= 768;
      const offset = isMobile ? 116 : 126; // main navbar + sticky nav height
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
      setActiveSection(targetId);
    }
  };

  // Scroll listener to update active tab based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 160;
      
      // Determine which section is currently in view
      for (let i = items.length - 1; i >= 0; i--) {
        const item = items[i];
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(item.id);
            break;
          }
        }
      }

      // Check if nav has reached sticky position
      setIsSticky(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [items]);

  return (
    <nav 
      className={`${styles.stickyNav} ${isSticky ? styles.isSticky : ''}`} 
      aria-label="Course section navigation"
    >
      <div className={styles.container}>
        <div className={styles.navTrack}>
          {items.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
                aria-current={isActive ? 'true' : undefined}
              >
                <span>{item.label}</span>
                {isActive && <span className={styles.activeIndicator} />}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export default CourseStickyNav;
