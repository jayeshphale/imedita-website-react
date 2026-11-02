import React, { useState } from 'react';
import { Terminal, ArrowRight, Clock, ShieldCheck, Cpu, Network } from 'lucide-react';
import styles from './BlogVisualizer.module.css';

const guidesData = [
  {
    id: "sd-wan",
    protocol: "CISCO-SDWAN-AAR",
    title: "Architecting High-Availability Cisco SD-WAN Across Dual-ISP & MPLS Overlays",
    author: "Saurabh Yadav (Triple CCIE #46962)",
    readTime: "11 min read",
    categoryIcon: Network,
    consoleTitle: "TOPOLOGY: MULTI-REGION-SDWAN-OVERLAY",
    summary: "Configuring BFD template probes, color-binding fallbacks, and application-aware routing (AAR) policies for zero-packet-drop VoIP failover.",
    codeSnippet: `vManage# config-t
policy
 app-route-policy SLA_VOIP_CRITICAL
  sla-class CRITICAL_VOICE latency 150 loss 1 jitter 10
  site-list PUNE_CAMPUS_BRANCHES
  action backup-sla-preferred-color mpls
 commit and-quit`
  },
  {
    id: "palo-alto",
    protocol: "PAN-OS-11-ZERO-TRUST",
    title: "Palo Alto Networks PCNSE: Deep-Dive SSL Forward Proxy & App-ID Decryption",
    author: "Surendra Singh (CCIE #43764)",
    readTime: "8 min read",
    categoryIcon: ShieldCheck,
    consoleTitle: "SECURITY-POLICY: ZERO-TRUST-PERIMETER",
    summary: "Step-by-step certificate chain generation, HSM integration, and inspecting enterprise outbound encrypted traffic without breaking client sessions.",
    codeSnippet: `admin@PA-400-LAB> set system setting ssl-decrypt
admin@PA-400-LAB> configure
# set rulebase security rules OUTBOUND-INSPECT action allow
# set rulebase default-security-rules threat-prevention strict-block
# commit`
  },
  {
    id: "cloud-transit",
    protocol: "AWS-TRANSIT-VPC",
    title: "AWS Transit Gateway & Direct Connect: Multi-Account Hybrid Connectivity",
    author: "Baldev Singh (Dual CCIE #35912)",
    readTime: "9 min read",
    categoryIcon: Cpu,
    consoleTitle: "CLOUD-FABRIC: TGW-ROUTING-TABLES",
    summary: "Designing enterprise BGP peering between on-prem Cisco ASR 1000s and AWS Transit Gateways across multiple active Availability Zones.",
    codeSnippet: `aws ec2 create-transit-gateway-route-table --transit-gateway-id tgw-0128a
aws ec2 enable-transit-gateway-route-table-propagation \\
  --transit-gateway-attachment-id tgw-attach-prod-vpc \\
  --transit-gateway-route-table-id tgw-rtb-core-prod`
  }
];

export function BlogVisualizer() {
  const [activeGuide, setActiveGuide] = useState(guidesData[0]);

  return (
    <section className={styles.sectionWrapper} id="blog" aria-label="Interactive Architecture Blueprints">
      <div className={styles.container}>
        
        {/* Header */}
        <div className={styles.headerBlock}>
          <div className={styles.eyebrow}>
            <Terminal size={14} />
            <span>Architecture Blueprints</span>
          </div>
          <h2 className={styles.heading}>Engineering Guides & Packet Walkthroughs</h2>
          <p className={styles.subtext}>
            Technical topology teardowns and production CLI configurations written directly by CCIE certified architects.
          </p>
        </div>

        {/* Split Visualizer Stage */}
        <div className={styles.splitGrid}>
          
          {/* Left Feed */}
          <div className={styles.feedList}>
            {guidesData.map((item) => {
              const Icon = item.categoryIcon;
              const isActive = activeGuide.id === item.id;
              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setActiveGuide(item)}
                  onClick={() => setActiveGuide(item)}
                  className={`${styles.guideItem} ${isActive ? styles.guideItemActive : ''}`}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setActiveGuide(item);
                    }
                  }}
                >
                  <div className={styles.guideTop}>
                    <span className={styles.protocolBadge}>{item.protocol}</span>
                    <span className={styles.readTime}>
                      <Clock size={12} />
                      {item.readTime}
                    </span>
                  </div>
                  <h3 className={styles.guideTitle}>{item.title}</h3>
                  <div className={styles.guideFooter}>
                    <Icon size={14} className={styles.iconAccent} />
                    <span className={styles.authorName}>{item.author}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Console Canvas */}
          <div className={styles.consoleCanvas}>
            <div className={styles.terminalBar}>
              <div className={styles.windowDots}>
                <span className={styles.dotRed}></span>
                <span className={styles.dotYellow}></span>
                <span className={styles.dotGreen}></span>
              </div>
              <span className={styles.consoleLabel}>{activeGuide.consoleTitle}</span>
            </div>

            <div className={styles.consoleBody}>
              <p className={styles.blueprintSummary}>{activeGuide.summary}</p>
              
              <div className={styles.codeBlock}>
                <pre><code>{activeGuide.codeSnippet}</code></pre>
              </div>

              <a 
                href="https://www.imedita.com/blog/" 
                target="_blank" 
                rel="noreferrer" 
                className={styles.openBlueprintBtn}
              >
                <span>Read Full Technical Blueprint</span>
                <ArrowRight size={15} />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export { BlogVisualizer as LatestBlogsSection, BlogVisualizer as BlogSection };
export default BlogVisualizer;

