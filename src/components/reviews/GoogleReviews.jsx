import React from 'react';
import { Star, CheckCircle2 } from 'lucide-react';
import styles from './GoogleReviews.module.css';

// Google 4-Color SVG Icon
const GoogleSvgLogo = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
  </svg>
);

const reviewsCol1 = [
  {
    id: "rev-1",
    name: "Akshay Kulkarni",
    placedAt: "Network Engineer @ Orange Business",
    text: "The 24/7 physical lab rack access made all the difference. Learning directly under Saurabh Sir's guidance helped me clear both CCNA and CCNP ENCOR with ease.",
    course: "CCNP Enterprise",
    time: "2 weeks ago",
    avatarBg: "0066FF"
  },
  {
    id: "rev-2",
    name: "Pooja Deshmukh",
    placedAt: "Security Analyst @ Wipro",
    text: "Completed Multi-Vendor Firewall training. The dedicated Palo Alto PA-400 and Checkpoint pods gave me hands-on practical troubleshooting confidence.",
    course: "Firewall Mastery",
    time: "1 month ago",
    avatarBg: "0066FF"
  },
  {
    id: "rev-3",
    name: "Rahul Verma",
    placedAt: "Infrastructure Lead @ Dimension Data",
    text: "No simulators or packet delay tricks. Real Catalyst 9300 switches and ISR routers to configure. Best institute in Pune for core networking.",
    course: "Job Guaranteed Program",
    time: "2 months ago",
    avatarBg: "0066FF"
  }
];

const reviewsCol2 = [
  {
    id: "rev-4",
    name: "Sneha Patil",
    placedAt: "Cloud Security @ Accenture",
    text: "The mock interview drills by the placement cell were spot on. I faced the exact same SD-WAN and IPSec VPN troubleshooting scenarios during my technical round.",
    course: "Cisco SD-WAN",
    time: "3 weeks ago",
    avatarBg: "0284C7"
  },
  {
    id: "rev-5",
    name: "Vikram Rathi",
    placedAt: "Systems Engineer @ Infosys",
    text: "Saurabh Sir explains complex routing topologies with extreme clarity. Even as a fresher, I was able to grasp OSPF, BGP, and MPLS within weeks.",
    course: "CCNA 200-301",
    time: "1 month ago",
    avatarBg: "0284C7"
  },
  {
    id: "rev-6",
    name: "Rohan Joshi",
    placedAt: "SOC Engineer @ NTT Data",
    text: "Loved the flexibility of weekend batches. Lifetime LMS access and backup session recordings helped me catch up on classes without disturbing my job.",
    course: "Check Point CCSE",
    time: "3 months ago",
    avatarBg: "0284C7"
  }
];

const reviewsCol3 = [
  {
    id: "rev-7",
    name: "Aditya Shinde",
    placedAt: "TAC Engineer @ Cisco Systems",
    text: "Triple CCIE faculty is not just a marketing claim here. You literally sit with Saurabh Sir and solve live packet captures and routing loops. Worth every single penny.",
    course: "CCIE EI Lab Prep",
    time: "3 weeks ago",
    avatarBg: "059669"
  },
  {
    id: "rev-8",
    name: "Meera Nair",
    placedAt: "Network Architect @ HCL Tech",
    text: "The dedicated placement support actively shares interview drives with Fortune 500 companies. Got placed within 45 days of completing the course.",
    course: "Job Guaranteed Track",
    time: "2 months ago",
    avatarBg: "059669"
  },
  {
    id: "rev-9",
    name: "Karan Mehta",
    placedAt: "Cloud Engineer @ Capgemini",
    text: "AWS VPC architecture combined with Cisco routing concepts made my resume stand out. Highly recommend I-Medita for serious networking careers.",
    course: "AWS Solutions Architect",
    time: "4 months ago",
    avatarBg: "059669"
  }
];

function ReviewCardItem({ rev }) {
  return (
    <div className={styles.reviewCard}>
      {/* Card Header: Author Info + Google Brand Icon */}
      <div className={styles.cardHeader}>
        <div className={styles.authorBox}>
          <img 
            src={`https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(rev.name)}&backgroundColor=${rev.avatarBg}&textColor=ffffff`} 
            alt={rev.name} 
            className={styles.avatar} 
            loading="lazy"
          />
          <div className={styles.authorDetails}>
            <span className={styles.authorName}>{rev.name}</span>
            <span className={styles.placedTag}>{rev.placedAt}</span>
          </div>
        </div>

        {/* Google Logo on Top Right of Card */}
        <div className={styles.googleLogoBadge} title="Verified on Google">
          <GoogleSvgLogo size={16} />
        </div>
      </div>

      {/* Google Rating Row: 5 Gold Stars + 5.0 Rating + Verified Review Pill */}
      <div className={styles.cardRatingRow}>
        <div className={styles.cardStars}>
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={12} fill="#F59E0B" color="#F59E0B" />
          ))}
        </div>
        <span className={styles.cardRatingScore}>5.0</span>
        <span className={styles.verifiedReviewBadge}>
          <CheckCircle2 size={11} />
          <span>Google Review</span>
        </span>
      </div>

      {/* Student Review Quote */}
      <p className={styles.quoteText}>"{rev.text}"</p>

      {/* Card Footer: Course Track + Timestamp */}
      <div className={styles.cardFooter}>
        <span className={styles.courseTag}>{rev.course}</span>
        <span className={styles.timeAgo}>{rev.time}</span>
      </div>
    </div>
  );
}

export function GoogleReviews() {
  return (
    <section className={styles.reviewsSection} id="reviews" aria-label="Student Google Reviews">
      <span id="success-stories" style={{ display: 'block', position: 'relative', top: '-80px', visibility: 'hidden' }} />
      <div className={styles.sectionContainer}>
        
        {/* Header Block */}
        <div className={`${styles.headerBlock} scroll-header`}>
          <div className={styles.googlePill}>
            <GoogleSvgLogo />
            <span className={styles.ratingValue}>4.8 / 5.0</span>
            <div className={styles.starsRow}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={13} fill="#F59E0B" color="#F59E0B" />
              ))}
            </div>
            <span className={styles.ratingCount}>1,200+ Verified Reviews</span>
          </div>

          <h2 className={styles.sectionHeading}>
            Validated by Thousands of Working Engineers
          </h2>
          <p className={styles.sectionSubtext}>
            Real feedback from certified network architects, cybersecurity specialists, and IT leaders trained at our Pune datacenter campus.
          </p>
        </div>

        {/* 3-Column Infinite Ticker Stage */}
        <div className={`${styles.tickerStage} scroll-reveal`}>
          <div className={styles.tickerGrid}>
            
            {/* Column 1: Scrolling Up */}
            <div className={`${styles.columnTrack} ${styles.scrollUp}`}>
              {[...reviewsCol1, ...reviewsCol1].map((rev, idx) => (
                <ReviewCardItem key={`col1-${idx}`} rev={rev} />
              ))}
            </div>

            {/* Column 2: Scrolling Down */}
            <div className={`${styles.columnTrack} ${styles.scrollDown}`}>
              {[...reviewsCol2, ...reviewsCol2].map((rev, idx) => (
                <ReviewCardItem key={`col2-${idx}`} rev={rev} />
              ))}
            </div>

            {/* Column 3: Scrolling Up */}
            <div className={`${styles.columnTrack} ${styles.scrollUp}`}>
              {[...reviewsCol3, ...reviewsCol3].map((rev, idx) => (
                <ReviewCardItem key={`col3-${idx}`} rev={rev} />
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export { GoogleReviews as GoogleReviewsSection };
export default GoogleReviews;
