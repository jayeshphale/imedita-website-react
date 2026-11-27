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
  ChevronRight,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Zap
} from 'lucide-react';
import instructorImg from '../../assets/instructors.webp';
import certifiedBadgeImg from '../../assets/certified-badge.webp';
import styles from './ContactModernHero.module.css';

export function ContactModernHero({ onOpenDemo }) {
  return (
    <section className={styles.heroSection} aria-labelledby="contact-hero-heading">
      {/* Subtle Light Vector Atmosphere */}
      <div className={styles.ambientGlow} aria-hidden="true" />
      <div className={styles.gridPattern} aria-hidden="true" />

      <div className={styles.container}>
        
        {/* Breadcrumb Navigation */}
        <nav className={styles.breadcrumbNav} aria-label="Breadcrumb">
          <Link to="/" className={styles.breadcrumbLink}>Home</Link>
          <ChevronRight size={13} className={styles.breadcrumbChevron} />
          <span className={styles.breadcrumbCurrent}>Contact Us</span>
        </nav>

        {/* 2-Column Creative Grid */}
        <div className={styles.heroGrid}>
          
          {/* ============================================================
              LEFT: HEADLINE, NARRATIVE & 3 QUICK ACTIONS
              ============================================================ */}
          <div className={styles.leftCol}>
            
            {/* Live Status Eyebrow Badge */}
            <div className={styles.eyebrowBadge}>
              <span className={styles.pulseDot} />
              <span className={styles.eyebrowText}>Admissions Open • Fast Response &lt; 15 Mins</span>
            </div>

            {/* Main Headline */}
            <h1 id="contact-hero-heading" className={styles.headline}>
              Let's Start Your <br className={styles.desktopBr} />
              <span className={styles.gradientAccent}>Learning Journey</span>
            </h1>

            {/* Subtitle */}
            <p className={styles.subheadline}>
              Have questions about training programs, international certifications, or weekend batches? 
              Connect directly with our senior CCIE mentors at our Baner, Pune center or schedule a free live interactive consultation online.
            </p>

            {/* 3 Quick Action CTAs */}
            <div className={styles.actionGroup}>
              <a 
                href="tel:+918750004411" 
                className={styles.phoneActionBtn}
                title="Call our admissions desk directly"
              >
                <div className={styles.actionIconBox}>
                  <PhoneCall size={18} />
                </div>
                <div className={styles.btnTextStack}>
                  <span className={styles.btnActionLabel}>Talk to Our Team</span>
                  <span className={styles.btnActionSub}>+91 8750004411</span>
                </div>
              </a>

              <a 
                href="https://wa.me/918750004411?text=Hi%20I-Medita%20Team%2C%20I%20have%20an%20inquiry%20regarding%20training%20programs." 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.whatsappActionBtn}
                title="Chat directly with our team on WhatsApp"
              >
                <div className={styles.whatsappIconBox}>
                  <MessageCircle size={18} />
                </div>
                <div className={styles.btnTextStack}>
                  <span className={styles.btnActionLabel}>WhatsApp Us</span>
                  <span className={styles.whatsappSub}>Instant Reply</span>
                </div>
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

            {/* Key Trust Checkpoints */}
            <div className={styles.trustCheckpoints}>
              <div className={styles.checkpointItem}>
                <CheckCircle2 size={16} className={styles.checkIcon} />
                <span>Free 1-on-1 Career Roadmap</span>
              </div>
              <div className={styles.checkpointItem}>
                <CheckCircle2 size={16} className={styles.checkIcon} />
                <span>Zero-Obligation Lab Trial</span>
              </div>
              <div className={styles.checkpointItem}>
                <CheckCircle2 size={16} className={styles.checkIcon} />
                <span>Direct CCIE Faculty Interaction</span>
              </div>
            </div>

          </div>

          {/* ============================================================
              RIGHT: CREATIVE & ATTRACTIVE VISUAL STAGE
              ============================================================ */}
          <div className={styles.rightCol} aria-hidden="true">
            <div className={styles.stageWrapper}>
              
              {/* Concentric Orbit Rings */}
              <div className={styles.orbitRingOuter} />
              <div className={styles.orbitRingInner} />

              {/* Glowing Ambient Radial Backdrop */}
              <div className={styles.visualBackdropGlow} />

              {/* Real Human Cutout: I-Medita Certified Instructors */}
              <div className={styles.imageContainer}>
                <img 
                  src={instructorImg} 
                  alt="I-Medita certified CCIE instructors and mentors"
                  className={styles.instructorCutout}
                  fetchPriority="high"
                  loading="eager"
                />
              </div>

              {/* Floating Badge 1: Top Right - Response Time */}
              <div className={`${styles.floatingBadge} ${styles.badgeTopRight}`}>
                <div className={styles.badgeIconBoxBlue}>
                  <Zap size={16} />
                </div>
                <div className={styles.badgeContent}>
                  <div className={styles.badgeHeaderRow}>
                    <span className={styles.badgeMiniDot} />
                    <span className={styles.badgeTag}>ACTIVE ADMISSIONS</span>
                  </div>
                  <span className={styles.badgeMainTitle}>Pune Center + Online</span>
                  <span className={styles.badgeSubTitle}>Fast Callback in &lt; 15 Mins</span>
                </div>
              </div>

              {/* Floating Badge 2: Bottom Left - Cisco Lab Proof */}
              <div className={`${styles.floatingBadge} ${styles.badgeBottomLeft}`}>
                <div className={styles.badgeIconBoxCyan}>
                  <Server size={16} />
                </div>
                <div className={styles.badgeContent}>
                  <div className={styles.badgeHeaderRow}>
                    <span className={styles.badgeTagCyan}>PHYSICAL HARDWARE</span>
                  </div>
                  <span className={styles.badgeMainTitle}>Cisco Nexus &amp; Palo Alto</span>
                  <span className={styles.badgeSubTitle}>Zero Packet Simulator Delays</span>
                </div>
              </div>

              {/* Floating Badge 3: Bottom Right - Trust & Reviews */}
              <div className={`${styles.floatingBadge} ${styles.badgeBottomRight}`}>
                <div className={styles.starsCluster}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} fill="#F59E0B" className={styles.starFill} />
                  ))}
                </div>
                <div className={styles.ratingTextRow}>
                  <span className={styles.ratingNumber}>4.9/5</span>
                  <span className={styles.ratingLabel}>(11,200+ Reviews)</span>
                </div>
                <span className={styles.ratingSub}>100% Placement Support</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
