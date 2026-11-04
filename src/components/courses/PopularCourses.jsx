import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  ArrowRight 
} from 'lucide-react';
import styles from './PopularCourses.module.css';
import { originalCategories, originalCoursesData } from './coursesData';

const FALLBACK_BLUEPRINT_SVG = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='640' height='360' viewBox='0 0 640 360'><rect width='640' height='360' fill='%230B0F19'/><text x='50%25' y='50%25' fill='%2338BDF8' font-family='monospace' font-size='14' text-anchor='middle'>[ ARCHITECTURE BLUEPRINT ]</text></svg>";

export function PopularCourses({ onOpenDemo }) {
  const [activeTab, setActiveTab] = useState('all');

  const filteredCourses = activeTab === 'all'
    ? originalCoursesData
    : originalCoursesData.filter(course => course.category === activeTab);

  return (
    <section className={styles.coursesSection} id="courses">
      <div className={styles.sectionContainer}>
        
        {/* Header Block */}
        <div className={`${styles.headerBlock} scroll-header`}>
          <div className={styles.eyebrowBadge}>
            <Sparkles size={14} />
            <span>Official Training Catalog</span>
          </div>
          <h2 className={styles.sectionHeading}>
            Popular Live Certification Programs
          </h2>
          <p className={styles.sectionSubtext}>
            Explore our job-guaranteed tracks, multi-vendor firewall masterclasses, and global Cisco certifications.
          </p>
        </div>

        {/* Filter Tabs matching exact original taxonomy */}
        <div className={`${styles.tabsWrapper} scroll-reveal`}>
          {originalCategories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${styles.tabBtn} ${activeTab === tab.id ? styles.tabBtnActive : ''}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 3-Column Responsive Grid */}
        <div className={`${styles.coursesGrid} scroll-stagger-cards`}>
          {filteredCourses.map((course) => (
            <div key={course.id} className={styles.courseCard}>
              
              {/* 16:9 Aspect Ratio Top Architecture Media Wrapper */}
              <div className={styles.cardMediaWrapper}>
                <span className={styles.floatingBadge}>{course.track}</span>
                <span className={styles.floatingModeBadge}>{course.mode}</span>
                <img 
                  src={course.image} 
                  alt={`${course.title} architecture topology blueprint`} 
                  className={styles.courseCardImage}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = FALLBACK_BLUEPRINT_SVG;
                  }}
                />
              </div>

              {/* Card Body */}
              <div className={styles.cardBody}>
                <div>
                  <h3 className={styles.courseHeading}>{course.title}</h3>
                  <p className={styles.courseDesc}>{course.desc}</p>

                  <ul className={styles.featuresList}>
                    {course.features.map((feature, idx) => (
                      <li key={idx} className={styles.featureItem}>
                        <CheckCircle2 size={14} color="#059669" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className={styles.durationStrip}>
                    <Clock size={14} color="#0066FF" />
                    <span>Program Duration: <strong>{course.duration}</strong></span>
                  </div>

                  {course.href && course.href.startsWith('/') ? (
                    <Link 
                      to={course.href} 
                      className={styles.enrollBtn}
                    >
                      <span>View Course Details</span>
                      <ArrowRight size={14} className={styles.arrowGlyph} />
                    </Link>
                  ) : (
                    <a 
                      href={course.href} 
                      target="_blank" 
                      rel="noreferrer" 
                      className={styles.enrollBtn}
                    >
                      <span>View Course Details</span>
                      <ArrowRight size={14} className={styles.arrowGlyph} />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default PopularCourses;
