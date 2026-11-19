import React from 'react';
import { Award, CheckCircle2, ShieldCheck, ExternalLink } from 'lucide-react';
import styles from './AuthorBio.module.css';

export function AuthorBio({
  author = {
    name: 'Saurabh Yadav',
    title: 'Founder & Senior Technical Director at I-Medita',
    credentials: 'Triple CCIE #46962 (R&S, Security, SP)',
    image: 'https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/12/10071401/Saurabh-Yadav-imedita.svg',
    bio: 'Saurabh Yadav is one of India’s most certified networking authorities with over 15 years of live enterprise datacenter and cloud routing deployment experience. Having mentored over 25,000+ network and cloud engineers, he specializes in high-availability enterprise architectures, BGP multi-homing, and AWS hybrid cloud peering.',
    verifiedBadge: 'Verified Triple CCIE Faculty'
  },
  reviewer = {
    name: 'Sudhanshu Bhat',
    title: 'Chief Cloud & Security Mentor',
    credentials: 'CCIE #41212 & AWS Certified Solutions Architect',
    image: 'https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/12/10071359/Sudhanshu-Bhat-imedita.svg',
    bio: 'Sudhanshu Bhat holds dual CCIE and AWS certifications, specializing in AWS Direct Connect hybrid fabrics, Transit Gateway routing policies, and cloud infrastructure security audits.'
  }
}) {
  return (
    <div className={styles.authorSectionWrapper}>
      <h3 className={styles.sectionHeading}>Editorial & Technical Review Team</h3>
      
      <div className={styles.biosGrid}>
        {/* Primary Author */}
        <div className={styles.bioCard}>
          <div className={styles.bioHeader}>
            <img
              src={author.image}
              alt={author.name}
              className={styles.authorImg}
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <div>
              <div className={styles.nameRow}>
                <h4 className={styles.authorName}>{author.name}</h4>
                <span className={styles.credPill}>{author.credentials}</span>
              </div>
              <p className={styles.authorTitle}>{author.title}</p>
            </div>
          </div>
          <p className={styles.bioText}>{author.bio}</p>
          <div className={styles.authorTags}>
            <span className={styles.tag}>
              <Award size={12} className={styles.tagIcon} />
              15+ Years Enterprise Experience
            </span>
            <span className={styles.tag}>
              <ShieldCheck size={12} className={styles.tagIcon} />
              25,000+ Engineers Trained
            </span>
          </div>
        </div>

        {/* Technical Reviewer */}
        {reviewer && (
          <div className={styles.bioCard}>
            <div className={styles.bioHeader}>
              <img
                src={reviewer.image}
                alt={reviewer.name}
                className={styles.authorImg}
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <div>
                <div className={styles.nameRow}>
                  <h4 className={styles.authorName}>{reviewer.name}</h4>
                  <span className={styles.credPillReviewer}>{reviewer.credentials}</span>
                </div>
                <p className={styles.authorTitle}>{reviewer.title}</p>
              </div>
            </div>
            <p className={styles.bioText}>{reviewer.bio}</p>
            <div className={styles.authorTags}>
              <span className={styles.tag}>
                <CheckCircle2 size={12} className={styles.tagIcon} />
                Technical Accuracy Verified
              </span>
              <span className={styles.tag}>
                <ShieldCheck size={12} className={styles.tagIcon} />
                AWS Production Architecture
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AuthorBio;
