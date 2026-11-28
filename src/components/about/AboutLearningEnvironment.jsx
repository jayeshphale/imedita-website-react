import React, { useState } from 'react';
import { 
  Building, 
  Maximize2, 
  X, 
  Sparkles, 
  Server, 
  Wifi, 
  Monitor, 
  MapPin,
  ChevronLeft,
  ChevronRight,
  Cpu,
  Layers
} from 'lucide-react';
import { campusImages } from '../../data/campusLifeData';
import styles from './AboutLearningEnvironment.module.css';

/**
 * Creative Learning Environment & Virtual Lab Tour
 * Features:
 * - Category filter tabs (All, Cisco Racks, Classrooms, Lab Pods)
 * - Equipment specification badges on each photo
 * - Interactive lightbox preview with navigation
 */
export function AboutLearningEnvironment() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const gallery = [
    {
      ...campusImages[0],
      category: 'racks',
      badge: 'Cisco Nexus 9000 & Catalyst Racks',
      tag: 'Spine-Leaf Core'
    },
    {
      ...campusImages[1],
      category: 'labs',
      badge: 'Hands-on Hardware Lab Practice',
      tag: 'Zero-Simulator CLI'
    },
    {
      ...campusImages[2],
      category: 'classrooms',
      badge: 'Interactive Doubt Solving & Topologies',
      tag: 'Dual-Screen Mentorship'
    },
    {
      ...campusImages[3],
      category: 'classrooms',
      badge: 'CCIE Architect Lecture Hall',
      tag: 'Smart Classroom'
    },
    {
      ...campusImages[4],
      category: 'racks',
      badge: 'Palo Alto & Checkpoint Security Farm',
      tag: 'Next-Gen Firewalls'
    },
    {
      ...campusImages[5],
      category: 'labs',
      badge: '24/7 Dedicated Student Lab Pods',
      tag: 'Unlimited Practice'
    }
  ];

  const filteredGallery = activeCategory === 'all' 
    ? gallery 
    : gallery.filter(item => item.category === activeCategory);

  const openLightbox = (img, index) => {
    setSelectedImage({ ...img, index });
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    if (!selectedImage) return;
    const nextIdx = (selectedImage.index + 1) % filteredGallery.length;
    setSelectedImage({ ...filteredGallery[nextIdx], index: nextIdx });
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (!selectedImage) return;
    const prevIdx = (selectedImage.index - 1 + filteredGallery.length) % filteredGallery.length;
    setSelectedImage({ ...filteredGallery[prevIdx], index: prevIdx });
  };

  return (
    <section className={styles.environmentSection} aria-label="Our Learning Environment and Campus Infrastructure">
      <div className={styles.container}>
        
        {/* Section Header */}
        <div className={styles.header}>
          <div className={styles.eyebrowBadge}>
            <Building size={13} className={styles.badgeIcon} />
            <span>CAMPUS &amp; LAB INFRASTRUCTURE</span>
          </div>

          <h2 className={styles.sectionHeading}>
            A Great Place to <span className={styles.headingAccent}>Learn and Grow</span>
          </h2>

          <p className={styles.sectionDescription}>
            Experience a collaborative, high-tech learning environment designed to encourage practical knowledge, 
            hands-on experimentation, and professional confidence with physical Cisco enterprise hardware.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className={styles.filterPillsRow}>
            <button
              type="button"
              className={`${styles.filterPillBtn} ${activeCategory === 'all' ? styles.filterActive : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              All Facilities ({gallery.length})
            </button>
            <button
              type="button"
              className={`${styles.filterPillBtn} ${activeCategory === 'racks' ? styles.filterActive : ''}`}
              onClick={() => setActiveCategory('racks')}
            >
              <Server size={13} />
              <span>Cisco Hardware Racks</span>
            </button>
            <button
              type="button"
              className={`${styles.filterPillBtn} ${activeCategory === 'classrooms' ? styles.filterActive : ''}`}
              onClick={() => setActiveCategory('classrooms')}
            >
              <Monitor size={13} />
              <span>Smart Classrooms</span>
            </button>
            <button
              type="button"
              className={`${styles.filterPillBtn} ${activeCategory === 'labs' ? styles.filterActive : ''}`}
              onClick={() => setActiveCategory('labs')}
            >
              <Cpu size={13} />
              <span>Hands-on Lab Pods</span>
            </button>
          </div>
        </div>

        {/* Feature Overview Strip */}
        <div className={styles.facilityPills}>
          <div className={styles.facilityPill}>
            <Server size={14} className={styles.pillIcon} />
            <span>Dedicated Cisco Nexus &amp; Catalyst Racks</span>
          </div>
          <div className={styles.facilityPill}>
            <Monitor size={14} className={styles.pillIcon} />
            <span>Multi-Screen Smart Classrooms</span>
          </div>
          <div className={styles.facilityPill}>
            <Wifi size={14} className={styles.pillIcon} />
            <span>Gigabit High-Speed Network Labs</span>
          </div>
          <div className={styles.facilityPill}>
            <MapPin size={14} className={styles.pillIcon} />
            <span>Baner Road, Pune Tech Corridor</span>
          </div>
        </div>

        {/* Asymmetric Gallery Grid */}
        <div className={styles.galleryGrid}>
          {filteredGallery.map((img, idx) => {
            const isFeatured = idx === 0 && activeCategory === 'all';

            return (
              <div 
                key={img.id || idx} 
                className={`${styles.galleryItem} ${isFeatured ? styles.featuredItem : ''}`}
                onClick={() => openLightbox(img, idx)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter') openLightbox(img, idx); }}
                aria-label={`View ${img.badge || 'Campus Photo'}`}
              >
                <img 
                  src={img.url} 
                  alt={img.badge || 'I-Medita Classroom Training'} 
                  className={styles.galleryImage}
                  loading={idx < 2 ? "eager" : "lazy"}
                />
                
                <div className={styles.imageOverlay}>
                  <div className={styles.overlayContent}>
                    <span className={styles.imageTag}>{img.tag}</span>
                    <h4 className={styles.imageTitle}>{img.badge}</h4>
                  </div>
                  <div className={styles.zoomIconWrapper}>
                    <Maximize2 size={16} />
                  </div>
                </div>

                {isFeatured && (
                  <div className={styles.featuredBadge}>
                    <Sparkles size={12} />
                    <span>Live Cisco Racks &amp; Classroom</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Gallery Caption Bar */}
        <div className={styles.galleryFooter}>
          <div className={styles.locationTag}>
            <MapPin size={15} className={styles.pinIcon} />
            <span>Aditi Samruddhi Building, Baner Road, Pune, Maharashtra 411045</span>
          </div>
          <div className={styles.openHours}>
            <span>Open Mon - Sat: 10:00 AM - 07:00 PM | 24/7 Remote Lab Access</span>
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className={styles.lightboxBackdrop} onClick={closeLightbox} role="dialog" aria-modal="true">
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <button 
              type="button" 
              className={styles.closeBtn} 
              onClick={closeLightbox}
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <button 
              type="button" 
              className={`${styles.navBtn} ${styles.prevBtn}`} 
              onClick={prevImage}
              aria-label="Previous photo"
            >
              <ChevronLeft size={24} />
            </button>

            <button 
              type="button" 
              className={`${styles.navBtn} ${styles.nextBtn}`} 
              onClick={nextImage}
              aria-label="Next photo"
            >
              <ChevronRight size={24} />
            </button>

            <div className={styles.lightboxImageWrapper}>
              <img 
                src={selectedImage.url} 
                alt={selectedImage.badge} 
                className={styles.lightboxImage} 
              />
            </div>

            <div className={styles.lightboxMeta}>
              <h4>{selectedImage.badge}</h4>
              <span>Photo {selectedImage.index + 1} of {filteredGallery.length} • I-Medita Campus Pune</span>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}

export default AboutLearningEnvironment;
