import React, { useState } from 'react';
import {
  IndianRupee,
  ShieldCheck,
  CreditCard,
  Building,
  CheckCircle2,
  AlertTriangle,
  FileText,
  Calculator,
  Percent,
  Receipt
} from 'lucide-react';
import styles from './AWSIndiaPricing.module.css';

const indiaPricingTiers = [
  {
    level: 'Foundational (CLF-C02)',
    baseUSD: 100,
    approxINRBase: '₹8,300',
    gst18: '₹1,494',
    approxTotalPayable: '₹9,794 – ₹10,200',
    notes: 'Ideal entry point for college students & non-tech career transitioners'
  },
  {
    level: 'Associate (SAA, DVA, SOA, DEA)',
    baseUSD: 150,
    approxINRBase: '₹12,450',
    gst18: '₹2,241',
    approxTotalPayable: '₹14,691 – ₹15,300',
    notes: 'Most common certification for Indian IT professionals & system engineers'
  },
  {
    level: 'Professional (SAP, DOP)',
    baseUSD: 300,
    approxINRBase: '₹24,900',
    gst18: '₹4,482',
    approxTotalPayable: '₹29,382 – ₹30,600',
    notes: 'Usually sponsored by enterprise employers or using 50% discount codes'
  },
  {
    level: 'Specialty (ANS, SCS)',
    baseUSD: 300,
    approxINRBase: '₹24,900',
    gst18: '₹4,482',
    approxTotalPayable: '₹29,382 – ₹30,600',
    notes: 'For advanced enterprise network and cloud cybersecurity architects'
  }
];

export function AWSIndiaPricing() {
  return (
    <section className={styles.indiaPricingSection} id="cost-in-india">
      <div className={styles.sectionHeader}>
        <span className={styles.eyebrow}>INDIA REGIONAL PRICING BREAKDOWN</span>
        <h3 className={styles.heading}>AWS Certification Cost in India: Taxes, Conversion & GST</h3>
        <p className={styles.subtext}>
          AWS sets all global exam fees strictly in US Dollars (USD). When booking your exam in India via Pearson VUE, your total bill is calculated based on dynamic currency exchange rates plus mandatory government taxes.
        </p>
      </div>

      {/* Visual Step-by-Step Currency & Tax Flow */}
      <div className={styles.gstFlowGrid}>
        <div className={styles.flowStepCard}>
          <div className={styles.flowStepNum}>STEP 01</div>
          <div className={styles.flowStepTitle}>Base USD Exam Fee</div>
          <div className={styles.flowStepValue}>$150 USD</div>
          <p className={styles.flowStepDesc}>Standard Associate exam fee set globally by AWS.</p>
        </div>

        <div className={styles.flowStepArrow} aria-hidden="true">→</div>

        <div className={styles.flowStepCard}>
          <div className={styles.flowStepNum}>STEP 02</div>
          <div className={styles.flowStepTitle}>INR Conversion</div>
          <div className={styles.flowStepValue}>₹12,450 – ₹12,900</div>
          <p className={styles.flowStepDesc}>Based on prevailing daily bank forex rates (~₹83–86/USD).</p>
        </div>

        <div className={styles.flowStepArrow} aria-hidden="true">→</div>

        <div className={styles.flowStepCard}>
          <div className={styles.flowStepNum}>STEP 03</div>
          <div className={styles.flowStepTitle}>+ 18% Indian GST</div>
          <div className={styles.flowStepValue}>+ ₹2,241 – ₹2,320</div>
          <p className={styles.flowStepDesc}>Mandatory Indian tax on online exam bookings.</p>
        </div>

        <div className={styles.flowStepArrow} aria-hidden="true">=</div>

        <div className={`${styles.flowStepCard} ${styles.flowStepTotal}`}>
          <div className={styles.flowStepNum}>TOTAL PAYABLE</div>
          <div className={styles.flowStepTitle}>Pearson VUE Checkout</div>
          <div className={styles.flowStepValueTotal}>₹14,690 – ₹15,220</div>
          <p className={styles.flowStepDesc}>Final amount charged to your international card.</p>
        </div>
      </div>

      {/* Tax & Conversion Breakdown Table */}
      <div className={styles.tableCard}>
        <div className={styles.tableCardHeader}>
          <div className={styles.headerLeft}>
            <Receipt size={18} className={styles.receiptIcon} />
            <h4 className={styles.cardTitle}>Estimated INR Cost Breakdown with 18% GST (India)</h4>
          </div>
          <span className={styles.exchangeRateNotice}>
            *Calculated at illustrative baseline ~₹83/USD exchange rate
          </span>
        </div>

        <div className={styles.tableResponsive}>
          <table className={styles.breakdownTable}>
            <thead>
              <tr>
                <th>Certification Tier</th>
                <th>Base Fee (USD)</th>
                <th>Estimated Base (INR)</th>
                <th>18% GST (Taxes)</th>
                <th>Approx Total Payable (INR)</th>
              </tr>
            </thead>
            <tbody>
              {indiaPricingTiers.map((tier, idx) => (
                <tr key={idx}>
                  <td>
                    <strong className={styles.tierName}>{tier.level}</strong>
                    <span className={styles.tierNotes}>{tier.notes}</span>
                  </td>
                  <td>
                    <span className={styles.usdPill}>${tier.baseUSD} USD</span>
                  </td>
                  <td className={styles.monoCell}>{tier.approxINRBase}</td>
                  <td className={styles.gstCell}>+ {tier.gst18}</td>
                  <td>
                    <strong className={styles.totalPayableText}>{tier.approxTotalPayable}</strong>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.tableCardFooter}>
          <p className={styles.disclaimerText}>
            <strong>Important Disclaimer:</strong> Exact payable INR amounts vary daily depending on bank forex conversion rates, bank international transaction markup (typically 1.5% to 3.5%), and credit card processing fees. AWS and Pearson VUE charge 18% GST on all Indian test bookings in compliance with Indian tax laws.
          </p>
        </div>
      </div>

      {/* 3 Practical Considerations Cards */}
      <div className={styles.considerationsGrid}>
        {/* Card 1: Payment Methods */}
        <div className={styles.conCard}>
          <div className={styles.conIconBox}>
            <CreditCard size={20} />
          </div>
          <h4 className={styles.conTitle}>Payment Considerations in India</h4>
          <ul className={styles.conList}>
            <li>
              <strong>International Transactions Enabled:</strong> Your credit or debit card (Visa, Mastercard, Amex) must have <em>International Usage</em> active in your mobile banking app.
            </li>
            <li>
              <strong>Forex Markup Fees:</strong> Most Indian banks levy a 2.0% – 3.5% foreign currency markup on USD transactions.
            </li>
            <li>
              <strong>Prepaid Forex Cards:</strong> Many candidates use multi-currency forex debit cards to lock in conversion rates and avoid surprise bank surcharges.
            </li>
          </ul>
        </div>

        {/* Card 2: Pearson VUE Booking Centers */}
        <div className={styles.conCard}>
          <div className={styles.conIconBox}>
            <Building size={20} />
          </div>
          <h4 className={styles.conTitle}>Exam Center vs. Home Online Proctored</h4>
          <ul className={styles.conList}>
            <li>
              <strong>Physical Pearson VUE Test Centers:</strong> Available across all major Indian cities (Pune, Mumbai, Bengaluru, Delhi NCR, Hyderabad, Chennai). Eliminates internet cutoff risks.
            </li>
            <li>
              <strong>OnVUE Online Proctored at Home:</strong> Available 24/7. Requires a private room, high-speed broadband, clear webcam, and strict zero-interruption compliance.
            </li>
            <li>
              <strong>Same Cost:</strong> Both test center and online proctored exams cost the exact same fee.
            </li>
          </ul>
        </div>

        {/* Card 3: Official AWS Exam Vouchers */}
        <div className={styles.conCard}>
          <div className={styles.conIconBox}>
            <ShieldCheck size={20} />
          </div>
          <h4 className={styles.conTitle}>Buying Official AWS Vouchers in India</h4>
          <ul className={styles.conList}>
            <li>
              <strong>Direct Purchase:</strong> Authorized training partners and corporate portals (like Xvoucher) sell official prepaid voucher codes in INR.
            </li>
            <li>
              <strong>Tax Invoicing (GST Input Credit):</strong> Corporate buyers and institutions can provide their GSTIN number during bulk voucher purchasing to claim 18% GST input tax credit.
            </li>
            <li>
              <strong>Validity:</strong> Most purchased vouchers are valid for 12 months from the date of issuance.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AWSIndiaPricing;
