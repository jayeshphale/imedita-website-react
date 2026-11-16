import React, { useState } from 'react';
import {
  Clock,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Layers,
  ShieldCheck,
  Network,
  Cloud,
  TrendingUp
} from 'lucide-react';
import styles from './LatestBlogsSection.module.css';

const guides = [
  {
    id: 'cisco-sdwan',
    stepNumber: '01',
    category: 'Cisco SD-WAN',
    categoryIcon: Network,
    badgeColor: 'blue',
    title: 'Architecting Zero-Downtime Cisco SD-WAN Across Dual-ISP & MPLS Overlays',
    subtitle: 'Production walkthrough of BFD template probes, color-binding fallbacks, and application-aware routing (AAR) policies for enterprise failover.',
    image: 'https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/06/10071301/imedita_71.jpg',
    readTime: '11 min read',
    date: '12 Nov 2026',
    takeaways: [
      'BFD echo probes configured with 100ms multiplier for sub-second failure detection',
      'Color-binding fallbacks preventing VoIP disconnects during brownout events',
      'Application-Aware Routing (AAR) automated traffic steering across IPsec tunnels'
    ],
    author: {
      name: 'Saurabh Yadav',
      credential: 'Triple CCIE #46962',
      image: 'https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/12/10071401/Saurabh-Yadav-imedita.svg'
    },
    slug: 'https://www.imedita.com/blog/cisco-sd-wan-architecture-design/'
  },
  {
    id: 'palo-alto-pcnse',
    stepNumber: '02',
    category: 'Next-Gen Firewall',
    categoryIcon: ShieldCheck,
    badgeColor: 'orange',
    title: 'Palo Alto PCNSE Blueprint: Mastering App-ID & SSL Decryption',
    subtitle: 'Step-by-step enterprise certificate chain deployment, outbound SSL inspection, and zero-trust security perimeter policies on physical PA-400 appliances.',
    image: '/server-datacenter-engineer.jpg',
    readTime: '8 min read',
    date: '08 Nov 2026',
    takeaways: [
      'Enterprise root CA certificate distribution and outbound forward proxy setup',
      'Custom App-ID signature creation for proprietary in-house applications',
      'Zero-Trust security perimeter enforcement without end-user TLS connection drops'
    ],
    author: {
      name: 'Baldev Singh',
      credential: 'CCIE Security #37094',
      image: 'https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/01/10071335/Baldev-Singh-imedita-3-1.svg'
    },
    slug: 'https://www.imedita.com/blog/palo-alto-pcnse-preparation-guide/'
  },
  {
    id: 'aws-transit-gateway',
    stepNumber: '03',
    category: 'Cloud Architecture',
    categoryIcon: Cloud,
    badgeColor: 'purple',
    title: 'AWS Transit Gateway & Direct Connect: Multi-Account BGP Peering',
    subtitle: 'Designing enterprise BGP peering between on-premise Cisco ASR routers and AWS Transit Gateways across multiple active Availability Zones.',
    image: 'https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/06/10071302/imedita_66.jpg',
    readTime: '10 min read',
    date: '20 Oct 2026',
    takeaways: [
      'Redundant 10G AWS Direct Connect circuits with active-active BGP path prepending',
      'Transit Gateway route table propagation across production and shared services VPCs',
      'Cisco ASR 1000 IPSec backup tunnel automated failover design'
    ],
    author: {
      name: 'Sudhanshu Bhat',
      credential: 'CCIE #41212 & AWS Arch',
      image: 'https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/12/10071359/Sudhanshu-Bhat-imedita.svg'
    },
    slug: 'https://www.imedita.com/blog/aws-transit-gateway-vpc-peering/'
  },
  {
    id: 'career-salary-guide',
    stepNumber: '04',
    category: 'Career Playbook',
    categoryIcon: TrendingUp,
    badgeColor: 'emerald',
    title: 'How to Land a ₹6–10 LPA Network Engineer Role as a Fresher in India',
    subtitle: 'A proven milestone roadmap: clearing CCNA, building physical hardware lab topologies, crafting high-impact resumes, and cracking NOC technical interviews.',
    image: 'https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/06/10071301/imedita_69.jpg',
    readTime: '7 min read',
    date: '15 Oct 2026',
    takeaways: [
      'Core lab topologies that impress enterprise interviewers (OSPF, BGP, NAT, ACLs)',
      'Crafting a portfolio demonstrating hands-on physical hardware rack experience',
      'Step-by-step interview strategy for clearing L1/L2 NOC and Systems rounds'
    ],
    author: {
      name: 'Saurabh Yadav',
      credential: 'Triple CCIE #46962',
      image: 'https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/12/10071401/Saurabh-Yadav-imedita.svg'
    },
    slug: 'https://www.imedita.com/blog/network-engineer-salary-in-india/'
  }
];

export function LatestBlogsSection() {
  const [activeTab, setActiveTab] = useState(0);
  const activeGuide = guides[activeTab];
  const IconComponent = activeGuide.categoryIcon;

  return (
    <section id="blog" className={styles.showcaseSection}>
      <div className={styles.ambientGlow} />

      <div className={styles.container}>
        {/* ================= 1. CLEAN HEADER ================= */}
        <div className={styles.headerBlock}>
          <div className={styles.kickerPill}>
            <span className={styles.pulseDot} />
            <BookOpen size={13} className={styles.kickerIcon} />
            <span>I-MEDITA ENGINEERING JOURNAL</span>
          </div>

          <h2 className={styles.mainTitle}>
            Engineering Guides & <span className={styles.titleGradient}>Architecture Blueprints</span>
          </h2>

          <p className={styles.subtitle}>
            Battle-tested enterprise datacenter topologies, next-gen firewall configs, and Cisco certification playbooks.
          </p>
        </div>

        {/* ================= 2. INTERACTIVE TABBED SHOWCASE ================= */}
        <div className={styles.showcaseGrid}>
          {/* LEFT: CURATED TOPIC TABS */}
          <div className={styles.tabsList} role="tablist">
            {guides.map((item, idx) => {
              const isActive = activeTab === idx;
              const TabIcon = item.categoryIcon;

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(idx)}
                  className={`${styles.tabItem} ${isActive ? styles.tabItemActive : ''}`}
                  role="tab"
                  aria-selected={isActive}
                >
                  <div className={styles.tabNumberBadge}>{item.stepNumber}</div>

                  <div className={styles.tabContent}>
                    <div className={styles.tabMeta}>
                      <span className={`${styles.tabCategoryPill} ${styles[`pill_${item.badgeColor}`]}`}>
                        <TabIcon size={11} />
                        <span>{item.category}</span>
                      </span>
                      <span className={styles.tabReadTime}>{item.readTime}</span>
                    </div>

                    <h4 className={styles.tabTitle}>{item.title}</h4>
                    <span className={styles.tabAuthor}>{item.author.name}</span>
                  </div>

                  <ChevronRight size={16} className={styles.tabChevron} />
                </button>
              );
            })}
          </div>

          {/* RIGHT: EXPANSIVE PREVIEW CARD */}
          <div className={styles.previewContainer}>
            <div className={styles.previewCard}>
              {/* Media Header */}
              <div className={styles.previewMedia}>
                <img
                  src={activeGuide.image}
                  alt={activeGuide.title}
                  className={styles.previewImage}
                  key={activeGuide.id}
                />
                <div className={styles.mediaOverlay} />

                <div className={styles.mediaBadgesRow}>
                  <span className={`${styles.mediaCategoryBadge} ${styles[`badge_${activeGuide.badgeColor}`]}`}>
                    <IconComponent size={12} />
                    <span>{activeGuide.category}</span>
                  </span>

                  <div className={styles.mediaReadBadge}>
                    <Clock size={11} />
                    <span>{activeGuide.readTime}</span>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className={styles.previewBody}>
                <div className={styles.previewDateRow}>
                  <span className={styles.previewDate}>{activeGuide.date}</span>
                  <span className={styles.previewDot}>•</span>
                  <span className={styles.previewVerified}>Verified CCIE Blueprint</span>
                </div>

                <h3 className={styles.previewTitle}>{activeGuide.title}</h3>
                <p className={styles.previewSubtitle}>{activeGuide.subtitle}</p>

                {/* Key Architectural Takeaways */}
                <div className={styles.takeawaysBox}>
                  <span className={styles.takeawaysHeading}>Key Architectural Takeaways:</span>
                  <ul className={styles.takeawaysList}>
                    {activeGuide.takeaways.map((item, tIdx) => (
                      <li key={tIdx} className={styles.takeawayItem}>
                        <CheckCircle2 size={14} className={styles.checkIcon} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Action */}
                <div className={styles.previewFooter}>
                  <div className={styles.authorBadge}>
                    <img
                      src={activeGuide.author.image}
                      alt={activeGuide.author.name}
                      className={styles.authorAvatar}
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                    <div>
                      <span className={styles.authorName}>{activeGuide.author.name}</span>
                      <span className={styles.authorCred}>{activeGuide.author.credential}</span>
                    </div>
                  </div>

                  <a
                    href={activeGuide.slug}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.readFullBtn}
                  >
                    <span>Read Full Blueprint</span>
                    <ArrowRight size={14} className={styles.btnArrow} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= 3. MINIMAL FOOTER LINK ================= */}
        <div className={styles.footerRow}>
          <a
            href="https://www.imedita.com/blog/"
            target="_blank"
            rel="noreferrer"
            className={styles.exploreAllBtn}
          >
            <Sparkles size={14} />
            <span>Explore All 150+ Guides on I-Medita Official Blog</span>
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}

export { LatestBlogsSection as DarkBlog, LatestBlogsSection as BlogSection, LatestBlogsSection as BlogVisualizer };
export default LatestBlogsSection;
