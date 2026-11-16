import React, { useState, useMemo } from 'react';
import {
  BookOpen,
  Clock,
  ArrowRight,
  ArrowUpRight,
  Terminal,
  ShieldCheck,
  Cpu,
  Network,
  Sparkles,
  TrendingUp,
  Bookmark,
  ExternalLink,
  Layers,
  CheckCircle2,
  FileText
} from 'lucide-react';
import styles from './LatestBlogsSection.module.css';

const categories = [
  { id: 'all', label: 'All Articles' },
  { id: 'routing', label: 'Cisco Routing & CCNA' },
  { id: 'security', label: 'Next-Gen Firewalls' },
  { id: 'cloud', label: 'Cloud & SD-WAN' },
  { id: 'career', label: 'Career & Salary Guides' }
];

const articlesData = [
  {
    id: 'cisco-sdwan-enterprise',
    category: 'cloud',
    categoryLabel: 'Cisco SD-WAN',
    icon: Network,
    badgeColor: 'blue',
    title: 'Architecting Enterprise Cisco SD-WAN Across Dual-ISP & MPLS Overlays',
    summary: 'A production architecture walkthrough of BFD template probes, color-binding fallbacks, and application-aware routing (AAR) policies for zero-packet-drop enterprise VoIP failover.',
    tags: ['SD-WAN vManage', 'BGP Overlay', 'IPSec Tunnels', 'AAR Policies'],
    readTime: '11 min read',
    date: '12 Nov 2026',
    author: {
      name: 'Saurabh Yadav',
      credential: 'Triple CCIE #46962',
      image: 'https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/12/10071401/Saurabh-Yadav-imedita.svg'
    },
    slug: 'https://www.imedita.com/blog/cisco-sd-wan-architecture-design/'
  },
  {
    id: 'palo-alto-pcnse-guide',
    category: 'security',
    categoryLabel: 'Palo Alto PCNSE',
    icon: ShieldCheck,
    badgeColor: 'orange',
    title: 'Palo Alto PCNSE Blueprint: Mastering App-ID & SSL Forward Proxy Decryption',
    summary: 'Step-by-step enterprise certificate chain deployment, outbound SSL inspection, and zero-trust security perimeter policies configured directly on physical PA-400 lab appliances.',
    tags: ['PA-400 Labs', 'App-ID Engine', 'SSL Decrypt', 'Zero-Trust'],
    readTime: '8 min read',
    date: '08 Nov 2026',
    author: {
      name: 'Baldev Singh',
      credential: 'CCIE Security #37094',
      image: 'https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/01/10071335/Baldev-Singh-imedita-3-1.svg'
    },
    slug: 'https://www.imedita.com/blog/palo-alto-pcnse-preparation-guide/'
  },
  {
    id: 'ccna-200-301-v1-1',
    category: 'routing',
    categoryLabel: 'Cisco CCNA 200-301',
    icon: Terminal,
    badgeColor: 'emerald',
    title: 'New CCNA 200-301 v1.1 Blueprint: AI, Cloud Management & Automation Deep-Dive',
    summary: 'A complete technical breakdown of the latest official Cisco blueprint updates, covering REST APIs, JSON data structures, Ansible automation playbooks, and Cisco DNA Center telemetry.',
    tags: ['CCNA v1.1', 'Python APIs', 'REST / JSON', 'Ansible Automation'],
    readTime: '9 min read',
    date: '28 Oct 2026',
    author: {
      name: 'Praveen Mishra',
      credential: 'Triple CCIE #43614',
      image: 'https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/03/10071323/Praveen-Kumar-imedita-300x300-1.webp'
    },
    slug: 'https://www.imedita.com/blog/cisco-ccna-200-301-syllabus-changes/'
  },
  {
    id: 'aws-transit-gateway',
    category: 'cloud',
    categoryLabel: 'AWS Cloud Fabric',
    icon: Cpu,
    badgeColor: 'purple',
    title: 'AWS Transit Gateway & Direct Connect: Multi-Account Hybrid BGP Peering',
    summary: 'Designing enterprise BGP peering between on-premise Cisco ASR 1000 routers and AWS Transit Gateways across multiple active Availability Zones and production VPC attachments.',
    tags: ['AWS DirectConnect', 'TGW Route Tables', 'BGP Peering', 'Hybrid Cloud'],
    readTime: '10 min read',
    date: '20 Oct 2026',
    author: {
      name: 'Sudhanshu Bhat',
      credential: 'CCIE #41212 & AWS Arch',
      image: 'https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/12/10071359/Sudhanshu-Bhat-imedita.svg'
    },
    slug: 'https://www.imedita.com/blog/aws-transit-gateway-vpc-peering/'
  },
  {
    id: 'network-engineer-roadmap-2026',
    category: 'career',
    categoryLabel: 'Career Playbook',
    icon: TrendingUp,
    badgeColor: 'cyan',
    title: 'How to Land a ₹6–10 LPA Network Engineer Role as a Fresher in India',
    summary: 'A proven milestone-by-milestone playbook: clearing CCNA 200-301, building physical hardware lab topologies, crafting high-impact GitHub profiles, and cracking technical L1/L2 NOC interview rounds.',
    tags: ['NOC Engineer', 'Salary Growth', 'Interview Prep', 'Lab Portfolio'],
    readTime: '7 min read',
    date: '15 Oct 2026',
    author: {
      name: 'Saurabh Yadav',
      credential: 'Triple CCIE #46962',
      image: 'https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/12/10071401/Saurabh-Yadav-imedita.svg'
    },
    slug: 'https://www.imedita.com/blog/how-to-become-network-engineer-freshers-guide/'
  },
  {
    id: 'checkpoint-r81-clusterxl',
    category: 'security',
    categoryLabel: 'Check Point CCSE',
    icon: Layers,
    badgeColor: 'rose',
    title: 'Check Point Quantum R81.20: High Availability with ClusterXL & SandBlast Threat Prevention',
    summary: 'Configuring active/standby state synchronization, Identity Awareness agents, and zero-day threat prevention with CPU-level SandBlast emulation in enterprise perimeter firewalls.',
    tags: ['Check Point R81', 'ClusterXL HA', 'SandBlast', 'Zero-Day Shield'],
    readTime: '9 min read',
    date: '05 Oct 2026',
    author: {
      name: 'Baldev Singh',
      credential: 'CCIE Security #37094',
      image: 'https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/01/10071335/Baldev-Singh-imedita-3-1.svg'
    },
    slug: 'https://www.imedita.com/blog/checkpoint-firewall-training/'
  }
];

export function LatestBlogsSection() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredArticles = useMemo(() => {
    if (activeCategory === 'all') return articlesData;
    return articlesData.filter((article) => article.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className={styles.blogsSection} id="blog" aria-label="Engineering Knowledge Base & Architecture Guides">
      {/* Ambient Lighting Orbs */}
      <div className={styles.ambientAuraLeft} aria-hidden="true" />
      <div className={styles.ambientAuraRight} aria-hidden="true" />

      <div className={styles.sectionContainer}>
        {/* ================= 1. SECTION HEADER ================= */}
        <header className={styles.headerBlock}>
          <div className={styles.eyebrowBadge}>
            <Sparkles size={13} className={styles.sparkleIcon} />
            <span>KNOWLEDGE BASE &amp; BLUEPRINTS</span>
          </div>

          <h2 className={styles.sectionHeading}>
            Engineering Guides &amp; Architecture Walkthroughs
          </h2>

          <p className={styles.sectionSubtext}>
            Production datacenter configurations, protocol teardowns, and certification blueprints authored by India's most certified CCIE engineering faculty.
          </p>

          {/* Category Filter Pills */}
          <div className={styles.quickCategoryNav} role="tablist" aria-label="Blog categories">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              const count =
                cat.id === 'all'
                  ? articlesData.length
                  : articlesData.filter((a) => a.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`${styles.categoryPill} ${isActive ? styles.categoryPillActive : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  <span>{cat.label}</span>
                  <span className={styles.categoryCountBadge}>{count}</span>
                </button>
              );
            })}
          </div>
        </header>

        {/* ================= 2. EDITORIAL ARTICLES GRID ================= */}
        <div className={styles.articlesGrid}>
          {filteredArticles.map((article) => {
            const Icon = article.icon;
            return (
              <article key={article.id} className={styles.articleCard}>
                <a
                  href={article.slug}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.cardLinkWrapper}
                  aria-label={`Read article: ${article.title}`}
                >
                  {/* Top Card Graphic Header */}
                  <div className={`${styles.cardGraphicBanner} ${styles[`banner_${article.badgeColor}`]}`}>
                    <div className={styles.bannerGridPattern} />
                    
                    <div className={styles.bannerTopRow}>
                      <span className={`${styles.categoryBadge} ${styles[`catBadge_${article.badgeColor}`]}`}>
                        <Icon size={12} className={styles.catIcon} />
                        <span>{article.categoryLabel}</span>
                      </span>

                      <div className={styles.readTimeBadge}>
                        <Clock size={11} />
                        <span>{article.readTime}</span>
                      </div>
                    </div>

                    <div className={styles.bannerCenterIcon}>
                      <div className={styles.iconOrb}>
                        <Icon size={24} strokeWidth={2.2} />
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className={styles.cardContent}>
                    <div className={styles.dateRow}>
                      <span className={styles.publishDate}>{article.date}</span>
                      <span className={styles.verifiedDot}>•</span>
                      <span className={styles.verifiedText}>Verified CCIE Blueprint</span>
                    </div>

                    <h3 className={styles.articleTitle}>
                      <span>{article.title}</span>
                      <ArrowUpRight size={17} className={styles.titleArrow} />
                    </h3>

                    <p className={styles.articleSummary}>{article.summary}</p>

                    {/* Tech Stack Chips */}
                    <div className={styles.tagsRow}>
                      {article.tags.map((tag, tIdx) => (
                        <span key={tIdx} className={styles.tagChip}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Author & Read Link Footer */}
                    <div className={styles.authorFooter}>
                      <div className={styles.authorMeta}>
                        <img
                          src={article.author.image}
                          alt={article.author.name}
                          className={styles.authorAvatar}
                          loading="lazy"
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                        />
                        <div className={styles.authorDetails}>
                          <span className={styles.authorName}>{article.author.name}</span>
                          <span className={styles.authorCredential}>{article.author.credential}</span>
                        </div>
                      </div>

                      <div className={styles.readMorePill}>
                        <span>Read</span>
                        <ArrowRight size={13} className={styles.readChevron} />
                      </div>
                    </div>
                  </div>
                </a>
              </article>
            );
          })}
        </div>

        {/* ================= 3. BOTTOM KNOWLEDGE HUB CATALYST BANNER ================= */}
        <div className={styles.catalystBanner}>
          <div className={styles.catalystLeft}>
            <div className={styles.catalystOrb}>
              <BookOpen size={24} />
            </div>
            <div>
              <h3 className={styles.catalystHeading}>
                Explore 150+ In-Depth Network Architecture Guides
              </h3>
              <p className={styles.catalystSubtext}>
                From entry-level CCNA packet walkthroughs to advanced CCIE enterprise datacenter topologies, interview questions, and lab configurations on the I-Medita official blog.
              </p>
            </div>
          </div>

          <div className={styles.catalystRight}>
            <a
              href="https://www.imedita.com/blog/"
              target="_blank"
              rel="noreferrer"
              className={styles.catalystPrimaryBtn}
            >
              <Sparkles size={14} />
              <span>Explore All 150+ Blueprints</span>
              <ArrowUpRight size={15} />
            </a>
            <a
              href="/courses/ccna-training#syllabus"
              className={styles.catalystSecondaryBtn}
            >
              <FileText size={14} />
              <span>View Official CCNA 200-301 Syllabus</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export { LatestBlogsSection as DarkBlog, LatestBlogsSection as BlogSection, LatestBlogsSection as BlogVisualizer };
export default LatestBlogsSection;
