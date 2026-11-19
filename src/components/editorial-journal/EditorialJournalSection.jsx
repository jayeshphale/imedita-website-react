import React, { useRef, useEffect, useState, useMemo } from 'react';
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
  const [translateX, setTranslateX] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
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

  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    checkIsDesktop();

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.innerWidth >= 768 && outerWrapperRef.current && trackRef.current) {
            const rect = outerWrapperRef.current.getBoundingClientRect();
            const scrollableDistance = outerWrapperRef.current.offsetHeight - window.innerHeight;

            if (scrollableDistance > 0) {
              const currentScroll = -rect.top;
              const progress = Math.min(Math.max(currentScroll / scrollableDistance, 0), 1);

              // Calculate max horizontal travel with generous right margin
              const maxTrackTranslation = Math.max(
                0,
                trackRef.current.scrollWidth - window.innerWidth + 40
              );

              setTranslateX(progress * maxTrackTranslation);
              setScrollProgress(progress * 100);
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', () => {
      checkIsDesktop();
      handleScroll();
    });

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [filteredArticles]);

  // Desktop manual step navigation (Prev / Next)
  const handleStepScroll = (direction) => {
    if (outerWrapperRef.current) {
      const scrollStep = window.innerHeight * 0.45;
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
              <BookOpen size={14} className={styles.eyebrowIcon} aria-hidden="true" />
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
                  <span className={styles.progressValue}>{Math.round(scrollProgress)}%</span>
                </div>
                <div className={styles.progressBarWrapper}>
                  <div 
                    className={styles.progressBarFill}
                    style={{ width: `${scrollProgress}%` }}
                  />
                </div>
              </div>

              {/* Desktop Prev / Next Step Buttons */}
              <div className={styles.navControls}>
                <button
                  type="button"
                  onClick={() => handleStepScroll('prev')}
                  className={styles.navButton}
                  aria-label="Previous article"
                  disabled={scrollProgress <= 2}
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={() => handleStepScroll('next')}
                  className={styles.navButton}
                  aria-label="Next article"
                  disabled={scrollProgress >= 98}
                >
                  <ChevronRight size={18} />
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
            style={{
              transform: isDesktop ? `translate3d(-${translateX}px, 0, 0)` : 'none'
            }}
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
