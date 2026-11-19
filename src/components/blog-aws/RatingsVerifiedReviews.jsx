import React from 'react';
import { Star, CheckCircle2, Quote } from 'lucide-react';
import styles from './RatingsVerifiedReviews.module.css';

// Google 4-Color SVG Icon
const GoogleSvgLogo = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
  </svg>
);

const VERIFIED_REVIEWS = [
  {
    id: 'rev-1',
    name: 'Akshay Kulkarni',
    role: 'Network Engineer',
    company: 'Orange Business',
    review: 'The 24/7 physical lab rack access made all the difference. Learning directly under Saurabh Sir’s guidance helped me clear CCNA and CCNP with ease. Real enterprise hardware routers.',
    course: 'CCNP Enterprise'
  },
  {
    id: 'rev-2',
    name: 'Pooja Deshmukh',
    role: 'Security Analyst',
    company: 'Wipro',
    review: 'Completed Multi-Vendor Firewall and AWS training. The dedicated Palo Alto PA-400 and Checkpoint pods gave me hands-on practical troubleshooting confidence for production perimeter policies.',
    course: 'Firewall Mastery & AWS'
  },
  {
    id: 'rev-3',
    name: 'Rahul Verma',
    role: 'Infrastructure Lead',
    company: 'Dimension Data',
    review: 'No simulators or artificial delays. Real Catalyst 9300 switches and ISR routers to configure. Best institute in Pune for core networking, architecture drills, and high availability design.',
    course: 'Job Guaranteed Track'
  }
];

export default function RatingsVerifiedReviews() {
  return (
    <section id="ratings-reviews" className={styles.section} aria-labelledby="reviews-heading">
      <div className={styles.container}>
        
        {/* Header Block */}
        <div className={styles.header}>
          <div className={styles.googlePill}>
            <GoogleSvgLogo />
            <span className={styles.ratingValue}>4.8 / 5.0</span>
            <div className={styles.starsRow} aria-label="5 out of 5 stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="#F59E0B" color="#F59E0B" />
              ))}
            </div>
            <span className={styles.ratingCount}>1,200+ Verified Reviews</span>
          </div>

          <h2 id="reviews-heading" className={styles.title}>
            4.8 / 5.0 – 1,200+ Verified Reviews
          </h2>
          <p className={styles.subtitle}>
            Validated by thousands of working network architects, cybersecurity specialists, and cloud engineers.
          </p>
        </div>

        {/* 3 Clean Review Cards */}
        <div className={styles.reviewsGrid}>
          {VERIFIED_REVIEWS.map((rev) => (
            <article key={rev.id} className={styles.reviewCard}>
              <div className={styles.cardTop}>
                <div className={styles.avatarInitials}>
                  {rev.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h3 className={styles.authorName}>{rev.name}</h3>
                  <p className={styles.authorPlaced}>
                    {rev.role} @ <strong className={styles.companyName}>{rev.company}</strong>
                  </p>
                </div>
              </div>

              <p className={styles.reviewText}>"{rev.review}"</p>

              <div className={styles.cardBottom}>
                <span className={styles.courseTag}>{rev.course}</span>
                <span className={styles.verifiedTag}>
                  <CheckCircle2 size={12} className={styles.checkIcon} aria-hidden="true" />
                  Verified
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
