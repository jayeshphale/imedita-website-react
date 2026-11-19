import React from 'react';
import styles from './ArticleDate.module.css';

export function ArticleDate({ month = 'NOV', day = '19', year = '2026', isLast = false }) {
  return (
    <div className={styles.dateCol}>
      <div className={styles.dateBlock}>
        <span className={styles.monthText}>{month}</span>
        <span className={styles.dayNumber}>{day}</span>
        <span className={styles.yearText}>{year}</span>
      </div>

      {/* Timeline Node and Vertical Line */}
      <div className={styles.timelineTrack} aria-hidden="true">
        <div className={styles.timelineNode} />
        {!isLast && <div className={styles.timelineSpine} />}
      </div>
    </div>
  );
}

export default ArticleDate;
