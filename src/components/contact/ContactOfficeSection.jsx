import React, { useState } from 'react';
import { 
  MapPin, 
  Clock, 
  Navigation, 
  PhoneCall, 
  Building2, 
  Compass, 
  ExternalLink,
  Wifi,
  Server,
  Car,
  Tv,
  CheckCircle2,
  Camera
} from 'lucide-react';
import styles from './ContactOfficeSection.module.css';

const CAMPUS_AMENITIES = [
  { icon: Server, label: 'Physical Cisco & Palo Alto Multi-Vendor Racks' },
  { icon: Tv, label: 'High-Tech Audio-Visual Smart Classrooms' },
  { icon: Wifi, label: 'Dedicated Gigabit Lab Workstations & Free Wi-Fi' },
  { icon: Car, label: 'Free Student Parking & 2-Min Walk from Baner Bus Stop' }
];

export function ContactOfficeSection() {
  const [activeView, setActiveView] = useState('map'); // 'map' | 'campus'
  
  const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=I-Medita+Learning+Solutions+Baner+Pune";
  const mapsEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2612981559867!2d73.78182967599092!3d18.562253367900743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bec704772097%3A0xb35e72951f287315!2sI-Medita%20-%20Cisco%20CCNA%2C%20CCNP%2C%20CCIE%20Training%20Institute%20in%20Pune!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";
  const campusImg = "https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/06/10071301/imedita_71.jpg";

  return (
    <section className={styles.section} id="visit-office" aria-labelledby="office-section-heading">
      <div className={styles.container}>
        
        {/* Section Header */}
        <div className={styles.headerBlock}>
          <div className={styles.eyebrowBadge}>
            <span>On-Campus Infrastructure</span>
          </div>
          <h2 id="office-section-heading" className={styles.sectionHeading}>
            Visit Our <span className={styles.gradientAccent}>Training Centre</span>
          </h2>
          <p className={styles.sectionSubtext}>
            Walk into Maharashtra's largest physical Cisco, Palo Alto, and Cloud networking lab facility in Baner, Pune.
          </p>
        </div>

        {/* 2-Column Office Card & Map Layout */}
        <div className={styles.officeLayout}>
          
          {/* ============================================================
              LEFT: LOCATION & AMENITIES CARD
              ============================================================ */}
          <div className={styles.detailsCard}>
            
            {/* Header Badge */}
            <div className={styles.cardTopBadge}>
              <span className={styles.pulseDot} />
              <span>Headquarters & Hands-on Lab Facility</span>
            </div>

            {/* Address Block */}
            <div className={styles.addressBlock}>
              <div className={styles.iconCircle}>
                <MapPin size={22} />
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

            {/* Timings Block */}
            <div className={styles.infoRow}>
              <div className={styles.infoIconBox}>
                <Clock size={18} />
              </div>
              <div className={styles.infoContent}>
                <span className={styles.infoLabel}>Center Visiting Hours</span>
                <span className={styles.infoValue}>Monday – Saturday: 10:00 AM – 7:00 PM IST</span>
                <span className={styles.infoSub}>Walk-ins welcome for on-spot lab tours & career counseling</span>
              </div>
            </div>

            {/* Campus Highlights Grid */}
            <div className={styles.highlightsBox}>
              <span className={styles.highlightsHeader}>Campus & Lab Amenities:</span>
              <ul className={styles.highlightsList}>
                {CAMPUS_AMENITIES.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <li key={idx} className={styles.highlightItem}>
                      <Icon size={15} className={styles.highlightIcon} />
                      <span>{item.label}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className={styles.actionsRow}>
              <a 
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.directionsBtn}
                title="Get Directions in Google Maps"
              >
                <Navigation size={16} />
                <span>Get Directions</span>
                <ExternalLink size={14} className={styles.extIcon} />
              </a>

              <a 
                href="tel:+918750004411"
                className={styles.callSupportBtn}
                title="Call Center Desk"
              >
                <PhoneCall size={16} />
                <span>Call Support (+91 8750004411)</span>
              </a>
            </div>

          </div>

          {/* ============================================================
              RIGHT: INTERACTIVE GOOGLE MAP EMBED & CAMPUS SHOWCASE
              ============================================================ */}
          <div className={styles.mapCard}>
            
            {/* View Switcher Tabs */}
            <div className={styles.mapSwitcherBar}>
              <button
                type="button"
                onClick={() => setActiveView('map')}
                className={`${styles.tabBtn} ${activeView === 'map' ? styles.tabActive : ''}`}
              >
                <MapPin size={14} />
                <span>Google Maps View</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveView('campus')}
                className={`${styles.tabBtn} ${activeView === 'campus' ? styles.tabActive : ''}`}
              >
                <Camera size={14} />
                <span>Real Lab Rack Photo</span>
              </button>
            </div>

            <div className={styles.mapFrameWrapper}>
              {activeView === 'map' ? (
                <iframe
                  title="I-Medita Pune Campus Location Map"
                  src={mapsEmbedUrl}
                  className={styles.mapIframe}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              ) : (
                <div className={styles.campusPhotoWrap}>
                  <img 
                    src={campusImg} 
                    alt="I-Medita Cisco Physical Hardware Racks in Baner Pune" 
                    className={styles.campusPhoto}
                  />
                  <div className={styles.photoCaption}>
                    <strong>Maharashtra's Largest Cisco Hardware Lab</strong>
                    <span>Live Cisco Nexus, ISR Routers, Catalyst Switches & Palo Alto Firewalls</span>
                  </div>
                </div>
              )}

              {/* Map Floating Location Pill */}
              <div className={styles.mapOverlayPill}>
                <span className={styles.overlayDot} />
                <span>I-Medita, Baner Road, Pune</span>
              </div>
            </div>

            {/* Map Card Footer Bar */}
            <div className={styles.mapFooter}>
              <div className={styles.transitItem}>
                <Car size={14} className={styles.transitIcon} />
                <span>5 mins from Mumbai-Pune Expressway Bypass</span>
              </div>
              <a 
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.openMapsLink}
              >
                <span>Open in Maps App</span>
                <ExternalLink size={13} />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
