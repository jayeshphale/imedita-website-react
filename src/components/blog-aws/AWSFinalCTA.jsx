import React from 'react';
import { Sparkles, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';
import styles from './AWSFinalCTA.module.css';

export default function AWSFinalCTA({ onOpenDemo = () => {} }) {
  return (
    <section className={styles.section} aria-labelledby="final-cta-heading">
      <div className={styles.container}>
        <div className={styles.ctaBox}>
          <div className={styles.badgeWrap}>
            <Sparkles className={styles.badgeIcon} aria-hidden="true" />
            <span>Plan Your 2026 Cloud Career</span>
          </div>

          <h2 id="final-cta-heading" className={styles.title}>
            Ready to Clear Your AWS Certification on the First Attempt?
          </h2>

          <p className={styles.subtitle}>
            Connect with our certified AWS mentors to get a personalized roadmap, custom study plan, 
            and hands-on lab demonstration tailored to your background.
          </p>

          <div className={styles.btnRow}>
            <button 
              type="button" 
              className={styles.primaryBtn}
              onClick={onOpenDemo}
            >
              <Calendar className={styles.btnIcon} aria-hidden="true" />
              <span>Schedule Free Counseling &amp; Demo</span>
              <ArrowRight className={styles.btnArrow} aria-hidden="true" />
            </button>
            <a 
              href="/contact-us" 
              className={styles.secondaryBtn}
            >
              <span>Speak to an Academic Advisor</span>
            </a>
          </div>

          <div className={styles.guarantee}>
            <ShieldCheck className={styles.shieldIcon} aria-hidden="true" />
            <span>Zero obligation. Free 30-minute career evaluation with an AWS Certified Solution Architect.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
