import { Link } from 'react-router-dom';
import React from 'react';
import { 
  Sparkles, 
  ArrowUpRight, 
  Layers, 
  PhoneCall, 
  BookOpen 
} from 'lucide-react';
import styles from './TopCategories.module.css';

// Exact matching 9 categories from original website
const categories = [
  { 
    id: "cisco", 
    name: "Cisco", 
    subtext: "CCNA, CCNP & CCIE Tracks",
    badge: "18 Courses",
    logoText: "CISCO", 
    bg: "#F0F9FF", 
    border: "#BAE6FD", 
    color: "#0284C7", 
    href: "/courses/ccna-training" 
  },
  { 
    id: "job-guarantee", 
    name: "100 % Job Gurantee Program", 
    subtext: "Classroom & Placement Assurance",
    badge: "Guaranteed",
    logoText: "100%", 
    bg: "#F5F3FF", 
    border: "#DDD6FE", 
    color: "#7C3AED", 
    href: "https://imedita.com/courses/job-guaranteed-training-for-network-engineers/" 
  },
  { 
    id: "cyber-security", 
    name: "Cyber Security", 
    subtext: "Perimeter Defense & SOC Operations",
    badge: "Trending",
    logoText: "SEC", 
    bg: "#F0FDF4", 
    border: "#BBF7D0", 
    color: "#16A34A", 
    href: "https://imedita.com/courses/job-guaranteed-training-for-cyber-security-engineers/" 
  },
  { 
    id: "cloud-computing", 
    name: "Cloud Computing", 
    subtext: "AWS Solutions Architect & Azure",
    badge: "Hot",
    logoText: "CLOUD", 
    bg: "#FFFBEB", 
    border: "#FDE68A", 
    color: "#D97706", 
    href: "https://imedita.com/courses/aws-solution-architect-associate-training/" 
  },
  { 
    id: "firewall", 
    name: "Firewall", 
    subtext: "Palo Alto, Fortinet & Checkpoint",
    badge: "Multi-Vendor",
    logoText: "WALL", 
    bg: "#FEF2F2", 
    border: "#FECACA", 
    color: "#DC2626", 
    href: "https://imedita.com/courses/multi-vendor-training/" 
  },
  { 
    id: "free-courses", 
    name: "Free Courses", 
    subtext: "Self-Paced Foundational Videos",
    badge: "100% Free",
    logoText: "FREE", 
    bg: "#F0FDFA", 
    border: "#99F6E4", 
    color: "#0D9488", 
    href: "https://imedita.com/courses/" 
  },
  { 
    id: "combos", 
    name: "Combos", 
    subtext: "Dual Specialization Fast Tracks",
    badge: "Save 30%",
    logoText: "COMBO", 
    bg: "#FDF2F8", 
    border: "#FBCFE8", 
    color: "#DB2777", 
    href: "https://imedita.com/courses/" 
  },
  { 
    id: "collaboration", 
    name: "Collaboration", 
    subtext: "Cisco CUCM & SIP Telephony",
    badge: "Enterprise",
    logoText: "VOIP", 
    bg: "#EEF2FF", 
    border: "#C7D2FE", 
    color: "#4F46E5", 
    href: "https://imedita.com/courses/" 
  },
  { 
    id: "data-center", 
    name: "Data Center", 
    subtext: "Nexus 9K & Cisco ACI Fabrics",
    badge: "Advanced",
    logoText: "DC", 
    bg: "#F8FAFC", 
    border: "#E2E8F0", 
    color: "#475569", 
    href: "https://imedita.com/courses/" 
  }
];

export function TopCategories({ onOpenDemo }) {
  return (
    <section className={styles.categoriesSection} id="categories">
      <div className={styles.sectionContainer}>
        
        {/* Modern SaaS Header */}
        <div className={`${styles.headerBlock} scroll-header`}>
          <div className={styles.eyebrowBadge}>
            <Sparkles size={14} />
            <span>Curated Tracks & Specializations</span>
          </div>
          <h2 className={styles.sectionHeading}>
            Top Categories & <span className={styles.gradientAccent}>Training Domains</span>
          </h2>
          <p className={styles.sectionSubtext}>
            Industry-aligned learning paths architected to take you from foundational enterprise routing to expert multi-vendor mastery.
          </p>
        </div>

        {/* 9 Pills Grid + 1 Dark Highlight Showcase Card */}
        <div className={styles.contentSplit}>
          
          {/* 3x3 Responsive Grid */}
          <div className={`${styles.categoriesGrid} scroll-stagger-cards`}>
            {categories.map((item) => {
              const isInternal = item.href && item.href.startsWith('/');
              const CardTag = isInternal ? Link : 'a';
              const linkProps = isInternal 
                ? { to: item.href } 
                : { href: item.href, target: "_blank", rel: "noreferrer" };

              return (
                <CardTag
                  key={item.id}
                  {...linkProps}
                  className={styles.categoryCard}
                  style={{ '--card-accent': item.color }}
                >
                  <div className={styles.cardHeaderRow}>
                    <div 
                      className={styles.iconCircle}
                      style={{ 
                        backgroundColor: item.bg, 
                        color: item.color,
                        border: `1px solid ${item.border}` 
                      }}
                    >
                      {item.logoText}
                    </div>
                    
                    <div className={styles.cardMetaGroup}>
                      <span className={styles.badgePill}>{item.badge}</span>
                      <div className={styles.arrowCircle}>
                        <ArrowUpRight size={14} strokeWidth={2.5} />
                      </div>
                    </div>
                  </div>

                  <div className={styles.cardBody}>
                    <h3 className={styles.categoryName} title={item.name}>
                      {item.name}
                    </h3>
                    <p className={styles.categorySubtext}>
                      {item.subtext}
                    </p>
                  </div>
                </CardTag>
              );
            })}
          </div>

          {/* Right Dark Focus Showcase Card */}
          <a href="#courses" className={`${styles.moreCoursesCard} scroll-reveal-right`}>
            <div className={styles.moreTopArea}>
              <div className={styles.liveBeaconPill}>
                <span className={styles.beaconDot}></span>
                <span>112+ Live Programs</span>
              </div>
              
              <div className={styles.iconOrb}>
                <Layers size={32} strokeWidth={1.8} />
              </div>
              
              <h3 className={styles.moreCoursesTitle}>112 More Courses</h3>
              <p className={styles.moreCoursesDesc}>
                Explore full multi-vendor curriculum, custom corporate pods, and bootcamps.
              </p>
            </div>

            <div className={styles.cardFooterArea}>
              <button 
                type="button" 
                className={styles.actionBtnPrimary}
                onClick={(e) => {
                  e.preventDefault();
                  if (onOpenDemo) onOpenDemo('General Course Inquiry');
                }}
              >
                <PhoneCall size={15} />
                <span>Request Custom Syllabus</span>
              </button>

              <div className={styles.directCatalogLink}>
                <BookOpen size={13} />
                <span>Jump to Course Catalog Below</span>
              </div>
            </div>
          </a>

        </div>

      </div>
    </section>
  );
}

export default TopCategories;
