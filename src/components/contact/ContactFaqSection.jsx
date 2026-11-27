import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import styles from './ContactFaqSection.module.css';

const FAQS = [
  {
    question: "Can I visit the Pune training center before enrolling?",
    answer: "Yes, absolutely! We actively encourage prospective learners and working professionals to visit our Baner, Pune campus. You can inspect our physical Cisco Nexus, ASA, and Palo Alto hardware racks, interact directly with our CCIE certified trainers, and sit through an ongoing lecture to experience our training atmosphere."
  },
  {
    question: "How do the free demo sessions work?",
    answer: "Our demo sessions are 100% free with zero financial or enrollment obligation. You can attend either in-person at our Baner classroom or live online via Zoom. During the demo, our instructors demonstrate real CLI configurations, packet flows, and troubleshoot live network scenarios so you can evaluate our teaching methodology firsthand."
  },
  {
    question: "What are your center timings and how fast do you respond?",
    answer: "Our Pune center is open Monday through Saturday from 10:00 AM to 7:00 PM IST. For direct phone calls (+91 8750004411) and WhatsApp messages, our admissions desk responds within 15–30 minutes during active hours. Web inquiry forms receive a detailed personalized callback within 2 business days."
  },
  {
    question: "Do you offer online live interactive batches for outstation students?",
    answer: "Yes! More than 65% of our students join from outside Pune across India, the US, UK, UAE, and Australia. Online batches feature live, two-way audio-video sessions with CCIE mentors, 24/7 cloud rack access to configure real routers and firewalls, class recordings for revision, and full placement assistance."
  }
];

export function ContactFaqSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggleAccordion = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <section className={styles.section} aria-labelledby="contact-faq-heading">
      <div className={styles.container}>
        
        {/* Section Header */}
        <div className={styles.header}>
          <div className={styles.kicker}>
            <HelpCircle size={14} className={styles.kickerIcon} />
            <span>Got Questions?</span>
          </div>
          <h2 id="contact-faq-heading" className={styles.title}>
            Frequently Asked Questions
          </h2>
          <p className={styles.subtitle}>
            Everything you need to know about visiting our campus, attending demo sessions, and course admissions.
          </p>
        </div>

        {/* Accordion List */}
        <div className={styles.faqList}>
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx} 
                className={`${styles.faqItem} ${isOpen ? styles.itemOpen : ''}`}
              >
                <button
                  type="button"
                  className={styles.faqQuestionBtn}
                  onClick={() => toggleAccordion(idx)}
                  aria-expanded={isOpen}
                >
                  <span className={styles.qText}>{faq.question}</span>
                  <div className={`${styles.iconWrap} ${isOpen ? styles.iconWrapOpen : ''}`}>
                    <ChevronDown size={18} />
                  </div>
                </button>

                {isOpen && (
                  <div className={styles.faqAnswerBody}>
                    <p className={styles.aText}>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
