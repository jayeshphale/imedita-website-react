import React from 'react';
import {
  Sparkles,
  Layers,
  Award,
  Zap,
  Info,
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import styles from './AWSPricingCards.module.css';

const pricingTiers = [
  {
    id: 'foundational',
    level: 'Foundational Level',
    badge: 'Beginner Entry',
    badgeClass: 'badgeCyan',
    priceUSD: '$100',
    priceINRContext: '~₹8,300 + 18% GST',
    examTitle: 'AWS Certified Cloud Practitioner',
    examCode: 'CLF-C02',
    duration: '90 Minutes',
    questions: '65 Questions',
    description: 'Validates overall fundamental understanding of the AWS Cloud platform, global infrastructure, security compliance, and core billing models.',
    targetAudience: 'Non-technical professionals, sales, tech managers, and absolute cloud beginners.',
    popular: false
  },
  {
    id: 'associate',
    level: 'Associate Level',
    badge: 'Most Popular',
    badgeClass: 'badgeBlue',
    priceUSD: '$150',
    priceINRContext: '~₹12,500 + 18% GST',
    examTitle: 'Solutions Architect / Developer / SysOps / Data Eng',
    examCode: 'SAA-C03, DVA-C02, SOA-C02, DEA-C01',
    duration: '130 Minutes',
    questions: '65 Questions',
    description: 'Validates hands-on ability to design, build, and deploy secure, robust, and resilient enterprise applications across AWS core services.',
    targetAudience: 'Software developers, systems admins, network engineers, and data engineers with 1+ yr cloud experience.',
    popular: true
  },
  {
    id: 'professional',
    level: 'Professional Level',
    badge: 'Expert Tier',
    badgeClass: 'badgePurple',
    priceUSD: '$300',
    priceINRContext: '~₹25,000 + 18% GST',
    examTitle: 'Solutions Architect / DevOps Engineer Professional',
    examCode: 'SAP-C02, DOP-C02',
    duration: '180 Minutes',
    questions: '75 Questions',
    description: 'Validates advanced technical skills and experience in designing distributed applications, hybrid multi-account topologies, and automated CI/CD pipelines.',
    targetAudience: 'Senior cloud architects, enterprise leads, and principal DevOps engineers with 2+ yrs deep AWS experience.',
    popular: false
  },
  {
    id: 'specialty',
    level: 'Specialty Level',
    badge: 'Deep Domain',
    badgeClass: 'badgeOrange',
    priceUSD: '$300',
    priceINRContext: '~₹25,000 + 18% GST',
    examTitle: 'Advanced Networking & Security Specialty',
    examCode: 'ANS-C01, SCS-C02',
    duration: '170 Minutes',
    questions: '65 Questions',
    description: 'Validates deep-domain technical expertise in complex hybrid networking (Direct Connect, Transit Gateway, BGP) or zero-trust cloud cybersecurity controls.',
    targetAudience: 'Network architects, cybersecurity engineers, and compliance specialists tackling enterprise workloads.',
    popular: false
  }
];

export function AWSPricingCards({ onJumpToTable = () => {} }) {
  return (
    <section className={styles.quickAnswerSection} id="quick-answer">
      {/* Direct AEO Answer Box */}
      <div className={styles.directAnswerCallout}>
        <div className={styles.calloutHeader}>
          <div className={styles.calloutIconBox}>
            <Zap size={20} className={styles.zapIcon} />
          </div>
          <div>
            <span className={styles.calloutEyebrow}>DIRECT ANSWER • 2026 OFFICIAL PUBLISHED PRICING</span>
            <h3 className={styles.calloutTitle}>
              How Much Does AWS Certification Cost in 2026?
            </h3>
          </div>
        </div>

        <p className={styles.calloutBody}>
          In 2026, standard official AWS certification exam registration fees range from{' '}
          <strong>$100 to $300 USD</strong> per attempt depending strictly on the exam tier:{' '}
          <strong>$100 USD</strong> for Foundational (Cloud Practitioner),{' '}
          <strong>$150 USD</strong> for Associate-level exams (Solutions Architect, Developer, SysOps, Data Engineer),{' '}
          and <strong>$300 USD</strong> for Professional and Specialty-level exams.
        </p>

        <div className={styles.calloutTaxNote}>
          <Info size={16} className={styles.infoIcon} />
          <span>
            <strong>Crucial Pricing Note:</strong> All fees are officially quoted in US Dollars (USD). In India and other jurisdictions, local taxes (such as <strong>18% GST in India</strong>) and foreign transaction fees are added during Pearson VUE checkout. Candidates who already hold any active AWS certification receive a <strong>50% discount voucher</strong> for their next exam.
          </span>
        </div>
      </div>

      {/* 4 Pricing Cards Grid */}
      <div className={styles.cardsGrid}>
        {pricingTiers.map((tier) => (
          <div
            key={tier.id}
            className={`${styles.priceCard} ${tier.popular ? styles.popularCard : ''}`}
          >
            {tier.popular && (
              <div className={styles.popularBadge}>
                <Sparkles size={12} />
                <span>Most Selected Cloud Cert</span>
              </div>
            )}

            <div className={styles.cardHeader}>
              <div className={styles.tierTopRow}>
                <span className={`${styles.badge} ${styles[tier.badgeClass]}`}>{tier.badge}</span>
                <span className={styles.examCodes}>{tier.examCode}</span>
              </div>

              <h4 className={styles.tierLevel}>{tier.level}</h4>
              <p className={styles.examTitle}>{tier.examTitle}</p>
            </div>

            <div className={styles.priceContainer}>
              <div className={styles.priceRow}>
                <span className={styles.priceUSD}>{tier.priceUSD}</span>
                <span className={styles.pricePeriod}>/ exam attempt</span>
              </div>
              <span className={styles.priceINRContext}>
                Approx {tier.priceINRContext}
              </span>
            </div>

            <div className={styles.specsList}>
              <div className={styles.specItem}>
                <span className={styles.specLabel}>Exam Duration:</span>
                <span className={styles.specVal}>{tier.duration}</span>
              </div>
              <div className={styles.specItem}>
                <span className={styles.specLabel}>Question Format:</span>
                <span className={styles.specVal}>{tier.questions}</span>
              </div>
            </div>

            <p className={styles.tierDesc}>{tier.description}</p>

            <div className={styles.cardFooter}>
              <span className={styles.audienceLabel}>Best Suited For:</span>
              <p className={styles.audienceText}>{tier.targetAudience}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 50% Recertification Discount Tip */}
      <div className={styles.discountTipBanner}>
        <div className={styles.tipLeft}>
          <Award size={22} className={styles.tipIcon} />
          <div>
            <h4 className={styles.tipTitle}>
              Official AWS 50% Exam Discount Voucher Benefit
            </h4>
            <p className={styles.tipText}>
              Every time you pass any official AWS Certification exam, AWS automatically awards a <strong>50% discount benefit voucher</strong> directly in your AWS Certification Account (CertMetrics). You can apply this code toward any future Associate, Professional, or Specialty recertification exam!
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={onJumpToTable}
          className={styles.jumpTableBtn}
        >
          <span>View All 11 Active Exams</span>
          <ArrowRight size={14} />
        </button>
      </div>
    </section>
  );
}

export default AWSPricingCards;
