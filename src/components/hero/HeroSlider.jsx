import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight, Award, Download, CheckCircle2, Server, Cpu } from 'lucide-react';
import instructorImg from '../../assets/instructors.png';
import careerRoadmapImg from '../../assets/career-roadmap.png';
import serverEngineerImg from '../../assets/server-datacenter-engineer.png';
import examTeamImg from '../../assets/exam-vouchers-team.png';
import certifiedBadgeImg from '../../assets/certified-badge.png';

const SLIDES_DATA = [
  {
    id: 0,
    badge: {
      text: 'UPGRADE YOUR SKILLS',
      variant: 'light'
    },
    headline: (
      <>
        GET TRAINED BY <br className="hero-br-desktop" />
        <span className="hero-headline-highlight">CERTIFIED &amp;</span> <br className="hero-br-desktop" />
        <span className="hero-headline-highlight">WORLD CLASS</span> <br className="hero-br-desktop" />
        INSTRUCTORS.
      </>
    ),
    subheadline: 'Learn from top industry experts with hands-on programs designed to fast-track your career.',
    primaryCta: 'Explore Our Courses',
    secondaryCta: 'Talk to an Expert',
    secondaryIcon: null,
    trustType: 'wreath',
    trustBadge: certifiedBadgeImg,
    trustVal: '100%',
    trustLbl: 'Certified',
    image: instructorImg,
    imageClass: 'hero-instructor-cutout',
    altText: 'I-MEDITA Certified & World Class Cisco Instructors',
    statusBadge: {
      tag: 'ACTIVE BATCH',
      title: 'CCNA & CCNP Live Labs',
      pill: 'LIVE INSTRUCTOR LED',
      dotColor: '#10B981'
    }
  },
  {
    id: 1,
    badge: {
      text: 'CAREER ASSURED TRAINING',
      variant: 'dark',
      icon: 'medal'
    },
    headline: (
      <>
        ENROLL IN OUR <br className="hero-br-desktop" />
        <span className="hero-headline-highlight">JOB GUARANTEED PROGRAM</span> <br className="hero-br-desktop" />
        &amp; BECOME EMPLOYABLE.
      </>
    ),
    subheadline: 'Master in-demand skills through real-time industry projects, rigorous practical lab training, and complete placement assistance.',
    primaryCta: 'Explore Courses',
    secondaryCta: 'Download Syllabus',
    secondaryIcon: 'download',
    trustType: 'checkpoints',
    trustCheckpoints: [
      '100% Placement Assistance',
      'Hands-on Lab Practice'
    ],
    image: careerRoadmapImg,
    imageClass: 'hero-roadmap-graphic',
    altText: 'I-MEDITA Job Guaranteed Career Roadmap & Training',
    statusBadge: {
      tag: 'CAREER ASSURED',
      title: '100% Placement Drives',
      pill: 'TOP HIRING PARTNERS',
      dotColor: '#0066FF'
    }
  },
  {
    id: 2,
    badge: {
      text: 'ENTERPRISE IT & NETWORKING LABS',
      variant: 'light',
      icon: 'server'
    },
    headline: (
      <>
        SHAPING CAREERS, <br className="hero-br-desktop" />
        <span className="hero-headline-highlight">EMPOWERING FUTURE.</span>
      </>
    ),
    subheadline: 'Train on real enterprise server racks, Cisco routers, and modern cloud topologies with live industrial hands-on exposure.',
    primaryCta: 'Talk to Our Experts',
    secondaryCta: 'View Lab Infrastructure',
    secondaryIcon: 'cpu',
    trustType: 'checkpoints',
    trustCheckpoints: [
      'Live Dedicated Server Racks',
      '24/7 Remote Lab Access'
    ],
    imageType: 'hardware-card',
    image: serverEngineerImg,
    altText: 'Network Engineer configuring Cisco server rack',
    statusBadge: {
      tag: 'HARDWARE LAB',
      title: 'Cisco & Cloud Topology',
      pill: '100% LIVE HARDWARE',
      dotColor: '#06B6D4'
    }
  },
  {
    id: 3,
    badge: {
      text: 'AUTHORIZED CERTIFICATION PARTNER',
      variant: 'light'
    },
    headline: (
      <>
        SAVE UP TO 45% ON <br className="hero-br-desktop" />
        <span className="hero-headline-highlight">CISCO &amp; EC-COUNCIL</span> <br className="hero-br-desktop" />
        <span className="hero-headline-highlight">GLOBAL EXAMS</span> <br className="hero-br-desktop" />
        WITH ASSURANCE.
      </>
    ),
    subheadline: 'Official exam vouchers for CCNA, CCNP, CEH v13, CompTIA Security+ with 100% pass guarantee.',
    primaryCta: 'Get Exam Vouchers',
    secondaryCta: 'Check Discounts',
    secondaryIcon: null,
    trustType: 'wreath',
    trustBadge: certifiedBadgeImg,
    trustVal: '100%',
    trustLbl: 'Certified',
    image: examTeamImg,
    imageClass: 'hero-exam-team-cutout',
    altText: 'Cisco & EC-Council Global Exam Certification Advisors',
    statusBadge: {
      tag: 'OFFICIAL VOUCHERS',
      title: 'Authorized Exam Center',
      pill: 'SAVE UP TO 45%',
      dotColor: '#8B5CF6'
    }
  }
];

export function HeroSlider({ onOpenDemo }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);
  const touchEndX = useRef(null);
  const touchEndY = useRef(null);

  // Auto-play interval (pauses when user hovers or touches)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES_DATA.length);
    }, 8000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? SLIDES_DATA.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES_DATA.length);
  };

  // Keyboard accessibility (ArrowLeft, ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;
      if (e.key === 'ArrowLeft') {
        goToPrev();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Robust Touch Swipe Handlers for Mobile & Tablet
  const handleTouchStart = (e) => {
    setIsPaused(true);
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    touchEndX.current = null;
    touchEndY.current = null;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
    touchEndY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diffX = touchStartX.current - touchEndX.current;
    const diffY = (touchStartY.current || 0) - (touchEndY.current || 0);

    // Only swipe if horizontal swipe is dominant and > 38px
    if (Math.abs(diffX) > 38 && Math.abs(diffX) > Math.abs(diffY) * 1.25) {
      if (diffX > 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
    touchStartY.current = null;
    touchEndY.current = null;
  };

  const slide = SLIDES_DATA[currentSlide];

  return (
    <section 
      className="hero-slider-section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="I-MEDITA Hero Showcase"
    >
      {/* =========================================================================
          1. BACKGROUND GRAPHICS & VECTOR ACCENTS (RAZORPAY STYLE)
          ========================================================================= */}
      
      {/* Subtle Radial Glow behind subject */}
      <div className="hero-radial-glow" aria-hidden="true" />

      {/* Razorpay-style Concentric Orbit Rings */}
      <div className="hero-orbit-inner" aria-hidden="true" />
      <div className="hero-orbit-outer" aria-hidden="true" />

      {/* Floating Glowing Accent Spheres */}
      <span className="hero-dot-blue" aria-hidden="true" />
      <span className="hero-dot-cyan" aria-hidden="true" />
      <span className="hero-dot-teal" aria-hidden="true" />

      {/* Left Subtle Ambient Sweeps (Vector Curves) */}
      <svg
        className="hero-bg-curves"
        viewBox="0 0 500 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M-100,50 C120,120 220,320 180,650"
          stroke="#CBD5E1"
          strokeWidth="1.2"
        />
        <path
          d="M-50,0 C200,160 300,400 240,650"
          stroke="#94A3B8"
          strokeWidth="0.8"
          strokeDasharray="4 4"
        />
        <path
          d="M0,-50 C260,200 360,460 300,680"
          stroke="#E2E8F0"
          strokeWidth="0.6"
        />
      </svg>

      {/* Full-Bleed Technical Blueprint Grid Mesh (Spans Entire Slide Background) */}
      <div className="hero-grid-overlay heroGridOverlay" aria-hidden="true" />

      {/* =========================================================================
          2. SLIDE CONTENT GRID
          ========================================================================= */}
      <div className="hero-slider-container">
        
        {/* Left Column: Copy & Actions */}
        <div className="hero-content-col" key={slide.id}>
          
          {/* Pill Badge (Light or Dark Variant with Medal or Server Icon) */}
          <div className={`hero-badge ${slide.badge.variant || 'light'}`}>
            {slide.badge.icon === 'medal' && (
              <Award className="hero-badge-medal" size={15} strokeWidth={2.5} />
            )}
            {slide.badge.icon === 'server' && (
              <Server className="hero-badge-server" size={14} strokeWidth={2.4} style={{ color: '#0284C7', marginRight: 2 }} />
            )}
            <span>{slide.badge.text}</span>
          </div>

          {/* Main Headline */}
          <h1 className="hero-headline">
            {slide.headline}
          </h1>

          {/* Subheadline */}
          <p className="hero-subheadline">
            {slide.subheadline}
          </p>

          {/* Action Buttons & Trust Marker */}
          <div className="hero-cta-row">
            {/* Primary Action Button */}
            <button 
              type="button"
              className="hero-btn-primary"
              onClick={onOpenDemo}
            >
              <span>{slide.primaryCta}</span>
              <ArrowUpRight className="hero-btn-icon" />
            </button>

            {/* Secondary Action Button */}
            <button 
              type="button"
              className="hero-btn-secondary"
              onClick={onOpenDemo}
            >
              {slide.secondaryIcon === 'download' && (
                <Download size={15} strokeWidth={2.2} style={{ marginRight: 6 }} />
              )}
              {slide.secondaryIcon === 'cpu' && (
                <Cpu size={15} strokeWidth={2.2} style={{ marginRight: 6, color: '#475569' }} />
              )}
              <span>{slide.secondaryCta}</span>
            </button>

            {/* Trust Marker (Laurel Wreath / Custom Crest with 100% Certified) - Shown on Wreath Slides */}
            {slide.trustType === 'wreath' && (
              <div className="hero-trust-marker" title="100% Industry Recognized & Certified">
                {slide.trustBadge ? (
                  <img
                    src={slide.trustBadge}
                    alt={`${slide.trustVal} ${slide.trustLbl}`}
                    className="hero-certified-badge-img"
                  />
                ) : (
                  <div className="hero-wreath-container">
                    <svg
                      className="hero-wreath-svg"
                      viewBox="0 0 64 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      {/* Left Wreath Branch */}
                      <path
                        d="M13 42C10 36 9 28 11 20C12 16 14 12 18 9C19 8 21 8 21 9C22 10 21 11 20 12C17 15 15 18 14 22C12 28 13 35 15 42"
                        stroke="#64748B"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path d="M10 22C8 20 5 21 4 23C3 25 5 27 7 27C9 27 10 24 10 22Z" fill="#64748B" />
                      <path d="M12 16C10 14 7 15 6 17C5 19 7 21 9 21C11 21 12 18 12 16Z" fill="#64748B" />
                      <path d="M16 11C14 9 11 10 10 12C9 14 11 16 13 16C15 16 16 13 16 11Z" fill="#64748B" />
                      <path d="M21 8C19 6 16 7 15 9C14 11 16 13 18 13C20 13 21 10 21 8Z" fill="#64748B" />

                      {/* Right Wreath Branch */}
                      <path
                        d="M51 42C54 36 55 28 53 20C52 16 50 12 46 9C45 8 43 8 43 9C42 10 43 11 44 12C47 15 49 18 50 22C52 28 51 35 49 42"
                        stroke="#64748B"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path d="M54 22C56 20 59 21 60 23C61 25 59 27 57 27C55 27 54 24 54 22Z" fill="#64748B" />
                      <path d="M52 16C54 14 57 15 58 17C59 19 57 21 55 21C53 21 52 18 52 16Z" fill="#64748B" />
                      <path d="M48 11C50 9 53 10 54 12C55 14 53 16 51 16C49 16 48 13 48 11Z" fill="#64748B" />
                      <path d="M43 8C45 6 48 7 49 9C50 11 48 13 46 13C44 13 43 10 43 8Z" fill="#64748B" />
                    </svg>

                    <div className="hero-wreath-content">
                      <span className="hero-wreath-val">{slide.trustVal}</span>
                      <span className="hero-wreath-lbl">{slide.trustLbl}</span>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Micro Trust Checkpoints (Checkmarks for Placement/Labs) */}
          {slide.trustType === 'checkpoints' && slide.trustCheckpoints && (
            <div className="hero-trust-checkpoints">
              {slide.trustCheckpoints.map((pt, i) => (
                <div key={i} className="hero-trust-check-item">
                  <CheckCircle2 className="hero-check-icon" size={17} strokeWidth={2.4} />
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          )}

        </div>

        {/* Right Column: Instructor Cutout, 3D Roadmap Graphic, or Server Hardware Card */}
        <div className="hero-image-col">
          {slide.imageType === 'hardware-card' ? (
            <div className="hero-hardware-card-wrapper">
              <div className="hero-hardware-card-frame">
                <img
                  src={slide.image}
                  alt={slide.altText}
                  className="hero-hardware-img"
                />
              </div>
            </div>
          ) : (
            <img
              src={slide.image}
              alt={slide.altText}
              className={slide.imageClass || 'hero-instructor-cutout'}
            />
          )}

          {/* Floating UI status pill badge (Razorpay style with gentle bobbing) */}
          {slide.statusBadge && (
            <div 
              className="hero-floating-status-badge"
              aria-label="Status Badge"
            >
              <div className="hero-floating-badge-header">
                <span 
                  className="hero-floating-pulse-dot" 
                  style={{ backgroundColor: slide.statusBadge.dotColor || '#10B981', color: slide.statusBadge.dotColor || '#10B981' }} 
                />
                <span className="hero-floating-tag">{slide.statusBadge.tag}</span>
              </div>
              <span className="hero-floating-title">{slide.statusBadge.title}</span>
              <span className="hero-floating-pill">{slide.statusBadge.pill}</span>
            </div>
          )}
        </div>

      </div>

      {/* =========================================================================
          3. SLIDER CONTROLS (FROSTED CHEVRONS & PILL PAGINATION)
          ========================================================================= */}
      
      {/* Previous Slide Chevron */}
      <button 
        type="button"
        aria-label="Previous slide"
        className="hero-nav-arrow prev"
        onClick={goToPrev}
      >
        <ChevronLeft size={22} strokeWidth={2.4} />
      </button>

      {/* Next Slide Chevron */}
      <button 
        type="button"
        aria-label="Next slide"
        className="hero-nav-arrow next"
        onClick={goToNext}
      >
        <ChevronRight size={22} strokeWidth={2.4} />
      </button>

      {/* Bottom Center Pill Pagination Indicators */}
      <div className="hero-pagination" role="tablist" aria-label="Slider Pagination">
        {SLIDES_DATA.map((item, idx) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={currentSlide === idx}
            aria-label={`Go to slide ${idx + 1}`}
            className={`hero-dot-btn ${currentSlide === idx ? 'active' : ''}`}
            onClick={() => setCurrentSlide(idx)}
          />
        ))}
      </div>
    </section>
  );
}
