import React, { useState } from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  BookOpen, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Server, 
  Award, 
  Clock, 
  Briefcase, 
  Star,
  Sparkles,
  ArrowRight,
  ChevronDown,
  RotateCcw
} from 'lucide-react';
import styles from './ContactFormSection.module.css';

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

const PROMO_PERKS = [
  {
    icon: Server,
    title: 'Multi-Vendor Cisco & Firewall Racks',
    desc: 'Direct terminal access to real physical Cisco Nexus, ASA, and Palo Alto hardware topologies — zero simulation lag.'
  },
  {
    icon: Award,
    title: 'CCIE Certified Industry Mentors',
    desc: 'Learn directly from verified dual and triple CCIE enterprise architects with 15+ years active field experience.'
  },
  {
    icon: Clock,
    title: '24×7 Practical Lab Availability',
    desc: 'Pune center workstation access and 24/7 dedicated remote VPN lab access for hands-on practice from home.'
  },
  {
    icon: Briefcase,
    title: 'Dedicated Placement Assistance',
    desc: 'Rigorous technical mock interviews, resume rebuilding, and direct interview drives with top networking MNCs.'
  }
];

export function ContactFormSection({ onOpenDemo }) {
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
      errs.program = 'Please select a training program';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please provide a message or question';
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
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      const firstFieldKey = Object.keys(validationErrors)[0];
      const el = document.getElementById(`field-${firstFieldKey}`);
      if (el) el.focus();
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    // Simulated API call with in-place feedback
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
    <section className={styles.section} id="contact-form-section" aria-labelledby="form-section-heading">
      <div className={styles.container}>
        
        {/* Section Header */}
        <div className={styles.headerBlock}>
          <div className={styles.eyebrowBadge}>
            <span>Admissions & Counseling</span>
          </div>
          <h2 id="form-section-heading" className={styles.sectionHeading}>
            Get in Touch With <span className={styles.gradientAccent}>Our Experts</span>
          </h2>
          <p className={styles.sectionSubtext}>
            Fill out the form below or register for a free demo session to speak with an admissions advisor.
          </p>
        </div>

        {/* Two-Column Grid: Left Form + Right Demo Card */}
        <div className={styles.twoColumnGrid}>
          
          {/* ============================================================
              LEFT COLUMN: CONTACT FORM
              ============================================================ */}
          <div className={styles.formCard}>
            
            <div className={styles.formCardHeader}>
              <div className={styles.kickerRow}>
                <span className={styles.formKicker}>Direct Admissions Desk</span>
                <span className={styles.slaBadge}>
                  <Clock size={12} className={styles.slaIcon} />
                  <span>Reply in 2 business days</span>
                </span>
              </div>
              <h3 className={styles.formTitle}>Get in Touch With Us</h3>
              <p className={styles.formDesc}>
                Tell us what you're looking for, and our team will get back to you within 2 business days.
              </p>
            </div>

            {isSubmitted ? (
              /* In-place Success Confirmation */
              <div className={styles.successBox}>
                <div className={styles.successIconBox}>
                  <CheckCircle2 size={40} className={styles.successCheck} />
                </div>
                <h4 className={styles.successTitle}>Inquiry Sent Successfully!</h4>
                <p className={styles.successText}>
                  Thank you, <strong>{formData.name}</strong>. Our senior admissions counselor will reach out to you within 
                  <strong> 2 business days</strong> at <strong>{formData.phone}</strong> and <strong>{formData.email}</strong>.
                </p>

                <div className={styles.successSummary}>
                  <div className={styles.summaryItem}>
                    <span>Selected Program:</span>
                    <strong>{formData.program}</strong>
                  </div>
                  <div className={styles.summaryItem}>
                    <span>Learning Mode:</span>
                    <strong>{formData.learningMode}</strong>
                  </div>
                </div>

                <button 
                  type="button" 
                  onClick={handleReset}
                  className={styles.resetBtn}
                >
                  <RotateCcw size={15} />
                  <span>Send Another Message</span>
                </button>
              </div>
            ) : (
              /* Actual Form */
              <form onSubmit={handleSubmit} noValidate className={styles.form}>
                
                {/* 2-Column: Full Name & Email */}
                <div className={styles.formGrid2}>
                  
                  {/* Full Name */}
                  <div className={styles.fieldGroup}>
                    <label htmlFor="field-name" className={styles.fieldLabel}>
                      <User size={14} className={styles.labelIcon} />
                      <span>Full Name <span className={styles.req}>*</span></span>
                    </label>
                    <input
                      type="text"
                      id="field-name"
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                      autoComplete="name"
                    />
                    {errors.name && <span className={styles.errorMsg}>{errors.name}</span>}
                  </div>

                  {/* Email Address */}
                  <div className={styles.fieldGroup}>
                    <label htmlFor="field-email" className={styles.fieldLabel}>
                      <Mail size={14} className={styles.labelIcon} />
                      <span>Email Address <span className={styles.req}>*</span></span>
                    </label>
                    <input
                      type="email"
                      id="field-email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                      autoComplete="email"
                    />
                    {errors.email && <span className={styles.errorMsg}>{errors.email}</span>}
                  </div>

                </div>

                {/* Phone Number with Country Code */}
                <div className={styles.fieldGroup}>
                  <label htmlFor="field-phone" className={styles.fieldLabel}>
                    <Phone size={14} className={styles.labelIcon} />
                    <span>Phone Number <span className={styles.req}>*</span></span>
                  </label>
                  <div className={styles.phoneGroup}>
                    <div className={styles.countrySelectWrap}>
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
                      <ChevronDown size={14} className={styles.countryArrow} />
                    </div>
                    <input
                      type="tel"
                      id="field-phone"
                      placeholder="Enter 10-digit mobile number"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      className={`${styles.input} ${styles.phoneInput} ${errors.phone ? styles.inputError : ''}`}
                      autoComplete="tel"
                    />
                  </div>
                  {errors.phone && <span className={styles.errorMsg}>{errors.phone}</span>}
                </div>

                {/* Interested Training Program Dropdown */}
                <div className={styles.fieldGroup}>
                  <label htmlFor="field-program" className={styles.fieldLabel}>
                    <BookOpen size={14} className={styles.labelIcon} />
                    <span>Interested Training Program <span className={styles.req}>*</span></span>
                  </label>
                  <div className={styles.selectWrap}>
                    <select
                      id="field-program"
                      value={formData.program}
                      onChange={(e) => handleChange('program', e.target.value)}
                      className={`${styles.select} ${errors.program ? styles.inputError : ''}`}
                    >
                      {TRAINING_PROGRAMS.map((prog, idx) => (
                        <option key={idx} value={prog}>{prog}</option>
                      ))}
                    </select>
                    <ChevronDown size={16} className={styles.selectArrow} />
                  </div>
                  {errors.program && <span className={styles.errorMsg}>{errors.program}</span>}
                </div>

                {/* Preferred Learning Mode Pills */}
                <div className={styles.fieldGroup}>
                  <label className={styles.fieldLabel}>
                    <span>Preferred Learning Mode</span>
                  </label>
                  <div className={styles.modeGroup}>
                    {LEARNING_MODES.map((mode) => {
                      const isSelected = formData.learningMode === mode;
                      return (
                        <button
                          key={mode}
                          type="button"
                          onClick={() => handleChange('learningMode', mode)}
                          className={`${styles.modeBtn} ${isSelected ? styles.modeBtnActive : ''}`}
                        >
                          {mode}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Message / Queries */}
                <div className={styles.fieldGroup}>
                  <label htmlFor="field-message" className={styles.fieldLabel}>
                    <MessageSquare size={14} className={styles.labelIcon} />
                    <span>Message <span className={styles.req}>*</span></span>
                  </label>
                  <textarea
                    id="field-message"
                    rows={4}
                    placeholder="Tell us about your background, career goals, or any specific questions you have about batch timings or certifications..."
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                  />
                  {errors.message && <span className={styles.errorMsg}>{errors.message}</span>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={styles.submitBtn}
                >
                  {isSubmitting ? (
                    <>
                      <span className={styles.spinner} />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={16} />
                    </>
                  )}
                </button>

                {/* Privacy Guarantee */}
                <div className={styles.privacyNote}>
                  <ShieldCheck size={14} className={styles.privacyIcon} />
                  <span>Your details are 100% confidential. No spam, ever.</span>
                </div>

              </form>
            )}

          </div>

          {/* ============================================================
              RIGHT COLUMN: PROMOTIONAL DEMO CARD
              ============================================================ */}
          <div className={styles.promoCard}>
            
            {/* Ambient Tech Glow Effect */}
            <div className={styles.promoGlow} aria-hidden="true" />
            <div className={styles.promoMesh} aria-hidden="true" />

            <div className={styles.promoContent}>
              
              {/* Badge */}
              <div className={styles.promoBadgeRow}>
                <span className={styles.trialBadge}>
                  <Sparkles size={12} className={styles.sparkleIcon} />
                  <span>Zero Obligation Trial</span>
                </span>
                <span className={styles.freePill}>100% Free Demo</span>
              </div>

              {/* Heading & Subtitle */}
              <h3 className={styles.promoHeading}>
                Experience I-Medita Before You Enroll
              </h3>
              
              <p className={styles.promoDesc}>
                Invest in your learning today! Start with a FREE classroom or online demo session.
              </p>

              {/* Register CTA Button */}
              <button
                type="button"
                onClick={() => onOpenDemo ? onOpenDemo('Contact Page Right Promo Card') : null}
                className={styles.demoCtaBtn}
              >
                <span>Register for Free Demo</span>
                <ArrowRight size={16} className={styles.arrowIcon} />
              </button>

              {/* 4 Feature Perks */}
              <div className={styles.perksList}>
                {PROMO_PERKS.map((perk, idx) => {
                  const Icon = perk.icon;
                  return (
                    <div key={idx} className={styles.perkItem}>
                      <div className={styles.perkIconBox}>
                        <Icon size={18} />
                      </div>
                      <div className={styles.perkText}>
                        <h4 className={styles.perkTitle}>{perk.title}</h4>
                        <p className={styles.perkDesc}>{perk.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Rating Proof */}
              <div className={styles.promoProofBox}>
                <div className={styles.starsRow}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>
                <span className={styles.proofText}>
                  <strong>4.9 / 5 Average Rating</strong> based on 11,200+ working engineers trained at I-Medita
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
