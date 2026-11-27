import React, { useState } from 'react';
import { 
  MapPin, 
  Clock, 
  Navigation, 
  PhoneCall, 
  Compass, 
  ExternalLink,
  Wifi,
  Server,
  Car,
  Tv,
  Camera,
  Layers,
  Award
} from 'lucide-react';
import styles from './ContactCampusShowcase.module.css';

const CAMPUS_AMENITIES = [
  { icon: Server, label: 'Physical Cisco Nexus & Palo Alto Multi-Vendor Racks' },
  { icon: Tv, label: 'High-Tech Audio-Visual Smart Classrooms' },
  { icon: Wifi, label: 'Dedicated Gigabit Lab Workstations & Free Wi-Fi' },
  { icon: Car, label: 'Free Student Parking & 2-Min Walk from Baner Bus Stop' }
];

export function ContactCampusShowcase() {
  const [activeTab, setActiveTab] = useState('map'); // 'map' | 'photo'
  
  const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=I-Medita+Learning+Solutions+Baner+Pune";
  const mapsEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2612981559867!2d73.78182967599092!3d18.562253367900743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bec704772097%3A0xb35e72951f287315!2sI-Medita%20-%20Cisco%20CCNA%2C%20CCNP%2C%20CCIE%20Training%20Institute%20in%20Pune!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";
  const campusImg = "https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/06/10071301/imedita_71.jpg";

  return (
    <section className={styles.section} id="campus-showcase" aria-labelledby="campus-showcase-heading">
      <div className={styles.container}>
        
        {/* Section Header with Reference Tagline */}
        <div className={styles.headerBlock}>
          <div className={styles.eyebrowBadge}>
            <span>A Great Place to Learn & Grow</span>
          </div>
          <h2 id="campus-showcase-heading" className={styles.sectionHeading}>
            Visit Our <span className={styles.gradientAccent}>Training Centre</span>
          </h2>
          <p className={styles.sectionSubtext}>
            At I-Medita, we’re your launchpad for growth — a place where hands-on engineering transforms into career success. 
            Walk into Maharashtra's largest physical Cisco, Palo Alto, and Cloud networking hardware facility in Baner, Pune.
          </p>
        </div>

        {/* 2-Column Campus Layout */}
        <div className={styles.showcaseGrid}>
          
          {/* ============================================================
              LEFT: OFFICE DOSSIER & AMENITIES CARD
              ============================================================ */}
          <div className={styles.detailsCard}>
            
            {/* Header Badge */}
            <div className={styles.cardKickerRow}>
              <span className={styles.facilityPill}>
                <span className={styles.pulseDot} />
                Pune Headquarters & Labs
              </span>
              <span className={styles.walkInBadge}>Walk-ins Welcome</span>
            </div>

            {/* Address Block */}
            <div className={styles.addressBlock}>
              <div className={styles.iconCircle}>
                <MapPin size={24} />
              </div>
              <div className={styles.addressTextGroup}>
                <h3 className={styles.officeName}>I-Medita Learning Solutions</h3>
                <address className={styles.addressLine}>
                  <strong>3rd Floor, Aditi Samruddhi Building,</strong><br />
                  Baner Road, Baner, Pune – 411 045,<br />
                  Maharashtra, India.
                </address>
                <p className={styles.landmarkText}>
                  <Compass size={14} className={styles.landmarkIcon} />
                  <span><strong>Landmark:</strong> Near Baner Welcome Board (5 mins from Mumbai-Pune Expressway Bypass)</span>
                </p>
              </div>
            </div>

            {/* Timings */}
            <div className={styles.timingCard}>
              <div className={styles.timingIconBox}>
                <Clock size={18} />
              </div>
              <div className={styles.timingInfo}>
                <span className={styles.timingLabel}>Center Visiting & Counseling Hours</span>
                <span className={styles.timingVal}>Monday – Saturday: 10:00 AM – 7:00 PM IST</span>
                <span className={styles.timingNote}>
                  On-spot lab rack tours, syllabus consultation & trainer interaction available.
                </span>
              </div>
            </div>

            {/* Amenities List */}
            <div className={styles.amenitiesBox}>
              <span className={styles.amenitiesTitle}>Campus & Lab Amenities:</span>
              <ul className={styles.amenitiesList}>
                {CAMPUS_AMENITIES.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <li key={idx} className={styles.amenityItem}>
                      <Icon size={15} className={styles.amenityIcon} />
                      <span>{item.label}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className={styles.actionButtons}>
              <a 
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.directionsBtn}
                title="Get Directions in Google Maps"
              >
                <Navigation size={16} />
                <span>Get Directions</span>
                <ExternalLink size={13} className={styles.extIcon} />
              </a>

              <a 
                href="tel:+918750004411"
                className={styles.callSupportBtn}
                title="Call Support Hotline"
              >
                <PhoneCall size={16} />
                <span>Call Support (+91 8750004411)</span>
              </a>
            </div>

          </div>

          {/* ============================================================
              RIGHT: GOOGLE MAP & REAL LAB PHOTOGRAPHY
              ============================================================ */}
          <div className={styles.mediaCard}>
            
            {/* View Switcher Tabs */}
            <div className={styles.mediaTabsBar}>
              <button
                type="button"
                onClick={() => setActiveTab('map')}
                className={`${styles.tabBtn} ${activeTab === 'map' ? styles.tabBtnActive : ''}`}
              >
                <MapPin size={14} />
                <span>Google Maps Location</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('photo')}
                className={`${styles.tabBtn} ${activeTab === 'photo' ? styles.tabBtnActive : ''}`}
              >
                <Camera size={14} />
                <span>Cisco Hardware Racks</span>
              </button>
            </div>

            {/* Frame Container */}
            <div className={styles.frameContainer}>
              {activeTab === 'map' ? (
                <iframe
                  title="I-Medita Pune Campus Location Map"
                  src={mapsEmbedUrl}
                  className={styles.mapIframe}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              ) : (
                <div className={styles.photoContainer}>
                  <img 
                    src={campusImg} 
                    alt="I-Medita Cisco Physical Hardware Racks in Baner Pune" 
                    className={styles.rackPhoto}
                  />
                  <div className={styles.photoOverlayBadge}>
                    <strong>Maharashtra's Largest Cisco Hardware Lab</strong>
                    <span>Real Cisco Nexus, ISR Routers, Catalyst 9300 & Palo Alto Firewalls</span>
                  </div>
                </div>
              )}

              {/* Map Floating Pill */}
              <div className={styles.floatingPill}>
                <span className={styles.pillDot} />
                <span>I-Medita, Baner Road, Pune</span>
              </div>
            </div>

            {/* Media Card Footer */}
            <div className={styles.mediaFooter}>
              <div className={styles.footerTransit}>
                <Car size={14} className={styles.transitIcon} />
                <span>Convenient highway connectivity • 2-Min walk from Baner Bus Stop</span>
              </div>
              <a 
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footerMapsLink}
              >
                <span>Open Full Maps</span>
                <ExternalLink size={13} />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
