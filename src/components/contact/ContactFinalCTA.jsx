import React from 'react';
import { Sparkles, Calendar, BookOpen, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import styles from './ContactFinalCTA.module.css';

export function ContactFinalCTA({ onOpenDemo }) {
  return (
    <section className={styles.ctaSection} aria-labelledby="final-cta-heading">
      <div className={styles.ambientGlow} aria-hidden="true" />
      <div className={styles.meshGrid} aria-hidden="true" />

      <div className={styles.container}>
        
        {/* Top Kicker */}
        <div className={styles.badgeWrapper}>
          <span className={styles.kickerBadge}>
            <Sparkles size={14} className={styles.sparkleIcon} />
            <span>Accelerate Your Networking Career</span>
          </span>
        </div>

        {/* Main CTA Typography */}
        <h2 id="final-cta-heading" className={styles.heading}>
          Ready to Take the Next Step in Your Career?
        </h2>

        <p className={styles.description}>
          Connect with our team and discover the right learning path for your professional goals.
        </p>

        {/* CTA Buttons Row */}
        <div className={styles.buttonsRow}>
          {/* Button 1: Explore Courses */}
          <a href="/#courses" className={styles.btnExplore}>
            <BookOpen size={18} />
            <span>Explore Courses</span>
            <ArrowRight size={16} className={styles.btnArrow} />
          </a>

          {/* Button 2: Book a Free Demo */}
          <button 
            type="button" 
            onClick={() => onOpenDemo ? onOpenDemo('Contact Final CTA') : null}
            className={styles.btnDemo}
          >
            <Calendar size={18} />
            <span>Book a Free Demo</span>
          </button>
        </div>

        {/* Micro-Trust Strip */}
        <div className={styles.trustBadges}>
          <div className={styles.trustItem}>
            <CheckCircle2 size={15} className={styles.trustIcon} />
            <span>Zero Obligation Session</span>
          </div>
          <span className={styles.dot}>•</span>
          <div className={styles.trustItem}>
            <ShieldCheck size={15} className={styles.trustIcon} />
            <span>Direct Guidance from CCIE Certified Mentors</span>
          </div>
          <span className={styles.dot}>•</span>
          <div className={styles.trustItem}>
            <CheckCircle2 size={15} className={styles.trustIcon} />
            <span>100% Practical Multi-Vendor Lab Racks</span>
          </div>
        </div>

      </div>
    </section>
  );
}
