import React from 'react';
import { Camera, Server, ShieldCheck, Cpu, Users, Award, ExternalLink } from 'lucide-react';
import styles from './BlogMediaShowcase.module.css';

const MEDIA_GALLERY = [
  {
    id: 'cisco-racks',
    title: 'Cisco Physical Rack Infrastructure',
    category: 'Enterprise Hardware Labs',
    image: 'https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/06/10071301/imedita_71.jpg',
    caption: 'Multi-vendor physical hardware topologies with 24/7 dedicated terminal access.'
  },
  {
    id: 'ccie-classroom',
    title: 'Interactive CCIE Architecture Lectures',
    category: 'Smart Classrooms',
    image: 'https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/06/10071301/imedita_72.jpg',
    caption: 'Taught directly by certified CCIE instructors with 10+ years of enterprise experience.'
  },
  {
    id: 'security-pods',
    title: 'Dedicated Palo Alto & Check Point Pods',
    category: 'Multi-Vendor Security',
    image: 'https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/06/10071302/imedita_66.jpg',
    caption: 'Hands-on zero-trust perimeter configuration, SSL decryption, and Threat Prevention.'
  },
  {
    id: 'student-collaboration',
    title: 'Peer Topology Debugging & Mock Labs',
    category: 'Collaborative Engineering',
    image: 'https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/06/10071301/imedita_69.jpg',
    caption: 'Students practicing real-world BGP routing blackholes and failover scenarios.'
  },
  {
    id: 'nexus-switching',
    title: 'Catalyst 9300 & Nexus Fabric Pods',
    category: 'Datacenter Fabrics',
    image: 'https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/06/10071302/imedita_68.jpg',
    caption: 'Production spine-leaf datacenter switching fabrics with VXLAN EVPN topologies.'
  },
  {
    id: 'mock-simulation',
    title: '8-Hour CCIE Mock Lab Simulation Pods',
    category: 'Exam Simulation',
    image: 'https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/06/10071301/imedita_70.jpg',
    caption: 'Rigorous timed exam drills under real testing room conditions before Pearson VUE.'
  }
];

export function BlogMediaShowcase() {
  return (
    <section className={styles.section} id="lab-facilities" aria-labelledby="media-heading">
      <div className={styles.container}>
        <div className={styles.headerBlock}>
          <div className={styles.eyebrowBadge}>
            <Camera size={14} className={styles.eyebrowIcon} aria-hidden="true" />
            <span>I-MEDITA CAMPUS & LAB INFRASTRUCTURE</span>
          </div>

          <h2 id="media-heading" className={styles.heading}>
            Experience Our Datacenter & Lab Life
          </h2>

          <p className={styles.subtext}>
            Take a firsthand look inside India's most advanced networking and cloud training facility in Pune. Real physical racks, dedicated firewall pods, and collaborative engineering culture.
          </p>
        </div>

        {/* 6-Photo Responsive Grid */}
        <div className={styles.galleryGrid}>
          {MEDIA_GALLERY.map((item) => (
            <div key={item.id} className={styles.mediaCard}>
              <div className={styles.imageWrap}>
                <img 
                  src={item.image} 
                  alt={item.title}
                  loading="lazy"
                  className={styles.mediaImage}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '/server-datacenter-engineer.jpg';
                  }}
                />
                
                <div className={styles.vignetteOverlay}>
                  <span className={styles.categoryPill}>{item.category}</span>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardCaption}>{item.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogMediaShowcase;
