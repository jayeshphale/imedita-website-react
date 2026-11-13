import React, { useState } from 'react';
import {
  Clock,
  Activity,
  Star,
  Medal,
  TrendingUp,
  ChevronRight,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Compass,
  Layers
} from 'lucide-react';
import styles from './CareerGrowthRoadmap.module.css';

const careerSteps = [
  {
    id: 'step-1',
    nodeIcon: Clock,
    nodeLabel: 'START',
    yearsTag: '0–1 YEAR',
    multiplier: '1.0× Base',
    roleTitle: 'Network Support / NOC Engineer',
    responsibilities: 'Monitoring, troubleshooting & device configuration',
    nextCertification: 'Next: CCNA Certification',
    salary: '₹2.5 – 4.5 LPA',
    growthText: 'Entry level',
    progressPercent: 20,
    skills: ['Cisco IOS', 'Packet Tracer', 'VLANs', 'Subnetting', 'CLI Debugging'],
    isFinal: false,
    rolePosition: 'left'
  },
  {
    id: 'step-2',
    nodeIcon: Activity,
    nodeLabel: '1–3 YRS',
    yearsTag: '1–3 YEARS',
    multiplier: '2.0× Growth',
    roleTitle: 'Network Engineer / System Admin',
    responsibilities: 'Routing protocols, VLANs, IP services & maintenance',
    nextCertification: 'Next: CCNP Enterprise',
    salary: '₹4.5 – 8 LPA',
    growthText: '+78% growth',
    progressPercent: 42,
    skills: ['OSPF & EIGRP', 'EtherChannel', 'DHCP & NAT', 'Wireshark', 'IPsec VPN'],
    isFinal: false,
    rolePosition: 'right'
  },
  {
    id: 'step-3',
    nodeIcon: Star,
    nodeLabel: '3–5 YRS',
    yearsTag: '3–5 YEARS',
    multiplier: '4.2× Surge',
    roleTitle: 'Senior Network Engineer',
    responsibilities: 'Network design, optimization & security',
    nextCertification: 'Next: CCIE Enterprise',
    salary: '₹8 – 15 LPA',
    growthText: '+233% growth',
    progressPercent: 72,
    skills: ['BGP Routing', 'Firewall ACLs', 'QoS Policies', 'Python Netmiko', 'Redundancy (HSRP)'],
    isFinal: false,
    rolePosition: 'left'
  },
  {
    id: 'step-4',
    nodeIcon: Medal,
    nodeLabel: '5+ YRS',
    yearsTag: '5+ YEARS',
    multiplier: '8.0× Pinnacle',
    roleTitle: 'Network Architect / Infra Manager',
    responsibilities: 'Enterprise architecture, automation & multi-site',
    nextCertification: 'Next: Security / Cloud / SDN',
    salary: '₹15 – 25+ LPA',
    growthText: '+500% from start',
    progressPercent: 100,
    skills: ['SD-WAN Fabric', 'Cisco DNA Center', 'Multi-Cloud Interconnect', 'Zero Trust', 'Leadership'],
    isFinal: true,
    rolePosition: 'right'
  }
];

export function CareerGrowthRoadmap({ onOpenDemo }) {
  const [activeStep, setActiveStep] = useState(null);

  const handleCtaClick = () => {
    if (onOpenDemo) {
      onOpenDemo('Cisco CCNA (200-301) Career Counseling');
    } else {
      const demoEl = document.getElementById('demo-request');
      if (demoEl) demoEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.careerGrowthSection} id="career-growth">
      {/* Background Decorative Tech Ambience */}
      <div className={styles.bgGlowAura} aria-hidden="true" />
      <div className={styles.bgGridWatermark} aria-hidden="true" />

      <div className={styles.sectionContainer}>
        {/* Header Block */}
        <div className={styles.headerBlock}>
          <div className={styles.eyebrowBadge}>
            <Sparkles size={13} className={styles.sparkleIcon} />
            <span>CAREER GROWTH</span>
          </div>
          <h2 className={styles.sectionHeading}>
            Where CCNA takes you over the <br className={styles.headingBreak} />
            next 6 years
          </h2>
          <p className={styles.sectionSubtext}>
            Explore common networking roles, responsibilities, and salary growth opportunities after CCNA.
          </p>

          {/* Interactive Fast-Filter Pills */}
          <div className={styles.filterPillsRow}>
            <button
              type="button"
              className={`${styles.filterPill} ${activeStep === null ? styles.filterPillActive : ''}`}
              onClick={() => setActiveStep(null)}
            >
              <Layers size={13} />
              <span>Full 6-Year Path</span>
            </button>
            {careerSteps.map((step) => (
              <button
                key={step.id}
                type="button"
                className={`${styles.filterPill} ${
                  activeStep === step.id ? styles.filterPillActive : ''
                } ${step.isFinal ? styles.filterPillFinal : ''}`}
                onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
              >
                <span>{step.yearsTag}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Desktop Grid */}
        <div className={styles.timelineWrapper}>
          {/* Animated Fiber-Optic Central Spine */}
          <div className={styles.timelineSpineContainer} aria-hidden="true">
            <div className={styles.timelineSpineBase} />
            <div className={styles.timelineSpineBeam} />
          </div>

          {/* Timeline Milestones */}
          <div className={styles.stepsList}>
            {careerSteps.map((step) => {
              const NodeIcon = step.nodeIcon;
              const isRoleLeft = step.rolePosition === 'left';
              const isFinal = step.isFinal;
              const isDimmed = activeStep !== null && activeStep !== step.id;
              const isHighlighted = activeStep === step.id;

              return (
                <div
                  key={step.id}
                  className={`${styles.stepRow} ${isFinal ? styles.finalStep : ''} ${
                    isDimmed ? styles.stepDimmed : ''
                  } ${isHighlighted ? styles.stepHighlighted : ''}`}
                  onMouseEnter={() => setActiveStep(step.id)}
                  onMouseLeave={() => setActiveStep(null)}
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
                        <div className={styles.cardHeaderRow}>
                          <span className={styles.multiplierBadge}>{step.multiplier}</span>
                          <div className={styles.yearsTag}>
                            <TrendingUp size={12} className={styles.trendIcon} />
                            <span>{step.yearsTag}</span>
                          </div>
                        </div>

                        <h3 className={styles.roleTitle}>{step.roleTitle}</h3>
                        <p className={styles.responsibilitiesText}>
                          {step.responsibilities}
                        </p>

                        {/* Interactive Skills Pill Cluster */}
                        <div className={styles.skillsCluster}>
                          {step.skills.map((skill) => (
                            <span key={skill} className={styles.skillPill}>
                              {skill}
                            </span>
                          ))}
                        </div>

                        <div className={styles.nextCertLink}>
                          <span>{step.nextCertification}</span>
                          <ChevronRight size={14} className={styles.certArrow} />
                        </div>
                      </div>
                    ) : (
                      /* Salary Card on Left */
                      <div className={`${styles.salaryCard} ${styles.salaryCardLeft}`}>
                        <div className={styles.salaryHeaderRow}>
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
                        <div className={styles.salaryMetricsRow}>
                          <span className={styles.tierIndicator}>
                            {isFinal ? '🔥 Enterprise Elite Tier' : 'Career Progression'}
                          </span>
                          <span className={styles.progressPercentText}>
                            {step.progressPercent}% Target
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Center Node Indicator */}
                  <div className={styles.centerNodeWrapper}>
                    <div
                      className={`${styles.nodeCircle} ${
                        isFinal ? styles.nodeCircleFinal : ''
                      } ${isHighlighted ? styles.nodeCircleActive : ''}`}
                    >
                      <NodeIcon size={18} className={styles.nodeIconSvg} />
                      <div className={styles.nodeRippleRing} aria-hidden="true" />
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
                        <div className={styles.salaryHeaderRow}>
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
                        <div className={styles.salaryMetricsRow}>
                          <span className={styles.tierIndicator}>
                            {isFinal ? '🔥 Enterprise Elite Tier' : 'Career Progression'}
                          </span>
                          <span className={styles.progressPercentText}>
                            {step.progressPercent}% Target
                          </span>
                        </div>
                      </div>
                    ) : (
                      /* Role Card on Right */
                      <div
                        className={`${styles.roleCard} ${styles.roleCardRight} ${
                          isFinal ? styles.roleCardFinal : ''
                        }`}
                      >
                        <div className={styles.cardHeaderRow}>
                          <div className={styles.yearsTag}>
                            <TrendingUp size={12} className={styles.trendIcon} />
                            <span>{step.yearsTag}</span>
                          </div>
                          <span className={styles.multiplierBadge}>{step.multiplier}</span>
                        </div>

                        <h3 className={styles.roleTitle}>{step.roleTitle}</h3>
                        <p className={styles.responsibilitiesText}>
                          {step.responsibilities}
                        </p>

                        {/* Interactive Skills Pill Cluster */}
                        <div className={styles.skillsCluster}>
                          {step.skills.map((skill) => (
                            <span key={skill} className={styles.skillPill}>
                              {skill}
                            </span>
                          ))}
                        </div>

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

                  {/* Mobile Unified Step Card (<= 768px) */}
                  <div
                    className={`${styles.mobileStepCard} ${
                      isFinal ? styles.mobileStepCardFinal : ''
                    }`}
                  >
                    <div className={styles.mobileCardHeader}>
                      <div className={styles.mobileNodeBadge}>
                        <NodeIcon size={15} />
                        <span>{step.nodeLabel}</span>
                      </div>
                      <div className={styles.mobileHeaderTags}>
                        <span className={styles.multiplierBadge}>{step.multiplier}</span>
                        <div className={styles.yearsTag}>
                          <TrendingUp size={12} className={styles.trendIcon} />
                          <span>{step.yearsTag}</span>
                        </div>
                      </div>
                    </div>

                    <h3 className={styles.roleTitle}>{step.roleTitle}</h3>
                    <p className={styles.responsibilitiesText}>
                      {step.responsibilities}
                    </p>

                    {/* Mobile Skills */}
                    <div className={styles.skillsCluster}>
                      {step.skills.map((skill) => (
                        <span key={skill} className={styles.skillPill}>
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Mobile Salary Box */}
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

        {/* Unique Career Acceleration Bottom HUD */}
        <div className={styles.careerSummaryHud}>
          <div className={styles.hudLeftBlock}>
            <div className={styles.hudIconBadge}>
              <Compass size={22} className={styles.hudIcon} />
            </div>
            <div className={styles.hudTextWrapper}>
              <h4 className={styles.hudTitle}>Ready to Chart Your CCNA-to-Architect Trajectory?</h4>
              <p className={styles.hudSubtitle}>
                Get a personalized 1-on-1 profile evaluation and lab roadmap with I-Medita’s CCIE certified engineering faculty.
              </p>
            </div>
          </div>
          <button
            type="button"
            className={styles.hudCtaButton}
            onClick={handleCtaClick}
          >
            <span>Plan My Career Roadmap</span>
            <ArrowRight size={16} className={styles.hudBtnArrow} />
          </button>
        </div>
      </div>
    </section>
  );
}
