import React, { useState } from 'react';
import { 
  BookOpen, 
  Terminal, 
  CheckCircle2, 
  Calendar, 
  Clock, 
  Flame, 
  Award, 
  ShieldCheck,
  Layers,
  ArrowRight,
  Cpu,
  Target,
  Sparkles
} from 'lucide-react';
import styles from './AWSPreparationGuide.module.css';

const PREP_PILLARS = [
  {
    icon: BookOpen,
    title: '1. Official AWS Skill Builder & Documentation',
    desc: 'Never rely solely on informal video summaries. AWS continuously updates service capabilities. Official documentation and Well-Architected Framework whitepapers form the core foundation of scenario questions.',
    highlights: [
      'AWS Skill Builder Free Tier: 600+ free digital courses and official 20-question exam prep sets.',
      'Well-Architected Framework: Read all 6 pillars before Associate and Pro exams.',
      'AWS Service FAQs: Deep-dive into EC2, VPC, S3, RDS, IAM, Route 53, and DynamoDB.'
    ]
  },
  {
    icon: Terminal,
    title: '2. Deliberate Hands-On Lab Topologies',
    desc: 'AWS exams test real-world architectural troubleshooting rather than memorization. Reading about high-availability VPCs is very different from actually provisioning an ALB across multi-AZ subnets.',
    highlights: [
      'Build from scratch: A 3-tier VPC with public web, private app, and isolated database subnets.',
      'Configure auto-scaling: Trigger dynamic scaling policies with simulated CPU stress tests.',
      'IAM Least Privilege: Write granular JSON IAM policies with condition keys.'
    ]
  },
  {
    icon: CheckCircle2,
    title: '3. Timed Scenario-Based Practice Exams',
    desc: 'The greatest hurdle on AWS Associate and Professional exams is reading speed and question fatigue. Professional exams feature 75 dense multi-paragraph scenarios requiring 180 minutes of intense concentration.',
    highlights: [
      'Target consistent 85%+ scores across 5 different full-length timed mock tests.',
      'Thoroughly analyze incorrect answers: Understand why the 3 distractor options are technically flawed.',
      'Pacing rule: Spend no more than 1.5 minutes per question on Associate exams.'
    ]
  }
];

const STUDY_TIMELINES = [
  {
    id: 'sprint-4w',
    title: '4-Week Sprint Plan',
    subtitle: 'Fast-track path for foundational cloud literacy',
    target: 'Cloud Practitioner (CLF-C02)',
    hoursPerDay: '1 – 2 Hours / day',
    totalHours: '~45 Total Hours',
    labRatio: '30% Hands-On Labs • 70% Core Concepts',
    readinessCheck: 'Score 80%+ on AWS Skill Builder 20-question sets',
    badge: 'Foundational Track',
    isPopular: false,
    color: '#0284c7',
    stages: [
      {
        stage: 'Phase 1',
        timeframe: 'Week 1',
        title: 'Cloud Economics & Global Infrastructure',
        summary: 'Understand core cloud value propositions and AWS global footprint.',
        focusItems: [
          'AWS Global Infrastructure: Regions, Availability Zones (AZs), and Edge Locations',
          'Cloud Value Proposition: CapEx vs OpEx, agility, elasticity, and global deployment',
          'Billing & Cost Management: AWS Free Tier limits, Cost Explorer, and Budgets'
        ]
      },
      {
        stage: 'Phase 2',
        timeframe: 'Week 2',
        title: 'Core Compute, Storage & Networking',
        summary: 'Learn the foundational building blocks of AWS cloud infrastructure.',
        focusItems: [
          'Compute Services: EC2 instance types, pricing models (On-Demand, Spot, Reserved), and Lambda serverless',
          'Storage Options: S3 bucket storage classes, EBS volume types, and AWS Glacier archiving',
          'Foundational Networking: Virtual Private Cloud (VPC), Subnets, and Route 53 DNS'
        ]
      },
      {
        stage: 'Phase 3',
        timeframe: 'Week 3',
        title: 'Security, Compliance & Shared Responsibility',
        summary: 'Master AWS identity management, governance, and security models.',
        focusItems: [
          'AWS Shared Responsibility Model: Customer vs AWS security obligations',
          'Identity & Access Management: IAM Users, User Groups, Roles, and MFA enforcement',
          'Governance & Compliance: AWS Organizations, AWS Artifact, and AWS Shield Standard'
        ]
      },
      {
        stage: 'Phase 4',
        timeframe: 'Week 4',
        title: 'Mock Exams & Review Drills',
        summary: 'Solidify test-taking confidence with full-length timed question sets.',
        focusItems: [
          'Official Skill Builder timed practice sets: Complete at least 4 sets scoring 85%+',
          'Review weak domains: Re-read FAQs for EC2, S3, and IAM',
          'Schedule and take the exam via Pearson VUE online or at an authorized test center'
        ]
      }
    ]
  },
  {
    id: 'comprehensive-8w',
    title: '8-Week Comprehensive Plan',
    subtitle: 'The gold standard for engineering & solutions architect mastery',
    target: 'Solutions Architect / Developer Associate (SAA-C03 / DVA-C02)',
    hoursPerDay: '2 – 3 Hours / day',
    totalHours: '~120 Total Hours',
    labRatio: '60% Hands-On Labs • 40% Architecture Blueprints',
    readinessCheck: 'Consistently score 85%+ across 6 full-length timed mock exams',
    badge: 'Most Popular Path',
    isPopular: true,
    color: '#0c6bf5',
    stages: [
      {
        stage: 'Phase 1',
        timeframe: 'Weeks 1–2',
        title: 'Enterprise VPC & Core Cloud Networking',
        summary: 'Architect secure, isolated network topologies from the ground up.',
        focusItems: [
          'VPC Architecture: Public/Private subnets, Route Tables, Internet Gateways & NAT Gateways',
          'Security Perimeter: Stateful Security Groups vs Stateless Network ACLs (NACLs)',
          'Hybrid & Peering: VPC Peering, Transit Gateway fundamentals, and VPC Endpoints (PrivateLink)'
        ]
      },
      {
        stage: 'Phase 2',
        timeframe: 'Weeks 3–4',
        title: 'High Availability Compute & Scalable Storage',
        summary: 'Design resilient application tiers that withstand instance and AZ failures.',
        focusItems: [
          'Elastic Compute: EC2 Launch Templates, Target Groups, and Application Load Balancers (ALB)',
          'Auto Scaling Groups (ASG): Dynamic scaling policies, predictive scaling, and health check grace periods',
          'Storage Architecture: S3 Lifecycle policies, cross-region replication, and EFS shared storage'
        ]
      },
      {
        stage: 'Phase 3',
        timeframe: 'Weeks 5–6',
        title: 'Managed Databases & Asynchronous Decoupling',
        summary: 'Decouple stateful data layers and build microservices with queues and events.',
        focusItems: [
          'Databases: Amazon RDS Multi-AZ failover, Read Replicas, Aurora Serverless, and DynamoDB',
          'Decoupled Architecture: SQS Standard vs FIFO queues, dead-letter queues (DLQ), and SNS topics',
          'Event-Driven Patterns: AWS Lambda event sources, EventBridge rules, and API Gateway integration'
        ]
      },
      {
        stage: 'Phase 4',
        timeframe: 'Weeks 7–8',
        title: 'Well-Architected Review & Mock Exam Endurance',
        summary: 'Train reading speed, scenario analysis, and question elimination logic.',
        focusItems: [
          'Well-Architected Framework: Review all 6 pillars with emphasis on Cost Optimization & Security',
          'Practice Exam Drilling: Complete 6 full-length 65-question timed mock tests (aim for 85%+)',
          'Analyze distractors: Master the art of eliminating 2 invalid answer options immediately'
        ]
      }
    ]
  },
  {
    id: 'advanced-12w',
    title: '12-Week Advanced Mastery Plan',
    subtitle: 'Deep-dive enterprise design for senior cloud architects & security leads',
    target: 'Solutions Architect Professional / Security Specialty (SAP-C02 / SCS-C02)',
    hoursPerDay: '3+ Hours / day',
    totalHours: '~220 Total Hours',
    labRatio: '70% Real-World Topologies • 30% Strategy Whitepapers',
    readinessCheck: 'Complete 3 full 180-minute 75-question endurance simulations',
    badge: 'Architect & Professional Track',
    isPopular: false,
    color: '#7c3aed',
    stages: [
      {
        stage: 'Phase 1',
        timeframe: 'Weeks 1–4',
        title: 'Multi-Account Enterprise Architecture & Hybrid Networking',
        summary: 'Design complex cross-account organizational governance and connectivity.',
        focusItems: [
          'Governance: AWS Organizations, Service Control Policies (SCPs), and AWS Control Tower landing zones',
          'Hybrid Networking: AWS Direct Connect (DX), Transit Gateway inter-region peering, and Route 53 Resolver',
          'Cross-Account Access: IAM Role assumption, Resource Access Manager (RAM), and AWS Organizations trust'
        ]
      },
      {
        stage: 'Phase 2',
        timeframe: 'Weeks 5–8',
        title: 'Enterprise Security, Encryption & Compliance',
        summary: 'Implement zero-trust security boundaries and automated compliance auditing.',
        focusItems: [
          'Data Protection: AWS KMS envelope encryption, multi-Region KMS keys, and Secrets Manager rotation',
          'Perimeter Defense: AWS WAF rate-limiting rules, Shield Advanced, GuardDuty anomaly detection, and Security Hub',
          'Audit & Forensics: AWS CloudTrail multi-region trails, CloudWatch Logs Insights, and VPC Flow Logs analysis'
        ]
      },
      {
        stage: 'Phase 3',
        timeframe: 'Weeks 9–10',
        title: 'Disaster Recovery (DR) & Multi-Region Migration',
        summary: 'Meet strict RTO/RPO objectives with active-passive and active-active topologies.',
        focusItems: [
          'Disaster Recovery Strategies: Backup & Restore, Pilot Light, Warm Standby, and Multi-Site Active/Active',
          'Data Replication: DynamoDB Global Tables, Aurora Global Databases, and S3 Cross-Region Replication',
          'Cloud Migration: AWS Application Migration Service (MGN), Database Migration Service (DMS), and Snowball'
        ]
      },
      {
        stage: 'Phase 4',
        timeframe: 'Weeks 11–12',
        title: '180-Minute Exam Endurance & Trap Elimination',
        summary: 'Conquer 75 lengthy multi-paragraph questions without cognitive exhaustion.',
        focusItems: [
          'Endurance Testing: Complete 3 full-length 180-minute 75-question timed mock simulations',
          'Time Budgeting: Practice the 2-minute-per-question limit; flag questions and review in the final 20 minutes',
          'Official Readiness Sets: Take official AWS Certification readiness assessments via Skill Builder'
        ]
      }
    ]
  }
];

export default function AWSPreparationGuide() {
  const [selectedPlanId, setSelectedPlanId] = useState('comprehensive-8w');

  const activePlan = STUDY_TIMELINES.find(p => p.id === selectedPlanId) || STUDY_TIMELINES[1];

  return (
    <section id="preparation-guide" className={styles.section} aria-labelledby="prep-heading">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Strategy &amp; Roadmap</span>
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

        {/* ================= PROVEN AWS STUDY SCHEDULES (UNCLUTTERED & SPACIOUS) ================= */}
        <div className={styles.timelinesSection}>
          <div className={styles.subHeader}>
            <div className={styles.subHeaderBadge}>
              <Calendar size={14} className={styles.subHeaderIcon} aria-hidden="true" />
              <span>TIMETABLES &amp; PACING BLUEPRINT</span>
            </div>
            <h3 className={styles.subTitle}>Proven AWS Study Schedules</h3>
            <p className={styles.subDesc}>
              Select your target certification level to view an uncluttered, week-by-week architectural roadmap designed for working professionals.
            </p>
          </div>

          {/* 3 Interactive Plan Selector Tabs */}
          <div className={styles.planSelectorTrack} role="tablist" aria-label="AWS Study Schedules">
            {STUDY_TIMELINES.map((plan) => {
              const isSelected = plan.id === selectedPlanId;
              return (
                <button
                  key={plan.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedPlanId(plan.id)}
                  className={`${styles.planTabBtn} ${isSelected ? styles.planTabActive : ''}`}
                >
                  {plan.isPopular && (
                    <span className={styles.tabPopularPill}>
                      <Flame size={11} aria-hidden="true" />
                      <span>Recommended</span>
                    </span>
                  )}
                  <div className={styles.tabTop}>
                    <span className={styles.tabTitle}>{plan.title}</span>
                    <span className={styles.tabTarget}>{plan.target}</span>
                  </div>
                  <div className={styles.tabBottom}>
                    <Clock size={12} className={styles.tabClockIcon} aria-hidden="true" />
                    <span>{plan.hoursPerDay}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Plan Detail Showcase (Full Width, Airy, 2x2 Grid) */}
          <div className={styles.activePlanShowcase}>
            {/* Top Metric Bar */}
            <div className={styles.activePlanMetricsBar}>
              <div className={styles.metricItem}>
                <span className={styles.metricLabel}>Target Credential</span>
                <span className={styles.metricValuePrimary}>{activePlan.target}</span>
              </div>
              <div className={styles.metricDivider} aria-hidden="true" />
              <div className={styles.metricItem}>
                <span className={styles.metricLabel}>Daily Time Commitment</span>
                <span className={styles.metricValue}>{activePlan.hoursPerDay}</span>
              </div>
              <div className={styles.metricDivider} aria-hidden="true" />
              <div className={styles.metricItem}>
                <span className={styles.metricLabel}>Total Estimated Effort</span>
                <span className={styles.metricValue}>{activePlan.totalHours}</span>
              </div>
              <div className={styles.metricDivider} aria-hidden="true" />
              <div className={styles.metricItem}>
                <span className={styles.metricLabel}>Recommended Focus Ratio</span>
                <span className={styles.metricValue}>{activePlan.labRatio}</span>
              </div>
            </div>

            {/* 4 Spacious Milestone Cards (2x2 Grid) */}
            <div className={styles.stagesGrid}>
              {activePlan.stages.map((stg, sIdx) => (
                <div key={sIdx} className={styles.stageCard}>
                  <div className={styles.stageHeader}>
                    <div className={styles.stagePillWrap}>
                      <span className={styles.stageNumberBadge}>{stg.stage}</span>
                      <span className={styles.stageTimeTag}>{stg.timeframe}</span>
                    </div>
                  </div>

                  <h4 className={styles.stageTitle}>{stg.title}</h4>
                  <p className={styles.stageSummary}>{stg.summary}</p>

                  <ul className={styles.stageFocusList}>
                    {stg.focusItems.map((item, fIdx) => (
                      <li key={fIdx} className={styles.stageFocusItem}>
                        <CheckCircle2 size={14} className={styles.focusCheckIcon} aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Bottom Readiness Benchmark Note */}
            <div className={styles.readinessNote}>
              <div className={styles.readinessIconWrap}>
                <Target size={18} aria-hidden="true" />
              </div>
              <div className={styles.readinessText}>
                <strong>Phase Completion Benchmark:</strong> {activePlan.readinessCheck}. Do not schedule your Pearson VUE exam until you hit this metric.
              </div>
            </div>
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
