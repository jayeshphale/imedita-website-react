import React from 'react';
import { 
  Zap, 
  Sparkles, 
  Award, 
  ArrowRight, 
  Clock, 
  CheckCircle2,
  Info
} from 'lucide-react';
import styles from './AWSPricingCards.module.css';

const TIERS = [
  {
    id: 'foundational',
    level: 'Foundational',
    badge: 'Entry Level',
    priceUSD: '$100',
    priceINR: '₹10,150 (incl. 18% GST)',
    popular: false,
    examCode: 'CLF-C02',
    name: 'AWS Cloud Practitioner',
    duration: '90 Mins',
    questions: '65 Questions',
    summary: 'Cloud fundamentals, billing models, and AWS shared security.',
    idealFor: 'Beginners & Non-Tech Leads'
  },
  {
    id: 'associate',
    level: 'Associate',
    badge: 'Most Popular',
    priceUSD: '$150',
    priceINR: '₹15,220 (incl. 18% GST)',
    popular: true,
    examCode: 'SAA, DVA, SOA, DEA, MLA',
    name: 'Solutions Architect / Developer / SysOps',
    duration: '130 Mins',
    questions: '65 Questions',
    summary: 'Hands-on architectural design, VPC networking, and serverless compute.',
    idealFor: 'Engineers & Tech Switchers'
  },
  {
    id: 'professional',
    level: 'Professional',
    badge: 'Advanced',
    priceUSD: '$300',
    priceINR: '₹30,440 (incl. 18% GST)',
    popular: false,
    examCode: 'SAP-C02, DOP-C02',
    name: 'Solutions Architect / DevOps Pro',
    duration: '180 Mins',
    questions: '75 Questions',
    summary: 'Multi-account AWS Organizations, Direct Connect, and enterprise migrations.',
    idealFor: 'Senior Cloud Architects (2+ yrs)'
  },
  {
    id: 'specialty',
    level: 'Specialty',
    badge: 'Deep Domain',
    priceUSD: '$300',
    priceINR: '₹30,440 (incl. 18% GST)',
    popular: false,
    examCode: 'ANS-C01, SCS-C02',
    name: 'Networking & Security Specialty',
    duration: '170 Mins',
    questions: '65 Questions',
    summary: 'Advanced hybrid networking, BGP, IAM policies, and cloud threat defense.',
    idealFor: 'Network & Security Specialists'
  }
];

export function AWSPricingCards() {
  return (
    <section className={styles.section} id="quick-answer" aria-labelledby="quick-answer-title">
      {/* Sleek Direct Answer Banner */}
      <div className={styles.banner}>
        <div className={styles.bannerHeader}>
          <div className={styles.iconBox}>
            <Zap className={styles.zapIcon} aria-hidden="true" />
          </div>
          <div>
            <span className={styles.eyebrow}>QUICK ANSWER • 2026 PUBLISHED FEES</span>
            <h2 id="quick-answer-title" className={styles.title}>
              How Much Does AWS Certification Cost in 2026?
            </h2>
          </div>
        </div>

        <p className={styles.leadText}>
          Standard official AWS exam fees are globally fixed in USD: 
          <strong> $100 USD</strong> for Foundational, 
          <strong> $150 USD</strong> for Associate, and 
          <strong> $300 USD</strong> for Professional and Specialty levels. 
          In India, a mandatory <strong>18% GST</strong> is added during Pearson VUE checkout, 
          bringing the payable total to approximately <strong>₹10,150</strong> (Foundational), 
          <strong>₹15,220</strong> (Associate), and <strong>₹30,440</strong> (Professional/Specialty).
        </p>
      </div>

      {/* 4 Clean, Airy, Uncluttered Cards */}
      <div className={styles.grid}>
        {TIERS.map((tier) => (
          <div
            key={tier.id}
            className={`${styles.card} ${tier.popular ? styles.cardPopular : ''}`}
          >
            {tier.popular && (
              <div className={styles.popularTag}>
                <Sparkles className={styles.sparkleIcon} aria-hidden="true" />
                <span>Most Popular</span>
              </div>
            )}

            <div className={styles.cardTop}>
              <span className={styles.tierName}>{tier.level}</span>
              <span className={styles.examPill}>{tier.examCode}</span>
            </div>

            <div className={styles.priceBlock}>
              <div className={styles.priceRow}>
                <span className={styles.usd}>{tier.priceUSD}</span>
                <span className={styles.perAttempt}>USD</span>
              </div>
              <div className={styles.inr}>{tier.priceINR}</div>
            </div>

            <div className={styles.specsRow}>
              <span>{tier.duration}</span>
              <span className={styles.dot}>•</span>
              <span>{tier.questions}</span>
            </div>

            <p className={styles.summary}>{tier.summary}</p>

            <div className={styles.cardFooter}>
              <span className={styles.idealLabel}>Ideal For:</span>
              <span className={styles.idealVal}>{tier.idealFor}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Sleek Minimalist 50% Loyalty Voucher Tip */}
      <div className={styles.loyaltyTip}>
        <div className={styles.loyaltyLeft}>
          <Award className={styles.loyaltyIcon} aria-hidden="true" />
          <p className={styles.loyaltyText}>
            <strong>AWS 50% Discount Benefit:</strong> Every time you pass any official AWS Certification, 
            AWS automatically deposits a <strong>50% off voucher</strong> in your AWS Certified Account to apply toward your next Associate, Professional, or Specialty exam.
          </p>
        </div>
        <a href="#fees-table" className={styles.jumpBtn}>
          <span>View Detailed Exam Catalog</span>
          <ArrowRight className={styles.arrowIcon} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}

export default AWSPricingCards;
