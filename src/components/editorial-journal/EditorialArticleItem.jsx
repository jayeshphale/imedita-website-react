import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Clock, 
  ArrowRight, 
  ArrowUpRight, 
  CheckCircle2, 
  Sparkles, 
  Quote, 
  ExternalLink 
} from 'lucide-react';
import styles from './EditorialArticleItem.module.css';

export function EditorialArticleItem({ article }) {
  const {
    id,
    title,
    excerpt,
    category,
    badgeColor = 'blue',
    image,
    readTime,
    author,
    url,
    isInternal = false,
    variant = 'compact-horizontal',
    featuredBadge,
    highlights,
    quoteAuthor
  } = article;

  const LinkComponent = isInternal ? Link : 'a';
  const linkProps = isInternal 
    ? { to: url } 
    : { href: url, target: '_blank', rel: 'noopener noreferrer' };

  // ================= VARIANT 1: FEATURED LARGE =================
  if (variant === 'featured-large') {
    return (
      <article className={`${styles.card} ${styles.cardFeatured}`} id={id}>
        <div className={styles.featuredMediaWrap}>
          <LinkComponent {...linkProps} className={styles.imageLink} aria-label={`Read article: ${title}`}>
            <img 
              src={image} 
              alt={title} 
              loading="lazy" 
              className={styles.featuredImage}
              onError={(e) => {
                e.target.src = '/server-datacenter-engineer.webp';
              }}
            />
            <div className={styles.imageOverlay} />
          </LinkComponent>

          <div className={styles.featuredTopRow}>
            {featuredBadge && (
              <span className={styles.featuredRibbon}>
                <Sparkles size={12} aria-hidden="true" />
                <span>{featuredBadge}</span>
              </span>
            )}
            <span className={`${styles.categoryBadge} ${styles[`badge_${badgeColor}`]}`}>
              {category}
            </span>
          </div>
        </div>

        <div className={styles.featuredContent}>
          <div className={styles.metaRow}>
            <span className={styles.readTime}>
              <Clock size={13} className={styles.metaIcon} aria-hidden="true" />
              <span>{readTime}</span>
            </span>
          </div>

          <h3 className={styles.featuredTitle}>
            <LinkComponent {...linkProps} className={styles.titleLink}>
              {title}
            </LinkComponent>
          </h3>

          <p className={styles.featuredExcerpt}>{excerpt}</p>

          {highlights && highlights.length > 0 && (
            <div className={styles.highlightsBox}>
              <span className={styles.highlightsTitle}>Key Architectural Takeaways:</span>
              <ul className={styles.highlightsList}>
                {highlights.map((h, idx) => (
                  <li key={idx} className={styles.highlightItem}>
                    <CheckCircle2 size={14} className={styles.checkIcon} aria-hidden="true" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className={styles.footerRow}>
            {author && (
              <div className={styles.authorGroup}>
                <img 
                  src={author.image} 
                  alt={author.name} 
                  className={styles.authorAvatar}
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                <div className={styles.authorInfo}>
                  <span className={styles.authorName}>{author.name}</span>
                  <span className={styles.authorCred}>{author.credential}</span>
                </div>
              </div>
            )}

            <LinkComponent {...linkProps} className={styles.actionBtn}>
              <span>Read Complete Guide</span>
              <ArrowRight size={16} className={styles.actionArrow} aria-hidden="true" />
            </LinkComponent>
          </div>
        </div>
      </article>
    );
  }

  // ================= VARIANT 2 & 3: SPLIT HORIZONTAL (NORMAL & REVERSE) =================
  if (variant === 'split-horizontal' || variant === 'split-horizontal-reverse') {
    const isReverse = variant === 'split-horizontal-reverse';

    return (
      <article className={`${styles.card} ${styles.cardSplit} ${isReverse ? styles.cardSplitReverse : ''}`} id={id}>
        <div className={styles.splitMediaWrap}>
          <LinkComponent {...linkProps} className={styles.imageLink} aria-label={`Read article: ${title}`}>
            <img 
              src={image} 
              alt={title} 
              loading="lazy" 
              className={styles.splitImage}
              onError={(e) => {
                e.target.src = '/career-roadmap.webp';
              }}
            />
          </LinkComponent>
        </div>

        <div className={styles.splitContent}>
          <div className={styles.cardHeaderMeta}>
            <span className={`${styles.categoryBadge} ${styles[`badge_${badgeColor}`]}`}>
              {category}
            </span>
            <span className={styles.readTime}>
              <Clock size={12} className={styles.metaIcon} aria-hidden="true" />
              <span>{readTime}</span>
            </span>
          </div>

          <h3 className={styles.splitTitle}>
            <LinkComponent {...linkProps} className={styles.titleLink}>
              {title}
            </LinkComponent>
          </h3>

          <p className={styles.splitExcerpt}>{excerpt}</p>

          <div className={styles.footerRow}>
            {author && (
              <div className={styles.authorGroup}>
                <img 
                  src={author.image} 
                  alt={author.name} 
                  className={styles.authorAvatarSmall}
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                <span className={styles.authorNameSmall}>{author.name}</span>
              </div>
            )}

            <LinkComponent {...linkProps} className={styles.textLink}>
              <span>Read Article</span>
              <ArrowUpRight size={15} className={styles.arrowIcon} aria-hidden="true" />
            </LinkComponent>
          </div>
        </div>
      </article>
    );
  }

  // ================= VARIANT 4: TEXT FOCUSED (EDITORIAL PULLQUOTE / INSIGHT) =================
  if (variant === 'text-focused') {
    return (
      <article className={`${styles.card} ${styles.cardTextFocused}`} id={id}>
        <div className={styles.quoteIconBadge}>
          <Quote size={20} className={styles.quoteIcon} aria-hidden="true" />
        </div>

        <div className={styles.cardHeaderMeta}>
          <span className={`${styles.categoryBadge} ${styles[`badge_${badgeColor}`]}`}>
            {category}
          </span>
          <span className={styles.readTime}>
            <Clock size={12} className={styles.metaIcon} aria-hidden="true" />
            <span>{readTime}</span>
          </span>
        </div>

        <h3 className={styles.textFocusedTitle}>
          <LinkComponent {...linkProps} className={styles.titleLink}>
            {title}
          </LinkComponent>
        </h3>

        <blockquote className={styles.quoteBlock}>
          <p className={styles.quoteParagraph}>{excerpt}</p>
          {quoteAuthor && (
            <footer className={styles.quoteAuthorText}>
              — {quoteAuthor}
            </footer>
          )}
        </blockquote>

        <div className={styles.footerRow}>
          {author && (
            <div className={styles.authorGroup}>
              <img 
                src={author.image} 
                alt={author.name} 
                className={styles.authorAvatarSmall}
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <span className={styles.authorNameSmall}>{author.name}</span>
            </div>
          )}

          <LinkComponent {...linkProps} className={styles.textLink}>
            <span>Read Architecture Blueprint</span>
            <ArrowUpRight size={15} className={styles.arrowIcon} aria-hidden="true" />
          </LinkComponent>
        </div>
      </article>
    );
  }

  // ================= VARIANT 5: COMPACT HORIZONTAL (DEFAULT) =================
  return (
    <article className={`${styles.card} ${styles.cardCompact}`} id={id}>
      <div className={styles.compactMain}>
        <div className={styles.cardHeaderMeta}>
          <span className={`${styles.categoryBadge} ${styles[`badge_${badgeColor}`]}`}>
            {category}
          </span>
          <span className={styles.readTime}>
            <Clock size={12} className={styles.metaIcon} aria-hidden="true" />
            <span>{readTime}</span>
          </span>
        </div>

        <h3 className={styles.compactTitle}>
          <LinkComponent {...linkProps} className={styles.titleLink}>
            {title}
          </LinkComponent>
        </h3>

        <p className={styles.compactExcerpt}>{excerpt}</p>

        <div className={styles.compactFooter}>
          {author && (
            <div className={styles.authorGroup}>
              <img 
                src={author.image} 
                alt={author.name} 
                className={styles.authorAvatarSmall}
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <span className={styles.authorNameSmall}>{author.name}</span>
            </div>
          )}

          <LinkComponent {...linkProps} className={styles.textLink}>
            <span>Read Guide</span>
            <ArrowRight size={14} className={styles.arrowIcon} aria-hidden="true" />
          </LinkComponent>
        </div>
      </div>

      {image && (
        <div className={styles.compactThumbnailWrap}>
          <LinkComponent {...linkProps} className={styles.imageLink} aria-label={`Read article: ${title}`}>
            <img 
              src={image} 
              alt={title} 
              loading="lazy" 
              className={styles.compactThumbnail}
              onError={(e) => {
                e.target.src = '/server-datacenter-engineer.webp';
              }}
            />
          </LinkComponent>
        </div>
      )}
    </article>
  );
}

export default EditorialArticleItem;
