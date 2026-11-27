import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home, Sparkles, Star } from 'lucide-react';
import styles from './PageHero.module.css';

/**
 * Global PageHero Component for Inner/Individual Pages
 * Used across: Contact Us, About Us, Privacy Policy, Terms, Support, Payment, Corporate Training, etc.
 * 
 * @param {Object} props
 * @param {Array<{ label: string, path?: string }>} [props.breadcrumbs]
 * @param {Object|string} [props.badge] - { text, icon: LucideIcon, pulse?: boolean, variant?: string } or string
 * @param {string|React.ReactNode} props.title - Page Headline (supports JSX for gradient accents)
 * @param {string|React.ReactNode} [props.description] - Subheading / narrative description
 * @param {React.ReactNode} [props.actions] - Quick CTA button group
 * @param {Array<{ icon?: any, label: string, subtext?: string, isStar?: boolean }>} [props.stats] - Trust badges/metrics ribbon
 * @param {'default'|'accent'|'minimal'|'corporate'} [props.variant='default']
 * @param {'center'|'left'} [props.align='center']
 * @param {React.ReactNode} [props.children] - Custom optional slots (e.g. search bar, pill filters)
 * @param {string} [props.className] - Additional custom CSS class
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
      {/* =========================================================================
          CREATIVE BACKGROUND ATMOSPHERE (Light Theme Aurora Mesh & Blueprint Dot Grid)
          ========================================================================= */}
      <div className={styles.auroraGlowCenter} aria-hidden="true" />
      <div className={styles.auroraGlowCorner} aria-hidden="true" />
      <div className={styles.blueprintGrid} aria-hidden="true" />
      
      {/* Subtle Hairline Geometry Accent Rings */}
      <div className={styles.ambientOrbitRing} aria-hidden="true" />
      <div className={styles.ambientHairlineArc} aria-hidden="true" />

      {/* Floating Subtle Ambient Accents */}
      <span className={styles.accentOrb1} aria-hidden="true" />
      <span className={styles.accentOrb2} aria-hidden="true" />

      <div className={styles.container}>
        
        {/* =========================================================================
            1. BREADCRUMBS NAVIGATION
            ========================================================================= */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className={`${styles.breadcrumbNav} ${isLeft ? styles.alignLeft : styles.alignCenter}`} aria-label="Breadcrumb">
            <ol className={styles.breadcrumbList}>
              <li className={styles.breadcrumbItem}>
                <Link to="/" className={styles.breadcrumbLink} title="Back to Homepage">
                  <Home size={13} className={styles.homeIcon} />
                  <span>Home</span>
                </Link>
              </li>

              {breadcrumbs.map((crumb, idx) => {
                const isLast = idx === breadcrumbs.length - 1;
                // If the first crumb is Home, skip duplicate
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

        {/* =========================================================================
            2. HERO CONTENT AREA (Badge, Title, Narrative)
            ========================================================================= */}
        <div className={`${styles.contentBox} ${isLeft ? styles.contentLeft : styles.contentCenter}`}>
          
          {/* Eyebrow Pill Badge */}
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

          {/* Page Headline */}
          <h1 className={styles.mainHeadline}>
            {title}
          </h1>

          {/* Subtitle / Narrative Description */}
          {description && (
            <p className={styles.subheadline}>
              {description}
            </p>
          )}

          {/* Optional Action CTAs (e.g. Call, WhatsApp, Book Demo) */}
          {actions && (
            <div className={`${styles.actionsRow} ${isLeft ? styles.actionsLeft : styles.actionsCenter}`}>
              {actions}
            </div>
          )}

          {/* Custom Injected Slot (Search, Extra Pills, etc.) */}
          {children && (
            <div className={styles.customSlot}>
              {children}
            </div>
          )}

          {/* =========================================================================
              3. CREATIVE SOCIAL PROOF / TRUST PILL RIBBON
              ========================================================================= */}
          {stats && stats.length > 0 && (
            <div className={`${styles.statsRibbon} ${isLeft ? styles.statsLeft : styles.statsCenter}`}>
              {stats.map((item, i) => {
                const Icon = item.icon;
                return (
                  <React.Fragment key={i}>
                    {i > 0 && <span className={styles.statDivider} aria-hidden="true">•</span>}
                    <div className={styles.statItem}>
                      {item.isStar ? (
                        <div className={styles.starsGroup}>
                          {[...Array(5)].map((_, s) => (
                            <Star key={s} size={13} fill="#F59E0B" className={styles.starIcon} />
                          ))}
                        </div>
                      ) : (
                        Icon && <Icon size={15} className={styles.statIcon} />
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

      </div>
    </header>
  );
}
export default PageHero;
