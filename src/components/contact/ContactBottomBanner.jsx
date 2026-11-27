import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, BookOpen, ShieldCheck, Star } from 'lucide-react';
import styles from './ContactBottomBanner.module.css';

export function ContactBottomBanner({ onOpenDemo }) {
  return (
    <section className={styles.sectionWrapper} aria-labelledby="contact-cta-heading">
      <div className={styles.container}>
        <div className={styles.bannerBox}>
          
          {/* Subtle Ambient Light Effect */}
          <div className={styles.ambientGlow} aria-hidden="true" />
          <div className={styles.gridOverlay} aria-hidden="true" />

          <div className={styles.contentWrap}>
            
            {/* Top Micro-badge */}
            <div className={styles.badgeRow}>
              <span className={styles.kickerPill}>Next Step</span>
              <div className={styles.ratingBadge}>
                <Star size={13} className={styles.starIcon} />
                <span>Trusted by 11,200+ Network Engineers</span>
              </div>
            </div>

            {/* Heading & Subtitle */}
            <h2 id="contact-cta-heading" className={styles.heading}>
              Ready to Take the Next Step in Your Career?
            </h2>

            <p className={styles.description}>
              Connect with our team and discover the right learning path for your professional goals.
              Whether you are an aspiring network engineer or an experienced professional advancing to CCIE, 
              we have the right hands-on track for you.
            </p>

            {/* Action Buttons */}
            <div className={styles.buttonsGroup}>
              <Link 
                to="/cisco-ccna-200-301-course-pune/" 
                className={styles.primaryBtn}
                title="Explore Cisco & Security Courses"
              >
                <BookOpen size={16} />
                <span>Explore Courses</span>
                <ArrowRight size={15} className={styles.btnArrow} />
              </Link>

              <button
                type="button"
                onClick={() => onOpenDemo ? onOpenDemo('Contact Final CTA Banner') : null}
                className={styles.secondaryBtn}
                title="Book a Free 2-Hour Practical Demo"
              >
                <Calendar size={16} />
                <span>Book a Free Demo</span>
              </button>
            </div>

            {/* Bottom Reassurance */}
            <div className={styles.reassuranceRow}>
              <div className={styles.reassuranceItem}>
                <ShieldCheck size={14} className={styles.shieldIcon} />
                <span>100% Practical Training on Real Hardware Racks</span>
              </div>
              <span className={styles.reassuranceDot}>•</span>
              <div className={styles.reassuranceItem}>
                <span>Flexible Weekday & Weekend Batches</span>
              </div>
              <span className={styles.reassuranceDot}>•</span>
              <div className={styles.reassuranceItem}>
                <span>EMI & Installment Options Available</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
