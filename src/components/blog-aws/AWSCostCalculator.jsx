import React, { useState, useId } from 'react';
import { 
  Calculator, 
  DollarSign, 
  Sparkles, 
  RotateCcw, 
  HelpCircle,
  CheckCircle2,
  TrendingDown
} from 'lucide-react';
import styles from './AWSCostCalculator.module.css';

const USD_TO_INR = 86; // Indicative conversion rate
const GST_RATE = 0.18; // 18% GST

const TIERS = [
  { id: 'foundational', name: 'Foundational (CLF-C02)', feeUsd: 100 },
  { id: 'associate', name: 'Associate (SAA, DVA, SOA, DEA, MLA)', feeUsd: 150 },
  { id: 'professional', name: 'Professional (SAP-C02, DOP-C02)', feeUsd: 300 },
  { id: 'specialty', name: 'Specialty (ANS-C01, SCS-C02)', feeUsd: 300 },
];

const PREP_OPTIONS = [
  { id: 'free', label: 'Self-Study (AWS Free Tier + YouTube docs)', usd: 0, inr: 0 },
  { id: 'video', label: 'Self-Paced Courses (On-demand video + notes)', usd: 30, inr: 2500 },
  { id: 'guided', label: 'Live Mentor Bootcamp (I-Medita Live Lab Training)', usd: 240, inr: 20000 },
];

const PRACTICE_OPTIONS = [
  { id: 'free_tests', label: 'Free Sampler Questions only', usd: 0, inr: 0 },
  { id: 'paid_tests', label: 'Premium Exam Simulator (6+ timed mock tests)', usd: 25, inr: 2000 },
];

const LAB_OPTIONS = [
  { id: 'free_tier', label: '12-Month AWS Free Tier only ($0)', usd: 0, inr: 0 },
  { id: 'sandbox', label: 'Provisioned Sandbox / Extra AWS compute ($15 / ₹1,200)', usd: 15, inr: 1200 },
];

export default function AWSCostCalculator() {
  const [currency, setCurrency] = useState('INR'); // 'INR' or 'USD'
  const [selectedTier, setSelectedTier] = useState('associate');
  const [attempts, setAttempts] = useState(1);
  const [has50Discount, setHas50Discount] = useState(false);
  const [prepTier, setPrepTier] = useState('guided');
  const [practiceTier, setPracticeTier] = useState('paid_tests');
  const [labTier, setLabTier] = useState('free_tier');
  const [includeGst, setIncludeGst] = useState(true);

  // Accessible unique IDs for form controls
  const tierSelectId = useId();
  const attemptsSelectId = useId();
  const prepSelectId = useId();
  const practiceSelectId = useId();
  const labSelectId = useId();
  const discountCheckboxId = useId();
  const gstCheckboxId = useId();

  // Calculation
  const tierData = TIERS.find(t => t.id === selectedTier) || TIERS[1];
  
  // First attempt is standard or 50% discount if user already holds another AWS cert
  let baseExamFeeUsd = has50Discount ? tierData.feeUsd * 0.5 : tierData.feeUsd;
  
  // Subsequent attempts if attempts > 1 (AWS retake fee is full price)
  if (attempts > 1) {
    baseExamFeeUsd += (attempts - 1) * tierData.feeUsd;
  }

  const prepObj = PREP_OPTIONS.find(p => p.id === prepTier) || PREP_OPTIONS[0];
  const practiceObj = PRACTICE_OPTIONS.find(p => p.id === practiceTier) || PRACTICE_OPTIONS[0];
  const labObj = LAB_OPTIONS.find(l => l.id === labTier) || LAB_OPTIONS[0];

  const prepFeeUsd = prepObj.usd;
  const practiceFeeUsd = practiceObj.usd;
  const labFeeUsd = labObj.usd;

  // Taxes
  const examTaxUsd = includeGst ? baseExamFeeUsd * GST_RATE : 0;
  
  const totalUsd = baseExamFeeUsd + examTaxUsd + prepFeeUsd + practiceFeeUsd + labFeeUsd;

  // INR Equivalents
  const baseExamFeeInr = Math.round(baseExamFeeUsd * USD_TO_INR);
  const examTaxInr = Math.round(examTaxUsd * USD_TO_INR);
  const prepFeeInr = prepObj.inr;
  const practiceFeeInr = practiceObj.inr;
  const labFeeInr = labObj.inr;
  const totalInr = baseExamFeeInr + examTaxInr + prepFeeInr + practiceFeeInr + labFeeInr;

  const handleReset = () => {
    setSelectedTier('associate');
    setAttempts(1);
    setHas50Discount(false);
    setPrepTier('guided');
    setPracticeTier('paid_tests');
    setLabTier('free_tier');
    setIncludeGst(true);
  };

  const isINR = currency === 'INR';

  return (
    <section id="cost-calculator" className={styles.section} aria-labelledby="calc-heading">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badgeWrap}>
            <Calculator className={styles.badgeIcon} aria-hidden="true" />
            <span>Interactive Estimator</span>
          </div>
          <h2 id="calc-heading" className={styles.title}>
            AWS Certification Cost Calculator (2026)
          </h2>
          <p className={styles.subtitle}>
            Estimate your end-to-end certification budget including exam fees, preparation materials, 
            hands-on labs, and 18% GST. Customize options below to view instant estimates.
          </p>
        </div>

        <div className={styles.calcWrapper}>
          {/* Controls Column */}
          <div className={styles.controlsCol}>
            {/* Currency Selector */}
            <div className={styles.fieldGroup}>
              <span className={styles.label}>Select Currency:</span>
              <div className={styles.toggleRow}>
                <button
                  type="button"
                  className={`${styles.toggleBtn} ${currency === 'INR' ? styles.toggleActive : ''}`}
                  onClick={() => setCurrency('INR')}
                >
                  ₹ Indian Rupee (INR)
                </button>
                <button
                  type="button"
                  className={`${styles.toggleBtn} ${currency === 'USD' ? styles.toggleActive : ''}`}
                  onClick={() => setCurrency('USD')}
                >
                  $ US Dollar (USD)
                </button>
              </div>
            </div>

            {/* Certification Level */}
            <div className={styles.fieldGroup}>
              <label htmlFor={tierSelectId} className={styles.label}>Certification Level:</label>
              <select
                id={tierSelectId}
                value={selectedTier}
                onChange={(e) => setSelectedTier(e.target.value)}
                className={styles.select}
              >
                {TIERS.map(t => (
                  <option key={t.id} value={t.id}>
                    {t.name} — ${t.feeUsd} USD
                  </option>
                ))}
              </select>
            </div>

            {/* Attempts & Discount */}
            <div className={styles.twoCol}>
              <div className={styles.fieldGroup}>
                <label htmlFor={attemptsSelectId} className={styles.label}>Planned Exam Attempts:</label>
                <select
                  id={attemptsSelectId}
                  value={attempts}
                  onChange={(e) => setAttempts(Number(e.target.value))}
                  className={styles.select}
                >
                  <option value={1}>1 Attempt (Pass 1st try)</option>
                  <option value={2}>2 Attempts (1 retake safety)</option>
                  <option value={3}>3 Attempts</option>
                </select>
              </div>

              <div className={styles.fieldGroup}>
                <span className={styles.label}>50% Recertification Voucher:</span>
                <label htmlFor={discountCheckboxId} className={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    id={discountCheckboxId}
                    checked={has50Discount}
                    onChange={(e) => setHas50Discount(e.target.checked)}
                    className={styles.checkbox}
                  />
                  <span>I hold a prior active AWS cert (-50%)</span>
                </label>
              </div>
            </div>

            {/* Preparation / Training */}
            <div className={styles.fieldGroup}>
              <label htmlFor={prepSelectId} className={styles.label}>Training & Mentorship:</label>
              <select
                id={prepSelectId}
                value={prepTier}
                onChange={(e) => setPrepTier(e.target.value)}
                className={styles.select}
              >
                {PREP_OPTIONS.map(p => (
                  <option key={p.id} value={p.id}>
                    {p.label} ({isINR ? `₹${p.inr.toLocaleString('en-IN')}` : `$${p.usd}`})
                  </option>
                ))}
              </select>
            </div>

            {/* Practice Exams */}
            <div className={styles.fieldGroup}>
              <label htmlFor={practiceSelectId} className={styles.label}>Practice Exam Simulator:</label>
              <select
                id={practiceSelectId}
                value={practiceTier}
                onChange={(e) => setPracticeTier(e.target.value)}
                className={styles.select}
              >
                {PRACTICE_OPTIONS.map(po => (
                  <option key={po.id} value={po.id}>
                    {po.label} ({isINR ? `₹${po.inr.toLocaleString('en-IN')}` : `$${po.usd}`})
                  </option>
                ))}
              </select>
            </div>

            {/* AWS Lab Allowance */}
            <div className={styles.fieldGroup}>
              <label htmlFor={labSelectId} className={styles.label}>Hands-On AWS Lab Allowance:</label>
              <select
                id={labSelectId}
                value={labTier}
                onChange={(e) => setLabTier(e.target.value)}
                className={styles.select}
              >
                {LAB_OPTIONS.map(lo => (
                  <option key={lo.id} value={lo.id}>
                    {lo.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Tax Checkbox */}
            <div className={styles.checkboxRow}>
              <label htmlFor={gstCheckboxId} className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  id={gstCheckboxId}
                  checked={includeGst}
                  onChange={(e) => setIncludeGst(e.target.checked)}
                  className={styles.checkbox}
                />
                <span>Include 18% GST on Exam Fee (Mandatory for Indian test candidates)</span>
              </label>
            </div>

            <button type="button" onClick={handleReset} className={styles.resetBtn}>
              <RotateCcw className={styles.btnIcon} aria-hidden="true" />
              Reset to Defaults
            </button>
          </div>

          {/* Results Summary Column */}
          <div className={styles.summaryCol}>
            <div className={styles.summaryCard}>
              <div className={styles.summaryHeader}>
                <h3 className={styles.summaryHeading}>Estimated Total Investment</h3>
                <span className={styles.currencyBadge}>{currency} Estimate</span>
              </div>

              <div className={styles.grandTotal}>
                {isINR ? (
                  <>
                    <span className={styles.totalSign}>₹</span>
                    <span className={styles.totalAmount}>{totalInr.toLocaleString('en-IN')}</span>
                  </>
                ) : (
                  <>
                    <span className={styles.totalSign}>$</span>
                    <span className={styles.totalAmount}>{Math.round(totalUsd)}</span>
                  </>
                )}
                <span className={styles.totalPeriod}>all-inclusive</span>
              </div>

              {has50Discount && (
                <div className={styles.discountBadge}>
                  <TrendingDown className={styles.discountIcon} aria-hidden="true" />
                  <span>50% AWS Certified Loyalty Discount Applied!</span>
                </div>
              )}

              <div className={styles.breakdownList}>
                <div className={styles.breakdownItem}>
                  <span className={styles.breakdownLabel}>Official Exam Fee ({attempts} attempt{attempts > 1 ? 's' : ''}):</span>
                  <span className={styles.breakdownVal}>
                    {isINR ? `₹${baseExamFeeInr.toLocaleString('en-IN')}` : `$${baseExamFeeUsd}`}
                  </span>
                </div>

                <div className={styles.breakdownItem}>
                  <span className={styles.breakdownLabel}>GST (18% on Exam Fee):</span>
                  <span className={styles.breakdownVal}>
                    {includeGst 
                      ? (isINR ? `₹${examTaxInr.toLocaleString('en-IN')}` : `$${Math.round(examTaxUsd)}`)
                      : 'Not included'
                    }
                  </span>
                </div>

                <div className={styles.breakdownItem}>
                  <span className={styles.breakdownLabel}>Training / Coaching:</span>
                  <span className={styles.breakdownVal}>
                    {isINR ? `₹${prepFeeInr.toLocaleString('en-IN')}` : `$${prepFeeUsd}`}
                  </span>
                </div>

                <div className={styles.breakdownItem}>
                  <span className={styles.breakdownLabel}>Practice Simulator & Mocks:</span>
                  <span className={styles.breakdownVal}>
                    {isINR ? `₹${practiceFeeInr.toLocaleString('en-IN')}` : `$${practiceFeeUsd}`}
                  </span>
                </div>

                <div className={styles.breakdownItem}>
                  <span className={styles.breakdownLabel}>AWS Sandbox Lab Allowance:</span>
                  <span className={styles.breakdownVal}>
                    {isINR ? `₹${labFeeInr.toLocaleString('en-IN')}` : `$${labFeeUsd}`}
                  </span>
                </div>
              </div>

              <div className={styles.keyTakeaway}>
                <CheckCircle2 className={styles.takeawayIcon} aria-hidden="true" />
                <p className={styles.takeawayText}>
                  <strong>Smart Career Move:</strong> Passing on your first attempt saves you up to <strong>₹15,000+</strong> in retake fees and delays. 
                  Enrolling in structured mentorship provides hands-on enterprise lab topologies that guarantee real exam readiness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
