import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles,
  GraduationCap, 
  Award, 
  ShieldCheck, 
  Briefcase, 
  Monitor, 
  ArrowRight,
  ArrowUpRight,
  Layers
} from 'lucide-react';
import styles from './TopCategories.module.css';

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
    href: "https://imedita.com/courses/multi-vendor-training/" 
  },
  { 
    id: "checkpoint", 
    name: "CheckPoint", 
    subtext: "CCSA & CCSE Quantum Gateways",
    badge: "Firewall",
    logoText: "CP", 
    bg: "#FFF1F2", 
    border: "#FECDD3", 
    color: "#E11D48", 
    href: "https://imedita.com/courses/checkpoint-firewall-training/" 
  },
  { 
    id: "ec-council", 
    name: "EC Council", 
    subtext: "CEH v13 & Threat Analysis",
    badge: "Certified",
    logoText: "EC", 
    bg: "#FEF2F2", 
    border: "#FECACA", 
    color: "#DC2626", 
    href: "https://imedita.com/courses/ethical-hacking-training/" 
  },
  { 
    id: "f5-networks", 
    name: "F5 Networks", 
    subtext: "BIG-IP LTM & Traffic Management",
    badge: "Application",
    logoText: "F5", 
    bg: "#FFF1F2", 
    border: "#FECDD3", 
    color: "#E11D48", 
    href: "https://imedita.com/courses/f5-training/" 
  },
  { 
    id: "palo-alto", 
    name: "Palo Alto Networks", 
    subtext: "PCNSA & PCNSE Dedicated Pods",
    badge: "Enterprise",
    logoText: "PA", 
    bg: "#FFF7ED", 
    border: "#FED7AA", 
    color: "#EA580C", 
    href: "https://imedita.com/courses/palo-alto-firewall-training/" 
  },
  { 
    id: "network-automation", 
    name: "Network Automation", 
    subtext: "Python, Ansible & Cisco DevNet",
    badge: "Automation",
    logoText: "AUTO", 
    bg: "#FDF4FF", 
    border: "#F5D0FE", 
    color: "#C026D3", 
    href: "/courses/ccna-automation-training" 
  },
  { 
    id: "aws", 
    name: "Amazon Web Services", 
    subtext: "Solutions Architect & Cloud VPCs",
    badge: "Cloud",
    logoText: "AWS", 
    bg: "#FFFBEB", 
    border: "#FDE68A", 
    color: "#D97706", 
    href: "https://imedita.com/courses/aws-solution-architect-associate-training/" 
  }
];

const pillars = [
  { id: "instructors", title: "Top Instructors", sub: "15+ Yrs Triple CCIEs", Icon: GraduationCap },
  { id: "certification", title: "Online Certification", sub: "Global Vendor Exam", Icon: Award },
  { id: "backup-classes", title: "Backup Classes", sub: "Live & Recorded Access", Icon: ShieldCheck },
  { id: "placement", title: "Placement Support", sub: "100% Mock & HR Drives", Icon: Briefcase },
  { id: "lab-access", title: "24x7 Lab Access", sub: "Physical Hardware Pods", Icon: Monitor }
];

export function TopCategories({ onOpenDemo }) {
  return (
    <section className={styles.topCategoriesSection} id="categories">
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

            <span className={styles.getStartedBtn}>
              <span>Browse Full Catalog</span>
              <ArrowRight size={15} strokeWidth={2.2} className={styles.ctaArrow} />
            </span>
          </a>

        </div>

      </div>

      {/* 5-Pillar Blue Feature Strip with Frosted Glass Tiles */}
      <div className={styles.bottomFeatureBar}>
        <div className={`${styles.pillarsWrapper} scroll-stagger-cards`}>
          {pillars.map((pillar) => {
            const IconComponent = pillar.Icon;
            return (
              <div key={pillar.id} className={styles.pillarCard}>
                <div className={styles.pillarIconWrap}>
                  <IconComponent size={22} strokeWidth={2} />
                </div>
                <div className={styles.pillarText}>
                  <span className={styles.pillarTitle}>{pillar.title}</span>
                  <span className={styles.pillarSub}>{pillar.sub}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export { TopCategories as TopCategoriesSection };
export default TopCategories;
