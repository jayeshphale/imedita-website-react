import React, { useState } from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  BookOpen, 
  Monitor, 
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
  ArrowRight
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
      errs.message = 'Please enter at least 8 characters';
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Reliable simulated network submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
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
    <section id="contact-form" className={styles.sectionWrapper} aria-labelledby="form-section-heading">
      <div className={styles.container}>
        
        <div className={styles.twoColLayout}>
          
          {/* =========================================================================
              LEFT COLUMN: CONTACT & ENQUIRY FORM
              ========================================================================= */}
          <div className={styles.formCol}>
            <div className={styles.formCard}>
              
              <div className={styles.formHeader}>
                <span className={styles.formKicker}>Direct Admissions Desk</span>
                <h2 id="form-section-heading" className={styles.formTitle}>
                  Get in Touch With Us
                </h2>
                <p className={styles.formDesc}>
                  Tell us what you're looking for, and our team will get back to you within 2 business days.
                </p>
              </div>

              {isSubmitted ? (
                <div className={styles.successState}>
                  <div className={styles.successIconBox}>
                    <CheckCircle2 size={44} />
                  </div>
                  <h3 className={styles.successTitle}>Thank You, {formData.name}!</h3>
                  <p className={styles.successDesc}>
                    Your enquiry for <strong>{formData.program}</strong> has been received by our Admissions & Mentorship Desk.
                  </p>
                  <div className={styles.successDetailsBox}>
                    <div className={styles.detailItem}>
                      <span className={styles.detailLabel}>Contact Email:</span>
                      <span className={styles.detailValue}>{formData.email}</span>
                    </div>
                    <div className={styles.detailItem}>
                      <span className={styles.detailLabel}>Contact Phone:</span>
                      <span className={styles.detailValue}>{formData.countryCode} {formData.phone}</span>
                    </div>
                    <div className={styles.detailItem}>
                      <span className={styles.detailLabel}>Preferred Mode:</span>
                      <span className={styles.detailValue}>{formData.learningMode}</span>
                    </div>
                  </div>
                  <p className={styles.successNote}>
                    A Senior CCIE Career Advisor will connect with you shortly with complete batch dates, fee breakdowns, and syllabus PDFs.
                  </p>
                  <button 
                    type="button" 
                    onClick={handleReset}
                    className={styles.resetBtn}
                  >
                    Submit Another Query
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form} noValidate>
                  
                  {/* Field: Full Name */}
                  <div className={styles.fieldGroup}>
                    <label htmlFor="contact-name" className={styles.label}>
                      Full Name <span className={styles.required}>*</span>
                    </label>
                    <div className={`${styles.inputWrapper} ${errors.name ? styles.hasError : ''}`}>
                      <User size={18} className={styles.fieldIcon} />
                      <input 
                        id="contact-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Rahul Sharma"
                        className={styles.input}
                        required
                      />
                    </div>
                    {errors.name && <span className={styles.errorText}>{errors.name}</span>}
                  </div>

                  {/* Two-Column: Email & Phone */}
                  <div className={styles.twoInputsGrid}>
                    
                    {/* Field: Email */}
                    <div className={styles.fieldGroup}>
                      <label htmlFor="contact-email" className={styles.label}>
                        Email Address <span className={styles.required}>*</span>
                      </label>
                      <div className={`${styles.inputWrapper} ${errors.email ? styles.hasError : ''}`}>
                        <Mail size={18} className={styles.fieldIcon} />
                        <input 
                          id="contact-email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="name@example.com"
                          className={styles.input}
                          required
                        />
                      </div>
                      {errors.email && <span className={styles.errorText}>{errors.email}</span>}
                    </div>

                    {/* Field: Phone */}
                    <div className={styles.fieldGroup}>
                      <label htmlFor="contact-phone" className={styles.label}>
                        Phone Number <span className={styles.required}>*</span>
                      </label>
                      <div className={styles.phoneInputGroup}>
                        <select 
                          name="countryCode" 
                          value={formData.countryCode} 
                          onChange={handleChange}
                          className={styles.countrySelect}
                          aria-label="Country Code"
                        >
                          {COUNTRY_CODES.map((c) => (
                            <option key={c.code} value={c.code}>{c.label}</option>
                          ))}
                        </select>
                        <div className={`${styles.inputWrapper} ${styles.phoneInputWrap} ${errors.phone ? styles.hasError : ''}`}>
                          <Phone size={17} className={styles.fieldIcon} />
                          <input 
                            id="contact-phone"
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="98765 43210"
                            className={styles.input}
                            required
                          />
                        </div>
                      </div>
                      {errors.phone && <span className={styles.errorText}>{errors.phone}</span>}
                    </div>

                  </div>

                  {/* Field: Interested Training Program */}
                  <div className={styles.fieldGroup}>
                    <label htmlFor="contact-program" className={styles.label}>
                      Interested Training Program <span className={styles.required}>*</span>
                    </label>
                    <div className={styles.inputWrapper}>
                      <BookOpen size={18} className={styles.fieldIcon} />
                      <select 
                        id="contact-program"
                        name="program"
                        value={formData.program}
                        onChange={handleChange}
                        className={`${styles.input} ${styles.select}`}
                      >
                        {TRAINING_PROGRAMS.map((prog, idx) => (
                          <option key={idx} value={prog}>{prog}</option>
                        ))}
                      </select>
                    </div>
                    {errors.program && <span className={styles.errorText}>{errors.program}</span>}
                  </div>

                  {/* Field: Preferred Learning Mode */}
                  <div className={styles.fieldGroup}>
                    <label className={styles.label}>
                      Preferred Learning Mode
                    </label>
                    <div className={styles.modeToggleGroup}>
                      {[
                        'Classroom (Pune Center)',
                        'Online Live Interactive',
                        'Corporate Team Training'
                      ].map((m) => (
                        <button
                          key={m}
                          type="button"
                          onClick={() => setFormData((prev) => ({ ...prev, learningMode: m }))}
                          className={`${styles.modeBtn} ${formData.learningMode === m ? styles.modeBtnActive : ''}`}
                        >
                          <Monitor size={14} className={styles.modeIcon} />
                          <span>{m}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Field: Message */}
                  <div className={styles.fieldGroup}>
                    <label htmlFor="contact-message" className={styles.label}>
                      Message / Queries <span className={styles.required}>*</span>
                    </label>
                    <div className={`${styles.inputWrapper} ${styles.textareaWrapper} ${errors.message ? styles.hasError : ''}`}>
                      <MessageSquare size={18} className={styles.textareaIcon} />
                      <textarea 
                        id="contact-message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your educational background, current role, or questions regarding syllabus, lab equipment, or batch timings..."
                        rows={4}
                        className={styles.textarea}
                        required
                      />
                    </div>
                    {errors.message && <span className={styles.errorText}>{errors.message}</span>}
                  </div>

                  {/* Privacy / Security Notice */}
                  <div className={styles.privacyNote}>
                    <ShieldCheck size={16} className={styles.privacyIcon} />
                    <span>Your details are 100% confidential. No spam, ever.</span>
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className={styles.submitBtn}
                  >
                    {isSubmitting ? (
                      <span className={styles.submittingState}>
                        <span className={styles.btnSpinner} />
                        Sending Inquiry...
                      </span>
                    ) : (
                      <>
                        <Send size={16} className={styles.btnSendIcon} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

          {/* =========================================================================
              RIGHT COLUMN: PROMOTIONAL "EXPERIENCE BEFORE ENROLLING" CARD
              ========================================================================= */}
          <div className={styles.promoCol}>
            <div className={styles.promoCard}>
              
              {/* Card Top Pill */}
              <div className={styles.promoBadge}>
                <Sparkles size={14} className={styles.sparkleIcon} />
                <span>Zero Obligation Trial</span>
              </div>

              {/* Promo Heading & Description */}
              <h3 className={styles.promoHeading}>
                Experience I-Medita Before You Enroll
              </h3>
              <p className={styles.promoDesc}>
                Invest in your learning today! Start with a FREE classroom or online demo session.
              </p>

              {/* Action Button */}
              <button
                type="button"
                onClick={() => onOpenDemo ? onOpenDemo('Experience Demo Promo Card') : null}
                className={styles.promoCtaBtn}
              >
                <span>Register for Free Demo</span>
                <ArrowRight size={16} />
              </button>

              {/* Feature Highlights Grid */}
              <div className={styles.featuresList}>
                
                <div className={styles.featureItem}>
                  <div className={styles.featureIconBox}>
                    <Server size={18} />
                  </div>
                  <div className={styles.featureText}>
                    <h4 className={styles.featureTitle}>Multi-Vendor Cisco & Firewall Racks</h4>
                    <p className={styles.featureDesc}>Direct terminal access to real physical hardware topologies, not just packet tracer simulators.</p>
                  </div>
                </div>

                <div className={styles.featureItem}>
                  <div className={styles.featureIconBox}>
                    <Award size={18} />
                  </div>
                  <div className={styles.featureText}>
                    <h4 className={styles.featureTitle}>CCIE Certified Industry Mentors</h4>
                    <p className={styles.featureDesc}>Learn directly from verified CCIE enterprise architects with 15+ years active field experience.</p>
                  </div>
                </div>

                <div className={styles.featureItem}>
                  <div className={styles.featureIconBox}>
                    <Clock size={18} />
                  </div>
                  <div className={styles.featureText}>
                    <h4 className={styles.featureTitle}>24×7 Practical Lab Availability</h4>
                    <p className={styles.featureDesc}>Pune center workstation access and 24/7 dedicated remote VPN lab access for hands-on practice.</p>
                  </div>
                </div>

                <div className={styles.featureItem}>
                  <div className={styles.featureIconBox}>
                    <Briefcase size={18} />
                  </div>
                  <div className={styles.featureText}>
                    <h4 className={styles.featureTitle}>Dedicated Placement Assistance</h4>
                    <p className={styles.featureDesc}>Rigorous mock interviews, resume rebuilding, and direct interviews with top networking MNCs.</p>
                  </div>
                </div>

              </div>

              {/* Bottom Social Proof Bar */}
              <div className={styles.socialProofBox}>
                <div className={styles.starsGroup}>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={15} fill="#FBBF24" color="#FBBF24" />
                  ))}
                </div>
                <div className={styles.proofText}>
                  <strong>4.9 / 5 Average Rating</strong> based on 11,200+ working engineers trained at I-Medita.
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
