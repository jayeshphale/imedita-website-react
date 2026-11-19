import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Cloud, 
  Server, 
  ShieldCheck, 
  Cpu, 
  Clock, 
  Calendar, 
  CheckCircle2, 
  ArrowRight, 
  ArrowUpRight,
  Sparkles,
  Award,
  Users
} from 'lucide-react';
import styles from './BlogRelatedCourses.module.css';

const RELATED_COURSES = [
  {
    id: 'aws-solutions-architect',
    title: 'AWS Certified Solutions Architect – Associate (SAA-C03)',
    category: 'Cloud Architecture',
    badgeColor: 'blue',
    icon: Cloud,
    duration: '6 Weeks (Live Interactive)',
    level: 'Associate Level',
    batchSchedule: 'Upcoming Batch: Saturday & Sunday',
    description: 'Master VPC multi-tier architectures, EC2 auto-scaling, S3 storage classes, DynamoDB, IAM least privilege, and cost optimization directly from CCIE & AWS architects.',
    highlights: [
      '24/7 dedicated enterprise cloud lab topologies',
      'Real-world Disaster Recovery & high-availability setups',
      'Official AWS Well-Architected Framework drills'
    ],
    link: 'https://imedita.com/courses/aws-solution-architect-associate-training/',
    isInternal: false,
    rating: '4.9/5 (1,240+ reviews)'
  },
  {
    id: 'cisco-ccna',
    title: 'Cisco CCNA (200-301) Foundation to Enterprise Masterclass',
    category: 'Core Enterprise Networking',
    badgeColor: 'sky',
    icon: Server,
    duration: '8 Weeks (Live Lab Drills)',
    level: 'Industry Benchmark',
    batchSchedule: 'Upcoming Batch: Weekday & Weekend',
    description: 'The definitive foundation for every cloud and network architect. Hands-on routing, OSPF, VLANs, STP, access control lists, and network automation with Python.',
    highlights: [
      'Direct CLI terminal access to physical Cisco hardware racks',
      '100% official Cisco CCNA blueprint coverage',
      'Dedicated placement cell & corporate interview preparation'
    ],
    link: '/courses/cisco-ccna-200-301-training/',
    isInternal: true,
    rating: '4.95/5 (3,800+ reviews)'
  },
  {
    id: 'cisco-ccnp-enterprise',
    title: 'Cisco CCNP Enterprise (ENCOR 350-401 & ENARSI 300-410)',
    category: 'Advanced Architecture',
    badgeColor: 'indigo',
    icon: Cpu,
    duration: '12 Weeks (Deep Dive)',
    level: 'Professional Level',
    batchSchedule: 'Upcoming Batch: Weekend Intensive',
    description: 'Architect dual-homed BGP peering, Cisco SD-WAN overlays, enterprise wireless, and network programmability for enterprise networks handling mission-critical traffic.',
    highlights: [
      'Multi-protocol BGP, MPLS & SD-WAN lab topologies',
      'Cisco DNA Center & REST API programmability',
      'Taught directly by Triple CCIE certified faculty'
    ],
    link: 'https://imedita.com/courses/ccnp-training/',
    isInternal: false,
    rating: '4.9/5 (950+ reviews)'
  },
  {
    id: 'multivendor-firewall',
    title: 'Multi-Vendor Next-Gen Firewall Track (Palo Alto & Check Point)',
    category: 'Network Security',
    badgeColor: 'red',
    icon: ShieldCheck,
    duration: '8 Weeks (Security Pods)',
    level: 'Specialist Level',
    batchSchedule: 'Upcoming Batch: Saturday & Sunday',
    description: 'Learn zero-trust security perimeters, Inbound/Outbound SSL decryption, App-ID, Threat Prevention, and NAT policies on dedicated PA-400 physical firewall pods.',
    highlights: [
      'Dedicated physical Palo Alto PA-400 appliance pods',
      'Site-to-Site IPsec VPN & GlobalProtect remote access',
      'Preparation for Palo Alto PCNSA & PCNSE credentials'
    ],
    link: 'https://imedita.com/courses/multi-vendor-training/',
    isInternal: false,
    rating: '4.92/5 (1,150+ reviews)'
  }
];

export function BlogRelatedCourses({ onOpenDemo }) {
  return (
    <section className={styles.section} id="related-courses" aria-labelledby="courses-heading">
      <div className={styles.container}>
        <div className={styles.headerBlock}>
          <div className={styles.eyebrowBadge}>
            <Sparkles size={13} className={styles.eyebrowIcon} aria-hidden="true" />
            <span>ACCELERATE YOUR CLOUD & NETWORKING CAREER</span>
          </div>

          <h2 id="courses-heading" className={styles.heading}>
            Recommended Certification Programs
          </h2>

          <p className={styles.subtext}>
            Complement your AWS credentials with hands-on enterprise networking, cloud architecture, and multi-vendor security bootcamps at I-Medita.
          </p>
        </div>

        <div className={styles.coursesGrid}>
          {RELATED_COURSES.map((course) => {
            const IconComponent = course.icon;
            const LinkComp = course.isInternal ? Link : 'a';
            const linkAttrs = course.isInternal 
              ? { to: course.link } 
              : { href: course.link, target: '_blank', rel: 'noopener noreferrer' };

            return (
              <div key={course.id} className={styles.courseCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.iconWrap}>
                    <IconComponent size={22} className={styles.courseIcon} aria-hidden="true" />
                  </div>
                  <div className={styles.badgeCol}>
                    <span className={styles.categoryBadge}>{course.category}</span>
                    <span className={styles.levelBadge}>{course.level}</span>
                  </div>
                </div>

                <h3 className={styles.courseTitle}>
                  <LinkComp {...linkAttrs} className={styles.titleLink}>
                    {course.title}
                  </LinkComp>
                </h3>

                <p className={styles.courseDesc}>
                  {course.description}
                </p>

                <div className={styles.metaRow}>
                  <div className={styles.metaItem}>
                    <Clock size={13} className={styles.metaIcon} aria-hidden="true" />
                    <span>{course.duration}</span>
                  </div>
                  <div className={styles.metaItem}>
                    <Calendar size={13} className={styles.metaIcon} aria-hidden="true" />
                    <span>{course.batchSchedule}</span>
                  </div>
                </div>

                <ul className={styles.highlightList}>
                  {course.highlights.map((h, i) => (
                    <li key={i} className={styles.highlightItem}>
                      <CheckCircle2 size={13} className={styles.checkIcon} aria-hidden="true" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className={styles.cardFooter}>
                  <button
                    type="button"
                    onClick={() => onOpenDemo(course.title)}
                    className={styles.demoBtn}
                  >
                    <span>Book Free Demo</span>
                    <ArrowRight size={14} className={styles.btnIcon} aria-hidden="true" />
                  </button>

                  <LinkComp {...linkAttrs} className={styles.viewCourseLink}>
                    <span>Syllabus</span>
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </LinkComp>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default BlogRelatedCourses;
