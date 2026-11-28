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
  Cpu,
  Shield,
  Activity,
  Layers,
  Info
} from 'lucide-react';
import styles from './AboutHero.module.css';

/**
 * Creative & Interactive About Hero
 * Features:
 * - Professional floating tech orbs & network radar pulses
 * - Interactive Equipment Hotspots on the live hardware photo
 * - Two-column narrative with gradient headline and live trust badges
 */
export function AboutHero({ onOpenDemo }) {
  const [activeHotspot, setActiveHotspot] = useState(null);

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

  const hotspots = [
    {
      id: 'rack',
      top: '28%',
      left: '68%',
      label: 'Cisco Nexus 9000 & Catalyst Racks',
      description: 'Physical multi-vendor hardware racks with 100G spine-leaf architecture. 0% simulators.',
      icon: Server,
      color: 'blue'
    },
    {
      id: 'classroom',
      top: '58%',
      left: '22%',
      label: 'Interactive Smart Mentorship',
      description: 'Dual-screen live network topologies with real-time packet tracing and CCIE guidance.',
      icon: Cpu,
      color: 'sky'
    },
    {
      id: 'security',
      top: '72%',
      left: '75%',
      label: 'Multi-Vendor Next-Gen Firewalls',
      description: 'Palo Alto PA-3200, Fortinet & Checkpoint live appliances in high availability pairs.',
      icon: Shield,
      color: 'emerald'
    }
  ];

  return (
    <section className={styles.heroSection} aria-label="About I-Medita Hero">
      {/* Background Atmosphere: Tech Glow & Subtle Grid */}
      <div className={styles.auroraGlow} aria-hidden="true" />
      <div className={styles.subtleGrid} aria-hidden="true" />
      
      {/* Professional Ambient Tech Atmosphere & Floating Orbs */}
      <div className={styles.techAtmosphere} aria-hidden="true">
        <div className={`${styles.glowOrb} ${styles.glowOrb1}`} />
        <div className={`${styles.glowOrb} ${styles.glowOrb2}`} />

        {/* Concentric Network Radar Pulse Rings */}
        <div className={`${styles.radarPulse} ${styles.radarLeft}`}>
          <span className={styles.pulseRing} />
          <span className={styles.pulseRing} />
        </div>
        <div className={`${styles.radarPulse} ${styles.radarRight}`}>
          <span className={styles.pulseRing} />
          <span className={styles.pulseRing} />
        </div>

        {/* Floating Frosted Tech Glass Nodes */}
        <div className={`${styles.techOrb} ${styles.techOrb1}`}>
          <span className={styles.nodeCore} />
        </div>
        <div className={`${styles.techOrb} ${styles.techOrb2}`}>
          <span className={styles.nodeCore} />
        </div>
        <div className={`${styles.techOrb} ${styles.techOrb3}`}>
          <span className={styles.nodeCore} />
        </div>

        {/* Rising Micro Data Packets */}
        <span className={`${styles.dataPacket} ${styles.packet1}`} />
        <span className={`${styles.dataPacket} ${styles.packet2}`} />
        <span className={`${styles.dataPacket} ${styles.packet3}`} />
        <span className={`${styles.dataPacket} ${styles.packet4}`} />
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
          
          {/* LEFT COLUMN: Narrative & Call to Actions */}
          <div className={styles.leftCol}>
            
            {/* Small Eyebrow Label with Live Pulse */}
            <div className={styles.eyebrowBadge}>
              <span className={styles.badgePulseDot} aria-hidden="true" />
              <Sparkles size={13} className={styles.badgeIcon} />
              <span className={styles.badgeText}>ABOUT I-MEDITA • EST. 2014</span>
            </div>

            {/* Main Headline */}
            <h1 className={styles.mainHeadline}>
              Empowering Professionals.{' '}
              <span className={styles.gradientAccent}>Building Tomorrow's Technology Leaders.</span>
            </h1>

            {/* Supporting Description */}
            <p className={styles.description}>
              At I-Medita, we bridge the gap between classroom theory and real-world enterprise infrastructure. 
              Equipped with Maharashtra's largest physical Cisco lab, we deliver hands-on mentorship from certified CCIE architects.
            </p>

            {/* CTA Buttons */}
            <div className={styles.actionGroup}>
              <Link 
                to="/courses/ccna-training" 
                className={styles.primaryCta}
                title="Explore our Cisco and Cyber Security training programs"
              >
                <span>Explore Training Programs</span>
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

            {/* Live Trust Metrics Row */}
            <div className={styles.trustRow}>
              <div className={styles.trustItem}>
                <CheckCircle2 size={15} className={styles.trustIcon} />
                <span>Dual &amp; Triple CCIE Faculty</span>
              </div>
              <div className={styles.trustDivider}>•</div>
              <div className={styles.trustItem}>
                <CheckCircle2 size={15} className={styles.trustIcon} />
                <span>24/7 Physical Lab Pods</span>
              </div>
              <div className={styles.trustDivider}>•</div>
              <div className={styles.trustItem}>
                <CheckCircle2 size={15} className={styles.trustIcon} />
                <span>100% Placement Support</span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Creative Interactive Hardware & Lab Showcase */}
          <div className={styles.rightCol}>
            <div className={styles.mediaContainer}>
              
              {/* Live Status Header Strip */}
              <div className={styles.labLiveHeader}>
                <div className={styles.liveIndicator}>
                  <span className={styles.liveDotPulse} />
                  <span className={styles.liveText}>MAHARASHTRA'S #1 PHYSICAL CISCO LAB</span>
                </div>
                <div className={styles.interactiveHint}>
                  <Info size={12} />
                  <span>Hover hotspots to inspect equipment</span>
                </div>
              </div>

              {/* Main Classroom Photography with Interactive Hotspots */}
              <div className={styles.imageWrapper}>
                <img 
                  src="https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/06/10071301/imedita_72.jpg" 
                  alt="I-Medita interactive Cisco datacenter lab and classroom in Pune" 
                  className={styles.mainImage}
                  loading="eager"
                  fetchPriority="high"
                />
                <div className={styles.imageOverlay} />

                {/* Hotspot Pins */}
                {hotspots.map((hs) => {
                  const isActive = activeHotspot === hs.id;
                  const Icon = hs.icon;

                  return (
                    <div 
                      key={hs.id} 
                      className={`${styles.hotspotPinWrapper} ${isActive ? styles.hotspotActive : ''}`}
                      style={{ top: hs.top, left: hs.left }}
                      onMouseEnter={() => setActiveHotspot(hs.id)}
                      onMouseLeave={() => setActiveHotspot(null)}
                      onClick={() => setActiveHotspot(isActive ? null : hs.id)}
                      role="button"
                      tabIndex={0}
                      aria-label={hs.label}
                    >
                      <button type="button" className={styles.hotspotPin}>
                        <span className={styles.hotspotPulseRing} />
                        <Icon size={12} className={styles.hotspotPinIcon} />
                      </button>

                      {/* Tooltip Card */}
                      <div className={styles.hotspotTooltip}>
                        <div className={styles.tooltipHeader}>
                          <span className={styles.tooltipCategory}>Live Hardware Spec</span>
                          <span className={styles.tooltipLiveDot} />
                        </div>
                        <h4 className={styles.tooltipTitle}>{hs.label}</h4>
                        <p className={styles.tooltipDesc}>{hs.description}</p>
                      </div>
                    </div>
                  );
                })}
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
                  <Activity size={18} />
                </div>
                <div className={styles.floatText}>
                  <div className={styles.floatStatusRow}>
                    <span className={styles.liveDot} />
                    <span className={styles.floatTitle}>10,000+ Alumni</span>
                  </div>
                  <span className={styles.floatSub}>Placed at Cisco, Orange &amp; TCS</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default AboutHero;
