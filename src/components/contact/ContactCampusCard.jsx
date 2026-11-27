import React from 'react';
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
  Tv
} from 'lucide-react';
import styles from './ContactCampusCard.module.css';

const CAMPUS_AMENITIES = [
  { icon: Server, label: 'Physical Cisco & Palo Alto Racks' },
  { icon: Tv, label: 'Smart Audio-Visual Classrooms' },
  { icon: Wifi, label: 'Dedicated Gigabit Lab Workstations' },
  { icon: Car, label: 'Free Parking & 2-Min from Bus Stop' }
];

export function ContactCampusCard() {
  const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=I-Medita+Learning+Solutions+Baner+Pune";
  const mapsEmbedUrl = "https://maps.google.com/maps?q=I-Medita+Learning+Solutions+Aditi+Samruddhi+Baner+Pune&t=&z=15&ie=UTF8&iwloc=&output=embed";

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.kickerRow}>
          <span className={styles.kickerBadge}>On-Campus Facility</span>
          <span className={styles.openNowBadge}>
            <span className={styles.pulseDot} />
            Open for Visits
          </span>
        </div>
        <h2 className={styles.cardTitle}>Visit Our Pune Training Centre</h2>
        <p className={styles.cardSub}>
          Walk into Maharashtra's largest physical Cisco & Cyber Security hardware training center in Baner, Pune.
        </p>
      </div>

      {/* Address & Hours Info Grid */}
      <div className={styles.infoGrid}>
        
        {/* Address */}
        <div className={styles.infoBlock}>
          <div className={styles.iconCircle}>
            <MapPin size={18} />
          </div>
          <div className={styles.infoContent}>
            <span className={styles.infoLabel}>Headquarters & Lab Location</span>
            <address className={styles.addressText}>
              <strong>3rd Floor, Aditi Samruddhi Building,</strong><br />
              Baner Road, Baner, Pune – 411 045,<br />
              Maharashtra, India.
            </address>
            <p className={styles.landmarkText}>
              <Compass size={13} className={styles.compassIcon} />
              <span><strong>Landmark:</strong> Near Baner Welcome Board</span>
            </p>
          </div>
        </div>

        {/* Timings */}
        <div className={styles.infoBlock}>
          <div className={styles.iconCircle}>
            <Clock size={18} />
          </div>
          <div className={styles.infoContent}>
            <span className={styles.infoLabel}>Visiting & Counseling Hours</span>
            <p className={styles.hoursText}>
              <strong>Monday – Saturday:</strong> 10:00 AM – 7:00 PM IST
            </p>
            <span className={styles.walkInNote}>
              Walk-ins welcome for live lab tours and personalized syllabus consultation.
            </span>
          </div>
        </div>

      </div>

      {/* Interactive Google Map Embed */}
      <div className={styles.mapContainer}>
        <iframe
          title="I-Medita Pune Campus Location Map"
          src={mapsEmbedUrl}
          className={styles.mapIframe}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
        <div className={styles.mapBadge}>
          <MapPin size={13} className={styles.badgePin} />
          <span>I-Medita, Baner, Pune</span>
        </div>
      </div>

      {/* Campus Amenities Tags */}
      <div className={styles.amenitiesSection}>
        <span className={styles.amenitiesHeading}>Center Highlights & Amenities:</span>
        <div className={styles.amenitiesTags}>
          {CAMPUS_AMENITIES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <span key={idx} className={styles.amenityTag}>
                <Icon size={13} className={styles.amenityIcon} />
                <span>{item.label}</span>
              </span>
            );
          })}
        </div>
      </div>

      {/* Action Buttons */}
      <div className={styles.cardActions}>
        <a 
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.directionsBtn}
          title="Open in Google Maps"
        >
          <Navigation size={15} />
          <span>Get Directions</span>
          <ExternalLink size={13} className={styles.extIcon} />
        </a>

        <a 
          href="tel:+918750004411"
          className={styles.callSupportBtn}
          title="Call Pune Office Support"
        >
          <PhoneCall size={15} />
          <span>Call Support</span>
        </a>
      </div>
    </div>
  );
}
