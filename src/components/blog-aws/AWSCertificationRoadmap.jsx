import React, { useState } from 'react';
import { 
  Compass, 
  Layers, 
  Cpu, 
  Terminal, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight,
  Info,
  CheckCircle2
} from 'lucide-react';
import styles from './AWSCertificationRoadmap.module.css';

const ROADS = [
  {
    id: 'beginners',
    shortName: 'Beginners',
    role: 'Cloud Beginners & Non-Tech',
    icon: Compass,
    badge: 'Zero Cloud Experience',
    summary: 'Best for college graduates, IT support, sales/marketing leads, and managers transitioning into cloud computing.',
    steps: [
      {
        stepNumber: 'Step 1',
        title: 'AWS Certified Cloud Practitioner',
        code: 'CLF-C02',
        tier: 'Foundational ($100)',
        focus: 'Cloud fluency, global infrastructure, AWS core billing, shared security model, and primary AWS services.',
        timeline: '2 – 4 Weeks'
      },
      {
        stepNumber: 'Step 2 (Recommended Next)',
        title: 'AWS Certified Solutions Architect – Associate',
        code: 'SAA-C03',
        tier: 'Associate ($150)',
        focus: 'Hands-on VPC networking, multi-tier EC2 compute, S3/EBS storage, High Availability, and Well-Architected Framework.',
        timeline: '6 – 8 Weeks'
      }
    ],
    prereqNote: 'AWS Cloud Practitioner is optional but strongly recommended for anyone new to cloud terminology before attempting SAA-C03.'
  },
  {
    id: 'architects',
    shortName: 'Solutions Architects',
    role: 'Cloud Solutions Architects',
    icon: Layers,
    badge: 'Enterprise Architecture',
    summary: 'Design robust, resilient, cost-optimized, and scalable multi-account enterprise architectures on AWS.',
    steps: [
      {
        stepNumber: 'Step 1',
        title: 'AWS Certified Solutions Architect – Associate',
        code: 'SAA-C03',
        tier: 'Associate ($150)',
        focus: 'Foundational compute, VPC peering, Transit Gateway, Route 53, Aurora databases, and disaster recovery architectures.',
        timeline: '6 – 10 Weeks'
      },
      {
        stepNumber: 'Step 2',
        title: 'AWS Certified Solutions Architect – Professional',
        code: 'SAP-C02',
        tier: 'Professional ($300)',
        focus: 'Complex multi-account AWS Organizations, Direct Connect routing, legacy enterprise cloud migrations, and cost optimization at scale.',
        timeline: '12 – 16 Weeks'
      }
    ],
    prereqNote: 'While AWS has no mandatory prerequisites, taking SAA-C03 first is essential before tackling the rigorous SAP-C02 exam.'
  },
  {
    id: 'developers',
    shortName: 'Developers',
    role: 'Cloud Application Developers',
    icon: Terminal,
    badge: 'Serverless & CI/CD',
    summary: 'Build, deploy, and debug cloud-native serverless applications utilizing AWS Lambda, DynamoDB, API Gateway, and ECS.',
    steps: [
      {
        stepNumber: 'Step 1',
        title: 'AWS Certified Developer – Associate',
        code: 'DVA-C02',
        tier: 'Associate ($150)',
        focus: 'Serverless apps (Lambda, API Gateway), NoSQL (DynamoDB), AWS SDKs, Cognito authentication, CloudFormation & SAM.',
        timeline: '6 – 8 Weeks'
      },
      {
        stepNumber: 'Step 2',
        title: 'AWS Certified DevOps Engineer – Professional',
        code: 'DOP-C02',
        tier: 'Professional ($300)',
        focus: 'Automating multi-region CI/CD pipelines with CodePipeline, Blue/Green deployments, CloudWatch alarms, and self-healing systems.',
        timeline: '10 – 14 Weeks'
      }
    ],
    prereqNote: 'Requires familiarity with at least one programming language (Python, Node.js, Java) and basic Git/CI/CD concepts.'
  },
  {
    id: 'devops',
    shortName: 'DevOps & SysOps',
    role: 'DevOps & SysOps Engineers',
    icon: Cpu,
    badge: 'Automation & Operations',
    summary: 'Automate infrastructure provisioning, monitoring, high availability, security hardening, and operational efficiency.',
    steps: [
      {
        stepNumber: 'Step 1',
        title: 'AWS Certified SysOps Administrator – Associate',
        code: 'SOA-C02',
        tier: 'Associate ($150)',
        focus: 'Day-2 operations, Systems Manager, CloudWatch metrics, automated remediation, backup strategies, and cost alerts.',
        timeline: '6 – 10 Weeks'
      },
      {
        stepNumber: 'Step 2',
        title: 'AWS Certified DevOps Engineer – Professional',
        code: 'DOP-C02',
        tier: 'Professional ($300)',
        focus: 'Infrastructure as Code (Terraform / CloudFormation), automated rollback, container orchestration (ECS/EKS), and disaster recovery.',
        timeline: '10 – 14 Weeks'
      }
    ],
    prereqNote: 'SysOps Administrator provides deep operational insight into AWS Systems Manager and CloudWatch troubleshooting.'
  },
  {
    id: 'ml_ai',
    shortName: 'Data & ML AI',
    role: 'Machine Learning & Data Engineers',
    icon: Sparkles,
    badge: 'Generative AI & Data',
    summary: 'Design end-to-end data lakes, analytics pipelines, and deploy generative AI / ML models using Amazon Bedrock and SageMaker.',
    steps: [
      {
        stepNumber: 'Step 1',
        title: 'AWS Certified Data Engineer – Associate',
        code: 'DEA-C01',
        tier: 'Associate ($150)',
        focus: 'Data ingestion (Kinesis, Glue), processing (EMR, Redshift, Athena), storage security, and data pipeline orchestration.',
        timeline: '8 – 10 Weeks'
      },
      {
        stepNumber: 'Step 2',
        title: 'AWS Certified Machine Learning Engineer – Associate',
        code: 'MLA-C01',
        tier: 'Associate ($150)',
        focus: 'Amazon Bedrock Foundation Models, SageMaker model training and endpoints, vector embeddings (OpenSearch), and responsible AI.',
        timeline: '8 – 12 Weeks'
      }
    ],
    prereqNote: 'DEA-C01 and MLA-C01 are the newest active 2026 certifications replacing retired specialty exams DBS-C01 and MLS-C01.'
  },
  {
    id: 'security',
    shortName: 'Security',
    role: 'Cloud Security Specialists',
    icon: ShieldCheck,
    badge: 'Zero Trust & Compliance',
    summary: 'Secure enterprise cloud environments, implement IAM least privilege, guard against DDoS, and enforce regulatory compliance.',
    steps: [
      {
        stepNumber: 'Step 1',
        title: 'AWS Certified Solutions Architect – Associate',
        code: 'SAA-C03',
        tier: 'Associate ($150)',
        focus: 'Networking security boundaries, Security Groups, NACLs, VPC Endpoints, and basic IAM role delegation.',
        timeline: '6 – 8 Weeks'
      },
      {
        stepNumber: 'Step 2',
        title: 'AWS Certified Security – Specialty',
        code: 'SCS-C02',
        tier: 'Specialty ($300)',
        focus: 'KMS customer-managed keys, AWS WAF rules, GuardDuty threat detection, Security Hub, Inspector, and incident response playbooks.',
        timeline: '10 – 12 Weeks'
      }
    ],
    prereqNote: 'Having enterprise networking and core AWS architectural knowledge is mandatory for passing the advanced SCS-C02 exam.'
  }
];

export default function AWSCertificationRoadmap() {
  const [activeTab, setActiveTab] = useState('architects');

  const activeRoad = ROADS.find(r => r.id === activeTab) || ROADS[1];

  return (
    <section id="certification-roadmap" className={styles.section} aria-labelledby="roadmap-heading">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Tailored Learning Paths</span>
          <h2 id="roadmap-heading" className={styles.title}>
            Which AWS Certification Should You Choose in 2026?
          </h2>
          <p className={styles.subtitle}>
            AWS has removed all formal prerequisite requirements, but jumping directly into Professional or Specialty exams 
            leads to high failure rates. Follow these proven industry paths based on your career goals.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className={styles.tabsList} role="tablist" aria-label="AWS Career Paths">
          {ROADS.map((road) => {
            const Icon = road.icon;
            const isSelected = activeTab === road.id;
            return (
              <button
                key={road.id}
                role="tab"
                id={`tab-${road.id}`}
                aria-selected={isSelected}
                aria-controls={`panel-${road.id}`}
                className={`${styles.tabBtn} ${isSelected ? styles.tabBtnActive : ''}`}
                onClick={() => setActiveTab(road.id)}
              >
                <Icon className={styles.tabIcon} aria-hidden="true" />
                <span className={styles.tabLabel}>{road.shortName}</span>
              </button>
            );
          })}
        </div>

        {/* Active Roadmap Display Panel */}
        <div 
          id={`panel-${activeRoad.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeRoad.id}`}
          className={styles.roadmapPanel}
        >
          <div className={styles.panelHeader}>
            <div className={styles.roleTitleGroup}>
              <h3 className={styles.roleHeading}>{activeRoad.role}</h3>
              <span className={styles.roleBadge}>{activeRoad.badge}</span>
            </div>
            <p className={styles.roleSummary}>{activeRoad.summary}</p>
          </div>

          <div className={styles.stepsGrid}>
            {activeRoad.steps.map((step, idx) => (
              <div key={idx} className={styles.stepCard}>
                <div className={styles.stepTop}>
                  <span className={styles.stepNum}>{step.stepNumber}</span>
                  <span className={styles.stepTier}>{step.tier}</span>
                </div>

                <h4 className={styles.stepCertName}>{step.title}</h4>
                <div className={styles.stepCode}>Exam Code: <strong>{step.code}</strong></div>

                <p className={styles.stepFocus}>
                  <strong>Core Focus:</strong> {step.focus}
                </p>

                <div className={styles.stepFooter}>
                  <span className={styles.timeline}>Recommended Prep: <strong>{step.timeline}</strong></span>
                </div>

                {idx < activeRoad.steps.length - 1 && (
                  <div className={styles.stepConnector} aria-hidden="true">
                    <ArrowRight className={styles.arrowIcon} />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className={styles.prereqNotice}>
            <Info className={styles.infoIcon} aria-hidden="true" />
            <p className={styles.prereqText}>
              <strong>Prerequisite Insight:</strong> {activeRoad.prereqNote} (Note: AWS officially allows taking any exam directly, but progressive learning yields a 92%+ first-attempt pass rate).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
