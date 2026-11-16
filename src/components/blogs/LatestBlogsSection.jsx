import React from 'react';
import {
  Clock,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  BookOpen
} from 'lucide-react';
import styles from './LatestBlogsSection.module.css';

// 3 Curated High-Impact Articles with Authentic Photography
const articles = [
  {
    id: 'cisco-sdwan-enterprise',
    category: 'Cisco SD-WAN',
    categoryColor: 'blue',
    title: 'Architecting Zero-Downtime Cisco SD-WAN Across Dual-ISP & MPLS Overlays',
    summary: 'A production blueprint of BFD template probes, color-binding fallbacks, and application-aware routing (AAR) policies for zero-packet-drop enterprise failover.',
    image: 'https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/06/10071301/imedita_71.jpg',
    readTime: '11 min read',
    date: '12 Nov 2026',
    author: {
      name: 'Saurabh Yadav',
      credential: 'Triple CCIE #46962',
      image: 'https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/12/10071401/Saurabh-Yadav-imedita.svg'
    },
    tags: ['SD-WAN vManage', 'BGP Overlay'],
    slug: 'https://www.imedita.com/blog/cisco-sd-wan-architecture-design/'
  },
  {
    id: 'palo-alto-pcnse',
    category: 'Next-Gen Firewall',
    categoryColor: 'orange',
    title: 'Palo Alto PCNSE Blueprint: Mastering App-ID & SSL Decryption',
    summary: 'Step-by-step enterprise certificate chain deployment, outbound SSL inspection, and zero-trust security perimeter policies configured on physical PA-400 appliances.',
    image: '/server-datacenter-engineer.jpg',
    readTime: '8 min read',
    date: '08 Nov 2026',
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
    category: 'Cloud Architecture',
    categoryColor: 'purple',
    title: 'AWS Transit Gateway & Direct Connect: Multi-Account BGP Peering',
    summary: 'Designing enterprise BGP peering between on-premise Cisco ASR routers and AWS Transit Gateways across multiple active Availability Zones.',
    image: 'https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/06/10071302/imedita_66.jpg',
    readTime: '10 min read',
    date: '20 Oct 2026',
    author: {
      name: 'Sudhanshu Bhat',
      credential: 'CCIE #41212 & AWS Arch',
      image: 'https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/12/10071359/Sudhanshu-Bhat-imedita.svg'
    },
    tags: ['AWS DirectConnect', 'TGW Routing'],
    slug: 'https://www.imedita.com/blog/aws-transit-gateway-vpc-peering/'
  }
];

export function LatestBlogsSection() {
  return (
    <section id="blog" className={styles.blogSection}>
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
            Latest Architecture Guides & <span className={styles.titleGradient}>Blueprints</span>
          </h2>

          <p className={styles.subtitle}>
            Battle-tested enterprise datacenter topologies, next-gen firewall configs, and Cisco certification playbooks authored by our CCIE faculty.
          </p>
        </div>

        {/* ================= 2. CLASSIC 3-CARD GRID ================= */}
        <div className={styles.cardsGrid}>
          {articles.map((article) => (
            <article key={article.id} className={styles.cardItem}>
              <a
                href={article.slug}
                target="_blank"
                rel="noreferrer"
                className={styles.cardLink}
              >
                {/* Image Thumbnail with Overlay Badges */}
                <div className={styles.thumbnailContainer}>
                  <img
                    src={article.image}
                    alt={article.title}
                    className={styles.thumbnailImg}
                    loading="lazy"
                  />
                  <div className={styles.thumbnailOverlay} />

                  {/* Category Pill */}
                  <span className={`${styles.categoryBadge} ${styles[`badge_${article.categoryColor}`]}`}>
                    {article.category}
                  </span>

                  {/* Read Time */}
                  <div className={styles.readTimeBadge}>
                    <Clock size={11} />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className={styles.cardBody}>
                  <div className={styles.dateMeta}>
                    <span className={styles.publishDate}>{article.date}</span>
                    <span className={styles.dotSeparator}>•</span>
                    <span className={styles.verifiedTag}>Verified CCIE Blueprint</span>
                  </div>

                  <h3 className={styles.cardTitle}>
                    <span>{article.title}</span>
                    <ArrowUpRight size={17} className={styles.titleArrow} />
                  </h3>

                  <p className={styles.cardSummary}>{article.summary}</p>

                  {/* Tags */}
                  <div className={styles.tagsRow}>
                    {article.tags.map((tag, tIdx) => (
                      <span key={tIdx} className={styles.tagChip}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Author Footer */}
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
                      <div>
                        <span className={styles.authorName}>{article.author.name}</span>
                        <span className={styles.authorCredential}>{article.author.credential}</span>
                      </div>
                    </div>

                    <div className={styles.readLink}>
                      <span>Read</span>
                      <ArrowRight size={13} className={styles.readArrow} />
                    </div>
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>

        {/* ================= 3. ELEGANT FOOTER ACTION ================= */}
        <div className={styles.footerActionRow}>
          <a
            href="https://www.imedita.com/blog/"
            target="_blank"
            rel="noreferrer"
            className={styles.exploreAllBtn}
          >
            <Sparkles size={15} />
            <span>Explore All 150+ Blueprints on I-Medita Blog</span>
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

export { LatestBlogsSection as DarkBlog, LatestBlogsSection as BlogSection, LatestBlogsSection as BlogVisualizer };
export default LatestBlogsSection;
