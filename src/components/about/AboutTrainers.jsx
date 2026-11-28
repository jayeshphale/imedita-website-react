import React, { useState } from 'react';
import { 
  Users, 
  Award, 
  ExternalLink, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { trainersData } from '../../data/trainersData';
import styles from './AboutTrainers.module.css';

/**
 * SECTION 4: Meet Our Expert Trainers
 * Pure White background (#ffffff). Verified faculty data with actual photos & credentials.
 */
export function AboutTrainers() {
  const [filter, setFilter] = useState('all');

  // The 8 primary trainers requested by user plus Praveen Mishra
  const priorityTrainerIds = [
    'saurabh-yadav',
    'baldev-singh',
    'praveen-mishra',
    'sudhanshu-bhat',
    'surendra-singh',
    'shubham-singh',
    'vikas-nichal',
    'deep-lepcha',
    'rahul-kamble'
  ];

  const featuredTrainers = trainersData.filter(t => priorityTrainerIds.includes(t.id));

  const filteredList = filter === 'ccie' 
    ? featuredTrainers.filter(t => t.credentials.includes('CCIE'))
    : filter === 'cloud'
    ? featuredTrainers.filter(t => t.credentials.includes('AWS') || t.credentials.includes('Cloud') || t.credentials.includes('Ansible'))
    : featuredTrainers;

  return (
    <section className={styles.trainersSection} id="expert-trainers" aria-label="Meet Our Expert Trainers">
      <div className={styles.container}>
        
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.eyebrowBadge}>
            <Award size={13} className={styles.badgeIcon} />
            <span>LEARN FROM INDUSTRY EXPERTS</span>
          </div>

          <h2 className={styles.sectionHeading}>
            Mentorship by <span className={styles.headingAccent}>Certified Architects</span>
          </h2>

          <p className={styles.sectionDescription}>
            Get trained by experienced professionals who bring real-world enterprise expertise, 
            globally recognized Cisco certifications, and practical network engineering knowledge into every class.
          </p>

          {/* Filter Tabs */}
          <div className={styles.filterBar}>
            <button 
              type="button" 
              className={`${styles.filterBtn} ${filter === 'all' ? styles.filterActive : ''}`}
              onClick={() => setFilter('all')}
            >
              All Faculty ({featuredTrainers.length})
            </button>
            <button 
              type="button" 
              className={`${styles.filterBtn} ${filter === 'ccie' ? styles.filterActive : ''}`}
              onClick={() => setFilter('ccie')}
            >
              CCIE Certified
            </button>
            <button 
              type="button" 
              className={`${styles.filterBtn} ${filter === 'cloud' ? styles.filterActive : ''}`}
              onClick={() => setFilter('cloud')}
            >
              Cloud & Security
            </button>
          </div>
        </div>

        {/* Trainers Grid */}
        <div className={styles.trainersGrid}>
          {filteredList.map((trainer) => {
            const isCCIE = trainer.credentials.includes('CCIE');
            const isTriple = trainer.isTripleCCIE;

            return (
              <div key={trainer.id} className={styles.trainerCard}>
                
                {/* Photo Frame */}
                <div className={styles.photoContainer}>
                  <img 
                    src={trainer.imageUrl} 
                    alt={`${trainer.name} - ${trainer.credentials} at I-Medita`} 
                    className={styles.trainerPhoto}
                    loading="lazy"
                  />
                  <div className={styles.photoOverlay} />
                  
                  {/* Top Badge: Experience */}
                  <div className={styles.expBadge}>
                    <span>{trainer.experience} Exp</span>
                  </div>

                  {/* Certification Tag */}
                  {isTriple ? (
                    <div className={styles.tripleBadge}>
                      <Sparkles size={11} />
                      <span>Triple CCIE</span>
                    </div>
                  ) : isCCIE ? (
                    <div className={styles.ccieBadge}>
                      <ShieldCheck size={11} />
                      <span>CCIE Certified</span>
                    </div>
                  ) : null}
                </div>

                {/* Card Content */}
                <div className={styles.cardContent}>
                  <div className={styles.nameRow}>
                    <h3 className={styles.trainerName}>{trainer.name}</h3>
                  </div>

                  {/* Credentials Label */}
                  <div className={styles.credentialsLabel}>
                    <Award size={13} className={styles.credIcon} />
                    <span>{trainer.credentials}</span>
                  </div>

                  {/* Specialization */}
                  <p className={styles.specialization}>
                    {trainer.specialization}
                  </p>

                  {/* Bio brief */}
                  <p className={styles.bio}>
                    {trainer.bio}
                  </p>

                  {/* Profile Link */}
                  {trainer.profileUrl && (
                    <a 
                      href={trainer.profileUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={styles.profileLink}
                      title={`View full profile of ${trainer.name}`}
                    >
                      <span>View Bio & Credentials</span>
                      <ExternalLink size={13} className={styles.linkArrow} />
                    </a>
                  )}
                </div>

                <div className={styles.cardBottomGlow} aria-hidden="true" />
              </div>
            );
          })}
        </div>

        {/* CTA to complete team page */}
        <div className={styles.footerCTA}>
          <div className={styles.footerCTACard}>
            <div className={styles.footerCTAText}>
              <h4 className={styles.ctaTitle}>Want to explore our complete 15+ member faculty team?</h4>
              <p className={styles.ctaSubtitle}>View detailed certifications, verification badges, and technical project experience.</p>
            </div>
            <a 
              href="https://www.imedita.com/trainers/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.ctaButton}
            >
              <span>Meet Our Complete Team</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default AboutTrainers;
