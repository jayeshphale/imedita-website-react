import React from 'react';
import { Terminal, Award, Clock, ArrowUpRight, Cpu } from 'lucide-react';
import styles from './DarkBlog.module.css';

const blueprintArticles = [
  {
    id: "cisco-sdwan-2026",
    protocol: "CISCO SD-WAN",
    title: "Architecting Cisco SD-WAN Across Dual-ISP & MPLS Overlays",
    topologyTitle: "TOPOLOGY: MULTI-REGION-OVERLAY-V4",
    codeLines: [
      "[ WAN-EDGE-01 ] -- IPSec Tun 1 -- [ vSmart-Core-A ]",
      "[ WAN-EDGE-01 ] -- IPSec Tun 2 -- [ vSmart-Core-B ]",
      "   └─ BGP AS 65002 - Overlay Routes Active"
    ],
    summary: "Configuring redundant IPSec overlays & application-aware routing (AAR) policies in dual-homed WANs.",
    author: {
      name: "Saurabh Yadav",
      credential: "Triple CCIE #85124",
      image: "https://api.dicebear.com/7.x/initials/svg?seed=Saurabh&backgroundColor=0066FF&textColor=ffffff"
    },
    date: "11 min read",
    slug: "https://www.imedita.com/blog/cisco-sd-wan-architecture-design/"
  },
  {
    id: "palo-alto-pcnse",
    protocol: "PCNSE FIREWALL",
    title: "Palo Alto PCNSE Blueprint: Mastering App-ID & SSL Decryption",
    topologyTitle: "SSL-DECRYPT: ZERO-TRUST-POLICIES",
    codeLines: [
      "PA-400-LAB# set rulebase ssl-decrypt Decrypt-Outbound",
      "   └─ Trust to Untrust, Decrypt type: ssl-forward-proxy",
      "PA-400-LAB# test ssl-decrypt-inspect inbound"
    ],
    summary: "A practical configuration guide for outbound decryption policies & App-ID validation without connection drops.",
    author: {
      name: "Surendra Singh",
      credential: "Triple CCIE #52981",
      image: "https://api.dicebear.com/7.x/initials/svg?seed=Surendra&backgroundColor=0284C7&textColor=ffffff"
    },
    date: "8 min read",
    slug: "https://www.imedita.com/blog/palo-alto-pcnse-preparation-guide/"
  },
  {
    id: "aws-transit-peering",
    protocol: "AWS TRANSIT",
    title: "AWS Transit Gateway & Multi-Region VPC Peering Architectures",
    topologyTitle: "CLOUD-PEERING: TGW-PROPAGATE-ROUTES",
    codeLines: [
      "AWS::EC2::TransitGatewayRouteTable - Route Tables Created",
      "   └─ Propagate TGWprod_attach -> SiteToSite VPN",
      "AWS::EC2::VPCPeeringConnection - AWS Active Region"
    ],
    summary: "Designing enterprise BGP peering between on-prem Cisco ASRs and AWS Transit Gateways across multiple active regions.",
    author: {
      name: "Baldev Singh",
      credential: "Triple CCIE #58210",
      image: "https://api.dicebear.com/7.x/initials/svg?seed=Baldev&backgroundColor=059669&textColor=ffffff"
    },
    date: "9 min read",
    slug: "https://www.imedita.com/blog/aws-transit-gateway-vpc-peering/"
  }
];

export function DarkBlog() {
  return (
    <section className={styles.darkBlogSection} id="blog" aria-label="Architecture Blueprints & Engineering Guides">
      {/* Visual node grid effects overlay in background */}
      <div className={styles.ambientGrid} aria-hidden="true"></div>

      <div className={styles.sectionContainer}>
        
        {/* Section Header */}
        <div className={`${styles.headerBlock} scroll-header`}>
          <div className={styles.eyebrowBadge}>
            <Terminal size={14} />
            <span>Architecture Blueprints</span>
          </div>
          <h2 className={styles.sectionHeading}>
            Engineering Guides & Packet Walkthroughs
          </h2>
          <p className={styles.sectionSubtext}>
            Deep dive into network protocols, traffic inspection, and secure routing architectures authored by CCIE instructors.
          </p>
        </div>

        {/* Technical 3-Column Symmetrical Grid */}
        <div className={`${styles.cardsGrid} scroll-stagger-cards`}>
          {blueprintArticles.map((article) => (
            <a 
              key={article.id}
              href={article.slug}
              target="_blank"
              rel="noreferrer"
              className={styles.blueprintCard}
            >
              <div>
                <div className={styles.cardTopRow}>
                  <span className={styles.protocolPill}>{article.protocol}</span>
                  <Cpu size={14} className={styles.pulseIcon} />
                </div>

                <h3 className={styles.cardTitle}>{article.title}</h3>

                {/* Wireframe Dynamic Simulation Module */}
                <div className={styles.canvasWrapper}>
                  <div className={styles.canvasBlueprint}>
                    <div className={styles.wireframeData}>
                      <span>{article.topologyTitle}</span>
                      <Award size={10} color="#22d3ee" />
                    </div>
                    
                    <div className={styles.topologyFlow}>
                      {article.codeLines.map((line, idx) => (
                        <div key={idx} className={styles.flowItem}>
                          <span>{line}</span>
                        </div>
                      ))}
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', color: '#475569', fontSize: '0.55rem', marginTop: '0.5rem' }}>
                      <span>SYS_ON_LIN // RX-TX-FLOW</span>
                      <span>SECURE_ACT</span>
                    </div>
                  </div>
                </div>

                <p style={{ fontSize: '0.825rem', color: '#94a3b8', lineHeight: '1.55', margin: '0 0 1.5rem' }}>
                  {article.summary}
                </p>
              </div>

              {/* Verified Double Author Strip */}
              <div className={styles.authorStrip}>
                <div className={styles.authorBox}>
                  <img 
                    src={article.author.image} 
                    alt={article.author.name} 
                    className={styles.avatar} 
                    loading="lazy"
                  />
                  <div className={styles.authorMeta}>
                    <span className={styles.authorName}>{article.author.name}</span>
                    <span className={styles.authorRole}>{article.author.credential}</span>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <Clock size={12} color="#64748b" />
                  <span className={styles.datePill}>{article.date}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* High-Contrast Primary Call to Action */}
        <div className={styles.actionFooter}>
          <a 
            href="https://www.imedita.com/blog/" 
            target="_blank" 
            rel="noreferrer" 
            className={styles.viewAllBtn}
          >
            <span>View All Architecture Blueprints</span>
            <ArrowUpRight size={15} />
          </a>
        </div>

      </div>
    </section>
  );
}

export { DarkBlog as LatestBlogsSection, DarkBlog as BlogSection, DarkBlog as BlogVisualizer };
export default DarkBlog;

