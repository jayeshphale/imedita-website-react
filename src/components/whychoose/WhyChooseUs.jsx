import React from 'react';
import { 
  ShieldCheck, 
  Server, 
  Award, 
  Clock, 
  Briefcase, 
  Users, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import styles from './WhyChooseUs.module.css';
import { Card3DTilt } from '../three/Card3DTilt';
import { Floating3DCube } from '../three/Floating3DCube';

const advantages = [
  {
    id: "physical-labs",
    index: "01 / Labs",
    title: "24/7 Physical Hardware Labs",
    desc: "Direct remote and on-campus access to enterprise racks with real Cisco ISR routers, Catalyst 9300 switches, and Palo Alto appliances.",
    icon: Server,
    checks: ["Zero simulated packet delays", "Real topology cabling practice"]
  },
  {
    id: "ccie-mentors",
    index: "02 / Faculty",
    title: "Triple CCIE Working Architects",
    desc: "Mentorship directly from dual and triple CCIE certified professionals currently designing enterprise datacenters.",
    icon: Award,
    checks: ["Real enterprise case studies", "1-on-1 architecture design reviews"]
  },
  {
    id: "flexible-schedules",
    index: "03 / Schedule",
    title: "Weekend & Flexible Batches",
    desc: "Designed specifically for working engineers with dedicated weekend slots, lifetime lecture recordings, and backup class options.",
    icon: Clock,
    checks: ["Missed session catch-ups", "LMS access with lifetime validity"]
  },
  {
    id: "placement-support",
    index: "04 / Careers",
    title: "Dedicated Placement Cell",
    desc: "Complete career support from technical mock interviews and resume crafting to direct interviews with corporate hiring partners.",
    icon: Briefcase,
    checks: ["Direct corporate drive invites", "Technical HR drill preparation"]
  },
  {
    id: "official-accreditation",
    index: "05 / Exams",
    title: "Authorized Exam Preparation",
    desc: "Official curriculum alignment for Cisco, Palo Alto Networks, and AWS with genuine certification voucher support.",
    icon: ShieldCheck,
    checks: ["Official blueprint coverage", "Timed mock lab simulations"]
  },
  {
    id: "alumni-community",
    index: "06 / Network",
    title: "10,000+ Alumni Network",
    desc: "Join a vast network of network architects, cloud security engineers, and IT leaders deployed across Fortune 500 companies.",
    icon: Users,
    checks: ["Peer knowledge sharing", "Internal job referral pipeline"]
  }
];

const metrics = [
  {
    number: "10,000+",
    label: "Engineers Trained",
    detail: "Across India & 30+ countries worldwide",
    icon: Users
  },
  {
    number: "100%",
    label: "Placement Assistance",
    detail: "Dedicated corporate recruitment cell & drills",
    icon: Briefcase
  },
  {
    number: "24/7",
    label: "Lab Rack Availability",
    detail: "Multi-vendor physical hardware topologies",
    icon: Server
  },
  {
    number: "15+ Years",
    label: "Industry Leadership",
    detail: "Pioneers in CCIE & enterprise lab bootcamps",
    icon: Award
  }
];

export function WhyChooseUs() {
  return (
    <section className={styles.whySection} id="why-choose-us">
      <div className={styles.sectionContainer}>
        
        {/* Modern SaaS Header */}
        <div className={`${styles.headerBlock} scroll-header`}>
          <div className={styles.eyebrowBadge}>
            <Sparkles size={14} />
            <span>The I-Medita Edge</span>
          </div>
          <h2 className={styles.sectionHeading}>
            Why Enterprise Engineers <span className={styles.gradientAccent}>Choose I-Medita</span>
          </h2>
          <p className={styles.sectionSubtext}>
            We combine production datacenter hardware with mentorship from certified CCIE architects to deliver career-defining technical mastery.
          </p>
        </div>

        {/* 6-Card Responsive Advantage Grid */}
        <div className={`${styles.featuresGrid} scroll-stagger-cards perspective-container`}>
          {advantages.map((item) => {
            const IconComponent = item.icon;
            return (
              <Card3DTilt key={item.id} className={styles.featureCard} maxTilt={7} elevation={16}>
                <div>
                  <div className={styles.cardTopRow}>
                    <div className={`${styles.iconBox} tilt-pop-md`}>
                      <IconComponent size={24} strokeWidth={2} />
                    </div>
                    <span className={`${styles.indexPill} tilt-pop-xs`}>{item.index}</span>
                  </div>

                  <h3 className={`${styles.cardTitle} tilt-pop-sm`}>{item.title}</h3>
                  <p className={styles.cardDesc}>{item.desc}</p>
                </div>

                <ul className={styles.cardChecklist}>
                  {item.checks.map((check, idx) => (
                    <li key={idx} className={styles.checkItem}>
                      <div className={`${styles.checkBadge} tilt-pop-xs`}>
                        <CheckCircle2 size={13} color="#059669" strokeWidth={2.5} />
                      </div>
                      <span>{check}</span>
                    </li>
                  ))}
                </ul>
              </Card3DTilt>
            );
          })}
        </div>

        {/* High-Impact Milestone Metrics Strip */}
        <div className={`${styles.statsStrip} scroll-reveal-scale perspective-container`}>
          {metrics.map((stat, idx) => {
            const StatIcon = stat.icon;
            return (
              <Card3DTilt key={idx} className={styles.statItem} maxTilt={6} elevation={14}>
                <div className={`${styles.statIconWrap} tilt-pop-md`}>
                  <StatIcon size={20} strokeWidth={2} />
                </div>
                <div className={`${styles.statNumber} tilt-pop-sm`}>{stat.number}</div>
                <div className={styles.statLabel}>{stat.label}</div>
                <div className={styles.statDetail}>{stat.detail}</div>
              </Card3DTilt>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export { WhyChooseUs as WhyChooseIMedita };
export default WhyChooseUs;
