import React, { useState } from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  Sparkles,
  ChevronDown,
  RotateCcw,
  BookOpen
} from 'lucide-react';
import styles from './ContactInquiryConsole.module.css';

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

const POPULAR_PROGRAMS = [
  'Cisco CCNA (200-301)',
  'Cisco CCNP Enterprise',
  'Cisco CCIE Security',
  'Palo Alto Firewall (PCNSE)',
  'AWS Cloud Networking',
  '100% Job Guarantee Track'
];

const ALL_PROGRAMS = [
  'Cisco CCNA (200-301)',
  'Cisco CCNP Enterprise',
  'Cisco CCNP Security',
  'Cisco CCIE Enterprise Infrastructure',
  'Cisco CCIE Security',
  'Palo Alto Firewall (PCNSE)',
  'Fortinet FortiGate Firewall',
  'Check Point Security (CCSA)',
  'EC-Council CEH (Certified Ethical Hacker)',
  'AWS Cloud Networking',
  'Network Automation with Python & APIs',
  '100% Job Guarantee Track',
  'Corporate Training for Teams'
];

const LEARNING_MODES = [
  'Classroom (Pune Center)',
  'Online Live Interactive',
  'Corporate Training'
];

export function ContactInquiryConsole() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+91',
    phone: '',
    program: POPULAR_PROGRAMS[0],
    learningMode: LEARNING_MODES[0],
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
      errs.message = 'Please provide a message or question';
    } else if (formData.message.trim().length < 8) {
      errs.message = 'Please describe your query in at least 8 characters';
    }

    return errs;
  };

  const handleInputChange = (field, value) => {
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
      // Focus first error field
      const firstFieldKey = Object.keys(validationErrors)[0];
      const el = document.getElementById(`inquiry-${firstFieldKey}`);
      if (el) el.focus();
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      countryCode: '+91',
      phone: '',
      program: POPULAR_PROGRAMS[0],
      learningMode: LEARNING_MODES[0],
      message: ''
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div className={styles.consoleCard} id="inquiry-console">
      {/* Console Header */}
      <div className={styles.consoleHeader}>
        <div className={styles.kickerRow}>
          <span className={styles.kickerBadge}>Consultation Console</span>
          <span className={styles.slaBadge}>
            <Clock size={12} className={styles.slaIcon} />
            <span>Response within 2 business days</span>
          </span>
        </div>
        
        <h2 className={styles.heading}>Get in Touch With Us</h2>
        <p className={styles.subheading}>
          Tell us what you're looking for, and our team will get back to you within 2 business days.
        </p>
      </div>

      {isSubmitted ? (
        /* In-place Success Confirmation */
        <div className={styles.successWrapper}>
          <div className={styles.successIconCircle}>
            <CheckCircle2 size={44} className={styles.successCheck} />
          </div>

          <span className={styles.successKicker}>Inquiry Received</span>
          <h3 className={styles.successTitle}>Thank You, {formData.name}!</h3>

          <p className={styles.successDesc}>
            Your consultation request has been forwarded to our senior admissions mentor.
            We will contact you within <strong>2 business days</strong> at:
          </p>

          <div className={styles.contactEchoBox}>
            <div className={styles.echoRow}>
              <Phone size={14} className={styles.echoIcon} />
              <span>{formData.countryCode} {formData.phone}</span>
            </div>
            <div className={styles.echoRow}>
              <Mail size={14} className={styles.echoIcon} />
              <span>{formData.email}</span>
            </div>
          </div>

          <div className={styles.summaryTags}>
            <span className={styles.summaryTag}>
              <strong>Program:</strong> {formData.program}
            </span>
            <span className={styles.summaryTag}>
              <strong>Mode:</strong> {formData.learningMode}
            </span>
          </div>

          <div className={styles.successNextSteps}>
            <h4 className={styles.nextStepsTitle}>What happens next?</h4>
            <ul className={styles.nextStepsList}>
              <li>You will receive the complete course syllabus & lab topology via email/WhatsApp.</li>
              <li>A technical trainer will evaluate your current background and recommend the optimal batch track.</li>
              <li>You can request a complimentary 2-hour classroom or online live demo session.</li>
            </ul>
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
        /* The Interactive Inquiry Form */
        <form onSubmit={handleSubmit} noValidate className={styles.form}>
          
          {/* Quick Select Program Chips */}
          <div className={styles.sectionField}>
            <label className={styles.fieldLabel}>
              <BookOpen size={14} className={styles.labelIcon} />
              <span>Interested Training Program <span className={styles.req}>*</span></span>
            </label>

            {/* Quick Clickable Chips */}
            <div className={styles.chipsRow}>
              {POPULAR_PROGRAMS.map((prog) => {
                const isSelected = formData.program === prog;
                return (
                  <button
                    key={prog}
                    type="button"
                    onClick={() => handleInputChange('program', prog)}
                    className={`${styles.chipBtn} ${isSelected ? styles.chipActive : ''}`}
                  >
                    <span>{prog}</span>
                  </button>
                );
              })}
            </div>

            {/* Full Select Dropdown */}
            <div className={styles.selectWrapper}>
              <select
                id="inquiry-program"
                value={formData.program}
                onChange={(e) => handleInputChange('program', e.target.value)}
                className={`${styles.selectInput} ${errors.program ? styles.inputError : ''}`}
                aria-label="Interested Training Program"
              >
                {ALL_PROGRAMS.map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
              <ChevronDown size={16} className={styles.selectArrow} />
            </div>
            {errors.program && <span className={styles.errorText}>{errors.program}</span>}
          </div>

          {/* Preferred Learning Mode Segments */}
          <div className={styles.sectionField}>
            <label className={styles.fieldLabel}>
              <span>Preferred Learning Mode</span>
            </label>
            <div className={styles.modeSegments}>
              {LEARNING_MODES.map((mode) => {
                const isActive = formData.learningMode === mode;
                return (
                  <button
                    key={mode}
                    type="button"
                    onClick={() => handleInputChange('learningMode', mode)}
                    className={`${styles.modeBtn} ${isActive ? styles.modeActive : ''}`}
                  >
                    {mode}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2-Column: Full Name & Email */}
          <div className={styles.fieldsGrid2}>
            
            {/* Full Name */}
            <div className={styles.fieldGroup}>
              <label htmlFor="inquiry-name" className={styles.fieldLabel}>
                <User size={14} className={styles.labelIcon} />
                <span>Full Name <span className={styles.req}>*</span></span>
              </label>
              <div className={styles.inputWrapper}>
                <input
                  type="text"
                  id="inquiry-name"
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className={`${styles.textInput} ${errors.name ? styles.inputError : ''}`}
                  autoComplete="name"
                />
              </div>
              {errors.name && <span className={styles.errorText}>{errors.name}</span>}
            </div>

            {/* Email Address */}
            <div className={styles.fieldGroup}>
              <label htmlFor="inquiry-email" className={styles.fieldLabel}>
                <Mail size={14} className={styles.labelIcon} />
                <span>Email Address <span className={styles.req}>*</span></span>
              </label>
              <div className={styles.inputWrapper}>
                <input
                  type="email"
                  id="inquiry-email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`${styles.textInput} ${errors.email ? styles.inputError : ''}`}
                  autoComplete="email"
                />
              </div>
              {errors.email && <span className={styles.errorText}>{errors.email}</span>}
            </div>

          </div>

          {/* Phone Number with Country Code */}
          <div className={styles.fieldGroup}>
            <label htmlFor="inquiry-phone" className={styles.fieldLabel}>
              <Phone size={14} className={styles.labelIcon} />
              <span>Phone Number <span className={styles.req}>*</span></span>
            </label>
            
            <div className={styles.phoneInputGroup}>
              <div className={styles.countryCodeSelectWrap}>
                <select
                  value={formData.countryCode}
                  onChange={(e) => handleInputChange('countryCode', e.target.value)}
                  className={styles.countryCodeSelect}
                  aria-label="Country Code"
                >
                  {COUNTRY_CODES.map((c) => (
                    <option key={c.code} value={c.code}>
                      {c.code}
                    </option>
                  ))}
                </select>
                <ChevronDown size={14} className={styles.countryArrow} />
              </div>

              <input
                type="tel"
                id="inquiry-phone"
                placeholder="Enter 10-digit mobile number"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className={`${styles.phoneInput} ${errors.phone ? styles.inputError : ''}`}
                autoComplete="tel"
              />
            </div>
            {errors.phone && <span className={styles.errorText}>{errors.phone}</span>}
          </div>

          {/* Message / Query */}
          <div className={styles.fieldGroup}>
            <label htmlFor="inquiry-message" className={styles.fieldLabel}>
              <MessageSquare size={14} className={styles.labelIcon} />
              <span>Message or Specific Questions <span className={styles.req}>*</span></span>
            </label>
            <textarea
              id="inquiry-message"
              rows={4}
              placeholder="Tell us about your background, career goals, or any specific questions you have about our Cisco/Security training..."
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              className={`${styles.textareaInput} ${errors.message ? styles.inputError : ''}`}
            />
            {errors.message && <span className={styles.errorText}>{errors.message}</span>}
          </div>

          {/* Submit Action */}
          <div className={styles.submitRow}>
            <button
              type="submit"
              disabled={isSubmitting}
              className={styles.submitBtn}
            >
              {isSubmitting ? (
                <>
                  <span className={styles.btnSpinner} />
                  <span>Submitting Inquiry...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send size={16} />
                </>
              )}
            </button>
          </div>

          {/* Trust Guarantees */}
          <div className={styles.trustFooter}>
            <div className={styles.trustItem}>
              <ShieldCheck size={14} className={styles.trustIcon} />
              <span>100% Privacy Protected</span>
            </div>
            <span className={styles.trustDot}>•</span>
            <div className={styles.trustItem}>
              <span>Zero Spam Guarantee</span>
            </div>
            <span className={styles.trustDot}>•</span>
            <div className={styles.trustItem}>
              <span>Official Syllabus & Lab Kit Included</span>
            </div>
          </div>

        </form>
      )}
    </div>
  );
}
