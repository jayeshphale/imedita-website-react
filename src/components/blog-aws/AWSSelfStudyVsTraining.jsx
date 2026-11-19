import React from 'react';
import { 
  Check, 
  X, 
  HelpCircle, 
  Scale, 
  User, 
  Users,
  Lightbulb
} from 'lucide-react';
import styles from './AWSSelfStudyVsTraining.module.css';

const COMPARISON_ROWS = [
  {
    feature: 'Learning Flexibility',
    selfStudy: '100% self-paced. Study anytime, pause or resume according to personal work schedule.',
    training: 'Fixed schedule with weekend or weekday evening batches; recorded sessions provided if missed.',
    advantage: 'self'
  },
  {
    feature: 'Doubt Resolution & Mentorship',
    selfStudy: 'Rely on Reddit, StackOverflow, or Discord forums. Answers can be delayed or technically conflicting.',
    training: 'Direct 1-on-1 interaction with AWS / CCIE certified senior cloud architects during live classes and lab hours.',
    advantage: 'training'
  },
  {
    feature: 'Hands-On Lab Infrastructure',
    selfStudy: 'Personal AWS Free Tier account. Risk of accidental runaway charges (e.g. NAT Gateways, Multi-AZ RDS).',
    training: 'Dedicated pre-configured multi-VPC cloud topologies and 24/7 lab access without personal AWS billing risks.',
    advantage: 'training'
  },
  {
    feature: 'Syllabus Currency & Exam Alignment',
    selfStudy: 'Online recorded courses may be outdated (referencing retired services or previous exam blueprints).',
    training: 'Actively updated curriculum mapped to current 2026 exam versions (e.g. DEA-C01, MLA-C01, SAA-C03).',
    advantage: 'training'
  },
  {
    feature: 'Completion & Accountability',
    selfStudy: 'Lower completion rate (estimated 15–25% industry average due to lack of peer accountability).',
    training: 'Structured milestones, weekly assignments, and mentor follow-ups resulting in 85%+ completion rates.',
    advantage: 'training'
  },
  {
    feature: 'Financial Cost',
    selfStudy: 'Low upfront expense (₹1,500 – ₹4,000 for video courses and practice questions + exam fee).',
    training: 'Higher upfront investment (₹15,000 – ₹40,000 for comprehensive instructor-led training + labs).',
    advantage: 'self'
  },
  {
    feature: 'Ideal For',
    selfStudy: 'Experienced IT administrators, Linux engineers, or self-motivated individuals with prior cloud exposure.',
    training: 'Freshers, non-tech career switchers, and working professionals who want guaranteed structure and quick turnaround.',
    advantage: 'neutral'
  }
];

export default function AWSSelfStudyVsTraining() {
  return (
    <section id="self-study-vs-training" className={styles.section} aria-labelledby="compare-heading">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Objective Analysis</span>
          <h2 id="compare-heading" className={styles.title}>
            Self-Study vs. Instructor-Led Training: Which Is Right for You?
          </h2>
          <p className={styles.subtitle}>
            Both pathways have produced successful AWS certified professionals. 
            Evaluate which method aligns best with your learning style, existing cloud background, and timeline.
          </p>
        </div>

        {/* Comparison Table */}
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th scope="col" className={styles.thFeature}>Evaluation Criteria</th>
                <th scope="col" className={styles.thSelf}>
                  <div className={styles.thContent}>
                    <User className={styles.thIcon} aria-hidden="true" />
                    <span>Self-Study (Videos &amp; Docs)</span>
                  </div>
                </th>
                <th scope="col" className={styles.thTraining}>
                  <div className={styles.thContent}>
                    <Users className={styles.thIcon} aria-hidden="true" />
                    <span>Instructor-Led Bootcamp</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_ROWS.map((row, idx) => (
                <tr key={idx} className={styles.tr}>
                  <td className={styles.tdFeature}>
                    <strong>{row.feature}</strong>
                  </td>
                  <td className={`${styles.tdVal} ${row.advantage === 'self' ? styles.advantageHighlight : ''}`}>
                    {row.selfStudy}
                  </td>
                  <td className={`${styles.tdVal} ${row.advantage === 'training' ? styles.advantageHighlight : ''}`}>
                    {row.training}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Guidance Recommendation */}
        <div className={styles.verdictBox}>
          <Lightbulb className={styles.verdictIcon} aria-hidden="true" />
          <div className={styles.verdictContent}>
            <h4 className={styles.verdictTitle}>The Expert Verdict</h4>
            <p className={styles.verdictText}>
              If you have <strong>2+ years of Linux, networking, or virtualization experience</strong>, a rigorous self-study sprint using AWS whitepapers, 
              AWS Skill Builder, and reliable mock exams is entirely viable. However, if you are a <strong>fresher, switching careers from non-IT</strong>, 
              or targeting <strong>high-stakes professional roles</strong>, the guided topology troubleshooting and mentor support of an instructor-led program 
              saves months of trial-and-error and prevents costly exam retakes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
