import React from 'react';
import { Award, Clock, ArrowUpRight, CheckCircle2, ShieldCheck, Sparkles, ExternalLink } from 'lucide-react';
import { trainersData } from '../../data/trainersData';
import styles from './EliteFacultySection.module.css';

// Show top 6 verified instructors for a cohesive, fast-loading editorial showcase
const FEATURED_FACULTY = trainersData.slice(0, 6);

const getTrainerBadge = (trainer) => {
  if (trainer.isTripleCCIE) return 'Triple CCIE';
  if (trainer.credentials.toLowerCase().includes('ccie')) return 'CCIE Certified';
  if (trainer.id === 'shweta-goswami') return 'Master Trainer';
  if (trainer.id === 'deep-lepcha') return 'DevOps & Automation';
  if (trainer.id === 'rahul-kamble') return 'Cloud Architect';
  return 'Senior Specialist';
};

export default function EliteFacultySection() {
  return (
    <section id="elite-faculty" className={styles.section} aria-labelledby="faculty-heading">
      <div className={styles.container}>
        
        {/* Header Block */}
        <div className={styles.header}>
          <div className={styles.badgeWrap}>
            <Award className={styles.badgeIcon} size={15} aria-hidden="true" />
            <span>INDUSTRY BENCHMARK MENTORS</span>
          </div>
          <h2 id="faculty-heading" className={styles.title}>
            Elite Faculty
          </h2>
          <p className={styles.subtitle}>
            Learn directly from dual and triple CCIE certified network architects and enterprise cloud specialists. 
            Our instructors bring over 10+ years of production datacenter design, perimeter defense, and cloud migration experience.
          </p>
        </div>

        {/* Faculty Grid */}
        <div className={styles.grid}>
          {FEATURED_FACULTY.map((trainer) => {
            const isTriple = trainer.isTripleCCIE;
            const badgeLabel = getTrainerBadge(trainer);

            return (
              <article key={trainer.id} className={styles.card}>
                <div className={styles.cardHeader}>
                  <div className={styles.avatarWrap}>
                    <img
                      src={trainer.imageUrl}
                      alt={`${trainer.name} - ${trainer.credentials}`}
                      className={styles.avatar}
                      loading="eager"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/server-datacenter-engineer.jpg';
                      }}
                    />
                    {isTriple && (
                      <span className={styles.verifiedFloatingBadge} title="Triple CCIE Certified">
                        <Award size={14} className={styles.goldAward} />
                      </span>
                    )}
                  </div>

                  <div className={styles.infoCol}>
                    <div className={styles.pillRow}>
                      <span className={isTriple ? styles.pillTriple : styles.pillExpert}>
                        <Award size={12} aria-hidden="true" />
                        <span>{badgeLabel}</span>
                      </span>
                      <span className={styles.pillExp}>
                        <Clock size={12} aria-hidden="true" />
                        <span>{trainer.experience}</span>
                      </span>
                    </div>

                    <h3 className={styles.facultyName}>{trainer.name}</h3>
                    <p className={styles.credentials}>{trainer.credentials}</p>
                  </div>
                </div>

                <div className={styles.specializationBox}>
                  <span className={styles.specLabel}>Areas of Expertise:</span>
                  <p className={styles.specText}>{trainer.specialization}</p>
                </div>

                <p className={styles.bioText}>{trainer.bio}</p>

                <div className={styles.cardFooter}>
                  <a
                    href={trainer.profileUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.profileLink}
                  >
                    <span>View Verified Profile</span>
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* Institutional Trust Banner */}
        <div className={styles.trustBanner}>
          <div className={styles.trustItem}>
            <ShieldCheck size={20} className={styles.trustIcon} aria-hidden="true" />
            <div>
              <h4 className={styles.trustTitle}>Zero Outsourced Trainers</h4>
              <p className={styles.trustDesc}>Every batch is mentored directly by in-house full-time CCIE certified architects.</p>
            </div>
          </div>

          <div className={styles.trustDivider} aria-hidden="true" />

          <div className={styles.trustItem}>
            <Award size={20} className={styles.trustIcon} aria-hidden="true" />
            <div>
              <h4 className={styles.trustTitle}>1-on-1 Architecture Reviews</h4>
              <p className={styles.trustDesc}>Direct personal mentorship during weekend lab drills and scenario deconstructions.</p>
            </div>
          </div>

          <div className={styles.trustDivider} aria-hidden="true" />

          <div className={styles.trustItem}>
            <CheckCircle2 size={20} className={styles.trustIcon} aria-hidden="true" />
            <div>
              <h4 className={styles.trustTitle}>Verified Cisco Credentials</h4>
              <p className={styles.trustDesc}>All CCIE numbers publicly verifiable on Cisco's Official Certification Tracking System.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
