import React from 'react';
import { PhoneCall, MessageCircle, Calendar, ChevronRight, ShieldCheck, Star, MapPin, Sparkles } from 'lucide-react';
import styles from './ContactHeader.module.css';

export function ContactHeader({ onOpenDemo }) {
  const handleScrollToConsole = (e) => {
    e.preventDefault();
    const el = document.getElementById('inquiry-console');
    if (el) {
      if (window.__lenis) {
        window.__lenis.scrollTo(el, { offset: -80 });
      } else {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className={styles.header}>
      {/* Subtle Background Glows */}
      <div className={styles.ambientTop} aria-hidden="true" />
      <div className={styles.gridPattern} aria-hidden="true" />

      <div className={styles.container}>
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumbs" className={styles.breadcrumbBar}>
          <a href="/" className={styles.crumbHome}>Home</a>
          <ChevronRight size={13} className={styles.crumbSep} />
          <span className={styles.crumbCurrent}>Contact Us</span>
        </nav>

        {/* Live Availability Status Pill */}
        <div className={styles.statusPill}>
          <span className={styles.statusDot}>
            <span className={styles.statusPing} />
            <span className={styles.statusSolid} />
          </span>
          <span className={styles.statusText}>
            Admissions Desk Active • Mon–Sat (9 AM – 8 PM IST) • Fast Response
          </span>
        </div>

        {/* Headline & Subtitle */}
        <h1 className={styles.title}>
          Let's Start Your <span className={styles.gradientWord}>Learning Journey</span>
        </h1>

        <p className={styles.subtitle}>
          Have questions about our training programs, certifications, or career opportunities? 
          Our team is here to help you take the next step.
        </p>

        {/* Modern Floating Quick Actions Bar */}
        <div className={styles.quickActionsBar}>
          {/* Quick Call */}
          <a 
            href="tel:+918750004411" 
            className={`${styles.quickPill} ${styles.pillPhone}`}
            title="Call +91 8750004411"
          >
            <PhoneCall size={15} className={styles.pillIcon} />
            <span className={styles.pillTitle}>Talk to Our Team</span>
            <span className={styles.pillSub}>+91 8750004411</span>
          </a>

          {/* Quick WhatsApp */}
          <a 
            href="https://wa.me/918750004411?text=Hi%20I-Medita%20Team%2C%20I%20have%20an%20inquiry%20regarding%20training%20programs." 
            target="_blank" 
            rel="noopener noreferrer"
            className={`${styles.quickPill} ${styles.pillWhatsApp}`}
            title="Chat on WhatsApp"
          >
            <MessageCircle size={15} className={styles.pillIcon} />
            <span className={styles.pillTitle}>WhatsApp Us</span>
            <span className={styles.pillBadge}>Instant Chat</span>
          </a>

          {/* Quick Demo */}
          <button 
            type="button" 
            onClick={() => onOpenDemo ? onOpenDemo('Contact Header Quick Action') : null}
            className={`${styles.quickPill} ${styles.pillDemo}`}
            title="Book a Free 2-Hour Practical Demo"
          >
            <Calendar size={15} className={styles.pillIcon} />
            <span className={styles.pillTitle}>Book a Free Demo</span>
            <span className={styles.pillTag}>100% Free</span>
          </button>
        </div>

        {/* Micro-Trust Highlights */}
        <div className={styles.trustBadgesRow}>
          <div className={styles.trustBadge}>
            <Star size={14} className={styles.starIcon} />
            <span><strong>4.9 / 5</strong> (11,200+ Reviews)</span>
          </div>
          <span className={styles.trustDivider}>•</span>
          <div className={styles.trustBadge}>
            <MapPin size={14} className={styles.mapIcon} />
            <span>Baner, Pune Cisco Hardware Center</span>
          </div>
          <span className={styles.trustDivider}>•</span>
          <div className={styles.trustBadge}>
            <ShieldCheck size={14} className={styles.shieldIcon} />
            <span>Direct Guidance from CCIE Certified Mentors</span>
          </div>
        </div>

      </div>
    </header>
  );
}
