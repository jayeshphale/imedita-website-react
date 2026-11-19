import React from 'react';
import { Calendar, Clock, CheckCircle2, ShieldCheck, UserCheck } from 'lucide-react';
import styles from './BlogMeta.module.css';

export function BlogMeta({
  author = {
    name: 'Saurabh Yadav',
    role: 'Triple CCIE #46962',
    image: 'https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/12/10071401/Saurabh-Yadav-imedita.svg'
  },
  reviewer = {
    name: 'Sudhanshu Bhat',
    role: 'CCIE #41212 & AWS Solutions Arch',
    image: 'https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/12/10071359/Sudhanshu-Bhat-imedita.svg'
  },
  publishedDate = '14 Nov 2026',
  updatedDate = '18 Nov 2026',
  readTime = '12 min read'
}) {
  return (
    <div className={styles.metaContainer}>
      {/* Author & Reviewer */}
      <div className={styles.creatorsGroup}>
        {/* Author */}
        <div className={styles.personCard}>
          <img
            src={author.image}
            alt={author.name}
            className={styles.personAvatar}
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
          <div className={styles.personDetails}>
            <span className={styles.personLabel}>Authored By</span>
            <span className={styles.personName}>{author.name}</span>
            <span className={styles.personCredential}>{author.role}</span>
          </div>
        </div>

        {/* Divider */}
        <div className={styles.metaDivider} />

        {/* Technical Reviewer */}
        {reviewer && (
          <div className={styles.personCard}>
            <img
              src={reviewer.image}
              alt={reviewer.name}
              className={styles.personAvatar}
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <div className={styles.personDetails}>
              <span className={styles.personLabel}>
                <ShieldCheck size={11} className={styles.verifiedIcon} />
                Technical Reviewer
              </span>
              <span className={styles.personName}>{reviewer.name}</span>
              <span className={styles.personCredential}>{reviewer.role}</span>
            </div>
          </div>
        )}
      </div>

      {/* Timestamp & Read Time */}
      <div className={styles.timeMetaGroup}>
        <div className={styles.timeMetaItem}>
          <Calendar size={13} className={styles.timeIcon} />
          <span>Last Updated: <strong>{updatedDate}</strong></span>
        </div>
        <span className={styles.bulletSeparator}>•</span>
        <div className={styles.timeMetaItem}>
          <Clock size={13} className={styles.timeIcon} />
          <span>{readTime}</span>
        </div>
        <span className={styles.bulletSeparator}>•</span>
        <div className={styles.verifiedBadge}>
          <CheckCircle2 size={12} className={styles.checkIcon} />
          <span>2026 Pricing Verified</span>
        </div>
      </div>
    </div>
  );
}

export default BlogMeta;
