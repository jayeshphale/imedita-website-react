import React, { useState, useEffect, useRef, useCallback } from 'react';
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

// Professional enterprise icons for technical course navigation (Events before FAQ)
const defaultNavItems = [
  { id: 'overview', label: 'Overview', icon: Layers },
  { id: 'syllabus', label: 'Syllabus', icon: BookOpen },
  { id: 'trainers', label: 'Trainers', icon: UserCheck },
  { id: 'placement', label: 'Placement', icon: Briefcase },
  { id: 'reviews', label: 'Reviews', icon: Star },
  { id: 'events', label: 'Events', icon: Calendar },
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
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });

  const navTrackRef = useRef(null);
  const tabRefs = useRef({});
  const isClickScrolling = useRef(false);
  const scrollTimeoutRef = useRef(null);

  // Smoothly reposition the single continuous sliding underline
  const updateSlidingIndicator = useCallback((sectionId) => {
    const activeTab = tabRefs.current[sectionId];
    const track = navTrackRef.current;
    if (activeTab && track) {
      setIndicatorStyle({
        left: activeTab.offsetLeft,
        width: activeTab.offsetWidth,
        opacity: 1
      });

      // On mobile / horizontal scroll: auto-center active tab smoothly
      const trackWidth = track.clientWidth;
      const tabLeft = activeTab.offsetLeft;
      const tabWidth = activeTab.offsetWidth;
      const targetScrollLeft = tabLeft - (trackWidth / 2) + (tabWidth / 2);

      track.scrollTo({
        left: Math.max(0, targetScrollLeft),
        behavior: 'smooth'
      });
    }
  }, []);

  // Sync underline whenever active section changes
  useEffect(() => {
    updateSlidingIndicator(activeSection);
  }, [activeSection, updateSlidingIndicator]);

  // Recalculate indicator on window resize / fonts ready
  useEffect(() => {
    const handleResize = () => updateSlidingIndicator(activeSection);
    window.addEventListener('resize', handleResize, { passive: true });
    
    // Initial sync after DOM paint
    const timer = setTimeout(() => updateSlidingIndicator(activeSection), 50);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
    };
  }, [activeSection, updateSlidingIndicator]);

  // Handle manual interaction to release programmatic scroll lock immediately
  useEffect(() => {
    const releaseScrollLock = () => {
      isClickScrolling.current = false;
    };
    window.addEventListener('wheel', releaseScrollLock, { passive: true });
    window.addEventListener('touchstart', releaseScrollLock, { passive: true });
    return () => {
      window.removeEventListener('wheel', releaseScrollLock);
      window.removeEventListener('touchstart', releaseScrollLock);
    };
  }, []);

  // Smooth click handler with pixel-perfect offset calculation
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (!el) return;

    // Immediately update active section and glide indicator
    setActiveSection(targetId);
    isClickScrolling.current = true;

    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    const isMobile = window.innerWidth <= 1024;
    const navbarOffset = isMobile ? 114 : 124; // main nav (64/74px) + sticky subnav (50px)
    const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
    const scrollTarget = Math.max(0, elementPosition - navbarOffset + 2);

    window.scrollTo({
      top: scrollTarget,
      behavior: 'smooth'
    });

    // Re-enable scroll listener detection after smooth scroll finishes
    scrollTimeoutRef.current = setTimeout(() => {
      isClickScrolling.current = false;
    }, 800);
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

        // 3. Accurate section intersection detection (skip during click smooth-scroll)
        if (!isClickScrolling.current) {
          const isMobile = window.innerWidth <= 1024;
          const navbarOffset = isMobile ? 114 : 124;
          const triggerLine = navbarOffset + 35; // Trigger line directly below sticky nav

          // Special case: reached bottom of page -> activate last item (FAQ)
          const isAtBottom = window.innerHeight + scrollY >= document.documentElement.scrollHeight - 60;
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

            // Fallback for spacing gaps between sections
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

        {/* Center: Professional Tabs with Smooth Continuous Sliding Underline */}
        <div className={styles.navTrack} ref={navTrackRef}>
          {items.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                ref={(el) => {
                  if (el) tabRefs.current[item.id] = el;
                }}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
                aria-current={isActive ? 'true' : undefined}
              >
                {Icon && <Icon size={15} strokeWidth={1.8} className={styles.tabIcon} />}
                <span className={styles.tabText}>{item.label}</span>
              </a>
            );
          })}

          {/* Single Continuous Sliding Underline Indicator */}
          <span 
            className={styles.slidingUnderline} 
            style={{
              transform: `translateX(${indicatorStyle.left}px)`,
              width: `${indicatorStyle.width}px`,
              opacity: indicatorStyle.opacity
            }}
            aria-hidden="true"
          />
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
