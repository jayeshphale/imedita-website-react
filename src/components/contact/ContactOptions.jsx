import React from 'react';
import { PhoneCall, MessageCircle, Mail, ArrowUpRight, Clock, Sparkles } from 'lucide-react';
import styles from './ContactOptions.module.css';

const CONTACT_CHANNELS = [
  {
    id: 'phone',
    tag: 'Direct Hotline',
    title: 'Talk to Our Team',
    value: '+91 8750004411',
    link: 'tel:+918750004411',
    timing: 'Mon – Sat: 10:00 AM – 7:00 PM IST',
    desc: 'Speak directly with our senior career advisors for personalized course counseling, batch timings, and syllabus clarification.',
    cta: 'Call Now',
    icon: PhoneCall,
    colorScheme: 'blue'
  },
  {
    id: 'whatsapp',
    tag: 'Fastest Response',
    title: 'WhatsApp Support',
    value: '+91 8750004411',
    link: 'https://wa.me/918750004411?text=Hi%20I-Medita%20Team%2C%20I%20have%20an%20inquiry%20regarding%20training%20programs.',
    timing: 'Active 7 Days • Quick Reply',
    desc: 'Receive complete course syllabus PDFs, lab rack topologies, upcoming batch calendars, and fee breakdowns directly on WhatsApp.',
    cta: 'Chat on WhatsApp',
    icon: MessageCircle,
    colorScheme: 'green',
    isExternal: true
  },
  {
    id: 'email',
    tag: 'Official Mailbox',
    title: 'Email Us',
    value: 'info@imedita.com',
    link: 'mailto:info@imedita.com',
    timing: 'Guaranteed Reply within 24 Hours',
    desc: 'Send formal inquiries regarding corporate customized training, student admissions, certification vouchers, or invoice requests.',
    cta: 'Send Email',
    icon: Mail,
    colorScheme: 'indigo'
  }
];

export function ContactOptions() {
  return (
    <section className={styles.section} aria-labelledby="contact-options-heading">
      <div className={styles.container}>
        
        {/* Section Header */}
        <div className={styles.headerBlock}>
          <div className={styles.eyebrowBadge}>
            <span>Direct Channels</span>
          </div>
          <h2 id="contact-options-heading" className={styles.sectionHeading}>
            Choose Your Preferred Way to <span className={styles.gradientAccent}>Connect</span>
          </h2>
          <p className={styles.sectionSubtext}>
            Whether you prefer instant messaging, a direct phone conversation, or email correspondence, 
            our dedicated support desk is available to assist you.
          </p>
        </div>

        {/* 3 Contact Option Cards Grid */}
        <div className={styles.cardsGrid}>
          {CONTACT_CHANNELS.map((channel) => {
            const Icon = channel.icon;
            return (
              <div 
                key={channel.id} 
                className={`${styles.card} ${styles['card_' + channel.colorScheme]}`}
              >
                {/* Top Row: Icon & Tag */}
                <div className={styles.cardTopRow}>
                  <div className={`${styles.iconBox} ${styles['icon_' + channel.colorScheme]}`}>
                    <Icon size={22} />
                  </div>
                  <span className={`${styles.tagPill} ${styles['tag_' + channel.colorScheme]}`}>
                    {channel.tag}
                  </span>
                </div>

                {/* Card Content */}
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{channel.title}</h3>
                  <a 
                    href={channel.link} 
                    className={styles.channelValue}
                    target={channel.isExternal ? '_blank' : undefined}
                    rel={channel.isExternal ? 'noopener noreferrer' : undefined}
                  >
                    {channel.value}
                  </a>
                  
                  <div className={styles.timingBadge}>
                    <Clock size={12} className={styles.timingIcon} />
                    <span>{channel.timing}</span>
                  </div>

                  <p className={styles.cardDesc}>{channel.desc}</p>
                </div>

                {/* Card CTA */}
                <div className={styles.cardFooter}>
                  <a 
                    href={channel.link}
                    className={`${styles.ctaBtn} ${styles['btn_' + channel.colorScheme]}`}
                    target={channel.isExternal ? '_blank' : undefined}
                    rel={channel.isExternal ? 'noopener noreferrer' : undefined}
                    title={`${channel.cta}: ${channel.value}`}
                  >
                    <span>{channel.cta}</span>
                    <ArrowUpRight size={16} className={styles.btnArrow} />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
