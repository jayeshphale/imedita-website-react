import React from 'react';
import { 
  BookOpen, 
  Terminal, 
  CheckCircle, 
  Calendar, 
  Clock, 
  ExternalLink,
  Flame,
  Award,
  ShieldAlert
} from 'lucide-react';
import styles from './AWSPreparationGuide.module.css';

const PREP_PILLARS = [
  {
    icon: BookOpen,
    title: '1. Official AWS Skill Builder & Documentation',
    desc: 'Never rely solely on informal video summaries. AWS continuously updates service capabilities, and official AWS documentation and AWS Well-Architected Framework whitepapers (Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, Sustainability) form the foundation of scenario questions.',
    highlights: [
      'AWS Skill Builder Free Tier: 600+ free digital courses and official 20-question exam prep sets.',
      'AWS Well-Architected Framework Whitepaper: Read all 6 pillars before Associate and Pro exams.',
      'AWS FAQs: Especially Amazon EC2, Amazon VPC, S3, RDS, IAM, Route 53, and DynamoDB.'
    ]
  },
  {
    icon: Terminal,
    title: '2. Deliberate Hands-On Lab Topologies',
    desc: 'AWS exams test real-world architectural troubleshooting rather than memorization. Reading about high-availability VPCs is very different from actually provisioning an Application Load Balancer across multi-AZ subnets and inspecting traffic routing.',
    highlights: [
      'Build from scratch: A 3-tier VPC with public web subnets, private app subnets, and isolated database subnets.',
      'Configure auto-scaling: Trigger dynamic scaling policies with simulated CPU stress tests.',
      'IAM Least Privilege: Write granular JSON IAM policies with condition keys (e.g., aws:PrincipalArn, aws:RequestedRegion).'
    ]
  },
  {
    icon: CheckCircle,
    title: '3. Timed Scenario-Based Practice Exams',
    desc: 'The greatest hurdle on AWS Associate and Professional exams is reading speed and question fatigue. Professional exams feature 75 dense multi-paragraph scenarios requiring 180 minutes of intense concentration.',
    highlights: [
      'Target consistent 85%+ scores across 5 different full-length timed mock tests.',
      'Thoroughly analyze incorrect answers: Understand why the 3 distractor options are technically flawed.',
      'Pacing rule: Spend no more than 1.5 minutes per question on Associate exams; flag doubtful questions.'
    ]
  }
];

const STUDY_TIMELINES = [
  {
    title: '4-Week Sprint Plan',
    target: 'Cloud Practitioner (CLF-C02)',
    hoursPerDay: '1 – 2 Hours / day',
    color: '#0284c7',
    weeks: [
      { week: 'Week 1', focus: 'Cloud fundamentals, AWS global infrastructure (Regions, AZs, Edge Locations), and billing models.' },
      { week: 'Week 2', focus: 'Core services: Compute (EC2, Lambda), Storage (S3, EBS), and Networking basics (VPC, Route 53).' },
      { week: 'Week 3', focus: 'AWS Shared Responsibility security model, IAM policies, AWS Organizations, and Cost Explorer.' },
      { week: 'Week 4', focus: 'Official Skill Builder practice tests, review weak topics, take exam.' }
    ]
  },
  {
    title: '8-Week Comprehensive Plan',
    target: 'Solutions Architect / Developer Associate',
    hoursPerDay: '2 – 3 Hours / day',
    color: '#0c6bf5',
    isPopular: true,
    weeks: [
      { week: 'Weeks 1–2', focus: 'VPC deep dive, CIDR blocks, Subnets, Internet Gateways, NAT Gateways, Security Groups vs NACLs.' },
      { week: 'Weeks 3–4', focus: 'Compute & Storage: EC2 launch templates, ALB/NLB, Auto Scaling, S3 storage tiers, and EFS.' },
      { week: 'Weeks 5–6', focus: 'Databases & Decoupling: RDS Multi-AZ, Read Replicas, DynamoDB, SQS FIFO, SNS, and EventBridge.' },
      { week: 'Weeks 7–8', focus: 'Well-Architected review, 6 full-length timed mock exams, scoring 85%+ before booking.' }
    ]
  },
  {
    title: '12-Week Advanced Mastery Plan',
    target: 'Solutions Architect Professional / Security Specialty',
    hoursPerDay: '3+ Hours / day',
    color: '#7c3aed',
    weeks: [
      { week: 'Weeks 1–4', focus: 'Multi-account AWS Organizations, SCPs, Transit Gateway routing, Direct Connect, and Hybrid DNS.' },
      { week: 'Weeks 5–8', focus: 'Enterprise security, KMS envelope encryption, AWS WAF, Shield, GuardDuty, and compliance auditing.' },
      { week: 'Weeks 9–10', focus: 'Disaster Recovery (RTO/RPO), Cross-region active-active databases, and multi-account migration.' },
      { week: 'Weeks 11–12', focus: 'Intensive 180-minute mock exam simulations, endurance training, and official AWS readiness labs.' }
    ]
  }
];

export default function AWSPreparationGuide() {
  return (
    <section id="preparation-guide" className={styles.section} aria-labelledby="prep-heading">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Strategy & Roadmap</span>
          <h2 id="prep-heading" className={styles.title}>
            How to Prepare for AWS Certification (And Pass on Your First Attempt)
          </h2>
          <p className={styles.subtitle}>
            AWS certifications have no trick questions, but they test rigorous engineering principles. 
            Here is the battle-tested 3-pillar blueprint used by top cloud architects.
          </p>
        </div>

        {/* 3 Pillars */}
        <div className={styles.pillarsGrid}>
          {PREP_PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div key={idx} className={styles.pillarCard}>
                <div className={styles.pillarIconWrap}>
                  <Icon className={styles.pillarIcon} aria-hidden="true" />
                </div>
                <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                <p className={styles.pillarDesc}>{pillar.desc}</p>
                <ul className={styles.checklist}>
                  {pillar.highlights.map((h, hIdx) => (
                    <li key={hIdx} className={styles.checkItem}>
                      <span className={styles.checkDot} aria-hidden="true" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Real Datacenter Lab Media Feature */}
        <div className={styles.labMediaBanner}>
          <div className={styles.labMediaImgWrap}>
            <img 
              src="https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/06/10071301/imedita_71.jpg" 
              alt="Hands-On Datacenter Lab Practice at I-Medita Pune"
              className={styles.labMediaImg}
              loading="lazy"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = '/server-datacenter-engineer.jpg';
              }}
            />
          </div>

          <div className={styles.labMediaContent}>
            <span className={styles.labEyebrow}>Hands-On Architecture Drills</span>
            <h3 className={styles.labTitle}>Why Textbook Reading Fails Without Real Lab Troubleshooting</h3>
            <p className={styles.labDesc}>
              Scenario questions on AWS Associate &amp; Professional exams don't ask for definitions. 
              They ask why a private EC2 instance cannot pull Docker images through a NAT Gateway or why an ALB target group fails health checks. 
              Real hands-on practice builds the architectural intuition required to clear on attempt one.
            </p>
            <div className={styles.labChips}>
              <span className={styles.labChip}>✓ Multi-AZ VPC Peering</span>
              <span className={styles.labChip}>✓ Hybrid Direct Connect</span>
              <span className={styles.labChip}>✓ S3 Cross-Region Replication</span>
            </div>
          </div>
        </div>

        {/* Study Plans Timelines */}
        <div className={styles.timelinesSection}>
          <div className={styles.subHeader}>
            <Calendar className={styles.subHeaderIcon} aria-hidden="true" />
            <h3 className={styles.subTitle}>Proven AWS Study Schedules</h3>
          </div>

          <div className={styles.timelinesGrid}>
            {STUDY_TIMELINES.map((plan, idx) => (
              <div 
                key={idx} 
                className={`${styles.planCard} ${plan.isPopular ? styles.planPopular : ''}`}
              >
                {plan.isPopular && (
                  <div className={styles.popularBadge}>
                    <Flame className={styles.badgeFire} aria-hidden="true" />
                    <span>Most Popular Path</span>
                  </div>
                )}

                <div className={styles.planHeader}>
                  <h4 className={styles.planTitle}>{plan.title}</h4>
                  <div className={styles.planTarget}>{plan.target}</div>
                  <div className={styles.planHours}>
                    <Clock className={styles.clockIcon} aria-hidden="true" />
                    <span>{plan.hoursPerDay}</span>
                  </div>
                </div>

                <div className={styles.weekSteps}>
                  {plan.weeks.map((w, wIdx) => (
                    <div key={wIdx} className={styles.weekStep}>
                      <div className={styles.weekNum}>{w.week}</div>
                      <p className={styles.weekFocus}>{w.focus}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Exam Day Strategy Box */}
        <div className={styles.examDayTips}>
          <div className={styles.tipsIconWrap}>
            <Award className={styles.tipsIcon} aria-hidden="true" />
          </div>
          <div className={styles.tipsContent}>
            <h4 className={styles.tipsTitle}>Exam Day Time Management Strategies</h4>
            <div className={styles.tipsGrid}>
              <div className={styles.tipItem}>
                <strong>Read the Last Sentence First:</strong> In lengthy 4-paragraph scenario questions, read the final sentence first to identify the exact constraint (e.g., &quot;most cost-effective&quot;, &quot;least operational overhead&quot;, or &quot;highest availability&quot;).
              </div>
              <div className={styles.tipItem}>
                <strong>Eliminate Obvious Mismatches:</strong> Usually, 2 out of 4 options suggest architecturally invalid solutions (e.g., using S3 Glacier for instant real-time query latency). Eliminate them immediately.
              </div>
              <div className={styles.tipItem}>
                <strong>Flag &amp; Move Forward:</strong> Do not spend more than 2 minutes trapped on a single question. Flag it, select your best preliminary hunch, and review all flagged questions in the final 20 minutes.
              </div>
              <div className={styles.tipItem}>
                <strong>Non-Native English Speaker Accommodation:</strong> If English is your second language and you are taking an English exam, request the official <strong>&quot;ESL +30 Minutes&quot;</strong> accommodation in your AWS Certification portal <em>before</em> scheduling!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
