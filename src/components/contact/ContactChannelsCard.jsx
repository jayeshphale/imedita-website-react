import React from 'react';
import { PhoneCall, MessageCircle, Mail, Clock, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import styles from './ContactChannelsCard.module.css';

export function ContactChannelsCard() {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <span className={styles.headerKicker}>Direct Reach Hotline</span>
        <h2 className={styles.cardHeading}>Instant Contact Channels</h2>
      </div>

      <div className={styles.channelsList}>
        
        {/* Channel 1: Phone */}
        <div className={`${styles.channelItem} ${styles.itemPhone}`}>
          <div className={styles.iconBox}>
            <PhoneCall size={20} />
          </div>
          <div className={styles.channelDetails}>
            <div className={styles.titleRow}>
              <h3 className={styles.channelTitle}>Talk to Our Team</h3>
              <span className={styles.liveTag}>Active 9 AM – 8 PM</span>
            </div>
            <a href="tel:+918750004411" className={styles.valueLink}>
              +91 8750004411
            </a>
            <p className={styles.channelMeta}>
              Direct telephone counseling with certified senior career mentors.
            </p>
          </div>
          <a href="tel:+918750004411" className={styles.actionBtn} title="Call Now">
            <span>Call Now</span>
            <ArrowUpRight size={15} />
          </a>
        </div>

        {/* Channel 2: WhatsApp */}
        <div className={`${styles.channelItem} ${styles.itemWhatsApp}`}>
          <div className={styles.iconBox}>
            <MessageCircle size={20} />
          </div>
          <div className={styles.channelDetails}>
            <div className={styles.titleRow}>
              <h3 className={styles.channelTitle}>WhatsApp Support</h3>
              <span className={styles.fastTag}>Fastest Reply</span>
            </div>
            <a 
              href="https://wa.me/918750004411?text=Hi%20I-Medita%20Team%2C%20I%20have%20an%20inquiry%20regarding%20training%20programs." 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.valueLink}
            >
              +91 8750004411
            </a>
            <p className={styles.channelMeta}>
              Get syllabus PDFs, lab topologies, and next batch dates directly on WhatsApp.
            </p>
          </div>
          <a 
            href="https://wa.me/918750004411?text=Hi%20I-Medita%20Team%2C%20I%20have%20an%20inquiry%20regarding%20training%20programs." 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.actionBtn}
            title="Chat on WhatsApp"
          >
            <span>Chat on WhatsApp</span>
            <ArrowUpRight size={15} />
          </a>
        </div>

        {/* Channel 3: Email */}
        <div className={`${styles.channelItem} ${styles.itemEmail}`}>
          <div className={styles.iconBox}>
            <Mail size={20} />
          </div>
          <div className={styles.channelDetails}>
            <div className={styles.titleRow}>
              <h3 className={styles.channelTitle}>Email Us</h3>
              <span className={styles.emailTag}>Within 24 Hours</span>
            </div>
            <a href="mailto:info@imedita.com" className={styles.valueLink}>
              info@imedita.com
            </a>
            <p className={styles.channelMeta}>
              Official admissions inquiries, corporate training proposals & curriculum downloads.
            </p>
          </div>
          <a href="mailto:info@imedita.com" className={styles.actionBtn} title="Send Email">
            <span>Send Email</span>
            <ArrowUpRight size={15} />
          </a>
        </div>

      </div>
    </div>
  );
}
