import React from 'react';
import { Building2, TrendingUp, Briefcase, Award, ArrowRight, CheckCircle2 } from 'lucide-react';
import styles from './PlacementAlliancesSection.module.css';

function PartnerLogoSvg({ brand }) {
  switch (brand) {
    case 'Orange Business':
      return (
        <svg viewBox="0 0 140 36" className={styles.partnerLogo} aria-label="Orange Business">
          <rect x="4" y="4" width="28" height="28" rx="5" fill="#FF7900" />
          <text x="40" y="21" fill="#0F172A" fontWeight="800" fontSize="15" fontFamily="system-ui, sans-serif">orange</text>
          <text x="40" y="31" fill="#FF7900" fontWeight="700" fontSize="9" fontFamily="system-ui, sans-serif">Business</text>
        </svg>
      );
    case 'Tata Communications':
      return (
        <svg viewBox="0 0 150 36" className={styles.partnerLogo} aria-label="Tata Communications">
          <ellipse cx="16" cy="18" rx="13" ry="11" fill="none" stroke="#005A9C" strokeWidth="2.5" />
          <path d="M10 14h12M16 14v9" stroke="#005A9C" strokeWidth="2.5" strokeLinecap="round" />
          <text x="36" y="17" fill="#005A9C" fontWeight="800" fontSize="13" fontFamily="system-ui, sans-serif">TATA</text>
          <text x="36" y="28" fill="#475569" fontWeight="600" fontSize="8.5" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">COMMUNICATIONS</text>
        </svg>
      );
    case 'Cisco Systems':
      return (
        <svg viewBox="0 0 130 36" className={styles.partnerLogo} aria-label="Cisco Systems">
          <g fill="#00BCEB">
            <rect x="6" y="14" width="3" height="12" rx="1.5" />
            <rect x="13" y="9" width="3" height="17" rx="1.5" />
            <rect x="20" y="5" width="3" height="21" rx="1.5" />
            <rect x="27" y="9" width="3" height="17" rx="1.5" />
            <rect x="34" y="14" width="3" height="12" rx="1.5" />
          </g>
          <text x="44" y="23" fill="#049FD9" fontWeight="900" fontSize="18" fontFamily="system-ui, sans-serif">CISCO</text>
        </svg>
      );
    case 'Microsoft Azure':
      return (
        <svg viewBox="0 0 140 36" className={styles.partnerLogo} aria-label="Microsoft Azure">
          <g transform="translate(6, 8)">
            <rect x="0" y="0" width="9" height="9" fill="#F25022" />
            <rect x="11" y="0" width="9" height="9" fill="#7FBA00" />
            <rect x="0" y="11" width="9" height="9" fill="#00A4EF" />
            <rect x="11" y="11" width="9" height="9" fill="#FFB900" />
          </g>
          <text x="34" y="17" fill="#5E5E5E" fontWeight="700" fontSize="12" fontFamily="system-ui, sans-serif">Microsoft</text>
          <text x="34" y="28" fill="#0089D6" fontWeight="700" fontSize="10" fontFamily="system-ui, sans-serif">Azure Cloud</text>
        </svg>
      );
    case 'Palo Alto Networks':
      return (
        <svg viewBox="0 0 145 36" className={styles.partnerLogo} aria-label="Palo Alto Networks">
          <g transform="translate(6, 6)">
            <rect x="0" y="0" width="8" height="8" rx="2" fill="#FA582D" />
            <rect x="12" y="0" width="8" height="8" rx="2" fill="#FA582D" opacity="0.85" />
            <rect x="6" y="11" width="8" height="8" rx="2" fill="#FA582D" opacity="0.65" />
          </g>
          <text x="34" y="17" fill="#0F172A" fontWeight="800" fontSize="12" fontFamily="system-ui, sans-serif">paloalto</text>
          <text x="34" y="28" fill="#FA582D" fontWeight="700" fontSize="8" fontFamily="system-ui, sans-serif" letterSpacing="0.08em">NETWORKS</text>
        </svg>
      );
    case 'Fortinet':
      return (
        <svg viewBox="0 0 135 36" className={styles.partnerLogo} aria-label="Fortinet">
          <g fill="#EE3124">
            <rect x="4" y="10" width="6" height="6" />
            <rect x="12" y="10" width="6" height="6" />
            <rect x="20" y="10" width="6" height="6" />
            <rect x="12" y="18" width="6" height="6" />
            <rect x="20" y="18" width="6" height="6" />
          </g>
          <text x="34" y="24" fill="#EE3124" fontWeight="900" fontSize="16" fontFamily="system-ui, sans-serif">FORTINET</text>
        </svg>
      );
    case 'Dimension Data':
      return (
        <svg viewBox="0 0 140 36" className={styles.partnerLogo} aria-label="Dimension Data">
          <circle cx="16" cy="18" r="11" fill="none" stroke="#70B82A" strokeWidth="3" />
          <circle cx="16" cy="18" r="5" fill="#70B82A" />
          <text x="36" y="16" fill="#0F172A" fontWeight="800" fontSize="12" fontFamily="system-ui, sans-serif">dimension</text>
          <text x="36" y="28" fill="#70B82A" fontWeight="700" fontSize="11" fontFamily="system-ui, sans-serif">data</text>
        </svg>
      );
    case 'Airtel Business':
      return (
        <svg viewBox="0 0 135 36" className={styles.partnerLogo} aria-label="Airtel Business">
          <circle cx="16" cy="18" r="12" fill="#ED1C24" />
          <path d="M12 18c0-2.5 1.8-4 4-4s4 1.5 4 4v3" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" fill="none" />
          <text x="36" y="19" fill="#ED1C24" fontWeight="800" fontSize="15" fontFamily="system-ui, sans-serif">airtel</text>
          <text x="36" y="29" fill="#64748B" fontWeight="600" fontSize="8.5" fontFamily="system-ui, sans-serif">business</text>
        </svg>
      );
    default:
      return null;
  }
}

const ALLIANCE_PARTNERS = [
  'Orange Business',
  'Tata Communications',
  'Cisco Systems',
  'Microsoft Azure',
  'Palo Alto Networks',
  'Fortinet',
  'Dimension Data',
  'Airtel Business'
];

const PLACEMENT_STATS = [
  { value: '600+', label: 'Placement Drives' },
  { value: '97.4%', label: 'Placement Rate' },
  { value: '45 Days', label: 'Average Time to Offer' },
  { value: '₹18.5 LPA', label: 'Highest Package' }
];

export default function PlacementAlliancesSection({ onOpenDemo = () => {} }) {
  return (
    <section id="placement-alliances" className={styles.section} aria-labelledby="alliances-heading">
      <div className={styles.container}>
        
        {/* Header Block */}
        <div className={styles.header}>
          <div className={styles.badgeWrap}>
            <Building2 size={13} className={styles.badgeIcon} aria-hidden="true" />
            <span>CORPORATE RECRUITMENT PARTNERS</span>
          </div>
          <h2 id="alliances-heading" className={styles.title}>
            Placement Alliances
          </h2>
          <p className={styles.subtitle}>
            Over 600+ multinational technology enterprises, telecom giants, and managed service providers recruit directly from I-Medita.
          </p>
        </div>

        {/* 4 Stats Metrics Row */}
        <div className={styles.statsRow}>
          {PLACEMENT_STATS.map((stat, idx) => (
            <div key={idx} className={styles.statItem}>
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Logos Showcase Grid (8 clean vector brand logos) */}
        <div className={styles.logoGrid}>
          {ALLIANCE_PARTNERS.map((brand, idx) => (
            <div key={idx} className={styles.logoCell}>
              <PartnerLogoSvg brand={brand} />
            </div>
          ))}
        </div>

        {/* Sleek Closing CTA Card */}
        <div className={styles.ctaCard}>
          <div className={styles.ctaTextWrap}>
            <h3 className={styles.ctaTitle}>Accelerate Your Cloud &amp; Networking Career</h3>
            <p className={styles.ctaSubtitle}>
              Schedule a 1-on-1 career consultation with our CCIE &amp; AWS certified mentors. Tour our Pune datacenter labs and review personalized learning roadmaps.
            </p>
          </div>
          <button
            type="button"
            className={styles.ctaBtn}
            onClick={onOpenDemo}
          >
            <span>Book Free Demo Session</span>
            <ArrowRight size={15} aria-hidden="true" />
          </button>
        </div>

      </div>
    </section>
  );
}
