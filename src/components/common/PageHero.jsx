import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home, Sparkles, Star } from 'lucide-react';
import styles from './PageHero.module.css';

/**
 * Global PageHero Component for Inner/Individual Pages
 * Clean, balanced, and modern across Contact Us, About Us, Policies, Support, etc.
 * 
 * @param {Object} props
 * @param {Array<{ label: string, path?: string }>} [props.breadcrumbs]
 * @param {Object|string} [props.badge] - { text, icon: LucideIcon, pulse?: boolean } or string
 * @param {string|React.ReactNode} props.title - Main Headline
 * @param {string|React.ReactNode} [props.description] - Subheading
 * @param {React.ReactNode} [props.actions] - CTA buttons
 * @param {Array<{ icon?: any, label: string, subtext?: string, isStar?: boolean, color?: string }>} [props.stats]
 * @param {'cards'|'inline'} [props.statsLayout='cards'] - Render stats as 4-card metric dock or inline strip
 * @param {'default'|'accent'|'minimal'} [props.variant='default']
 * @param {'center'|'left'} [props.align='center']
 * @param {React.ReactNode} [props.children] - Custom optional slots
 * @param {string} [props.className] - Extra class
 */
export function PageHero({
  breadcrumbs = [],
  badge,
  title,
  description,
  actions,
  stats,
  statsLayout = 'cards',
  variant = 'default',
  align = 'center',
  bubbles = true,
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

      {/* Atmospheric Floating Glass Bubbles Animation */}
      {bubbles && (
        <div className={styles.bubblesContainer} aria-hidden="true">
          <span className={`${styles.bubble} ${styles.bubble1}`} />
          <span className={`${styles.bubble} ${styles.bubble2}`} />
          <span className={`${styles.bubble} ${styles.bubble3}`} />
          <span className={`${styles.bubble} ${styles.bubble4}`} />
          <span className={`${styles.bubble} ${styles.bubble5}`} />
          <span className={`${styles.bubble} ${styles.bubble6}`} />
          <span className={`${styles.bubble} ${styles.bubble7}`} />
          <span className={`${styles.bubble} ${styles.bubble8}`} />
          <span className={`${styles.bubble} ${styles.bubble9}`} />
          <span className={`${styles.bubble} ${styles.bubble10}`} />
        </div>
      )}

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

          {/* 3. SOCIAL PROOF / METRIC DOCK (Clean, balanced 4-Card Dock or Inline Strip) */}
          {stats && stats.length > 0 && (
            <div className={`${styles.statsContainer} ${isLeft ? styles.statsLeft : styles.statsCenter}`}>
              {statsLayout === 'cards' ? (
                <div className={styles.statsCardsGrid}>
                  {stats.map((item, i) => {
                    const Icon = item.icon;
                    const colorClass = styles['cardColor_' + (item.color || 'blue')];
                    return (
                      <div key={i} className={`${styles.statCard} ${colorClass}`}>
                        <div className={styles.statCardIconBox}>
                          {item.isStar ? (
                            <Star size={16} fill="#F59E0B" color="#F59E0B" />
                          ) : (
                            Icon && <Icon size={16} />
                          )}
                        </div>
                        <div className={styles.statCardText}>
                          <span className={styles.statCardLabel}>{item.label}</span>
                          {item.subtext && (
                            <span className={styles.statCardSubtext}>{item.subtext}</span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
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
              )}
            </div>
          )}

        </div>

      </div>
    </header>
  );
}

export default PageHero;
