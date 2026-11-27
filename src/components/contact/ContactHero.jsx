import React from 'react';
import { PhoneCall, MessageCircle, Calendar, Sparkles, ChevronRight, ShieldCheck, Star, MapPin } from 'lucide-react';
import styles from './ContactHero.module.css';

export function ContactHero({ onOpenDemo }) {
  const handleScrollToForm = (e) => {
    e.preventDefault();
    const el = document.getElementById('contact-form');
    if (el) {
      if (window.__lenis) {
        window.__lenis.scrollTo(el, { offset: -70 });
      } else {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className={styles.heroSection}>
      {/* Background Decorative Mesh & Atmospheric Glow */}
      <div className={styles.ambientGlow} aria-hidden="true" />
      <div className={styles.gridMesh} aria-hidden="true" />

      <div className={styles.container}>
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className={styles.breadcrumbs}>
          <a href="/" className={styles.crumbLink}>Home</a>
          <ChevronRight size={13} className={styles.crumbDivider} />
          <span className={styles.crumbActive}>Contact Us</span>
        </nav>

        {/* Live Status Pill */}
        <div className={styles.badgeWrapper}>
          <span className={styles.liveBadge}>
            <span className={styles.livePulse} />
            Admissions Open for 2026 Batches • Fast Counselor Response
          </span>
        </div>

        {/* Main Hero Typography */}
        <h1 className={styles.headline}>
          Let's Start Your <span className={styles.gradientText}>Learning Journey</span>
        </h1>

        <p className={styles.subheading}>
          Have questions about our training programs, certifications, or career opportunities? 
          Our team is here to help you take the next step.
        </p>

        {/* 3 Quick Contact Action Buttons */}
        <div className={styles.actionRow}>
          {/* Action 1: Talk to Our Team */}
          <a 
            href="tel:+918750004411" 
            className={`${styles.actionBtn} ${styles.btnPrimary}`}
            title="Call +91 8750004411 directly"
          >
            <PhoneCall size={18} className={styles.btnIcon} />
            <div className={styles.btnTextGroup}>
              <span className={styles.btnLabel}>Talk to Our Team</span>
              <span className={styles.btnSub}>+91 8750004411</span>
            </div>
          </a>

          {/* Action 2: WhatsApp Us */}
          <a 
            href="https://wa.me/918750004411?text=Hi%20I-Medita%20Team%2C%20I%20have%20an%20inquiry%20regarding%20training%20programs." 
            target="_blank" 
            rel="noopener noreferrer"
            className={`${styles.actionBtn} ${styles.btnWhatsApp}`}
            title="Chat with admissions on WhatsApp"
          >
            <MessageCircle size={18} className={styles.btnIcon} />
            <div className={styles.btnTextGroup}>
              <span className={styles.btnLabel}>WhatsApp Us</span>
              <span className={styles.btnSub}>Instant Chat Support</span>
            </div>
          </a>

          {/* Action 3: Book a Free Demo */}
          <button 
            type="button" 
            onClick={() => onOpenDemo ? onOpenDemo('Contact Page Hero') : null}
            className={`${styles.actionBtn} ${styles.btnDemo}`}
            title="Register for a 2-Hour Practical Lab Demo"
          >
            <Calendar size={18} className={styles.btnIcon} />
            <div className={styles.btnTextGroup}>
              <span className={styles.btnLabel}>Book a Free Demo</span>
              <span className={styles.btnSub}>2-Hour Lab Session</span>
            </div>
          </button>
        </div>

        {/* Trust Chips Footer */}
        <div className={styles.trustStrip}>
          <div className={styles.trustItem}>
            <Star size={15} className={styles.starIcon} />
            <span><strong>4.9 / 5</strong> Rating (11,200+ Alumni)</span>
          </div>
          <div className={styles.trustDot}>•</div>
          <div className={styles.trustItem}>
            <MapPin size={15} className={styles.mapIcon} />
            <span>Baner, Pune Cisco Lab Center</span>
          </div>
          <div className={styles.trustDot}>•</div>
          <div className={styles.trustItem}>
            <ShieldCheck size={15} className={styles.shieldIcon} />
            <span>100% Free Counseling • Zero Spam</span>
          </div>
        </div>

      </div>
    </header>
  );
}
