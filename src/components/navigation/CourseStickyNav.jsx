import React, { useState, useEffect, useRef } from 'react';
import { 
  Layers, 
  BookOpen, 
  UserCheck, 
  Briefcase, 
  Star, 
  Calendar, 
  HelpCircle, 
  PhoneCall 
} from 'lucide-react';
import styles from './CourseStickyNav.module.css';

// Professional enterprise icons for technical course navigation
const defaultNavItems = [
  { id: 'overview', label: 'Overview', icon: Layers },
  { id: 'syllabus', label: 'Syllabus', icon: BookOpen },
  { id: 'trainers', label: 'Trainers', icon: UserCheck },
  { id: 'placement', label: 'Placement', icon: Briefcase },
  { id: 'reviews', label: 'Reviews', icon: Star },
  { id: 'faq', label: 'FAQ', icon: HelpCircle }
];

export function CourseStickyNav({ 
  items = defaultNavItems, 
  courseTitle = 'Cisco CCNA (200-301)',
  onOpenDemo = () => {}
}) {
  const [activeSection, setActiveSection] = useState(items[0]?.id || 'overview');
  const [isSticky, setIsSticky] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const navTrackRef = useRef(null);
  const isClickScrolling = useRef(false);
  const scrollTimeoutRef = useRef(null);

  // Auto-scroll nav track horizontally on mobile/overflow viewports so active tab is always centered
  useEffect(() => {
    if (navTrackRef.current) {
      const activeEl = navTrackRef.current.querySelector(`.${styles.navLinkActive}`);
      if (activeEl) {
        activeEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [activeSection]);

  // Smooth click handler with pixel-perfect offset calculation
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (!el) return;

    // 1. Immediately highlight the clicked tab and place underline directly on it
    setActiveSection(targetId);
    isClickScrolling.current = true;

    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    const isMobile = window.innerWidth <= 1024;
    const navbarOffset = isMobile ? 114 : 124; // main nav (64/74px) + sticky subnav (50px)
    const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
    const scrollTarget = Math.max(0, elementPosition - navbarOffset + 4);

    window.scrollTo({
      top: scrollTarget,
      behavior: 'smooth'
    });

    // 2. Lock programmatic scroll for 1000ms so smooth scroll finishes cleanly
    scrollTimeoutRef.current = setTimeout(() => {
      isClickScrolling.current = false;
      setActiveSection(targetId);
    }, 1000);
  };

  // High-performance RAF scroll listener for accurate section tracking
  useEffect(() => {
    let rafId = null;

    const onScroll = () => {
      if (rafId) return;

      rafId = window.requestAnimationFrame(() => {
        const scrollY = window.scrollY;

        // 1. Reading progress percentage calculation
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (totalHeight > 0) {
          const progress = (scrollY / totalHeight) * 100;
          setScrollProgress(Math.min(100, Math.max(0, progress)));
        }

        // 2. Check sticky state threshold
        setIsSticky(scrollY > 350);

        // 3. Accurate section intersection detection (only during manual scrolling)
        if (!isClickScrolling.current) {
          const isMobile = window.innerWidth <= 1024;
          const navbarOffset = isMobile ? 114 : 124;
          const triggerLine = navbarOffset + 60; // Trigger line 60px below sticky navbar

          // Special case: reached bottom of page -> activate last item (FAQ)
          const isAtBottom = window.innerHeight + scrollY >= document.documentElement.scrollHeight - 70;
          if (isAtBottom && items.length > 0) {
            setActiveSection(items[items.length - 1].id);
          } else {
            let foundSectionId = null;

            // Check which section intersects the triggerLine
            for (let i = 0; i < items.length; i++) {
              const item = items[i];
              const el = document.getElementById(item.id);
              if (el) {
                const rect = el.getBoundingClientRect();
                if (rect.top <= triggerLine && rect.bottom > triggerLine) {
                  foundSectionId = item.id;
                  break;
                }
              }
            }

            // Fallback for edge cases
            if (!foundSectionId) {
              for (let i = items.length - 1; i >= 0; i--) {
                const item = items[i];
                const el = document.getElementById(item.id);
                if (el) {
                  const rect = el.getBoundingClientRect();
                  if (rect.top <= triggerLine) {
                    foundSectionId = item.id;
                    break;
                  }
                }
              }
            }

            if (foundSectionId) {
              setActiveSection(foundSectionId);
            }
          }
        }

        rafId = null;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, [items]);

  return (
    <nav 
      className={`${styles.stickyNav} ${isSticky ? styles.isSticky : ''}`} 
      aria-label="Course section navigation"
    >
      <div className={styles.container}>
        
        {/* Left Side: Contextual Mini Course Branding */}
        <div 
          className={styles.brandPill} 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          title="Scroll to course top"
        >
          <div className={styles.brandBeacon}>
            <span className={styles.beaconPing} />
            <span className={styles.beaconDot} />
          </div>
          <span className={styles.brandText}>{courseTitle}</span>
        </div>

        {/* Center: Professional Tabs with Guaranteed Direct Underline on Active Tab */}
        <div className={styles.navTrack} ref={navTrackRef}>
          {items.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
                aria-current={isActive ? 'true' : undefined}
              >
                {Icon && <Icon size={15} strokeWidth={1.8} className={styles.tabIcon} />}
                <span className={styles.tabText}>{item.label}</span>
                {/* 100% Guaranteed Underline Rendered Directly on the Active Tab */}
                {isActive && <span className={styles.activeUnderline} />}
              </a>
            );
          })}
        </div>

        {/* Right Side: Quick Action CTA Button */}
        <div className={styles.actionBlock}>
          <button
            type="button"
            className={styles.ctaQuickBtn}
            onClick={() => onOpenDemo(courseTitle)}
          >
            <PhoneCall size={13} className={styles.ctaBtnIcon} />
            <span>Book Free Demo</span>
          </button>
        </div>

      </div>

      {/* Dynamic Reading Scroll Progress Bar */}
      <div className={styles.progressBarWrapper} aria-hidden="true">
        <div 
          className={styles.progressBar} 
          style={{ width: `${scrollProgress}%` }} 
        />
      </div>
    </nav>
  );
}

export default CourseStickyNav;
