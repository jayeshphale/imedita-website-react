import React from 'react';
import { Server, Award, Briefcase, Users, CheckCircle2, Sparkles } from 'lucide-react';
import styles from './ExperienceExcellenceSection.module.css';

const EXCELLENCE_PILLARS = [
  {
    icon: Server,
    title: '24/7 Physical Hardware Labs',
    desc: 'Direct CLI terminal access to enterprise Cisco ISR 4000 series routers, Catalyst 9300 switches, and physical Palo Alto PA-400 firewalls.'
  },
  {
    icon: Award,
    title: 'Triple CCIE Working Architects',
    desc: 'Mentorship directly from dual and triple CCIE certified mentors who actively design multi-cloud networks for global service providers.'
  },
  {
    icon: Briefcase,
    title: 'Dedicated Corporate Placement Cell',
    desc: 'End-to-end career guidance with resume sculpting, mock technical rounds, and direct placement drives with 600+ multinational partners.'
  },
  {
    icon: Users,
    title: '10,000+ Global Alumni Community',
    desc: 'An elite engineering network across 30+ countries, with alumni leading infrastructure at Cisco, Orange, Tata, and Dimension Data.'
  }
];

const PROOF_METRICS = [
  { value: '10,000+', label: 'Engineers Trained' },
  { value: '600+', label: 'Placement Drives' },
  { value: '97.4%', label: 'Placement Rate' },
  { value: '4.8 / 5.0', label: 'Student Rating' }
];

export default function ExperienceExcellenceSection() {
  return (
    <section id="experience-excellence" className={styles.section} aria-labelledby="excellence-heading">
      <div className={styles.container}>
        
        {/* Section Header */}
        <div className={styles.header}>
          <div className={styles.badgeWrap}>
            <Sparkles size={13} className={styles.badgeIcon} aria-hidden="true" />
            <span>INDIA'S PREMIER NETWORKING &amp; CLOUD ACADEMY</span>
          </div>
          <h2 id="excellence-heading" className={styles.title}>
            EXPERIENCE I-MEDITA EXCELLENCE
          </h2>
          <p className={styles.subtitle}>
            Where India's top networking and cloud talent is engineered. Real enterprise physical rack infrastructure, 
            certified CCIE mentorship, and comprehensive career backing.
          </p>
        </div>

        {/* Unified 2-Column Editorial Spread */}
        <div className={styles.editorialSpread}>
          {/* Left: Authentic Pune Campus Photo & Proof Metrics */}
          <div className={styles.mediaCol}>
            <div className={styles.imageCard}>
              <img
                src="https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/06/10071301/imedita_71.jpg"
                alt="I-Medita Pune Datacenter Physical Lab Racks with Trainees"
                className={styles.campusImg}
                loading="eager"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/server-datacenter-engineer.jpg';
                }}
              />
              <div className={styles.imageCaption}>
                <span className={styles.captionDot} />
                <span>Pune Datacenter Lab Campus • Physical Rack Infrastructure</span>
              </div>
            </div>

            {/* 4 Proof Metrics Strip */}
            <div className={styles.metricsRow}>
              {PROOF_METRICS.map((metric, idx) => (
                <div key={idx} className={styles.metricItem}>
                  <div className={styles.metricValue}>{metric.value}</div>
                  <div className={styles.metricLabel}>{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: 4 Institutional Pillars */}
          <div className={styles.pillarsCol}>
            <div className={styles.pillarsList}>
              {EXCELLENCE_PILLARS.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div key={idx} className={styles.pillarItem}>
                    <div className={styles.iconWrap}>
                      <Icon size={20} className={styles.icon} aria-hidden="true" />
                    </div>
                    <div className={styles.pillarContent}>
                      <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                      <p className={styles.pillarDesc}>{pillar.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
