import React from 'react';
import { 
  Briefcase, 
  Layers, 
  ShieldCheck, 
  Cpu, 
  Terminal, 
  Database,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import styles from './AWSCareerRoles.module.css';

const CAREER_ROLES = [
  {
    role: 'AWS Cloud Solutions Architect',
    icon: Layers,
    experienceLevel: 'Mid to Senior (3–8+ years)',
    recommendedCerts: ['SAA-C03', 'SAP-C02'],
    primarySkills: [
      'Multi-tier enterprise VPC architectures',
      'Disaster Recovery (Active-Active, Pilot Light)',
      'Cost optimization via AWS Compute Optimizer',
      'Infrastructure as Code (Terraform, AWS CloudFormation)'
    ],
    roleSummary:
      'Translates business requirements into resilient, highly available, secure, and cost-effective cloud systems following the AWS Well-Architected Framework.'
  },
  {
    role: 'Cloud DevOps / Platform Engineer',
    icon: Cpu,
    experienceLevel: 'Entry to Senior (1–6+ years)',
    recommendedCerts: ['SOA-C02', 'DOP-C02'],
    primarySkills: [
      'CI/CD pipeline automation (GitLab, GitHub Actions, CodePipeline)',
      'Container orchestration (Amazon ECS, EKS, Docker)',
      'Automated monitoring & alerts (CloudWatch, Prometheus, Grafana)',
      'Configuration management (Ansible, Terraform)'
    ],
    roleSummary:
      'Bridges software development and infrastructure operations, managing automated deployments, zero-downtime rollouts, and self-healing environments.'
  },
  {
    role: 'Cloud Application Developer',
    icon: Terminal,
    experienceLevel: 'Entry to Mid (1–5 years)',
    recommendedCerts: ['DVA-C02'],
    primarySkills: [
      'Serverless computing (AWS Lambda, API Gateway, Step Functions)',
      'NoSQL databases (Amazon DynamoDB single-table design)',
      'Application authentication (Amazon Cognito, OAuth 2.0 / OIDC)',
      'AWS SDKs & AWS SAM CLI'
    ],
    roleSummary:
      'Builds scalable, modern serverless microservices and cloud-native applications with decoupled messaging queues and event-driven architectures.'
  },
  {
    role: 'Cloud Security & Compliance Engineer',
    icon: ShieldCheck,
    experienceLevel: 'Mid to Senior (3–7+ years)',
    recommendedCerts: ['SAA-C03', 'SCS-C02'],
    primarySkills: [
      'Identity & Access Management (IAM granular policies, SCPs)',
      'KMS key rotation & data encryption in transit and at rest',
      'Threat detection (Amazon GuardDuty, Security Hub, Inspector)',
      'Perimeter defense (AWS WAF, Shield Advanced, Network Firewall)'
    ],
    roleSummary:
      'Protects enterprise cloud assets from zero-day vulnerabilities, enforces compliance controls (ISO 27001, SOC2, HIPAA), and leads security incident responses.'
  },
  {
    role: 'Data & Generative AI Cloud Engineer',
    icon: Database,
    experienceLevel: 'Entry to Senior (1–6+ years)',
    recommendedCerts: ['DEA-C01', 'MLA-C01'],
    primarySkills: [
      'Data lakehouse design (Amazon S3, AWS Glue, Amazon Athena)',
      'Real-time streaming (Amazon Kinesis, Managed Streaming for Kafka)',
      'Generative AI foundations (Amazon Bedrock, SageMaker JumpStart)',
      'Vector databases (Amazon OpenSearch Serverless)'
    ],
    roleSummary:
      'Ingests, transforms, and orchestrates big data pipelines while deploying enterprise generative AI models and intelligent RAG applications.'
  },
  {
    role: 'Cloud Operations / SysOps Administrator',
    icon: Briefcase,
    experienceLevel: 'Entry to Mid (0–4 years)',
    recommendedCerts: ['CLF-C02', 'SOA-C02'],
    primarySkills: [
      'Linux / Windows server administration on EC2',
      'Automated OS patching via AWS Systems Manager (SSM)',
      'Backup lifecycle management with AWS Backup',
      'Network connectivity troubleshooting (VPC Flow Logs, Route 53)'
    ],
    roleSummary:
      'Maintains operational uptime, handles day-to-day cloud provisioning, reviews resource utilization alerts, and ensures backup adherence.'
  }
];

export default function AWSCareerRoles() {
  return (
    <section id="career-opportunities" className={styles.section} aria-labelledby="career-heading">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Career Landscape</span>
          <h2 id="career-heading" className={styles.title}>
            AWS Certification Career Opportunities &amp; In-Demand Roles
          </h2>
          <p className={styles.subtitle}>
            Certifications prove your commitment and validate conceptual knowledge, 
            helping your resume pass automated applicant tracking systems (ATS). 
            Here is how certifications translate into actual industry roles in 2026.
          </p>
        </div>

        <div className={styles.grid}>
          {CAREER_ROLES.map((roleItem, idx) => {
            const Icon = roleItem.icon;
            return (
              <div key={idx} className={styles.roleCard}>
                <div className={styles.roleHeader}>
                  <div className={styles.iconWrap}>
                    <Icon className={styles.roleIcon} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className={styles.roleTitle}>{roleItem.role}</h3>
                    <span className={styles.expLevel}>{roleItem.experienceLevel}</span>
                  </div>
                </div>

                <p className={styles.roleDesc}>{roleItem.roleSummary}</p>

                <div className={styles.certsGroup}>
                  <span className={styles.certsLabel}>Aligned AWS Certifications:</span>
                  <div className={styles.certsBadges}>
                    {roleItem.recommendedCerts.map((c, cIdx) => (
                      <span key={cIdx} className={styles.certBadge}>{c}</span>
                    ))}
                  </div>
                </div>

                <div className={styles.skillsGroup}>
                  <span className={styles.skillsLabel}>Key Technical Skills Expected:</span>
                  <ul className={styles.skillsList}>
                    {roleItem.primarySkills.map((skill, sIdx) => (
                      <li key={sIdx} className={styles.skillItem}>
                        <CheckCircle2 className={styles.checkIcon} aria-hidden="true" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Real Classroom Lecture Media Feature & Salary Milestones */}
        <div className={styles.careerMediaBanner}>
          <div className={styles.careerMediaImgWrap}>
            <img 
              src="https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/06/10071301/imedita_72.jpg" 
              alt="Interactive CCIE & AWS Architecture Lectures at I-Medita Pune"
              className={styles.careerMediaImg}
              loading="lazy"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = '/server-datacenter-engineer.jpg';
              }}
            />
          </div>

          <div className={styles.careerMediaContent}>
            <span className={styles.careerEyebrow}>2026 Industry Compensation Trends</span>
            <h3 className={styles.careerMediaTitle}>Indian Cloud &amp; Infrastructure Salary Milestones</h3>
            <div className={styles.salaryTrackList}>
              <div className={styles.salaryTrackItem}>
                <span className={styles.salaryRoleName}>Associate Cloud Support / SysOps (0–2 yrs)</span>
                <span className={styles.salaryPackage}>₹4.5 – ₹7.5 LPA</span>
              </div>
              <div className={styles.salaryTrackItem}>
                <span className={styles.salaryRoleName}>Certified Solutions Architect (2–5 yrs)</span>
                <span className={styles.salaryPackage}>₹9.0 – ₹16.0 LPA</span>
              </div>
              <div className={styles.salaryTrackItem}>
                <span className={styles.salaryRoleName}>Senior Cloud DevOps / SRE Lead (5–8 yrs)</span>
                <span className={styles.salaryPackage}>₹18.0 – ₹28.0 LPA</span>
              </div>
              <div className={styles.salaryTrackItem}>
                <span className={styles.salaryRoleName}>Principal Enterprise Multi-Cloud Architect (8+ yrs)</span>
                <span className={styles.salaryPackage}>₹32.0 – ₹50.0+ LPA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Realistic Industry Reality Check */}
        <div className={styles.realityBox}>
          <AlertCircle className={styles.alertIcon} aria-hidden="true" />
          <div className={styles.realityContent}>
            <h4 className={styles.realityTitle}>The Industry Reality: Certificates Get Interviews, Practical Skills Get Hired</h4>
            <p className={styles.realityText}>
              A common misconception is that passing an AWS exam automatically guarantees a ₹15+ LPA job. 
              In reality, hiring managers look for a combination of <strong>official certification + verifiable hands-on project proof</strong>. 
              Always back up your certification with a public GitHub repository demonstrating Terraform code, automated CI/CD pipelines, 
              and well-documented architecture diagrams.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
