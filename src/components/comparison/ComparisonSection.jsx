import React from 'react';
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
  CheckCircle2,
  XCircle,
  Building2,
  Star,
  ArrowRight
} from 'lucide-react';
import styles from './ComparisonSection.module.css';

const comparisonData = [
  {
    id: 'trainer-level',
    feature: 'Trainer level',
    icon: GraduationCap,
    imedita: 'CCIE certified trainers',
    other: 'CCNA / CCNP trainers'
  },
  {
    id: 'dedicated-lab-trainers',
    feature: 'Dedicated lab trainers',
    icon: Users,
    imedita: 'Separate lab support trainers',
    other: 'Usually not available'
  },
  {
    id: 'lab-access',
    feature: 'Lab access',
    icon: Server,
    imedita: 'Real Cisco labs · 24×7',
    other: 'Limited lab hours'
  },
  {
    id: 'curriculum',
    feature: 'Curriculum',
    icon: BookOpen,
    imedita: 'Latest CCNA 200-301',
    other: 'Often outdated'
  },
  {
    id: 'hands-on-practice',
    feature: 'Hands-on practice',
    icon: Terminal,
    imedita: 'Daily practical labs',
    other: 'Mostly theory'
  },
  {
    id: 'study-material',
    feature: 'Study material',
    icon: FileText,
    imedita: 'Physical books + digital',
    other: 'Notes / PDFs only'
  },
  {
    id: 'placement-support',
    feature: 'Placement support',
    icon: Briefcase,
    imedita: 'Dedicated placement help',
    other: 'Basic guidance'
  },
  {
    id: 'projects',
    feature: 'Projects',
    icon: Code2,
    imedita: 'Real-time projects',
    other: 'Few or none'
  },
  {
    id: 'doubt-support',
    feature: 'Doubt support',
    icon: MessageSquare,
    imedita: '1-to-1 support',
    other: 'Limited support'
  },
  {
    id: 'demo-session',
    feature: 'Demo session',
    icon: PlayCircle,
    imedita: 'Free demo available',
    other: 'Limited demo'
  }
];

export function ComparisonSection({ onOpenDemo }) {
  const handleEnrollClick = () => {
    if (onOpenDemo) {
      onOpenDemo('Cisco CCNA (200-301)');
    } else {
      const demoSection = document.getElementById('demo-request');
      if (demoSection) {
        demoSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className={styles.comparisonSection} id="comparison">
      <div className={styles.sectionContainer}>
        {/* Header Block */}
        <div className={styles.headerBlock}>
          <div className={styles.eyebrowBadge}>
            <span>CERTIFICATIONS</span>
          </div>
          <h2 className={styles.sectionHeading}>
            What sets us apart from other <br className={styles.headingBreak} />
            CCNA institutes
          </h2>
          <p className={styles.sectionSubtext}>
            A transparent head-to-head comparison so you can make an informed decision.
          </p>
        </div>

        {/* Comparison Card / Table Container */}
        <div className={styles.tableCard}>
          <div className={styles.mobileSwipeIndicator}>
            <span>← Swipe horizontally to compare →</span>
          </div>
          <div className={styles.scrollWrapper}>
            <table className={styles.comparisonTable}>
              {/* Table Column Header */}
              <thead>
                <tr className={styles.headerRow}>
                  <th className={styles.featureHeaderCol}>
                    <span className={styles.featureHeaderLabel}>FEATURE</span>
                  </th>
                  <th className={styles.imeditaHeaderCol}>
                    <div className={styles.brandHeaderContent}>
                      <div className={styles.brandIconBoxOrange}>
                        <GraduationCap size={18} className={styles.brandIcon} />
                      </div>
                      <div className={styles.brandInfo}>
                        <span className={styles.brandTitle}>I-Medita</span>
                        <div className={styles.topRatedPill}>
                          <Star size={11} className={styles.starIcon} fill="currentColor" />
                          <span>Top rated in India</span>
                        </div>
                      </div>
                    </div>
                  </th>
                  <th className={styles.otherHeaderCol}>
                    <div className={styles.brandHeaderContent}>
                      <div className={styles.brandIconBoxSlate}>
                        <Building2 size={18} className={styles.brandIcon} />
                      </div>
                      <div className={styles.brandInfo}>
                        <span className={styles.otherTitle}>Other Institutes</span>
                        <div className={styles.genericPill}>
                          <span>Generic training</span>
                        </div>
                      </div>
                    </div>
                  </th>
                </tr>
              </thead>

              {/* Table Body (10 Rows) */}
              <tbody>
                {comparisonData.map((item) => {
                  const Icon = item.icon;
                  return (
                    <tr key={item.id} className={styles.dataRow}>
                      {/* Feature Name & Icon */}
                      <td className={styles.featureCell}>
                        <div className={styles.featureInner}>
                          <div className={styles.featureIconBadge}>
                            <Icon size={16} />
                          </div>
                          <span className={styles.featureName}>{item.feature}</span>
                        </div>
                      </td>

                      {/* I-Medita Value */}
                      <td className={styles.imeditaCell}>
                        <div className={styles.valueInner}>
                          <CheckCircle2 size={17} className={styles.checkIcon} />
                          <span className={styles.imeditaText}>{item.imedita}</span>
                        </div>
                      </td>

                      {/* Other Institutes Value */}
                      <td className={styles.otherCell}>
                        <div className={styles.valueInner}>
                          <XCircle size={17} className={styles.crossIcon} />
                          <span className={styles.otherText}>{item.other}</span>
                        </div>
                      </td>
                    </tr>
                  );
                })}

                {/* Overall Score Row */}
                <tr className={styles.scoreRow}>
                  <td className={styles.featureCell}>
                    <span className={styles.overallScoreLabel}>OVERALL SCORE</span>
                  </td>

                  {/* I-Medita Score */}
                  <td className={styles.imeditaScoreCell}>
                    <div className={styles.scoreBlock}>
                      <div className={styles.scoreTopLine}>
                        <span className={styles.scoreBrandLabel}>I-MEDITA</span>
                        <div className={styles.scoreValueWrapper}>
                          <span className={styles.scoreNumber}>10</span>
                          <span className={styles.scoreOutOf}>/ 10</span>
                        </div>
                      </div>
                      <div className={styles.progressBarTrack}>
                        <div className={styles.progressBarFillImedita} style={{ width: '100%' }} />
                      </div>
                    </div>
                  </td>

                  {/* Others Score */}
                  <td className={styles.otherScoreCell}>
                    <div className={styles.scoreBlock}>
                      <div className={styles.scoreTopLine}>
                        <span className={styles.otherScoreLabel}>OTHERS</span>
                        <div className={styles.scoreValueWrapper}>
                          <span className={styles.otherScoreNumber}>3</span>
                          <span className={styles.scoreOutOf}>/ 10</span>
                        </div>
                      </div>
                      <div className={styles.progressBarTrack}>
                        <div className={styles.progressBarFillOthers} style={{ width: '30%' }} />
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Bottom Card Footer Bar */}
          <div className={styles.cardFooterBar}>
            <p className={styles.footerNoteText}>
              Train with CCIE-certified experts, gain hands-on experience in real Cisco labs, and prepare confidently for certification and networking careers.
            </p>
            <button
              type="button"
              className={styles.enrollCtaBtn}
              onClick={handleEnrollClick}
            >
              <span>Enroll Now</span>
              <ArrowRight size={16} className={styles.btnArrow} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
