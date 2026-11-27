import React, { useState } from 'react';
import { 
  PhoneCall, 
  MessageCircle, 
  Mail, 
  Calendar, 
  ChevronRight, 
  Star, 
  MapPin, 
  ShieldCheck, 
  Clock, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  ChevronDown, 
  RotateCcw,
  BookOpen,
  User,
  Server,
  Cpu,
  Layers,
  ArrowRight,
  Tv,
  Wifi,
  ExternalLink
} from 'lucide-react';
import styles from './ContactCampusHero.module.css';

const COUNTRY_CODES = [
  { code: '+91', label: '+91 (India)' },
  { code: '+1', label: '+1 (USA / Canada)' },
  { code: '+44', label: '+44 (UK)' },
  { code: '+971', label: '+971 (UAE)' },
  { code: '+65', label: '+65 (Singapore)' },
  { code: '+61', label: '+61 (Australia)' },
  { code: '+49', label: '+49 (Germany)' },
  { code: '+966', label: '+966 (Saudi Arabia)' }
];

const TRAINING_PROGRAMS = [
  'Cisco CCNA (200-301) & Network Security',
  'Cisco CCNP Enterprise (ENCOR + ENARSI)',
  'Cisco CCNP Security (SCOR + SVPN/SNCF)',
  'Cisco CCIE Enterprise Infrastructure v1.1',
  'Cisco CCIE Security v6.0',
  'Palo Alto Networks Firewall (PCNSE)',
  'Fortinet FortiGate Firewall (NSE 4-7)',
  'Check Point Quantum Security (CCSA)',
  'EC-Council CEH v13 (Certified Ethical Hacker)',
  'AWS Advanced Cloud Networking & Solutions Architect',
  'Network Automation with Python & REST APIs',
  '100% Job Guarantee Network Security Track',
  'Other / Custom Corporate Training'
];

const LEARNING_MODES = [
  'Classroom (Pune Center)',
  'Online Live Interactive',
  'Corporate Training'
];

// Interactive Hardware Lab Tour Spotlights
const LAB_SPOTS = [
  {
    id: 'cisco-racks',
    label: 'Cisco Hardware Racks',
    icon: Server,
    title: 'Physical Cisco Nexus & Routing Racks',
    desc: 'Equipped with real Cisco Nexus 9000, ISR 4000 routers, and Catalyst 9300 enterprise switches — zero packet simulator delays.',
    img: 'https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/06/10071301/imedita_71.jpg',
    specs: 'Nexus 9300 • ISR 4331 • ASA 5525-X • Catalyst 9300'
  },
  {
    id: 'security-pods',
    label: 'Firewall Security Pods',
    icon: ShieldCheck,
    title: 'Palo Alto & Next-Gen Firewall Lab',
    desc: 'Dedicated enterprise security appliances for live traffic inspection, NAT policies, IPsec VPN tunnels, and threat prevention drills.',
    img: 'https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/06/10071302/imedita_66.jpg',
    specs: 'Palo Alto PA-3200 • FortiGate 100F • Check Point Quantum'
  },
  {
    id: 'smart-classrooms',
    label: 'Smart AV Classrooms',
    icon: Tv,
    title: 'Interactive CCIE Architecture Lectures',
    desc: '4K projection smart classrooms designed for deep network architecture discussions, live topology tracing, and student collaboration.',
    img: 'https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/06/10071301/imedita_72.jpg',
    specs: 'High-Tech AV Setup • Dual Display • Real-time CLI Projection'
  },
  {
    id: 'student-labs',
    label: '24/7 Practice Pods',
    icon: Wifi,
    title: 'Workstation Practice & Remote VPN Pods',
    desc: 'High-speed gigabit workstations in Baner, Pune plus 24/7 remote cloud VPN access so you can configure real hardware from anywhere.',
    img: 'https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/06/10071301/imedita_69.jpg',
    specs: 'Gigabit LAN • 24/7 Remote VPN • Dedicated Study Pods'
  }
];

export function ContactCampusHero({ onOpenDemo }) {
  const [activeSpotIdx, setActiveSpotIdx] = useState(0);
  const activeSpot = LAB_SPOTS[activeSpotIdx];

  // Lead Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+91',
    phone: '',
    program: TRAINING_PROGRAMS[0],
    learningMode: 'Classroom (Pune Center)',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Full name is required';
    } else if (formData.name.trim().length < 2) {
      errs.name = 'Please enter a valid full name';
    }

    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (!/^\d{7,14}$/.test(formData.phone.replace(/[\s-]/g, ''))) {
      errs.phone = 'Please enter a valid 7 to 14 digit phone number';
    }

    if (!formData.program) {
      errs.program = 'Please select a program';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please provide a message or query';
    } else if (formData.message.trim().length < 8) {
      errs.message = 'Please describe your query in at least 8 characters';
    }

    return errs;
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const valErrors = validate();

    if (Object.keys(valErrors).length > 0) {
      setErrors(valErrors);
      const firstKey = Object.keys(valErrors)[0];
      const el = document.getElementById(`campus-form-${firstKey}`);
      if (el) el.focus();
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 850);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      countryCode: '+91',
      phone: '',
      program: TRAINING_PROGRAMS[0],
      learningMode: 'Classroom (Pune Center)',
      message: ''
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section className={styles.heroSection} aria-label="Visual Campus Tour & Contact Inquiry">
      {/* Background Visual Atmosphere */}
      <div className={styles.ambientGlowBlue} aria-hidden="true" />
      <div className={styles.ambientGlowCyan} aria-hidden="true" />
      <div className={styles.gridOverlay} aria-hidden="true" />

      <div className={styles.container}>
        
        {/* ============================================================
            LEFT COLUMN: VISUAL STORYTELLING & INTERACTIVE LAB TOUR
            ============================================================ */}
        <div className={styles.leftCol}>
          
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumbs" className={styles.breadcrumb}>
            <a href="/" className={styles.crumbLink}>Home</a>
            <ChevronRight size={13} className={styles.crumbSep} />
            <span className={styles.crumbActive}>Contact Us</span>
          </nav>

          {/* Eyebrow Badge */}
          <div className={styles.locationBadge}>
            <span className={styles.pulseBeacon} />
            <span>Maharashtra's Largest Cisco & Security Hardware Lab</span>
          </div>

          {/* Main Headline */}
          <h1 className={styles.headline}>
            Let's Start Your <br />
            <span className={styles.gradientWord}>Learning Journey</span>
          </h1>

          {/* Subtitle */}
          <p className={styles.subtitle}>
            Have questions about our training programs, certifications, or career opportunities? 
            Experience Maharashtra's largest physical Cisco lab in Baner, Pune or join interactive live online batches worldwide.
          </p>

          {/* Quick Contact Action Pills */}
          <div className={styles.quickPillsRow}>
            <a href="tel:+918750004411" className={styles.quickPill}>
              <PhoneCall size={14} className={styles.pillPhoneIcon} />
              <span>Talk to Our Team (+91 8750004411)</span>
            </a>
            <a 
              href="https://wa.me/918750004411?text=Hi%20I-Medita%20Team%2C%20I%20have%20an%20inquiry%20regarding%20training%20programs." 
              target="_blank" 
              rel="noopener noreferrer"
              className={`${styles.quickPill} ${styles.pillWhatsApp}`}
            >
              <MessageCircle size={14} />
              <span>WhatsApp Us</span>
            </a>
            <button 
              type="button"
              onClick={() => onOpenDemo ? onOpenDemo('Contact Campus Hero') : null}
              className={`${styles.quickPill} ${styles.pillDemo}`}
            >
              <Calendar size={14} />
              <span>Book a Free Demo</span>
            </button>
          </div>

          {/* INTERACTIVE HARDWARE LAB SHOWCASE STAGE */}
          <div className={styles.labShowcaseBox}>
            
            {/* Interactive Selector Tabs */}
            <div className={styles.labTabsBar}>
              {LAB_SPOTS.map((spot, idx) => {
                const Icon = spot.icon;
                const isActive = activeSpotIdx === idx;
                return (
                  <button
                    key={spot.id}
                    type="button"
                    onClick={() => setActiveSpotIdx(idx)}
                    className={`${styles.labTabBtn} ${isActive ? styles.labTabActive : ''}`}
                  >
                    <Icon size={14} />
                    <span>{spot.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Lab Image & Specs Card */}
            <div className={styles.labDisplayCard}>
              <div className={styles.labImageWrap}>
                <img 
                  src={activeSpot.img} 
                  alt={activeSpot.title} 
                  className={styles.labImg}
                />
                <div className={styles.labGradientShade} />
                <div className={styles.specsBadge}>
                  <Server size={13} className={styles.specsIcon} />
                  <span>{activeSpot.specs}</span>
                </div>
              </div>

              <div className={styles.labInfoWrap}>
                <h3 className={styles.labTitle}>{activeSpot.title}</h3>
                <p className={styles.labDesc}>{activeSpot.desc}</p>
                <div className={styles.labFootNote}>
                  <CheckCircle2 size={13} className={styles.verifiedCheck} />
                  <span>Verified Physical On-Campus Gear • Baner, Pune</span>
                </div>
              </div>
            </div>

          </div>

          {/* Pune Campus Quick Details Line */}
          <div className={styles.campusQuickLine}>
            <MapPin size={15} className={styles.mapPinIcon} />
            <span>
              <strong>Pune Campus:</strong> 3rd Floor, Aditi Samruddhi Building, Baner Road, Pune – 411 045 (Near Baner Welcome Board)
            </span>
          </div>

        </div>

        {/* ============================================================
            RIGHT COLUMN: THE ELEVATED FLOATING CONSULTATION CONSOLE
            ============================================================ */}
        <div className={styles.rightCol}>
          <div className={styles.formCard} id="contact-inquiry-card">
            
            {/* Card Header */}
            <div className={styles.formCardHeader}>
              <div className={styles.formHeaderKicker}>
                <span className={styles.admissionsKicker}>Admissions Desk</span>
                <span className={styles.slaBadge}>
                  <Clock size={11} className={styles.slaIcon} />
                  <span>Reply in 2 business days</span>
                </span>
              </div>
              <h2 className={styles.formTitle}>Get in Touch With Us</h2>
              <p className={styles.formSubtitle}>
                Tell us what you're looking for, and our team will get back to you within 2 business days.
              </p>
            </div>

            {isSubmitted ? (
              /* Success State */
              <div className={styles.successWrapper}>
                <div className={styles.successIconBox}>
                  <CheckCircle2 size={44} className={styles.successCheck} />
                </div>
                <h3 className={styles.successTitle}>Inquiry Sent Successfully!</h3>
                <p className={styles.successDesc}>
                  Thank you, <strong>{formData.name}</strong>. Our senior admissions mentor will reach out to you within 
                  <strong> 2 business days</strong> at:
                </p>

                <div className={styles.successEchoBox}>
                  <div><strong>Phone:</strong> {formData.countryCode} {formData.phone}</div>
                  <div><strong>Email:</strong> {formData.email}</div>
                  <div><strong>Program:</strong> {formData.program}</div>
                  <div><strong>Mode:</strong> {formData.learningMode}</div>
                </div>

                <button 
                  type="button" 
                  onClick={handleReset}
                  className={styles.resetBtn}
                >
                  <RotateCcw size={14} />
                  <span>Submit Another Inquiry</span>
                </button>
              </div>
            ) : (
              /* Lead Form */
              <form onSubmit={handleSubmit} noValidate className={styles.form}>
                
                {/* 2-Column: Full Name & Email */}
                <div className={styles.formGrid2}>
                  
                  {/* Name */}
                  <div className={styles.formGroup}>
                    <label htmlFor="campus-form-name" className={styles.label}>
                      <User size={13} className={styles.labelIcon} />
                      <span>Full Name <span className={styles.req}>*</span></span>
                    </label>
                    <input
                      type="text"
                      id="campus-form-name"
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                      autoComplete="name"
                    />
                    {errors.name && <span className={styles.errorText}>{errors.name}</span>}
                  </div>

                  {/* Email */}
                  <div className={styles.formGroup}>
                    <label htmlFor="campus-form-email" className={styles.label}>
                      <Mail size={13} className={styles.labelIcon} />
                      <span>Email Address <span className={styles.req}>*</span></span>
                    </label>
                    <input
                      type="email"
                      id="campus-form-email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                      autoComplete="email"
                    />
                    {errors.email && <span className={styles.errorText}>{errors.email}</span>}
                  </div>

                </div>

                {/* Phone Number with Country Code */}
                <div className={styles.formGroup}>
                  <label htmlFor="campus-form-phone" className={styles.label}>
                    <PhoneCall size={13} className={styles.labelIcon} />
                    <span>Phone Number <span className={styles.req}>*</span></span>
                  </label>
                  <div className={styles.phoneInputRow}>
                    <div className={styles.countryWrap}>
                      <select
                        value={formData.countryCode}
                        onChange={(e) => handleChange('countryCode', e.target.value)}
                        className={styles.countrySelect}
                        aria-label="Country Code"
                      >
                        {COUNTRY_CODES.map(c => (
                          <option key={c.code} value={c.code}>{c.code}</option>
                        ))}
                      </select>
                      <ChevronDown size={14} className={styles.selectArrow} />
                    </div>
                    <input
                      type="tel"
                      id="campus-form-phone"
                      placeholder="Enter 10-digit mobile number"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      className={`${styles.input} ${styles.phoneInput} ${errors.phone ? styles.inputError : ''}`}
                      autoComplete="tel"
                    />
                  </div>
                  {errors.phone && <span className={styles.errorText}>{errors.phone}</span>}
                </div>

                {/* Interested Training Program Dropdown */}
                <div className={styles.formGroup}>
                  <label htmlFor="campus-form-program" className={styles.label}>
                    <BookOpen size={13} className={styles.labelIcon} />
                    <span>Interested Training Program <span className={styles.req}>*</span></span>
                  </label>
                  <div className={styles.selectWrapper}>
                    <select
                      id="campus-form-program"
                      value={formData.program}
                      onChange={(e) => handleChange('program', e.target.value)}
                      className={`${styles.select} ${errors.program ? styles.inputError : ''}`}
                    >
                      {TRAINING_PROGRAMS.map((prog, idx) => (
                        <option key={idx} value={prog}>{prog}</option>
                      ))}
                    </select>
                    <ChevronDown size={15} className={styles.selectArrow} />
                  </div>
                  {errors.program && <span className={styles.errorText}>{errors.program}</span>}
                </div>

                {/* Preferred Learning Mode Segments */}
                <div className={styles.formGroup}>
                  <label className={styles.label}>
                    <span>Preferred Learning Mode</span>
                  </label>
                  <div className={styles.modeSegments}>
                    {LEARNING_MODES.map(mode => {
                      const isActive = formData.learningMode === mode;
                      return (
                        <button
                          key={mode}
                          type="button"
                          onClick={() => handleChange('learningMode', mode)}
                          className={`${styles.modeBtn} ${isActive ? styles.modeBtnActive : ''}`}
                        >
                          {mode}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Message */}
                <div className={styles.formGroup}>
                  <label htmlFor="campus-form-message" className={styles.label}>
                    <span>Message <span className={styles.req}>*</span></span>
                  </label>
                  <textarea
                    id="campus-form-message"
                    rows={3}
                    placeholder="Tell us about your background or questions regarding batches, physical lab access, or fees..."
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                  />
                  {errors.message && <span className={styles.errorText}>{errors.message}</span>}
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={styles.submitBtn}
                >
                  {isSubmitting ? (
                    <>
                      <span className={styles.btnSpinner} />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={15} />
                    </>
                  )}
                </button>

                {/* Privacy Guarantee Note */}
                <div className={styles.privacyNote}>
                  <ShieldCheck size={13} className={styles.privacyIcon} />
                  <span>100% Confidential • Zero Spam Guarantee • Free Syllabus Included</span>
                </div>

              </form>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}
