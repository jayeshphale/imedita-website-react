import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  Monitor, 
  ArrowRight, 
  Sparkles 
} from 'lucide-react';
import styles from './BatchesSection.module.css';

const upcomingBatchesData = [
  {
    id: "batch-ccna-weekend",
    category: "enterprise",
    course: "Cisco CCNA (200-301)",
    track: "Foundations",
    date: "14 Nov 2026",
    schedule: "Weekend (Sat - Sun)",
    timing: "10:00 AM - 01:00 PM IST",
    mode: "Live Online + Classroom Labs",
    status: "Filling Fast",
    statusType: "filling",
    enrollUrl: "/courses/ccna-training"
  },
  {
    id: "batch-ccnp-encor",
    category: "enterprise",
    course: "Cisco CCNP Enterprise (ENCOR 350-401)",
    track: "Professional",
    date: "16 Nov 2026",
    schedule: "Weekday (Mon - Thu)",
    timing: "08:00 PM - 10:00 PM IST",
    mode: "Live Interactive Online",
    status: "Seats Available",
    statusType: "available",
    enrollUrl: "https://www.imedita.com/courses/ccnp-training/"
  },
  {
    id: "batch-multivendor-firewall",
    category: "security",
    course: "Multi-Vendor Firewall Masterclass",
    track: "Security",
    date: "21 Nov 2026",
    schedule: "Weekend (Sat - Sun)",
    timing: "02:00 PM - 05:00 PM IST",
    mode: "Live Online + Hardware Pods",
    status: "Filling Fast",
    statusType: "filling",
    enrollUrl: "https://www.imedita.com/courses/multi-vendor-training/"
  },
  {
    id: "batch-paloalto-pcnse",
    category: "security",
    course: "Palo Alto PCNSA / PCNSE",
    track: "Security",
    date: "23 Nov 2026",
    schedule: "Weekday (Mon - Thu)",
    timing: "07:00 AM - 09:00 AM IST",
    mode: "Live Interactive Online",
    status: "Seats Available",
    statusType: "available",
    enrollUrl: "https://www.imedita.com/courses/palo-alto-firewall-training/"
  },
  {
    id: "batch-job-guarantee-network",
    category: "job-guarantee",
    course: "Job Guaranteed Network Engineer Track",
    track: "Placement",
    date: "01 Dec 2026",
    schedule: "Regular (Mon - Fri)",
    timing: "10:00 AM - 04:00 PM IST",
    mode: "Classroom (Pune Campus)",
    status: "Filling Fast",
    statusType: "filling",
    enrollUrl: "https://www.imedita.com/courses/job-guaranteed-training-for-network-engineers/"
  },
  {
    id: "batch-checkpoint-ccse",
    category: "security",
    course: "Checkpoint Firewall (CCSA / CCSE)",
    track: "Security",
    date: "05 Dec 2026",
    schedule: "Weekend (Sat - Sun)",
    timing: "06:00 PM - 09:00 PM IST",
    mode: "Live Interactive Online",
    status: "Seats Available",
    statusType: "available",
    enrollUrl: "https://www.imedita.com/courses/checkpoint-firewall-training/"
  },
  {
    id: "batch-sdwan",
    category: "enterprise",
    course: "Cisco SD-WAN (ENSDWI 300-415)",
    track: "Advanced",
    date: "07 Dec 2026",
    schedule: "Weekday (Mon - Thu)",
    timing: "08:30 PM - 10:30 PM IST",
    mode: "Live Interactive Online",
    status: "Seats Available",
    statusType: "available",
    enrollUrl: "https://www.imedita.com/courses/sd-wan-training/"
  },
  {
    id: "batch-job-guarantee-cyber",
    category: "job-guarantee",
    course: "Job Guaranteed Cyber Security Track",
    track: "Placement",
    date: "12 Dec 2026",
    schedule: "Regular (Mon - Fri)",
    timing: "10:00 AM - 04:00 PM IST",
    mode: "Classroom + Online Hybrid",
    status: "Filling Fast",
    statusType: "filling",
    enrollUrl: "https://www.imedita.com/courses/job-guaranteed-training-for-cyber-security-engineers/"
  }
];

const filterCategories = [
  { id: "all", label: "All Upcoming Batches" },
  { id: "enterprise", label: "Cisco Routing & Switching" },
  { id: "security", label: "Next-Gen Firewalls" },
  { id: "job-guarantee", label: "Job Guarantee Programs" }
];

export function BatchesSection({ onOpenDemo }) {
  const [activeTab, setActiveTab] = useState('all');

  const filteredBatches = activeTab === 'all'
    ? upcomingBatchesData
    : upcomingBatchesData.filter(b => b.category === activeTab);

  return (
    <section className={styles.batchesSection} id="batches">
      <div className={styles.sectionContainer}>
        
        {/* Header Block */}
        <div className={`${styles.headerBlock} scroll-header`}>
          <div className={styles.eyebrowBadge}>
            <Sparkles size={14} />
            <span>Interactive Live Cohorts</span>
          </div>
          <h2 className={styles.sectionHeading}>
            Upcoming Live Interactive Batches
          </h2>
          <p className={styles.sectionSubtext}>
            Choose between flexible weekend slots, evening weekday batches, or intensive classroom bootcamps in Pune.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className={`${styles.tabsWrapper} scroll-reveal`}>
          {filterCategories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${styles.tabBtn} ${activeTab === tab.id ? styles.tabBtnActive : ''}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Desktop View: Interactive Table */}
        <div className={`${styles.desktopTableView} scroll-reveal`}>
          <table className={styles.tableElement}>
            <thead>
              <tr className={styles.tableHeaderRow}>
                <th className={styles.thCell}>Course & Track</th>
                <th className={styles.thCell}>Start Date</th>
                <th className={styles.thCell}>Schedule</th>
                <th className={styles.thCell}>Timings (IST)</th>
                <th className={styles.thCell}>Delivery Mode</th>
                <th className={styles.thCell}>Batch Status</th>
                <th className={styles.thCell} style={{ textAlign: 'right' }}>Enrollment</th>
              </tr>
            </thead>
            <tbody>
              {filteredBatches.map((item) => (
                <tr key={item.id} className={styles.tableRow}>
                  <td className={styles.tdCell}>
                    <span className={styles.courseName}>{item.course}</span>
                    <span className={styles.trackTag}>{item.track}</span>
                  </td>
                  <td className={styles.tdCell} style={{ fontWeight: 700, color: '#0F172A' }}>
                    {item.date}
                  </td>
                  <td className={styles.tdCell}>
                    <span className={styles.schedulePill}>{item.schedule}</span>
                  </td>
                  <td className={styles.tdCell}>
                    <div className={styles.timingWrapper}>
                      <Clock size={13} color="#0066FF" />
                      <span>{item.timing}</span>
                    </div>
                  </td>
                  <td className={styles.tdCell}>
                    <div className={styles.modeWrapper}>
                      <Monitor size={13} />
                      <span>{item.mode}</span>
                    </div>
                  </td>
                  <td className={styles.tdCell}>
                    <span className={`${styles.statusPill} ${item.statusType === 'filling' ? styles.statusFilling : styles.statusAvailable}`}>
                      <span className={`${styles.pulseDot} ${item.statusType === 'filling' ? styles.dotAmber : styles.dotGreen}`}></span>
                      <span>{item.status}</span>
                    </span>
                  </td>
                  <td className={styles.tdCell} style={{ textAlign: 'right' }}>
                    {item.enrollUrl && item.enrollUrl.startsWith('/') ? (
                      <Link 
                        to={item.enrollUrl} 
                        className={styles.enrollTableBtn}
                      >
                        <span>Book Seat</span>
                        <ArrowRight size={13} />
                      </Link>
                    ) : (
                      <a 
                        href={item.enrollUrl} 
                        target="_blank" 
                        rel="noreferrer" 
                        className={styles.enrollTableBtn}
                        onClick={(e) => {
                          if (onOpenDemo && item.enrollUrl.startsWith('#')) {
                            e.preventDefault();
                            onOpenDemo(item.course);
                          }
                        }}
                      >
                        <span>Book Seat</span>
                        <ArrowRight size={13} />
                      </a>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View: High-Density Card List */}
        <div className={`${styles.mobileCardsView} scroll-stagger-cards`}>
          {filteredBatches.map((item) => (
            <div key={item.id} className={styles.mobileCard}>
              <div className={styles.mobileCardTop}>
                <span className={styles.trackTag}>{item.track}</span>
                <span className={`${styles.statusPill} ${item.statusType === 'filling' ? styles.statusFilling : styles.statusAvailable}`}>
                  <span className={`${styles.pulseDot} ${item.statusType === 'filling' ? styles.dotAmber : styles.dotGreen}`}></span>
                  <span>{item.status}</span>
                </span>
              </div>

              <h3 className={styles.mobileCardTitle}>{item.course}</h3>

              <div className={styles.mobileMetaGrid}>
                <div className={styles.mobileMetaItem}>
                  <span className={styles.metaLabel}>Start Date</span>
                  <span className={styles.metaValue}>
                    <Calendar size={13} color="#0066FF" />
                    {item.date}
                  </span>
                </div>
                <div className={styles.mobileMetaItem}>
                  <span className={styles.metaLabel}>Schedule</span>
                  <span className={styles.metaValue}>{item.schedule}</span>
                </div>
                <div className={styles.mobileMetaItem}>
                  <span className={styles.metaLabel}>Timing (IST)</span>
                  <span className={styles.metaValue}>
                    <Clock size={13} color="#64748B" />
                    {item.timing.split(' IST')[0]}
                  </span>
                </div>
                <div className={styles.mobileMetaItem}>
                  <span className={styles.metaLabel}>Mode</span>
                  <span className={styles.metaValue}>{item.mode.split(' +')[0]}</span>
                </div>
              </div>

              {item.enrollUrl && item.enrollUrl.startsWith('/') ? (
                <Link 
                  to={item.enrollUrl} 
                  className={styles.mobileEnrollBtn}
                >
                  <span>Enroll in Batch</span>
                  <ArrowRight size={14} />
                </Link>
              ) : (
                <a 
                  href={item.enrollUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className={styles.mobileEnrollBtn}
                  onClick={(e) => {
                    if (onOpenDemo && item.enrollUrl.startsWith('#')) {
                      e.preventDefault();
                      onOpenDemo(item.course);
                    }
                  }}
                >
                  <span>Enroll in Batch</span>
                  <ArrowRight size={14} />
                </a>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export { BatchesSection as UpcomingBatchesSection };
export default BatchesSection;
