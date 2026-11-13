import React from 'react';
import { Clock, Activity, Star, Medal, TrendingUp, ChevronRight } from 'lucide-react';
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
    salary: '₹2.5 – 4.5 LPA',
    growthText: 'Entry level',
    progressPercent: 18,
    isFinal: false,
    rolePosition: 'left' // Role on left, Salary on right
  },
  {
    id: 'step-2',
    nodeIcon: Activity,
    nodeLabel: '1–3 YRS',
    yearsTag: '1–3 YEARS',
    roleTitle: 'Network Engineer / System Admin',
    responsibilities: 'Routing protocols, VLANs, IP services & maintenance',
    nextCertification: 'Next: CCNP Enterprise',
    salary: '₹4.5 – 8 LPA',
    growthText: '+78% growth',
    progressPercent: 38,
    isFinal: false,
    rolePosition: 'right' // Salary on left, Role on right
  },
  {
    id: 'step-3',
    nodeIcon: Star,
    nodeLabel: '3–5 YRS',
    yearsTag: '3–5 YEARS',
    roleTitle: 'Senior Network Engineer',
    responsibilities: 'Network design, optimization & security',
    nextCertification: 'Next: CCIE Enterprise',
    salary: '₹8 – 15 LPA',
    growthText: '+233% growth',
    progressPercent: 68,
    isFinal: false,
    rolePosition: 'left' // Role on left, Salary on right
  },
  {
    id: 'step-4',
    nodeIcon: Medal,
    nodeLabel: '5+ YRS',
    yearsTag: '5+ YEARS',
    roleTitle: 'Network Architect / Infra Manager',
    responsibilities: 'Enterprise architecture, automation & multi-site',
    nextCertification: 'Next: Security / Cloud / SDN',
    salary: '₹15 – 25+ LPA',
    growthText: '+500% from start',
    progressPercent: 100,
    isFinal: true,
    rolePosition: 'right' // Salary on left, Role on right
  }
];

export function CareerGrowthRoadmap() {
  return (
    <section className={styles.careerGrowthSection} id="career-growth">
      <div className={styles.sectionContainer}>
        {/* Header Block */}
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

        {/* Timeline Desktop Grid */}
        <div className={styles.timelineWrapper}>
          {/* Vertical Central Spine Line */}
          <div className={styles.timelineSpine} aria-hidden="true" />

          {/* Timeline Milestones */}
          <div className={styles.stepsList}>
            {careerSteps.map((step) => {
              const NodeIcon = step.nodeIcon;
              const isRoleLeft = step.rolePosition === 'left';
              const isFinal = step.isFinal;

              return (
                <div
                  key={step.id}
                  className={`${styles.stepRow} ${isFinal ? styles.finalStep : ''}`}
                >
                  {/* Left Column Content */}
                  <div className={`${styles.colCard} ${styles.colLeft}`}>
                    {isRoleLeft ? (
                      /* Role Card on Left */
                      <div
                        className={`${styles.roleCard} ${styles.roleCardLeft} ${
                          isFinal ? styles.roleCardFinal : ''
                        }`}
                      >
                        <div className={styles.yearsTag}>
                          <TrendingUp size={12} className={styles.trendIcon} />
                          <span>{step.yearsTag}</span>
                        </div>
                        <h3 className={styles.roleTitle}>{step.roleTitle}</h3>
                        <p className={styles.responsibilitiesText}>
                          {step.responsibilities}
                        </p>
                        <div className={styles.nextCertLink}>
                          <span>{step.nextCertification}</span>
                          <ChevronRight size={14} className={styles.certArrow} />
                        </div>
                      </div>
                    ) : (
                      /* Salary Card on Left */
                      <div className={`${styles.salaryCard} ${styles.salaryCardLeft}`}>
                        <span className={styles.salaryLabel}>AVG. SALARY IN INDIA</span>
                        <div className={styles.salaryAmount}>{step.salary}</div>
                        <div className={styles.growthBadge}>
                          <TrendingUp size={12} className={styles.growthIcon} />
                          <span>{step.growthText}</span>
                        </div>
                        <div className={styles.progressBarTrack}>
                          <div
                            className={
                              isFinal
                                ? styles.progressBarFillFinal
                                : styles.progressBarFill
                            }
                            style={{ width: `${step.progressPercent}%` }}
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Center Node Indicator */}
                  <div className={styles.centerNodeWrapper}>
                    <div
                      className={`${styles.nodeCircle} ${
                        isFinal ? styles.nodeCircleFinal : ''
                      }`}
                    >
                      <NodeIcon size={18} className={styles.nodeIconSvg} />
                    </div>
                    <span
                      className={`${styles.nodeLabel} ${
                        isFinal ? styles.nodeLabelFinal : ''
                      }`}
                    >
                      {step.nodeLabel}
                    </span>
                  </div>

                  {/* Right Column Content */}
                  <div className={`${styles.colCard} ${styles.colRight}`}>
                    {isRoleLeft ? (
                      /* Salary Card on Right */
                      <div className={`${styles.salaryCard} ${styles.salaryCardRight}`}>
                        <span className={styles.salaryLabel}>AVG. SALARY IN INDIA</span>
                        <div className={styles.salaryAmount}>{step.salary}</div>
                        <div className={styles.growthBadge}>
                          <TrendingUp size={12} className={styles.growthIcon} />
                          <span>{step.growthText}</span>
                        </div>
                        <div className={styles.progressBarTrack}>
                          <div
                            className={
                              isFinal
                                ? styles.progressBarFillFinal
                                : styles.progressBarFill
                            }
                            style={{ width: `${step.progressPercent}%` }}
                          />
                        </div>
                      </div>
                    ) : (
                      /* Role Card on Right */
                      <div
                        className={`${styles.roleCard} ${styles.roleCardRight} ${
                          isFinal ? styles.roleCardFinal : ''
                        }`}
                      >
                        <div className={styles.yearsTag}>
                          <TrendingUp size={12} className={styles.trendIcon} />
                          <span>{step.yearsTag}</span>
                        </div>
                        <h3 className={styles.roleTitle}>{step.roleTitle}</h3>
                        <p className={styles.responsibilitiesText}>
                          {step.responsibilities}
                        </p>
                        <div
                          className={`${styles.nextCertLink} ${
                            isFinal ? styles.nextCertLinkFinal : ''
                          }`}
                        >
                          <ChevronRight size={14} className={styles.certArrowLead} />
                          <span>{step.nextCertification}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Mobile Unified Card View (<= 768px) */}
                  <div
                    className={`${styles.mobileStepCard} ${
                      isFinal ? styles.mobileStepCardFinal : ''
                    }`}
                  >
                    <div className={styles.mobileCardHeader}>
                      <div className={styles.mobileNodeBadge}>
                        <NodeIcon size={16} />
                        <span>{step.nodeLabel}</span>
                      </div>
                      <div className={styles.yearsTag}>
                        <TrendingUp size={12} className={styles.trendIcon} />
                        <span>{step.yearsTag}</span>
                      </div>
                    </div>

                    <h3 className={styles.roleTitle}>{step.roleTitle}</h3>
                    <p className={styles.responsibilitiesText}>
                      {step.responsibilities}
                    </p>

                    <div className={styles.mobileSalaryBox}>
                      <div className={styles.mobileSalaryTop}>
                        <span className={styles.salaryLabel}>AVG. SALARY IN INDIA</span>
                        <div className={styles.growthBadge}>
                          <TrendingUp size={12} className={styles.growthIcon} />
                          <span>{step.growthText}</span>
                        </div>
                      </div>
                      <div className={styles.salaryAmount}>{step.salary}</div>
                      <div className={styles.progressBarTrack}>
                        <div
                          className={
                            isFinal
                              ? styles.progressBarFillFinal
                              : styles.progressBarFill
                          }
                          style={{ width: `${step.progressPercent}%` }}
                        />
                      </div>
                    </div>

                    <div
                      className={`${styles.nextCertLink} ${
                        isFinal ? styles.nextCertLinkFinal : ''
                      }`}
                    >
                      <span>{step.nextCertification}</span>
                      <ChevronRight size={14} className={styles.certArrow} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
