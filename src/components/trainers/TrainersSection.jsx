import React from 'react';
import { Award, Clock, ArrowUpRight } from 'lucide-react';
import { trainersData } from '../../data/trainersData';
import styles from './TrainersSection.module.css';

const getTrainerBadge = (trainer) => {
  if (trainer.isTripleCCIE) return "Triple CCIE";
  if (trainer.credentials.toLowerCase().includes("ccie")) return "CCIE Certified";
  if (trainer.id === "shweta-goswami") return "Master Trainer";
  if (trainer.id === "deep-lepcha") return "DevOps & Automation";
  if (trainer.id === "rahul-kamble") return "Cloud Architect";
  if (trainer.id === "sugandh-kansal") return "Cisco Certified";
  return "Senior Specialist";
};

export function TrainersSection() {
  return (
    <section className={styles.trainersSection} id="trainers">
      {/* Background Cybernetic Ambient Glow & Orbit Ring */}
      <div className={styles.ambientGlow} aria-hidden="true" />
      <div className={styles.orbitRingBg} aria-hidden="true" />

      <div className={styles.sectionContainer}>
        
        {/* Header Block */}
        <div className={`${styles.headerBlock} scroll-header`}>
          <div className={styles.eyebrowBadge}>
            <Award size={14} className={styles.badgeIcon} />
            <span>Elite Faculty</span>
          </div>
          <h2 className={styles.sectionHeading}>
            Learn Directly From{' '}
            <span className={styles.gradientHighlight}>CCIE Network Architects</span>
          </h2>
          <p className={styles.sectionSubtext}>
            Real datacenter experience, 1-on-1 mentorship, and corporate lab guidance with India's most certified engineering faculty.
          </p>
        </div>

        {/* Sticky Scroll-Driven Deck (All 11 Certified Instructors) */}
        <ul className={styles.cardsTrack}>
          {trainersData.map((trainer, index) => {
            const isTriple = trainer.isTripleCCIE;
            const badgeText = getTrainerBadge(trainer);

            return (
              <li
                key={trainer.id}
                className={styles.cardItem}
                style={{ '--stack-index': index }}
              >
                <div className={styles.cardSurface}>
                  <div className={styles.cardGrid}>
                    
                    {/* Left Column: Details & Bio */}
                    <div className={styles.colLeft}>
                      <div className={styles.badgesRow}>
                        <span className={isTriple ? styles.badgeTriple : styles.badgeExpert}>
                          <Award size={13} color={isTriple ? "#b45309" : "#0284c7"} />
                          <span>{badgeText}</span>
                        </span>
                        <span className={styles.badgeExp}>
                          <Clock size={13} color="#475569" />
                          <span>{trainer.experience}</span>
                        </span>
                      </div>

                      <h3 className={styles.trainerName}>{trainer.name}</h3>
                      <p className={styles.credentials}>{trainer.credentials}</p>

                      <div className={styles.specializationBox}>
                        <span className={styles.specializationTag}>
                          {trainer.specialization}
                        </span>
                      </div>

                      <p className={styles.bioText}>{trainer.bio}</p>

                      <div className={styles.ctaWrapper}>
                        <a
                          href={trainer.profileUrl}
                          target="_blank"
                          rel="noreferrer"
                          className={styles.profileLink}
                        >
                          <span>View Instructor Profile</span>
                          <ArrowUpRight size={14} className={styles.arrowIcon} />
                        </a>
                      </div>
                    </div>

                    {/* Right Column: Headshot Dossier */}
                    <div className={styles.colRight}>
                      <div className={styles.portraitContainer}>
                        <img
                          src={trainer.imageUrl}
                          alt={trainer.name}
                          className={styles.portraitImg}
                          loading="lazy"
                        />
                      </div>
                    </div>

                  </div>
                </div>
              </li>
            );
          })}
        </ul>

      </div>
    </section>
  );
}

export default TrainersSection;
