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
  Compass,
  ArrowUpRight
} from 'lucide-react';
import styles from './ContactHeroStage.module.css';

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

export function ContactHeroStage({ onOpenDemo }) {
  // Form State
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
      const el = document.getElementById(`hero-field-${firstKey}`);
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
    <section className={styles.stageSection} aria-label="Contact Overview & Inquiry">
      {/* Subtle Background Glows */}
      <div className={styles.ambientTopGlow} aria-hidden="true" />
      <div className={styles.gridOverlay} aria-hidden="true" />

      <div className={styles.container}>
        
        {/* ============================================================
            LEFT COLUMN: THE STORY, REACH CHANNELS & CAMPUS DOSSIER
            ============================================================ */}
        <div className={styles.storyCol}>
          
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumbs" className={styles.breadcrumb}>
            <a href="/" className={styles.crumbLink}>Home</a>
            <ChevronRight size={13} className={styles.crumbSep} />
            <span className={styles.crumbActive}>Contact Us</span>
          </nav>

          {/* Eyebrow Status Badge */}
          <div className={styles.statusBadge}>
            <span className={styles.pulseDot} />
            <span>Admissions Desk Active • Mon–Sat (10 AM – 7 PM IST)</span>
          </div>

          {/* Main Headline */}
          <h1 className={styles.headline}>
            Let's Start Your <span className={styles.gradientText}>Learning Journey</span>
          </h1>

          {/* Subtitle */}
          <p className={styles.subtitle}>
            Have questions about our training programs, certifications, or career opportunities? 
            Our team of senior CCIE architects and academic counselors is here to help you take the next step.
          </p>

          {/* Quick Direct Touchpoint Cards */}
          <div className={styles.touchpointsGrid}>
            
            {/* 1. Phone Card */}
            <div className={styles.touchCard}>
              <div className={`${styles.touchIconBox} ${styles.iconPhone}`}>
                <PhoneCall size={20} />
              </div>
              <div className={styles.touchInfo}>
                <div className={styles.touchHeaderRow}>
                  <h3 className={styles.touchTitle}>Talk to Our Team</h3>
                  <span className={styles.tagBlue}>Direct Line</span>
                </div>
                <a href="tel:+918750004411" className={styles.touchLink}>
                  +91 8750004411
                </a>
                <p className={styles.touchSub}>
                  Direct telephone counseling for syllabus, fees, and next batch timings.
                </p>
              </div>
              <a href="tel:+918750004411" className={styles.touchActionBtn} title="Call Now">
                <span>Call Now</span>
                <ArrowUpRight size={14} />
              </a>
            </div>

            {/* 2. WhatsApp Card */}
            <div className={styles.touchCard}>
              <div className={`${styles.touchIconBox} ${styles.iconWhatsApp}`}>
                <MessageCircle size={20} />
              </div>
              <div className={styles.touchInfo}>
                <div className={styles.touchHeaderRow}>
                  <h3 className={styles.touchTitle}>WhatsApp Support</h3>
                  <span className={styles.tagGreen}>Instant Reply</span>
                </div>
                <a 
                  href="https://wa.me/918750004411?text=Hi%20I-Medita%20Team%2C%20I%20have%20an%20inquiry%20regarding%20training%20programs." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.touchLink}
                >
                  +91 8750004411
                </a>
                <p className={styles.touchSub}>
                  Get instant course PDFs, lab rack topologies, and admission assistance.
                </p>
              </div>
              <a 
                href="https://wa.me/918750004411?text=Hi%20I-Medita%20Team%2C%20I%20have%20an%20inquiry%20regarding%20training%20programs." 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${styles.touchActionBtn} ${styles.btnGreen}`}
                title="Chat on WhatsApp"
              >
                <span>Chat on WhatsApp</span>
                <ArrowUpRight size={14} />
              </a>
            </div>

            {/* 3. Email Card */}
            <div className={styles.touchCard}>
              <div className={`${styles.touchIconBox} ${styles.iconEmail}`}>
                <Mail size={20} />
              </div>
              <div className={styles.touchInfo}>
                <div className={styles.touchHeaderRow}>
                  <h3 className={styles.touchTitle}>Email Us</h3>
                  <span className={styles.tagIndigo}>Within 24 Hours</span>
                </div>
                <a href="mailto:info@imedita.com" className={styles.touchLink}>
                  info@imedita.com
                </a>
                <p className={styles.touchSub}>
                  For corporate proposals, curriculum downloads, or student ticket queries.
                </p>
              </div>
              <a href="mailto:info@imedita.com" className={`${styles.touchActionBtn} ${styles.btnIndigo}`} title="Send Email">
                <span>Send Email</span>
                <ArrowUpRight size={14} />
              </a>
            </div>

          </div>

          {/* Quick Pune Office Dossier Snippet */}
          <div className={styles.officeDossier}>
            <div className={styles.dossierIconBox}>
              <MapPin size={20} />
            </div>
            <div className={styles.dossierContent}>
              <span className={styles.dossierLabel}>Pune Training Center & Cisco Hardware Labs:</span>
              <p className={styles.dossierAddress}>
                <strong>3rd Floor, Aditi Samruddhi Building,</strong> Baner Road, Baner, Pune – 411 045.
              </p>
              <div className={styles.dossierMeta}>
                <span>Near Baner Welcome Board (5 mins from Highway Bypass)</span>
                <span className={styles.dossierDot}>•</span>
                <span>Open Mon–Sat: 10:00 AM – 7:00 PM</span>
              </div>
            </div>
          </div>

          {/* Social Proof Line */}
          <div className={styles.proofRow}>
            <div className={styles.proofItem}>
              <Star size={14} className={styles.starIcon} />
              <span><strong>4.9 / 5</strong> Rating (11,200+ Alumni)</span>
            </div>
            <span className={styles.proofDot}>•</span>
            <div className={styles.proofItem}>
              <ShieldCheck size={14} className={styles.shieldIcon} />
              <span>Direct Mentorship from CCIE Working Architects</span>
            </div>
          </div>

        </div>

        {/* ============================================================
            RIGHT COLUMN: THE ELEVATED INTERACTIVE CONSULTATION CARD
            ============================================================ */}
        <div className={styles.formCol}>
          <div className={styles.formCard} id="inquiry-form-card">
            
            {/* Card Header */}
            <div className={styles.formHeader}>
              <div className={styles.formKickerRow}>
                <span className={styles.formKicker}>Admissions Desk</span>
                <span className={styles.slaBadge}>
                  <Clock size={12} className={styles.slaClock} />
                  <span>Reply in 2 business days</span>
                </span>
              </div>
              <h2 className={styles.formHeading}>Get in Touch With Us</h2>
              <p className={styles.formSub}>
                Tell us what you're looking for, and our team will get back to you within 2 business days.
              </p>
            </div>

            {isSubmitted ? (
              /* Success Confirmation */
              <div className={styles.successState}>
                <div className={styles.successIconBox}>
                  <CheckCircle2 size={42} className={styles.successCheck} />
                </div>
                <h3 className={styles.successHeading}>Inquiry Received!</h3>
                <p className={styles.successMessage}>
                  Thank you, <strong>{formData.name}</strong>. Our senior admissions counselor will reach out to you within 
                  <strong> 2 business days</strong> at:
                </p>

                <div className={styles.successEcho}>
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
                  <RotateCcw size={15} />
                  <span>Submit Another Inquiry</span>
                </button>
              </div>
            ) : (
              /* The Form */
              <form onSubmit={handleSubmit} noValidate className={styles.form}>
                
                {/* 2-Column: Name & Email */}
                <div className={styles.formGrid2}>
                  
                  {/* Full Name */}
                  <div className={styles.inputGroup}>
                    <label htmlFor="hero-field-name" className={styles.label}>
                      <User size={13} className={styles.labelIcon} />
                      <span>Full Name <span className={styles.req}>*</span></span>
                    </label>
                    <input
                      type="text"
                      id="hero-field-name"
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      className={`${styles.input} ${errors.name ? styles.inputErr : ''}`}
                      autoComplete="name"
                    />
                    {errors.name && <span className={styles.errText}>{errors.name}</span>}
                  </div>

                  {/* Email */}
                  <div className={styles.inputGroup}>
                    <label htmlFor="hero-field-email" className={styles.label}>
                      <Mail size={13} className={styles.labelIcon} />
                      <span>Email Address <span className={styles.req}>*</span></span>
                    </label>
                    <input
                      type="email"
                      id="hero-field-email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      className={`${styles.input} ${errors.email ? styles.inputErr : ''}`}
                      autoComplete="email"
                    />
                    {errors.email && <span className={styles.errText}>{errors.email}</span>}
                  </div>

                </div>

                {/* Phone Number */}
                <div className={styles.inputGroup}>
                  <label htmlFor="hero-field-phone" className={styles.label}>
                    <PhoneCall size={13} className={styles.labelIcon} />
                    <span>Phone Number <span className={styles.req}>*</span></span>
                  </label>
                  <div className={styles.phoneGroup}>
                    <div className={styles.codeWrap}>
                      <select
                        value={formData.countryCode}
                        onChange={(e) => handleChange('countryCode', e.target.value)}
                        className={styles.codeSelect}
                        aria-label="Country Code"
                      >
                        {COUNTRY_CODES.map(c => (
                          <option key={c.code} value={c.code}>{c.code}</option>
                        ))}
                      </select>
                      <ChevronDown size={14} className={styles.selectChevron} />
                    </div>
                    <input
                      type="tel"
                      id="hero-field-phone"
                      placeholder="10-digit mobile number"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      className={`${styles.input} ${styles.phoneInput} ${errors.phone ? styles.inputErr : ''}`}
                      autoComplete="tel"
                    />
                  </div>
                  {errors.phone && <span className={styles.errText}>{errors.phone}</span>}
                </div>

                {/* Interested Training Program */}
                <div className={styles.inputGroup}>
                  <label htmlFor="hero-field-program" className={styles.label}>
                    <BookOpen size={13} className={styles.labelIcon} />
                    <span>Interested Training Program <span className={styles.req}>*</span></span>
                  </label>
                  <div className={styles.selectWrap}>
                    <select
                      id="hero-field-program"
                      value={formData.program}
                      onChange={(e) => handleChange('program', e.target.value)}
                      className={`${styles.select} ${errors.program ? styles.inputErr : ''}`}
                    >
                      {TRAINING_PROGRAMS.map((prog, i) => (
                        <option key={i} value={prog}>{prog}</option>
                      ))}
                    </select>
                    <ChevronDown size={15} className={styles.selectChevron} />
                  </div>
                  {errors.program && <span className={styles.errText}>{errors.program}</span>}
                </div>

                {/* Preferred Learning Mode */}
                <div className={styles.inputGroup}>
                  <label className={styles.label}>
                    <span>Preferred Learning Mode</span>
                  </label>
                  <div className={styles.modeSegment}>
                    {LEARNING_MODES.map(mode => {
                      const isActive = formData.learningMode === mode;
                      return (
                        <button
                          key={mode}
                          type="button"
                          onClick={() => handleChange('learningMode', mode)}
                          className={`${styles.modeSegmentBtn} ${isActive ? styles.modeActive : ''}`}
                        >
                          {mode}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Message */}
                <div className={styles.inputGroup}>
                  <label htmlFor="hero-field-message" className={styles.label}>
                    <span>Message <span className={styles.req}>*</span></span>
                  </label>
                  <textarea
                    id="hero-field-message"
                    rows={3}
                    placeholder="Tell us about your background or questions regarding batch timings, labs, or fees..."
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    className={`${styles.textarea} ${errors.message ? styles.inputErr : ''}`}
                  />
                  {errors.message && <span className={styles.errText}>{errors.message}</span>}
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

                {/* Reassurance Footer */}
                <div className={styles.formFooterNote}>
                  <ShieldCheck size={13} className={styles.privacyShield} />
                  <span>100% Confidential • Zero Spam • Official Syllabus Included</span>
                </div>

              </form>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}
