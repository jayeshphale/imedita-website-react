import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  BookOpen, 
  Award, 
  Briefcase, 
  Star, 
  HelpCircle, 
  Calendar, 
  PhoneCall 
} from 'lucide-react';
import styles from './CourseStickyNav.module.css';

const defaultNavItems = [
  { id: 'overview', label: 'Overview', icon: Sparkles },
  { id: 'syllabus', label: 'Syllabus', icon: BookOpen },
  { id: 'trainers', label: 'Trainers', icon: Award },
  { id: 'placement', label: 'Placement', icon: Briefcase },
  { id: 'reviews', label: 'Reviews', icon: Star, badge: '4.8★' },
  { id: 'faq', label: 'FAQ', icon: HelpCircle },
  { id: 'events', label: 'Events', icon: Calendar, isLive: true }
];

export function CourseStickyNav({ 
  items = defaultNavItems, 
  courseTitle = 'Cisco CCNA (200-301)',
  onOpenDemo = () => {}
}) {
  const [activeSection, setActiveSection] = useState(items[0]?.id || 'overview');
  const [isSticky, setIsSticky] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Smooth scroll handler with offset for both global navbar and course sticky nav
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      const isMobile = window.innerWidth <= 768;
      const offset = isMobile ? 116 : 128; // main navbar + sticky nav height
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
      setActiveSection(targetId);
    }
  };

  // Scroll listener for active section tracking and reading progress bar
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 160;

      // Update reading progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }
      
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
      setIsSticky(window.scrollY > 380);
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
        
        {/* Left Side: Contextual Mini Course Branding (Click scrolls to top) */}
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

        {/* Center: 7 Creative Section Tabs with Micro-Icons */}
        <div className={styles.navTrack}>
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
                {Icon && <Icon size={14} className={styles.tabIcon} />}
                <span>{item.label}</span>
                {item.badge && <span className={styles.tabBadge}>{item.badge}</span>}
                {item.isLive && (
                  <span className={styles.liveTag}>
                    <span className={styles.liveDot} />
                    LIVE
                  </span>
                )}
                {isActive && <span className={styles.activeGlowLine} />}
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
