import React, { useState } from 'react';
import { 
  Sparkles, 
  Calendar, 
  MapPin, 
  Server, 
  Globe2, 
  Users, 
  Award, 
  ArrowRight, 
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Quote
} from 'lucide-react';
import styles from './AboutStoryTimeline.module.css';

/**
 * SECTION 2: The 10-Year Interactive Story Timeline (2014 - 2026)
 * "Genesis to Scale: The I-Medita Decade"
 */
export function AboutStoryTimeline() {
  const [activeChapter, setActiveChapter] = useState(0);

  const chapters = [
    {
      id: '2014',
      year: '2014',
      badge: 'CHAPTER 01 • GENESIS',
      title: 'The Rebellion Against Simulators in Baner, Pune',
      subtitle: 'Setting up Maharashtra’s first dedicated physical Cisco rack',
      story: 'In 2014, IT training in India was dominated by packet tracer simulators and theoretical slides. Engineers memorized commands without ever touching a real serial cable, console port, or spine switch. I-Medita was founded with a singular conviction: networking cannot be mastered on a simulator. We invested in authentic Cisco hardware racks in Baner, Pune, ensuring every student configured true CLI from day one.',
      image: 'https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/06/10071302/imedita_67.jpg',
      imageAlt: 'Early days hands-on Cisco training session at I-Medita',
      stats: [
        { label: 'First Batch', value: '100% Placed' },
        { label: 'Core Principle', value: 'Zero Simulators' },
        { label: 'Starting Racks', value: 'Cisco 2800 & 2900' }
      ],
      quote: 'If you only practice on a simulator, your first day on a production enterprise network will feel like a crisis. Real hardware builds unflinching confidence.'
    },
    {
      id: '2018',
      year: '2018',
      badge: 'CHAPTER 02 • INFRASTRUCTURE SCALE',
      title: 'Constructing Maharashtra’s Premier Datacenter Lab',
      subtitle: '5,000+ sq. ft. multi-vendor enterprise datacenter facility',
      story: 'As enterprises transitioned from legacy LANs to complex datacenter fabrics and next-gen firewalls, I-Medita expanded dramatically. We erected Maharashtra’s largest physical datacenter training lab, incorporating high-density Cisco Nexus 9000 spine-leaf switching, Cisco ASA with FirePOWER, Checkpoint, and Palo Alto clusters.',
      image: 'https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/06/10071301/imedita_71.jpg',
      imageAlt: 'High-density physical hardware lab racks at I-Medita Pune',
      stats: [
        { label: 'Facility Size', value: '5,000+ Sq. Ft.' },
        { label: 'Hardware Vendors', value: 'Cisco, Palo Alto, CP' },
        { label: 'Faculty Caliber', value: 'Dual & Triple CCIEs' }
      ],
      quote: 'We didn’t just build a classroom; we built a functional enterprise datacenter where learners troubleshoot live fiber links and HA firewall failovers.'
    },
    {
      id: '2022',
      year: '2022',
      badge: 'CHAPTER 03 • GLOBAL REACH',
      title: 'Low-Latency 24/7 Global Remote Hardware Pods',
      subtitle: 'Enabling learners in 20+ countries to practice on physical Pune racks',
      story: 'When the world pivoted to remote and hybrid operations, I-Medita engineered custom bare-metal remote rack pods. Unlike cloud emulators, these pods connected students directly over dedicated high-speed consoles to our physical hardware in Pune. Learners in the UK, USA, UAE, and Singapore could practice 24/7.',
      image: 'https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/06/10071301/imedita_69.jpg',
      imageAlt: 'Global remote lab pods and interactive classroom sessions',
      stats: [
        { label: 'Global Students', value: '20+ Countries' },
        { label: 'Lab Uptime', value: '99.9% 24/7' },
        { label: 'Remote Latency', value: '<30ms Optimized' }
      ],
      quote: 'Geography should never restrict access to elite CCIE mentorship and authentic datacenter hardware.'
    },
    {
      id: '2026',
      year: '2026',
      badge: 'CHAPTER 04 • ENTERPRISE LEADERSHIP',
      title: '10,000+ Alumni & The Next Era of Network Automation',
      subtitle: 'Powering digital networks at Cisco, Orange, TCS, and Fortune 500s',
      story: 'Today, I-Medita stands as India’s definitive benchmark for professional technology training. With over 10,000 certified alumni deployed globally, we have pioneered integrated tracks combining Cisco SD-WAN, Python Network Automation, DevNet, and Multi-Cloud Security to prepare the next generation of infrastructure leaders.',
      image: 'https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/06/10071301/imedita_72.jpg',
      imageAlt: '10000 alumni milestone and smart interactive training at I-Medita',
      stats: [
        { label: 'Alumni Network', value: '10,000+ Engineers' },
        { label: 'Student Rating', value: '4.9/5 (11,200+ Reviews)' },
        { label: 'Placement Pipeline', value: '100+ MNC Partners' }
      ],
      quote: 'Our greatest achievement is not the racks we own, but the 10,000+ engineers whose careers power global enterprise networks.'
    }
  ];

  const current = chapters[activeChapter];

  return (
    <section className={styles.timelineSection} id="our-story-journey" aria-label="Our 10-Year Story Timeline">
      <div className={styles.container}>
        
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.eyebrowBadge}>
            <Calendar size={13} className={styles.badgeIcon} />
            <span>THE 10-YEAR JOURNEY (2014 – 2026)</span>
          </div>

          <h2 className={styles.sectionHeading}>
            From a Single Rack to <span className={styles.headingAccent}>India's Premier Datacenter Lab</span>
          </h2>

          <p className={styles.sectionDescription}>
            Explore the key milestones that shaped I-Medita into Maharashtra’s most trusted technology training destination.
          </p>

          {/* Chapter Stepper Navigation */}
          <div className={styles.stepperContainer}>
            <div className={styles.stepperTrack}>
              <div 
                className={styles.stepperProgress} 
                style={{ width: `${(activeChapter / (chapters.length - 1)) * 100}%` }} 
              />
            </div>

            <div className={styles.stepperButtons}>
              {chapters.map((ch, idx) => (
                <button
                  key={ch.id}
                  type="button"
                  className={`${styles.stepBtn} ${activeChapter === idx ? styles.stepActive : ''} ${activeChapter > idx ? styles.stepCompleted : ''}`}
                  onClick={() => setActiveChapter(idx)}
                >
                  <span className={styles.stepDot}>
                    {activeChapter > idx ? <CheckCircle2 size={13} /> : idx + 1}
                  </span>
                  <span className={styles.stepYear}>{ch.year}</span>
                  <span className={styles.stepTag}>{ch.id === '2014' ? 'Genesis' : ch.id === '2018' ? 'Datacenter' : ch.id === '2022' ? 'Remote Pods' : '10K Milestone'}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Story Stage Content Box */}
        <div className={styles.storyStageCard}>
          <div className={styles.storyGrid}>
            
            {/* Left Story Narrative */}
            <div className={styles.storyLeft}>
              <div className={styles.chapterTagBadge}>
                <Sparkles size={12} />
                <span>{current.badge}</span>
              </div>

              <h3 className={styles.chapterTitle}>{current.title}</h3>
              <div className={styles.chapterSubtitle}>{current.subtitle}</div>

              <p className={styles.chapterText}>{current.story}</p>

              {/* Milestone Metrics Box */}
              <div className={styles.milestoneMetricsRow}>
                {current.stats.map((st, i) => (
                  <div key={i} className={styles.milestoneMetric}>
                    <span className={styles.mValue}>{st.value}</span>
                    <span className={styles.mLabel}>{st.label}</span>
                  </div>
                ))}
              </div>

              {/* Founder Quote */}
              <div className={styles.quoteCard}>
                <Quote size={20} className={styles.quoteIcon} />
                <p className={styles.quoteText}>{current.quote}</p>
              </div>

              {/* Step Controls */}
              <div className={styles.chapterNavRow}>
                <button
                  type="button"
                  className={styles.prevBtn}
                  disabled={activeChapter === 0}
                  onClick={() => setActiveChapter(Math.max(0, activeChapter - 1))}
                >
                  <ChevronLeft size={16} />
                  <span>Previous Chapter</span>
                </button>

                <span className={styles.chapterIndicator}>
                  Chapter {activeChapter + 1} of {chapters.length}
                </span>

                <button
                  type="button"
                  className={styles.nextBtn}
                  disabled={activeChapter === chapters.length - 1}
                  onClick={() => setActiveChapter(Math.min(chapters.length - 1, activeChapter + 1))}
                >
                  <span>Next Chapter</span>
                  <ChevronRight size={16} />
                </button>
              </div>

            </div>

            {/* Right Story Visual */}
            <div className={styles.storyRight}>
              <div className={styles.photoFrame}>
                <img 
                  src={current.image} 
                  alt={current.imageAlt} 
                  className={styles.storyPhoto}
                  key={current.image}
                />
                <div className={styles.photoBackdropGlow} aria-hidden="true" />
                
                <div className={styles.yearWatermark}>{current.year}</div>

                <div className={styles.photoCaptionBar}>
                  <MapPin size={13} className={styles.pinIcon} />
                  <span>I-Medita Pune Campus Archive • {current.year} Milestone</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default AboutStoryTimeline;
