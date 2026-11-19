import React from 'react';
import { 
  Server, 
  Award, 
  Briefcase, 
  Users, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Zap
} from 'lucide-react';
import styles from './ExperienceExcellenceSection.module.css';

const EXCELLENCE_PILLARS = [
  {
    id: 'physical-labs',
    icon: Server,
    number: '01',
    title: '24/7 Physical Hardware Labs',
    desc: 'No simulated packet delays. Direct CLI terminal access to enterprise Cisco ISR 4000 series, Catalyst 9300 switches, and physical Palo Alto PA-400 firewalls.',
    features: ['Physical cable patching & topology resets', 'Dedicated hardware pods per trainee']
  },
  {
    id: 'ccie-architects',
    icon: Award,
    number: '02',
    title: 'Triple CCIE Working Architects',
    desc: 'Mentorship directly from dual and triple CCIE certified architects who actively design and deploy multi-cloud networks for global service providers.',
    features: ['Real-world production case studies', 'Personalized architectural design feedback']
  },
  {
    id: 'placement-assurance',
    icon: Briefcase,
    number: '03',
    title: 'Dedicated Corporate Placement Cell',
    desc: 'End-to-end career guidance with resume sculpting, mock technical rounds, and direct placement drives with 600+ multinational hiring partners.',
    features: ['Unlimited placement drives until placed', 'Average 45 days from graduation to offer']
  },
  {
    id: 'alumni-community',
    icon: Users,
    number: '04',
    title: '10,000+ Global Alumni Community',
    desc: 'A vast enterprise engineering network across 30+ countries, with I-Medita alumni leading network infrastructure at Cisco, Orange, Tata, and Dimension Data.',
    features: ['Exclusive peer referral network', 'Quarterly technical webinars & alumni meets']
  }
];

const PROOF_METRICS = [
  { value: '10,000+', label: 'Engineers Trained', detail: 'Across India & 30+ countries worldwide' },
  { value: '600+', label: 'Corporate Hiring Drives', detail: 'Top MNCs & telecom service providers' },
  { value: '97.4%', label: 'Placement Success Rate', detail: 'Verified job-guarantee track record' },
  { value: '4.8 / 5.0', label: 'Student Satisfaction', detail: 'Based on 1,200+ verified Google reviews' }
];

export default function ExperienceExcellenceSection() {
  return (
    <section id="experience-excellence" className={styles.section} aria-labelledby="excellence-heading">
      <div className={styles.container}>
        
        {/* Section Header */}
        <div className={styles.header}>
          <div className={styles.badgeWrap}>
            <Sparkles size={14} className={styles.badgeIcon} aria-hidden="true" />
            <span>INDIA'S PREMIER NETWORKING &amp; CLOUD ACADEMY</span>
          </div>
          <h2 id="excellence-heading" className={styles.title}>
            EXPERIENCE I-MEDITA EXCELLENCE
          </h2>
          <p className={styles.subtitle}>
            Where India's top networking and cloud talent is engineered. A look into our proven training pedagogy, 
            enterprise physical rack infrastructure, and uncompromising dedication to technical mastery.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className={styles.pillarsGrid}>
          {EXCELLENCE_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div key={pillar.id} className={styles.pillarCard}>
                <div className={styles.pillarCardTop}>
                  <div className={styles.iconWrap}>
                    <Icon size={24} className={styles.icon} aria-hidden="true" />
                  </div>
                  <span className={styles.pillarNumber}>{pillar.number}</span>
                </div>

                <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                <p className={styles.pillarDesc}>{pillar.desc}</p>

                <ul className={styles.featureList}>
                  {pillar.features.map((feat, idx) => (
                    <li key={idx} className={styles.featureItem}>
                      <CheckCircle2 size={15} className={styles.checkIcon} aria-hidden="true" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Big Visual Institutional Feature Banner */}
        <div className={styles.showcaseBanner}>
          <div className={styles.bannerMediaCol}>
            <img
              src="https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/06/10071301/imedita_71.jpg"
              alt="I-Medita Pune Datacenter Physical Lab Racks with Trainees"
              className={styles.bannerImg}
              loading="lazy"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/server-datacenter-engineer.jpg';
              }}
            />
            <div className={styles.bannerBadgeOverlay}>
              <span className={styles.overlayDot} />
              <span>Pune Datacenter Lab Campus</span>
            </div>
          </div>

          <div className={styles.bannerTextCol}>
            <span className={styles.bannerKicker}>AUTHENTIC LAB PEDAGOGY</span>
            <h3 className={styles.bannerHeading}>
              We Believe True Cloud &amp; Network Architects Are Made on Real Racks, Not Slides
            </h3>
            <p className={styles.bannerText}>
              In an era of generic video tutorials and simulated software, I-Medita maintains Maharashtra's largest 
              physical multi-vendor networking laboratory. Our trainees cable actual optical transceivers, configure 
              hardware BGP routing tables, and troubleshoot high-availability firewalls under real exam room conditions.
            </p>

            {/* Metrics Grid */}
            <div className={styles.metricsGrid}>
              {PROOF_METRICS.map((metric, idx) => (
                <div key={idx} className={styles.metricItem}>
                  <div className={styles.metricValue}>{metric.value}</div>
                  <div className={styles.metricLabel}>{metric.label}</div>
                  <div className={styles.metricDetail}>{metric.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
