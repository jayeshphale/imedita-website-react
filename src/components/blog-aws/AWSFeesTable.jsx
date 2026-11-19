import React, { useState } from 'react';
import { ExternalLink, Check, Clock, AlertCircle, Info, Filter } from 'lucide-react';
import styles from './AWSFeesTable.module.css';

const activeCertifications = [
  // Foundational
  {
    id: 'clf-c02',
    tier: 'Foundational',
    tierCode: 'foundational',
    name: 'AWS Certified Cloud Practitioner',
    code: 'CLF-C02',
    duration: '90 Minutes',
    questions: '65 Questions',
    format: 'Multiple choice & multiple response',
    feeUSD: '$100',
    feeINR: '~₹8,300 + 18% GST',
    link: 'https://aws.amazon.com/certification/certified-cloud-practitioner/',
    prerequisites: 'None (Recommended: 6 months general cloud knowledge)'
  },
  // Associate
  {
    id: 'saa-c03',
    tier: 'Associate',
    tierCode: 'associate',
    name: 'AWS Certified Solutions Architect – Associate',
    code: 'SAA-C03',
    duration: '130 Minutes',
    questions: '65 Questions',
    format: 'Multiple choice & multiple response',
    feeUSD: '$150',
    feeINR: '~₹12,500 + 18% GST',
    link: 'https://aws.amazon.com/certification/certified-solutions-architect-associate/',
    prerequisites: 'None (Recommended: 1 yr hands-on design & compute exp)'
  },
  {
    id: 'dva-c02',
    tier: 'Associate',
    tierCode: 'associate',
    name: 'AWS Certified Developer – Associate',
    code: 'DVA-C02',
    duration: '130 Minutes',
    questions: '65 Questions',
    format: 'Multiple choice & multiple response',
    feeUSD: '$150',
    feeINR: '~₹12,500 + 18% GST',
    link: 'https://aws.amazon.com/certification/certified-developer-associate/',
    prerequisites: 'None (Recommended: 1 yr developing & maintaining cloud apps)'
  },
  {
    id: 'soa-c02',
    tier: 'Associate',
    tierCode: 'associate',
    name: 'AWS Certified SysOps Administrator – Associate',
    code: 'SOA-C02',
    duration: '130 Minutes',
    questions: '65 Questions',
    format: 'Multiple choice, response & exam labs',
    feeUSD: '$150',
    feeINR: '~₹12,500 + 18% GST',
    link: 'https://aws.amazon.com/certification/certified-sysops-admin-associate/',
    prerequisites: 'None (Recommended: 1 yr deployment, management, & operations)'
  },
  {
    id: 'dea-c01',
    tier: 'Associate',
    tierCode: 'associate',
    name: 'AWS Certified Data Engineer – Associate',
    code: 'DEA-C01',
    duration: '130 Minutes',
    questions: '65 Questions',
    format: 'Multiple choice & multiple response',
    feeUSD: '$150',
    feeINR: '~₹12,500 + 18% GST',
    link: 'https://aws.amazon.com/certification/certified-data-engineer-associate/',
    prerequisites: 'None (Recommended: 1–2 yrs data pipelines & lakehouse exp)'
  },
  {
    id: 'mla-c01',
    tier: 'Associate',
    tierCode: 'associate',
    name: 'AWS Certified Machine Learning Engineer – Associate',
    code: 'MLA-C01',
    duration: '130 Minutes',
    questions: '65 Questions',
    format: 'Multiple choice & multiple response',
    feeUSD: '$150',
    feeINR: '~₹12,500 + 18% GST',
    link: 'https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/',
    prerequisites: 'None (Recommended: 1 yr operationalizing ML models on AWS)'
  },
  // Professional
  {
    id: 'sap-c02',
    tier: 'Professional',
    tierCode: 'professional',
    name: 'AWS Certified Solutions Architect – Professional',
    code: 'SAP-C02',
    duration: '180 Minutes',
    questions: '75 Questions',
    format: 'Multiple choice & multiple response complex scenarios',
    feeUSD: '$300',
    feeINR: '~₹25,000 + 18% GST',
    link: 'https://aws.amazon.com/certification/certified-solutions-architect-professional/',
    prerequisites: 'None mandatory (Recommended: SAA-C03 + 2 yrs enterprise exp)'
  },
  {
    id: 'dop-c02',
    tier: 'Professional',
    tierCode: 'professional',
    name: 'AWS Certified DevOps Engineer – Professional',
    code: 'DOP-C02',
    duration: '180 Minutes',
    questions: '75 Questions',
    format: 'Multiple choice & multiple response scenarios',
    feeUSD: '$300',
    feeINR: '~₹25,000 + 18% GST',
    link: 'https://aws.amazon.com/certification/certified-devops-engineer-professional/',
    prerequisites: 'None mandatory (Recommended: DVA-C02 or SOA-C02 + 2 yrs CI/CD exp)'
  },
  // Specialty
  {
    id: 'ans-c01',
    tier: 'Specialty',
    tierCode: 'specialty',
    name: 'AWS Certified Advanced Networking – Specialty',
    code: 'ANS-C01',
    duration: '170 Minutes',
    questions: '65 Questions',
    format: 'Multiple choice & multiple response complex topologies',
    feeUSD: '$300',
    feeINR: '~₹25,000 + 18% GST',
    link: 'https://aws.amazon.com/certification/certified-advanced-networking-specialty/',
    prerequisites: 'None mandatory (Recommended: 5 yrs networking + AWS Direct Connect/BGP)'
  },
  {
    id: 'scs-c02',
    tier: 'Specialty',
    tierCode: 'specialty',
    name: 'AWS Certified Security – Specialty',
    code: 'SCS-C02',
    duration: '170 Minutes',
    questions: '65 Questions',
    format: 'Multiple choice & multiple response security scenarios',
    feeUSD: '$300',
    feeINR: '~₹25,000 + 18% GST',
    link: 'https://aws.amazon.com/certification/certified-security-specialty/',
    prerequisites: 'None mandatory (Recommended: 2 yrs securing enterprise AWS workloads)'
  }
];

export function AWSFeesTable() {
  const [filterTier, setFilterTier] = useState('all');

  const filteredCerts = filterTier === 'all'
    ? activeCertifications
    : activeCertifications.filter(c => c.tierCode === filterTier);

  return (
    <div className={styles.tableSectionWrapper} id="fees-table">
      <div className={styles.tableHeaderBlock}>
        <span className={styles.eyebrow}>COMPREHENSIVE EXAM CATALOG</span>
        <h3 className={styles.heading}>AWS Certification Exam Fees by Level (2026 Active Exams)</h3>
        <p className={styles.subtext}>
          The table below lists all currently active AWS certification exams, official exam codes, time durations, and standard fees.
        </p>

        {/* Filter Pills */}
        <div className={styles.filterTrack}>
          <button
            type="button"
            onClick={() => setFilterTier('all')}
            className={`${styles.filterBtn} ${filterTier === 'all' ? styles.filterBtnActive : ''}`}
          >
            All Active Exams ({activeCertifications.length})
          </button>
          <button
            type="button"
            onClick={() => setFilterTier('foundational')}
            className={`${styles.filterBtn} ${filterTier === 'foundational' ? styles.filterBtnActive : ''}`}
          >
            Foundational ($100)
          </button>
          <button
            type="button"
            onClick={() => setFilterTier('associate')}
            className={`${styles.filterBtn} ${filterTier === 'associate' ? styles.filterBtnActive : ''}`}
          >
            Associate ($150)
          </button>
          <button
            type="button"
            onClick={() => setFilterTier('professional')}
            className={`${styles.filterBtn} ${filterTier === 'professional' ? styles.filterBtnActive : ''}`}
          >
            Professional ($300)
          </button>
          <button
            type="button"
            onClick={() => setFilterTier('specialty')}
            className={`${styles.filterBtn} ${filterTier === 'specialty' ? styles.filterBtnActive : ''}`}
          >
            Specialty ($300)
          </button>
        </div>
      </div>

      {/* Responsive Table Container for Desktop/Tablet */}
      <div className={styles.tableScrollBox}>
        <table className={styles.feesTable}>
          <thead>
            <tr>
              <th scope="col" style={{ width: '15%' }}>Level</th>
              <th scope="col" style={{ width: '33%' }}>Certification Name & Code</th>
              <th scope="col" style={{ width: '16%' }}>Exam Duration</th>
              <th scope="col" style={{ width: '20%' }}>Exam Fee (USD & INR Est.)</th>
              <th scope="col" style={{ width: '16%' }}>Official Blueprint</th>
            </tr>
          </thead>
          <tbody>
            {filteredCerts.map((cert) => (
              <tr key={cert.id} className={styles.tableRow}>
                <td>
                  <span className={`${styles.tierBadge} ${styles[`tier_${cert.tierCode}`]}`}>
                    {cert.tier}
                  </span>
                </td>
                <td>
                  <div className={styles.certNameGroup}>
                    <strong className={styles.certNameText}>{cert.name}</strong>
                    <span className={styles.certCodePill}>{cert.code}</span>
                  </div>
                </td>
                <td>
                  <div className={styles.durationGroup}>
                    <Clock size={13} className={styles.clockIcon} />
                    <span>{cert.duration}</span>
                  </div>
                  <span className={styles.questionsText}>{cert.questions}</span>
                </td>
                <td>
                  <div className={styles.feeGroup}>
                    <strong className={styles.feeUSDText}>{cert.feeUSD} USD</strong>
                    <span className={styles.feeINRText}>{cert.feeINR}</span>
                  </div>
                </td>
                <td>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.officialLink}
                    title={`View official ${cert.name} exam details on AWS`}
                  >
                    <span>AWS Guide</span>
                    <ExternalLink size={12} />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Critical Technical Note: Retired AWS Specialty Exams */}
      <div className={styles.retiredExamsNote}>
        <AlertCircle size={18} className={styles.alertIcon} />
        <div>
          <h4 className={styles.alertTitle}>
            Important Notice on Retired AWS Certifications (2024–2026 Updates)
          </h4>
          <p className={styles.alertText}>
            Please note that AWS officially retired three legacy specialty certifications in 2024: 
            <strong> AWS Certified Database – Specialty (DBS-C01)</strong>, 
            <strong> AWS Certified Data Analytics – Specialty (DAS-C01)</strong>, and 
            <strong> AWS Certified Machine Learning – Specialty (MLS-C01)</strong>. 
            These have been modernized into the active <strong>AWS Certified Data Engineer – Associate (DEA-C01)</strong> and <strong>AWS Certified Machine Learning Engineer – Associate (MLA-C01)</strong>. Only active, official exams are shown above.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AWSFeesTable;
