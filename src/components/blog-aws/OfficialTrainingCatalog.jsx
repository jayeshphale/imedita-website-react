import React, { useState } from 'react';
import { 
  Cloud, 
  ShieldCheck, 
  Server, 
  Layers, 
  ArrowUpRight, 
  Clock, 
  Calendar, 
  CheckCircle2, 
  Sparkles, 
  Award 
} from 'lucide-react';
import styles from './OfficialTrainingCatalog.module.css';

const COURSES_DATA = [
  {
    id: 'aws-solutions-architect',
    categoryLabel: 'Cloud Architecture',
    track: 'Associate Level',
    title: 'AWS Certified Solutions Architect – Associate (SAA-C03)',
    desc: 'Master multi-tier VPC architectures, EC2 auto-scaling, S3 storage tiers, and IAM least privilege directly from CCIE & AWS architects.',
    duration: '6 Weeks',
    schedule: 'Weekend & Weekday',
    icon: Cloud,
    highlights: [
      '24/7 dedicated enterprise cloud lab topologies',
      'Real-world Disaster Recovery & high availability drills',
      'Official AWS Well-Architected Framework alignment'
    ],
    courseUrl: 'https://www.imedita.com/courses/aws-training/'
  },
  {
    id: 'cisco-ccna',
    categoryLabel: 'Core Networking',
    track: 'Industry Benchmark',
    title: 'Cisco CCNA (200-301) Foundation to Enterprise Masterclass',
    desc: 'The definitive foundation for every cloud architect. Hands-on routing, OSPF, VLANs, access lists, and network automation with Python.',
    duration: '8 Weeks',
    schedule: 'Weekday & Weekend',
    icon: Server,
    highlights: [
      'Direct CLI terminal access to physical Cisco hardware racks',
      '100% official Cisco CCNA blueprint coverage (v1.1 updated)',
      'Dedicated placement cell & corporate interview preparation'
    ],
    courseUrl: '/courses/ccna-training'
  },
  {
    id: 'cisco-ccnp-enterprise',
    categoryLabel: 'Advanced Architecture',
    track: 'Professional Level',
    title: 'Cisco CCNP Enterprise (ENCOR 350-401 & ENARSI 300-410)',
    desc: 'Architect high-availability BGP routing, Cisco SD-WAN overlays, and enterprise switching fabrics on production hardware.',
    duration: '10 Weeks',
    schedule: 'Weekend Sessions',
    icon: Layers,
    highlights: [
      'Dual certification track (Core ENCOR + Concentration ENARSI)',
      'Physical Catalyst 9300 & Nexus datacenter fabrics',
      '1-on-1 architecture design reviews with Triple CCIE mentors'
    ],
    courseUrl: 'https://www.imedita.com/courses/ccnp-training/'
  },
  {
    id: 'multi-vendor-firewalls',
    categoryLabel: 'Network Security',
    track: 'Specialist Level',
    title: 'Multi-Vendor Next-Gen Firewall Track (Palo Alto & Check Point)',
    desc: 'Hands-on zero-trust perimeter defense, policy rules, SSL decryption, IPsec VPN tunnels, and threat prevention on real appliances.',
    duration: '8 Weeks',
    schedule: 'Flexible Batches',
    icon: ShieldCheck,
    highlights: [
      'Dedicated physical Palo Alto PA-400 and Check Point pods',
      'High Availability (Active/Passive) and clustering setup',
      'App-ID, Content-ID, and WildFire malware analysis drills'
    ],
    courseUrl: 'https://www.imedita.com/courses/multi-vendor-training/'
  }
];

export default function OfficialTrainingCatalog({ onOpenDemo = () => {} }) {
  return (
    <section id="official-training-catalog" className={styles.section} aria-labelledby="catalog-heading">
      <div className={styles.container}>
        
        {/* Section Header */}
        <div className={styles.header}>
          <div className={styles.badgeWrap}>
            <Sparkles size={13} className={styles.badgeIcon} aria-hidden="true" />
            <span>ACCREDITED INDUSTRY PROGRAMS</span>
          </div>
          <h2 id="catalog-heading" className={styles.title}>
            Official Training Catalog
          </h2>
          <p className={styles.subtitle}>
            Explore verified certification bootcamps and job-guaranteed enterprise networking tracks at I-Medita.
            All programs feature hands-on physical rack practice and mentorship by certified CCIE architects.
          </p>
        </div>

        {/* 4 Clean Courses Grid */}
        <div className={styles.grid}>
          {COURSES_DATA.map((course) => {
            const Icon = course.icon;
            return (
              <article key={course.id} className={styles.card}>
                <div className={styles.cardTop}>
                  <div className={styles.iconWrap}>
                    <Icon size={22} className={styles.icon} aria-hidden="true" />
                  </div>
                  <div className={styles.tagGroup}>
                    <span className={styles.categoryPill}>{course.categoryLabel}</span>
                    <span className={styles.trackPill}>{course.track}</span>
                  </div>
                </div>

                <h3 className={styles.courseTitle}>{course.title}</h3>
                <p className={styles.courseDesc}>{course.desc}</p>

                {/* Duration & Schedule Meta Box */}
                <div className={styles.metaRow}>
                  <div className={styles.metaItem}>
                    <Clock size={13} className={styles.metaIcon} aria-hidden="true" />
                    <span>{course.duration}</span>
                  </div>
                  <span className={styles.metaDot}>•</span>
                  <div className={styles.metaItem}>
                    <Calendar size={13} className={styles.metaIcon} aria-hidden="true" />
                    <span>{course.schedule}</span>
                  </div>
                </div>

                {/* Feature Highlights */}
                <ul className={styles.highlightsList}>
                  {course.highlights.map((item, idx) => (
                    <li key={idx} className={styles.highlightItem}>
                      <CheckCircle2 size={14} className={styles.checkIcon} aria-hidden="true" />
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
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </button>

                  <a
                    href={course.courseUrl}
                    target={course.courseUrl.startsWith('http') ? '_blank' : '_self'}
                    rel="noreferrer"
                    className={styles.secondaryLink}
                  >
                    <span>Explore Course</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
