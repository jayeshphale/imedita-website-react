import React, { useState } from 'react';
import { Briefcase, Building2, TrendingUp, Users, ArrowRight } from 'lucide-react';
import styles from './PlacementPartners.module.css';

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
          <circle cx="16" cy="18" r="12" fill="#E21836" />
          <circle cx="16" cy="18" r="7" fill="#FFFFFF" />
          <circle cx="16" cy="18" r="3.5" fill="#E21836" />
          <text x="36" y="17" fill="#0F172A" fontWeight="800" fontSize="12" fontFamily="system-ui, sans-serif">CHECK POINT</text>
          <text x="36" y="28" fill="#E21836" fontWeight="700" fontSize="8" fontFamily="system-ui, sans-serif" letterSpacing="0.06em">SOFTWARE TECH</text>
        </svg>
      );
    case 'Fortinet':
      return (
        <svg viewBox="0 0 135 36" className={styles.partnerLogo} aria-label="Fortinet Logo">
          <g transform="translate(6, 9)">
            <rect x="0" y="0" width="6" height="6" fill="#EE3124" />
            <rect x="8" y="0" width="6" height="6" fill="#EE3124" />
            <rect x="0" y="8" width="6" height="6" fill="#EE3124" />
            <rect x="8" y="8" width="6" height="6" fill="#EE3124" />
          </g>
          <text x="30" y="22" fill="#EE3124" fontWeight="900" fontSize="14" fontFamily="system-ui, sans-serif" letterSpacing="0.06em">FORTINET</text>
        </svg>
      );
    case 'Cisco Systems':
      return (
        <svg viewBox="0 0 120 36" className={styles.partnerLogo} aria-label="Cisco Systems Logo">
          <g transform="translate(6, 4)">
            <line x1="2" y1="12" x2="2" y2="18" stroke="#049FD9" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="7" y1="8" x2="7" y2="18" stroke="#049FD9" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="12" y1="4" x2="12" y2="18" stroke="#049FD9" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="17" y1="8" x2="17" y2="18" stroke="#049FD9" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="22" y1="12" x2="22" y2="18" stroke="#049FD9" strokeWidth="2.5" strokeLinecap="round" />
          </g>
          <text x="38" y="22" fill="#049FD9" fontWeight="800" fontSize="16" fontFamily="system-ui, sans-serif" letterSpacing="0.08em">cisco</text>
        </svg>
      );
    case 'NTT Data':
      return (
        <svg viewBox="0 0 135 36" className={styles.partnerLogo} aria-label="NTT Data Logo">
          <ellipse cx="16" cy="18" rx="12" ry="7" fill="none" stroke="#0072BC" strokeWidth="2.5" transform="rotate(-20 16 18)" />
          <text x="36" y="22" fill="#0072BC" fontWeight="800" fontSize="14" fontFamily="system-ui, sans-serif" letterSpacing="0.06em">NTT DATA</text>
        </svg>
      );
    case 'Wipro':
      return (
        <svg viewBox="0 0 125 36" className={styles.partnerLogo} aria-label="Wipro Logo">
          <circle cx="10" cy="14" r="4" fill="#3498DB" />
          <circle cx="19" cy="11" r="3.5" fill="#2ECC71" />
          <circle cx="21" cy="20" r="4" fill="#F1C40F" />
          <circle cx="12" cy="23" r="3.5" fill="#9B59B6" />
          <text x="32" y="22" fill="#0F172A" fontWeight="800" fontSize="16" fontFamily="system-ui, sans-serif">wipro</text>
        </svg>
      );
    case 'Cognizant':
      return (
        <svg viewBox="0 0 135 36" className={styles.partnerLogo} aria-label="Cognizant Logo">
          <circle cx="16" cy="18" r="10" fill="none" stroke="#0033A0" strokeWidth="3" />
          <path d="M12 18l4-4 4 4" stroke="#0033A0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <text x="34" y="22" fill="#0033A0" fontWeight="800" fontSize="13.5" fontFamily="system-ui, sans-serif">Cognizant</text>
        </svg>
      );
    case 'Tech Mahindra':
      return (
        <svg viewBox="0 0 145 36" className={styles.partnerLogo} aria-label="Tech Mahindra Logo">
          <rect x="6" y="9" width="8" height="17" fill="#E31837" rx="1" />
          <rect x="16" y="14" width="8" height="12" fill="#0F172A" rx="1" />
          <text x="32" y="17" fill="#0F172A" fontWeight="800" fontSize="12" fontFamily="system-ui, sans-serif">Tech</text>
          <text x="32" y="28" fill="#E31837" fontWeight="700" fontSize="11" fontFamily="system-ui, sans-serif">Mahindra</text>
        </svg>
      );
    default:
      return (
        <span style={{ fontSize: '1rem', fontWeight: 800, color: '#0066FF' }}>{brand}</span>
      );
  }
}

const categories = [
  { id: "all", label: "All Hiring Partners" },
  { id: "telecom", label: "Telecom & Service Providers" },
  { id: "security", label: "Cybersecurity MSPs" },
  { id: "it-services", label: "Global IT Consultancies" }
];

const partnersData = [
  {
    name: "Orange Business",
    category: "telecom",
    role: "Core Network Engineer"
  },
  {
    name: "Tata Communications",
    category: "telecom",
    role: "Global NOC Analyst"
  },
  {
    name: "Airtel Business",
    category: "telecom",
    role: "MPLS / BGP Specialist"
  },
  {
    name: "Dimension Data",
    category: "telecom",
    role: "Enterprise TAC Engineer"
  },
  {
    name: "Palo Alto Networks",
    category: "security",
    role: "Firewall TAC Associate"
  },
  {
    name: "Check Point",
    category: "security",
    role: "Security Solutions Tech"
  },
  {
    name: "Fortinet",
    category: "security",
    role: "SOC Level 2 Analyst"
  },
  {
    name: "Cisco Systems",
    category: "security",
    role: "TAC Support Engineer"
  },
  {
    name: "NTT Data",
    category: "it-services",
    role: "Cloud Network Associate"
  },
  {
    name: "Wipro",
    category: "it-services",
    role: "Datacenter Specialist"
  },
  {
    name: "Cognizant",
    category: "it-services",
    role: "Infrastructure Consultant"
  },
  {
    name: "Tech Mahindra",
    category: "it-services",
    role: "SD-WAN Network Architect"
  }
];

export function PlacementPartners() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredPartners = activeTab === 'all'
    ? partnersData
    : partnersData.filter((p) => p.category === activeTab);

  return (
    <section className={styles.partnersSection} id="partners" aria-label="Global Placement & Industry Partners">
      <div className={styles.sectionContainer}>
        
        {/* Header Block */}
        <div className={`${styles.headerBlock} scroll-header`}>
          <div className={styles.eyebrowBadge}>
            <Briefcase size={14} />
            <span>Placement Alliances</span>
          </div>
          <h2 className={styles.sectionHeading}>
            Where Our Certified Engineers Get Hired
          </h2>
          <p className={styles.sectionSubtext}>
            Over 350+ enterprise IT operators, cybersecurity vendors, and tier-1 telecom providers actively recruit from our Pune lab batches.
          </p>
        </div>

        {/* 3-Column Quick Metrics Banner */}
        <div className={`${styles.metricsStrip} scroll-reveal-scale`}>
          <div className={styles.metricItem}>
            <div className={styles.metricIconWrap}>
              <Building2 size={18} />
            </div>
            <div className={styles.metricContent}>
              <span className={styles.metricValue}>350+</span>
              <span className={styles.metricLabel}>Hiring Partners</span>
            </div>
          </div>

          <div className={styles.metricItem}>
            <div className={styles.metricIconWrap}>
              <TrendingUp size={18} />
            </div>
            <div className={styles.metricContent}>
              <span className={styles.metricValue}>₹4.5L - ₹18L</span>
              <span className={styles.metricLabel}>Salary CTC Range</span>
            </div>
          </div>

          <div className={styles.metricItem}>
            <div className={styles.metricIconWrap}>
              <Users size={18} />
            </div>
            <div className={styles.metricContent}>
              <span className={styles.metricValue}>45 Days</span>
              <span className={styles.metricLabel}>Avg. Placement Cycle</span>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className={`${styles.tabsWrapper} scroll-reveal`}>
          {categories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${styles.tabBtn} ${activeTab === tab.id ? styles.tabBtnActive : ''}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 12-Card Grid with 100% Guaranteed Vector Logos */}
        <div className={`${styles.partnersGrid} scroll-stagger-cards`}>
          {filteredPartners.map((partner, index) => (
            <div key={index} className={styles.partnerCard}>
              <div className={styles.logoBox}>
                <PartnerLogoSvg brand={partner.name} />
              </div>
              <h4 className={styles.partnerName}>{partner.name}</h4>
              <span className={styles.hiringRole}>{partner.role}</span>
            </div>
          ))}
        </div>

        {/* Recruiter Callout Banner */}
        <div className={`${styles.recruiterBanner} scroll-reveal`}>
          <div>
            <h3 className={styles.bannerHeading}>Looking to Hire CCIE, Security, or Cloud Engineers?</h3>
            <p className={styles.bannerSubtext}>
              Partner with our dedicated placement cell for zero-fee corporate hiring drives and pre-evaluated technical talent.
            </p>
          </div>
          <a
            href="https://www.imedita.com/hire-from-us/"
            target="_blank"
            rel="noreferrer"
            className={styles.hireBtn}
          >
            <span>Post a Requirement</span>
            <ArrowRight size={14} />
          </a>
        </div>

      </div>
    </section>
  );
}

export { PlacementPartners as AuthorizedPartnersSection };
export default PlacementPartners;
