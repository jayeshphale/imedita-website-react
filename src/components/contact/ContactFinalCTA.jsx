import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, BookOpen, ShieldCheck, Award, Star } from 'lucide-react';
import styles from './ContactFinalCTA.module.css';

export function ContactFinalCTA({ onOpenDemo }) {
  return (
    <section className={styles.section} aria-labelledby="final-cta-heading">
      <div className={styles.container}>
        <div className={styles.ctaBox}>
          
          {/* Subtle Ambient Atmosphere */}
          <div className={styles.ambientGlow} aria-hidden="true" />
          <div className={styles.gridOverlay} aria-hidden="true" />

          <div className={styles.contentWrap}>
            
            {/* Eyebrow Badge */}
            <div className={styles.eyebrowBadge}>
              <Star size={13} className={styles.starIcon} />
              <span>Trusted by 11,200+ Network Engineers</span>
            </div>

            {/* Heading */}
            <h2 id="final-cta-heading" className={styles.heading}>
              Ready to Take the Next Step in Your Career?
            </h2>

            {/* Description */}
            <p className={styles.description}>
              Connect with our team and discover the right learning path for your professional goals.
              Whether you are launching your networking career with CCNA or advancing to CCIE enterprise architecture, 
              we have the right hands-on track for you.
            </p>

            {/* Action Buttons */}
            <div className={styles.actionsGroup}>
              <Link 
                to="/cisco-ccna-200-301-course-pune/" 
                className={styles.primaryBtn}
                title="Explore Certification Courses"
              >
                <BookOpen size={16} />
                <span>Explore Courses</span>
                <ArrowRight size={15} className={styles.btnArrow} />
              </Link>

              <button
                type="button"
                onClick={() => onOpenDemo ? onOpenDemo('Contact Final CTA Section') : null}
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
                <ShieldCheck size={14} className={styles.reassuranceIcon} />
                <span>100% Practical Training on Real Hardware Racks</span>
              </div>
              <span className={styles.reassuranceDot}>•</span>
              <div className={styles.reassuranceItem}>
                <Award size={14} className={styles.reassuranceIcon} />
                <span>CCIE Certified Mentors & Placement Cell</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
