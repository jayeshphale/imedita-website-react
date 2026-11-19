import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight, ArrowUpRight, Sparkles, BookOpen, UserCheck, Calendar } from 'lucide-react';
import styles from './EditorialScrollCard.module.css';

export function EditorialScrollCard({ article, index, total }) {
  const {
    id,
    month,
    day,
    year,
    title,
    excerpt,
    category,
    image,
    readTime,
    author,
    url,
    isInternal = false,
    featuredBadge,
    highlights = []
  } = article;

  const LinkComponent = isInternal ? Link : 'a';
  const linkProps = isInternal 
    ? { to: url } 
    : { href: url, target: '_blank', rel: 'noopener noreferrer' };

  return (
    <article 
      className={`${styles.card} ${featuredBadge ? styles.cardFeatured : ''}`} 
      id={id}
      data-article-id={id}
    >
      {/* Top Media Header */}
      <div className={styles.mediaWrap}>
        <LinkComponent {...linkProps} className={styles.imageLink} aria-label={`Read article: ${title}`} tabIndex={-1}>
          <img 
            src={image} 
            alt={title} 
            loading="lazy" 
            className={styles.cardImg}
            onError={(e) => {
              e.currentTarget.src = '/server-datacenter-engineer.webp';
            }}
          />
        </LinkComponent>

        {/* Date Pill (Calendiary-inspired date badge) */}
        <div className={styles.dateBadge}>
          <Calendar size={11} className={styles.dateIcon} aria-hidden="true" />
          <span>{day} {month} {year}</span>
        </div>

        {/* Category Pill */}
        <div className={styles.categoryBadge}>
          {category}
        </div>

        {/* Featured Tag */}
        {featuredBadge && (
          <div className={styles.featuredBadge}>
            <Sparkles size={11} className={styles.featuredIcon} aria-hidden="true" />
            <span>{featuredBadge}</span>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className={styles.cardBody}>
        {/* Read Time & Index */}
        <div className={styles.metaRow}>
          <div className={styles.readTime}>
            <Clock size={12} className={styles.metaIcon} aria-hidden="true" />
            <span>{readTime}</span>
          </div>
          <span className={styles.indexCounter}>
            {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>
        </div>

        {/* Title */}
        <h3 className={styles.cardTitle}>
          <LinkComponent {...linkProps} className={styles.titleLink}>
            {title}
          </LinkComponent>
        </h3>

        {/* Excerpt */}
        <p className={styles.cardExcerpt}>
          {excerpt}
        </p>

        {/* Highlights if available (e.g. for featured guide) */}
        {highlights && highlights.length > 0 && (
          <ul className={styles.highlightList} aria-label="Article takeaways">
            {highlights.slice(0, 2).map((item, i) => (
              <li key={i} className={styles.highlightItem}>
                <span className={styles.bulletDot} aria-hidden="true">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Footer: Author & Action Button */}
        <div className={styles.cardFooter}>
          {author && (
            <div className={styles.authorCapsule}>
              {author.image ? (
                <img 
                  src={author.image} 
                  alt={author.name} 
                  className={styles.authorAvatar}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              ) : (
                <div className={styles.authorFallback}>
                  <UserCheck size={12} />
                </div>
              )}
              <div className={styles.authorInfo}>
                <span className={styles.authorName}>{author.name}</span>
                <span className={styles.authorCredential}>{author.credential}</span>
              </div>
            </div>
          )}

          <LinkComponent {...linkProps} className={styles.ctaButton} aria-label={`Read guide: ${title}`}>
            <span>Read Guide</span>
            {isInternal ? (
              <ArrowRight size={14} className={styles.ctaIcon} aria-hidden="true" />
            ) : (
              <ArrowUpRight size={14} className={styles.ctaIcon} aria-hidden="true" />
            )}
          </LinkComponent>
        </div>
      </div>
    </article>
  );
}

/**
 * Dedicated Archive / View-All Card at the end of the horizontal track
 */
export function ArchiveScrollCard({ totalArticles }) {
  return (
    <article className={`${styles.card} ${styles.archiveCard}`}>
      <div className={styles.archiveInner}>
        <div className={styles.archiveIconWrap}>
          <BookOpen size={28} className={styles.archiveIcon} />
        </div>

        <span className={styles.archiveEyebrow}>KNOWLEDGE ARCHIVE</span>
        
        <h3 className={styles.archiveTitle}>
          Explore All Technical Guides & Architecture Blueprints
        </h3>

        <p className={styles.archiveExcerpt}>
          Browse our complete repository of 100+ deep-dive guides covering CCNA, CCNP Enterprise, AWS Solutions Architect, Palo Alto Firewalls, and Python Network Automation.
        </p>

        <div className={styles.archiveTags}>
          <span className={styles.archiveTag}>AWS Cloud</span>
          <span className={styles.archiveTag}>Cisco CCNA</span>
          <span className={styles.archiveTag}>CCNP Enterprise</span>
          <span className={styles.archiveTag}>Cybersecurity</span>
          <span className={styles.archiveTag}>Python Automation</span>
        </div>

        <a 
          href="https://www.imedita.com/blog/" 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.archiveCtaButton}
        >
          <span>Visit Official Blog Archive</span>
          <ArrowUpRight size={16} />
        </a>

        <div className={styles.archiveStats}>
          <span>✓ 100+ Published Guides</span>
          <span>✓ CCIE & AWS Architect Reviewed</span>
        </div>
      </div>
    </article>
  );
}

export default EditorialScrollCard;
