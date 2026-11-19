import React, { useState } from 'react';
import { 
  Zap, 
  Sparkles, 
  Award, 
  ArrowRight, 
  Clock, 
  CheckCircle2,
  Layers,
  ShieldCheck,
  Target,
  FileText,
  LayoutGrid,
  Maximize2,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import styles from './AWSPricingCards.module.css';

const TIERS = [
  {
    id: 'foundational',
    level: 'Foundational',
    badge: 'Entry Level',
    priceUSD: '$100',
    priceINR: '₹10,150 (incl. 18% GST)',
    baseINR: '₹8,600',
    gstINR: '₹1,550',
    popular: false,
    duration: '90 Mins',
    questions: '65 Questions',
    passingScore: '700 / 1000',
    validity: '3 Years',
    summary: 'Cloud fundamentals, AWS global infrastructure, core services, and shared security models.',
    idealFor: 'Beginners, college graduates, sales/marketing leads, project managers, and non-technical career switchers.',
    activeExams: [
      { code: 'CLF-C02', name: 'AWS Certified Cloud Practitioner', link: 'https://aws.amazon.com/certification/certified-cloud-practitioner/' }
    ],
    skillsValidated: [
      'AWS global infrastructure (Regions, Availability Zones, Edge Locations)',
      'Basic cloud security, compliance, and AWS Shared Responsibility Model',
      'Core AWS compute, storage, database, and networking services',
      'AWS pricing models, billing tools, and AWS Cost Explorer'
    ],
    prerequisites: 'No technical prerequisites. 6 months general IT knowledge recommended.'
  },
  {
    id: 'associate',
    level: 'Associate',
    badge: 'Most Popular',
    priceUSD: '$150',
    priceINR: '₹15,220 (incl. 18% GST)',
    baseINR: '₹12,900',
    gstINR: '₹2,320',
    popular: true,
    duration: '130 Mins',
    questions: '65 Questions',
    passingScore: '720 / 1000',
    validity: '3 Years',
    summary: 'Hands-on architectural design, VPC networking, serverless compute, and resilient multi-tier deployments.',
    idealFor: 'Software engineers, cloud developers, system administrators, data engineers, and IT transitioners.',
    activeExams: [
      { code: 'SAA-C03', name: 'Solutions Architect – Associate', link: 'https://aws.amazon.com/certification/certified-solutions-architect-associate/' },
      { code: 'DVA-C02', name: 'Developer – Associate', link: 'https://aws.amazon.com/certification/certified-developer-associate/' },
      { code: 'SOA-C02', name: 'SysOps Administrator – Associate', link: 'https://aws.amazon.com/certification/certified-sysops-admin-associate/' },
      { code: 'DEA-C01', name: 'Data Engineer – Associate', link: 'https://aws.amazon.com/certification/certified-data-engineer-associate/' },
      { code: 'MLA-C01', name: 'Machine Learning Engineer – Associate', link: 'https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/' }
    ],
    skillsValidated: [
      'Designing resilient, high-performing architectures via AWS Well-Architected Framework',
      'Multi-tier VPC networking, subnets, route tables, and NAT Gateways',
      'Compute scaling with EC2 Auto Scaling, ECS containers, and AWS Lambda serverless',
      'Cloud data stores: S3, EBS, EFS, Amazon Aurora, and DynamoDB'
    ],
    prerequisites: 'No mandatory prerequisites. 1 year hands-on experience designing cloud systems recommended.'
  },
  {
    id: 'professional',
    level: 'Professional',
    badge: 'Senior Level',
    priceUSD: '$300',
    priceINR: '₹30,440 (incl. 18% GST)',
    baseINR: '₹25,800',
    gstINR: '₹4,640',
    popular: false,
    duration: '180 Mins',
    questions: '75 Questions (Dense Scenarios)',
    passingScore: '750 / 1000',
    validity: '3 Years',
    summary: 'Multi-account enterprise governance, hybrid connectivity, disaster recovery, and automated CI/CD pipelines.',
    idealFor: 'Senior cloud architects, principal DevOps leads, infrastructure managers, and enterprise consultants.',
    activeExams: [
      { code: 'SAP-C02', name: 'Solutions Architect – Professional', link: 'https://aws.amazon.com/certification/certified-solutions-architect-professional/' },
      { code: 'DOP-C02', name: 'DevOps Engineer – Professional', link: 'https://aws.amazon.com/certification/certified-devops-engineer-professional/' }
    ],
    skillsValidated: [
      'Multi-account AWS Organizations architecture, SCP policies, and IAM Identity Center',
      'Hybrid networking with AWS Direct Connect, Transit Gateway, and VPN failover',
      'Enterprise business continuity, cross-region replication, and automated RTO/RPO strategies',
      'Continuous deployment pipelines, blue/green deployments, and infrastructure as code'
    ],
    prerequisites: 'Prior Associate certification strongly recommended. 2+ years enterprise hands-on cloud design experience.'
  },
  {
    id: 'specialty',
    level: 'Specialty',
    badge: 'Domain Expert',
    priceUSD: '$300',
    priceINR: '₹30,440 (incl. 18% GST)',
    baseINR: '₹25,800',
    gstINR: '₹4,640',
    popular: false,
    duration: '170 Mins',
    questions: '65 Questions',
    passingScore: '750 / 1000',
    validity: '3 Years',
    summary: 'Advanced hybrid cloud networking, BGP routing, cryptographic security, KMS, and automated threat defense.',
    idealFor: 'Enterprise network architects, cloud cybersecurity specialists, compliance officers, and SecOps teams.',
    activeExams: [
      { code: 'ANS-C01', name: 'Advanced Networking – Specialty', link: 'https://aws.amazon.com/certification/certified-advanced-networking-specialty/' },
      { code: 'SCS-C02', name: 'Security – Specialty', link: 'https://aws.amazon.com/certification/certified-security-specialty/' }
    ],
    skillsValidated: [
      'Complex hybrid BGP routing, route reflectors, and multi-region AWS Transit Gateways',
      'Enterprise security controls, AWS WAF, AWS Shield Advanced, and GuardDuty forensics',
      'Data protection with AWS KMS key hierarchies, envelope encryption, and Secrets Manager',
      'Fine-grained IAM policy evaluation logic, permission boundaries, and condition keys'
    ],
    prerequisites: 'Deep domain expertise in network engineering (CCNA/CCNP background) or cybersecurity.'
  }
];

export function AWSPricingCards() {
  const [selectedTierId, setSelectedTierId] = useState('associate');
  const [viewMode, setViewMode] = useState('interactive'); // 'interactive' or 'grid'

  const activeTier = TIERS.find(t => t.id === selectedTierId) || TIERS[1];

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

      {/* Control Strip: Segmented Tier Tabs + View Toggle */}
      <div className={styles.controlsBar}>
        <div className={styles.segmentedTabs} role="tablist" aria-label="AWS Certification Tiers">
          {TIERS.map((tier) => {
            const isSelected = tier.id === selectedTierId && viewMode === 'interactive';
            return (
              <button
                key={tier.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                className={`${styles.segmentBtn} ${isSelected ? styles.segmentBtnActive : ''}`}
                onClick={() => {
                  setSelectedTierId(tier.id);
                  setViewMode('interactive');
                }}
              >
                <span className={styles.segmentName}>{tier.level}</span>
                <span className={styles.segmentFee}>{tier.priceUSD}</span>
                {tier.popular && <span className={styles.segmentBadge}>Popular</span>}
              </button>
            );
          })}
        </div>

        {/* View Mode Toggle Button */}
        <div className={styles.viewToggleWrap}>
          <button
            type="button"
            className={`${styles.modeBtn} ${viewMode === 'interactive' ? styles.modeBtnActive : ''}`}
            onClick={() => setViewMode('interactive')}
            title="Interactive Tier Explorer"
            aria-label="Interactive Tier Explorer"
          >
            <Maximize2 size={14} aria-hidden="true" />
            <span className={styles.modeText}>Interactive View</span>
          </button>
          <button
            type="button"
            className={`${styles.modeBtn} ${viewMode === 'grid' ? styles.modeBtnActive : ''}`}
            onClick={() => setViewMode('grid')}
            title="Compare All 4 Side-by-Side"
            aria-label="Compare All 4 Side-by-Side"
          >
            <LayoutGrid size={14} aria-hidden="true" />
            <span className={styles.modeText}>Compare All (4)</span>
          </button>
        </div>
      </div>

      {/* VIEW 1: INTERACTIVE EXPANDED SHOWCASE (Clean, Modern, Sutsutit) */}
      {viewMode === 'interactive' && (
        <div className={styles.showcaseCard} role="tabpanel">
          <div className={styles.showcaseGrid}>
            {/* Left Column: Pricing, Specs & Ideal Candidate */}
            <div className={styles.showcaseLeft}>
              <div className={styles.showcaseTopMeta}>
                <span className={styles.tierPillBadge}>{activeTier.level} Level</span>
                <span className={styles.badgeLabel}>{activeTier.badge}</span>
              </div>

              <div className={styles.heroPriceBlock}>
                <div className={styles.heroPriceRow}>
                  <span className={styles.heroUsd}>{activeTier.priceUSD}</span>
                  <span className={styles.heroCurrency}>USD</span>
                </div>
                <div className={styles.heroInrWrap}>
                  <span className={styles.heroInr}>{activeTier.priceINR}</span>
                  <span className={styles.inrBreakdown}>
                    (Base {activeTier.baseINR} + 18% GST {activeTier.gstINR})
                  </span>
                </div>
              </div>

              {/* 4 Spec Badges */}
              <div className={styles.specChipsRow}>
                <div className={styles.specChip}>
                  <Clock size={14} className={styles.specIcon} aria-hidden="true" />
                  <span>{activeTier.duration}</span>
                </div>
                <div className={styles.specChip}>
                  <FileText size={14} className={styles.specIcon} aria-hidden="true" />
                  <span>{activeTier.questions}</span>
                </div>
                <div className={styles.specChip}>
                  <Target size={14} className={styles.specIcon} aria-hidden="true" />
                  <span>Pass: {activeTier.passingScore}</span>
                </div>
                <div className={styles.specChip}>
                  <Award size={14} className={styles.specIcon} aria-hidden="true" />
                  <span>Valid: {activeTier.validity}</span>
                </div>
              </div>

              <div className={styles.idealCandidateBox}>
                <div className={styles.idealTitle}>Ideal Candidate Profile:</div>
                <p className={styles.idealText}>{activeTier.idealFor}</p>
              </div>

              <div className={styles.prereqNote}>
                <strong>Prerequisites:</strong> {activeTier.prerequisites}
              </div>
            </div>

            {/* Right Column: Active Exams in this Tier & Architecture Scope */}
            <div className={styles.showcaseRight}>
              <div className={styles.activeExamsHeader}>
                <h3 className={styles.activeExamsTitle}>
                  Active 2026 Certifications in this Tier ({activeTier.activeExams.length})
                </h3>
                <span className={styles.pearsonTag}>Pearson VUE Delivery</span>
              </div>

              <div className={styles.examList}>
                {activeTier.activeExams.map((exam) => (
                  <a
                    key={exam.code}
                    href={exam.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.examItem}
                  >
                    <div className={styles.examItemLeft}>
                      <span className={styles.examCodeBadge}>{exam.code}</span>
                      <span className={styles.examFullName}>{exam.name}</span>
                    </div>
                    <ExternalLink size={14} className={styles.examExternalIcon} aria-hidden="true" />
                  </a>
                ))}
              </div>

              <div className={styles.competenciesBox}>
                <h4 className={styles.competenciesTitle}>Core Competencies Validated:</h4>
                <ul className={styles.competenciesList}>
                  {activeTier.skillsValidated.map((skill, sIdx) => (
                    <li key={sIdx} className={styles.competencyItem}>
                      <CheckCircle2 size={15} className={styles.checkIcon} aria-hidden="true" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 2: ALL 4 TIERS SIDE-BY-SIDE (Clean, Un-cramped Cards) */}
      {viewMode === 'grid' && (
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
                <span className={styles.examPill}>{tier.activeExams.length} Exams</span>
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
      )}

      {/* Sleek Minimalist 50% Loyalty Voucher Tip */}
      <div className={styles.loyaltyTip}>
        <div className={styles.loyaltyLeft}>
          <div className={styles.loyaltyIconWrap}>
            <Award className={styles.loyaltyIcon} aria-hidden="true" />
          </div>
          <p className={styles.loyaltyText}>
            <strong>AWS 50% Loyalty Discount Benefit:</strong> Passing any official AWS exam automatically unlocks 
            a <strong>50% discount voucher</strong> inside your AWS Certified Account benefits. You can redeem this toward 
            any future Associate, Professional, or Specialty exam registration or recertification.
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
