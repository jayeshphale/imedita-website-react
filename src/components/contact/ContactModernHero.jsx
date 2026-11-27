import React from 'react';
import { Link } from 'react-router-dom';
import { 
  PhoneCall, 
  MessageCircle, 
  Calendar, 
  ArrowRight, 
  Sparkles, 
  Star, 
  Users, 
  Server, 
  Award,
  ChevronRight
} from 'lucide-react';
import styles from './ContactModernHero.module.css';

export function ContactModernHero({ onOpenDemo }) {
  return (
    <section className={styles.heroSection} aria-labelledby="contact-hero-heading">
      {/* Ambient Light Tech Glow */}
      <div className={styles.ambientGlow} aria-hidden="true" />
      <div className={styles.gridPattern} aria-hidden="true" />

      <div className={styles.container}>
        
        {/* Breadcrumb Navigation */}
        <nav className={styles.breadcrumbNav} aria-label="Breadcrumb">
          <Link to="/" className={styles.breadcrumbLink}>Home</Link>
          <ChevronRight size={13} className={styles.breadcrumbChevron} />
          <span className={styles.breadcrumbCurrent}>Contact Us</span>
        </nav>

        {/* Hero Content */}
        <div className={styles.heroContent}>
          
          {/* Eyebrow Badge */}
          <div className={styles.eyebrowBadge}>
            <Sparkles size={14} className={styles.sparkleIcon} />
            <span>Admissions &amp; Student Inquiries</span>
          </div>

          {/* Main Headline */}
          <h1 id="contact-hero-heading" className={styles.headline}>
            Let's Start Your <span className={styles.gradientAccent}>Learning Journey</span>
          </h1>

          {/* Subtitle */}
          <p className={styles.subheadline}>
            Have questions about our training programs, certifications, or career opportunities? 
            Our expert team in Baner, Pune is here to guide your next career milestone.
          </p>

          {/* 3 Quick Action CTAs */}
          <div className={styles.actionGroup}>
            <a 
              href="tel:+918750004411" 
              className={styles.primaryActionBtn}
              title="Call our Pune admissions desk directly"
            >
              <PhoneCall size={18} />
              <span>Talk to Our Team</span>
              <span className={styles.actionPhoneTag}>+91 8750004411</span>
            </a>

            <a 
              href="https://wa.me/918750004411?text=Hi%20I-Medita%20Team%2C%20I%20have%20an%20inquiry%20regarding%20training%20programs." 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.whatsappActionBtn}
              title="Chat directly with our team on WhatsApp"
            >
              <MessageCircle size={18} />
              <span>WhatsApp Us</span>
            </a>

            <button 
              type="button" 
              onClick={() => onOpenDemo ? onOpenDemo('Contact Hero Quick Action') : null}
              className={styles.demoActionBtn}
              title="Book a free live classroom or online demo session"
            >
              <Calendar size={18} />
              <span>Book a Free Demo</span>
              <ArrowRight size={15} className={styles.btnArrow} />
            </button>
          </div>

          {/* Trust Metrics Pill Ribbon */}
          <div className={styles.trustRibbon}>
            <div className={styles.trustPill}>
              <div className={styles.starsCluster}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} className={styles.starFill} fill="#F59E0B" />
                ))}
              </div>
              <span className={styles.trustPillBold}>4.9/5 Rating</span>
              <span className={styles.trustPillMuted}>(11,200+ Reviews)</span>
            </div>

            <span className={styles.ribbonDivider} aria-hidden="true">•</span>

            <div className={styles.trustPill}>
              <Users size={15} className={styles.trustIcon} />
              <span className={styles.trustPillBold}>10,000+</span>
              <span className={styles.trustPillMuted}>Engineers Trained</span>
            </div>

            <span className={styles.ribbonDivider} aria-hidden="true">•</span>

            <div className={styles.trustPill}>
              <Server size={15} className={styles.trustIcon} />
              <span className={styles.trustPillBold}>Maharashtra's Largest</span>
              <span className={styles.trustPillMuted}>Physical Cisco Lab</span>
            </div>

            <span className={styles.ribbonDivider} aria-hidden="true">•</span>

            <div className={styles.trustPill}>
              <Award size={15} className={styles.trustIcon} />
              <span className={styles.trustPillBold}>100%</span>
              <span className={styles.trustPillMuted}>Placement Assistance</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
