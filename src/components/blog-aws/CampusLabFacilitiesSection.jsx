import React from 'react';
import { Camera, Server, ShieldCheck, Monitor } from 'lucide-react';
import styles from './CampusLabFacilitiesSection.module.css';

const FACILITIES_GALLERY = [
  {
    id: 'cisco-racks',
    title: 'Cisco Physical Rack Infrastructure',
    category: 'Hardware Labs',
    desc: 'Multi-vendor physical hardware topologies with 24/7 dedicated terminal access.',
    image: 'https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/06/10071301/imedita_71.jpg'
  },
  {
    id: 'ccie-classrooms',
    title: 'Interactive CCIE Architecture Lectures',
    category: 'Smart Classrooms',
    desc: 'Taught directly by certified CCIE instructors with 10+ years of enterprise experience.',
    image: 'https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/06/10071301/imedita_72.jpg'
  },
  {
    id: 'security-pods',
    title: 'Dedicated Palo Alto & Check Point Pods',
    category: 'Multi-Vendor Security',
    desc: 'Hands-on zero-trust perimeter configuration, SSL decryption, and Threat Prevention.',
    image: 'https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/06/10071302/imedita_66.jpg'
  }
];

export default function CampusLabFacilitiesSection() {
  return (
    <section id="campus-facilities" className={styles.section} aria-labelledby="facilities-heading">
      <div className={styles.container}>
        
        {/* Header Block */}
        <div className={styles.header}>
          <div className={styles.badgeWrap}>
            <Camera size={13} className={styles.badgeIcon} aria-hidden="true" />
            <span>INFRASTRUCTURE &amp; LEARNING SPACES</span>
          </div>
          <h2 id="facilities-heading" className={styles.title}>
            Campus &amp; Lab Facilities
          </h2>
          <p className={styles.subtitle}>
            Take a firsthand look inside India's most advanced networking and cloud training facility in Pune.
          </p>
        </div>

        {/* 3-Photo Clean Editorial Grid */}
        <div className={styles.galleryGrid}>
          {FACILITIES_GALLERY.map((facility) => (
            <div key={facility.id} className={styles.galleryCard}>
              <div className={styles.imageWrapper}>
                <img
                  src={facility.image}
                  alt={facility.title}
                  className={styles.image}
                  loading="eager"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/server-datacenter-engineer.jpg';
                  }}
                />
                <div className={styles.gradientOverlay} />
                
                <div className={styles.cardContent}>
                  <span className={styles.categoryBadge}>{facility.category}</span>
                  <h3 className={styles.cardTitle}>{facility.title}</h3>
                  <p className={styles.cardDesc}>{facility.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
