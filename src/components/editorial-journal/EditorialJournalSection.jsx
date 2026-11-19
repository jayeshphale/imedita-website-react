import React, { useRef, useEffect, useState, useMemo, useCallback } from 'react';
import { 
  BookOpen, 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight,
  ExternalLink,
  Sparkles,
  Layers
} from 'lucide-react';
import { EDITORIAL_ARTICLES, EDITORIAL_CATEGORIES } from './editorialJournalData';
import { EditorialScrollCard, ArchiveScrollCard } from './EditorialScrollCard';
import styles from './EditorialJournalSection.module.css';

export function EditorialJournalSection() {
  const outerWrapperRef = useRef(null);
  const trackRef = useRef(null);
  const progressFillRef = useRef(null);
  const progressValueRef = useRef(null);
  const prevBtnRef = useRef(null);
  const nextBtnRef = useRef(null);

  // Cached metrics to eliminate layout thrashing during scroll
  const metricsRef = useRef({
    scrollableDistance: 0,
    maxTranslation: 0,
    wrapperTop: 0
  });

  const [selectedCategory, setSelectedCategory] = useState('All Insights');
  const [isDesktop, setIsDesktop] = useState(false);

  // Filter articles based on active category
  const filteredArticles = useMemo(() => {
    if (selectedCategory === 'All Insights') {
      return EDITORIAL_ARTICLES;
    }
    return EDITORIAL_ARTICLES.filter(
      (article) => article.category === selectedCategory
    );
  }, [selectedCategory]);

  // Measure and cache dimensions only on resize / filter change (ZERO layout thrashing on scroll)
  const updateMetrics = useCallback(() => {
    const desktop = window.innerWidth >= 768;
    setIsDesktop(desktop);

    if (desktop && outerWrapperRef.current && trackRef.current) {
      const scrollableDistance = Math.max(
        1,
        outerWrapperRef.current.offsetHeight - window.innerHeight
      );

      // Total track scroll width minus visible track container viewport
      const trackWidth = trackRef.current.scrollWidth;
      const visibleWidth = window.innerWidth;
      const maxTranslation = Math.max(0, trackWidth - visibleWidth + 60);

      metricsRef.current = {
        scrollableDistance,
        maxTranslation
      };
    }
  }, []);

  // Set up scroll listener with direct DOM mutation (ZERO React re-renders during scroll)
  useEffect(() => {
    updateMetrics();

    // Re-measure after initial layout and image settling
    const timer = setTimeout(updateMetrics, 200);

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.innerWidth >= 768 && outerWrapperRef.current && trackRef.current) {
            const rect = outerWrapperRef.current.getBoundingClientRect();
            const { scrollableDistance, maxTranslation } = metricsRef.current;

            if (scrollableDistance > 0) {
              const currentScroll = -rect.top;
              const progress = Math.min(Math.max(currentScroll / scrollableDistance, 0), 1);
              const translation = progress * maxTranslation;

              // 1. Direct hardware-accelerated transform (No React state jank)
              trackRef.current.style.transform = `translate3d(-${translation.toFixed(1)}px, 0, 0)`;

              // 2. Direct progress bar update
              const pct = Math.round(progress * 100);
              if (progressFillRef.current) {
                progressFillRef.current.style.width = `${progress * 100}%`;
              }
              if (progressValueRef.current) {
                progressValueRef.current.textContent = `${pct}%`;
              }

              // 3. Update step button states
              if (prevBtnRef.current) {
                prevBtnRef.current.disabled = pct <= 2;
              }
              if (nextBtnRef.current) {
                nextBtnRef.current.disabled = pct >= 98;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', () => {
      updateMetrics();
      handleScroll();
    });

    // Run initial positioning
    handleScroll();

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateMetrics);
    };
  }, [filteredArticles, updateMetrics]);

  // Desktop manual step navigation (Prev / Next)
  const handleStepScroll = (direction) => {
    if (outerWrapperRef.current) {
      const scrollStep = window.innerHeight * 0.4;
      window.scrollBy({
        top: direction === 'next' ? scrollStep : -scrollStep,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      ref={outerWrapperRef}
      className={styles.journalOuterWrapper} 
      id="blog"
      aria-labelledby="journal-heading"
    >
      <div className={styles.stickyFrame}>
        {/* Subtle Ambient Glows */}
        <div className={styles.ambientGlowPrimary} aria-hidden="true" />
        <div className={styles.ambientGlowSecondary} aria-hidden="true" />

        {/* Top Header Block */}
        <div className={styles.headerContainer}>
          <div className={styles.headerBlock}>
            {/* Eyebrow Pill */}
            <div className={styles.eyebrowBadge}>
              <BookOpen size={13} className={styles.eyebrowIcon} aria-hidden="true" />
              <span>I-Medita Knowledge Base & Insights</span>
            </div>

            {/* Main Title */}
            <h2 id="journal-heading" className={styles.sectionHeading}>
              Insights That Move Your{' '}
              <span className={styles.titleGradient}>Career Forward</span>
            </h2>

            {/* Subtext */}
            <p className={styles.sectionSubtext}>
              Explore the latest insights, technical guides, industry trends, and career resources from I-Medita.
            </p>

            {/* Category Filter Pills */}
            <div className={styles.filterTrack} role="tablist" aria-label="Journal Topic Filters">
              {EDITORIAL_CATEGORIES.map((cat) => {
                const isSelected = selectedCategory === cat;
                const count = cat === 'All Insights' 
                  ? EDITORIAL_ARTICLES.length 
                  : EDITORIAL_ARTICLES.filter(a => a.category === cat).length;

                return (
                  <button
                    key={cat}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => {
                      setSelectedCategory(cat);
                    }}
                    className={`${styles.filterPill} ${isSelected ? styles.filterPillActive : ''}`}
                  >
                    <span>{cat}</span>
                    <span className={styles.countBadge}>{count}</span>
                  </button>
                );
              })}
            </div>

            {/* Controls Bar: Progress Bar + Step Navigation */}
            <div className={styles.controlsRow}>
              <div className={styles.progressContainer}>
                <div className={styles.progressLabelRow}>
                  <span className={styles.progressLabel}>Reel Progress</span>
                  <span ref={progressValueRef} className={styles.progressValue}>0%</span>
                </div>
                <div className={styles.progressBarWrapper}>
                  <div 
                    ref={progressFillRef}
                    className={styles.progressBarFill}
                    style={{ width: '0%' }}
                  />
                </div>
              </div>

              {/* Desktop Prev / Next Step Buttons */}
              <div className={styles.navControls}>
                <button
                  ref={prevBtnRef}
                  type="button"
                  onClick={() => handleStepScroll('prev')}
                  className={styles.navButton}
                  aria-label="Previous article"
                  disabled={true}
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  ref={nextBtnRef}
                  type="button"
                  onClick={() => handleStepScroll('next')}
                  className={styles.navButton}
                  aria-label="Next article"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Article Track Stage */}
        <div className={styles.trackContainer}>
          <div
            ref={trackRef}
            className={styles.horizontalTrack}
          >
            {filteredArticles.map((article, index) => (
              <EditorialScrollCard
                key={article.id}
                article={article}
                index={index}
                total={filteredArticles.length}
              />
            ))}

            {/* Archive / View-All Guide Card at the end */}
            <ArchiveScrollCard totalArticles={EDITORIAL_ARTICLES.length} />
          </div>
        </div>

        {/* Mobile Swipe Guidance Note */}
        <div className={styles.mobileSwipeIndicator}>
          <span>Swipe horizontally to explore all guides →</span>
        </div>
      </div>
    </section>
  );
}

export default EditorialJournalSection;
