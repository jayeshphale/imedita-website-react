import React, { useState } from 'react';
import { 
  Server, 
  Award, 
  Calendar, 
  ShieldCheck, 
  Star, 
  Send, 
  Lock, 
  CheckCircle2, 
  Sparkles,
  User,
  Mail,
  Phone,
  Globe,
  MapPin,
  MessageSquare
} from 'lucide-react';
import styles from './DemoRequestSection.module.css';

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

const TRAINING_TYPES = [
  { value: 'Classroom Pune', label: 'Classroom Training (Pune Center)' },
  { value: 'Online Live', label: 'Online Live Interactive Batch' },
  { value: '1-on-1 Mentorship', label: '1-on-1 Dedicated Mentorship' },
  { value: 'Corporate Training', label: 'Corporate Team Training' }
];

const PERKS = [
  {
    icon: Server,
    title: 'Live Cisco Multi-Vendor Rack Access',
    desc: 'Get direct terminal CLI access to Cisco Nexus, ASA firewalls, and SD-WAN hardware topologies during your trial demo.'
  },
  {
    icon: Calendar,
    title: 'Flexible Demo Scheduling',
    desc: 'Choose weekday evening or weekend morning slots that fit your professional workday without conflict.'
  },
  {
    icon: ShieldCheck,
    title: '100% Zero-Spam Assurance',
    desc: 'We value your privacy. Your contact details are strictly used to coordinate your requested lab demo session.'
  }
];

export function DemoRequestSection({ selectedCourse = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+91',
    phone: '',
    trainingType: 'Classroom Pune',
    country: 'India',
    city: '',
    inquiry: selectedCourse ? `I am interested in attending a live demo session for: ${selectedCourse}.` : ''
  });

  React.useEffect(() => {
    if (selectedCourse) {
      setFormData((prev) => ({
        ...prev,
        inquiry: `I am interested in attending a live demo session for: ${selectedCourse}.`
      }));
    }
  }, [selectedCourse]);

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Please enter a valid full name';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Contact number is required';
    } else if (!/^\d{7,14}$/.test(formData.phone.replace(/[\s-]/g, ''))) {
      newErrors.phone = 'Please enter a valid 7 to 14 digit phone number';
    }

    if (!formData.trainingType) {
      newErrors.trainingType = 'Please select a training type';
    }

    if (!formData.country.trim()) {
      newErrors.country = 'Country/Region is required';
    }

    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
    }

    if (!formData.inquiry.trim()) {
      newErrors.inquiry = 'Please specify the course demo or inquiry';
    } else if (formData.inquiry.trim().length < 10) {
      newErrors.inquiry = 'Please provide at least 10 characters describing your interest';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
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

    // Simulate network submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 750);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      countryCode: '+91',
      phone: '',
      trainingType: 'Classroom Pune',
      country: 'India',
      city: '',
      inquiry: ''
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section className={styles.demoSection} id="request-demo" aria-label="Request For Demo">
      {/* =========================================================================
          BACKGROUND ATMOSPHERE (HERO SECTION MATCHING BLUEPRINT & GLOW)
          ========================================================================= */}
      {/* 40px Engineering Blueprint Grid Mesh */}
      <div className={styles.gridOverlay} aria-hidden="true" />

      {/* Breathing Ambient Radial Glow */}
      <div className={styles.ambientGlow} aria-hidden="true" />

      {/* Concentric Rotating Orbit Ring */}
      <div className={styles.orbitRingBg} aria-hidden="true" />

      {/* Floating High-Tech Cyan & Blue Particle Dots */}
      <span className={styles.dotCyan} aria-hidden="true" />
      <span className={styles.dotBlue} aria-hidden="true" />

      {/* Left Vector Curves (Enterprise Blueprint Lines) */}
      <svg
        className={styles.bgVectorCurves}
        viewBox="0 0 500 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M-80,60 C120,130 200,320 160,620"
          strokeWidth="1.2"
        />
        <path
          d="M-30,10 C180,180 280,380 220,640"
          strokeWidth="0.8"
          strokeDasharray="5 5"
        />
        <path
          d="M10,-40 C240,210 330,440 280,670"
          strokeWidth="0.6"
        />
      </svg>

      <div className={styles.sectionContainer}>
        <div className={styles.splitGrid}>
          
          {/* =========================================================================
              LEFT COLUMN: VALUE PROPOSITIONS & LAB DEMO PERKS
              ========================================================================= */}
          <div className={`${styles.leftCol} scroll-reveal-left`}>
            <div className={styles.leftColContent}>
              <div className={styles.eyebrowBadge}>
                <Sparkles size={13} className={styles.eyebrowIcon} />
                <span>EXPERIENCE I-MEDITA EXCELLENCE</span>
              </div>

              <h2 className={styles.mainHeading}>
                Experience Our Lab Infrastructure with a <span className={styles.headingHighlight}>Free Live Demo</span>
              </h2>

              <p className={styles.subtext}>
                Book an interactive one-on-one demo session with our senior certified instructors. Explore our physical hardware racks, walk through modern topologies, and see why 18,000+ engineers trust I-MEDITA.
              </p>

              <div className={`${styles.perksList} scroll-stagger-cards`}>
                {PERKS.map((perk, idx) => {
                  const IconComponent = perk.icon;
                  return (
                    <div key={idx} className={styles.perkItem}>
                      <div className={styles.perkIconWrapper}>
                        <IconComponent size={18} strokeWidth={2.2} />
                      </div>
                      <div className={styles.perkContent}>
                        <h3 className={styles.perkTitle}>{perk.title}</h3>
                        <p className={styles.perkDesc}>{perk.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className={styles.trustProofStrip}>
              <div className={styles.ratingBox}>
                <span>4.9 / 5.0</span>
                <div className={styles.ratingStars} aria-label="5 star rating">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} fill="#F59E0B" stroke="#F59E0B" />
                  ))}
                </div>
              </div>
              <div className={styles.ratingText}>
                Trusted by 1,200+ Reviews across Google &amp; Trustpilot
              </div>
            </div>
          </div>

          {/* =========================================================================
              RIGHT COLUMN: "REQUEST FOR DEMO" FORM CARD
              ========================================================================= */}
          <div className={`${styles.formCard} scroll-reveal-right`}>
            {isSubmitted ? (
              <div className={styles.successContainer}>
                <div className={styles.successIconWrapper}>
                  <CheckCircle2 size={38} strokeWidth={2.5} />
                </div>
                <h3 className={styles.successTitle}>Demo Request Submitted!</h3>
                <p className={styles.successDesc}>
                  Thank you, <strong>{formData.name}</strong>. Our senior academic counselor will reach out to <strong>{formData.email}</strong> within 2 business hours to schedule your hands-on live demo.
                </p>

                <div className={styles.successDetailsCard}>
                  <div className={styles.detailsRow}>
                    <span className={styles.detailsLabel}>Training Mode:</span>
                    <span className={styles.detailsVal}>{formData.trainingType}</span>
                  </div>
                  <div className={styles.detailsRow}>
                    <span className={styles.detailsLabel}>Contact:</span>
                    <span className={styles.detailsVal}>{formData.countryCode} {formData.phone}</span>
                  </div>
                  <div className={styles.detailsRow}>
                    <span className={styles.detailsLabel}>Location:</span>
                    <span className={styles.detailsVal}>{formData.city}, {formData.country}</span>
                  </div>
                </div>

                <button 
                  type="button" 
                  className={styles.resetBtn}
                  onClick={handleReset}
                >
                  Book Another Demo
                </button>
              </div>
            ) : (
              <>
                <div className={styles.formHeader}>
                  <h3 className={styles.formTitle}>REQUEST FOR DEMO</h3>
                  <p className={styles.formSubtitle}>
                    Fill in your details below to schedule your personalized live demo session.
                  </p>
                </div>

                <form className={styles.demoForm} onSubmit={handleSubmit} noValidate>
                  {/* Row 1: Name* | Email* */}
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="demo-name" className={styles.formLabel}>
                        Full Name<span className={styles.requiredAsterisk}>*</span>
                      </label>
                      <div className={styles.inputWrapper}>
                        <User size={14} className={styles.inputIcon} />
                        <input
                          id="demo-name"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. John Doe"
                          className={`${styles.formInput} ${styles.formInputWithIcon} ${errors.name ? styles.inputError : ''}`}
                          disabled={isSubmitting}
                        />
                      </div>
                      {errors.name && <span className={styles.errorText}>{errors.name}</span>}
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="demo-email" className={styles.formLabel}>
                        Email Address<span className={styles.requiredAsterisk}>*</span>
                      </label>
                      <div className={styles.inputWrapper}>
                        <Mail size={14} className={styles.inputIcon} />
                        <input
                          id="demo-email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john.doe@company.com"
                          className={`${styles.formInput} ${styles.formInputWithIcon} ${errors.email ? styles.inputError : ''}`}
                          disabled={isSubmitting}
                        />
                      </div>
                      {errors.email && <span className={styles.errorText}>{errors.email}</span>}
                    </div>
                  </div>

                  {/* Row 2: Phone/Country Code dropdown + Phone Input | Training Type* dropdown */}
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="demo-phone" className={styles.formLabel}>
                        Phone Number<span className={styles.requiredAsterisk}>*</span>
                      </label>
                      <div className={styles.phoneInputGroup}>
                        <select
                          name="countryCode"
                          value={formData.countryCode}
                          onChange={handleChange}
                          className={styles.countryCodeSelect}
                          aria-label="Country Code"
                          disabled={isSubmitting}
                        >
                          {COUNTRY_CODES.map((item) => (
                            <option key={item.code} value={item.code}>
                              {item.code} ({item.country})
                            </option>
                          ))}
                        </select>
                        <div className={styles.inputWrapper} style={{ flex: 1 }}>
                          <Phone size={14} className={styles.inputIcon} />
                          <input
                            id="demo-phone"
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="98765 43210"
                            className={`${styles.formInput} ${styles.formInputWithIcon} ${errors.phone ? styles.inputError : ''}`}
                            disabled={isSubmitting}
                          />
                        </div>
                      </div>
                      {errors.phone && <span className={styles.errorText}>{errors.phone}</span>}
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="demo-training-type" className={styles.formLabel}>
                        Training Type<span className={styles.requiredAsterisk}>*</span>
                      </label>
                      <select
                        id="demo-training-type"
                        name="trainingType"
                        value={formData.trainingType}
                        onChange={handleChange}
                        className={`${styles.formSelect} ${errors.trainingType ? styles.inputError : ''}`}
                        disabled={isSubmitting}
                      >
                        {TRAINING_TYPES.map((t) => (
                          <option key={t.value} value={t.value}>
                            {t.label}
                          </option>
                        ))}
                      </select>
                      {errors.trainingType && <span className={styles.errorText}>{errors.trainingType}</span>}
                    </div>
                  </div>

                  {/* Row 3: Country/Region* | City* */}
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="demo-country" className={styles.formLabel}>
                        Country/Region<span className={styles.requiredAsterisk}>*</span>
                      </label>
                      <div className={styles.inputWrapper}>
                        <Globe size={14} className={styles.inputIcon} />
                        <input
                          id="demo-country"
                          type="text"
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          placeholder="e.g. India, United States"
                          className={`${styles.formInput} ${styles.formInputWithIcon} ${errors.country ? styles.inputError : ''}`}
                          disabled={isSubmitting}
                        />
                      </div>
                      {errors.country && <span className={styles.errorText}>{errors.country}</span>}
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="demo-city" className={styles.formLabel}>
                        City<span className={styles.requiredAsterisk}>*</span>
                      </label>
                      <div className={styles.inputWrapper}>
                        <MapPin size={14} className={styles.inputIcon} />
                        <input
                          id="demo-city"
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          placeholder="e.g. Pune, Bangalore, Dubai"
                          className={`${styles.formInput} ${styles.formInputWithIcon} ${errors.city ? styles.inputError : ''}`}
                          disabled={isSubmitting}
                        />
                      </div>
                      {errors.city && <span className={styles.errorText}>{errors.city}</span>}
                    </div>
                  </div>

                  {/* Row 4: Full-width Textarea: Inquiry or specific course demo */}
                  <div className={styles.formGroup}>
                    <label htmlFor="demo-inquiry" className={styles.formLabel}>
                      Inquiry / Course Demo Interest<span className={styles.requiredAsterisk}>*</span>
                    </label>
                    <div className={styles.inputWrapper}>
                      <MessageSquare size={14} className={styles.inputIcon} style={{ top: '0.75rem', bottom: 'auto' }} />
                      <textarea
                        id="demo-inquiry"
                        name="inquiry"
                        rows={2}
                        value={formData.inquiry}
                        onChange={handleChange}
                        placeholder="Specify course demo or questions here.*"
                        className={`${styles.formTextarea} ${styles.formInputWithIcon} ${errors.inquiry ? styles.inputError : ''}`}
                        disabled={isSubmitting}
                      />
                    </div>
                    {errors.inquiry && <span className={styles.errorText}>{errors.inquiry}</span>}
                  </div>

                  {/* Row 5: Primary submit button Submit with brand blue #0066FF and hover lift */}
                  <button
                    type="submit"
                    className={styles.submitBtn}
                    disabled={isSubmitting}
                  >
                    <span>{isSubmitting ? 'Submitting Request...' : 'Submit Request for Demo'}</span>
                    <Send size={15} className={styles.submitIcon} />
                  </button>

                  <div className={styles.privacyPromise}>
                    <Lock size={12} className={styles.lockIcon} />
                    <span>Your privacy is protected. We will never share or sell your details.</span>
                  </div>
                </form>
              </>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

export default DemoRequestSection;

