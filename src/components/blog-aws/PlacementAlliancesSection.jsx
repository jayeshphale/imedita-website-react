import React from 'react';
import { 
  Building2, 
  TrendingUp, 
  Users, 
  Briefcase, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles,
  Award
} from 'lucide-react';
import styles from './PlacementAlliancesSection.module.css';

/**
 * High-Precision Vector SVG Brand Representations
 * 100% Reliable | Zero Rate-Limits | Instant Retina Render
 */
function PartnerLogoSvg({ brand }) {
  switch (brand) {
    case 'Orange Business':
      return (
        <svg viewBox="0 0 140 36" className={styles.partnerLogo} aria-label="Orange Business Logo">
          <rect x="4" y="4" width="28" height="28" rx="5" fill="#FF7900" />
          <text x="40" y="21" fill="#0F172A" fontWeight="800" fontSize="15" fontFamily="system-ui, sans-serif">orange</text>
          <text x="40" y="31" fill="#FF7900" fontWeight="700" fontSize="9" fontFamily="system-ui, sans-serif">Business</text>
        </svg>
      );
    case 'Tata Communications':
      return (
        <svg viewBox="0 0 150 36" className={styles.partnerLogo} aria-label="Tata Communications Logo">
          <ellipse cx="16" cy="18" rx="13" ry="11" fill="none" stroke="#005A9C" strokeWidth="2.5" />
          <path d="M10 14h12M16 14v9" stroke="#005A9C" strokeWidth="2.5" strokeLinecap="round" />
          <text x="36" y="17" fill="#005A9C" fontWeight="800" fontSize="13" fontFamily="system-ui, sans-serif">TATA</text>
          <text x="36" y="28" fill="#475569" fontWeight="600" fontSize="8.5" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">COMMUNICATIONS</text>
        </svg>
      );
    case 'Airtel Business':
      return (
        <svg viewBox="0 0 135 36" className={styles.partnerLogo} aria-label="Airtel Business Logo">
          <circle cx="16" cy="18" r="12" fill="#ED1C24" />
          <path d="M12 18c0-2.5 1.8-4 4-4s4 1.5 4 4v3" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" fill="none" />
          <text x="36" y="19" fill="#ED1C24" fontWeight="800" fontSize="15" fontFamily="system-ui, sans-serif">airtel</text>
          <text x="36" y="29" fill="#64748B" fontWeight="600" fontSize="8.5" fontFamily="system-ui, sans-serif">business</text>
        </svg>
      );
    case 'Dimension Data':
      return (
        <svg viewBox="0 0 140 36" className={styles.partnerLogo} aria-label="Dimension Data Logo">
          <circle cx="16" cy="18" r="11" fill="none" stroke="#70B82A" strokeWidth="3" />
          <circle cx="16" cy="18" r="5" fill="#70B82A" />
          <text x="36" y="16" fill="#0F172A" fontWeight="800" fontSize="12" fontFamily="system-ui, sans-serif">dimension</text>
          <text x="36" y="28" fill="#70B82A" fontWeight="700" fontSize="11" fontFamily="system-ui, sans-serif">data</text>
        </svg>
      );
    case 'Palo Alto Networks':
      return (
        <svg viewBox="0 0 145 36" className={styles.partnerLogo} aria-label="Palo Alto Networks Logo">
          <g transform="translate(6, 6)">
            <rect x="0" y="0" width="8" height="8" rx="2" fill="#FA582D" />
            <rect x="12" y="0" width="8" height="8" rx="2" fill="#FA582D" opacity="0.85" />
            <rect x="6" y="11" width="8" height="8" rx="2" fill="#FA582D" opacity="0.65" />
          </g>
          <text x="34" y="17" fill="#0F172A" fontWeight="800" fontSize="12" fontFamily="system-ui, sans-serif">paloalto</text>
          <text x="34" y="28" fill="#FA582D" fontWeight="700" fontSize="8" fontFamily="system-ui, sans-serif" letterSpacing="0.08em">NETWORKS</text>
        </svg>
      );
    case 'Check Point':
      return (
        <svg viewBox="0 0 140 36" className={styles.partnerLogo} aria-label="Check Point Logo">
          <circle cx="16" cy="18" r="11" fill="#E2231A" />
          <path d="M11 18l3 4 7-8" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <text x="34" y="17" fill="#0F172A" fontWeight="800" fontSize="11.5" fontFamily="system-ui, sans-serif">CHECK POINT</text>
          <text x="34" y="27" fill="#E2231A" fontWeight="700" fontSize="8" fontFamily="system-ui, sans-serif">SOFTWARE TECHNOLOGIES</text>
        </svg>
      );
    case 'Cisco Systems':
      return (
        <svg viewBox="0 0 130 36" className={styles.partnerLogo} aria-label="Cisco Systems Logo">
          <g fill="#00BCEB">
            <rect x="6" y="14" width="3" height="12" rx="1.5" />
            <rect x="13" y="9" width="3" height="17" rx="1.5" />
            <rect x="20" y="5" width="3" height="21" rx="1.5" />
            <rect x="27" y="9" width="3" height="17" rx="1.5" />
            <rect x="34" y="14" width="3" height="12" rx="1.5" />
          </g>
          <text x="44" y="23" fill="#049FD9" fontWeight="900" fontSize="18" fontFamily="system-ui, sans-serif" letterSpacing="0.02em">CISCO</text>
        </svg>
      );
    case 'Microsoft Azure':
      return (
        <svg viewBox="0 0 140 36" className={styles.partnerLogo} aria-label="Microsoft Azure Logo">
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
    case 'Fortinet':
      return (
        <svg viewBox="0 0 135 36" className={styles.partnerLogo} aria-label="Fortinet Logo">
          <g fill="#EE3124">
            <rect x="4" y="10" width="6" height="6" />
            <rect x="12" y="10" width="6" height="6" />
            <rect x="20" y="10" width="6" height="6" />
            <rect x="12" y="18" width="6" height="6" />
            <rect x="20" y="18" width="6" height="6" />
          </g>
          <text x="34" y="24" fill="#EE3124" fontWeight="900" fontSize="16" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">FORTINET</text>
        </svg>
      );
    case 'HCL Tech':
      return (
        <svg viewBox="0 0 130 36" className={styles.partnerLogo} aria-label="HCL Tech Logo">
          <text x="8" y="24" fill="#005696" fontWeight="900" fontSize="22" fontFamily="system-ui, sans-serif">HCL</text>
          <text x="56" y="24" fill="#008FD5" fontWeight="700" fontSize="14" fontFamily="system-ui, sans-serif">Tech</text>
        </svg>
      );
    case 'Infosys':
      return (
        <svg viewBox="0 0 120 36" className={styles.partnerLogo} aria-label="Infosys Logo">
          <text x="8" y="24" fill="#007CC3" fontWeight="800" fontSize="20" fontFamily="system-ui, sans-serif">Infosys</text>
        </svg>
      );
    case 'Wipro':
      return (
        <svg viewBox="0 0 120 36" className={styles.partnerLogo} aria-label="Wipro Logo">
          <g transform="translate(6, 6)">
            <circle cx="8" cy="8" r="4" fill="#FF6A13" />
            <circle cx="16" cy="6" r="3" fill="#B1005D" />
            <circle cx="12" cy="16" r="3.5" fill="#005587" />
            <circle cx="6" cy="18" r="2.5" fill="#4B9B48" />
          </g>
          <text x="32" y="22" fill="#2E1A47" fontWeight="900" fontSize="17" fontFamily="system-ui, sans-serif">wipro</text>
        </svg>
      );
    default:
      return null;
  }
}

const ALLIANCE_PARTNERS = [
  'Orange Business',
  'Tata Communications',
  'Dimension Data',
  'Palo Alto Networks',
  'Cisco Systems',
  'Microsoft Azure',
  'Fortinet',
  'Airtel Business',
  'HCL Tech',
  'Infosys',
  'Wipro',
  'Check Point'
];

const PLACEMENT_STATS = [
  { value: '600+', label: 'Corporate Placement Drives', icon: Building2 },
  { value: '97.4%', label: 'Placement Success Rate', icon: TrendingUp },
  { value: '45 Days', label: 'Average Time to First Offer', icon: Briefcase },
  { value: '₹18.5 LPA', label: 'Highest Package Offered', icon: Award }
];

export default function PlacementAlliancesSection({ onOpenDemo = () => {} }) {
  return (
    <section id="placement-alliances" className={styles.section} aria-labelledby="alliances-heading">
      <div className={styles.container}>
        
        {/* Header Block */}
        <div className={styles.header}>
          <div className={styles.badgeWrap}>
            <Building2 size={14} className={styles.badgeIcon} aria-hidden="true" />
            <span>CORPORATE RECRUITMENT PARTNERS</span>
          </div>
          <h2 id="alliances-heading" className={styles.title}>
            Placement Alliances
          </h2>
          <p className={styles.subtitle}>
            Over 600+ multinational technology enterprises, telecom giants, and managed service providers recruit directly 
            from I-Medita. Our alumni lead infrastructure operations across Fortune 500 networks globally.
          </p>
        </div>

        {/* 4 Stats Grid */}
        <div className={styles.statsGrid}>
          {PLACEMENT_STATS.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className={styles.statCard}>
                <div className={styles.statIconWrap}>
                  <Icon size={20} className={styles.statIcon} aria-hidden="true" />
                </div>
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Logos Showcase Grid */}
        <div className={styles.logoGridCard}>
          <div className={styles.cardHeaderStrip}>
            <span className={styles.stripTitle}>Verified Corporate Hiring &amp; Alliance Partners</span>
            <span className={styles.stripBadge}>600+ Active Enterprise Recruiters</span>
          </div>

          <div className={styles.logoGrid}>
            {ALLIANCE_PARTNERS.map((brand, idx) => (
              <div key={idx} className={styles.logoCell}>
                <PartnerLogoSvg brand={brand} />
              </div>
            ))}
          </div>
        </div>

        {/* Closing Placement & Demo CTA Banner */}
        <div className={styles.ctaBanner}>
          <div className={styles.ctaTextCol}>
            <span className={styles.ctaKicker}>CAREER ACCELERATION</span>
            <h3 className={styles.ctaHeading}>
              Ready to Accelerate Your Networking &amp; Cloud Architecture Career?
            </h3>
            <p className={styles.ctaText}>
              Schedule a personalized 1-on-1 career consultation with our CCIE &amp; AWS certified mentors. 
              Review course syllabi, tour our Pune datacenter labs, and discuss customized learning roadmaps.
            </p>
            <div className={styles.trustChecks}>
              <span className={styles.checkItem}>
                <CheckCircle2 size={15} className={styles.checkIcon} aria-hidden="true" />
                No-obligation free demo lecture
              </span>
              <span className={styles.checkItem}>
                <CheckCircle2 size={15} className={styles.checkIcon} aria-hidden="true" />
                Live physical rack terminal demo
              </span>
              <span className={styles.checkItem}>
                <CheckCircle2 size={15} className={styles.checkIcon} aria-hidden="true" />
                Career roadmap &amp; salary guidance
              </span>
            </div>
          </div>

          <div className={styles.ctaActionCol}>
            <button
              type="button"
              className={styles.ctaPrimaryBtn}
              onClick={onOpenDemo}
            >
              <span>Book Free Demo Session</span>
              <ArrowRight size={16} aria-hidden="true" />
            </button>

            <a
              href="https://www.imedita.com/placement/"
              target="_blank"
              rel="noreferrer"
              className={styles.ctaSecondaryBtn}
            >
              <span>View Verified Placements</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
