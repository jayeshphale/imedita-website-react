import React, { useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import {
  Award,
  Clock,
  Calendar,
  Server,
  Shield,
  Network,
  Cpu,
  Layers,
  Lock,
  Terminal,
  Download,
  ArrowRight,
  ChevronDown,
  Star,
  Users,
  BookOpen,
  CheckCircle2,
  FileText,
  Sparkles,
  PhoneCall,
  Briefcase,
  HelpCircle,
  ExternalLink,
  Laptop,
  User,
  Mail,
  ShieldCheck,
  Check,
  Flame,
  Zap
} from 'lucide-react';
import { LogoMarquee } from '../components/marquee/LogoMarquee';
import styles from './CCNACoursePage.module.css';

// 6 Core CCNA Domains
const ccnaDomains = [
  {
    num: '01',
    weight: '20% of Exam',
    title: 'Network Fundamentals',
    points: [
      'Routers, switches, next-generation firewalls & wireless access points',
      'TCP/IP & OSI 7-Layer architectural models',
      'IPv4 & IPv6 addressing schemes and VLSM subnetting calculation',
      'Cisco IOS command line interface (CLI) navigation & configuration'
    ]
  },
  {
    num: '02',
    weight: '20% of Exam',
    title: 'Network Access & Switching',
    points: [
      'VLAN segmentation, access ports & 802.1Q trunking configuration',
      'Inter-VLAN routing (Router-on-a-Stick & Layer 3 SVIs)',
      'Spanning Tree Protocol (STP, Rapid PVST+ & PortFast)',
      'EtherChannel aggregation (LACP & PAgP link bundling)'
    ]
  },
  {
    num: '03',
    weight: '25% of Exam',
    title: 'IP Connectivity & Routing',
    points: [
      'Routing table components, longest prefix match & administrative distance',
      'IPv4 & IPv6 static routing and default floating routes',
      'Single-Area & Multi-Area Open Shortest Path First (OSPFv2)',
      'First Hop Redundancy Protocols (HSRP concepts & gateway election)'
    ]
  },
  {
    num: '04',
    weight: '10% of Exam',
    title: 'IP Services & Operations',
    points: [
      'Dynamic NAT & Port Address Translation (PAT) deployment',
      'DHCP Server, Client, and DHCP Relay Agent configurations',
      'Network Time Protocol (NTP) & Domain Name System (DNS) operations',
      'SNMPv2/v3, Syslog logging levels, and SSHv2 remote management'
    ]
  },
  {
    num: '05',
    weight: '15% of Exam',
    title: 'Security Fundamentals',
    points: [
      'Standard & Extended IPv4 Access Control Lists (ACLs)',
      'Layer 2 security: Port Security, DHCP Snooping & Dynamic ARP Inspection',
      'Authentication, Authorization, and Accounting (AAA) with TACACS+/RADIUS',
      'Site-to-Site IPSec VPNs & WPA2/WPA3 enterprise wireless security'
    ]
  },
  {
    num: '06',
    weight: '10% of Exam',
    title: 'Automation & Programmability',
    points: [
      'Software-Defined Networking (SDN) & Cisco DNA Center controller architecture',
      'REST APIs: CRUD operations, HTTP status codes, JSON & XML data encoding',
      'Configuration management tools: Ansible, Puppet & Chef overviews',
      'Python scripting basics for network device automation'
    ]
  }
];

// Detailed Syllabus Modules
const syllabusModules = [
  {
    id: 'mod-1',
    tag: 'Module 1',
    title: 'Network Fundamentals & Architecture',
    topics: [
      'Role and function of network components (Routers, L2/L3 Switches, Firewalls, WLCs)',
      'Characteristics of network topology architectures (2-Tier, 3-Tier, Spine-Leaf, WAN, Cloud)',
      'Physical cabling types: Single-mode fiber, Multimode fiber, Copper UTP & PoE specs',
      'IPv4 Subnetting mastery: Classless Inter-Domain Routing (CIDR) & VLSM drills',
      'IPv6 Addressing: Global Unicast, Unique Local, Link-Local & EUI-64 generation'
    ]
  },
  {
    id: 'mod-2',
    tag: 'Module 2',
    title: 'Network Access & Catalyst Switching',
    topics: [
      'Configuring and verifying VLANs (Normal and Extended range) across multiple switches',
      'Configuring 802.1Q trunk ports, native VLAN security, and DTP negotiation',
      'Configuring Inter-VLAN routing using sub-interfaces and Switch Virtual Interfaces (SVI)',
      'Spanning Tree Protocol (IEEE 802.1D STP, 802.1w Rapid-PVST+, Root Bridge election)',
      'Configuring Layer 2 and Layer 3 EtherChannel using LACP (802.3ad)'
    ]
  },
  {
    id: 'mod-3',
    tag: 'Module 3',
    title: 'IP Connectivity & Dynamic Routing Protocols',
    topics: [
      'Interpreting Cisco IOS routing tables: Prefix length, Metric, Administrative Distance',
      'Configuring IPv4 and IPv6 Static Routes, Default Routes, and Floating Static Routes',
      'Configuring and verifying Single-Area and Multi-Area OSPFv2 (Neighbor states, DR/BDR election)',
      'OSPF Point-to-Point and Broadcast network types, Router ID, Passive Interfaces',
      'First Hop Redundancy Protocol (FHRP) concepts: HSRP active/standby router mechanics'
    ]
  },
  {
    id: 'mod-4',
    tag: 'Module 4',
    title: 'IP Services, NAT & Infrastructure Management',
    topics: [
      'Configuring Inside Source NAT, Static NAT, and Dynamic PAT (Overload)',
      'Configuring Cisco IOS as DHCP Server, Client, and configuring IP Helper-Address relay',
      'Configuring NTP in client/server mode and verifying clock synchronization',
      'Configuring Syslog facilities, severity levels, and remote logging servers',
      'Configuring SSHv2 with RSA key-pairs, local user accounts, and VTY line security'
    ]
  },
  {
    id: 'mod-5',
    tag: 'Module 5',
    title: 'Enterprise Security Fundamentals',
    topics: [
      'Configuring Standard and Extended IPv4 Access Control Lists (ACLs) to filter traffic',
      'Layer 2 mitigation: Port Security (Static, Dynamic, Sticky MAC) and violation modes',
      'Configuring DHCP Snooping, Trusted Ports, and Dynamic ARP Inspection (DAI)',
      'Configuring Device Access Control with local AAA and TACACS+/RADIUS server integration',
      'Site-to-Site IPSec VPN concepts (IKE Phase 1 and Phase 2 tunnels, ESP encryption)'
    ]
  },
  {
    id: 'mod-6',
    tag: 'Module 6',
    title: 'Network Automation, SDN & Python Programmability',
    topics: [
      'Traditional campus networks vs. Controller-based Software-Defined Networks (Cisco DNA Center)',
      'Underlay, Overlay, and Fabric concepts in Cisco SD-Access and Cisco SD-WAN',
      'Understanding REST APIs, URI structures, HTTP request verbs (GET, POST, PUT, DELETE)',
      'Data encoding formats: Interpreting and writing JSON and XML payloads',
      'Introduction to Python network automation scripts (Netmiko & Paramiko libraries)'
    ]
  }
];

// Physical Lab Devices Used
const labDevices = [
  {
    category: 'Enterprise Routers',
    name: 'Cisco ISR 4331 & 2911',
    specs: 'Gigabit WAN interfaces, multi-service voice/data modules, hardware encryption acceleration for IPSec VPNs.',
    status: '100% Dedicated Hardware'
  },
  {
    category: 'Catalyst Switches',
    name: 'Cisco Catalyst 9300 & 2960-X',
    specs: 'Layer 2/Layer 3 full enterprise switching, 802.3at PoE+, StackWise-480, and hardware NetFlow telemetry.',
    status: 'Physical Racks in Pune'
  },
  {
    category: 'Security Appliances',
    name: 'Cisco ASA 5506-X Firewalls',
    specs: 'Next-Gen Firewall with FirePOWER services, stateful packet inspection, and remote-access VPN pods.',
    status: 'Hands-on CLI Labs'
  },
  {
    category: 'Wireless Controller',
    name: 'Cisco 2504 WLC & APs',
    specs: 'Centralized wireless LAN controller with Cisco Aironet 1850 Wave 2 dual-band 802.11ac Access Points.',
    status: 'Live Topology'
  }
];

// Upcoming Live Batches Data
const upcomingBatches = [
  {
    id: 'b-1',
    startDate: '14th Nov 2026',
    type: 'Weekend Batch',
    mode: 'Classroom & Online Live',
    timing: '10:00 AM – 02:00 PM (Sat & Sun)',
    duration: '8 Weeks',
    seats: '4 Seats Left'
  },
  {
    id: 'b-2',
    startDate: '18th Nov 2026',
    type: 'Weekday Regular',
    mode: 'Online Live Interactive',
    timing: '08:00 PM – 10:00 PM (Mon to Thu)',
    duration: '6 Weeks',
    seats: 'Filling Fast'
  },
  {
    id: 'b-3',
    startDate: '28th Nov 2026',
    type: 'Weekend Batch',
    mode: 'Classroom (Pune Campus)',
    timing: '02:30 PM – 06:30 PM (Sat & Sun)',
    duration: '8 Weeks',
    seats: 'Admissions Open'
  }
];

// FAQs Data
const faqsData = [
  {
    q: 'Do I need any prior networking or coding experience to enroll in CCNA?',
    a: 'No prior networking or coding experience is required! The CCNA 200-301 training starts from absolute networking basics (OSI model, IP addressing, and binary subnetting) and progressively builds up to advanced routing, firewall security, and Python automation. Basic computer operation familiarity is all you need.'
  },
  {
    q: 'Will I practice on real Cisco routers and switches or simulators?',
    a: 'At I-Medita, you will practice on 100% REAL physical Cisco hardware devices installed in our Pune datacenter labs (Catalyst 9300/2960 switches and ISR 4331 routers). We provide 24/7 remote rack access with real CLI terminals, as well as hands-on physical cabling and console sessions for classroom students.'
  },
  {
    q: 'What is the passing score and format for the Cisco 200-301 CCNA exam?',
    a: 'The Cisco 200-301 exam contains 100 to 120 questions to be solved within 120 minutes. Questions include multiple-choice (single and multiple select), drag-and-drop, and interactive configuration simlets. The passing score is approximately 825 out of 1000.'
  },
  {
    q: 'Does I-Medita provide Cisco global exam voucher assistance?',
    a: 'Yes! As an authorized certification partner, I-Medita provides students with up to 45% discounted official Cisco exam vouchers, along with comprehensive mock question banks, full-length practice tests, and exam preparation bootcamps with a 100% first-attempt passing track record.'
  },
  {
    q: 'What placement assistance will I receive after completing CCNA?',
    a: 'Our dedicated placement cell conducts weekly technical mock interviews, resume refinement sessions, and direct interview scheduling with over 150+ corporate hiring partners (including Orange Business, Airtel, Wipro, Dimension Data, and Infosys). Freshers typically secure starting packages between ₹4.2 LPA and ₹6.5 LPA.'
  },
  {
    q: 'What happens if I miss a live session or need to revise?',
    a: 'All live classroom and online sessions are recorded in high-definition and uploaded to your lifetime LMS portal within 2 hours. You can revisit recordings, lab workbooks, configuration configs, and command cheat sheets anytime from your laptop or mobile app.'
  }
];

export function CCNACoursePage() {
  const context = useOutletContext() || {};
  const handleOpenDemo = context.handleOpenDemo || (() => {});
  const [openModule, setOpenModule] = useState('mod-1');
  const [openFaq, setOpenFaq] = useState(0);

  // Hero Lead Form State
  const [heroForm, setHeroForm] = useState({ name: '', email: '', phone: '' });
  const [heroSubmitted, setHeroSubmitted] = useState(false);
  const [heroLoading, setHeroLoading] = useState(false);

  const handleHeroSubmit = (e) => {
    e.preventDefault();
    if (!heroForm.name.trim() || !heroForm.phone.trim()) return;
    setHeroLoading(true);
    setTimeout(() => {
      setHeroLoading(false);
      setHeroSubmitted(true);
    }, 600);
  };

  const toggleModule = (id) => {
    setOpenModule(openModule === id ? null : id);
  };

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className={styles.coursePageRoot}>
      {/* =========================================================================
          1. HERO HEADER WITH BREADCRUMBS & FLOATING LEAD CARD
          ========================================================================= */}
      <section className={styles.courseHero}>
        {/* Ambient Glow Lights */}
        <div className={styles.glowOrbBlue} aria-hidden="true" />
        <div className={styles.glowOrbOrange} aria-hidden="true" />
        <div className={styles.heroGridOverlay} aria-hidden="true" />

        <div className={styles.container}>
          {/* Breadcrumbs */}
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb navigation">
            <Link to="/" className={styles.breadcrumbLink}>Home</Link>
            <span className={styles.breadcrumbSep}>/</span>
            <Link to="/#courses" className={styles.breadcrumbLink}>Courses</Link>
            <span className={styles.breadcrumbSep}>/</span>
            <span className={styles.breadcrumbLink}>Cisco</span>
            <span className={styles.breadcrumbSep}>/</span>
            <span className={styles.breadcrumbCurrent}>CCNA 200-301 Certification</span>
          </nav>

          <div className={styles.heroSplit}>
            {/* Left Column: Course Intro */}
            <div className={styles.heroLeft}>
              {/* Rating Badge with Live Indicator */}
              <div className={styles.ratingBadge}>
                <div className={styles.liveStatusDotWrap}>
                  <span className={styles.livePulseRing} />
                  <span className={styles.liveStatusDot} />
                </div>
                <div className={styles.starRow}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} className={styles.ratingStar} fill="#F59E0B" color="#F59E0B" />
                  ))}
                </div>
                <span className={styles.ratingBadgeText}>
                  <strong>4.9/5</strong> by <strong>11,210+</strong> students
                </span>
                <span className={styles.verifiedPartnerBadge}>
                  <CheckCircle2 size={12} className={styles.verifiedIcon} />
                  <span>Authorized Labs</span>
                </span>
              </div>

              {/* Main Headline with doodle underline */}
              <h1 className={styles.heroHeading}>
                Cisco{' '}
                <span className={styles.highlightWrapper}>
                  <span className={styles.highlightOrange}>CCNA Training</span>
                  <svg
                    className={styles.doodleUnderline}
                    viewBox="0 0 280 18"
                    fill="none"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M 3 8 C 70 3, 175 3, 277 8"
                      stroke="#ffffff"
                      strokeWidth="3.2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M 12 14 C 85 11, 185 11, 266 14"
                      stroke="#ffffff"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      opacity="0.9"
                    />
                  </svg>
                </span>
                <br />
                <span className={styles.heroSubHeadingWhite}>200-301 CCNA</span>
              </h1>

              {/* Paragraph Subtext with Keyword Highlighting */}
              <p className={styles.heroSubtext}>
                Master enterprise networking with hands-on <strong className={styles.textHighlight}>Cisco CCNA 200-301</strong> training. 
                Learn routing, switching, IPv4/IPv6, security, and automation through <strong className={styles.textHighlight}>real physical Cisco hardware labs</strong> while 
                preparing under <strong className={styles.textHighlight}>Triple CCIE Mentors</strong> with 100% written placement assistance.
              </p>

              {/* 2x2 Feature Highlights as Glass Micro-Cards */}
              <div className={styles.heroStatsCards}>
                <div className={styles.statCard}>
                  <div className={styles.statCardIcon}>
                    <Users size={18} />
                  </div>
                  <div className={styles.statCardContent}>
                    <span className={styles.statCardValue}>11,210+</span>
                    <span className={styles.statCardLabel}>Students Trained</span>
                  </div>
                </div>

                <div className={styles.statCard}>
                  <div className={styles.statCardIcon}>
                    <Clock size={18} />
                  </div>
                  <div className={styles.statCardContent}>
                    <span className={styles.statCardValue}>24×7 Access</span>
                    <span className={styles.statCardLabel}>Real Hardware Labs</span>
                  </div>
                </div>

                <div className={styles.statCard}>
                  <div className={styles.statCardIcon}>
                    <Briefcase size={18} />
                  </div>
                  <div className={styles.statCardContent}>
                    <span className={styles.statCardValue}>100% Written</span>
                    <span className={styles.statCardLabel}>Placement Support</span>
                  </div>
                </div>

                <div className={styles.statCard}>
                  <div className={styles.statCardIcon}>
                    <Award size={18} />
                  </div>
                  <div className={styles.statCardContent}>
                    <span className={styles.statCardValue}>3× CCIE</span>
                    <span className={styles.statCardLabel}>Certified Trainers</span>
                  </div>
                </div>
              </div>

              {/* Urgency Strip with Radar Pulse */}
              <div className={styles.urgencyStrip}>
                <div className={styles.urgencyRadar}>
                  <span className={styles.urgencyRadarPing} />
                  <span className={styles.urgencyRadarDot} />
                </div>
                <span className={styles.urgencyText}>
                  <strong className={styles.urgencyStrong}>Upcoming Batch Filling Fast</strong> • Free Demo Sessions Available • Limited Seats
                </span>
              </div>
            </div>

            {/* Right Column: Floating Lead Capture Form Card */}
            <div className={styles.heroRight}>
              <div className={styles.leadCard}>
                <div className={styles.leadCardTopGlow} />

                {heroSubmitted ? (
                  <div className={styles.formSuccessState}>
                    <div className={styles.successIconCircle}>
                      <Check size={28} />
                    </div>
                    <h3 className={styles.successTitle}>Demo Session Reserved!</h3>
                    <p className={styles.successMsg}>
                      Thank you, <strong>{heroForm.name}</strong>. Our senior CCIE mentor will reach out to you on <strong>+91 {heroForm.phone}</strong> shortly with your lab credentials and batch schedule.
                    </p>
                    <button
                      type="button"
                      className={styles.resetBtn}
                      onClick={() => {
                        setHeroSubmitted(false);
                        setHeroForm({ name: '', email: '', phone: '' });
                      }}
                    >
                      Book Another Demo
                    </button>
                  </div>
                ) : (
                  <>
                    <div className={styles.leadPill}>
                      <Flame size={13} className={styles.leadPillFlame} />
                      <span>FREE DEMO - LIMITED SEATS</span>
                    </div>

                    <h2 className={styles.leadTitle}>Talk to a Training Expert Today</h2>
                    <p className={styles.leadSubtitle}>Get a personalised roadmap – lab walkthrough.</p>

                    <form className={styles.leadForm} onSubmit={handleHeroSubmit}>
                      <div className={styles.formGroup}>
                        <label htmlFor="hero-name" className={styles.formLabel}>Full Name</label>
                        <div className={styles.inputWrapper}>
                          <User size={16} className={styles.inputIcon} aria-hidden="true" />
                          <input
                            id="hero-name"
                            type="text"
                            name="name"
                            autoComplete="name"
                            required
                            className={styles.formInput}
                            placeholder="e.g. Rahul Sharma"
                            value={heroForm.name}
                            onChange={(e) => setHeroForm({ ...heroForm, name: e.target.value })}
                          />
                        </div>
                      </div>

                      <div className={styles.formGroup}>
                        <label htmlFor="hero-email" className={styles.formLabel}>Email Address</label>
                        <div className={styles.inputWrapper}>
                          <Mail size={16} className={styles.inputIcon} aria-hidden="true" />
                          <input
                            id="hero-email"
                            type="email"
                            name="email"
                            autoComplete="email"
                            required
                            className={styles.formInput}
                            placeholder="you@email.com"
                            value={heroForm.email}
                            onChange={(e) => setHeroForm({ ...heroForm, email: e.target.value })}
                          />
                        </div>
                      </div>

                      <div className={styles.formGroup}>
                        <label htmlFor="hero-phone" className={styles.formLabel}>Phone Number</label>
                        <div className={styles.phoneInputWrapper}>
                          <div className={styles.countryCodeBadge}>
                            <svg width="18" height="13" viewBox="0 0 20 14" fill="none" className={styles.flagSvg} aria-hidden="true">
                              <rect width="20" height="4.66" fill="#FF9933" rx="1" />
                              <rect y="4.66" width="20" height="4.66" fill="#FFFFFF" />
                              <rect y="9.33" width="20" height="4.67" fill="#138808" rx="1" />
                              <circle cx="10" cy="7" r="1.8" stroke="#000080" strokeWidth="0.6" fill="none" />
                              <circle cx="10" cy="7" r="0.4" fill="#000080" />
                            </svg>
                            <span className={styles.countryCode}>+91</span>
                            <div className={styles.codeDivider} />
                          </div>
                          <input
                            id="hero-phone"
                            type="tel"
                            name="tel"
                            autoComplete="tel"
                            inputMode="numeric"
                            required
                            className={styles.phoneInput}
                            placeholder="9876543210"
                            pattern="[0-9]{10}"
                            maxLength={10}
                            value={heroForm.phone}
                            onChange={(e) => setHeroForm({ ...heroForm, phone: e.target.value.replace(/\D/g, '').slice(0, 10) })}
                          />
                        </div>
                      </div>

                      <button type="submit" className={styles.heroSubmitBtn} disabled={heroLoading}>
                        <span className={styles.btnShimmer} />
                        <span className={styles.btnContent}>
                          <span>{heroLoading ? 'Securing Seat...' : 'Book Free Demo'}</span>
                          <ArrowRight size={17} className={styles.btnArrow} />
                        </span>
                      </button>

                      <div className={styles.formTrustRow}>
                        <div className={styles.formTrustItem}>
                          <ShieldCheck size={14} className={styles.trustShieldIcon} />
                          <span>No spam · Only career guidance</span>
                        </div>
                        <div className={styles.formTrustDot}>•</div>
                        <div className={styles.formTrustItem}>
                          <CheckCircle2 size={13} className={styles.trustCheckGreen} />
                          <span>Instant Pass</span>
                        </div>
                      </div>

                      {/* Mini Alumni Social Proof */}
                      <div className={styles.socialProofMini}>
                        <div className={styles.avatarMiniGroup}>
                          <span className={styles.avatarMini} style={{ background: 'linear-gradient(135deg, #0284c7, #0369a1)' }}>RS</span>
                          <span className={styles.avatarMini} style={{ background: 'linear-gradient(135deg, #16a34a, #15803d)' }}>AK</span>
                          <span className={styles.avatarMini} style={{ background: 'linear-gradient(135deg, #d97706, #b45309)' }}>PD</span>
                          <span className={styles.avatarMini} style={{ background: 'linear-gradient(135deg, #9333ea, #7e22ce)' }}>VJ</span>
                        </div>
                        <span className={styles.socialProofMiniText}>
                          <strong>48+ students</strong> booked demo this week
                        </span>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. ENTERPRISE RECOGNITION (GLOBAL CLIENTS LOGO MARQUEE)
          ========================================================================= */}
      <LogoMarquee />

      {/* =========================================================================
          3. KEY METRICS STRIP
          ========================================================================= */}
      <section className={styles.metricsStripSection}>
        <div className={styles.container}>
          <div className={styles.metricsGrid}>
            <div className={styles.metricBox}>
              <div className={styles.metricIconWrap}>
                <Users size={22} />
              </div>
              <div>
                <div className={styles.metricValue}>11,210+</div>
                <div className={styles.metricLabel}>Alumni Placed Globally</div>
              </div>
            </div>

            <div className={styles.metricBox}>
              <div className={styles.metricIconWrap}>
                <Server size={22} />
              </div>
              <div>
                <div className={styles.metricValue}>80+</div>
                <div className={styles.metricLabel}>Real Cisco Device Labs</div>
              </div>
            </div>

            <div className={styles.metricBox}>
              <div className={styles.metricIconWrap}>
                <Award size={22} />
              </div>
              <div>
                <div className={styles.metricValue}>3x CCIE</div>
                <div className={styles.metricLabel}>Certified Master Mentors</div>
              </div>
            </div>

            <div className={styles.metricBox}>
              <div className={styles.metricIconWrap}>
                <Briefcase size={22} />
              </div>
              <div>
                <div className={styles.metricValue}>100%</div>
                <div className={styles.metricLabel}>Written Placement Assurance</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. WHY CCNA AT I-MEDITA (ADVANTAGES)
          ========================================================================= */}
      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <div className={styles.sectionEyebrow}>
              <Sparkles size={13} />
              <span>Industry Leadership</span>
            </div>
            <h2 className={styles.sectionTitle}>Why Choose I-Medita For Cisco CCNA?</h2>
            <p className={styles.sectionSubtext}>
              Ranked among India's top Cisco authorized academies with unmatched physical lab infrastructure 
              and corporate training rigor.
            </p>
          </div>

          <div className={styles.advantagesGrid}>
            <div className={styles.advantageCard}>
              <div className={styles.advantageIconWrap}>
                <Server size={24} />
              </div>
              <h3 className={styles.advantageTitle}>100% Real Hardware Labs</h3>
              <p className={styles.advantageDesc}>
                Configure actual Cisco Catalyst 9300/2960 switches, ISR 4331 routers, and ASA 5506-X firewalls. 
                Zero simulators or Packet Tracer limitations.
              </p>
            </div>

            <div className={styles.advantageCard}>
              <div className={styles.advantageIconWrap}>
                <Award size={24} />
              </div>
              <h3 className={styles.advantageTitle}>Triple CCIE Certified Faculty</h3>
              <p className={styles.advantageDesc}>
                Learn directly from Saurabh Yadav (Triple CCIE #46962) and seasoned datacenter architects with 
                15+ years of live enterprise deployment experience.
              </p>
            </div>

            <div className={styles.advantageCard}>
              <div className={styles.advantageIconWrap}>
                <Clock size={24} />
              </div>
              <h3 className={styles.advantageTitle}>24/7 Remote Rack Access</h3>
              <p className={styles.advantageDesc}>
                Practice on our cloud-connected datacenter racks anytime from home. Each student gets dedicated pod 
                CLI access with zero queuing or lag.
              </p>
            </div>

            <div className={styles.advantageCard}>
              <div className={styles.advantageIconWrap}>
                <Briefcase size={24} />
              </div>
              <h3 className={styles.advantageTitle}>Dedicated Placement Cell</h3>
              <p className={styles.advantageDesc}>
                Resume building, technical mock interview rounds, and direct placement drives with Fortune 500 tech 
                giants like Orange Business, Airtel, and Wipro.
              </p>
            </div>

            <div className={styles.advantageCard}>
              <div className={styles.advantageIconWrap}>
                <Shield size={24} />
              </div>
              <h3 className={styles.advantageTitle}>Global Exam Assurance</h3>
              <p className={styles.advantageDesc}>
                Comprehensive Cisco 200-301 mock tests, performance simlets, and official discounted exam vouchers 
                yielding an authentic 100% passing record.
              </p>
            </div>

            <div className={styles.advantageCard}>
              <div className={styles.advantageIconWrap}>
                <BookOpen size={24} />
              </div>
              <h3 className={styles.advantageTitle}>Lifetime LMS &amp; Video Library</h3>
              <p className={styles.advantageDesc}>
                Never lose access to knowledge. Enjoy lifetime HD session recordings, topology diagrams, command 
                syntaxes, and step-by-step configuration guides.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. WHAT YOU WILL LEARN (6 CORE DOMAINS)
          ========================================================================= */}
      <section className={styles.contentSection} style={{ background: '#f8fafc' }}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <div className={styles.sectionEyebrow}>
              <BookOpen size={13} />
              <span>Exam Blueprint</span>
            </div>
            <h2 className={styles.sectionTitle}>What You'll Learn in Cisco CCNA 200-301</h2>
            <p className={styles.sectionSubtext}>
              Comprehensive, industry-aligned coverage of all 6 official Cisco certification domains.
            </p>
          </div>

          <div className={styles.domainsGrid}>
            {ccnaDomains.map((domain, i) => (
              <div key={i} className={styles.domainCard}>
                <div className={styles.domainHeader}>
                  <span className={styles.domainNumber}>DOMAIN {domain.num}</span>
                  <span className={styles.domainWeight}>{domain.weight}</span>
                </div>
                <h3 className={styles.domainTitle}>{domain.title}</h3>
                <ul className={styles.domainPointsList}>
                  {domain.points.map((pt, idx) => (
                    <li key={idx} className={styles.domainPoint}>
                      <span className={styles.pointDot}>•</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. DETAILED SYLLABUS ACCORDION
          ========================================================================= */}
      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <div className={styles.sectionEyebrow}>
              <FileText size={13} />
              <span>Module Breakdown</span>
            </div>
            <h2 className={styles.sectionTitle}>Cisco CCNA 200-301 Course Syllabus</h2>
            <p className={styles.sectionSubtext}>
              Step-by-step technical curriculum designed to build real-world troubleshooting capability.
            </p>
          </div>

          <div className={styles.syllabusContainer}>
            <div className={styles.syllabusAccordion}>
              {syllabusModules.map((mod) => {
                const isOpen = openModule === mod.id;
                return (
                  <div key={mod.id} className={`${styles.accordionItem} ${isOpen ? styles.isOpen : ''}`}>
                    <button
                      type="button"
                      className={styles.accordionTrigger}
                      onClick={() => toggleModule(mod.id)}
                    >
                      <div className={styles.triggerLeft}>
                        <span className={styles.moduleTag}>{mod.tag}</span>
                        <span className={styles.moduleTitleText}>{mod.title}</span>
                      </div>
                      <ChevronDown
                        size={18}
                        className={`${styles.accordionChevron} ${isOpen ? styles.rotate : ''}`}
                      />
                    </button>

                    {isOpen && (
                      <div className={styles.accordionBody}>
                        <div className={styles.topicsList}>
                          {mod.topics.map((t, idx) => (
                            <div key={idx} className={styles.topicItem}>
                              <CheckCircle2 size={15} color="#0066FF" style={{ flexShrink: 0, marginTop: '3px' }} />
                              <span>{t}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. 80+ REAL CISCO LAB HARDWARE SHOWCASE
          ========================================================================= */}
      <section className={styles.labSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <div className={styles.sectionEyebrow} style={{ background: 'rgba(0,102,255,0.16)', color: '#38bdf8', borderColor: 'rgba(56,189,248,0.3)' }}>
              <Server size={13} />
              <span>Physical Equipment</span>
            </div>
            <h2 className={styles.sectionTitle} style={{ color: '#ffffff' }}>
              80+ Real-World Cisco Hardware Labs
            </h2>
            <p className={styles.sectionSubtext} style={{ color: '#94a3b8' }}>
              We do not rely on Packet Tracer. Students execute commands on genuine enterprise routing, 
              switching, and security hardware.
            </p>
          </div>

          <div className={styles.labDevicesGrid}>
            {labDevices.map((dev, i) => (
              <div key={i} className={styles.labDeviceCard}>
                <div className={styles.deviceIconBox}>
                  <Server size={22} />
                </div>
                <div className={styles.deviceCategory}>{dev.category}</div>
                <h3 className={styles.deviceName}>{dev.name}</h3>
                <p className={styles.deviceSpecs}>{dev.specs}</p>
                <div className={styles.devicePill}>
                  <CheckCircle2 size={12} />
                  <span>{dev.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. EXAM DETAILS & CAREER OPPORTUNITIES
          ========================================================================= */}
      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.dualSplitGrid}>
            {/* Left: Exam Details */}
            <div className={styles.examDetailsCard}>
              <div className={styles.cardHeaderBlock}>
                <Award size={24} className={styles.cardIcon} />
                <h3 className={styles.cardBlockTitle}>Cisco 200-301 Exam Information</h3>
              </div>

              <div className={styles.examRowsList}>
                <div className={styles.examRow}>
                  <span className={styles.examLabel}>Exam Code</span>
                  <span className={styles.examValue}>200-301 CCNA</span>
                </div>
                <div className={styles.examRow}>
                  <span className={styles.examLabel}>Exam Duration</span>
                  <span className={styles.examValue}>120 Minutes</span>
                </div>
                <div className={styles.examRow}>
                  <span className={styles.examLabel}>Number of Questions</span>
                  <span className={styles.examValue}>100 – 120 Questions</span>
                </div>
                <div className={styles.examRow}>
                  <span className={styles.examLabel}>Question Formats</span>
                  <span className={styles.examValue}>Multiple Choice, Drag &amp; Drop, Simlets</span>
                </div>
                <div className={styles.examRow}>
                  <span className={styles.examLabel}>Passing Score</span>
                  <span className={styles.examValue}>825 / 1000 (~82.5%)</span>
                </div>
                <div className={styles.examRow}>
                  <span className={styles.examLabel}>Certification Validity</span>
                  <span className={styles.examValue}>3 Years Globally Recognized</span>
                </div>
                <div className={styles.examRow}>
                  <span className={styles.examLabel}>Testing Authority</span>
                  <span className={styles.examValue}>Pearson VUE / I-Medita Exam Center</span>
                </div>
              </div>
            </div>

            {/* Right: Job Profiles & Salaries */}
            <div className={styles.careerCard}>
              <div className={styles.cardHeaderBlock}>
                <Briefcase size={24} className={styles.cardIcon} />
                <h3 className={styles.cardBlockTitle}>Job Profiles &amp; Career Growth</h3>
              </div>

              <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                CCNA is the gold standard foundation for IT networking and cybersecurity infrastructure careers. 
                Our certified alumni step into high-demand enterprise roles:
              </p>

              <div className={styles.rolesGrid}>
                <div className={styles.roleCard}>
                  <div className={styles.roleTitle}>Network Engineer</div>
                  <div className={styles.roleSalary}>₹4.5 LPA – ₹7.5 LPA</div>
                </div>
                <div className={styles.roleCard}>
                  <div className={styles.roleTitle}>NOC Support Engineer</div>
                  <div className={styles.roleSalary}>₹3.8 LPA – ₹5.8 LPA</div>
                </div>
                <div className={styles.roleCard}>
                  <div className={styles.roleTitle}>Network Administrator</div>
                  <div className={styles.roleSalary}>₹5.0 LPA – ₹8.5 LPA</div>
                </div>
                <div className={styles.roleCard}>
                  <div className={styles.roleTitle}>Security Analyst (L1)</div>
                  <div className={styles.roleSalary}>₹4.8 LPA – ₹7.8 LPA</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. UPCOMING LIVE BATCHES SCHEDULE
          ========================================================================= */}
      <section className={styles.contentSection} style={{ background: '#f8fafc' }}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <div className={styles.sectionEyebrow}>
              <Calendar size={13} />
              <span>Enrollment Schedule</span>
            </div>
            <h2 className={styles.sectionTitle}>Upcoming Cisco CCNA Live Batches</h2>
            <p className={styles.sectionSubtext}>
              Flexible weekend and weekday batches available in classroom and interactive live online formats.
            </p>
          </div>

          <div className={styles.batchesTableWrapper}>
            <table className={styles.batchesTable}>
              <thead>
                <tr>
                  <th>Start Date</th>
                  <th>Batch Type</th>
                  <th>Training Mode</th>
                  <th>Timings</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {upcomingBatches.map((batch) => (
                  <tr key={batch.id}>
                    <td>
                      <div style={{ fontWeight: 750, color: '#0f172a' }}>{batch.startDate}</div>
                      <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{batch.duration}</div>
                    </td>
                    <td>
                      <span className={styles.batchBadge} style={{ background: '#f1f5f9', color: '#334155' }}>
                        {batch.type}
                      </span>
                    </td>
                    <td>
                      <span className={`${styles.batchBadge} ${batch.mode.includes('Classroom') ? styles.batchBadgeClassroom : styles.batchBadgeLive}`}>
                        {batch.mode}
                      </span>
                    </td>
                    <td style={{ color: '#475569', fontWeight: 600 }}>{batch.timing}</td>
                    <td>
                      <span style={{ color: '#059669', fontWeight: 700, fontSize: '0.75rem' }}>
                        ● {batch.seats}
                      </span>
                    </td>
                    <td>
                      <button
                        type="button"
                        className={styles.enrollBtnSmall}
                        onClick={() => handleOpenDemo(`Cisco CCNA - ${batch.startDate}`)}
                      >
                        Book Seat
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* =========================================================================
          9. FREQUENTLY ASKED QUESTIONS (FAQS)
          ========================================================================= */}
      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <div className={styles.sectionEyebrow}>
              <HelpCircle size={13} />
              <span>Clear Doubts</span>
            </div>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
            <p className={styles.sectionSubtext}>
              Everything you need to know about CCNA training, fees, lab access, and placement assistance.
            </p>
          </div>

          <div className={styles.faqsList}>
            {faqsData.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} className={styles.faqItem}>
                  <button
                    type="button"
                    className={styles.faqQuestion}
                    onClick={() => toggleFaq(i)}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={18}
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'none',
                        transition: 'transform 200ms ease',
                        flexShrink: 0
                      }}
                    />
                  </button>
                  {isOpen && (
                    <div className={styles.faqAnswer}>
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          10. FINAL BOTTOM LEAD CALL-TO-ACTION SECTION
          ========================================================================= */}
      <section className={styles.bottomCtaSection}>
        <div className={styles.container}>
          <div className={styles.bottomCtaCard}>
            <h2 className={styles.bottomTitle}>
              Ready to Become a <br />
              <span className={styles.highlightText}>Cisco Certified Network Associate?</span>
            </h2>
            <p className={styles.bottomSub}>
              Attend our free 2-hour hands-on orientation class. Tour our physical server racks, 
              meet Triple CCIE instructors, and test-drive our CLI labs before paying any fees.
            </p>
            <div className={styles.bottomBtnRow}>
              <button
                type="button"
                className={styles.primaryCtaBtn}
                onClick={() => handleOpenDemo('Cisco CCNA (200-301)')}
              >
                <PhoneCall size={16} />
                <span>Book Free 2-Hour Practical Demo</span>
              </button>

              <button
                type="button"
                className={styles.secondaryCtaBtn}
                onClick={() => handleOpenDemo('Cisco CCNA (200-301) Syllabus')}
              >
                <Download size={16} />
                <span>Download CCNA 200-301 Syllabus</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CCNACoursePage;

