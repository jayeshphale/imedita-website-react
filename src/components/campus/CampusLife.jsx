import React, { useRef, useEffect, useState } from 'react';
import { Camera } from 'lucide-react';
import styles from './CampusLife.module.css';

const galleryItems = [
  {
    id: "lab-racks",
    title: "Cisco Physical Rack Infrastructure",
    category: "Hardware Labs",
    image: "https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/06/10071301/imedita_71.jpg"
  },
  {
    id: "classroom-session",
    title: "Interactive CCIE Architecture Lectures",
    category: "Smart Classrooms",
    image: "https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/06/10071301/imedita_72.jpg"
  },
  {
    id: "firewall-pods",
    title: "Dedicated Palo Alto & Check Point Pods",
    category: "Multi-Vendor Security",
    image: "https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/06/10071302/imedita_66.jpg"
  },
  {
    id: "student-collaboration",
    title: "Peer Topology Debugging & Mock Labs",
    category: "Collaborative Culture",
    image: "https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/06/10071301/imedita_69.jpg"
  },
  {
    id: "switching-fabric",
    title: "Catalyst 9300 & Nexus Fabric Pods",
    category: "Datacenter Fabrics",
    image: "https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/06/10071302/imedita_68.jpg"
  },
  {
    id: "mock-lab-terminal",
    title: "8-Hour CCIE Mock Lab Simulation Pods",
    category: "Exam Simulation",
    image: "https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/06/10071301/imedita_70.jpg"
  }
];

export function CampusLife() {
  const outerWrapperRef = useRef(null);
  const trackRef = useRef(null);
  const [translateX, setTranslateX] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    // Only bind horizontal translation mechanics on desktop
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.innerWidth >= 768 && outerWrapperRef.current && trackRef.current) {
            const rect = outerWrapperRef.current.getBoundingClientRect();
            const scrollableDistance = outerWrapperRef.current.offsetHeight - window.innerHeight;

            if (scrollableDistance > 0) {
              // When the top of the outer wrapper passes the top of the viewport
              const currentScroll = -rect.top;
              const progress = Math.min(Math.max(currentScroll / scrollableDistance, 0), 1);

              // Calculate exact translation across the full viewport width (Zero start & end space)
              const maxTrackTranslation = Math.max(
                0,
                trackRef.current.scrollWidth - window.innerWidth
              );
              
              setTranslateX(progress * maxTrackTranslation);
              setScrollProgress(progress * 100);
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <section 
      ref={outerWrapperRef} 
      className={styles.campusOuterWrapper} 
      id="campus"
    >
      <div className={styles.stickyFrame}>
        
        {/* Header Block with Standard Lateral Padding */}
        <div className={styles.sectionContainer}>
          <div className={`${styles.headerBlock} scroll-header`}>
            <div className={styles.eyebrowBadge}>
              <Camera size={14} />
              <span>Campus & Lab Facilities</span>
            </div>
            <h2 className={styles.sectionHeading}>
              Experience Our Datacenter & Lab Life
            </h2>
            <p className={styles.sectionSubtext}>
              A firsthand look at our enterprise hardware racks, immersive smart classrooms, and collaborative engineering culture in Pune.
            </p>

            {/* Desktop Visual Progress Indicator */}
            <div className={styles.progressBarWrapper}>
              <div 
                className={styles.progressBarFill}
                style={{ width: `${scrollProgress}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Track Stage - Full-Bleed with Zero Starting & Ending Dead Space */}
        <div className={`${styles.trackContainer} scroll-reveal`}>
          <div
            ref={trackRef}
            className={styles.horizontalTrack}
            style={{
              transform: window.innerWidth >= 768 ? `translate3d(-${translateX}px, 0, 0)` : 'none'
            }}
          >
            {galleryItems.map((item) => (
              <div key={item.id} className={styles.imageCard}>
                <img
                  src={item.image}
                  alt={item.title}
                  className={styles.cardImg}
                  loading="lazy"
                />
                <div className={styles.cardVignette}>
                  <span className={styles.categoryPill}>{item.category}</span>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export { CampusLife as CampusLifeSection };
export default CampusLife;
