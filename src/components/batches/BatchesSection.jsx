import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Monitor, ArrowRight } from 'lucide-react';
import styles from './BatchesSection.module.css';

const filterCategories = [
  { id: "all", label: "All Batches" },
  { id: "enterprise", label: "Cisco Enterprise" },
  { id: "security", label: "Network Security" },
  { id: "cloud", label: "Cloud & Automation" }
];

const batchSchedule = [
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
    id: "batch-palo-alto",
    category: "security",
    course: "Palo Alto Firewall (PCNSA / PCNSE)",
    track: "Cyber Security",
    date: "21 Nov 2026",
    schedule: "Weekend (Sat - Sun)",
    timing: "02:00 PM - 05:00 PM IST",
    mode: "Dedicated PA-400 Labs",
    status: "Filling Fast",
    statusType: "filling",
    enrollUrl: "https://www.imedita.com/courses/palo-alto-firewall-training/"
  },
  {
    id: "batch-checkpoint-ccse",
    category: "security",
    course: "Check Point Quantum CCSE (R81.20)",
    track: "Cyber Security",
    date: "23 Nov 2026",
    schedule: "Weekday (Mon - Thu)",
    timing: "07:00 PM - 09:00 PM IST",
    mode: "ClusterXL Appliance Labs",
    status: "Seats Available",
    statusType: "available",
    enrollUrl: "https://www.imedita.com/courses/checkpoint-firewall-training/"
  },
  {
    id: "batch-multitrack-guarantee",
    category: "enterprise",
    course: "100% Job Guaranteed Network Engineer Track",
    track: "Job Guarantee",
    date: "28 Nov 2026",
    schedule: "Daily Intensive",
    timing: "10:30 AM - 04:30 PM IST",
    mode: "Pune Campus / Hybrid",
    status: "Filling Fast",
    statusType: "filling",
    enrollUrl: "https://www.imedita.com/courses/job-guaranteed-training-for-network-engineers/"
  },
  {
    id: "batch-cisco-sdwan",
    category: "cloud",
    course: "Cisco SD-WAN Solutions (ENSDWI 300-415)",
    track: "SDN Overlay",
    date: "05 Dec 2026",
    schedule: "Weekend (Sat - Sun)",
    timing: "06:00 PM - 09:00 PM IST",
    mode: "vManage Controller Labs",
    status: "Seats Available",
    statusType: "available",
    enrollUrl: "https://www.imedita.com/courses/sd-wan-training/"
  },
  {
    id: "batch-aws-architect",
    category: "cloud",
    course: "AWS Solutions Architect Associate (SAA-C03)",
    track: "Cloud Architecture",
    date: "08 Dec 2026",
    schedule: "Weekday (Tue - Fri)",
    timing: "08:30 PM - 10:30 PM IST",
    mode: "Enterprise VPC Cloud Pods",
    status: "Seats Available",
    statusType: "available",
    enrollUrl: "https://www.imedita.com/courses/aws-solution-architect-associate-training/"
  }
];

export function BatchesSection({ onOpenDemo }) {
  const [activeTab, setActiveTab] = useState('all');

  const filteredBatches = activeTab === 'all'
    ? batchSchedule
    : batchSchedule.filter(b => b.category === activeTab);

  return (
    <section className={styles.batchesSection} id="batches">
      <div className={styles.sectionContainer}>
        
        {/* Header Block */}
        <div className={`${styles.headerBlock} scroll-header`}>
          <div className={styles.eyebrowBadge}>
            <Calendar size={14} />
            <span>Upcoming Live Batches</span>
          </div>
          <h2 className={styles.sectionHeading}>
            Reserve Your Seat in Upcoming Schedules
          </h2>
          <p className={styles.sectionSubtext}>
            Flexible weekday and weekend batches led by certified CCIE instructors with live datacenter rack access.
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
              <tr className={styles.tableHeadRow}>
                <th className={styles.thCell}>Course &amp; Certification Track</th>
                <th className={styles.thCell}>Batch Date</th>
                <th className={styles.thCell}>Schedule</th>
                <th className={styles.thCell}>Timing</th>
                <th className={styles.thCell}>Training Mode</th>
                <th className={styles.thCell}>Batch Status</th>
                <th className={styles.thCell} style={{ textAlign: 'right' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredBatches.map((item) => (
                <tr key={item.id} className={styles.tableBodyRow}>
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
