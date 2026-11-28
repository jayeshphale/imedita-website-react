import React from 'react';
import { 
  Building2, 
  Globe2, 
  CheckCircle2, 
  Briefcase,
  ShieldCheck,
  TrendingUp
} from 'lucide-react';
import { clientLogos } from '../../data/clientLogos';
import styles from './AboutCorporatePresence.module.css';

/**
 * SECTION 5: Global Corporate Presence
 * Soft Slate background (#f8fafc).
 * Dual-row marquee displaying all 59 genuine client logos without stretching or distortion.
 */
export function AboutCorporatePresence() {
  // Split the 59 client logos into two balanced rows
  const midPoint = Math.ceil(clientLogos.length / 2);
  const row1 = clientLogos.slice(0, midPoint);
  const row2 = clientLogos.slice(midPoint);

  return (
    <section className={styles.corporateSection} aria-label="Global Corporate Presence and Enterprise Partners">
      <div className={styles.container}>
        
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.eyebrowBadge}>
            <Globe2 size={13} className={styles.badgeIcon} />
            <span>ENTERPRISE CLIENTELE</span>
          </div>

          <h2 className={styles.sectionHeading}>
            Supporting Enterprises <span className={styles.headingAccent}>Around the Globe</span>
          </h2>

          <p className={styles.sectionDescription}>
            Building technology capabilities and supporting organizations through custom corporate training, 
            hands-on lab bootcamps, and enterprise networking upskilling solutions.
          </p>
        </div>

        {/* Feature Points Row */}
        <div className={styles.metricCardsRow}>
          <div className={styles.metricItem}>
            <div className={styles.metricIconBox}>
              <Building2 size={20} />
            </div>
            <div className={styles.metricInfo}>
              <span className={styles.metricValue}>100+</span>
              <span className={styles.metricLabel}>Enterprises Upskilled</span>
            </div>
          </div>

          <div className={styles.metricDivider} />

          <div className={styles.metricItem}>
            <div className={styles.metricIconBox}>
              <Briefcase size={20} />
            </div>
            <div className={styles.metricInfo}>
              <span className={styles.metricValue}>Custom</span>
              <span className={styles.metricLabel}>Corporate Syllabi</span>
            </div>
          </div>

          <div className={styles.metricDivider} />

          <div className={styles.metricItem}>
            <div className={styles.metricIconBox}>
              <ShieldCheck size={20} />
            </div>
            <div className={styles.metricInfo}>
              <span className={styles.metricValue}>Multi-Vendor</span>
              <span className={styles.metricLabel}>Firewall & Cloud Tracks</span>
            </div>
          </div>

          <div className={styles.metricDivider} />

          <div className={styles.metricItem}>
            <div className={styles.metricIconBox}>
              <TrendingUp size={20} />
            </div>
            <div className={styles.metricInfo}>
              <span className={styles.metricValue}>Dedicated</span>
              <span className={styles.metricLabel}>Remote Hardware Pods</span>
            </div>
          </div>
        </div>

      </div>

      {/* Full-width Logo Marquee Track (Double Row for Smooth Density) */}
      <div className={styles.marqueeContainer}>
        
        {/* Row 1: Leftward scroll */}
        <div className={styles.marqueeTrack}>
          <div className={styles.marqueeGroup}>
            {row1.map((logoUrl, idx) => (
              <div key={`r1-a-${idx}`} className={styles.logoItem}>
                <img 
                  src={logoUrl} 
                  alt="Enterprise Client Partner" 
                  className={styles.logoImg}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          {/* Duplicate for infinite seamless loop */}
          <div className={styles.marqueeGroup} aria-hidden="true">
            {row1.map((logoUrl, idx) => (
              <div key={`r1-b-${idx}`} className={styles.logoItem}>
                <img 
                  src={logoUrl} 
                  alt="Enterprise Client Partner" 
                  className={styles.logoImg}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Reverse Rightward scroll */}
        <div className={`${styles.marqueeTrack} ${styles.reverseTrack}`}>
          <div className={styles.marqueeGroup}>
            {row2.map((logoUrl, idx) => (
              <div key={`r2-a-${idx}`} className={styles.logoItem}>
                <img 
                  src={logoUrl} 
                  alt="Enterprise Client Partner" 
                  className={styles.logoImg}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          {/* Duplicate for infinite seamless loop */}
          <div className={styles.marqueeGroup} aria-hidden="true">
            {row2.map((logoUrl, idx) => (
              <div key={`r2-b-${idx}`} className={styles.logoItem}>
                <img 
                  src={logoUrl} 
                  alt="Enterprise Client Partner" 
                  className={styles.logoImg}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Fade gradients on edges */}
        <div className={styles.fadeLeft} aria-hidden="true" />
        <div className={styles.fadeRight} aria-hidden="true" />
      </div>

      {/* Assurance note */}
      <div className={styles.container}>
        <div className={styles.bottomNote}>
          <p>
            Trusted by global telecom providers, IT consulting firms, system integrators, and Fortune 500 enterprises.
          </p>
        </div>
      </div>

    </section>
  );
}

export default AboutCorporatePresence;
