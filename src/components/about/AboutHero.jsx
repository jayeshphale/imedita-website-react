import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  Users, 
  ChevronRight, 
  Home, 
  Award, 
  Server, 
  CheckCircle2 
} from 'lucide-react';
import styles from './AboutHero.module.css';

export function AboutHero({ onOpenDemo }) {
  const handleScrollToTrainers = (e) => {
    e.preventDefault();
    const elem = document.getElementById('expert-trainers');
    if (elem) {
      if (window.__lenis) {
        window.__lenis.scrollTo(elem, { offset: -70 });
      } else {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className={styles.heroSection} aria-label="About I-Medita Hero">
      {/* Background Atmosphere: Tech Glow & Subtle Grid */}
      <div className={styles.auroraGlow} aria-hidden="true" />
      <div className={styles.subtleGrid} aria-hidden="true" />
      
      {/* Ambient Tech Floating Glow Orbs */}
      <div className={styles.glowOrbLeft} aria-hidden="true" />
      <div className={styles.glowOrbRight} aria-hidden="true" />

      <div className={styles.container}>
        {/* Breadcrumb Navigation */}
        <nav className={styles.breadcrumbNav} aria-label="Breadcrumb">
          <ol className={styles.breadcrumbList}>
            <li className={styles.breadcrumbItem}>
              <Link to="/" className={styles.breadcrumbLink} title="Home">
                <Home size={13} className={styles.homeIcon} />
                <span>Home</span>
              </Link>
            </li>
            <li className={styles.breadcrumbItem}>
              <ChevronRight size={13} className={styles.breadcrumbChevron} aria-hidden="true" />
              <span className={styles.breadcrumbCurrent} aria-current="page">
                About Us
              </span>
            </li>
          </ol>
        </nav>

        {/* Two-Column Grid */}
        <div className={styles.heroGrid}>
          
          {/* LEFT COLUMN: Narrative & Call to Actions */}
          <div className={styles.leftCol}>
            
            {/* Small Eyebrow Label */}
            <div className={styles.eyebrowBadge}>
              <span className={styles.badgePulseDot} aria-hidden="true" />
              <Sparkles size={13} className={styles.badgeIcon} />
              <span className={styles.badgeText}>ABOUT I-MEDITA</span>
            </div>

            {/* Main Headline */}
            <h1 className={styles.mainHeadline}>
              Empowering Professionals.{' '}
              <span className={styles.gradientAccent}>Building Tomorrow's Technology Leaders.</span>
            </h1>

            {/* Supporting Description */}
            <p className={styles.description}>
              At I-Medita, we bridge the gap between learning and real-world expertise through 
              industry-focused training, expert mentorship, and hands-on technology education.
            </p>

            {/* CTA Buttons */}
            <div className={styles.actionGroup}>
              <Link 
                to="/courses/ccna-training" 
                className={styles.primaryCta}
                title="Explore our Cisco and Cyber Security training programs"
              >
                <span>Explore Our Training Programs</span>
                <ArrowRight size={16} className={styles.btnArrow} />
              </Link>

              <a 
                href="#expert-trainers" 
                onClick={handleScrollToTrainers}
                className={styles.secondaryCta}
                title="Meet our CCIE certified trainers and architects"
              >
                <Users size={16} />
                <span>Meet Our Experts</span>
              </a>
            </div>

            {/* Trust Highlights */}
            <div className={styles.trustRow}>
              <div className={styles.trustItem}>
                <CheckCircle2 size={15} className={styles.trustIcon} />
                <span>Cisco Certified Faculty</span>
              </div>
              <div className={styles.trustDivider}>•</div>
              <div className={styles.trustItem}>
                <CheckCircle2 size={15} className={styles.trustIcon} />
                <span>24/7 Physical Lab Access</span>
              </div>
              <div className={styles.trustDivider}>•</div>
              <div className={styles.trustItem}>
                <CheckCircle2 size={15} className={styles.trustIcon} />
                <span>100% Placement Support</span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Visual Showcase with Floating Trust Badges */}
          <div className={styles.rightCol}>
            <div className={styles.mediaContainer}>
              
              {/* Main Classroom Photography */}
              <div className={styles.imageWrapper}>
                <img 
                  src="https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/06/10071301/imedita_72.jpg" 
                  alt="I-Medita interactive Cisco datacenter lab and classroom in Pune" 
                  className={styles.mainImage}
                  loading="eager"
                  fetchPriority="high"
                />
                <div className={styles.imageOverlay} />
              </div>

              {/* Floating Badge 1: Top Right */}
              <div className={styles.floatingCardTop}>
                <div className={styles.floatIconBox}>
                  <Award size={18} />
                </div>
                <div className={styles.floatText}>
                  <span className={styles.floatTitle}>10+ Years</span>
                  <span className={styles.floatSub}>Training Excellence</span>
                </div>
              </div>

              {/* Floating Badge 2: Bottom Left */}
              <div className={styles.floatingCardBottom}>
                <div className={styles.floatIconBoxCyan}>
                  <Server size={18} />
                </div>
                <div className={styles.floatText}>
                  <div className={styles.floatStatusRow}>
                    <span className={styles.liveDot} />
                    <span className={styles.floatTitle}>Physical Lab Racks</span>
                  </div>
                  <span className={styles.floatSub}>Nexus 9K &amp; Palo Alto</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
