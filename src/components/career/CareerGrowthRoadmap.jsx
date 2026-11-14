import React, { useState } from 'react';
import {
  Clock,
  Activity,
  Star,
  Award,
  TrendingUp,
  ChevronRight,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Terminal,
  Server,
  Cpu,
  Layers,
  Zap,
  Briefcase,
  Compass
} from 'lucide-react';
import styles from './CareerGrowthRoadmap.module.css';

const careerSteps = [
  {
    id: 'step-1',
    stageNum: 'STAGE 01',
    nodeIcon: Clock,
    nodeLabel: 'START',
    yearsTag: '0–1 YEAR',
    roleTitle: 'Network Support / NOC Engineer',
    responsibilities: 'Monitoring link status, basic device configuration, resolving Layer 1/2 connectivity issues and ticketing.',
    skills: ['Cisco IOS CLI', 'IPv4 & IPv6 Subnetting', 'VLANs & Trunks', 'Packet Tracer Labs'],
    hiringRoles: 'NOC Analyst • Network Associate • L1 Support',
    nextCertification: 'Next: CCNA Certification (200-301)',
    salary: '₹2.5 – 4.5',
    salaryUnit: 'LPA',
    growthText: 'Entry Level Launchpad',
    growthBadgeClass: 'badgeBlue',
    progressPercent: 25,
    isFinal: false,
    rolePosition: 'left'
  },
  {
    id: 'step-2',
    stageNum: 'STAGE 02',
    nodeIcon: Activity,
    nodeLabel: '1–3 YRS',
    yearsTag: '1–3 YEARS',
    roleTitle: 'Network Engineer / Systems Admin',
    responsibilities: 'Configuring dynamic routing (OSPF), multi-switch VLAN fabrics, NAT, ACLs, and enterprise VPN tunnels.',
    skills: ['OSPF & EIGRP', 'Layer 3 Switching', 'NAT / DHCP / DNS', 'Wireshark & EVE-NG'],
    hiringRoles: 'Network Engineer • Systems Admin • Infrastructure Associate',
    nextCertification: 'Next: CCNP Enterprise (350-401 ENCOR)',
    salary: '₹4.5 – 8',
    salaryUnit: 'LPA',
    growthText: '+78% Salary Growth',
    growthBadgeClass: 'badgeCyan',
    progressPercent: 50,
    isFinal: false,
    rolePosition: 'right'
  },
  {
    id: 'step-3',
    stageNum: 'STAGE 03',
    nodeIcon: Star,
    nodeLabel: '3–5 YRS',
    yearsTag: '3–5 YEARS',
    roleTitle: 'Senior Network Engineer / Team Lead',
    responsibilities: 'Designing resilient WAN networks, BGP peering, Cisco SD-WAN deployments, security audits, and mentor teams.',
    skills: ['BGP Multi-Homing', 'Cisco SD-WAN', 'Network Security & Firewalls', 'Python for Network Automation'],
    hiringRoles: 'Sr. Network Specialist • Network Lead • Implementation Consultant',
    nextCertification: 'Next: CCIE Enterprise Infrastructure',
    salary: '₹8 – 15',
    salaryUnit: 'LPA',
    growthText: '+233% Career Surge',
    growthBadgeClass: 'badgePurple',
    progressPercent: 75,
    isFinal: false,
    rolePosition: 'left'
  },
  {
    id: 'step-4',
    stageNum: 'STAGE 04',
    nodeIcon: Award,
    nodeLabel: '6+ YRS',
    yearsTag: '6+ YEARS',
    roleTitle: 'Network Architect / Infrastructure Manager',
    responsibilities: 'Enterprise multi-site data center architecture, Cloud networking (AWS/Azure), SDN fabrics, and strategic infrastructure roadmap.',
    skills: ['Software Defined Networking (SDN)', 'Cisco DNA Center', 'Multi-Cloud Transit', 'Ansible & Terraform Automation'],
    hiringRoles: 'Principal Architect • Infrastructure Director • Solutions Architect',
    nextCertification: 'Next: Cloud Architect / CCIE Emeritus',
    salary: '₹15 – 25+',
    salaryUnit: 'LPA',
    growthText: '+800% Total Growth',
    growthBadgeClass: 'badgeOrange',
    progressPercent: 100,
    isFinal: true,
    rolePosition: 'right'
  }
];

export function CareerGrowthRoadmap({ onOpenDemo }) {
  const [activeStepId, setActiveStepId] = useState('step-1');

  const handleLinkClick = (e, targetRole) => {
    e.preventDefault();
    if (onOpenDemo) {
      onOpenDemo(`Career Guidance: ${targetRole}`);
    } else {
      const demoEl = document.getElementById('demo-request');
      if (demoEl) demoEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToStep = (stepId) => {
    setActiveStepId(stepId);
    const el = document.getElementById(stepId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className={styles.careerGrowthSection}>
      {/* Ambient Lighting Accents */}
      <div className={styles.ambientGlowTop} aria-hidden="true" />
      <div className={styles.ambientGlowBottom} aria-hidden="true" />

      <div className={styles.sectionContainer}>
        {/* ================= 1. SECTION HEADER ================= */}
        <header className={styles.headerBlock}>
          <div className={styles.eyebrowBadge}>
            <Sparkles size={13} className={styles.sparkleIcon} />
            <span>CISCO CAREER ROADMAP & SALARY TRAJECTORY</span>
          </div>

          <h2 className={styles.sectionHeading}>
            Where CCNA Takes You Over The <br className={styles.headingBreak} />
            Next 6 Years
          </h2>

          <p className={styles.sectionSubtext}>
            From your very first entry-level NOC role to becoming an elite Enterprise Network Architect earning <strong>₹15–25+ LPA</strong>. Here is your proven, milestone-by-milestone growth blueprint.
          </p>

          {/* Quick Stage Stepper Navigation Pills */}
          <div className={styles.quickStepNav} role="tablist" aria-label="Career Milestones">
            {careerSteps.map((step) => {
              const isActive = activeStepId === step.id;
              return (
                <button
                  key={`pill-${step.id}`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`${styles.navPill} ${isActive ? styles.navPillActive : ''} ${
                    step.isFinal ? styles.navPillFinal : ''
                  }`}
                  onClick={() => scrollToStep(step.id)}
                >
                  <span className={styles.pillIndex}>{step.nodeLabel}</span>
                  <span className={styles.pillSalary}>{step.salary} LPA</span>
                </button>
              );
            })}
          </div>
        </header>

        {/* ================= 2. DESKTOP TIMELINE ROADMAP ================= */}
        <div className={styles.timelineWrapper}>
          {/* Continuous Glowing Gradient Central Spine */}
          <div className={styles.timelineSpine} aria-hidden="true">
            <div className={styles.spineGlowOverlay} />
          </div>

          {/* Steps List */}
          <div className={styles.stepsList}>
            {careerSteps.map((step) => {
              const NodeIcon = step.nodeIcon;
              const isRoleLeft = step.rolePosition === 'left';
              const isFinal = step.isFinal;
              const isActive = activeStepId === step.id;

              return (
                <div
                  key={step.id}
                  id={step.id}
                  className={`${styles.stepRow} ${isFinal ? styles.finalStepRow : ''} ${
                    isActive ? styles.stepRowHighlighted : ''
                  }`}
                  onMouseEnter={() => setActiveStepId(step.id)}
                >
                  {/* Left Column Content */}
                  <div className={`${styles.colCard} ${styles.colLeft}`}>
                    {isRoleLeft ? (
                      /* ROLE CARD (LEFT) */
                      <div className={`${styles.card} ${styles.roleCard} ${styles.roleCardLeft}`}>
                        <div className={styles.cardHeaderRow}>
                          <span className={styles.stageIndexBadge}>{step.stageNum}</span>
                          <span className={styles.yearsPill}>
                            <TrendingUp size={12} className={styles.trendIcon} />
                            <span>{step.yearsTag}</span>
                          </span>
                        </div>

                        <h3 className={styles.roleTitle}>{step.roleTitle}</h3>
                        <p className={styles.responsibilitiesText}>
                          {step.responsibilities}
                        </p>

                        {/* Tech Stack Chips */}
                        <div className={styles.skillsChipsRow}>
                          {step.skills.map((skill, sIdx) => (
                            <span key={sIdx} className={styles.skillChip}>
                              <Terminal size={11} className={styles.chipIcon} />
                              <span>{skill}</span>
                            </span>
                          ))}
                        </div>

                        {/* Target Hiring Roles */}
                        <div className={styles.hiringRolesMeta}>
                          <Briefcase size={12} className={styles.hiringIcon} />
                          <span>{step.hiringRoles}</span>
                        </div>

                        {/* Next Milestone Action Link */}
                        <a
                          href="#demo-request"
                          className={styles.certActionLink}
                          onClick={(e) => handleLinkClick(e, step.roleTitle)}
                        >
                          <span>{step.nextCertification}</span>
                          <ChevronRight size={14} className={styles.certChevron} />
                        </a>
                      </div>
                    ) : (
                      /* SALARY CARD (LEFT) */
                      <div className={`${styles.card} ${styles.salaryCard} ${styles.salaryCardLeft}`}>
                        <div className={styles.salaryHeaderRow}>
                          <span className={styles.salaryTopLabel}>AVERAGE SALARY IN INDIA</span>
                          <span className={`${styles.growthBadge} ${styles[step.growthBadgeClass]}`}>
                            <Zap size={11} />
                            <span>{step.growthText}</span>
                          </span>
                        </div>

                        <div className={styles.salaryNumberBox}>
                          <span className={styles.salaryCurrencySymbol}></span>
                          <span className={styles.salaryAmountText}>{step.salary}</span>
                          <span className={styles.salaryUnitText}>{step.salaryUnit}</span>
                        </div>

                        {/* Progression Bar Track */}
                        <div className={styles.progressionContainer}>
                          <div className={styles.progressionLabelRow}>
                            <span>Salary Potential Milestone</span>
                            <span className={styles.percentText}>{step.progressPercent}%</span>
                          </div>
                          <div className={styles.progressBarTrack}>
                            <div
                              className={`${styles.progressFill} ${
                                isFinal ? styles.progressFillOrange : styles.progressFillBlue
                              }`}
                              style={{ width: `${step.progressPercent}%` }}
                            />
                          </div>
                        </div>

                        <div className={styles.salarySubnote}>
                          Based on verified compensation data across 100+ hiring partners in India
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Center Node Indicator Orb */}
                  <div className={styles.centerNodeWrapper}>
                    <div
                      className={`${styles.nodeCircle} ${
                        isFinal ? styles.nodeCircleOrange : styles.nodeCircleBlue
                      } ${isActive ? styles.nodeCircleActive : ''}`}
                    >
                      <NodeIcon size={19} className={styles.nodeIconSvg} strokeWidth={2.4} />
                      <div className={styles.nodePulseRing} />
                    </div>
                    <span className={`${styles.nodeLabel} ${isFinal ? styles.nodeLabelOrange : ''}`}>
                      {step.nodeLabel}
                    </span>
                  </div>

                  {/* Right Column Content */}
                  <div className={`${styles.colCard} ${styles.colRight}`}>
                    {isRoleLeft ? (
                      /* SALARY CARD (RIGHT) */
                      <div className={`${styles.card} ${styles.salaryCard} ${styles.salaryCardRight}`}>
                        <div className={styles.salaryHeaderRow}>
                          <span className={styles.salaryTopLabel}>AVERAGE SALARY IN INDIA</span>
                          <span className={`${styles.growthBadge} ${styles[step.growthBadgeClass]}`}>
                            <Zap size={11} />
                            <span>{step.growthText}</span>
                          </span>
                        </div>

                        <div className={styles.salaryNumberBox}>
                          <span className={styles.salaryCurrencySymbol}></span>
                          <span className={styles.salaryAmountText}>{step.salary}</span>
                          <span className={styles.salaryUnitText}>{step.salaryUnit}</span>
                        </div>

                        {/* Progression Bar Track */}
                        <div className={styles.progressionContainer}>
                          <div className={styles.progressionLabelRow}>
                            <span>Salary Potential Milestone</span>
                            <span className={styles.percentText}>{step.progressPercent}%</span>
                          </div>
                          <div className={styles.progressBarTrack}>
                            <div
                              className={`${styles.progressFill} ${
                                isFinal ? styles.progressFillOrange : styles.progressFillBlue
                              }`}
                              style={{ width: `${step.progressPercent}%` }}
                            />
                          </div>
                        </div>

                        <div className={styles.salarySubnote}>
                          Based on verified compensation data across 100+ hiring partners in India
                        </div>
                      </div>
                    ) : (
                      /* ROLE CARD (RIGHT) */
                      <div
                        className={`${styles.card} ${styles.roleCard} ${styles.roleCardRight} ${
                          isFinal ? styles.roleCardOrangeFinal : ''
                        }`}
                      >
                        <div className={styles.cardHeaderRow}>
                          <span className={`${styles.stageIndexBadge} ${isFinal ? styles.stageIndexOrange : ''}`}>
                            {step.stageNum}
                          </span>
                          <span className={`${styles.yearsPill} ${isFinal ? styles.yearsPillOrange : ''}`}>
                            <TrendingUp size={12} className={styles.trendIcon} />
                            <span>{step.yearsTag}</span>
                          </span>
                        </div>

                        <h3 className={styles.roleTitle}>{step.roleTitle}</h3>
                        <p className={styles.responsibilitiesText}>
                          {step.responsibilities}
                        </p>

                        {/* Tech Stack Chips */}
                        <div className={styles.skillsChipsRow}>
                          {step.skills.map((skill, sIdx) => (
                            <span
                              key={sIdx}
                              className={`${styles.skillChip} ${isFinal ? styles.skillChipOrange : ''}`}
                            >
                              <Terminal size={11} className={styles.chipIcon} />
                              <span>{skill}</span>
                            </span>
                          ))}
                        </div>

                        {/* Target Hiring Roles */}
                        <div className={styles.hiringRolesMeta}>
                          <Briefcase size={12} className={styles.hiringIcon} />
                          <span>{step.hiringRoles}</span>
                        </div>

                        {/* Next Milestone Action Link */}
                        <a
                          href="#demo-request"
                          className={`${styles.certActionLink} ${isFinal ? styles.certActionOrange : ''}`}
                          onClick={(e) => handleLinkClick(e, step.roleTitle)}
                        >
                          <span>{step.nextCertification}</span>
                          <ChevronRight size={14} className={styles.certChevron} />
                        </a>
                      </div>
                    )}
                  </div>

                  {/* ================= MOBILE UNIFIED CARD (<= 768px) ================= */}
                  <div
                    className={`${styles.mobileStepCard} ${
                      isFinal ? styles.mobileCardFinal : ''
                    }`}
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
                      <span className={styles.mobileStageBadge}>{step.stageNum}</span>
                      <span className={styles.yearsPill}>
                        <TrendingUp size={12} className={styles.trendIcon} />
                        <span>{step.yearsTag}</span>
                      </span>
                    </div>

                    <h3 className={styles.roleTitle}>{step.roleTitle}</h3>
                    <p className={styles.responsibilitiesText}>{step.responsibilities}</p>

                    {/* Mobile Skills Chips */}
                    <div className={styles.skillsChipsRow}>
                      {step.skills.map((skill, sIdx) => (
                        <span key={sIdx} className={styles.skillChip}>
                          <Terminal size={10} className={styles.chipIcon} />
                          <span>{skill}</span>
                        </span>
                      ))}
                    </div>

                    {/* Mobile Salary Box */}
                    <div className={styles.mobileSalaryBox}>
                      <div className={styles.mobileSalaryHeaderRow}>
                        <span className={styles.salaryTopLabel}>AVERAGE SALARY IN INDIA</span>
                        <span className={`${styles.growthBadge} ${styles[step.growthBadgeClass]}`}>
                          <Zap size={11} />
                          <span>{step.growthText}</span>
                        </span>
                      </div>

                      <div className={styles.salaryNumberBox}>
                        <span className={styles.salaryAmountText}>{step.salary}</span>
                        <span className={styles.salaryUnitText}>{step.salaryUnit}</span>
                      </div>

                      <div className={styles.progressBarTrack}>
                        <div
                          className={`${styles.progressFill} ${
                            isFinal ? styles.progressFillOrange : styles.progressFillBlue
                          }`}
                          style={{ width: `${step.progressPercent}%` }}
                        />
                      </div>
                    </div>

                    {/* Action link */}
                    <a
                      href="#demo-request"
                      className={`${styles.certActionLink} ${isFinal ? styles.certActionOrange : ''}`}
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

        {/* ================= 3. CAREER CATALYST CTA BANNER ================= */}
        <div className={styles.catalystBanner}>
          <div className={styles.catalystLeft}>
            <div className={styles.catalystOrb}>
              <Compass size={24} />
            </div>
            <div>
              <h3 className={styles.catalystHeading}>
                Where Do You Want Your Career to Be in 3 Years?
              </h3>
              <p className={styles.catalystSubtext}>
                Get a personalized 1-on-1 Cisco roadmap with a CCIE Senior Mentor. We map out your target roles, companies, and expected package.
              </p>
            </div>
          </div>

          <div className={styles.catalystRight}>
            <button
              type="button"
              className={styles.catalystDemoBtn}
              onClick={() => {
                if (onOpenDemo) onOpenDemo('Career Growth Catalyst Banner');
                else {
                  const demoEl = document.getElementById('demo-request');
                  if (demoEl) demoEl.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <Sparkles size={14} />
              <span>Get Free 1-on-1 Career Roadmap</span>
              <ArrowRight size={14} />
            </button>
            <a href="tel:+918750004411" className={styles.catalystCallBtn}>
              <span>Call Admissions: +91 87500 04411</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CareerGrowthRoadmap;
