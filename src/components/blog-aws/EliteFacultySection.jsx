import React from 'react';
import { Award, Clock, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { trainersData } from '../../data/trainersData';
import styles from './EliteFacultySection.module.css';

// Show top 4 certified architects for a clean, spacious 4-column layout
const FEATURED_FACULTY = trainersData.slice(0, 4);

const getTrainerBadge = (trainer) => {
  if (trainer.isTripleCCIE) return 'Triple CCIE';
  if (trainer.credentials.toLowerCase().includes('ccie')) return 'CCIE Certified';
  return 'Senior Specialist';
};

export default function EliteFacultySection() {
  return (
    <section id="elite-faculty" className={styles.section} aria-labelledby="faculty-heading">
      <div className={styles.container}>
        
        {/* Header Block */}
        <div className={styles.header}>
          <div className={styles.badgeWrap}>
            <Award size={13} className={styles.badgeIcon} aria-hidden="true" />
            <span>INDUSTRY BENCHMARK MENTORS</span>
          </div>
          <h2 id="faculty-heading" className={styles.title}>
            Elite Faculty
          </h2>
          <p className={styles.subtitle}>
            Learn directly from dual and triple CCIE certified architects with 10+ years of production datacenter design, perimeter defense, and cloud migration experience.
          </p>
        </div>

        {/* 4 Clean Faculty Cards */}
        <div className={styles.grid}>
          {FEATURED_FACULTY.map((trainer) => {
            const isTriple = trainer.isTripleCCIE;
            const badgeLabel = getTrainerBadge(trainer);

            return (
              <article key={trainer.id} className={styles.card}>
                <div className={styles.cardTop}>
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
                        <Award size={13} className={styles.goldAward} />
                      </span>
                    )}
                  </div>

                  <div className={styles.badgePills}>
                    <span className={isTriple ? styles.pillTriple : styles.pillExpert}>
                      {badgeLabel}
                    </span>
                    <span className={styles.pillExp}>
                      <Clock size={11} aria-hidden="true" />
                      {trainer.experience}
                    </span>
                  </div>
                </div>

                <h3 className={styles.facultyName}>{trainer.name}</h3>
                <p className={styles.credentials}>{trainer.credentials}</p>

                <div className={styles.specializationBox}>
                  <span className={styles.specLabel}>Expertise</span>
                  <p className={styles.specText}>{trainer.specialization}</p>
                </div>

                <div className={styles.cardFooter}>
                  <a
                    href={trainer.profileUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.profileLink}
                  >
                    <span>View Profile</span>
                    <ArrowUpRight size={13} aria-hidden="true" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
