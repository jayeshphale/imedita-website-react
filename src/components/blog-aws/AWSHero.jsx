import React from 'react';
import { 
  Cloud, 
  Sparkles, 
  ArrowDown, 
  Calculator, 
  ShieldCheck, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  ExternalLink,
  Zap,
  Award,
  Layers,
  ArrowRight
} from 'lucide-react';
import BlogBreadcrumbs from '../blog-common/BlogBreadcrumbs';
import styles from './AWSHero.module.css';

const BREADCRUMBS = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'AWS Certification Cost', href: '/blog/aws-certification-cost' }
];

export function AWSHero() {
  const scrollTo = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (!element) return;
    
    if (window.__lenis) {
      window.__lenis.scrollTo(element, { offset: -90 });
    } else {
      const topOffset = element.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  return (
    <header className={styles.heroWrapper}>
      {/* Background ambient lighting effects */}
      <div className={styles.ambientGlowPrimary} aria-hidden="true" />
      <div className={styles.ambientGlowSecondary} aria-hidden="true" />
      <div className={styles.gridPattern} aria-hidden="true" />

      <div className={styles.heroContainer}>
        {/* Breadcrumb row */}
        <div className={styles.breadcrumbWrap}>
          <BlogBreadcrumbs breadcrumbs={BREADCRUMBS} />
        </div>

        {/* 2-Column Split Hero Layout */}
        <div className={styles.heroGrid}>
          {/* LEFT COLUMN: Editorial Story & Title */}
          <div className={styles.leftCol}>
            {/* Edition Kicker Badge */}
            <div className={styles.kickerBadge}>
              <span className={styles.kickerPill}>
                <Zap size={13} className={styles.kickerIcon} aria-hidden="true" />
                2026 BLUEPRINT
              </span>
              <span className={styles.kickerDivider}>•</span>
              <span className={styles.kickerText}>AWS CLOUD ARCHITECTURE SERIES</span>
              <span className={styles.kickerDivider}>•</span>
              <span className={styles.kickerRead}>12 MIN READ</span>
            </div>

            {/* Main Headline with Gradient Brand Touch */}
            <h1 className={styles.headline}>
              AWS Certification Cost in 2026:{' '}
              <span className={styles.headlineHighlight}>
                Complete Exam Fee, Taxes &amp; Career Guide
              </span>
            </h1>

            {/* Subtitle / Lead Paragraph */}
            <p className={styles.leadText}>
              Planning your cloud career roadmap? Here is the definitive, verified breakdown of all 
              Amazon Web Services (AWS) exam fees, Indian taxation (18% GST), hidden ownership expenses, 
              and actionable study schedules from CCIE &amp; AWS certified enterprise architects.
            </p>

            {/* Author & Technical Reviewer Capsule */}
            <div className={styles.authorCapsule}>
              <div className={styles.creatorsRow}>
                {/* Saurabh Yadav */}
                <div className={styles.creatorItem}>
                  <img
                    src="https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/12/10071401/Saurabh-Yadav-imedita.svg"
                    alt="Saurabh Yadav"
                    className={styles.creatorAvatar}
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                  <div className={styles.creatorText}>
                    <span className={styles.creatorRole}>Authored by</span>
                    <span className={styles.creatorName}>Saurabh Yadav</span>
                    <span className={styles.creatorCred}>Triple CCIE #46962</span>
                  </div>
                </div>

                <div className={styles.creatorSeparator} />

                {/* Sudhanshu Bhat */}
                <div className={styles.creatorItem}>
                  <img
                    src="https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/12/10071359/Sudhanshu-Bhat-imedita.svg"
                    alt="Sudhanshu Bhat"
                    className={styles.creatorAvatar}
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                  <div className={styles.creatorText}>
                    <span className={styles.creatorRole}>
                      <ShieldCheck size={11} className={styles.reviewerShield} aria-hidden="true" />
                      Reviewed by
                    </span>
                    <span className={styles.creatorName}>Sudhanshu Bhat</span>
                    <span className={styles.creatorCred}>CCIE &amp; AWS Solutions Arch</span>
                  </div>
                </div>
              </div>

              {/* Timestamp & Verification Meta Strip */}
              <div className={styles.metaStrip}>
                <div className={styles.metaItem}>
                  <Calendar size={13} className={styles.metaIcon} aria-hidden="true" />
                  <span>Updated: <strong>19 Nov 2026</strong></span>
                </div>
                <span className={styles.metaDot}>•</span>
                <div className={styles.metaItem}>
                  <Clock size={13} className={styles.metaIcon} aria-hidden="true" />
                  <span>12 min read</span>
                </div>
                <span className={styles.metaDot}>•</span>
                <div className={styles.verifiedBadge}>
                  <CheckCircle2 size={12} className={styles.checkIcon} aria-hidden="true" />
                  <span>2026 Pricing Verified</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className={styles.ctaRow}>
              <a 
                href="#quick-answer" 
                onClick={(e) => scrollTo(e, 'quick-answer')}
                className={styles.primaryCta}
              >
                <span>View Quick Fee Summary</span>
                <ArrowDown size={16} className={styles.ctaArrow} aria-hidden="true" />
              </a>

              <a 
                href="#cost-calculator" 
                onClick={(e) => scrollTo(e, 'cost-calculator')}
                className={styles.secondaryCta}
              >
                <Calculator size={16} className={styles.calcIcon} aria-hidden="true" />
                <span>Cost Calculator</span>
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: Creative AWS 2026 Cloud Fee Matrix Terminal */}
          <div className={styles.rightCol}>
            <div className={styles.terminalCard}>
              {/* Terminal Header */}
              <div className={styles.terminalHeader}>
                <div className={styles.terminalHeaderLeft}>
                  <div className={styles.cloudIconBox}>
                    <Cloud size={18} className={styles.terminalCloudIcon} aria-hidden="true" />
                  </div>
                  <div>
                    <h2 className={styles.terminalTitle}>AWS Global Fee Index</h2>
                    <span className={styles.terminalSubtitle}>Official 2026 Examination Catalog</span>
                  </div>
                </div>
                <div className={styles.liveBeacon}>
                  <span className={styles.beaconDot} />
                  <span className={styles.beaconText}>Active 2026</span>
                </div>
              </div>

              {/* 4 Tier Metric Grid */}
              <div className={styles.tiersCardGrid}>
                {/* 1. Foundational */}
                <div className={styles.tierSnapshotItem}>
                  <div className={styles.tierSnapshotTop}>
                    <span className={styles.tierSnapshotName}>Foundational</span>
                    <span className={styles.tierSnapshotCode}>CLF-C02</span>
                  </div>
                  <div className={styles.tierPriceGroup}>
                    <span className={styles.tierPriceUsd}>$100</span>
                    <span className={styles.tierCurrency}>USD</span>
                  </div>
                  <span className={styles.tierPriceInr}>₹10,150 (incl. 18% GST)</span>
                  <div className={styles.tierSpecs}>
                    <span>90 Mins</span>
                    <span className={styles.specDot}>•</span>
                    <span>65 Qs</span>
                  </div>
                </div>

                {/* 2. Associate (Featured) */}
                <div className={`${styles.tierSnapshotItem} ${styles.tierSnapshotPopular}`}>
                  <div className={styles.popularRibbon}>
                    <Sparkles size={11} aria-hidden="true" />
                    <span>Most Popular</span>
                  </div>
                  <div className={styles.tierSnapshotTop}>
                    <span className={styles.tierSnapshotName}>Associate</span>
                    <span className={styles.tierSnapshotCode}>SAA, DVA, SOA</span>
                  </div>
                  <div className={styles.tierPriceGroup}>
                    <span className={styles.tierPriceUsd}>$150</span>
                    <span className={styles.tierCurrency}>USD</span>
                  </div>
                  <span className={styles.tierPriceInr}>₹15,220 (incl. 18% GST)</span>
                  <div className={styles.tierSpecs}>
                    <span>130 Mins</span>
                    <span className={styles.specDot}>•</span>
                    <span>65 Qs</span>
                  </div>
                </div>

                {/* 3. Professional */}
                <div className={styles.tierSnapshotItem}>
                  <div className={styles.tierSnapshotTop}>
                    <span className={styles.tierSnapshotName}>Professional</span>
                    <span className={styles.tierSnapshotCode}>SAP-C02, DOP</span>
                  </div>
                  <div className={styles.tierPriceGroup}>
                    <span className={styles.tierPriceUsd}>$300</span>
                    <span className={styles.tierCurrency}>USD</span>
                  </div>
                  <span className={styles.tierPriceInr}>₹30,440 (incl. 18% GST)</span>
                  <div className={styles.tierSpecs}>
                    <span>180 Mins</span>
                    <span className={styles.specDot}>•</span>
                    <span>75 Qs</span>
                  </div>
                </div>

                {/* 4. Specialty */}
                <div className={styles.tierSnapshotItem}>
                  <div className={styles.tierSnapshotTop}>
                    <span className={styles.tierSnapshotName}>Specialty</span>
                    <span className={styles.tierSnapshotCode}>ANS-C01, SCS</span>
                  </div>
                  <div className={styles.tierPriceGroup}>
                    <span className={styles.tierPriceUsd}>$300</span>
                    <span className={styles.tierCurrency}>USD</span>
                  </div>
                  <span className={styles.tierPriceInr}>₹30,440 (incl. 18% GST)</span>
                  <div className={styles.tierSpecs}>
                    <span>170 Mins</span>
                    <span className={styles.specDot}>•</span>
                    <span>65 Qs</span>
                  </div>
                </div>
              </div>

              {/* Bottom Feature Highlights */}
              <div className={styles.terminalFooter}>
                <div className={styles.terminalFooterItem}>
                  <CheckCircle2 size={14} className={styles.footerCheckIcon} aria-hidden="true" />
                  <span>Pearson VUE Authorized Pricing</span>
                </div>
                <div className={styles.terminalFooterItem}>
                  <Award size={14} className={styles.footerAwardIcon} aria-hidden="true" />
                  <span>50% Loyalty Voucher On Pass</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick-Jump Navigation Dock */}
        <nav className={styles.navDock} aria-label="Article Quick Navigation">
          <span className={styles.navDockLabel}>Jump to:</span>
          <div className={styles.navDockChips}>
            <a 
              href="#quick-answer" 
              onClick={(e) => scrollTo(e, 'quick-answer')}
              className={styles.dockChip}
            >
              <span>⚡ Quick Fees</span>
            </a>
            <a 
              href="#fees-table" 
              onClick={(e) => scrollTo(e, 'fees-table')}
              className={styles.dockChip}
            >
              <span>📊 2026 Exam Catalog</span>
            </a>
            <a 
              href="#cost-in-india" 
              onClick={(e) => scrollTo(e, 'cost-in-india')}
              className={styles.dockChip}
            >
              <span>🇮🇳 India &amp; GST</span>
            </a>
            <a 
              href="#cost-calculator" 
              onClick={(e) => scrollTo(e, 'cost-calculator')}
              className={styles.dockChip}
            >
              <span>🧮 Interactive Calculator</span>
            </a>
            <a 
              href="#certification-roadmap" 
              onClick={(e) => scrollTo(e, 'certification-roadmap')}
              className={styles.dockChip}
            >
              <span>🗺️ Career Roadmap</span>
            </a>
            <a 
              href="#preparation-guide" 
              onClick={(e) => scrollTo(e, 'preparation-guide')}
              className={styles.dockChip}
            >
              <span>📚 Study Blueprint</span>
            </a>
            <a 
              href="#faqs" 
              onClick={(e) => scrollTo(e, 'faqs')}
              className={styles.dockChip}
            >
              <span>❓ 12 FAQs</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default AWSHero;
