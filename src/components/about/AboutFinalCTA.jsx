import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Calendar, 
  CheckCircle2, 
  PhoneCall, 
  MessageSquare,
  Sparkles,
  ShieldCheck,
  Star
} from 'lucide-react';
import styles from './AboutFinalCTA.module.css';

/**
 * SECTION 7: Career & Learning CTA
 * High-contrast Deep Corporate Navy card (#0a1628), matching the promo card style from Contact Page!
 */
export function AboutFinalCTA({ onOpenDemo }) {
  return (
    <section className={styles.ctaSection} aria-label="Start Your Technology Career Journey">
      <div className={styles.container}>
        
        {/* Navy Enclosure Card */}
        <div className={styles.navyBox}>
          
          {/* Subtle Ambient Orbs */}
          <div className={styles.glowOrb1} aria-hidden="true" />
          <div className={styles.glowOrb2} aria-hidden="true" />

          <div className={styles.contentGrid}>
            
            {/* Left Content */}
            <div className={styles.textContent}>
              
              <div className={styles.eyebrowBadge}>
                <Sparkles size={13} className={styles.badgeIcon} />
                <span>START YOUR CAREER TRANSFORMATION</span>
              </div>

              <h2 className={styles.heading}>
                Your Next Career Milestone <span className={styles.headingAccent}>Starts Here.</span>
              </h2>

              <p className={styles.description}>
                Whether you're starting your technology journey or advancing your professional skills, 
                I-Medita provides the hands-on hardware training, expert mentorship, and industry credentials to help you move forward.
              </p>

              {/* Action Buttons */}
              <div className={styles.actionRow}>
                <Link 
                  to="/courses/ccna-training" 
                  className={styles.primaryBtn}
                  title="Explore Cisco and Cyber Security training programs"
                >
                  <span>Explore Training Programs</span>
                  <ArrowRight size={16} />
                </Link>

                <button 
                  type="button" 
                  onClick={() => onOpenDemo && onOpenDemo('About Us Final CTA')}
                  className={styles.demoBtn}
                  title="Book a free live classroom or online demo session"
                >
                  <Calendar size={16} />
                  <span>Book a Free Demo</span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className={styles.trustStrip}>
                <div className={styles.trustItem}>
                  <CheckCircle2 size={15} className={styles.checkIcon} />
                  <span>100% Free Demo Session</span>
                </div>
                <div className={styles.trustDot}>•</div>
                <div className={styles.trustItem}>
                  <CheckCircle2 size={15} className={styles.checkIcon} />
                  <span>Direct Architect Q&A</span>
                </div>
                <div className={styles.trustDot}>•</div>
                <div className={styles.trustItem}>
                  <CheckCircle2 size={15} className={styles.checkIcon} />
                  <span>Physical Cisco Lab Tour</span>
                </div>
              </div>

            </div>

            {/* Right Quick Contact Card */}
            <div className={styles.quickCard}>
              <div className={styles.quickCardInner}>
                <div className={styles.quickHeader}>
                  <div className={styles.ratingStars}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="#F59E0B" color="#F59E0B" />
                    ))}
                  </div>
                  <span className={styles.ratingText}>4.9/5 (11,200+ Reviews)</span>
                </div>

                <h3 className={styles.quickTitle}>Speak with an Admissions Counselor</h3>
                <p className={styles.quickDesc}>
                  Need guidance on course syllabus, upcoming batch timings, or fee plans? Our advisors are ready to help.
                </p>

                <div className={styles.contactLinks}>
                  <a href="tel:+918750004411" className={styles.callLink}>
                    <div className={styles.linkIconBox}>
                      <PhoneCall size={16} />
                    </div>
                    <div className={styles.linkText}>
                      <span className={styles.linkLabel}>Call Admissions Desk</span>
                      <span className={styles.linkValue}>+91 8750004411</span>
                    </div>
                  </a>

                  <a 
                    href="https://api.whatsapp.com/send?phone=918750004411&text=Hello%20I-Medita%20Team%2C%20I%20want%20to%20know%20more%20about%20your%20training%20programs." 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={styles.whatsappLink}
                  >
                    <div className={styles.linkIconBoxGreen}>
                      <MessageSquare size={16} />
                    </div>
                    <div className={styles.linkText}>
                      <span className={styles.linkLabel}>Chat on WhatsApp</span>
                      <span className={styles.linkValue}>Instant Reply</span>
                    </div>
                  </a>
                </div>

                <div className={styles.cardFootnote}>
                  <ShieldCheck size={13} className={styles.footIcon} />
                  <span>Zero spam guarantee • 100% confidential inquiry</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default AboutFinalCTA;
