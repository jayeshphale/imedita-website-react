import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Clock, BookOpen, ExternalLink } from 'lucide-react';
import styles from './RelatedArticles.module.css';

const relatedResources = [
  {
    id: 'ccna-training',
    isInternal: true,
    url: '/courses/ccna-training',
    category: 'Foundational Networking',
    title: 'Cisco CCNA (200-301) Certification Training Course',
    desc: 'Master enterprise routing, switching, IP services, and network security on 24/7 physical Cisco hardware racks in Pune.',
    readTime: 'Complete Course',
    badge: 'Popular Course'
  },
  {
    id: 'ccna-automation',
    isInternal: true,
    url: '/courses/ccna-automation-training',
    category: 'Cloud & Programmability',
    title: 'Cisco CCNA Automation & Python Programmability Training',
    desc: 'Hands-on REST APIs, JSON data parsing, Ansible playbooks, and Cisco DNA Center automation for modern cloud engineers.',
    readTime: 'Specialized Track',
    badge: 'Advanced Track'
  },
  {
    id: 'ccna-syllabus',
    isInternal: false,
    url: 'https://www.imedita.com/blog/cisco-ccna-200-301-syllabus-changes/',
    category: 'Exam Blueprint',
    title: 'New CCNA 200-301 v1.1 Blueprint: AI & Cloud Management Deep-Dive',
    desc: 'A complete technical breakdown of the latest official Cisco blueprint updates, covering REST APIs and cloud automation.',
    readTime: '9 min read',
    badge: 'Guide'
  },
  {
    id: 'salary-guide',
    isInternal: false,
    url: 'https://www.imedita.com/blog/network-engineer-salary-in-india/',
    category: 'Career Growth',
    title: 'How to Land a ₹6–10 LPA Network & Cloud Role as a Fresher in India',
    desc: 'A milestone-by-milestone playbook on clearing cloud certifications, building physical lab portfolios, and cracking interviews.',
    readTime: '7 min read',
    badge: 'Salary Guide'
  }
];

export function RelatedArticles() {
  return (
    <div className={styles.relatedSection} id="related-resources">
      <div className={styles.sectionHeader}>
        <div className={styles.headerLeft}>
          <span className={styles.eyebrow}>FURTHER READING</span>
          <h3 className={styles.heading}>Recommended Cloud & Networking Resources</h3>
        </div>
        <p className={styles.subtext}>
          Handpicked enterprise architecture guides and certification courses to accelerate your cloud career.
        </p>
      </div>

      <div className={styles.grid}>
        {relatedResources.map((item) => {
          const Content = (
            <>
              <div className={styles.cardTop}>
                <span className={styles.categoryBadge}>{item.category}</span>
                <span className={styles.timeBadge}>
                  <Clock size={11} />
                  <span>{item.readTime}</span>
                </span>
              </div>

              <h4 className={styles.cardTitle}>
                <span>{item.title}</span>
                {item.isInternal ? (
                  <ArrowUpRight size={17} className={styles.arrowIcon} />
                ) : (
                  <ExternalLink size={16} className={styles.arrowIcon} />
                )}
              </h4>

              <p className={styles.cardDesc}>{item.desc}</p>

              <div className={styles.cardFooter}>
                <span className={styles.badgeText}>{item.badge}</span>
                <span className={styles.readMore}>
                  {item.isInternal ? 'View Curriculum →' : 'Read Article →'}
                </span>
              </div>
            </>
          );

          return item.isInternal ? (
            <Link key={item.id} to={item.url} className={styles.card}>
              {Content}
            </Link>
          ) : (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              {Content}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default RelatedArticles;
