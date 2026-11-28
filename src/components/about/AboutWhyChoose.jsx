import React from 'react';
import { 
  Award, 
  Users, 
  Server, 
  Compass,
  CheckCircle2,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './AboutWhyChoose.module.css';

/**
 * SECTION 3: What Makes I-Medita Different?
 * 4 Premium Feature Cards in Soft Slate (#f8fafc) background.
 */
export function AboutWhyChoose({ onOpenDemo }) {
  const cards = [
    {
      id: 'decade',
      number: '01',
      title: 'A Decade of Expertise',
      subtitle: '10+ Years of Proven Industry Excellence',
      description: 'More than 10 years of experience delivering professional technology training. Trusted by multinational corporations, premier academic institutions, and thousands of successful network engineers worldwide.',
      icon: Award,
      color: 'blue',
      highlights: [
        'Established in 2014 in Pune',
        'Maharashtra’s pioneering Cisco center',
        'Alumni working at Cisco, TCS, Orange & Wipro'
      ]
    },
    {
      id: 'trainers',
      number: '02',
      title: 'Industry Expert Trainers',
      subtitle: 'Dual & Triple CCIE Certified Mentors',
      description: 'Learn from certified professionals with practical industry experience and globally recognized credentials. Our faculty brings decades of live network deployment experience into every lecture.',
      icon: Users,
      color: 'indigo',
      highlights: [
        'CCIE Certified full-time faculty',
        'Direct architect mentorship',
        'Active enterprise consulting engineers'
      ]
    },
    {
      id: 'lab',
      number: '03',
      title: '24×7 Lab Access',
      subtitle: 'Real Multi-Vendor Hardware Racks',
      description: 'Practice and strengthen your technical skills with round-the-clock lab access. Work on physical Cisco Nexus 9000, ISR 4331, Catalyst 3850, and next-gen firewalls, backed by unlimited cloud pods.',
      icon: Server,
      color: 'emerald',
      highlights: [
        'Maharashtra’s largest Cisco rack farm',
        'Zero-simulator true physical command line',
        '24/7 remote lab access anytime, anywhere'
      ]
    },
    {
      id: 'learning',
      number: '04',
      title: 'Industry-Focused Learning',
      subtitle: 'Job-Ready Curriculum & Blueprints',
      description: 'Practical, certification-oriented training designed around real-world technology requirements. Rigorous hands-on topologies matching Fortune 500 network environments and vendor standards.',
      icon: Compass,
      color: 'amber',
      highlights: [
        'Strictly aligned with official Cisco exam blueprints',
        'Real-world enterprise network design projects',
        'Rigorous technical mock interviews & resume review'
      ]
    }
  ];

  return (
    <section className={styles.whySection} aria-label="Why Professionals Choose I-Medita">
      <div className={styles.container}>
        
        {/* Section Header */}
        <div className={styles.header}>
          <div className={styles.eyebrowBadge}>
            <Sparkles size={13} className={styles.badgeIcon} />
            <span>THE I-MEDITA ADVANTAGE</span>
          </div>

          <h2 className={styles.sectionHeading}>
            Why Professionals Choose <span className={styles.headingAccent}>I-Medita</span>
          </h2>

          <p className={styles.sectionDescription}>
            We combine high-density enterprise physical hardware infrastructure with elite certified 
            mentorship to deliver a learning experience that converts conceptual knowledge into production-ready confidence.
          </p>
        </div>

        {/* 4 Premium Cards (2x2 Grid) */}
        <div className={styles.cardsGrid}>
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div key={card.id} className={`${styles.card} ${styles['theme_' + card.color]}`}>
                
                <div className={styles.cardHeader}>
                  <div className={styles.iconBox}>
                    <Icon size={24} className={styles.icon} />
                  </div>
                  <span className={styles.cardNumber}>{card.number}</span>
                </div>

                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <div className={styles.cardSubtitle}>{card.subtitle}</div>
                  <p className={styles.cardDescription}>{card.description}</p>
                </div>

                <div className={styles.highlightsList}>
                  {card.highlights.map((h, i) => (
                    <div key={i} className={styles.highlightItem}>
                      <CheckCircle2 size={15} className={styles.checkIcon} />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                <div className={styles.cardBorderAccent} aria-hidden="true" />
              </div>
            );
          })}
        </div>

        {/* Interactive CTA strip */}
        <div className={styles.bottomBar}>
          <div className={styles.bottomContent}>
            <h4 className={styles.bottomTitle}>Ready to experience the I-Medita difference firsthand?</h4>
            <p className={styles.bottomSubtitle}>Join a free live classroom or online interactive session before making any commitment.</p>
          </div>
          <div className={styles.bottomActions}>
            <button 
              type="button" 
              onClick={() => onOpenDemo && onOpenDemo('Why Choose I-Medita Section')}
              className={styles.demoBtn}
            >
              <span>Book a Free Demo Class</span>
              <ArrowRight size={15} />
            </button>
            <Link to="/courses/ccna-training" className={styles.coursesBtn}>
              View Courses
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}

export default AboutWhyChoose;
