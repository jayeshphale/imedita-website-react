import React, { useState, useEffect } from 'react';
import { ListOrdered, ChevronDown, ChevronRight, Hash } from 'lucide-react';
import styles from './TableOfContents.module.css';

export function TableOfContents({ items = [], activeId = '' }) {
  const [isOpenMobile, setIsOpenMobile] = useState(false);
  const [currentActiveId, setCurrentActiveId] = useState(activeId || items[0]?.id || '');

  // High-precision viewport scroll-spy effect to track currently active section
  useEffect(() => {
    if (!items.length) return;

    const handleScroll = () => {
      const isMobile = window.innerWidth <= 1024;
      const targetThreshold = isMobile ? 130 : 150;
      let active = items[0]?.id;

      for (const item of items) {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Element has reached or scrolled past the threshold line
          if (rect.top <= targetThreshold) {
            active = item.id;
          }
        }
      }

      setCurrentActiveId(active);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [items]);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (!element) return;

    setCurrentActiveId(id);

    const isMobile = window.innerWidth <= 1024;
    const navbarOffset = isMobile ? 120 : 135;

    if (window.__lenis) {
      window.__lenis.scrollTo(element, { offset: -navbarOffset });
    } else {
      const topOffset = element.getBoundingClientRect().top + window.pageYOffset - navbarOffset;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }

    setIsOpenMobile(false);
  };

  return (
    <nav className={styles.tocWrapper} aria-label="Table of Contents">
      {/* Mobile Toggle Bar */}
      <button
        type="button"
        className={styles.mobileToggleBtn}
        onClick={() => setIsOpenMobile(!isOpenMobile)}
        aria-expanded={isOpenMobile}
        aria-controls="toc-list"
      >
        <div className={styles.mobileToggleLeft}>
          <ListOrdered size={16} className={styles.tocIcon} />
          <span className={styles.mobileToggleLabel}>Table of Contents</span>
          <span className={styles.itemsCountBadge}>{items.length} sections</span>
        </div>
        <ChevronDown
          size={16}
          className={`${styles.chevron} ${isOpenMobile ? styles.chevronOpen : ''}`}
        />
      </button>

      {/* Desktop & Mobile Collapsible List */}
      <div
        id="toc-list"
        className={`${styles.tocCard} ${isOpenMobile ? styles.tocCardMobileOpen : ''}`}
      >
        <div className={styles.desktopTocHeader}>
          <div className={styles.headerLeft}>
            <ListOrdered size={16} className={styles.tocIcon} />
            <span className={styles.tocTitle}>Table of Contents</span>
          </div>
          <span className={styles.sectionsCount}>{items.length} sections</span>
        </div>

        <ol className={styles.tocList}>
          {items.map((item, index) => {
            const isActive = currentActiveId === item.id;
            const levelClass = item.level === 3 ? styles.tocSubItem : styles.tocMainItem;

            return (
              <li key={item.id} className={`${styles.tocItem} ${levelClass}`}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className={`${styles.tocLink} ${isActive ? styles.tocLinkActive : ''}`}
                  aria-current={isActive ? 'location' : undefined}
                >
                  <span className={styles.itemNumber}>{index + 1}.</span>
                  <span className={styles.itemText}>{item.title}</span>
                </a>
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}

export default TableOfContents;
