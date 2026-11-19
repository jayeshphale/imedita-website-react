import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  Monitor, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  Users, 
  Zap,
  MapPin
} from 'lucide-react';
import styles from './UpcomingLiveBatches.module.css';

const BATCH_CATEGORIES = [
  { id: 'all', label: 'All Batches' },
  { id: 'enterprise', label: 'Cisco Enterprise' },
  { id: 'security', label: 'Network Security' },
  { id: 'cloud', label: 'Cloud & Automation' }
];

const BATCH_SCHEDULE_DATA = [
  {
    id: 'batch-aws-cloud',
    category: 'cloud',
    course: 'AWS Certified Solutions Architect (SAA-C03)',
    track: 'Cloud Architecture',
    date: '14 Nov 2026',
    schedule: 'Weekend (Sat – Sun)',
    timing: '10:00 AM – 01:00 PM IST',
    mode: 'Live Interactive + 24/7 Cloud Labs',
    duration: '6 Weeks',
    status: 'Filling Fast',
    statusType: 'filling',
    enrollUrl: 'https://www.imedita.com/courses/aws-training/'
  },
  {
    id: 'batch-ccna-weekend',
    category: 'enterprise',
    course: 'Cisco CCNA (200-301) Foundation to Enterprise',
    track: 'Foundations',
    date: '16 Nov 2026',
    schedule: 'Weekend (Sat – Sun)',
    timing: '02:00 PM – 05:00 PM IST',
    mode: 'Live Online + Pune Hardware Labs',
    duration: '8 Weeks',
    status: 'Seats Available',
    statusType: 'available',
    enrollUrl: '/courses/ccna-training'
  },
  {
    id: 'batch-ccnp-encor',
    category: 'enterprise',
    course: 'Cisco CCNP Enterprise (ENCOR 350-401)',
    track: 'Professional',
    date: '21 Nov 2026',
    schedule: 'Weekday (Mon – Thu)',
    timing: '08:00 PM – 10:00 PM IST',
    mode: 'Live Interactive Online',
    duration: '10 Weeks',
    status: 'Seats Available',
    statusType: 'available',
    enrollUrl: 'https://www.imedita.com/courses/ccnp-training/'
  },
  {
    id: 'batch-palo-alto',
    category: 'security',
    course: 'Palo Alto Next-Gen Firewall (PCNSA / PCNSE)',
    track: 'Cyber Security',
    date: '23 Nov 2026',
    schedule: 'Weekend (Sat – Sun)',
    timing: '02:00 PM – 05:00 PM IST',
    mode: 'Dedicated PA-400 Physical Labs',
    duration: '6 Weeks',
    status: 'Filling Fast',
    statusType: 'filling',
    enrollUrl: 'https://www.imedita.com/courses/palo-alto-firewall-training/'
  },
  {
    id: 'batch-checkpoint-ccse',
    category: 'security',
    course: 'Check Point Quantum Security CCSE (R81.20)',
    track: 'Cyber Security',
    date: '28 Nov 2026',
    schedule: 'Weekday (Mon – Thu)',
    timing: '07:00 PM – 09:00 PM IST',
    mode: 'ClusterXL Appliance Labs',
    duration: '6 Weeks',
    status: 'Seats Available',
    statusType: 'available',
    enrollUrl: 'https://www.imedita.com/courses/checkpoint-firewall-training/'
  },
  {
    id: 'batch-multitrack-guarantee',
    category: 'enterprise',
    course: '100% Job Guaranteed Network Engineer Track',
    track: 'Career Guarantee',
    date: '02 Dec 2026',
    schedule: 'Daily Intensive (Mon – Fri)',
    timing: '10:30 AM – 04:30 PM IST',
    mode: 'Pune Campus / Hybrid Intensive',
    duration: '4 – 6 Months',
    status: 'Filling Fast',
    statusType: 'filling',
    enrollUrl: 'https://www.imedita.com/courses/job-guaranteed-training-for-network-engineers/'
  }
];

export default function UpcomingLiveBatches({ onOpenDemo = () => {} }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredBatches = activeCategory === 'all'
    ? BATCH_SCHEDULE_DATA
    : BATCH_SCHEDULE_DATA.filter(b => b.category === activeCategory);

  return (
    <section id="upcoming-live-batches" className={styles.section} aria-labelledby="batches-heading">
      <div className={styles.container}>
        
        {/* Section Header */}
        <div className={styles.header}>
          <div className={styles.badgeWrap}>
            <Zap className={styles.badgeIcon} size={15} aria-hidden="true" />
            <span>CLASSROOM &amp; LIVE ONLINE SCHEDULES</span>
          </div>
          <h2 id="batches-heading" className={styles.title}>
            Upcoming Live Batches
          </h2>
          <p className={styles.subtitle}>
            Reserve your seat in upcoming instructor-led batches. Real-time interactive lectures, small batch sizes 
            for personalized doubt solving, and 24/7 access to physical lab racks in Pune.
          </p>

          {/* Category Tabs */}
          <div className={styles.filterBar} role="tablist" aria-label="Batch Categories">
            {BATCH_CATEGORIES.map(cat => (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={activeCategory === cat.id}
                className={`${styles.filterBtn} ${activeCategory === cat.id ? styles.filterBtnActive : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Batches Table / Cards List */}
        <div className={styles.batchList}>
          {filteredBatches.map((batch) => {
            const isFilling = batch.statusType === 'filling';

            return (
              <div key={batch.id} className={styles.batchRow}>
                {/* Left: Date Capsule */}
                <div className={styles.dateCapsule}>
                  <Calendar size={18} className={styles.dateIcon} aria-hidden="true" />
                  <span className={styles.dateText}>{batch.date}</span>
                  <span className={styles.durationTag}>{batch.duration}</span>
                </div>

                {/* Middle: Course & Schedule Details */}
                <div className={styles.detailsCol}>
                  <div className={styles.titleRow}>
                    <h3 className={styles.courseName}>{batch.course}</h3>
                    <span className={styles.trackBadge}>{batch.track}</span>
                  </div>

                  <div className={styles.metaRow}>
                    <div className={styles.metaBlock}>
                      <Clock size={14} className={styles.metaIcon} aria-hidden="true" />
                      <span>{batch.schedule} • {batch.timing}</span>
                    </div>

                    <div className={styles.metaBlock}>
                      <Monitor size={14} className={styles.metaIcon} aria-hidden="true" />
                      <span>{batch.mode}</span>
                    </div>
                  </div>
                </div>

                {/* Right: Status Pill & Action Button */}
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
                    <ArrowRight size={15} aria-hidden="true" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Schedule Support Note */}
        <div className={styles.scheduleNote}>
          <div className={styles.noteLeft}>
            <MapPin size={18} className={styles.pinIcon} aria-hidden="true" />
            <span>
              <strong>Training Delivery Options:</strong> Attend live interactive online lectures with cloud lab topologies from anywhere globally, or join physical classroom sessions at our Pune Datacenter Campus.
            </span>
          </div>
          <button 
            type="button" 
            className={styles.customDateBtn} 
            onClick={onOpenDemo}
          >
            Request Custom Corporate Schedule
          </button>
        </div>

      </div>
    </section>
  );
}
