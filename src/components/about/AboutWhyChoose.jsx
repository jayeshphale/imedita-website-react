import React, { useState } from 'react';
import { 
  Award, 
  Users, 
  Server, 
  Compass,
  CheckCircle2,
  XCircle,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Check,
  X,
  Cpu
} from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './AboutWhyChoose.module.css';

/**
 * Creative Why Choose I-Medita:
 * Features:
 * - Interactive Switcher: "I-Medita Real Hardware Labs" vs "Ordinary Institutes (Simulators)"
 * - 4 Premium Feature Cards with micro-badges and verified highlights
 * - Live Demo Booking Strip
 */
export function AboutWhyChoose({ onOpenDemo }) {
  const [activeTab, setActiveTab] = useState('imedita'); // 'imedita' | 'comparison'

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

  const comparisonData = [
    {
      feature: 'Lab Infrastructure',
      imedita: 'Maharashtra’s Largest Physical Lab with Cisco Nexus 9000, ISR 4331 & Palo Alto Hardware',
      others: 'Software packet simulators (Packet Tracer / GNS3) with limited commands & frequent crashes'
    },
    {
      feature: 'Trainer Credentials',
      imedita: 'Dual & Triple CCIE Certified working network architects with 10+ to 15+ years experience',
      others: 'Generic non-certified instructors without production network troubleshooting experience'
    },
    {
      feature: 'Lab Practice Hours',
      imedita: '24×7 Unlimited Access: Physical classroom racks in Pune + remote online hardware pods',
      others: 'Strict 1–2 hours per day on shared local computer lab setups'
    },
    {
      feature: 'Curriculum Depth',
      imedita: 'Official Cisco Blueprints + Enterprise SD-WAN, Python Automation & Multi-Vendor Firewalls',
      others: 'Outdated slides focusing solely on passing multiple-choice questions'
    },
    {
      feature: 'Placement Pipeline',
      imedita: 'Dedicated placement cell, CCIE mock technical interviews, resume building & direct drives',
      others: 'Course completion certificate provided without active recruiter connections'
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

          {/* Creative Interactive View Switcher */}
          <div className={styles.viewSwitcher}>
            <button
              type="button"
              className={`${styles.switchBtn} ${activeTab === 'imedita' ? styles.switchActive : ''}`}
              onClick={() => setActiveTab('imedita')}
            >
              <Cpu size={15} />
              <span>4 Pillars of Excellence</span>
            </button>
            <button
              type="button"
              className={`${styles.switchBtn} ${activeTab === 'comparison' ? styles.switchActive : ''}`}
              onClick={() => setActiveTab('comparison')}
            >
              <ShieldCheck size={15} />
              <span>Real Labs vs Simulators (Comparison)</span>
            </button>
          </div>
        </div>

        {/* VIEW 1: 4 Core Pillars Grid */}
        {activeTab === 'imedita' && (
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
        )}

        {/* VIEW 2: Interactive Real Labs vs Simulators Comparison Matrix */}
        {activeTab === 'comparison' && (
          <div className={styles.comparisonTableWrapper}>
            <div className={styles.comparisonHeaderRow}>
              <div className={styles.colFeature}>Training Feature</div>
              <div className={styles.colImedita}>
                <span className={styles.brandTag}>● I-MEDITA EDGE</span>
                <h4>Real Physical Cisco Labs</h4>
              </div>
              <div className={styles.colOthers}>
                <span className={styles.othersTag}>ORDINARY INSTITUTES</span>
                <h4>Software Simulators</h4>
              </div>
            </div>

            <div className={styles.comparisonBody}>
              {comparisonData.map((row, idx) => (
                <div key={idx} className={styles.comparisonRow}>
                  <div className={styles.rowFeatureName}>
                    <strong>{row.feature}</strong>
                  </div>
                  <div className={styles.rowImeditaCol}>
                    <div className={styles.statusIconGreen}>
                      <Check size={14} />
                    </div>
                    <span>{row.imedita}</span>
                  </div>
                  <div className={styles.rowOthersCol}>
                    <div className={styles.statusIconRed}>
                      <X size={14} />
                    </div>
                    <span>{row.others}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

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
