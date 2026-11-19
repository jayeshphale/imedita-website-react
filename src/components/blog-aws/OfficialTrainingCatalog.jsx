import React, { useState } from 'react';
import { 
  Cloud, 
  ShieldCheck, 
  Server, 
  Terminal, 
  ArrowUpRight, 
  Clock, 
  Calendar, 
  CheckCircle2, 
  Sparkles, 
  Award,
  Download,
  Layers
} from 'lucide-react';
import styles from './OfficialTrainingCatalog.module.css';

const CATALOG_CATEGORIES = [
  { id: 'all', label: 'All Programs' },
  { id: 'job-guaranteed', label: '100% Job Guaranteed' },
  { id: 'cloud', label: 'Cloud & Architecture' },
  { id: 'security', label: 'Enterprise Security' },
  { id: 'networking', label: 'Core Networking' }
];

const COURSES_DATA = [
  {
    id: 'aws-solutions-architect',
    category: 'cloud',
    categoryLabel: 'Cloud Architecture',
    track: 'Associate Level',
    title: 'AWS Certified Solutions Architect – Associate (SAA-C03)',
    desc: 'Master VPC multi-tier architectures, EC2 auto-scaling, S3 storage tiers, DynamoDB, IAM least privilege, and cost optimization directly from CCIE & AWS architects.',
    duration: '6 Weeks (Live Interactive)',
    schedule: 'Weekend & Weekday Batches',
    icon: Cloud,
    badge: 'High Demand',
    highlights: [
      '24/7 dedicated enterprise cloud lab topologies',
      'Real-world Disaster Recovery & high-availability setups',
      'Official AWS Well-Architected Framework drills',
      '50% discount voucher guidance & Pearson VUE simulation'
    ],
    courseUrl: 'https://www.imedita.com/courses/aws-training/',
    syllabusUrl: 'https://www.imedita.com/courses/aws-training/#syllabus'
  },
  {
    id: 'job-guarantee-network',
    category: 'job-guaranteed',
    categoryLabel: '100% Job Guaranteed',
    track: 'Career Track',
    title: 'Job Guaranteed Training for Network Engineers',
    desc: 'Comprehensive multi-track career program covering enterprise routing, switching, multi-vendor firewalls, cloud connectivity, and corporate placement drives.',
    duration: '4 – 6 Months Intensive',
    schedule: 'Daily Classroom / Hybrid',
    icon: Award,
    badge: '100% Placement Guarantee',
    highlights: [
      '100% Written placement guarantee agreement',
      'Direct CLI terminal access to physical Cisco hardware racks',
      'Over 600+ multinational corporate recruitment drives',
      'Technical interview drills with Triple CCIE architects'
    ],
    courseUrl: 'https://www.imedita.com/courses/job-guaranteed-training-for-network-engineers/',
    syllabusUrl: 'https://www.imedita.com/courses/job-guaranteed-training-for-network-engineers/#syllabus'
  },
  {
    id: 'cisco-ccna',
    category: 'networking',
    categoryLabel: 'Core Enterprise Networking',
    track: 'Industry Benchmark',
    title: 'Cisco CCNA (200-301) Foundation to Enterprise Masterclass',
    desc: 'The definitive foundation for every cloud and network architect. Hands-on routing, OSPF, VLANs, STP, access control lists, and network automation with Python.',
    duration: '8 Weeks (Live Lab Drills)',
    schedule: 'Weekday & Weekend Slots',
    icon: Server,
    badge: 'Foundational Benchmark',
    highlights: [
      'Direct CLI terminal access to physical Cisco hardware racks',
      '100% official Cisco CCNA blueprint coverage (v1.1 updated)',
      'Dedicated placement cell & corporate interview preparation',
      'Unlimited weekend lab practice sessions in Pune'
    ],
    courseUrl: '/courses/ccna-training',
    syllabusUrl: '/courses/ccna-training#syllabus'
  },
  {
    id: 'cisco-ccnp-enterprise',
    category: 'networking',
    categoryLabel: 'Advanced Architecture',
    track: 'Professional Level',
    title: 'Cisco CCNP Enterprise (ENCOR 350-401 & ENARSI 300-410)',
    desc: 'Architect high-availability BGP routing, Cisco SD-WAN, campus overlays, and enterprise policy fabrics on production Cisco hardware and virtual sandboxes.',
    duration: '10 Weeks (Deep-Dive)',
    schedule: 'Weekend Sessions Available',
    icon: Layers,
    badge: 'Architect Level',
    highlights: [
      'Dual certification track (Core ENCOR + Concentration ENARSI)',
      'Physical Catalyst 9300 & Nexus datacenter switching fabrics',
      'Enterprise SD-WAN controller setup and routing policies',
      '1-on-1 architecture design reviews with Triple CCIE mentors'
    ],
    courseUrl: 'https://www.imedita.com/courses/ccnp-training/',
    syllabusUrl: 'https://www.imedita.com/courses/ccnp-training/#syllabus'
  },
  {
    id: 'multi-vendor-firewalls',
    category: 'security',
    categoryLabel: 'Network Security',
    track: 'Specialist Level',
    title: 'Multi-Vendor Next-Gen Firewall Track (Palo Alto & Check Point)',
    desc: 'Hands-on zero-trust perimeter security, policy rules, SSL decryption, IPsec VPN tunnels, and threat prevention on real physical firewall appliances.',
    duration: '8 Weeks (Applied Labs)',
    schedule: 'Flexible Batches',
    icon: ShieldCheck,
    badge: 'Zero-Trust Defense',
    highlights: [
      'Dedicated physical Palo Alto PA-400 and Check Point Quantum pods',
      'High Availability (Active/Passive) and clustering configurations',
      'App-ID, Content-ID, and WildFire malware analysis drills',
      'Prepares for PCNSA, PCNSE, and Check Point CCSE certifications'
    ],
    courseUrl: 'https://www.imedita.com/courses/multi-vendor-training/',
    syllabusUrl: 'https://www.imedita.com/courses/multi-vendor-training/#syllabus'
  },
  {
    id: 'job-guarantee-cyber',
    category: 'job-guaranteed',
    categoryLabel: '100% Job Guaranteed',
    track: 'Dual-Domain Track',
    title: 'Multi-Track Job Guaranteed Training with Cyber Security',
    desc: 'Combines core routing and switching with advanced perimeter defense, SIEM monitoring, and next-generation firewall security for high-paying SOC roles.',
    duration: '6 Months Comprehensive',
    schedule: 'Classroom & Online',
    icon: ShieldCheck,
    badge: 'High Salary Potential',
    highlights: [
      'Dual-domain curriculum: Enterprise Networking + Cyber Security',
      'Dedicated Palo Alto, Check Point & Cisco ASA/FTD labs',
      'Guaranteed corporate placement interviews until placed',
      'Lifetime LMS access with recorded lecture archives'
    ],
    courseUrl: 'https://www.imedita.com/courses/job-guaranteed-training-for-cyber-security-engineers/',
    syllabusUrl: 'https://www.imedita.com/courses/job-guaranteed-training-for-cyber-security-engineers/#syllabus'
  }
];

export default function OfficialTrainingCatalog({ onOpenDemo = () => {} }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredCourses = activeFilter === 'all'
    ? COURSES_DATA
    : COURSES_DATA.filter(course => course.category === activeFilter);

  return (
    <section id="official-training-catalog" className={styles.section} aria-labelledby="catalog-heading">
      <div className={styles.container}>
        
        {/* Section Header */}
        <div className={styles.header}>
          <div className={styles.badgeWrap}>
            <Sparkles className={styles.badgeIcon} aria-hidden="true" />
            <span>ACCREDITED INDUSTRY PROGRAMS</span>
          </div>
          <h2 id="catalog-heading" className={styles.title}>
            Official Training Catalog
          </h2>
          <p className={styles.subtitle}>
            Explore verified certification bootcamps and job-guaranteed enterprise networking tracks at I-Medita.
            All programs feature hands-on physical rack practice and 1-on-1 mentorship by certified CCIE architects.
          </p>

          {/* Filter Tabs */}
          <div className={styles.filterBar} role="tablist" aria-label="Course Categories">
            {CATALOG_CATEGORIES.map(category => (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={activeFilter === category.id}
                className={`${styles.filterBtn} ${activeFilter === category.id ? styles.filterBtnActive : ''}`}
                onClick={() => setActiveFilter(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        <div className={styles.grid}>
          {filteredCourses.map((course) => {
            const Icon = course.icon;
            return (
              <article key={course.id} className={styles.card}>
                <div className={styles.cardTop}>
                  <div className={styles.iconWrap}>
                    <Icon size={24} className={styles.icon} aria-hidden="true" />
                  </div>
                  <div className={styles.tagGroup}>
                    <span className={styles.categoryPill}>{course.categoryLabel}</span>
                    <span className={styles.trackPill}>{course.track}</span>
                  </div>
                </div>

                <h3 className={styles.courseTitle}>{course.title}</h3>
                <p className={styles.courseDesc}>{course.desc}</p>

                {/* Duration & Schedule Meta Box */}
                <div className={styles.metaBox}>
                  <div className={styles.metaItem}>
                    <Clock size={15} className={styles.metaIcon} aria-hidden="true" />
                    <span>{course.duration}</span>
                  </div>
                  <div className={styles.metaItem}>
                    <Calendar size={15} className={styles.metaIcon} aria-hidden="true" />
                    <span>{course.schedule}</span>
                  </div>
                </div>

                {/* Feature Highlights */}
                <ul className={styles.highlightsList}>
                  {course.highlights.map((item, idx) => (
                    <li key={idx} className={styles.highlightItem}>
                      <CheckCircle2 size={15} className={styles.checkIcon} aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Card Actions */}
                <div className={styles.cardActions}>
                  <button
                    type="button"
                    className={styles.primaryBtn}
                    onClick={onOpenDemo}
                  >
                    <span>Book Free Demo</span>
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </button>

                  <a
                    href={course.courseUrl}
                    target={course.courseUrl.startsWith('http') ? '_blank' : '_self'}
                    rel="noreferrer"
                    className={styles.secondaryLink}
                  >
                    <span>Explore Course</span>
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Catalog Banner */}
        <div className={styles.catalogFooter}>
          <div className={styles.footerContent}>
            <span className={styles.footerKicker}>CUSTOM ENTERPRISE SYLLABUS</span>
            <h4 className={styles.footerTitle}>Need a Tailored Corporate Training Cohort?</h4>
            <p className={styles.footerText}>
              We deliver custom multi-cloud and security bootcamps for enterprise infrastructure teams with dedicated rack topologies.
            </p>
          </div>
          <button
            type="button"
            className={styles.outlineBtn}
            onClick={onOpenDemo}
          >
            <span>Request Corporate Proposal</span>
          </button>
        </div>

      </div>
    </section>
  );
}
