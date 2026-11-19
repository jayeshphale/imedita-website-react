import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Clock, 
  ArrowRight, 
  ArrowUpRight, 
  Sparkles, 
  Calendar,
  Layers,
  ChevronRight,
  ExternalLink,
  ShieldCheck,
  TrendingUp,
  Award
} from 'lucide-react';
import { EDITORIAL_ARTICLES, EDITORIAL_CATEGORIES } from './editorialJournalData';
import styles from './EditorialJournalSection.module.css';

export function EditorialJournalSection() {
  const [selectedCategory, setSelectedCategory] = useState('All Insights');

  // Filter articles based on active category
  const filteredArticles = useMemo(() => {
    if (selectedCategory === 'All Insights') {
      return EDITORIAL_ARTICLES;
    }
    return EDITORIAL_ARTICLES.filter(
      (article) => article.category === selectedCategory
    );
  }, [selectedCategory]);

  // Featured article (AWS Cost or first item in filtered set)
  const featuredArticle = filteredArticles[0] || EDITORIAL_ARTICLES[0];
  // Side stack articles (items 1, 2, 3)
  const sideArticles = filteredArticles.slice(1, 4);
  // Bottom grid articles (items 4, 5, 6)
  const bottomArticles = filteredArticles.slice(4, 7);

  return (
    <section className={styles.section} id="blog" aria-labelledby="journal-heading">
      {/* Subtle ambient lighting */}
      <div className={styles.ambientGlowTop} aria-hidden="true" />
      <div className={styles.ambientGlowBottom} aria-hidden="true" />

      <div className={styles.container}>
        {/* ================= 1. SECTION HEADER ================= */}
        <header className={styles.header}>
          <div className={styles.eyebrowBadge}>
            <BookOpen size={14} className={styles.eyebrowIcon} aria-hidden="true" />
            <span>I-MEDITA TECH JOURNAL • 2026 EDITION</span>
          </div>

          <h2 id="journal-heading" className={styles.sectionHeading}>
            Insights That Move Your{' '}
            <span className={styles.titleGradient}>Career Forward</span>
          </h2>

          <p className={styles.sectionSubtext}>
            Practical enterprise network blueprints, official cloud fee breakdowns, and job interview playbooks written by certified CCIE & AWS architects.
          </p>

          {/* Interactive Category Filter Pills */}
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
                  onClick={() => setSelectedCategory(cat)}
                  className={`${styles.filterPill} ${isSelected ? styles.filterPillActive : ''}`}
                >
                  <span>{cat}</span>
                  <span className={styles.countBadge}>{count}</span>
                </button>
              );
            })}
          </div>
        </header>

        {/* ================= 2. MAIN BENTO EDITORIAL SHOWCASE ================= */}
        <div className={styles.bentoShowcase}>
          {/* LEFT: Featured Flagship Article Card */}
          {featuredArticle && (
            <div className={styles.featuredColumn}>
              <article className={styles.featuredCard}>
                <div className={styles.featuredMediaWrap}>
                  {featuredArticle.isInternal ? (
                    <Link to={featuredArticle.url} className={styles.featuredImageLink} tabIndex={-1}>
                      <img 
                        src={featuredArticle.image || '/server-datacenter-engineer.jpg'} 
                        alt={featuredArticle.title}
                        className={styles.featuredImage}
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = '/server-datacenter-engineer.jpg';
                        }}
                      />
                    </Link>
                  ) : (
                    <a href={featuredArticle.url} target="_blank" rel="noopener noreferrer" className={styles.featuredImageLink} tabIndex={-1}>
                      <img 
                        src={featuredArticle.image || '/server-datacenter-engineer.jpg'} 
                        alt={featuredArticle.title}
                        className={styles.featuredImage}
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = '/server-datacenter-engineer.jpg';
                        }}
                      />
                    </a>
                  )}

                  {/* Badges on image */}
                  <div className={styles.featuredMediaTopRow}>
                    <div className={styles.dateBadge}>
                      <Calendar size={12} className={styles.dateIcon} aria-hidden="true" />
                      <span>{featuredArticle.day} {featuredArticle.month} {featuredArticle.year}</span>
                    </div>

                    <div className={styles.categoryBadge}>
                      {featuredArticle.category}
                    </div>
                  </div>

                  <div className={styles.featuredFlagPill}>
                    <Sparkles size={12} className={styles.flagIcon} aria-hidden="true" />
                    <span>{featuredArticle.featuredBadge || 'Featured Architecture Guide'}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className={styles.featuredBody}>
                  <div className={styles.featuredMetaRow}>
                    <div className={styles.readTime}>
                      <Clock size={13} className={styles.metaIcon} aria-hidden="true" />
                      <span>{featuredArticle.readTime}</span>
                    </div>
                    <span className={styles.architectBadge}>Verified by CCIE #46962</span>
                  </div>

                  <h3 className={styles.featuredTitle}>
                    {featuredArticle.isInternal ? (
                      <Link to={featuredArticle.url} className={styles.titleLink}>
                        {featuredArticle.title}
                      </Link>
                    ) : (
                      <a href={featuredArticle.url} target="_blank" rel="noopener noreferrer" className={styles.titleLink}>
                        {featuredArticle.title}
                      </a>
                    )}
                  </h3>

                  <p className={styles.featuredExcerpt}>
                    {featuredArticle.excerpt}
                  </p>

                  {/* Highlights / Key takeaways */}
                  {featuredArticle.highlights && featuredArticle.highlights.length > 0 && (
                    <div className={styles.takeawaysWrap}>
                      <span className={styles.takeawaysLabel}>KEY TAKEAWAYS IN THIS GUIDE:</span>
                      <ul className={styles.takeawaysList}>
                        {featuredArticle.highlights.map((item, i) => (
                          <li key={i} className={styles.takeawayItem}>
                            <span className={styles.takeawayCheck} aria-hidden="true">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Footer */}
                  <div className={styles.featuredFooter}>
                    {featuredArticle.author && (
                      <div className={styles.authorCapsule}>
                        {featuredArticle.author.image ? (
                          <img 
                            src={featuredArticle.author.image} 
                            alt={featuredArticle.author.name} 
                            className={styles.authorAvatar}
                            onError={(e) => { e.currentTarget.style.display = 'none'; }}
                          />
                        ) : (
                          <div className={styles.authorFallback}>
                            <Award size={14} />
                          </div>
                        )}
                        <div className={styles.authorMeta}>
                          <span className={styles.authorName}>{featuredArticle.author.name}</span>
                          <span className={styles.authorCredential}>{featuredArticle.author.credential}</span>
                        </div>
                      </div>
                    )}

                    {featuredArticle.isInternal ? (
                      <Link to={featuredArticle.url} className={styles.featuredCtaBtn}>
                        <span>Read Complete Guide</span>
                        <ArrowRight size={15} className={styles.ctaIcon} aria-hidden="true" />
                      </Link>
                    ) : (
                      <a href={featuredArticle.url} target="_blank" rel="noopener noreferrer" className={styles.featuredCtaBtn}>
                        <span>Read Guide</span>
                        <ArrowUpRight size={15} className={styles.ctaIcon} aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </div>
          )}

          {/* RIGHT: Top Editorial Stack (3 horizontal cards) */}
          <div className={styles.sideStackColumn}>
            <div className={styles.sideStackHeader}>
              <span className={styles.sideStackTitle}>LATEST FIELD GUIDES</span>
              <span className={styles.sideStackSubtitle}>Direct from our Pune Datacenter Lab</span>
            </div>

            <div className={styles.sideStackList}>
              {sideArticles.map((article) => {
                const LinkComponent = article.isInternal ? Link : 'a';
                const linkProps = article.isInternal 
                  ? { to: article.url } 
                  : { href: article.url, target: '_blank', rel: 'noopener noreferrer' };

                return (
                  <article key={article.id} className={styles.sideCard}>
                    <div className={styles.sideMediaWrap}>
                      <LinkComponent {...linkProps} className={styles.sideImageLink} tabIndex={-1}>
                        <img 
                          src={article.image || '/server-datacenter-engineer.jpg'} 
                          alt={article.title}
                          className={styles.sideImage}
                          onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = '/server-datacenter-engineer.jpg';
                          }}
                        />
                      </LinkComponent>
                    </div>

                    <div className={styles.sideCardBody}>
                      <div className={styles.sideMetaRow}>
                        <span className={styles.sideCategoryBadge}>{article.category}</span>
                        <span className={styles.sideReadTime}>
                          <Clock size={11} className={styles.metaIcon} aria-hidden="true" />
                          {article.readTime}
                        </span>
                      </div>

                      <h4 className={styles.sideTitle}>
                        <LinkComponent {...linkProps} className={styles.titleLink}>
                          {article.title}
                        </LinkComponent>
                      </h4>

                      <p className={styles.sideExcerpt}>
                        {article.excerpt}
                      </p>

                      <div className={styles.sideFooter}>
                        <span className={styles.sideDate}>
                          <Calendar size={11} className={styles.dateIcon} aria-hidden="true" />
                          {article.day} {article.month} {article.year}
                        </span>

                        <LinkComponent {...linkProps} className={styles.sideActionLink}>
                          <span>Read</span>
                          {article.isInternal ? <ArrowRight size={13} /> : <ArrowUpRight size={13} />}
                        </LinkComponent>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>

        {/* ================= 3. SECONDARY EDITORIAL GRID (3 COLUMNS) ================= */}
        {bottomArticles.length > 0 && (
          <div className={styles.bottomGridSection}>
            <div className={styles.bottomGridHeader}>
              <h3 className={styles.bottomGridHeading}>Architecture Blueprints & Career Roadmaps</h3>
              <p className={styles.bottomGridSubtext}>Engineered for freshers, network engineers, and cloud architects aiming for ₹8–25 LPA milestones.</p>
            </div>

            <div className={styles.bottomGrid}>
              {bottomArticles.map((article) => {
                const LinkComponent = article.isInternal ? Link : 'a';
                const linkProps = article.isInternal 
                  ? { to: article.url } 
                  : { href: article.url, target: '_blank', rel: 'noopener noreferrer' };

                return (
                  <article key={article.id} className={styles.gridCard}>
                    <div className={styles.gridMediaWrap}>
                      <LinkComponent {...linkProps} className={styles.gridImageLink} tabIndex={-1}>
                        <img 
                          src={article.image || '/server-datacenter-engineer.jpg'} 
                          alt={article.title}
                          className={styles.gridImage}
                          onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = '/server-datacenter-engineer.jpg';
                          }}
                        />
                      </LinkComponent>

                      <div className={styles.gridTopRow}>
                        <span className={styles.dateBadge}>
                          <Calendar size={11} className={styles.dateIcon} aria-hidden="true" />
                          {article.day} {article.month} {article.year}
                        </span>
                        <span className={styles.categoryBadge}>{article.category}</span>
                      </div>
                    </div>

                    <div className={styles.gridCardBody}>
                      <div className={styles.gridMetaRow}>
                        <span className={styles.gridReadTime}>
                          <Clock size={12} className={styles.metaIcon} aria-hidden="true" />
                          {article.readTime}
                        </span>
                        {article.featuredBadge && (
                          <span className={styles.gridFeatureTag}>{article.featuredBadge}</span>
                        )}
                      </div>

                      <h4 className={styles.gridTitle}>
                        <LinkComponent {...linkProps} className={styles.titleLink}>
                          {article.title}
                        </LinkComponent>
                      </h4>

                      <p className={styles.gridExcerpt}>
                        {article.excerpt}
                      </p>

                      <div className={styles.gridFooter}>
                        {article.author && (
                          <div className={styles.gridAuthor}>
                            <span className={styles.gridAuthorName}>{article.author.name}</span>
                            <span className={styles.gridAuthorCred}>{article.author.credential.split('&')[0]}</span>
                          </div>
                        )}

                        <LinkComponent {...linkProps} className={styles.gridBtn}>
                          <span>Read Guide</span>
                          {article.isInternal ? <ArrowRight size={13} /> : <ArrowUpRight size={13} />}
                        </LinkComponent>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        )}

        {/* ================= 4. KNOWLEDGE ARCHIVE CTA BANNER ================= */}
        <div className={styles.archiveBanner}>
          <div className={styles.archiveContent}>
            <div className={styles.archiveBadge}>
              <Sparkles size={14} className={styles.archiveIcon} aria-hidden="true" />
              <span>OFFICIAL KNOWLEDGE REPOSITORY</span>
            </div>
            <h3 className={styles.archiveTitle}>
              Looking for a Specific Blueprint, Exam Voucher, or Interview Guide?
            </h3>
            <p className={styles.archiveText}>
              Browse over 100+ production networking tutorials, Cisco lab setup instructions, and certification price calculators on our official technical blog.
            </p>
            <div className={styles.archiveTags}>
              <span className={styles.archiveTag}>Cisco CCNA (200-301)</span>
              <span className={styles.archiveTag}>AWS Solutions Architect</span>
              <span className={styles.archiveTag}>CCNP Enterprise</span>
              <span className={styles.archiveTag}>Palo Alto PCNSE</span>
              <span className={styles.archiveTag}>Python Netmiko</span>
            </div>
          </div>

          <div className={styles.archiveAction}>
            <a 
              href="https://www.imedita.com/blog/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.archiveBtn}
            >
              <span>Explore All 100+ Guides</span>
              <ArrowUpRight size={16} />
            </a>
            <span className={styles.archiveNote}>Updated weekly by certified CCIE instructors</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default EditorialJournalSection;
