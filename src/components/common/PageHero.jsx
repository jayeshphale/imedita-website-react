import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home, Sparkles, Star } from 'lucide-react';
import styles from './PageHero.module.css';

/**
 * Global PageHero Component for Inner/Individual Pages
 * Clean, balanced, and modern across Contact Us, About Us, Policies, Support, etc.
 */
export function PageHero({
  breadcrumbs = [],
  badge,
  title,
  description,
  actions,
  stats,
  variant = 'default',
  align = 'center',
  children,
  className = ''
}) {
  const isLeft = align === 'left';

  return (
    <header 
      className={`${styles.heroWrapper} ${styles['variant_' + variant]} ${className}`}
      aria-label={typeof title === 'string' ? title : 'Page Header'}
    >
      {/* Clean, subtle aurora ambient glow */}
      <div className={styles.auroraGlow} aria-hidden="true" />
      <div className={styles.subtleGrid} aria-hidden="true" />

      <div className={styles.container}>
        
        {/* 1. BREADCRUMBS */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className={`${styles.breadcrumbNav} ${isLeft ? styles.alignLeft : styles.alignCenter}`} aria-label="Breadcrumb">
            <ol className={styles.breadcrumbList}>
              <li className={styles.breadcrumbItem}>
                <Link to="/" className={styles.breadcrumbLink} title="Home">
                  <Home size={13} className={styles.homeIcon} />
                  <span>Home</span>
                </Link>
              </li>

              {breadcrumbs.map((crumb, idx) => {
                const isLast = idx === breadcrumbs.length - 1;
                if (idx === 0 && crumb.label.toLowerCase() === 'home') return null;

                return (
                  <li key={idx} className={styles.breadcrumbItem}>
                    <ChevronRight size={13} className={styles.breadcrumbChevron} aria-hidden="true" />
                    {isLast || !crumb.path ? (
                      <span className={styles.breadcrumbCurrent} aria-current="page">
                        {crumb.label}
                      </span>
                    ) : (
                      <Link to={crumb.path} className={styles.breadcrumbLink}>
                        {crumb.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        )}

        {/* 2. HERO CONTENT AREA */}
        <div className={`${styles.contentBox} ${isLeft ? styles.contentLeft : styles.contentCenter}`}>
          
          {/* Eyebrow Badge */}
          {badge && (
            <div className={styles.eyebrowBadge}>
              {badge.pulse !== false && (
                <span className={styles.badgePulseDot} aria-hidden="true" />
              )}
              {badge.icon && React.createElement(badge.icon, { size: 14, className: styles.badgeIcon })}
              <span className={styles.badgeText}>
                {typeof badge === 'string' ? badge : badge.text}
              </span>
            </div>
          )}

          {/* Headline */}
          <h1 className={styles.mainHeadline}>
            {title}
          </h1>

          {/* Subheadline */}
          {description && (
            <p className={styles.subheadline}>
              {description}
            </p>
          )}

          {/* Action CTAs */}
          {actions && (
            <div className={`${styles.actionsRow} ${isLeft ? styles.actionsLeft : styles.actionsCenter}`}>
              {actions}
            </div>
          )}

          {/* Custom Slot */}
          {children && (
            <div className={styles.customSlot}>
              {children}
            </div>
          )}

          {/* 3. SOCIAL PROOF / METRICS RIBBON (Clean, non-pill balanced strip) */}
          {stats && stats.length > 0 && (
            <div className={`${styles.statsContainer} ${isLeft ? styles.statsLeft : styles.statsCenter}`}>
              <div className={styles.statsStrip}>
                {stats.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <React.Fragment key={i}>
                      {i > 0 && <span className={styles.statDivider} aria-hidden="true">•</span>}
                      <div className={styles.statItem}>
                        {item.isStar ? (
                          <div className={styles.starsGroup}>
                            {[...Array(5)].map((_, s) => (
                              <Star key={s} size={13} fill="#F59E0B" color="#F59E0B" className={styles.starIcon} />
                            ))}
                          </div>
                        ) : (
                          Icon && <Icon size={16} className={styles.statIcon} />
                        )}
                        <span className={styles.statLabel}>{item.label}</span>
                        {item.subtext && (
                          <span className={styles.statSubtext}>{item.subtext}</span>
                        )}
                      </div>
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          )}

        </div>

      </div>
    </header>
  );
}

export default PageHero;
