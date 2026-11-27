import React from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Server, 
  Award, 
  Headphones 
} from 'lucide-react';
import styles from './ContactPromoBanner.module.css';

const DEMO_PERKS = [
  { icon: Server, title: 'Multi-Vendor Racks', desc: 'Real Cisco Nexus, ASA & Palo Alto physical gear' },
  { icon: Award, title: 'CCIE Mentors', desc: 'Direct interaction with double CCIE certified trainers' },
  { icon: Headphones, title: '24/7 Cloud Lab', desc: 'Round-the-clock remote lab pods for hands-on drill' },
  { icon: ShieldCheck, title: 'Job Assistance', desc: 'Dedicated placement desk & mock technical rounds' }
];

export function ContactPromoBanner({ onOpenDemo }) {
  return (
    <div className={styles.bannerCard}>
      {/* Decorative accent background */}
      <div className={styles.accentGlow} aria-hidden="true" />

      <div className={styles.contentWrap}>
        
        {/* Header Badge */}
        <div className={styles.badgeRow}>
          <span className={styles.demoPill}>
            <Sparkles size={13} className={styles.sparkleIcon} />
            <span>Risk-Free Trial</span>
          </span>
          <span className={styles.freeTag}>100% Free • No Payment</span>
        </div>

        {/* Heading & Subtitle */}
        <h3 className={styles.heading}>
          Experience I-Medita Before You Enroll
        </h3>

        <p className={styles.description}>
          Invest in your learning today! Start with a FREE classroom or online demo session.
          Evaluate our teaching methodology, inspect our physical hardware racks, and clear your career doubts.
        </p>

        {/* 4 Feature Highlights Grid */}
        <div className={styles.perksGrid}>
          {DEMO_PERKS.map((perk, idx) => {
            const Icon = perk.icon;
            return (
              <div key={idx} className={styles.perkItem}>
                <div className={styles.perkIconBox}>
                  <Icon size={16} />
                </div>
                <div className={styles.perkText}>
                  <strong className={styles.perkTitle}>{perk.title}</strong>
                  <span className={styles.perkDesc}>{perk.desc}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Button */}
        <div className={styles.actionWrap}>
          <button
            type="button"
            onClick={() => onOpenDemo ? onOpenDemo('Contact Bento Demo Spotlight') : null}
            className={styles.registerBtn}
          >
            <span>Register for Free Demo</span>
            <ArrowRight size={16} className={styles.btnArrow} />
          </button>
          <span className={styles.actionNote}>
            Takes 30 seconds • Choose classroom or online live slot
          </span>
        </div>

      </div>
    </div>
  );
}
