import React from 'react';
import { Camera, Server, Layers, ShieldCheck, Users, Monitor, Sparkles } from 'lucide-react';
import styles from './CampusLabFacilitiesSection.module.css';

const FACILITIES_GALLERY = [
  {
    id: 'cisco-racks',
    title: 'Cisco Physical Rack Infrastructure',
    category: 'Enterprise Hardware Labs',
    desc: 'Multi-vendor physical hardware topologies with 24/7 dedicated terminal access and real patch cabling.',
    image: 'https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/06/10071301/imedita_71.jpg'
  },
  {
    id: 'ccie-classrooms',
    title: 'Interactive CCIE Architecture Lectures',
    category: 'Smart Classrooms',
    desc: 'Taught directly by certified CCIE instructors with 10+ years of global enterprise consulting experience.',
    image: 'https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/06/10071301/imedita_72.jpg'
  },
  {
    id: 'security-pods',
    title: 'Dedicated Palo Alto & Check Point Pods',
    category: 'Multi-Vendor Security',
    desc: 'Hands-on zero-trust perimeter configuration, SSL decryption, App-ID policies, and Threat Prevention.',
    image: 'https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/06/10071302/imedita_66.jpg'
  },
  {
    id: 'peer-debugging',
    title: 'Peer Topology Debugging & Mock Labs',
    category: 'Collaborative Engineering',
    desc: 'Students practicing real-world BGP routing blackholes, high availability failover, and DR drill scenarios.',
    image: 'https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/06/10071301/imedita_69.jpg'
  },
  {
    id: 'datacenter-fabrics',
    title: 'Catalyst 9300 & Nexus Fabric Pods',
    category: 'Datacenter Fabrics',
    desc: 'Production spine-leaf datacenter switching fabrics with VXLAN EVPN topologies and multi-chassis trunking.',
    image: 'https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/06/10071302/imedita_68.jpg'
  },
  {
    id: 'exam-simulation-pods',
    title: '8-Hour CCIE Mock Lab Simulation Pods',
    category: 'Exam Simulation',
    desc: 'Rigorous timed exam drills under real Pearson VUE testing room conditions before the official exam.',
    image: 'https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/06/10071301/imedita_70.jpg'
  }
];

export default function CampusLabFacilitiesSection() {
  return (
    <section id="campus-facilities" className={styles.section} aria-labelledby="facilities-heading">
      <div className={styles.container}>
        
        {/* Header Block */}
        <div className={styles.header}>
          <div className={styles.badgeWrap}>
            <Camera size={14} className={styles.badgeIcon} aria-hidden="true" />
            <span>INFRASTRUCTURE &amp; LEARNING SPACES</span>
          </div>
          <h2 id="facilities-heading" className={styles.title}>
            Campus &amp; Lab Facilities
          </h2>
          <p className={styles.subtitle}>
            Take a firsthand look inside India's most advanced networking and cloud training facility in Pune. 
            Real physical racks, dedicated firewall pods, and an intensive, collaborative engineering culture.
          </p>
        </div>

        {/* 6-Photo Responsive Editorial Grid */}
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

        {/* Facilities Equipment Strip */}
        <div className={styles.equipmentStrip}>
          <div className={styles.stripItem}>
            <Server size={18} className={styles.stripIcon} aria-hidden="true" />
            <span>Cisco ISR 4331 &amp; 4451 Routers</span>
          </div>
          <div className={styles.stripDivider}>•</div>
          <div className={styles.stripItem}>
            <Layers size={18} className={styles.stripIcon} aria-hidden="true" />
            <span>Catalyst 9300 &amp; Nexus 9000 Switches</span>
          </div>
          <div className={styles.stripDivider}>•</div>
          <div className={styles.stripItem}>
            <ShieldCheck size={18} className={styles.stripIcon} aria-hidden="true" />
            <span>Palo Alto PA-400 &amp; FortiGate 60F</span>
          </div>
          <div className={styles.stripDivider}>•</div>
          <div className={styles.stripItem}>
            <Monitor size={18} className={styles.stripIcon} aria-hidden="true" />
            <span>Dual-Monitor High-Spec Workstations</span>
          </div>
        </div>

      </div>
    </section>
  );
}
