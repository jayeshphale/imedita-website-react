import React, { useState } from 'react';
import { 
  Calendar, 
  Users, 
  GraduationCap, 
  Building2, 
  Star, 
  Briefcase,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import styles from './AboutImpactStats.module.css';

/**
 * Creative Bento Grid: Our Journey & Impact
 * Features:
 * - Interactive Decade Milestone Stepper (2014 Genesis -> 2018 Cisco Mega Lab -> 2022 Remote Pods -> 2026 Today)
 * - Large Bento Hero Metric Card with alumni hiring partner badges
 * - Verified 4.9★ Review highlight card
 * - Enterprise & Academic reach counters
 */
export function AboutImpactStats() {
  const [selectedMilestone, setSelectedMilestone] = useState(3); // default: 2026

  const milestones = [
    {
      year: '2014',
      title: 'Foundation in Pune',
      description: 'Founded with Maharashtra’s first dedicated physical Cisco rack and mission to replace packet simulators with true hardware CLI.',
      tag: 'Genesis'
    },
    {
      year: '2018',
      title: 'Mega Datacenter Lab',
      description: 'Expanded to 5,000+ sq. ft. multi-vendor datacenter housing Cisco Nexus 9000, ASA, and Checkpoint next-gen firewalls.',
      tag: 'Infrastructure'
    },
    {
      year: '2022',
      title: '24/7 Global Remote Pods',
      description: 'Pioneered round-the-clock remote hardware rack access, enabling learners from 20+ countries to practice on physical racks.',
      tag: 'Global Reach'
    },
    {
      year: '2026',
      title: '10,000+ Engineers & Automation',
      description: 'Surpassed 10,000 alumni milestone, introducing cutting-edge Cisco SD-WAN, Python Network Automation, and DevNet tracks.',
      tag: 'Current Milestone'
    }
  ];

  const alumniCompanies = [
    'Cisco Systems',
    'Orange Telecom',
    'TCS',
    'Wipro',
    'Infosys',
    'Accenture',
    'Tech Mahindra',
    'Jio 5G'
  ];

  return (
    <section className={styles.statsSection} aria-label="Our Journey and Impact Statistics">
      <div className={styles.container}>
        
        {/* Section Header */}
        <div className={styles.header}>
          <div className={styles.eyebrowBadge}>
            <TrendingUp size={13} className={styles.badgeIcon} />
            <span>OUR JOURNEY & IMPACT</span>
          </div>

          <h2 className={styles.sectionHeading}>
            Building Skills.{' '}
            <span className={styles.headingAccent}>Creating Opportunities.</span>
          </h2>

          <p className={styles.sectionDescription}>
            With more than a decade of experience in professional technology training, 
            I-Medita helps individuals, institutions and enterprises develop practical skills that power global digital infrastructure.
          </p>
        </div>

        {/* Creative Bento Grid */}
        <div className={styles.bentoGrid}>
          
          {/* BENTO CARD 1: Large Alumni Hero (Spans 2 columns) */}
          <div className={`${styles.bentoCard} ${styles.cardHeroAlumni}`}>
            <div className={styles.cardHeaderRow}>
              <div className={styles.iconBoxBlue}>
                <Users size={22} />
              </div>
              <span className={styles.bentoBadge}>ALUMNI IMPACT</span>
            </div>

            <div className={styles.heroMetricRow}>
              <div className={styles.heroNumber}>10,000+</div>
              <div className={styles.heroLabelGroup}>
                <h3 className={styles.heroTitle}>Engineers Trained &amp; Certified</h3>
                <p className={styles.heroSubtitle}>
                  From college freshers to enterprise network administrators and cloud architects.
                </p>
              </div>
            </div>

            {/* Alumni Placement Chips */}
            <div className={styles.alumniSection}>
              <div className={styles.alumniHeading}>
                <span>Alumni actively deployed at premier global tech enterprises:</span>
              </div>
              <div className={styles.alumniChipsGrid}>
                {alumniCompanies.map((comp, idx) => (
                  <span key={idx} className={styles.companyChip}>
                    <CheckCircle2 size={13} className={styles.chipCheck} />
                    {comp}
                  </span>
                ))}
              </div>
            </div>

            <div className={styles.cardAuraBlue} aria-hidden="true" />
          </div>

          {/* BENTO CARD 2: Interactive Decade Milestone Stepper */}
          <div className={`${styles.bentoCard} ${styles.cardMilestones}`}>
            <div className={styles.cardHeaderRow}>
              <div className={styles.iconBoxIndigo}>
                <Calendar size={22} />
              </div>
              <span className={styles.bentoBadge}>10+ YEARS JOURNEY</span>
            </div>

            <h3 className={styles.milestoneTitle}>A Decade of Technical Excellence</h3>

            {/* Interactive Timeline Tabs */}
            <div className={styles.timelineTabs}>
              {milestones.map((m, idx) => (
                <button
                  key={m.year}
                  type="button"
                  className={`${styles.timelineTabBtn} ${selectedMilestone === idx ? styles.tabActive : ''}`}
                  onClick={() => setSelectedMilestone(idx)}
                >
                  <span className={styles.tabYear}>{m.year}</span>
                  <span className={styles.tabTag}>{m.tag}</span>
                </button>
              ))}
            </div>

            {/* Active Milestone Card */}
            <div className={styles.activeMilestoneBox}>
              <div className={styles.milestoneBoxHeader}>
                <Sparkles size={14} className={styles.sparkleIcon} />
                <span className={styles.activeYearBadge}>{milestones[selectedMilestone].year} Milestone</span>
              </div>
              <h4 className={styles.activeTitle}>{milestones[selectedMilestone].title}</h4>
              <p className={styles.activeDesc}>{milestones[selectedMilestone].description}</p>
            </div>
          </div>

          {/* BENTO CARD 3: Rating & Student Trust */}
          <div className={`${styles.bentoCard} ${styles.cardRating}`}>
            <div className={styles.cardHeaderRow}>
              <div className={styles.iconBoxAmber}>
                <Star size={20} fill="#f59e0b" color="#f59e0b" />
              </div>
              <span className={styles.bentoBadgeGold}>VERIFIED REVIEWS</span>
            </div>

            <div className={styles.ratingNumber}>4.9<span className={styles.ratingMax}>/5</span></div>
            <div className={styles.starsRow}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
              ))}
            </div>

            <h3 className={styles.ratingTitle}>11,200+ Public Reviews</h3>
            <p className={styles.ratingDesc}>
              Independently verified reviews across Google, Justdial, and Sulekha by student engineers and corporate batches.
            </p>
          </div>

          {/* BENTO CARD 4: Academic Partnerships */}
          <div className={`${styles.bentoCard} ${styles.cardColleges}`}>
            <div className={styles.cardHeaderRow}>
              <div className={styles.iconBoxSky}>
                <GraduationCap size={20} />
              </div>
              <span className={styles.bentoBadge}>ACADEMIC REACH</span>
            </div>

            <div className={styles.compactNumber}>200+</div>
            <h3 className={styles.compactTitle}>Colleges &amp; Universities</h3>
            <p className={styles.compactDesc}>
              Faculty development, on-campus lab workshops, and technical seminars delivered across India.
            </p>
          </div>

          {/* BENTO CARD 5: Corporate Engagements */}
          <div className={`${styles.bentoCard} ${styles.cardCorporate}`}>
            <div className={styles.cardHeaderRow}>
              <div className={styles.iconBoxEmerald}>
                <Building2 size={20} />
              </div>
              <span className={styles.bentoBadgeEmerald}>ENTERPRISE CLIENTS</span>
            </div>

            <div className={styles.compactNumber}>100+</div>
            <h3 className={styles.compactTitle}>Corporate Upskilling Contracts</h3>
            <p className={styles.compactDesc}>
              Upskilling enterprise network engineering teams for Fortune 500, banking, and telecom organizations.
            </p>
          </div>

          {/* BENTO CARD 6: 100% Placement Support */}
          <div className={`${styles.bentoCard} ${styles.cardPlacement}`}>
            <div className={styles.cardHeaderRow}>
              <div className={styles.iconBoxViolet}>
                <Briefcase size={20} />
              </div>
              <span className={styles.bentoBadge}>CAREER DESK</span>
            </div>

            <div className={styles.compactNumber}>100%</div>
            <h3 className={styles.compactTitle}>Placement Assistance</h3>
            <p className={styles.compactDesc}>
              Rigorous CCIE technical mock interviews, resume rebuilding, and direct recruitment drive invites.
            </p>
          </div>

        </div>

        {/* Bottom Assurance Note */}
        <div className={styles.assuranceBanner}>
          <div className={styles.assuranceInner}>
            <ShieldCheck size={18} className={styles.assuranceIcon} />
            <span className={styles.assuranceText}>
              All metrics represent authentic institutional records verified through corporate training agreements and alumni career milestones.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default AboutImpactStats;
