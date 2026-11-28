import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  Users, 
  ChevronRight, 
  Home, 
  Award, 
  Server, 
  CheckCircle2,
  Compass,
  Play,
  Layers,
  Terminal,
  Activity,
  ShieldCheck
} from 'lucide-react';
import styles from './AboutHero.module.css';

/**
 * Creative Cinematic Story Hero
 * Sets up the "Interactive Story & Visual Lab Tour" experience.
 */
export function AboutHero({ onOpenDemo }) {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      if (window.__lenis) {
        window.__lenis.scrollTo(el, { offset: -70 });
      } else {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className={styles.heroSection} aria-label="About I-Medita Story Hero">
      {/* Background Atmosphere: Tech Glow & Subtle Grid */}
      <div className={styles.auroraGlow} aria-hidden="true" />
      <div className={styles.subtleGrid} aria-hidden="true" />
      
      {/* Ambient Floating Orbs & Radar Pulses */}
      <div className={styles.techAtmosphere} aria-hidden="true">
        <div className={`${styles.glowOrb} ${styles.glowOrb1}`} />
        <div className={`${styles.glowOrb} ${styles.glowOrb2}`} />

        <div className={`${styles.radarPulse} ${styles.radarLeft}`}>
          <span className={styles.pulseRing} />
          <span className={styles.pulseRing} />
        </div>
        <div className={`${styles.radarPulse} ${styles.radarRight}`}>
          <span className={styles.pulseRing} />
          <span className={styles.pulseRing} />
        </div>

        <div className={`${styles.techOrb} ${styles.techOrb1}`}>
          <span className={styles.nodeCore} />
        </div>
        <div className={`${styles.techOrb} ${styles.techOrb2}`}>
          <span className={styles.nodeCore} />
        </div>

        <span className={`${styles.dataPacket} ${styles.packet1}`} />
        <span className={`${styles.dataPacket} ${styles.packet2}`} />
      </div>

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
          
          {/* LEFT COLUMN: Narrative & Interactive Journey CTAs */}
          <div className={styles.leftCol}>
            
            {/* Small Eyebrow Label with Pulsing Dot */}
            <div className={styles.eyebrowBadge}>
              <span className={styles.badgePulseDot} aria-hidden="true" />
              <Sparkles size={13} className={styles.badgeIcon} />
              <span className={styles.badgeText}>THE I-MEDITA STORY • SINCE 2014</span>
            </div>

            {/* Main Cinematic Headline */}
            <h1 className={styles.mainHeadline}>
              Where Theory Ends and{' '}
              <span className={styles.gradientAccent}>Real Hardware Begins.</span>
            </h1>

            {/* Supporting Description */}
            <p className={styles.description}>
              From a single physical rack in Pune to Maharashtra's largest enterprise multi-vendor datacenter lab. 
              We bridge the gap between classroom slides and production network topologies with elite CCIE certified architects.
            </p>

            {/* Tour & Journey Quick Actions */}
            <div className={styles.actionGroup}>
              <button 
                type="button"
                onClick={() => scrollToSection('virtual-lab-tour')}
                className={styles.tourBtn}
                title="Explore our physical Cisco hardware racks in the interactive lab tour"
              >
                <Server size={17} />
                <span>Virtual Lab Tour</span>
                <ArrowRight size={15} className={styles.btnArrow} />
              </button>

              <button 
                type="button"
                onClick={() => scrollToSection('our-story-journey')}
                className={styles.storyBtn}
                title="Read our 10-year journey from genesis to scale"
              >
                <Compass size={17} />
                <span>10-Year Journey</span>
              </button>

              <button 
                type="button"
                onClick={() => onOpenDemo && onOpenDemo('About Us Hero')}
                className={styles.demoBtn}
                title="Book a free live classroom or online demo session"
              >
                <Play size={14} className={styles.playIcon} />
                <span>Book Free Demo</span>
              </button>
            </div>

            {/* Trust Highlights */}
            <div className={styles.trustRow}>
              <div className={styles.trustItem}>
                <CheckCircle2 size={15} className={styles.trustIcon} />
                <span>Maharashtra's #1 Cisco Lab</span>
              </div>
              <div className={styles.trustDivider}>•</div>
              <div className={styles.trustItem}>
                <CheckCircle2 size={15} className={styles.trustIcon} />
                <span>Dual &amp; Triple CCIE Faculty</span>
              </div>
              <div className={styles.trustDivider}>•</div>
              <div className={styles.trustItem}>
                <CheckCircle2 size={15} className={styles.trustIcon} />
                <span>10,000+ Global Alumni</span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Interactive Terminal & Datacenter Rack Window */}
          <div className={styles.rightCol}>
            <div className={styles.terminalContainer}>
              
              {/* Terminal Header Bar */}
              <div className={styles.terminalHeader}>
                <div className={styles.trafficLights}>
                  <span className={`${styles.trafficDot} ${styles.dotRed}`} />
                  <span className={`${styles.trafficDot} ${styles.dotYellow}`} />
                  <span className={`${styles.trafficDot} ${styles.dotGreen}`} />
                </div>
                <div className={styles.terminalTitle}>
                  <Terminal size={12} />
                  <span>cisco-nexus-9000-dc1.imedita.local (Live Hardware)</span>
                </div>
                <div className={styles.liveStatusBadge}>
                  <span className={styles.liveGreenDot} />
                  <span>ONLINE 24/7</span>
                </div>
              </div>

              {/* Terminal Screen / Photography Split */}
              <div className={styles.terminalBody}>
                <div className={styles.photoViewport}>
                  <img 
                    src="https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/06/10071301/imedita_72.jpg" 
                    alt="I-Medita Cisco Datacenter Lab in Baner, Pune" 
                    className={styles.viewportImg}
                    loading="eager"
                  />
                  <div className={styles.viewportGradient} />

                  {/* Terminal CLI Snippet Overlay */}
                  <div className={styles.cliOverlayBox}>
                    <div className={styles.cliLine}>
                      <span className={styles.cliPrompt}>Switch#</span> show running-config interface Ethernet1/1
                    </div>
                    <div className={styles.cliOutput}>
                      description == CORE 100G SPINE TO LEAF ==<br />
                      switchport mode trunk; vrf member ENTERPRISE_PROD
                    </div>
                  </div>

                  {/* Floating Metric 1 */}
                  <div className={styles.floatPillTop}>
                    <Award size={15} className={styles.pillIcon} />
                    <span>10+ Years Dedicated Training</span>
                  </div>

                  {/* Floating Metric 2 */}
                  <div className={styles.floatPillBottom}>
                    <Activity size={15} className={styles.pillIconGreen} />
                    <span>0% Simulators • 100% Real Hardware</span>
                  </div>
                </div>
              </div>

              {/* Terminal Footer Navigation Callout */}
              <div className={styles.terminalFooter}>
                <div className={styles.footerNote}>
                  <ShieldCheck size={14} className={styles.shieldIcon} />
                  <span>3rd Floor, Aditi Samruddhi Building, Baner Road, Pune</span>
                </div>
                <button 
                  type="button" 
                  onClick={() => scrollToSection('virtual-lab-tour')}
                  className={styles.inspectRackLink}
                >
                  <span>Inspect Hardware Pods</span>
                  <ArrowRight size={12} />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default AboutHero;
