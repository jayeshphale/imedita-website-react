import React, { useState, useEffect, useRef } from 'react';
import { 
  Server, 
  ShieldCheck, 
  Award, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  ExternalLink,
  Cpu
} from 'lucide-react';
import styles from './HeroSection.module.css';

import instructorImg from '../../assets/instructors.png';
import careerRoadmapImg from '../../assets/career-roadmap.png';
import serverEngineerImg from '../../assets/server-datacenter-engineer.png';
import certifiedBadgeImg from '../../assets/certified-badge.png';

/* --------------------------------------------------------------------------
   SLIDES DATA SPECIFICATION (With Real Human Mentors & Hardware Showcase)
-------------------------------------------------------------------------- */
const SLIDES = [
  {
    id: 0,
    eyebrow: "PUNE DATACENTER RACK PODS // CCIE LABS",
    eyebrowIcon: Cpu,
    headingPrefix: "Architect Your Future with",
    headingHighlight: "Triple CCIE Mentors",
    headingSuffix: "& Cisco Infrastructure.",
    subtext: "Train on real enterprise Cisco Catalyst 9300s, Nexus switches, and live SD-WAN controllers. Direct classroom and online mentorship with 24/7 datacenter lab rack access.",
    primaryCta: "Explore CCIE Labs",
    secondaryCta: "View Lab Topologies",
    courseFocus: "Cisco CCIE Enterprise Infrastructure",
    liveTag: "● LIVE DATACENTER RACKS - PUNE CAMPUS",
    telemetry: "LATENCY: 1.2ms // 10G FIBER",
    metaTitle: "Cisco Physical Datacenter Lab Pods",
    metaSub: "Real Hardware Rack Practice // Zero Emulators",
    hardwarePill: "REAL 9300 & NEXUS",
    imageType: "instructors",
    badgeBottomText: "3x CCIE CERTIFIED LEAD FACULTY",
    badgeBottomIcon: Award
  },
  {
    id: 1,
    eyebrow: "MULTI-VENDOR CYBER DEFENSE // NGFW MASTERY",
    eyebrowIcon: ShieldCheck,
    headingPrefix: "Master Real-World",
    headingHighlight: "Next-Gen Firewalls",
    headingSuffix: "& Cyber Security Defense.",
    subtext: "Deep packet inspection, SSL decryption, App-ID policy enforcement, and ClusterXL HA. Gain hands-on engineering mastery across Palo Alto PA-400, Check Point Quantum, and Fortinet physical appliances.",
    primaryCta: "Explore Firewall Track",
    secondaryCta: "Download Exam Blueprints",
    courseFocus: "Multi Vendor Firewall Training",
    liveTag: "● 100% HANDS-ON ON PHYSICAL APPLIANCES",
    telemetry: "THREAT MITIGATION: ACTIVE",
    metaTitle: "Multi-Platform Threat Simulation",
    metaSub: "Palo Alto + Check Point + Fortinet + ASA",
    hardwarePill: "PHYSICAL NGFW PODS",
    imageType: "hardware",
    badgeBottomText: "PA-440 + QUANTUM + FORTIGATE",
    badgeBottomIcon: Server
  },
  {
    id: 2,
    eyebrow: "100% PLACEMENT RECORD // WRITTEN GUARANTEE",
    eyebrowIcon: Award,
    headingPrefix: "Launch Your Career with",
    headingHighlight: "100% Job Guarantee",
    headingSuffix: "for Network Engineers.",
    subtext: "From network engineering fundamentals to multi-vendor routing, next-gen firewalls, and cloud connectivity. Backed by written job agreements and direct recruitment drives with 350+ Fortune 500 alliances.",
    primaryCta: "Enroll in Job Track",
    secondaryCta: "View Placement Records",
    courseFocus: "Multi-Track Job Guaranteed Training for Network Engineers",
    liveTag: "● 100% WRITTEN JOB GUARANTEE",
    telemetry: "PLACED: 12,000+ ALUMNI",
    metaTitle: "Enterprise Placement Ecosystem",
    metaSub: "Direct Corporate Drives // Avg CTC ₹4.5L - ₹18L",
    hardwarePill: "350+ HIRING PARTNERS",
    imageType: "roadmap",
    badgeBottomText: "AVG CTC: ₹4.5L - ₹18L PA",
    badgeBottomIcon: Award
  }
];

export function HeroSection({ onOpenDemo }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  // Auto-advance slides every 6.5 seconds when not hovered
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  const slide = SLIDES[currentSlide];

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  return (
    <section 
      className={styles.heroRoot} 
      id="hero"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Elite CCIE Mentors & Engineering Command Center Hero"
    >
      {/* Full-Bleed Technical Blueprint Grid Mesh */}
      <div className={styles.heroGridOverlay} aria-hidden="true" />

      <div className={styles.heroContainer}>
        
        {/* Main 2-Column Hero Grid */}
        <div className={styles.heroGrid}>
          
          {/* Left Column: Command Center Dossier with Slide Transition Animation */}
          <div className={styles.leftCol}>
            <div key={slide.id} className={styles.activeSlide}>
              
              {/* Glowing Eyebrow Capsule */}
              <div className={styles.eyebrowBadge}>
                <slide.eyebrowIcon size={14} />
                <span>{slide.eyebrow}</span>
              </div>

              {/* High-Contrast Pure White H1 Heading */}
              <h1 className={styles.heroHeading}>
                {slide.headingPrefix}{' '}
                <span className={styles.gradientText}>{slide.headingHighlight}</span>{' '}
                {slide.headingSuffix}
              </h1>

              {/* Technical Subtext */}
              <p className={styles.heroSubtext}>
                {slide.subtext}
              </p>
            </div>

            {/* High-Conversion CTAs */}
            <div className={styles.ctaRow}>
              <button 
                type="button"
                className={`${styles.primaryCta} ${styles.primaryBtn}`}
                onClick={() => onOpenDemo?.(slide.courseFocus)}
              >
                <span>{slide.primaryCta}</span>
                <ArrowRight size={16} />
              </button>

              <a 
                href="#courses" 
                className={`${styles.secondaryCta} ${styles.secondaryBtn}`}
              >
                <span>{slide.secondaryCta}</span>
                <ExternalLink size={15} />
              </a>
            </div>

            {/* Slider Navigation & Active Progress Pill Bar */}
            <div className={styles.controlsRow}>
              <div className={styles.navArrows}>
                <button 
                  type="button" 
                  onClick={handlePrev} 
                  className={styles.arrowBtn}
                  aria-label="Previous Slide"
                >
                  <ChevronLeft size={18} />
                </button>
                <button 
                  type="button" 
                  onClick={handleNext} 
                  className={styles.arrowBtn}
                  aria-label="Next Slide"
                >
                  <ChevronRight size={18} />
                </button>
              </div>

              <div className={styles.progressPillBar}>
                {SLIDES.map((s, idx) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setCurrentSlide(idx)}
                    className={`${styles.progressDot} ${
                      currentSlide === idx ? styles.progressDotActive : styles.progressDotInactive
                    }`}
                    aria-label={`Jump to Slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Glassmorphic Real Mentor / Hardware Showcase Card */}
          <div className={styles.rightCol}>
            <div key={slide.id} className={`${styles.sliderCard} ${styles.cardFrame} ${styles.activeSlide}`}>
              
              {/* Header Status Strip */}
              <div className={styles.cardHeader}>
                <div className={styles.liveTag}>
                  <span className={`${styles.statusDot} ${styles.pulseDot} ${styles.pulsingDot} ${styles.liveDot}`} />
                  <span>{slide.liveTag}</span>
                </div>
                <span className={styles.telemetryText}>{slide.telemetry}</span>
              </div>

              {/* Visual Stage with Glowing Radial Aura and Orbit Rings */}
              <div className={styles.visualStage}>
                
                {/* Concentric Cybernetic Orbit Rings */}
                <div className={`${styles.orbitRing} ${styles.orbitRingInner}`} aria-hidden="true" />
                <div className={`${styles.orbitRing} ${styles.orbitRingOuter}`} aria-hidden="true" />

                {/* Top Floating Glass Badge */}
                <div className={styles.floatingBadgeTop}>
                  <span className={styles.liveDot} />
                  <span>{slide.liveTag}</span>
                </div>

                {/* Real Image Render by Slide Type */}
                {slide.imageType === 'instructors' && (
                  <>
                    <img 
                      src={instructorImg} 
                      alt="I-MEDITA Certified & World Class Cisco Instructors" 
                      className={styles.instructorImg}
                      loading="eager"
                    />
                    <img 
                      src={certifiedBadgeImg} 
                      alt="100% Certified Badge" 
                      className={styles.certifiedBadgeOverlay}
                    />
                  </>
                )}

                {slide.imageType === 'hardware' && (
                  <img 
                    src={serverEngineerImg} 
                    alt="Network Engineer configuring Cisco server rack" 
                    className={styles.hardwareImg}
                    loading="lazy"
                  />
                )}

                {slide.imageType === 'roadmap' && (
                  <img 
                    src={careerRoadmapImg} 
                    alt="100% Job Guaranteed Career Roadmap" 
                    className={styles.roadmapImg}
                    loading="lazy"
                  />
                )}

                {/* Bottom Floating Glass Badge */}
                <div className={styles.floatingBadgeBottom}>
                  <slide.badgeBottomIcon size={14} />
                  <span>{slide.badgeBottomText}</span>
                </div>

              </div>

              {/* Card Meta Footer */}
              <div className={styles.cardMeta}>
                <div className={styles.metaSpecs}>
                  <h4 className={styles.metaTitle}>{slide.metaTitle}</h4>
                  <p className={styles.metaSub}>{slide.metaSub}</p>
                </div>
                <span className={styles.hardwarePill}>
                  {slide.hardwarePill}
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Horizontal Proof Counter Strip */}
        <div className={styles.proofCounterBar}>
          <div className={styles.proofItem}>
            <span className={styles.proofNumber}>12,000+</span>
            <span className={styles.proofLabel}>Engineers Trained Globally</span>
          </div>

          <div className={styles.proofItem}>
            <span className={styles.proofNumber}>350+</span>
            <span className={styles.proofLabel}>Active Hiring Partners</span>
          </div>

          <div className={styles.proofItem}>
            <span className={styles.proofNumber}>3x CCIE</span>
            <span className={styles.proofLabel}>Certified Lead Mentors</span>
          </div>

          <div className={styles.proofItem}>
            <span className={styles.proofNumber}>24/7</span>
            <span className={styles.proofLabel}>Physical Lab Rack Availability</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export { HeroSection as HeroSlider };
export default HeroSection;
