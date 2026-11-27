import React from 'react';
import { PhoneCall, Mail, MessageCircle, Clock, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import styles from './ContactCards.module.css';

const CONTACT_CHANNELS = [
  {
    id: 'phone',
    type: 'phone',
    icon: PhoneCall,
    iconTheme: 'blue',
    title: 'Talk to Our Team',
    subtitle: 'Direct telephone counseling with certified senior career mentors.',
    primaryValue: '+91 8750004411',
    href: 'tel:+918750004411',
    ctaText: 'Call Now',
    metaIcon: Clock,
    metaText: 'Mon – Sat: 9:00 AM – 8:00 PM IST',
    badge: 'Immediate Response'
  },
  {
    id: 'email',
    type: 'email',
    icon: Mail,
    iconTheme: 'indigo',
    title: 'Email Us',
    subtitle: 'Official admissions inquiries, corporate training proposals & syllabus downloads.',
    primaryValue: 'info@imedita.com',
    href: 'mailto:info@imedita.com',
    ctaText: 'Send Email',
    metaIcon: Clock,
    metaText: 'Response within 24 business hours',
    badge: 'Official Desk'
  },
  {
    id: 'whatsapp',
    type: 'whatsapp',
    icon: MessageCircle,
    iconTheme: 'emerald',
    title: 'WhatsApp Support',
    subtitle: 'Quick answers, batch timings, lab pod pictures & PDF curriculum on your phone.',
    primaryValue: '+91 8750004411',
    href: 'https://wa.me/918750004411?text=Hi%20I-Medita%20Team%2C%20I%20have%20an%20inquiry%20regarding%20training%20programs.',
    ctaText: 'Chat on WhatsApp',
    metaIcon: CheckCircle2,
    metaText: 'Active daily for instant guidance',
    badge: 'Fastest Reply'
  }
];

export function ContactCards() {
  return (
    <section className={styles.sectionWrapper} aria-labelledby="contact-options-heading">
      <div className={styles.container}>
        
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>Direct Communication Channels</span>
          <h2 id="contact-options-heading" className={styles.sectionTitle}>
            Choose Your Preferred Way to Connect
          </h2>
          <p className={styles.sectionDesc}>
            Whether you want immediate phone counseling, an email prospectus, or a fast WhatsApp discussion, our team is standing by.
          </p>
        </div>

        {/* 3 Contact Cards Grid */}
        <div className={styles.cardsGrid}>
          {CONTACT_CHANNELS.map((item) => {
            const Icon = item.icon;
            const MetaIcon = item.metaIcon;
            return (
              <div key={item.id} className={`${styles.card} ${styles[`card_${item.iconTheme}`]}`}>
                {/* Card Top: Icon & Badge */}
                <div className={styles.cardHeader}>
                  <div className={`${styles.iconBox} ${styles[`iconBox_${item.iconTheme}`]}`}>
                    <Icon size={24} strokeWidth={2} />
                  </div>
                  <span className={`${styles.channelBadge} ${styles[`badge_${item.iconTheme}`]}`}>
                    {item.badge}
                  </span>
                </div>

                {/* Card Body */}
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardSubtitle}>{item.subtitle}</p>

                {/* Primary Contact Value Display */}
                <div className={styles.valueDisplay}>
                  <a href={item.href} className={styles.valueLink} target={item.type === 'whatsapp' ? '_blank' : undefined} rel={item.type === 'whatsapp' ? 'noopener noreferrer' : undefined}>
                    {item.primaryValue}
                  </a>
                </div>

                {/* Meta Response Time */}
                <div className={styles.metaRow}>
                  <MetaIcon size={14} className={styles.metaIcon} />
                  <span className={styles.metaText}>{item.metaText}</span>
                </div>

                {/* Card Action CTA */}
                <div className={styles.cardFooter}>
                  <a 
                    href={item.href} 
                    className={`${styles.ctaBtn} ${styles[`btn_${item.iconTheme}`]}`}
                    target={item.type === 'whatsapp' ? '_blank' : undefined}
                    rel={item.type === 'whatsapp' ? 'noopener noreferrer' : undefined}
                  >
                    <span>{item.ctaText}</span>
                    <ArrowRight size={15} className={styles.btnArrow} />
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
