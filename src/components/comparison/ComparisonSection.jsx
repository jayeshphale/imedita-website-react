import React, { useState, useMemo } from 'react';
import {
  GraduationCap,
  Users,
  Server,
  BookOpen,
  Terminal,
  FileText,
  Briefcase,
  Code2,
  MessageSquare,
  PlayCircle,
  Building2,
  Star,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Check,
  X,
  Award
} from 'lucide-react';
import styles from './ComparisonSection.module.css';

const categories = [
  { id: 'all', label: 'All 10 Points' },
  { id: 'faculty', label: 'Faculty & Mentors' },
  { id: 'labs', label: 'Labs & Hardware' },
  { id: 'curriculum', label: 'Curriculum & Projects' },
  { id: 'placement', label: 'Placement & Support' }
];

const comparisonData = [
  {
    id: 'trainer-level',
    category: 'faculty',
    feature: 'Trainer Level & Expertise',
    icon: GraduationCap,
    imedita: 'CCIE Certified Trainers',
    imeditaDetail: 'Triple CCIE #39543 Saurabh Sir & veteran CCIE mentors (15+ yrs exp)',
    other: 'CCNA / CCNP trainers',
    otherDetail: 'Temporary instructors or freelance junior engineers'
  },
  {
    id: 'dedicated-lab-trainers',
    category: 'faculty',
    feature: 'Dedicated Lab Support Trainers',
    icon: Users,
    imedita: 'Separate Lab Support Team',
    imeditaDetail: 'Full-time CCNA/CCNP certified lab mentors for 1-on-1 practical troubleshooting',
    other: 'Usually Not Available',
    otherDetail: 'Theory trainer rushed to answer questions with no dedicated lab staff'
  },
  {
    id: 'lab-access',
    category: 'labs',
    feature: 'Physical Cisco Hardware Lab Access',
    icon: Server,
    imedita: 'Real Cisco Labs · 24×7 Access',
    imeditaDetail: 'Physical 2611XM, 1841, 2811 routers & 2960, 3560 switches in Baner, Pune racks',
    other: 'Limited Lab Hours',
    otherDetail: '1–2 hours per day only or virtual software simulators (Packet Tracer only)'
  },
  {
    id: 'curriculum',
    category: 'curriculum',
    feature: 'Official Syllabus Alignment',
    icon: BookOpen,
    imedita: 'Latest Cisco CCNA 200-301 v1.1',
    imeditaDetail: '100% official blueprint coverage + Cisco DNA Center, Automation & Python',
    other: 'Often Outdated Curriculum',
    otherDetail: 'Legacy routing topics taught without modern automation or SDN modules'
  },
  {
    id: 'hands-on-practice',
    category: 'labs',
    feature: 'Hands-on Lab Practice Ratio',
    icon: Terminal,
    imedita: 'Daily Practical Hardware Labs',
    imeditaDetail: '60% hands-on lab practice + 40% architecture theory on real Cisco CLI',
    other: 'Mostly Slide-Based Theory',
    otherDetail: '80% theoretical lectures with minimal or rushed hands-on CLI practice'
  },
  {
    id: 'study-material',
    category: 'curriculum',
    feature: 'Study Materials & Resources',
    icon: FileText,
    imedita: 'Physical Books + Cloud Portal',
    imeditaDetail: 'Hardcopy lab workbooks, HD recorded video portal for revision, study kits',
    other: 'Notes / Loose PDFs Only',
    otherDetail: 'Generic downloaded PDFs or photocopied notes without structured workbooks'
  },
  {
    id: 'placement-support',
    category: 'placement',
    feature: 'Placement Assistance & Drives',
    icon: Briefcase,
    imedita: 'Dedicated Placement Cell',
    imeditaDetail: '100+ hiring partners (TCS, Wipro, Airtel, Jio), technical & HR mock rounds',
    other: 'Basic Job Alerts Only',
    otherDetail: 'Forwarding public job openings without interview prep or direct employer ties'
  },
  {
    id: 'projects',
    category: 'curriculum',
    feature: 'Enterprise Network Topologies',
    icon: Code2,
    imedita: 'Real-Time Industry Projects',
    imeditaDetail: 'Multi-site enterprise network design, enterprise VLAN routing & WAN failover',
    other: 'Few or No Real Projects',
    otherDetail: 'Small standard textbook examples with zero enterprise complexity'
  },
  {
    id: 'doubt-support',
    category: 'placement',
    feature: '1-to-1 Doubt Support & Retake',
    icon: MessageSquare,
    imedita: '1-to-1 Support & Repeat Batches',
    imeditaDetail: 'Unlimited doubt clearing sessions, parallel batch access, zero session loss',
    other: 'Limited or No Doubt Support',
    otherDetail: 'Doubts piled up in crowded batches; missed lectures are permanently lost'
  },
  {
    id: 'demo-session',
    category: 'faculty',
    feature: 'Free Live Interactive Demo',
    icon: PlayCircle,
    imedita: 'Free 1-Hour Live Demo',
    imeditaDetail: 'Attend live session with CCIE trainer on real hardware before paying anything',
    other: 'Limited / Pre-Recorded Video',
    otherDetail: 'Sales recorded videos or immediate non-refundable payment demanded'
  }
];

export function ComparisonSection({ onOpenDemo }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredData = useMemo(() => {
    if (selectedCategory === 'all') return comparisonData;
    return comparisonData.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const handleEnrollClick = (source = 'Comparison Table') => {
    if (onOpenDemo) {
      onOpenDemo(source);
    } else {
      const demoSection = document.getElementById('demo-request');
      if (demoSection) {
        demoSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className={styles.comparisonSection} id="comparison" aria-label="CCNA Institutes Comparison">
      {/* Atmospheric Lighting Accents */}
      <div className={styles.ambientAuraTop} aria-hidden="true" />
      <div className={styles.ambientAuraBottom} aria-hidden="true" />

      <div className={styles.sectionContainer}>
        {/* ================= 1. SECTION HEADER ================= */}
        <header className={styles.headerBlock}>
          <div className={styles.eyebrowBadge}>
            <Sparkles size={13} className={styles.sparkleIcon} />
            <span>HEAD-TO-HEAD INSTITUTES BENCHMARK</span>
          </div>

          <h2 className={styles.sectionHeading}>
            What Sets Us Apart From Other <br className={styles.headingBreak} />
            CCNA Institutes
          </h2>

          <p className={styles.sectionSubtext}>
            A transparent head-to-head comparison so you can make an informed decision before investing your time and career.
          </p>

          {/* Category Filter Pills (matching Career Growth pill navigation) */}
          <div className={styles.quickCategoryNav} role="tablist" aria-label="Comparison categories">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              const count =
                cat.id === 'all'
                  ? comparisonData.length
                  : comparisonData.filter((i) => i.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`${styles.categoryPill} ${isActive ? styles.categoryPillActive : ''}`}
                  onClick={() => setSelectedCategory(cat.id)}
                >
                  <span>{cat.label}</span>
                  <span className={styles.categoryCountBadge}>{count}</span>
                </button>
              );
            })}
          </div>
        </header>

        {/* ================= 2. DESKTOP COMPARISON TABLE ================= */}
        <div className={styles.tableCard}>
          <div className={styles.scrollWrapper}>
            <table className={styles.comparisonTable}>
              {/* Table Column Header */}
              <thead>
                <tr className={styles.headerRow}>
                  <th className={styles.featureHeaderCol}>
                    <span className={styles.featureHeaderLabel}>CORE PARAMETERS</span>
                  </th>

                  {/* I-MEDITA COLUMN (SPOTLIGHT) */}
                  <th className={styles.imeditaHeaderCol}>
                    <div className={styles.imeditaSpotlightHeader}>
                      <div className={styles.brandIconBoxOrange}>
                        <GraduationCap size={20} className={styles.brandIcon} />
                      </div>
                      <div className={styles.brandInfo}>
                        <div className={styles.brandNameRow}>
                          <span className={styles.brandTitle}>I-Medita</span>
                          <span className={styles.authorizedBadge}>Cisco Authorized Labs</span>
                        </div>
                        <div className={styles.topRatedPill}>
                          <Star size={11} className={styles.starIcon} fill="currentColor" />
                          <span>#1 Rated Cisco Institute in India (4.9/5)</span>
                        </div>
                      </div>
                    </div>
                  </th>

                  {/* OTHER INSTITUTES COLUMN */}
                  <th className={styles.otherHeaderCol}>
                    <div className={styles.otherHeaderContent}>
                      <div className={styles.brandIconBoxSlate}>
                        <Building2 size={18} className={styles.brandIcon} />
                      </div>
                      <div className={styles.brandInfo}>
                        <span className={styles.otherTitle}>Other Local Institutes</span>
                        <div className={styles.genericPill}>
                          <span>Generic Uncertified Training</span>
                        </div>
                      </div>
                    </div>
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody>
                {filteredData.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <tr key={item.id} className={styles.dataRow}>
                      {/* Feature Name & Icon */}
                      <td className={styles.featureCell}>
                        <div className={styles.featureInner}>
                          <div className={styles.featureIconBadge}>
                            <Icon size={16} />
                          </div>
                          <div>
                            <span className={styles.featureName}>{item.feature}</span>
                          </div>
                        </div>
                      </td>

                      {/* I-Medita Cell (Elevated Spotlight) */}
                      <td className={styles.imeditaCell}>
                        <div className={styles.valueInnerImedita}>
                          <div className={styles.checkIconOrb}>
                            <Check size={14} strokeWidth={3} />
                          </div>
                          <div className={styles.valueTextCol}>
                            <span className={styles.imeditaText}>{item.imedita}</span>
                            <span className={styles.imeditaDetailText}>{item.imeditaDetail}</span>
                          </div>
                        </div>
                      </td>

                      {/* Other Institutes Cell */}
                      <td className={styles.otherCell}>
                        <div className={styles.valueInnerOther}>
                          <div className={styles.crossIconOrb}>
                            <X size={14} strokeWidth={2.8} />
                          </div>
                          <div className={styles.valueTextCol}>
                            <span className={styles.otherText}>{item.other}</span>
                            <span className={styles.otherDetailText}>{item.otherDetail}</span>
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })}

                {/* Overall Score Row */}
                <tr className={styles.scoreRow}>
                  <td className={styles.featureCell}>
                    <div className={styles.overallScoreMeta}>
                      <Award size={18} className={styles.scoreAwardIcon} />
                      <span className={styles.overallScoreLabel}>OVERALL INFRASTRUCTURE & FACULTY SCORE</span>
                    </div>
                  </td>

                  {/* I-Medita Score */}
                  <td className={styles.imeditaScoreCell}>
                    <div className={styles.scoreBlock}>
                      <div className={styles.scoreTopLine}>
                        <span className={styles.scoreBrandLabel}>I-MEDITA BENCHMARK</span>
                        <div className={styles.scoreValueWrapper}>
                          <span className={styles.scoreNumber}>10</span>
                          <span className={styles.scoreOutOf}>/ 10</span>
                        </div>
                      </div>
                      <div className={styles.progressBarTrack}>
                        <div className={styles.progressBarFillImedita} style={{ width: '100%' }} />
                      </div>
                      <span className={styles.scoreVerdict}>100% Verified Hardware & CCIE Standards</span>
                    </div>
                  </td>

                  {/* Others Score */}
                  <td className={styles.otherScoreCell}>
                    <div className={styles.scoreBlock}>
                      <div className={styles.scoreTopLine}>
                        <span className={styles.otherScoreLabel}>INDUSTRY AVERAGE</span>
                        <div className={styles.scoreValueWrapper}>
                          <span className={styles.otherScoreNumber}>3</span>
                          <span className={styles.scoreOutOf}>/ 10</span>
                        </div>
                      </div>
                      <div className={styles.progressBarTrack}>
                        <div className={styles.progressBarFillOthers} style={{ width: '30%' }} />
                      </div>
                      <span className={styles.scoreVerdictMuted}>Limited Infrastructure & Simulation Only</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Bottom Card Footer Bar */}
          <div className={styles.cardFooterBar}>
            <div className={styles.footerNoteWrapper}>
              <ShieldCheck size={18} className={styles.shieldIcon} />
              <p className={styles.footerNoteText}>
                Train with Triple CCIE-certified experts, gain hands-on experience on real Cisco rack hardware, and walk into certification exams & interviews 100% prepared.
              </p>
            </div>
            <button
              type="button"
              className={styles.enrollCtaBtn}
              onClick={() => handleEnrollClick('Comparison Table Bottom')}
            >
              <Sparkles size={15} />
              <span>Book Free Demo Session</span>
              <ArrowRight size={16} className={styles.btnArrow} />
            </button>
          </div>
        </div>

        {/* ================= 3. MOBILE COMPARISON CARDS DECK (<= 768px) ================= */}
        <div className={styles.mobileCardsDeck}>
          {filteredData.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={`mob-${item.id}`} className={styles.mobileCard}>
                <div className={styles.mobileCardHeader}>
                  <div className={styles.featureIconBadge}>
                    <Icon size={16} />
                  </div>
                  <h4 className={styles.mobileFeatureTitle}>{item.feature}</h4>
                  <span className={styles.mobileIndexBadge}>#{String(index + 1).padStart(2, '0')}</span>
                </div>

                {/* I-Medita Row (Highlighted) */}
                <div className={styles.mobileImeditaRow}>
                  <div className={styles.mobileRowTop}>
                    <span className={styles.mobileBrandPillImedita}>I-Medita Advantage</span>
                    <div className={styles.checkIconOrb}>
                      <Check size={13} strokeWidth={3} />
                    </div>
                  </div>
                  <span className={styles.mobileValueHeading}>{item.imedita}</span>
                  <p className={styles.mobileValueDesc}>{item.imeditaDetail}</p>
                </div>

                {/* Other Institutes Row (Muted) */}
                <div className={styles.mobileOtherRow}>
                  <div className={styles.mobileRowTop}>
                    <span className={styles.mobileBrandPillOther}>Other Institutes</span>
                    <div className={styles.crossIconOrb}>
                      <X size={13} strokeWidth={2.8} />
                    </div>
                  </div>
                  <span className={styles.mobileOtherHeading}>{item.other}</span>
                  <p className={styles.mobileOtherDesc}>{item.otherDetail}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default ComparisonSection;
