import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Server, 
  Award, 
  Clock, 
  Briefcase, 
  Star,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import styles from './ContactDemoSpotlight.module.css';

const SPOTLIGHT_PERKS = [
  {
    icon: Server,
    title: 'Multi-Vendor Hardware Racks',
    desc: 'Physical Cisco Nexus, ISR Routers, and Palo Alto firewalls — zero simulated packet delays.'
  },
  {
    icon: Award,
    title: 'CCIE Working Architects',
    desc: 'Direct interactive lectures and 1-on-1 design mentoring from dual & triple CCIE certified architects.'
  },
  {
    icon: Clock,
    title: '24×7 Cloud Lab Availability',
    desc: 'Access your dedicated physical pod remotely with high-speed VPN terminals anytime from home.'
  },
  {
    icon: Briefcase,
    title: '100% Placement Assistance',
    desc: 'Comprehensive technical mock interviews, resume rebuilding, and corporate partner drive invites.'
  }
];

export function ContactDemoSpotlight({ onOpenDemo }) {
  return (
    <section className={styles.spotlightSection} aria-labelledby="demo-spotlight-heading">
      <div className={styles.container}>
        
        {/* Banner Box */}
        <div className={styles.spotlightBanner}>
          
          {/* Subtle Ambient Tech Background */}
          <div className={styles.ambientGlow} aria-hidden="true" />
          <div className={styles.gridOverlay} aria-hidden="true" />

          {/* Left Column: Headline & Action */}
          <div className={styles.leftContent}>
            
            <div className={styles.badgeRow}>
              <span className={styles.trialPill}>
                <Sparkles size={13} className={styles.sparkleIcon} />
                <span>Zero Obligation Trial</span>
              </span>
              <span className={styles.freeBadge}>100% Free Demo Session</span>
            </div>

            <h2 id="demo-spotlight-heading" className={styles.heading}>
              Experience I-Medita Before You Enroll
            </h2>

            <p className={styles.description}>
              Invest in your learning today! Start with a FREE classroom or online live demo session. 
              Inspect our physical hardware racks, experience our teaching methodology, and get your career roadmap reviewed by a CCIE architect.
            </p>

            <div className={styles.ctaRow}>
              <button
                type="button"
                onClick={() => onOpenDemo ? onOpenDemo('Contact Page Demo Spotlight') : null}
                className={styles.registerBtn}
                title="Register for a Free 2-Hour Practical Demo"
              >
                <span>Register for Free Demo</span>
                <ArrowRight size={16} className={styles.btnArrow} />
              </button>

              <div className={styles.ratingBox}>
                <div className={styles.stars}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>
                <span className={styles.ratingText}>
                  <strong>4.9/5</strong> (11,200+ Reviews)
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: 4 Key Value Pillars Grid */}
          <div className={styles.perksGrid}>
            {SPOTLIGHT_PERKS.map((perk, idx) => {
              const Icon = perk.icon;
              return (
                <div key={idx} className={styles.perkCard}>
                  <div className={styles.perkIconBox}>
                    <Icon size={18} />
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

      </div>
    </section>
  );
}
