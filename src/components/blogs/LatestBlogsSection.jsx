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
  Search,
  CheckCircle2,
  FileText,
  Activity,
  Layers,
  Server,
  Cloud,
  Lock,
  Zap,
  ChevronRight
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
  categoryLabel: 'Featured Cisco Architecture',
  badge: 'DEEP-DIVE LAB BLUEPRINT',
  title: 'Architecting Zero-Downtime Cisco SD-WAN Across Dual-ISP & MPLS Overlays',
  summary: 'A production blueprint walkthrough of BFD template probes, color-binding fallbacks, and application-aware routing (AAR) policies for zero-packet-drop enterprise VoIP and CRM failover.',
  difficulty: 'CCIE Enterprise Tier',
  readTime: '11 min read',
  date: '12 Nov 2026',
  author: {
    name: 'Saurabh Yadav',
    credential: 'Triple CCIE #46962',
    image: 'https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/12/10071401/Saurabh-Yadav-imedita.svg'
  },
  metrics: [
    { label: 'Failover SLA', value: '< 250ms' },
    { label: 'Packet Loss', value: '0.00%' },
    { label: 'Active Links', value: 'Dual 10G' }
  ],
  topology: [
    { label: 'Branch Edge', sub: 'ISR 4451 Router', color: '#0066ff' },
    { label: 'vSmart Core', sub: 'IPSec Mesh AS 65001', color: '#0284c7' },
    { label: 'Multi-Cloud Fabric', sub: 'AWS Transit Gateway', color: '#7c3aed' }
  ],
  tags: ['SD-WAN vManage', 'BGP Overlay', 'IPSec Tunnels', 'AAR Policies'],
  slug: 'https://www.imedita.com/blog/cisco-sd-wan-architecture-design/'
};

// Side editorial stories
const sideStories = [
  {
    id: 'palo-alto-pcnse',
    category: 'security',
    categoryLabel: 'Next-Gen Firewall',
    title: 'Palo Alto PCNSE Blueprint: Mastering App-ID & SSL Forward Proxy Decryption',
    summary: 'Step-by-step enterprise certificate chain deployment, outbound SSL inspection, and zero-trust security perimeter policies configured directly on physical PA-400 lab appliances.',
    readTime: '8 min read',
    date: '08 Nov 2026',
    author: {
      name: 'Baldev Singh',
      credential: 'CCIE Security #37094',
      image: 'https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/01/10071335/Baldev-Singh-imedita-3-1.svg'
    },
    pipeline: ['Client Hello', 'PA-400 SSL Proxy', 'App-ID Check', 'Untrust Clear'],
    tags: ['PA-400 Hardware', 'SSL Forward Proxy', 'App-ID Engine'],
    slug: 'https://www.imedita.com/blog/palo-alto-pcnse-preparation-guide/'
  },
  {
    id: 'aws-transit-gateway',
    category: 'cloud',
    categoryLabel: 'Cloud Architecture',
    title: 'AWS Transit Gateway & Direct Connect: Multi-Account Hybrid BGP Peering',
    summary: 'Designing enterprise BGP peering between on-premise Cisco ASR 1000 routers and AWS Transit Gateways across multiple active Availability Zones and production VPC attachments.',
    readTime: '10 min read',
    date: '20 Oct 2026',
    author: {
      name: 'Sudhanshu Bhat',
      credential: 'CCIE #41212 & AWS Arch',
      image: 'https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/12/10071359/Sudhanshu-Bhat-imedita.svg'
    },
    pipeline: ['On-Prem ASR 1000', '10G DirectConnect', 'TGW Route Tables', 'Prod VPCs'],
    tags: ['AWS DirectConnect', 'BGP Peering', 'Hybrid Cloud'],
    slug: 'https://www.imedita.com/blog/aws-transit-gateway-vpc-peering/'
  }
];

// Bottom specialized cards
const bottomStories = [
  {
    id: 'ccna-200-301-v1-1',
    category: 'cisco',
    categoryLabel: 'Cisco Certification',
    cardType: 'checklist',
    title: 'New CCNA 200-301 v1.1 Blueprint: AI, Cloud Management & Automation',
    summary: 'A complete technical breakdown of the latest official Cisco blueprint updates, covering REST APIs, JSON data structures, and Ansible automation playbooks.',
    checklist: [
      'Generative AI in Network Operations & Prompting',
      'Cisco DNA Center & Catalyst Center Telemetry',
      'RESTCONF APIs & JSON Payload Structuring'
    ],
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
    cardType: 'salaryLadder',
    title: 'How to Land a ₹6–10 LPA Network Engineer Role as a Fresher in India',
    summary: 'A milestone-by-milestone roadmap: clearing CCNA, building physical hardware lab topologies, crafting high-impact resumes, and cracking NOC technical interviews.',
    salaryTiers: [
      { exp: 'Fresher (CCNA Certified)', package: '₹4.5 – 6.5 LPA', role: 'NOC / Junior Network Eng' },
      { exp: '2–3 Yrs (CCNP / Firewalls)', package: '₹8.0 – 12.0 LPA', role: 'Network Security Specialist' },
      { exp: '5+ Yrs (CCIE / Cloud WAN)', package: '₹18.0 – 28.0 LPA', role: 'Senior Network Architect' }
    ],
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
    cardType: 'telemetry',
    title: 'Check Point Quantum R81.20: High Availability with ClusterXL & Threat Prevention',
    summary: 'Configuring active/standby state synchronization, Identity Awareness agents, and zero-day threat prevention with CPU-level SandBlast emulation in multi-gateway clusters.',
    metrics: [
      { label: 'Cluster Sync', value: '< 1ms Jitter' },
      { label: 'Inspection Mode', value: 'SandBlast Zero-Day' },
      { label: 'State Sync Loss', value: '0 Sessions Dropped' }
    ],
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

  // Filter logic
  const isMatch = (cat) => activeCategory === 'all' || cat === activeCategory;

  const showHero = isMatch(featuredBlueprint.category);
  const filteredSide = sideStories.filter(s => isMatch(s.category));
  const filteredBottom = bottomStories.filter(b => isMatch(b.category));

  return (
    <section id="blog" className={styles.editorialSection}>
      {/* Ambient background lighting */}
      <div className={styles.ambientAuraTop} />
      <div className={styles.ambientAuraBottom} />

      <div className={styles.container}>
        {/* ================= 1. EDITORIAL HEADER ================= */}
        <div className={styles.headerBlock}>
          <div className={styles.kickerPill}>
            <span className={styles.pulseDot} />
            <BookOpen size={14} className={styles.kickerIcon} />
            <span>I-MEDITA ENGINEERING JOURNAL • CCIE ARCHITECTURAL GUIDES</span>
          </div>

          <h2 className={styles.mainTitle}>
            Engineering Guides & <span className={styles.titleGradient}>Production Blueprints</span>
          </h2>

          <p className={styles.subtitle}>
            Battle-tested enterprise datacenter topologies, next-gen firewall configs, and Cisco certification playbooks authored exclusively by India's only triple-CCIE faculty.
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

        {/* ================= 2. BENTO MAGAZINE SHOWCASE ================= */}
        <div className={styles.bentoContainer}>
          {/* TOP ROW: HERO CARD (7 COLS) + SIDE STACK (5 COLS) */}
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
                        <Zap size={12} className={styles.zapIcon} />
                        {featuredBlueprint.badge}
                      </span>
                      <span className={styles.categoryTag}>{featuredBlueprint.categoryLabel}</span>
                    </div>

                    <div className={styles.readTimeBadge}>
                      <Clock size={12} />
                      <span>{featuredBlueprint.readTime}</span>
                    </div>
                  </div>

                  {/* Headline & Abstract */}
                  <div className={styles.heroTextContent}>
                    <h3 className={styles.heroHeading}>
                      <span>{featuredBlueprint.title}</span>
                      <ArrowUpRight size={22} className={styles.heroArrow} />
                    </h3>
                    <p className={styles.heroSummary}>{featuredBlueprint.summary}</p>
                  </div>

                  {/* Simulated Production Topology Schematic */}
                  <div className={styles.topologySchematic}>
                    <div className={styles.topologyHeader}>
                      <div className={styles.topologyStatusDot} />
                      <span className={styles.topologyLabel}>PRODUCTION TOPOLOGY: DUAL-OVERLAY-V4</span>
                      <span className={styles.topologyLiveTag}>LIVE LAB RACK</span>
                    </div>

                    <div className={styles.topologyNodesTrack}>
                      {featuredBlueprint.topology.map((node, nIdx) => (
                        <React.Fragment key={nIdx}>
                          <div className={styles.topologyNodeBox}>
                            <div className={styles.nodeIconOrb} style={{ color: node.color }}>
                              {nIdx === 0 && <RouterIcon />}
                              {nIdx === 1 && <Server size={18} />}
                              {nIdx === 2 && <Cloud size={18} />}
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

                    {/* Telemetry Metrics Bar */}
                    <div className={styles.telemetryBar}>
                      {featuredBlueprint.metrics.map((m, mIdx) => (
                        <div key={mIdx} className={styles.metricItem}>
                          <span className={styles.metricLabel}>{m.label}</span>
                          <span className={styles.metricValue}>{m.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer: CCIE Mentor & Read Action */}
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
                      <span>Read Architectural Blueprint</span>
                      <ArrowRight size={15} />
                    </div>
                  </div>
                </a>
              </div>
            )}

            {/* SIDE STACK: 2 HIGH-DENSITY EDITORIAL CARDS */}
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
                    <div className={styles.sideCardTop}>
                      <span className={styles.sideCategoryBadge}>{story.categoryLabel}</span>
                      <div className={styles.sideReadTime}>
                        <Clock size={11} />
                        <span>{story.readTime}</span>
                      </div>
                    </div>

                    <h4 className={styles.sideCardTitle}>
                      <span>{story.title}</span>
                      <ArrowUpRight size={17} className={styles.sideArrow} />
                    </h4>

                    <p className={styles.sideCardSummary}>{story.summary}</p>

                    {/* Step-by-Step Architecture Pipeline */}
                    <div className={styles.pipelineBox}>
                      <span className={styles.pipelineLabel}>Inspection Flow:</span>
                      <div className={styles.pipelineSteps}>
                        {story.pipeline.map((step, sIdx) => (
                          <React.Fragment key={sIdx}>
                            <span className={styles.pipelineStepChip}>{step}</span>
                            {sIdx < story.pipeline.length - 1 && (
                              <ChevronRight size={12} className={styles.pipelineChevron} />
                            )}
                          </React.Fragment>
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

          {/* BOTTOM ROW: 3 DIVERSE SPECIALIZED CARDS */}
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

                  {/* VARIANT 1: CCNA EXAM CHECKLIST */}
                  {item.cardType === 'checklist' && (
                    <div className={styles.specialWidget}>
                      <div className={styles.widgetHeader}>
                        <FileText size={13} className={styles.widgetIcon} />
                        <span>Official 200-301 v1.1 Blueprint Additions:</span>
                      </div>
                      <ul className={styles.checklistList}>
                        {item.checklist.map((c, cIdx) => (
                          <li key={cIdx} className={styles.checkItem}>
                            <CheckCircle2 size={13} className={styles.checkIcon} />
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* VARIANT 2: SALARY LADDER ROADMAP */}
                  {item.cardType === 'salaryLadder' && (
                    <div className={styles.specialWidget}>
                      <div className={styles.widgetHeader}>
                        <TrendingUp size={13} className={styles.widgetIcon} />
                        <span>Fresher to Lead CTC Benchmarks (India 2026):</span>
                      </div>
                      <div className={styles.salaryTiersStack}>
                        {item.salaryTiers.map((tier, tIdx) => (
                          <div key={tIdx} className={styles.salaryTierRow}>
                            <div className={styles.salaryTierLeft}>
                              <span className={styles.tierExp}>{tier.exp}</span>
                              <span className={styles.tierRole}>{tier.role}</span>
                            </div>
                            <span className={styles.tierPkg}>{tier.package}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* VARIANT 3: CLUSTERXL TELEMETRY */}
                  {item.cardType === 'telemetry' && (
                    <div className={styles.specialWidget}>
                      <div className={styles.widgetHeader}>
                        <Activity size={13} className={styles.widgetIcon} />
                        <span>High Availability Cluster Telemetry:</span>
                      </div>
                      <div className={styles.telemetryGrid}>
                        {item.metrics.map((tm, tmIdx) => (
                          <div key={tmIdx} className={styles.telemetryCell}>
                            <span className={styles.telemetryCellVal}>{tm.value}</span>
                            <span className={styles.telemetryCellLbl}>{tm.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Author footer */}
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

        {/* ================= 3. ENGINEERING DISPATCH & ARCHIVE BAR ================= */}
        <div className={styles.knowledgeHubDispatchBar}>
          <div className={styles.dispatchLeft}>
            <div className={styles.dispatchIconBox}>
              <Layers size={22} />
            </div>
            <div>
              <h4 className={styles.dispatchHeading}>
                Looking for Specific Routing Protocols or Interview Prep?
              </h4>
              <p className={styles.dispatchSubtext}>
                Browse 150+ in-depth architecture teardowns, Cisco ASA & Palo Alto lab manuals, and CCNA/CCNP interview question sets on the I-Medita Blog.
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
              <span>Explore All 150+ Blueprints</span>
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

// Router icon helper component
function RouterIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
