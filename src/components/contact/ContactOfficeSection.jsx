import React from 'react';
import { 
  MapPin, 
  Clock, 
  Navigation, 
  PhoneCall, 
  Building2, 
  Compass, 
  CheckCircle2, 
  Wifi, 
  Monitor, 
  Car, 
  ExternalLink 
} from 'lucide-react';
import styles from './ContactOfficeSection.module.css';

const CAMPUS_HIGHLIGHTS = [
  { icon: Monitor, text: 'Real Multi-Vendor Physical Racks (Nexus, ASA, Palo Alto)' },
  { icon: Building2, text: 'Audio-Visual High-Tech Smart Classrooms' },
  { icon: Wifi, text: 'Dedicated Gigabit Lab Workstations & Free High-Speed Wi-Fi' },
  { icon: Car, text: 'Free Student Parking & 2-Min Walk from Baner Bus Stop' }
];

export function ContactOfficeSection() {
  const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=I-Medita+Learning+Solutions+Baner+Pune";
  const mapsEmbedUrl = "https://maps.google.com/maps?q=I-Medita+Learning+Solutions+Aditi+Samruddhi+Baner+Pune&t=&z=15&ie=UTF8&iwloc=&output=embed";

  return (
    <section className={styles.sectionWrapper} aria-labelledby="office-section-heading">
      <div className={styles.container}>
        
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>On-Campus Experience</span>
          <h2 id="office-section-heading" className={styles.sectionTitle}>
            Visit Our Training Centre
          </h2>
          <p className={styles.sectionDesc}>
            Walk into Maharashtra's largest physical Cisco, Palo Alto, and Cloud networking lab facility in Baner, Pune.
          </p>
        </div>

        {/* 2-Column Office Card & Map Layout */}
        <div className={styles.officeLayout}>
          
          {/* Left Column: Office Details Card */}
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
                <p className={styles.addressLine}>
                  <strong>3rd Floor, Aditi Samruddhi Building,</strong><br />
                  Baner Road, Baner, Pune – 411 045,<br />
                  Maharashtra, India.
                </p>
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
                {CAMPUS_HIGHLIGHTS.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <li key={idx} className={styles.highlightItem}>
                      <Icon size={15} className={styles.highlightIcon} />
                      <span>{item.text}</span>
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
              >
                <Navigation size={16} />
                <span>Get Directions</span>
                <ExternalLink size={14} className={styles.extIcon} />
              </a>

              <a 
                href="tel:+918750004411"
                className={styles.callSupportBtn}
              >
                <PhoneCall size={16} />
                <span>Call Support (+91 8750004411)</span>
              </a>
            </div>

          </div>

          {/* Right Column: Google Maps Interactive Embed */}
          <div className={styles.mapContainer}>
            <div className={styles.mapFrameWrapper}>
              <iframe
                title="I-Medita Pune Campus Location Map"
                src={mapsEmbedUrl}
                className={styles.mapIframe}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <div className={styles.mapOverlayPill}>
                <MapPin size={14} className={styles.pillPin} />
                <span>I-Medita, Baner, Pune</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
