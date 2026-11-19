import React from 'react';
import { Calendar, Clock, Monitor, ArrowRight, Zap } from 'lucide-react';
import styles from './UpcomingLiveBatches.module.css';

const BATCH_SCHEDULE_DATA = [
  {
    id: 'batch-aws-cloud',
    course: 'AWS Certified Solutions Architect (SAA-C03)',
    track: 'Cloud Architecture',
    date: '14 Nov 2026',
    schedule: 'Weekend (Sat – Sun)',
    timing: '10:00 AM – 01:00 PM IST',
    mode: 'Live Interactive + Cloud Labs',
    duration: '6 Weeks',
    status: 'Filling Fast',
    statusType: 'filling'
  },
  {
    id: 'batch-ccna-weekend',
    course: 'Cisco CCNA (200-301) Foundation to Enterprise',
    track: 'Foundations',
    date: '16 Nov 2026',
    schedule: 'Weekend (Sat – Sun)',
    timing: '02:00 PM – 05:00 PM IST',
    mode: 'Live Online + Hardware Labs',
    duration: '8 Weeks',
    status: 'Seats Available',
    statusType: 'available'
  },
  {
    id: 'batch-ccnp-encor',
    course: 'Cisco CCNP Enterprise (ENCOR 350-401)',
    track: 'Professional',
    date: '21 Nov 2026',
    schedule: 'Weekday (Mon – Thu)',
    timing: '08:00 PM – 10:00 PM IST',
    mode: 'Live Interactive Online',
    duration: '10 Weeks',
    status: 'Seats Available',
    statusType: 'available'
  },
  {
    id: 'batch-palo-alto',
    course: 'Palo Alto Next-Gen Firewall (PCNSA / PCNSE)',
    track: 'Cyber Security',
    date: '23 Nov 2026',
    schedule: 'Weekend (Sat – Sun)',
    timing: '02:00 PM – 05:00 PM IST',
    mode: 'Dedicated PA-400 Labs',
    duration: '6 Weeks',
    status: 'Filling Fast',
    statusType: 'filling'
  }
];

export default function UpcomingLiveBatches({ onOpenDemo = () => {} }) {
  return (
    <section id="upcoming-live-batches" className={styles.section} aria-labelledby="batches-heading">
      <div className={styles.container}>
        
        {/* Section Header */}
        <div className={styles.header}>
          <div className={styles.badgeWrap}>
            <Zap size={13} className={styles.badgeIcon} aria-hidden="true" />
            <span>CLASSROOM &amp; LIVE ONLINE SCHEDULES</span>
          </div>
          <h2 id="batches-heading" className={styles.title}>
            Upcoming Live Batches
          </h2>
          <p className={styles.subtitle}>
            Reserve your seat in upcoming instructor-led batches. Real-time interactive lectures with 24/7 access to physical lab racks in Pune.
          </p>
        </div>

        {/* 4 Clean Batch Rows */}
        <div className={styles.batchList}>
          {BATCH_SCHEDULE_DATA.map((batch) => {
            const isFilling = batch.statusType === 'filling';

            return (
              <div key={batch.id} className={styles.batchRow}>
                {/* Date Capsule */}
                <div className={styles.dateCapsule}>
                  <Calendar size={15} className={styles.dateIcon} aria-hidden="true" />
                  <span className={styles.dateText}>{batch.date}</span>
                  <span className={styles.durationTag}>{batch.duration}</span>
                </div>

                {/* Course & Schedule Details */}
                <div className={styles.detailsCol}>
                  <div className={styles.titleRow}>
                    <h3 className={styles.courseName}>{batch.course}</h3>
                    <span className={styles.trackBadge}>{batch.track}</span>
                  </div>

                  <div className={styles.metaRow}>
                    <div className={styles.metaBlock}>
                      <Clock size={13} className={styles.metaIcon} aria-hidden="true" />
                      <span>{batch.schedule} • {batch.timing}</span>
                    </div>
                    <span className={styles.metaDivider}>•</span>
                    <div className={styles.metaBlock}>
                      <Monitor size={13} className={styles.metaIcon} aria-hidden="true" />
                      <span>{batch.mode}</span>
                    </div>
                  </div>
                </div>

                {/* Status & Reserve Action */}
                <div className={styles.actionCol}>
                  <span className={isFilling ? styles.statusFilling : styles.statusAvailable}>
                    <span className={styles.statusDot} />
                    {batch.status}
                  </span>

                  <button
                    type="button"
                    className={styles.reserveBtn}
                    onClick={onOpenDemo}
                  >
                    <span>Reserve Seat</span>
                    <ArrowRight size={13} aria-hidden="true" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
