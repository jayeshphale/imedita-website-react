import React from 'react';
import { PhoneCall, MessageCircle, Calendar, ChevronRight, Star, MapPin, ShieldCheck, Sparkles } from 'lucide-react';
import styles from './ContactHero.module.css';

export function ContactHero({ onOpenDemo }) {
  const handleScrollToForm = (e) => {
    e.preventDefault();
    const el = document.getElementById('contact-form-section');
    if (el) {
      if (window.__lenis) {
        window.__lenis.scrollTo(el, { offset: -60 });
      } else {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className={styles.heroSection} aria-label="Contact Header">
      {/* Ambient background glows matching WhyChooseUs */}
      <div className={styles.ambientGlow} aria-hidden="true" />
      <div className={styles.gridOverlay} aria-hidden="true" />

      <div className={styles.container}>
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumbs" className={styles.breadcrumb}>
          <a href="/" className={styles.crumbLink}>Home</a>
          <ChevronRight size={13} className={styles.crumbSep} />
          <span className={styles.crumbActive}>Contact Us</span>
        </nav>

        {/* Eyebrow Badge */}
        <div className={styles.eyebrowBadge}>
          <span className={styles.pulseDot} />
          <span>Direct Admissions Desk • Active Mon–Sat (10 AM – 7 PM IST)</span>
        </div>

        {/* Main Headline */}
        <h1 className={styles.headline}>
          Let's Start Your <span className={styles.gradientAccent}>Learning Journey</span>
        </h1>

        {/* Supporting Subtitle */}
        <p className={styles.subtitle}>
          Have questions about our training programs, certifications, or career opportunities? 
          Our team is here to help you take the next step.
        </p>

        {/* Three Quick Contact Actions */}
        <div className={styles.actionButtonsRow}>
          {/* Action 1: Talk to Our Team */}
          <a 
            href="tel:+918750004411" 
            className={`${styles.actionBtn} ${styles.btnCall}`}
            title="Call Admissions Hotline"
          >
            <div className={styles.btnIconBox}>
              <PhoneCall size={16} />
            </div>
            <div className={styles.btnTextCol}>
              <span className={styles.btnTitle}>Talk to Our Team</span>
              <span className={styles.btnSub}>+91 8750004411</span>
            </div>
          </a>

          {/* Action 2: WhatsApp Us */}
          <a 
            href="https://wa.me/918750004411?text=Hi%20I-Medita%20Team%2C%20I%20have%20an%20inquiry%20regarding%20training%20programs." 
            target="_blank" 
            rel="noopener noreferrer"
            className={`${styles.actionBtn} ${styles.btnWhatsApp}`}
            title="Chat directly on WhatsApp"
          >
            <div className={`${styles.btnIconBox} ${styles.iconWhatsApp}`}>
              <MessageCircle size={16} />
            </div>
            <div className={styles.btnTextCol}>
              <span className={styles.btnTitle}>WhatsApp Us</span>
              <span className={styles.btnSub}>Instant Chat Support</span>
            </div>
          </a>

          {/* Action 3: Book a Free Demo */}
          <button 
            type="button" 
            onClick={() => onOpenDemo ? onOpenDemo('Contact Hero Quick Action') : null}
            className={`${styles.actionBtn} ${styles.btnDemo}`}
            title="Book a Free 2-Hour Practical Demo"
          >
            <div className={`${styles.btnIconBox} ${styles.iconDemo}`}>
              <Calendar size={16} />
            </div>
            <div className={styles.btnTextCol}>
              <span className={styles.btnTitle}>Book a Free Demo</span>
              <span className={styles.btnSub}>100% Free • Hands-on</span>
            </div>
          </button>
        </div>

        {/* Proof Bar */}
        <div className={styles.proofBar}>
          <div className={styles.proofItem}>
            <Star size={14} className={styles.starIcon} />
            <span><strong>4.9 / 5</strong> Rating (11,200+ Alumni)</span>
          </div>
          <span className={styles.proofDot}>•</span>
          <div className={styles.proofItem}>
            <MapPin size={14} className={styles.mapIcon} />
            <span>Baner, Pune Cisco Hardware Center</span>
          </div>
          <span className={styles.proofDot}>•</span>
          <div className={styles.proofItem}>
            <ShieldCheck size={14} className={styles.shieldIcon} />
            <span>Direct Guidance from CCIE Certified Mentors</span>
          </div>
        </div>

      </div>
    </section>
  );
}
