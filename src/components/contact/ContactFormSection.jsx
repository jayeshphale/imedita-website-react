import React, { useState } from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  Send, 
  BookOpen, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  Calendar, 
  ArrowRight, 
  Server, 
  Award, 
  Clock, 
  Briefcase,
  Star,
  MapPin,
  Laptop,
  Building2
} from 'lucide-react';
import styles from './ContactFormSection.module.css';

const COUNTRY_CODES = [
  { code: '+91', country: 'IN', label: '+91 (India)' },
  { code: '+1', country: 'US/CA', label: '+1 (USA/Canada)' },
  { code: '+44', country: 'UK', label: '+44 (UK)' },
  { code: '+971', country: 'UAE', label: '+971 (UAE)' },
  { code: '+65', country: 'SG', label: '+65 (Singapore)' },
  { code: '+61', country: 'AU', label: '+61 (Australia)' },
  { code: '+49', country: 'DE', label: '+49 (Germany)' },
  { code: '+966', country: 'SA', label: '+966 (Saudi Arabia)' },
  { code: '+27', country: 'ZA', label: '+27 (South Africa)' }
];

const TRAINING_PROGRAMS = [
  'Cisco CCNA (200-301) & Network Security',
  'Cisco CCNP Enterprise (ENCOR 350-401 + ENARSI 300-410)',
  'Cisco CCNP Security (SCOR 350-701 + SNCF/SVPN)',
  'Cisco CCIE Enterprise Infrastructure (v1.1 Practical Lab)',
  'Palo Alto Networks PCNSA / PCNSE Firewall Security',
  'AWS Certified Solutions Architect & Cloud Networking',
  'Python Network Automation & DevNet Associate',
  'Custom Corporate Team Upskilling Track'
];

const DEMO_PERKS = [
  {
    icon: Server,
    title: 'Physical Cisco Racks',
    desc: 'Live CLI on Nexus 9000, ISR routers & firewalls.'
  },
  {
    icon: Award,
    title: 'CCIE Architects',
    desc: 'Learn directly from dual & triple CCIE mentors.'
  },
  {
    icon: Clock,
    title: 'Flexible Batches',
    desc: 'Weekend & weekday slots with lifetime backup.'
  },
  {
    icon: Briefcase,
    title: 'Placement Cell',
    desc: 'Mock interviews & corporate hiring drives.'
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
      errs.phone = 'Please enter a valid 7 to 14 digit mobile number';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please provide a brief message or question';
    } else if (formData.message.trim().length < 5) {
      errs.message = 'Message should be at least 5 characters';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleModeSelect = (mode) => {
    setFormData((prev) => ({ ...prev, learningMode: mode }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
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
    <section className={styles.section} id="contact-form" aria-labelledby="contact-form-heading">
      <div className={styles.container}>
        
        {/* Main 2-Column Split Layout */}
        <div className={styles.formSplitGrid}>
          
          {/* =========================================================================
              LEFT COLUMN: CONTACT & ADMISSIONS ENQUIRY FORM
              ========================================================================= */}
          <div className={styles.formCard}>
            <div className={styles.formHeader}>
              <div className={styles.kickerRow}>
                <span className={styles.admissionsKicker}>Admissions Desk</span>
                <span className={styles.responseTimeBadge}>
                  <Clock size={12} />
                  <span>Prompt Response Guarantee</span>
                </span>
              </div>
              <h2 id="contact-form-heading" className={styles.formHeading}>
                Get in Touch With Us
              </h2>
              <p className={styles.formSubtext}>
                Have questions about courses, certifications, or lab slots? Send us a message and our education mentor will connect with you.
              </p>
            </div>

            {isSubmitted ? (
              <div className={styles.successState} role="status" aria-live="polite">
                <div className={styles.successIconCircle}>
                  <CheckCircle2 size={36} />
                </div>
                <h3 className={styles.successTitle}>Inquiry Sent Successfully!</h3>
                <p className={styles.successDesc}>
                  Thank you, <strong>{formData.name}</strong>. Our senior admissions mentor will reach out to you within <strong>2 business days</strong> at:
                </p>
                <div className={styles.successSummaryBox}>
                  <div className={styles.summaryItem}>
                    <span className={styles.summaryLabel}>Phone:</span>
                    <span className={styles.summaryValue}>{formData.countryCode} {formData.phone}</span>
                  </div>
                  <div className={styles.summaryItem}>
                    <span className={styles.summaryLabel}>Email:</span>
                    <span className={styles.summaryValue}>{formData.email}</span>
                  </div>
                  <div className={styles.summaryItem}>
                    <span className={styles.summaryLabel}>Program:</span>
                    <span className={styles.summaryValue}>{formData.program}</span>
                  </div>
                  <div className={styles.summaryItem}>
                    <span className={styles.summaryLabel}>Mode:</span>
                    <span className={styles.summaryValue}>{formData.learningMode}</span>
                  </div>
                </div>
                <button 
                  type="button" 
                  onClick={handleReset}
                  className={styles.resetBtn}
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.formElement} noValidate>
                
                {/* Row 1: Name & Email */}
                <div className={styles.twoColRow}>
                  {/* Full Name */}
                  <div className={styles.fieldGroup}>
                    <label htmlFor="contact-name" className={styles.fieldLabel}>
                      <User size={14} className={styles.labelIcon} />
                      <span>Full Name</span>
                      <span className={styles.reqAsterisk}>*</span>
                    </label>
                    <input 
                      type="text"
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rahul Sharma"
                      className={`${styles.inputField} ${errors.name ? styles.inputError : ''}`}
                      disabled={isSubmitting}
                      required
                    />
                    {errors.name && <span className={styles.fieldErrorText}>{errors.name}</span>}
                  </div>

                  {/* Email Address */}
                  <div className={styles.fieldGroup}>
                    <label htmlFor="contact-email" className={styles.fieldLabel}>
                      <Mail size={14} className={styles.labelIcon} />
                      <span>Email Address</span>
                      <span className={styles.reqAsterisk}>*</span>
                    </label>
                    <input 
                      type="email"
                      id="contact-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@example.com"
                      className={`${styles.inputField} ${errors.email ? styles.inputError : ''}`}
                      disabled={isSubmitting}
                      required
                    />
                    {errors.email && <span className={styles.fieldErrorText}>{errors.email}</span>}
                  </div>
                </div>

                {/* Row 2: Phone Number with Country Code */}
                <div className={styles.fieldGroup}>
                  <label htmlFor="contact-phone" className={styles.fieldLabel}>
                    <Phone size={14} className={styles.labelIcon} />
                    <span>Phone Number</span>
                    <span className={styles.reqAsterisk}>*</span>
                  </label>
                  <div className={styles.phoneInputWrap}>
                    <select
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleChange}
                      className={styles.countrySelect}
                      aria-label="Country Code"
                      disabled={isSubmitting}
                    >
                      {COUNTRY_CODES.map((c) => (
                        <option key={c.code} value={c.code}>
                          {c.code} ({c.country})
                        </option>
                      ))}
                    </select>
                    <input 
                      type="tel"
                      id="contact-phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter 10-digit mobile number"
                      className={`${styles.inputField} ${styles.phoneInput} ${errors.phone ? styles.inputError : ''}`}
                      disabled={isSubmitting}
                      required
                    />
                  </div>
                  {errors.phone && <span className={styles.fieldErrorText}>{errors.phone}</span>}
                </div>

                {/* Row 3: Interested Training Program Dropdown */}
                <div className={styles.fieldGroup}>
                  <label htmlFor="contact-program" className={styles.fieldLabel}>
                    <BookOpen size={14} className={styles.labelIcon} />
                    <span>Interested Training Program</span>
                    <span className={styles.reqAsterisk}>*</span>
                  </label>
                  <div className={styles.selectWrap}>
                    <select
                      id="contact-program"
                      name="program"
                      value={formData.program}
                      onChange={handleChange}
                      className={styles.selectField}
                      disabled={isSubmitting}
                    >
                      {TRAINING_PROGRAMS.map((prog, i) => (
                        <option key={i} value={prog}>{prog}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Row 4: Preferred Learning Mode (Segmented Controls) */}
                <div className={styles.fieldGroup}>
                  <label className={styles.fieldLabel}>
                    <span>Preferred Learning Mode</span>
                  </label>
                  <div className={styles.modeSegmentedGrid} role="radiogroup" aria-label="Preferred Learning Mode">
                    {[
                      { id: 'Classroom (Pune Center)', label: 'Classroom (Pune)', icon: MapPin },
                      { id: 'Online Live Interactive', label: 'Online Live', icon: Laptop },
                      { id: 'Corporate Training', label: 'Corporate', icon: Building2 }
                    ].map((mode) => {
                      const Icon = mode.icon;
                      const isSelected = formData.learningMode === mode.id;
                      return (
                        <button
                          key={mode.id}
                          type="button"
                          role="radio"
                          aria-checked={isSelected}
                          onClick={() => handleModeSelect(mode.id)}
                          className={`${styles.modeBtn} ${isSelected ? styles.modeBtnActive : ''}`}
                          disabled={isSubmitting}
                        >
                          <Icon size={14} />
                          <span>{mode.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Row 5: Message */}
                <div className={styles.fieldGroup}>
                  <label htmlFor="contact-message" className={styles.fieldLabel}>
                    <span>Message</span>
                    <span className={styles.reqAsterisk}>*</span>
                  </label>
                  <textarea 
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Tell us about your background, career goals, or any specific questions regarding batch dates, physical lab access, or fees..."
                    className={`${styles.textareaField} ${errors.message ? styles.inputError : ''}`}
                    disabled={isSubmitting}
                    required
                  />
                  {errors.message && <span className={styles.fieldErrorText}>{errors.message}</span>}
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={styles.submitBtn}
                >
                  {isSubmitting ? (
                    <>
                      <div className={styles.spinner} aria-hidden="true" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={16} />
                    </>
                  )}
                </button>

                {/* Micro-Trust Line */}
                <div className={styles.microTrust}>
                  <ShieldCheck size={14} className={styles.shieldIcon} />
                  <span>100% Confidential • Zero Spam Guarantee • Free Syllabus Included</span>
                </div>

              </form>
            )}

          </div>

          {/* =========================================================================
              RIGHT COLUMN: PROMOTIONAL DEMO CARD ("Experience I-Medita Before You Enroll")
              ========================================================================= */}
          <div className={styles.promoCard}>
            
            {/* Ambient Backlight */}
            <div className={styles.promoAmbient} aria-hidden="true" />

            <div className={styles.promoInner}>
              
              {/* Header */}
              <div className={styles.promoHeaderWrap}>
                <div className={styles.promoEyebrow}>
                  <Sparkles size={13} className={styles.promoSparkle} />
                  <span>Zero Obligation Practical Demo</span>
                </div>

                <h3 className={styles.promoHeading}>
                  Experience I-Medita Before You Enroll
                </h3>
                <p className={styles.promoDesc}>
                  Start with a FREE classroom or online demo. Inspect our physical Cisco hardware racks and get your career roadmap reviewed by a CCIE architect.
                </p>
              </div>

              {/* Campus Real Photography Spotlight */}
              <div className={styles.photoContainer}>
                <img 
                  src="https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/06/10071301/imedita_72.jpg" 
                  alt="I-Medita interactive classroom session with CCIE instructors"
                  className={styles.campusImg}
                  loading="lazy"
                />
                <div className={styles.photoOverlayBadge}>
                  <span className={styles.photoDot} />
                  <span>Interactive Smart Classrooms &amp; Live Cisco Racks</span>
                </div>
              </div>

              {/* 4 Value Pillars in Balanced 2x2 Grid */}
              <div className={styles.perksGrid}>
                {DEMO_PERKS.map((perk, idx) => {
                  const Icon = perk.icon;
                  return (
                    <div key={idx} className={styles.perkCard}>
                      <div className={styles.perkIconBox}>
                        <Icon size={16} />
                      </div>
                      <div className={styles.perkText}>
                        <h4 className={styles.perkTitle}>{perk.title}</h4>
                        <p className={styles.perkDesc}>{perk.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Rating Proof & CTA */}
              <div className={styles.promoFooter}>
                <div className={styles.reviewSnippet}>
                  <div className={styles.reviewStars}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="#F59E0B" className={styles.starIcon} />
                    ))}
                  </div>
                  <span className={styles.reviewScore}>4.9/5</span>
                  <span className={styles.reviewCount}>(11,200+ Verified Reviews)</span>
                </div>

                <button 
                  type="button" 
                  onClick={() => onOpenDemo ? onOpenDemo('Experience I-Medita Demo Card') : null}
                  className={styles.registerDemoBtn}
                >
                  <Calendar size={18} />
                  <span>Register for Free Demo</span>
                  <ArrowRight size={16} className={styles.promoArrow} />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
