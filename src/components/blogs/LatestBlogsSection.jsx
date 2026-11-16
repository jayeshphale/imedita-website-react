import React, { useState } from 'react';
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
  Server,
  Cloud,
  Zap,
  Layers
} from 'lucide-react';
import styles from './LatestBlogsSection.module.css';

// Filter categories
const categories = [
  { id: 'all', label: 'All Publications' },
  { id: 'cisco', label: 'Cisco & SD-WAN' },
  { id: 'security', label: 'Next-Gen Firewalls' },
  { id: 'cloud', label: 'Cloud Networks' },
  { id: 'career', label: 'Career & Salary' }
];

// Featured Lead Story
const featuredBlueprint = {
  id: 'cisco-sdwan-enterprise',
  category: 'cisco',
  categoryLabel: 'Cisco SD-WAN',
  badge: 'FEATURED BLUEPRINT',
  title: 'Architecting Zero-Downtime Cisco SD-WAN Across Dual-ISP & MPLS Overlays',
  summary: 'A production blueprint walkthrough of BFD template probes, color-binding fallbacks, and application-aware routing (AAR) policies for zero-packet-drop enterprise failover.',
  readTime: '11 min read',
  author: {
    name: 'Saurabh Yadav',
    credential: 'Triple CCIE #46962',
    image: 'https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/12/10071401/Saurabh-Yadav-imedita.svg'
  },
  topology: [
    { label: 'Branch Edge', sub: 'ISR 4451 Router', color: '#0066ff' },
    { label: 'vSmart Core', sub: 'IPSec Mesh AS 65001', color: '#0284c7' },
    { label: 'Cloud Fabric', sub: 'AWS Transit Gateway', color: '#7c3aed' }
  ],
  tags: ['SD-WAN vManage', 'BGP Overlay', 'IPSec Tunnels'],
  slug: 'https://www.imedita.com/blog/cisco-sd-wan-architecture-design/'
};

// Side editorial stories
const sideStories = [
  {
    id: 'palo-alto-pcnse',
    category: 'security',
    categoryLabel: 'Next-Gen Firewall',
    title: 'Palo Alto PCNSE Blueprint: Mastering App-ID & SSL Decryption',
    summary: 'Enterprise certificate chain deployment, outbound SSL inspection, and zero-trust security perimeter policies configured directly on physical PA-400 lab appliances.',
    readTime: '8 min read',
    author: {
      name: 'Baldev Singh',
      credential: 'CCIE Security #37094',
      image: 'https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/01/10071335/Baldev-Singh-imedita-3-1.svg'
    },
    tags: ['PA-400 Labs', 'SSL Proxy', 'App-ID'],
    slug: 'https://www.imedita.com/blog/palo-alto-pcnse-preparation-guide/'
  },
  {
    id: 'aws-transit-gateway',
    category: 'cloud',
    categoryLabel: 'Cloud Architecture',
    title: 'AWS Transit Gateway & Direct Connect: Multi-Account BGP Peering',
    summary: 'Designing enterprise BGP peering between on-premise Cisco ASR 1000 routers and AWS Transit Gateways across multiple active Availability Zones.',
    readTime: '10 min read',
    author: {
      name: 'Sudhanshu Bhat',
      credential: 'CCIE #41212 & AWS Arch',
      image: 'https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/12/10071359/Sudhanshu-Bhat-imedita.svg'
    },
    tags: ['AWS DirectConnect', 'TGW Routing', 'Hybrid Cloud'],
    slug: 'https://www.imedita.com/blog/aws-transit-gateway-vpc-peering/'
  }
];

// Bottom cards (Clean, airy, decluttered)
const bottomStories = [
  {
    id: 'ccna-200-301-v1-1',
    category: 'cisco',
    categoryLabel: 'Cisco CCNA',
    title: 'New CCNA 200-301 v1.1 Blueprint: AI, Cloud Management & Automation',
    summary: 'A technical breakdown of the latest official Cisco blueprint updates, covering REST APIs, JSON data structures, and Ansible automation playbooks.',
    tags: ['CCNA v1.1', 'Python APIs', 'Ansible Playbooks'],
    readTime: '9 min read',
    author: {
      name: 'Praveen Mishra',
      credential: 'Triple CCIE #43614',
      image: 'https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/03/10071323/Praveen-Kumar-imedita-300x300-1.webp'
    },
    slug: 'https://www.imedita.com/blog/cisco-ccna-200-301-syllabus-changes/'
  },
  {
    id: 'network-engineer-salary-guide',
    category: 'career',
    categoryLabel: 'Career Playbook',
    title: 'How to Land a ₹6–10 LPA Network Engineer Role as a Fresher in India',
    summary: 'A proven milestone roadmap: clearing CCNA, building physical hardware lab topologies, crafting high-impact resumes, and cracking NOC technical interviews.',
    tags: ['Fresher ₹6-10L', 'NOC Roles', 'Interview Q&A'],
    readTime: '7 min read',
    author: {
      name: 'Saurabh Yadav',
      credential: 'Triple CCIE #46962',
      image: 'https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/12/10071401/Saurabh-Yadav-imedita.svg'
    },
    slug: 'https://www.imedita.com/blog/network-engineer-salary-in-india/'
  },
  {
    id: 'checkpoint-clusterxl',
    category: 'security',
    categoryLabel: 'Enterprise Security',
    title: 'Check Point Quantum R81.20: High Availability with ClusterXL',
    summary: 'Configuring active/standby state synchronization, Identity Awareness agents, and zero-day threat prevention with CPU-level SandBlast emulation.',
    tags: ['ClusterXL Sync', 'SandBlast Threat', 'Quantum R81'],
    readTime: '9 min read',
    author: {
      name: 'Baldev Singh',
      credential: 'CCIE Security #37094',
      image: 'https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/01/10071335/Baldev-Singh-imedita-3-1.svg'
    },
    slug: 'https://www.imedita.com/blog/checkpoint-firewall-configuration-training/'
  }
];

export function LatestBlogsSection() {
  const [activeCategory, setActiveCategory] = useState('all');

  const isMatch = (cat) => activeCategory === 'all' || cat === activeCategory;

  const showHero = isMatch(featuredBlueprint.category);
  const filteredSide = sideStories.filter((s) => isMatch(s.category));
  const filteredBottom = bottomStories.filter((b) => isMatch(b.category));

  return (
    <section id="blog" className={styles.editorialSection}>
      <div className={styles.ambientAuraTop} />

      <div className={styles.container}>
        {/* ================= 1. CLEAN EDITORIAL HEADER ================= */}
        <div className={styles.headerBlock}>
          <div className={styles.kickerPill}>
            <span className={styles.pulseDot} />
            <span>I-MEDITA ENGINEERING JOURNAL</span>
          </div>

          <h2 className={styles.mainTitle}>
            Engineering Guides & <span className={styles.titleGradient}>Architecture Blueprints</span>
          </h2>

          <p className={styles.subtitle}>
            Battle-tested enterprise datacenter topologies, next-gen firewall configs, and Cisco certification playbooks authored by our CCIE faculty.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className={styles.filterPillsTrack}>
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`${styles.filterPill} ${isActive ? styles.filterPillActive : ''}`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* ================= 2. DECLUTTERED BENTO SHOWCASE ================= */}
        <div className={styles.bentoContainer}>
          {/* TOP ROW: HERO CARD (LEFT) + 2 SIDE CARDS (RIGHT) */}
          <div className={styles.topBentoRow}>
            {/* HERO FEATURED BLUEPRINT */}
            {showHero && (
              <div className={styles.heroColumn}>
                <a
                  href={featuredBlueprint.slug}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.heroCard}
                >
                  {/* Top Bar */}
                  <div className={styles.heroTopBar}>
                    <div className={styles.heroBadgeGroup}>
                      <span className={styles.leadBadge}>
                        <Zap size={11} className={styles.zapIcon} />
                        {featuredBlueprint.badge}
                      </span>
                      <span className={styles.categoryTag}>{featuredBlueprint.categoryLabel}</span>
                    </div>

                    <div className={styles.readTimeBadge}>
                      <Clock size={11} />
                      <span>{featuredBlueprint.readTime}</span>
                    </div>
                  </div>

                  {/* Headline & Summary */}
                  <div className={styles.heroTextContent}>
                    <h3 className={styles.heroHeading}>
                      <span>{featuredBlueprint.title}</span>
                      <ArrowUpRight size={20} className={styles.heroArrow} />
                    </h3>
                    <p className={styles.heroSummary}>{featuredBlueprint.summary}</p>
                  </div>

                  {/* Clean, Streamlined Network Topology Schematic */}
                  <div className={styles.topologySchematic}>
                    <div className={styles.topologyHeader}>
                      <div className={styles.liveIndicator}>
                        <div className={styles.topologyStatusDot} />
                        <span className={styles.topologyLabel}>LIVE LAB TOPOLOGY • DUAL OVERLAY</span>
                      </div>
                      <span className={styles.topologyLiveTag}>99.999% Uptime</span>
                    </div>

                    <div className={styles.topologyNodesTrack}>
                      {featuredBlueprint.topology.map((node, nIdx) => (
                        <React.Fragment key={nIdx}>
                          <div className={styles.topologyNodeBox}>
                            <div className={styles.nodeIconOrb} style={{ color: node.color }}>
                              {nIdx === 0 && <RouterIcon />}
                              {nIdx === 1 && <Server size={17} />}
                              {nIdx === 2 && <Cloud size={17} />}
                            </div>
                            <span className={styles.nodeTitle}>{node.label}</span>
                            <span className={styles.nodeSub}>{node.sub}</span>
                          </div>

                          {nIdx < featuredBlueprint.topology.length - 1 && (
                            <div className={styles.topologyConnector}>
                              <div className={styles.connectorLine} />
                              <div className={styles.packetPulse} />
                              <span className={styles.connectorProtocol}>IPSec BGP</span>
                            </div>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className={styles.tagsTrack}>
                    {featuredBlueprint.tags.map((tag, tIdx) => (
                      <span key={tIdx} className={styles.tagChip}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className={styles.heroFooter}>
                    <div className={styles.authorBadge}>
                      <img
                        src={featuredBlueprint.author.image}
                        alt={featuredBlueprint.author.name}
                        className={styles.authorPic}
                      />
                      <div>
                        <span className={styles.authorName}>{featuredBlueprint.author.name}</span>
                        <span className={styles.authorCred}>{featuredBlueprint.author.credential}</span>
                      </div>
                    </div>

                    <div className={styles.readFullBtn}>
                      <span>Read Blueprint</span>
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </a>
              </div>
            )}

            {/* SIDE COLUMN: 2 CLEAN EDITORIAL CARDS */}
            {filteredSide.length > 0 && (
              <div className={`${styles.sideColumn} ${!showHero ? styles.sideColumnFull : ''}`}>
                {filteredSide.map((story) => (
                  <a
                    key={story.id}
                    href={story.slug}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.sideCard}
                  >
                    <div>
                      <div className={styles.sideCardTop}>
                        <span className={styles.sideCategoryBadge}>{story.categoryLabel}</span>
                        <div className={styles.sideReadTime}>
                          <Clock size={11} />
                          <span>{story.readTime}</span>
                        </div>
                      </div>

                      <h4 className={styles.sideCardTitle}>
                        <span>{story.title}</span>
                        <ArrowUpRight size={16} className={styles.sideArrow} />
                      </h4>

                      <p className={styles.sideCardSummary}>{story.summary}</p>

                      <div className={styles.tagsTrack}>
                        {story.tags.map((t, tIdx) => (
                          <span key={tIdx} className={styles.tagChip}>
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className={styles.sideCardFooter}>
                      <div className={styles.authorBadgeSmall}>
                        <img
                          src={story.author.image}
                          alt={story.author.name}
                          className={styles.authorPicSmall}
                        />
                        <span className={styles.authorNameSmall}>
                          {story.author.name} • {story.author.credential}
                        </span>
                      </div>
                      <span className={styles.sideReadLink}>Read Guide →</span>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* BOTTOM ROW: 3 SPACIOUS, CLEAN CARDS */}
          {filteredBottom.length > 0 && (
            <div className={styles.bottomBentoRow}>
              {filteredBottom.map((item) => (
                <a
                  key={item.id}
                  href={item.slug}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.bottomCard}
                >
                  <div>
                    <div className={styles.bottomCardTop}>
                      <span className={styles.bottomCardCat}>{item.categoryLabel}</span>
                      <div className={styles.sideReadTime}>
                        <Clock size={11} />
                        <span>{item.readTime}</span>
                      </div>
                    </div>

                    <h4 className={styles.bottomCardTitle}>
                      <span>{item.title}</span>
                      <ArrowUpRight size={16} className={styles.bottomArrow} />
                    </h4>

                    <p className={styles.bottomCardSummary}>{item.summary}</p>

                    <div className={styles.tagsTrack}>
                      {item.tags.map((tg, tgIdx) => (
                        <span key={tgIdx} className={styles.tagChip}>
                          {tg}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className={styles.bottomCardFooter}>
                    <div className={styles.authorBadgeSmall}>
                      <img
                        src={item.author.image}
                        alt={item.author.name}
                        className={styles.authorPicSmall}
                      />
                      <span className={styles.authorNameSmall}>{item.author.name}</span>
                    </div>
                    <span className={styles.readMoreText}>Read Article →</span>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>

        {/* ================= 3. CLEAN KNOWLEDGE HUB BANNER ================= */}
        <div className={styles.knowledgeHubDispatchBar}>
          <div className={styles.dispatchLeft}>
            <div className={styles.dispatchIconBox}>
              <Layers size={22} />
            </div>
            <div>
              <h4 className={styles.dispatchHeading}>
                Explore 150+ In-Depth Network Architecture Guides
              </h4>
              <p className={styles.dispatchSubtext}>
                From entry-level CCNA packet walkthroughs to advanced CCIE enterprise datacenter topologies, interview questions, and lab configurations.
              </p>
            </div>
          </div>

          <div className={styles.dispatchRight}>
            <a
              href="https://www.imedita.com/blog/"
              target="_blank"
              rel="noreferrer"
              className={styles.dispatchPrimaryBtn}
            >
              <Sparkles size={14} />
              <span>Explore All Blueprints</span>
              <ArrowUpRight size={15} />
            </a>
            <a
              href="/courses/ccna-training#syllabus"
              className={styles.dispatchSecondaryBtn}
            >
              <Terminal size={14} />
              <span>CCNA 200-301 Syllabus</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Router icon helper
function RouterIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <circle cx="6" cy="14" r="1" fill="currentColor" />
      <circle cx="10" cy="14" r="1" fill="currentColor" />
      <circle cx="14" cy="14" r="1" fill="currentColor" />
      <circle cx="18" cy="14" r="1" fill="currentColor" />
    </svg>
  );
}

export { LatestBlogsSection as DarkBlog, LatestBlogsSection as BlogSection, LatestBlogsSection as BlogVisualizer };
export default LatestBlogsSection;
