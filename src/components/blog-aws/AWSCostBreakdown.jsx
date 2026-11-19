import React from 'react';
import { 
  CreditCard, 
  GraduationCap, 
  FileCheck2, 
  Server, 
  RotateCcw, 
  Receipt,
  AlertTriangle,
  Lightbulb
} from 'lucide-react';
import styles from './AWSCostBreakdown.module.css';

const COST_ITEMS = [
  {
    icon: CreditCard,
    title: '1. Official Exam Registration Fee',
    costRange: '$100 – $300 USD',
    costRangeInr: '₹8,500 – ₹25,500 + GST',
    category: 'Mandatory',
    isMandatory: true,
    description:
      'The fixed exam fee paid directly to AWS via Pearson VUE. Foundational exams cost $100, Associate exams cost $150, and Professional & Specialty exams cost $300. In India, an additional 18% GST applies at checkout.',
    tips: 'If you have previously passed any AWS certification, you receive a 50% discount voucher in your AWS Certified account benefits to use on your next exam.'
  },
  {
    icon: GraduationCap,
    title: '2. Training & Coaching Programs',
    costRange: '$0 – $500 USD',
    costRangeInr: '₹0 – ₹40,000 INR',
    category: 'Optional / Recommended',
    isMandatory: false,
    description:
      'Ranges from free YouTube & AWS Skill Builder digital modules to comprehensive live instructor-led bootcamps with real-world architecture troubleshooting, CCIE/AWS certified mentors, and personalized doubt resolution.',
    tips: 'Self-paced video courses usually cost ₹500 – ₹3,000, while immersive live classroom/online training ranges from ₹15,000 to ₹40,000 with hands-on enterprise lab topologies.'
  },
  {
    icon: FileCheck2,
    title: '3. High-Fidelity Practice Exams',
    costRange: '$15 – $40 USD',
    costRangeInr: '₹1,200 – ₹3,500 INR',
    category: 'Essential',
    isMandatory: false,
    description:
      'Timed, multi-choice simulation mock tests that closely mirror actual Pearson VUE exam formats. High-quality question banks explain why wrong options are incorrect and link to AWS whitepapers.',
    tips: 'Official AWS Practice Exams on AWS Skill Builder are free for 20-question samplers, or included in Skill Builder subscriptions ($29/mo). Popular third-party question banks cost ₹800 – ₹1,800.'
  },
  {
    icon: Server,
    title: '4. AWS Cloud Hands-On Lab Expenses',
    costRange: '$0 – $50 USD',
    costRangeInr: '₹0 – ₹4,200 INR',
    category: 'Critical',
    isMandatory: false,
    description:
      'AWS offers a 12-Month Free Tier (750 hours/mo of t2/t3.micro, 5GB S3, etc.). However, services like NAT Gateways, Multi-AZ RDS, and provisioned IOPS can incur runaway charges if left running.',
    tips: 'Always configure AWS Budgets with email alerts at $5, $10, and $20 thresholds, and set up CloudWatch alarms to terminate orphaned idle EC2 instances immediately.'
  },
  {
    icon: RotateCcw,
    title: '5. Exam Retake Contingency Cost',
    costRange: '$50 – $300 USD',
    costRangeInr: '₹5,000 – ₹25,500 INR',
    category: 'Contingency',
    isMandatory: false,
    description:
      'AWS does not offer free retakes. If you fail an exam, you must wait 14 calendar days before rescheduling and must pay the full exam fee again (unless using a promotional retake voucher).',
    tips: 'Occasionally, AWS runs promotional Pearson VUE campaigns (like the AWS Global Vouchers or Free Retake promo codes). Thorough preparation with 85%+ in mock tests avoids retake costs.'
  },
  {
    icon: Receipt,
    title: '6. Forex Conversion & Bank Taxes',
    costRange: '2.0% – 3.5%',
    costRangeInr: '₹200 – ₹800 INR',
    category: 'Financial',
    isMandatory: true,
    description:
      'When paying Pearson VUE directly in USD using an Indian debit or credit card, banks levy a foreign currency markup fee (2.5% to 3.5%) plus 18% GST on the markup fee.',
    tips: 'Using an Indian credit card with zero forex markup (e.g., travel/forex cards) or purchasing pre-invoiced INR vouchers from authorized AWS training partners saves forex charges.'
  }
];

export default function AWSCostBreakdown() {
  return (
    <section id="additional-expenses" className={styles.section} aria-labelledby="expenses-heading">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Total Cost of Ownership</span>
          <h2 id="expenses-heading" className={styles.title}>
            What Is Included in the Total AWS Certification Cost?
          </h2>
          <p className={styles.subtitle}>
            The official exam registration fee is only one component of your certification investment. 
            A realistic preparation budget accounts for study resources, cloud sandbox labs, practice tests, and financial surcharges.
          </p>
        </div>

        <div className={styles.grid}>
          {COST_ITEMS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <article key={idx} className={styles.card}>
                <div className={styles.cardTop}>
                  <div className={styles.iconWrap}>
                    <Icon className={styles.icon} aria-hidden="true" />
                  </div>
                  <span className={`${styles.badge} ${item.isMandatory ? styles.badgeMandatory : styles.badgeOptional}`}>
                    {item.category}
                  </span>
                </div>

                <h3 className={styles.cardTitle}>{item.title}</h3>
                
                <div className={styles.costBox}>
                  <div className={styles.usdPrice}>{item.costRange}</div>
                  <div className={styles.inrPrice}>Approx. {item.costRangeInr}</div>
                </div>

                <p className={styles.cardDesc}>{item.description}</p>

                <div className={styles.cardTip}>
                  <Lightbulb className={styles.tipIcon} aria-hidden="true" />
                  <span className={styles.tipText}>
                    <strong>Pro-Tip:</strong> {item.tips}
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        {/* Summary Callout Banner */}
        <div className={styles.summaryBanner}>
          <div className={styles.summaryIcon}>
            <AlertTriangle className={styles.alertIcon} aria-hidden="true" />
          </div>
          <div className={styles.summaryContent}>
            <h4 className={styles.summaryTitle}>Realistic Budget Summary for 2026</h4>
            <p className={styles.summaryText}>
              For an <strong>Associate-level certification</strong> (e.g., Solutions Architect Associate), self-study candidates typically spend 
              between <strong>$180 and $250 total (₹15,000 – ₹22,000 INR)</strong> including exam fees, 18% GST, practice questions, and modest lab testing. 
              Candidates opting for structured mentorship with 24/7 dedicated lab support invest between <strong>₹30,000 and ₹45,000 INR total</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
