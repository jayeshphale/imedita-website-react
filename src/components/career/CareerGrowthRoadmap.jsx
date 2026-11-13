import React from 'react';
import {
  Clock,
  Activity,
  Star,
  Award,
  TrendingUp,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';
import styles from './CareerGrowthRoadmap.module.css';

const careerSteps = [
  {
    id: 'step-1',
    nodeIcon: Clock,
    nodeLabel: 'START',
    yearsTag: '0–1 YEAR',
    roleTitle: 'Network Support / NOC Engineer',
    responsibilities: 'Monitoring, troubleshooting & device configuration',
    nextCertification: 'Next: CCNA Certification',
    linkDirection: 'right', // Next: ... >
    salary: '₹2.5 – 4.5 LPA',
    growthText: 'Entry level',
    progressPercent: 20,
    isFinal: false,
    rolePosition: 'left'
  },
  {
    id: 'step-2',
    nodeIcon: Activity,
    nodeLabel: '1–3 YRS',
    yearsTag: '1–3 YEARS',
    roleTitle: 'Network Engineer / System Admin',
    responsibilities: 'Routing protocols, VLANs, IP services & maintenance',
    nextCertification: 'Next: CCNP Enterprise',
    linkDirection: 'left', // > Next: ...
    salary: '₹4.5 – 8 LPA',
    growthText: '+78% growth',
    progressPercent: 42,
    isFinal: false,
    rolePosition: 'right'
  },
  {
    id: 'step-3',
    nodeIcon: Star,
    nodeLabel: '3–5 YRS',
    yearsTag: '3–5 YEARS',
    roleTitle: 'Senior Network Engineer',
    responsibilities: 'Network design, optimization & security',
    nextCertification: 'Next: CCIE Enterprise',
    linkDirection: 'right', // Next: ... >
    salary: '₹8 – 15 LPA',
    growthText: '+233% growth',
    progressPercent: 72,
    isFinal: false,
    rolePosition: 'left'
  },
  {
    id: 'step-4',
    nodeIcon: Award,
    nodeLabel: '6+ YRS',
    yearsTag: '6+ YEARS',
    roleTitle: 'Network Architect / Infra Manager',
    responsibilities: 'Enterprise architecture, automation & multi-site',
    nextCertification: 'Next: Security / Cloud / SDN',
    linkDirection: 'left', // > Next: ...
    salary: '₹15 – 25+ LPA',
    growthText: '+800% from start',
    progressPercent: 100,
    isFinal: true,
    rolePosition: 'right'
  }
];

export function CareerGrowthRoadmap({ onOpenDemo }) {
  const handleLinkClick = (e, targetRole) => {
    e.preventDefault();
    if (onOpenDemo) {
      onOpenDemo(`Career Guidance: ${targetRole}`);
    } else {
      const demoEl = document.getElementById('demo-request');
      if (demoEl) demoEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.careerGrowthSection}>
      <div className={styles.sectionContainer}>
        {/* Header Block matching reference */}
        <div className={styles.headerBlock}>
          <div className={styles.eyebrowBadge}>
            <span>CAREER GROWTH</span>
          </div>
          <h2 className={styles.sectionHeading}>
            Where CCNA takes you over the <br className={styles.headingBreak} />
            next 6 years
          </h2>
          <p className={styles.sectionSubtext}>
            Explore common networking roles, responsibilities, and salary growth opportunities after CCNA.
          </p>
        </div>

        {/* Timeline Structure */}
        <div className={styles.timelineWrapper}>
          {/* Central Vertical Spine */}
          <div className={styles.timelineSpine} aria-hidden="true" />

          {/* Steps List */}
          <div className={styles.stepsList}>
            {careerSteps.map((step) => {
              const NodeIcon = step.nodeIcon;
              const isRoleLeft = step.rolePosition === 'left';
              const isFinal = step.isFinal;

              return (
                <div
                  key={step.id}
                  className={`${styles.stepRow} ${isFinal ? styles.finalStepRow : ''}`}
                >
                  {/* Left Column Content */}
                  <div className={`${styles.colCard} ${styles.colLeft}`}>
                    {isRoleLeft ? (
                      /* Role Card on Left */
                      <div className={`${styles.card} ${styles.roleCard} ${styles.roleCardLeft}`}>
                        <div className={styles.tagRowRight}>
                          <span className={styles.yearsTag}>
                            <TrendingUp size={13} className={styles.trendIcon} />
                            <span>{step.yearsTag}</span>
                          </span>
                        </div>
                        <h3 className={styles.roleTitle}>{step.roleTitle}</h3>
                        <p className={styles.responsibilitiesText}>
                          {step.responsibilities}
                        </p>
                        <a
                          href="#demo-request"
                          className={styles.certLinkRight}
                          onClick={(e) => handleLinkClick(e, step.roleTitle)}
                        >
                          <span>{step.nextCertification}</span>
                          <ChevronRight size={14} className={styles.certChevron} />
                        </a>
                      </div>
                    ) : (
                      /* Salary Card on Left */
                      <div className={`${styles.card} ${styles.salaryCard} ${styles.salaryCardLeft}`}>
                        <div className={styles.salaryTopLabel}>AVG. SALARY IN INDIA</div>
                        <div className={styles.salaryAmount}>{step.salary}</div>
                        <div className={styles.growthBadgeRow}>
                          <span className={styles.growthText}>
                            <TrendingUp size={13} className={styles.growthIcon} />
                            <span>{step.growthText}</span>
                          </span>
                        </div>
                        <div className={styles.progressBarTrack}>
                          <div
                            className={isFinal ? styles.progressFillOrange : styles.progressFillNavy}
                            style={{ width: `${step.progressPercent}%` }}
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Center Node Indicator */}
                  <div className={styles.centerNodeWrapper}>
                    <div
                      className={`${styles.nodeCircle} ${isFinal ? styles.nodeCircleOrange : styles.nodeCircleNavy}`}
                    >
                      <NodeIcon size={18} className={styles.nodeIconSvg} strokeWidth={2.2} />
                    </div>
                    <span className={styles.nodeLabel}>{step.nodeLabel}</span>
                  </div>

                  {/* Right Column Content */}
                  <div className={`${styles.colCard} ${styles.colRight}`}>
                    {isRoleLeft ? (
                      /* Salary Card on Right */
                      <div className={`${styles.card} ${styles.salaryCard} ${styles.salaryCardRight}`}>
                        <div className={styles.salaryTopLabel}>AVG. SALARY IN INDIA</div>
                        <div className={styles.salaryAmount}>{step.salary}</div>
                        <div className={styles.growthBadgeRow}>
                          <span className={styles.growthText}>
                            <TrendingUp size={13} className={styles.growthIcon} />
                            <span>{step.growthText}</span>
                          </span>
                        </div>
                        <div className={styles.progressBarTrack}>
                          <div
                            className={isFinal ? styles.progressFillOrange : styles.progressFillNavy}
                            style={{ width: `${step.progressPercent}%` }}
                          />
                        </div>
                      </div>
                    ) : (
                      /* Role Card on Right */
                      <div
                        className={`${styles.card} ${styles.roleCard} ${styles.roleCardRight} ${
                          isFinal ? styles.roleCardOrange : ''
                        }`}
                      >
                        <div className={styles.tagRowLeft}>
                          <span className={styles.yearsTag}>
                            <TrendingUp size={13} className={styles.trendIcon} />
                            <span>{step.yearsTag}</span>
                          </span>
                        </div>
                        <h3 className={styles.roleTitle}>{step.roleTitle}</h3>
                        <p className={styles.responsibilitiesText}>
                          {step.responsibilities}
                        </p>
                        <a
                          href="#demo-request"
                          className={`${styles.certLinkLeft} ${isFinal ? styles.certLinkOrange : ''}`}
                          onClick={(e) => handleLinkClick(e, step.roleTitle)}
                        >
                          <ChevronRight size={14} className={styles.certChevronLead} />
                          <span>{step.nextCertification}</span>
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Mobile Unified Card (<= 768px) */}
                  <div
                    className={`${styles.mobileStepCard} ${isFinal ? styles.mobileCardFinal : ''}`}
                  >
                    <div className={styles.mobileCardHeader}>
                      <div
                        className={`${styles.mobileNodePill} ${
                          isFinal ? styles.mobileNodePillOrange : ''
                        }`}
                      >
                        <NodeIcon size={14} strokeWidth={2.2} />
                        <span>{step.nodeLabel}</span>
                      </div>
                      <span className={styles.yearsTag}>
                        <TrendingUp size={12} className={styles.trendIcon} />
                        <span>{step.yearsTag}</span>
                      </span>
                    </div>

                    <h3 className={styles.roleTitle}>{step.roleTitle}</h3>
                    <p className={styles.responsibilitiesText}>{step.responsibilities}</p>

                    <div className={styles.mobileSalaryBox}>
                      <div className={styles.mobileSalaryRow}>
                        <span className={styles.salaryTopLabel}>AVG. SALARY IN INDIA</span>
                        <span className={styles.growthText}>
                          <TrendingUp size={12} className={styles.growthIcon} />
                          <span>{step.growthText}</span>
                        </span>
                      </div>
                      <div className={styles.salaryAmount}>{step.salary}</div>
                      <div className={styles.progressBarTrack}>
                        <div
                          className={isFinal ? styles.progressFillOrange : styles.progressFillNavy}
                          style={{ width: `${step.progressPercent}%` }}
                        />
                      </div>
                    </div>

                    <a
                      href="#demo-request"
                      className={`${styles.mobileCertLink} ${isFinal ? styles.certLinkOrange : ''}`}
                      onClick={(e) => handleLinkClick(e, step.roleTitle)}
                    >
                      <span>{step.nextCertification}</span>
                      <ChevronRight size={14} className={styles.certChevron} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
