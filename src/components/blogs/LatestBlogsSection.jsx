import React from 'react';
import {
  Clock,
  ArrowRight,
  ArrowUpRight,
  Server,
  Cloud,
  Zap,
  Sparkles
} from 'lucide-react';
import styles from './LatestBlogsSection.module.css';

// Featured Lead Story
const featuredBlueprint = {
  id: 'cisco-sdwan-enterprise',
  categoryLabel: 'Cisco SD-WAN',
  badge: 'FEATURED BLUEPRINT',
  title: 'Architecting Zero-Downtime Cisco SD-WAN Across Dual-ISP & MPLS Overlays',
  summary: 'Production walkthrough of BFD template probes and application-aware routing (AAR) policies for zero-packet-drop enterprise failover.',
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
  tags: ['SD-WAN vManage', 'BGP Overlay'],
  slug: 'https://www.imedita.com/blog/cisco-sd-wan-architecture-design/'
};

// Side Curated Reads (Only 2 high-impact guides)
const curatedStories = [
  {
    id: 'palo-alto-pcnse',
    categoryLabel: 'Next-Gen Firewall',
    title: 'Palo Alto PCNSE Blueprint: Mastering App-ID & SSL Decryption',
    summary: 'Outbound SSL inspection and zero-trust perimeter policies configured directly on physical PA-400 lab appliances.',
    readTime: '8 min read',
    author: {
      name: 'Baldev Singh',
      credential: 'CCIE Security #37094',
      image: 'https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/01/10071335/Baldev-Singh-imedita-3-1.svg'
    },
    tags: ['PA-400 Labs', 'SSL Proxy'],
    slug: 'https://www.imedita.com/blog/palo-alto-pcnse-preparation-guide/'
  },
  {
    id: 'aws-transit-gateway',
    categoryLabel: 'Cloud Architecture',
    title: 'AWS Transit Gateway & Direct Connect: Multi-Account BGP Peering',
    summary: 'Designing enterprise BGP peering between on-premise Cisco ASR routers and AWS Transit Gateways across multiple AZs.',
    readTime: '10 min read',
    author: {
      name: 'Sudhanshu Bhat',
      credential: 'CCIE #41212 & AWS Arch',
      image: 'https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/12/10071359/Sudhanshu-Bhat-imedita.svg'
    },
    tags: ['AWS DirectConnect', 'BGP Peering'],
    slug: 'https://www.imedita.com/blog/aws-transit-gateway-vpc-peering/'
  }
];

export function LatestBlogsSection() {
  return (
    <section id="blog" className={styles.editorialSection}>
      <div className={styles.ambientAuraTop} />

      <div className={styles.container}>
        {/* ================= 1. MINIMAL, CLEAN HEADER ================= */}
        <div className={styles.headerBlock}>
          <div className={styles.kickerPill}>
            <span className={styles.pulseDot} />
            <span>I-MEDITA ENGINEERING JOURNAL</span>
          </div>

          <h2 className={styles.mainTitle}>
            Engineering Guides & <span className={styles.titleGradient}>Architecture Blueprints</span>
          </h2>

          <p className={styles.subtitle}>
            Battle-tested enterprise datacenter topologies, next-gen firewall configs, and Cisco certification playbooks.
          </p>
        </div>

        {/* ================= 2. CLEAN 3-STORY BENTO SHOWCASE ================= */}
        <div className={styles.bentoGrid}>
          {/* LEFT: HERO FEATURED BLUEPRINT */}
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

            {/* Title & Summary */}
            <div className={styles.heroTextContent}>
              <h3 className={styles.heroHeading}>
                <span>{featuredBlueprint.title}</span>
                <ArrowUpRight size={19} className={styles.heroArrow} />
              </h3>
              <p className={styles.heroSummary}>{featuredBlueprint.summary}</p>
            </div>

            {/* Streamlined Live Topology Visualizer */}
            <div className={styles.topologySchematic}>
              <div className={styles.topologyHeader}>
                <div className={styles.liveIndicator}>
                  <div className={styles.topologyStatusDot} />
                  <span className={styles.topologyLabel}>LIVE LAB TOPOLOGY • DUAL OVERLAY</span>
                </div>
                <span className={styles.topologyLiveTag}>99.999% SLA</span>
              </div>

              <div className={styles.topologyNodesTrack}>
                {featuredBlueprint.topology.map((node, nIdx) => (
                  <React.Fragment key={nIdx}>
                    <div className={styles.topologyNodeBox}>
                      <div className={styles.nodeIconOrb} style={{ color: node.color }}>
                        {nIdx === 0 && <RouterIcon />}
                        {nIdx === 1 && <Server size={16} />}
                        {nIdx === 2 && <Cloud size={16} />}
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

          {/* RIGHT: 2 CURATED READS */}
          <div className={styles.sideColumn}>
            {curatedStories.map((story) => (
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
        </div>

        {/* ================= 3. MINIMAL CALL-TO-ACTION FOOTER ================= */}
        <div className={styles.bottomBar}>
          <div className={styles.bottomBarLeft}>
            <span className={styles.bottomBarBadge}>KNOWLEDGE HUB</span>
            <p className={styles.bottomBarText}>
              Explore 150+ in-depth architecture teardowns, firewall configs, and CCNA/CCNP interview playbooks.
            </p>
          </div>

          <a
            href="https://www.imedita.com/blog/"
            target="_blank"
            rel="noreferrer"
            className={styles.viewAllBtn}
          >
            <Sparkles size={14} />
            <span>Explore All 150+ Blueprints</span>
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}

// Router icon helper
function RouterIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
