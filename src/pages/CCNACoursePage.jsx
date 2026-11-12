import React, { useState, useRef, useEffect } from 'react';
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
  Zap,
  Globe,
  GitFork,
  Route,
  Wrench,
  Wifi,
  ArrowUpRight,
  ArrowDown,
  FileCheck2,
  Mic,
  ChevronLeft,
  ChevronRight,
  ChevronUp
} from 'lucide-react';
import { LogoMarquee } from '../components/marquee/LogoMarquee';
import { CourseStickyNav } from '../components/navigation/CourseStickyNav';
import { TrainersSection } from '../components/trainers/TrainersSection';
import { PlacementPartners } from '../components/partners/PlacementPartners';
import { GoogleReviews } from '../components/reviews/GoogleReviews';
import { EventsSection } from '../components/events/EventsSection';
import styles from './CCNACoursePage.module.css';

// Why Choose I-Medita 6 Key Pillars
const whyChooseCards = [
  {
    icon: Server,
    iconBg: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
    title: '100% Real Hardware Labs',
    desc: 'Configure actual Cisco Catalyst 9300/2960 switches, ISR 4331 routers, and ASA 5506-X firewalls. Zero simulators or Packet Tracer limitations.'
  },
  {
    icon: Award,
    iconBg: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    title: 'Triple CCIE Certified Faculty',
    desc: 'Learn directly from Saurabh Yadav (Triple CCIE #46962) and seasoned datacenter architects with 15+ years of live enterprise deployment experience.'
  },
  {
    icon: Clock,
    iconBg: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
    title: '24/7 Remote Rack Access',
    desc: 'Practice on our cloud-connected datacenter racks anytime from home. Each student gets dedicated pod CLI access with zero queuing or lag.'
  },
  {
    icon: Briefcase,
    iconBg: 'linear-gradient(135deg, #f43f5e 0%, #e11d48 100%)',
    title: 'Dedicated Placement Cell',
    desc: 'Resume building, technical mock interview rounds, and direct placement drives with Fortune 500 tech giants like Orange Business, Airtel, and Wipro.'
  },
  {
    icon: Shield,
    iconBg: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
    title: 'Global Exam Assurance',
    desc: 'Comprehensive Cisco 200-301 mock tests, performance simlets, and official discounted exam vouchers yielding an authentic 100% passing record.'
  },
  {
    icon: BookOpen,
    iconBg: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
    title: 'Lifetime LMS & Video Library',
    desc: 'Never lose access to knowledge. Enjoy lifetime HD session recordings, topology diagrams, command syntaxes, and step-by-step configuration guides.'
  }
];

// What You'll Learn in Cisco CCNA 200-301 Training (10 Core Modules matching Curriculum)
const whatYouLearnItems = [
  {
    modNum: '01',
    icon: Network,
    title: 'Networking Fundamentals',
    desc: 'Master the OSI 7-layer model, TCP/IP protocol suite, Ethernet cabling, and core routing & switching roles.',
    tags: ['OSI Model', 'TCP/IP', 'Ethernet'],
    labHighlight: 'Physical Cable & Port Mapping'
  },
  {
    modNum: '02',
    icon: Globe,
    title: 'IPv4 & IPv6 Addressing',
    desc: 'Master IPv4 and IPv6 subnetting calculation, VLSM design, public vs. private subnets, and modern dual-stack architecture.',
    tags: ['Subnetting', 'VLSM', 'Dual-Stack'],
    labHighlight: 'VLSM Subnet Calculation Lab'
  },
  {
    modNum: '03',
    icon: Server,
    title: 'Routers & Switches',
    desc: 'Configure, manage, and troubleshoot Cisco Catalyst 9300/2960 switches and ISR 4331 routers using Cisco IOS CLI.',
    tags: ['Catalyst 9300', 'ISR 4331', 'Cisco IOS'],
    labHighlight: 'Live Cisco CLI Hardware Lab'
  },
  {
    modNum: '04',
    icon: GitFork,
    title: 'VLANs & Trunking',
    desc: 'Implement broadcast containment via VLANs, 802.1Q encapsulation trunking, Router-on-a-Stick, and Layer 3 SVIs.',
    tags: ['802.1Q', 'Inter-VLAN', 'SVI Routing'],
    labHighlight: 'Inter-VLAN Multi-Switch Pod'
  },
  {
    modNum: '05',
    icon: Route,
    title: 'Routing Protocols',
    desc: 'Configure static routing, default floating routes, and Single/Multi-Area Open Shortest Path First (OSPFv2) dynamic routing.',
    tags: ['OSPFv2', 'Static Routing', 'Metric & AD'],
    labHighlight: 'Multi-Area OSPF Topology'
  },
  {
    modNum: '06',
    icon: Layers,
    title: 'NAT, DHCP & DNS',
    desc: 'Deploy Dynamic NAT, Port Address Translation (PAT), DHCP server pools, DHCP relay helper-addresses, and DNS resolution.',
    tags: ['NAT / PAT', 'DHCP Relay', 'DNS / NTP'],
    labHighlight: 'Enterprise Gateway Services'
  },
  {
    modNum: '07',
    icon: ShieldCheck,
    title: 'Network Security',
    desc: 'Harden network infrastructure using standard/extended ACLs, dynamic port security, DHCP snooping, DAI, and TACACS+/AAA.',
    tags: ['ACL Filtering', 'Port Security', 'AAA Hardening'],
    labHighlight: 'Security & Access Control Lab'
  },
  {
    modNum: '08',
    icon: Wrench,
    title: 'Troubleshooting',
    desc: 'Systematically diagnose packet drops, duplex mismatches, routing blackholes, and MTU issues using industry-standard techniques.',
    tags: ['Packet Tracing', 'Root Cause', 'Show Commands'],
    labHighlight: 'Real Incident Break-Fix Lab'
  },
  {
    modNum: '09',
    icon: Wifi,
    title: 'Wireless Networking',
    desc: 'Design and manage Wi-Fi 6 enterprise architectures, Cisco Wireless LAN Controllers (WLCs), Lightweight APs, and WPA3 security.',
    tags: ['Cisco WLC', 'Lightweight APs', 'WPA3 Enterprise'],
    labHighlight: 'Live WLC GUI & CLI Config'
  },
  {
    modNum: '10',
    icon: Cpu,
    title: 'SDN & Automation',
    desc: 'Explore controller-led architectures (Cisco DNA Center, SD-WAN, SD-Access), REST API CRUD operations, JSON/YAML, and Python.',
    tags: ['DNA Center', 'SD-WAN', 'Python & REST'],
    labHighlight: 'Python Network Automation'
  }
];

// 5-Stage Step-by-Step Learning Roadmap
const roadmapStages = [
  {
    stageNum: '01',
    stageLabel: 'STAGE 01',
    tabTitle: 'Learn Concepts',
    tabIcon: BookOpen,
    tag: 'Live Training',
    heading: 'Learn concepts',
    description: 'Live instructor-led sessions covering the complete CCNA 200-301 curriculum, including networking theory, protocol behavior, and real-world scenarios.',
    checklist: [
      'Complete CCNA 200-301 syllabus coverage',
      'Weekday batches (Mon-Thu) and weekend batches (Sat-Sun) available',
      'All classes are recorded and available on our learning portal and mobile app'
    ]
  },
  {
    stageNum: '02',
    stageLabel: 'STAGE 02',
    tabTitle: 'Real Labs',
    tabIcon: Server,
    tag: 'Hands-on Practice',
    heading: 'Real Hardware Labs',
    description: 'Work on actual physical Cisco Catalyst switches, ISR routers, and firewalls with 24/7 dedicated remote console access from home.',
    checklist: [
      'Configure actual Cisco Catalyst 9300/2960 and ISR 4331 hardware CLI',
      '24/7 remote pod access with dedicated console lines and zero lag',
      'Zero simulators or Packet Tracer limitations — 100% production IOS'
    ]
  },
  {
    stageNum: '03',
    stageLabel: 'STAGE 03',
    tabTitle: 'Assignments',
    tabIcon: FileCheck2,
    tag: 'Practical Validation',
    heading: 'Assignments & Workbooks',
    description: 'Reinforce your technical knowledge with challenging enterprise network topologies, configuration exercises, and step-by-step lab workbooks.',
    checklist: [
      'Comprehensive lab workbooks with step-by-step command guides',
      'Real-world network break-fix scenarios and troubleshooting drills',
      '1-on-1 trainer code review and configuration debugging support'
    ]
  },
  {
    stageNum: '04',
    stageLabel: 'STAGE 04',
    tabTitle: 'Mock Interviews',
    tabIcon: Mic,
    tag: 'Career Preparation',
    heading: 'Mock Interviews & Grooming',
    description: 'Prepare for global networking recruiters through intensive 1-on-1 technical mock interview rounds, resume optimization, and behavioral grooming.',
    checklist: [
      '1-on-1 technical mock interview rounds conducted by CCIE architects',
      'ATS-friendly resume building, LinkedIn optimization, and portfolio review',
      'HR behavioral training and interview question bank with placement guidance'
    ]
  },
  {
    stageNum: '05',
    stageLabel: 'STAGE 05',
    tabTitle: 'Certification',
    tabIcon: Award,
    tag: 'Global Credential',
    heading: 'CCNA Certification & Placement',
    description: 'Clear your official Cisco 200-301 global certification exam with 100% confidence and attend direct campus placement drives with Fortune 500 tech partners.',
    checklist: [
      'Official Cisco CCNA 200-301 mock tests, exam dumps, and performance simlets',
      'Discounted official Cisco exam voucher booking assistance',
      'Direct interview drives with Orange Business, Airtel, Wipro, and TCS'
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
      'IPv6 Addressing: Global Unicast, Unique Local, Link-Local & EUI-64 generation',
      'Cisco IOS CLI basics, initial device configuration & troubleshooting'
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
      'Configuring Layer 2 and Layer 3 EtherChannel using LACP (802.3ad)',
      'Discovery protocols: Cisco Discovery Protocol (CDP) & LLDP configuration'
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
      'First Hop Redundancy Protocol (FHRP) concepts: HSRP active/standby router mechanics',
      'Dynamic routing verification commands and route summarization principles'
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
      'Configuring SSHv2 with RSA key-pairs, local user accounts, and VTY line security',
      'Network management protocols: SNMPv2c/SNMPv3 and TFTP/FTP backup procedures'
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
      'Site-to-Site IPSec VPN concepts (IKE Phase 1 and Phase 2 tunnels, ESP encryption)',
      'Wireless security protocols: WPA2-Personal, WPA2-Enterprise (802.1X), and WPA3'
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
      'Introduction to Python network automation scripts (Netmiko & Paramiko libraries)',
      'Configuration management tools comparison: Ansible, Puppet, and Chef basics'
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
  const [activeRoadmapStage, setActiveRoadmapStage] = useState(0);
  const [activeSlice, setActiveSlice] = useState(0);

  // CCNA Course Overview Slices - Non-passive wheel handler + Lenis coordination
  const slicesDeckRef = useRef(null);

  useEffect(() => {
    const deck = slicesDeckRef.current;
    if (!deck) return;

    const handleWheel = (e) => {
      // Find the currently expanded slice container
      const activeCard = deck.querySelector(`.${styles.sliceColActive}`);
      if (!activeCard) return;

      // Only handle if mouse is hovering over the active expanded card
      if (!activeCard.contains(e.target)) return;

      const scrollEl = activeCard.querySelector(`.${styles.sliceBodyScroll}`);
      if (!scrollEl) return;

      const { scrollTop, scrollHeight, clientHeight } = scrollEl;
      const maxScroll = scrollHeight - clientHeight;
      if (maxScroll <= 4) return; // If content fully fits, allow standard page scroll

      const delta = e.deltaY;
      const isScrollingDown = delta > 0;
      const isScrollingUp = delta < 0;
      const canScrollDown = scrollTop < maxScroll - 2;
      const canScrollUp = scrollTop > 2;

      // Smoothly scroll the card content while within boundaries
      if ((isScrollingDown && canScrollDown) || (isScrollingUp && canScrollUp)) {
        e.preventDefault();
        e.stopPropagation();
        scrollEl.scrollTop += delta;
      }
      // When reaching top/bottom extreme, event bubbles naturally so outer page scroll continues!
    };

    deck.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      deck.removeEventListener('wheel', handleWheel);
    };
  }, [activeSlice]);

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
          3. COURSE STICKY SUB-NAVBAR (QUICK JUMP TO KEY SECTIONS)
          ========================================================================= */}
      <CourseStickyNav onOpenDemo={handleOpenDemo} />

      {/* =========================================================================
          4. OVERVIEW: WHY CCNA AT I-MEDITA & ADVANTAGES
          ========================================================================= */}
      <section className={styles.overviewSection} id="overview">
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <div className={styles.overviewPill}>
              <span>Industry Leadership</span>
            </div>
            <h2 className={styles.overviewTitle}>Why Choose I-Medita For Cisco CCNA?</h2>
            <p className={styles.overviewSubtext}>
              Ranked among India's top Cisco authorized academies with unmatched physical lab infrastructure 
              and corporate training rigor.
            </p>
          </div>

          <div className={styles.advantagesGrid}>
            {whyChooseCards.map((card, idx) => {
              const IconComp = card.icon;
              return (
                <div key={idx} className={styles.advantageCard}>
                  <div
                    className={styles.advantageIconSquircle}
                    style={{ background: card.iconBg }}
                  >
                    <IconComp size={24} color="#ffffff" strokeWidth={2.2} />
                  </div>
                  <h3 className={styles.advantageTitle}>{card.title}</h3>
                  <p className={styles.advantageDesc}>{card.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Bottom Dark Navy Banner matching the reference design */}
          <div className={styles.overviewCtaBanner}>
            <div className={styles.overviewCtaContent}>
              <h3 className={styles.overviewCtaHeading}>Not Sure if CCNA Is Right for You?</h3>
              <p className={styles.overviewCtaDesc}>
                Join a free demo session, explore the curriculum, experience live Cisco labs, and get expert career guidance before you enroll.
              </p>
            </div>
            <button
              type="button"
              className={styles.overviewCtaBtn}
              onClick={() => handleOpenDemo('Cisco CCNA (200-301) Free Demo')}
            >
              Book Free Demo →
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. WHAT YOU WILL LEARN IN CISCO CCNA 200-301 TRAINING (10 CORE MODULES)
          ========================================================================= */}
      <section className={styles.curriculumSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <div className={styles.curriculumPill}>
              <Sparkles size={13} className={styles.pillSparkle} />
              <span>Official Cisco Curriculum</span>
            </div>
            <h2 className={styles.curriculumHeading}>
              What You'll Learn in{' '}
              <span className={styles.gradientText}>Cisco CCNA 200-301</span>
              <br />Professional Training
            </h2>
            <p className={styles.curriculumSubtext}>
              Master all 10 essential networking domains through 80+ hours of physical rack sessions, real-world topologies, and CCIE instructor-led troubleshooting walkthroughs.
            </p>
          </div>

          <div className={styles.curriculumGrid}>
            {whatYouLearnItems.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className={styles.curriculumCard}>
                  {/* Top Row: Squircle Icon + Tech Mono Module Badge */}
                  <div className={styles.cardTopRow}>
                    <div className={styles.curriculumIconWrap}>
                      <IconComp size={22} color="#ffffff" strokeWidth={2.2} />
                    </div>
                    <span className={styles.moduleBadge}>MOD {item.modNum}</span>
                  </div>

                  {/* Title & Description */}
                  <h3 className={styles.curriculumCardTitle}>{item.title}</h3>
                  <p className={styles.curriculumCardDesc}>{item.desc}</p>

                  {/* Interactive Micro Topic Pills */}
                  <div className={styles.tagsRow}>
                    {item.tags.map((tag, tIdx) => (
                      <span key={tIdx} className={styles.microTag}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Card Footer: Lab Pod Highlight & Interactive Arrow */}
                  <div className={styles.cardFooter}>
                    <span className={styles.labBadge}>
                      <span className={styles.greenPulseDot} />
                      <span>{item.labHighlight}</span>
                    </span>
                    <ArrowUpRight size={14} className={styles.cardArrow} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Bottom Curriculum Action Banner */}
          <div className={styles.curriculumFooterBanner}>
            <div className={styles.footerBannerLeft}>
              <div className={styles.footerBannerIcon}>
                <CheckCircle2 size={24} color="#0066cc" />
              </div>
              <div>
                <h4 className={styles.footerBannerTitle}>Want the Full Day-by-Day Lab Breakdown?</h4>
                <p className={styles.footerBannerSubtext}>
                  Explore our comprehensive lab topology guides, command syntax cheatsheets, and official Cisco 200-301 blueprint.
                </p>
              </div>
            </div>
            <div className={styles.footerBannerActions}>
              <a href="#syllabus" className={styles.viewSyllabusBtn}>
                <span>View Detailed Syllabus</span>
                <ArrowDown size={14} />
              </a>
              <button
                type="button"
                className={styles.downloadBrochureBtn}
                onClick={() => handleOpenDemo('Cisco CCNA (200-301) Syllabus PDF')}
              >
                <Download size={14} />
                <span>Get Syllabus PDF</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. STEP-BY-STEP LEARNING ROADMAP (CLEAN & NEAT 5-STAGE PATH)
          ========================================================================= */}
      <section className={styles.roadmapSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <div className={styles.roadmapPill}>
              <span>Your CCNA Learning Roadmap</span>
            </div>
            <h2 className={styles.roadmapHeading}>
              Your Step-by-Step Journey to Cisco CCNA<br />Certification
            </h2>
            <p className={styles.roadmapSubtext}>
              Follow a structured 5-stage learning path designed to help you master Cisco CCNA 200-301 concepts, gain hands-on networking experience, and become job-ready.
            </p>
          </div>

          {/* Stepper Node Line Track */}
          <div className={styles.stepperTrack}>
            {roadmapStages.map((st, i) => {
              const isCompleted = i <= activeRoadmapStage;
              const isCurrent = i === activeRoadmapStage;
              return (
                <React.Fragment key={st.stageNum}>
                  <button
                    type="button"
                    className={`${styles.stepNode} ${isCurrent ? styles.stepNodeActive : ''} ${isCompleted ? styles.stepNodeDone : ''}`}
                    onClick={() => setActiveRoadmapStage(i)}
                    aria-label={`Go to Stage ${st.stageNum}`}
                  >
                    <span>{st.stageNum}</span>
                  </button>
                  {i < roadmapStages.length - 1 && (
                    <div
                      className={`${styles.stepLine} ${i < activeRoadmapStage ? styles.stepLineDone : ''}`}
                    />
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* 5 Stage Tab Cards */}
          <div className={styles.stageTabsGrid}>
            {roadmapStages.map((st, i) => {
              const isActive = i === activeRoadmapStage;
              const TabIcon = st.tabIcon;
              return (
                <button
                  key={st.stageNum}
                  type="button"
                  className={`${styles.stageTabCard} ${isActive ? styles.stageTabActive : ''}`}
                  onClick={() => setActiveRoadmapStage(i)}
                >
                  <span className={styles.stageTabLabel}>{st.stageLabel}</span>
                  <div className={styles.stageTabIconWrap}>
                    <TabIcon size={22} />
                  </div>
                  <span className={styles.stageTabTitle}>{st.tabTitle}</span>
                </button>
              );
            })}
          </div>

          {/* Active Detailed Stage Card */}
          {(() => {
            const currentStage = roadmapStages[activeRoadmapStage];
            const CurrentIcon = currentStage.tabIcon;
            return (
              <div key={currentStage.stageNum} className={styles.roadmapActiveCard}>
                <div className={styles.roadmapCardBody}>
                  {/* Left Column: Big Stage Number & Squircle Icon */}
                  <div className={styles.roadmapCardLeft}>
                    <span className={styles.roadmapBigNum}>{currentStage.stageNum}</span>
                    <div className={styles.roadmapStageIconBox}>
                      <CurrentIcon size={24} color="#0066cc" />
                    </div>
                  </div>

                  {/* Right Column: Stage Tag, Heading, Description & Checklist */}
                  <div className={styles.roadmapCardRight}>
                    <span className={styles.roadmapStageTag}>{currentStage.tag}</span>
                    <h3 className={styles.roadmapStageHeading}>{currentStage.heading}</h3>
                    <p className={styles.roadmapStageDesc}>{currentStage.description}</p>

                    <ul className={styles.roadmapChecklist}>
                      {currentStage.checklist.map((item, idx) => (
                        <li key={idx} className={styles.roadmapCheckItem}>
                          <CheckCircle2 size={18} className={styles.checkIcon} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Navigation Controls */}
                <div className={styles.roadmapCardNav}>
                  <button
                    type="button"
                    className={styles.prevBtn}
                    onClick={() => setActiveRoadmapStage(prev => Math.max(0, prev - 1))}
                    disabled={activeRoadmapStage === 0}
                  >
                    <ChevronLeft size={16} />
                    <span>Previous</span>
                  </button>

                  <span className={styles.stageProgressText}>
                    Stage {activeRoadmapStage + 1} of {roadmapStages.length}
                  </span>

                  <button
                    type="button"
                    className={styles.nextBtn}
                    onClick={() => {
                      if (activeRoadmapStage < roadmapStages.length - 1) {
                        setActiveRoadmapStage(prev => prev + 1);
                      } else {
                        handleOpenDemo('Cisco CCNA (200-301) Roadmap Free Demo');
                      }
                    }}
                  >
                    <span>{activeRoadmapStage === roadmapStages.length - 1 ? 'Book Free Demo' : 'Next'}</span>
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            );
          })()}

          {/* Bottom Dark Navy CTA Banner */}
          <div className={styles.roadmapCtaBanner}>
            <div className={styles.roadmapCtaLeft}>
              <span className={styles.roadmapCtaPill}>Ready to start?</span>
              <h3 className={styles.roadmapCtaHeading}>Book Your Free Demo Class This Week</h3>
              <p className={styles.roadmapCtaSubtext}>
                Experience our teaching methodology, live labs, and learning platform before you enroll.
              </p>
            </div>
            <button
              type="button"
              className={styles.roadmapCtaBtn}
              onClick={() => handleOpenDemo('Cisco CCNA (200-301) Roadmap Free Demo')}
            >
              Book a Free Demo →
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. DETAILED SYLLABUS ACCORDION & HARDWARE LABS (STICKY TAB #syllabus)
          ========================================================================= */}
      <div id="syllabus">
        <section className={styles.syllabusSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeaderCenter}>
              <div className={styles.syllabusPill}>
                <span>Full Course Syllabus</span>
              </div>
              <h2 className={styles.syllabusHeading}>Cisco CCNA 200-301 Course Syllabus</h2>
              <p className={styles.syllabusSubtext}>
                Master the complete Cisco CCNA 200-301 exam blueprint through 6 comprehensive modules covering networking fundamentals, routing, switching, security, automation, and hands-on enterprise networking labs.
              </p>
            </div>

            <div className={styles.syllabusContainer}>
              <div className={styles.syllabusAccordion}>
                {syllabusModules.map((mod) => {
                  const isOpen = openModule === mod.id;
                  return (
                    <div
                      key={mod.id}
                      className={`${styles.accordionItem} ${isOpen ? styles.accordionItemOpen : ''}`}
                    >
                      <button
                        type="button"
                        className={styles.accordionTrigger}
                        onClick={() => toggleModule(mod.id)}
                        aria-expanded={isOpen}
                      >
                        <span
                          className={`${styles.moduleTitleText} ${isOpen ? styles.moduleTitleActive : ''}`}
                        >
                          {mod.tag}: {mod.title}
                        </span>
                        <ChevronDown
                          size={18}
                          className={`${styles.accordionChevron} ${isOpen ? styles.accordionChevronOpen : ''}`}
                        />
                      </button>

                      {isOpen && (
                        <div className={styles.accordionBody}>
                          <div className={styles.topicsGrid}>
                            {mod.topics.map((t, idx) => (
                              <div key={idx} className={styles.topicItem}>
                                <div className={styles.topicCheckWrap}>
                                  <Check size={11} color="#ffffff" strokeWidth={3} />
                                </div>
                                <span className={styles.topicText}>{t}</span>
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
            CCNA COURSE OVERVIEW (INTERACTIVE EXPANDING SLICES SHOWCASE)
            ========================================================================= */}
        <section id="course-overview-section" className={styles.slicesSection}>
          <div className={styles.container}>
            {/* Header */}
            <div className={styles.slicesHeader}>
              <span className={styles.slicesPill}>
                <BookOpen size={13} />
                <span>CCNA COURSE OVERVIEW</span>
              </span>
              <h2 className={styles.slicesHeading}>
                Why CCNA Course/CCNA Training?
              </h2>
              <p className={styles.slicesSubtext}>
                Click any pillar to explore the complete curriculum specifications, target profiles, physical lab devices, and certification exam details.
              </p>
            </div>

            {/* Quick-Nav Pill Switcher */}
            <div className={styles.slicesPillBar} role="tablist">
              {[
                { label: '01. Why CCNA?', icon: Globe },
                { label: '02. Who Should Take?', icon: Users },
                { label: '03. Pre-Requisites', icon: ShieldCheck },
                { label: '04. Job Profiles', icon: Briefcase },
                { label: '05. Devices & Tools', icon: Server },
                { label: '06. Exam Details', icon: Award }
              ].map((tab, idx) => {
                const TabIcon = tab.icon;
                const isTabActive = activeSlice === idx;
                return (
                  <button
                    key={idx}
                    type="button"
                    role="tab"
                    aria-selected={isTabActive}
                    className={`${styles.slicesPillBtn} ${isTabActive ? styles.slicesPillBtnActive : ''}`}
                    onClick={() => setActiveSlice(idx)}
                  >
                    <TabIcon size={14} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Expanding Flex Panels Matrix */}
            <div className={styles.slicesDeck} ref={slicesDeckRef} data-lenis-prevent>

              {/* Panel 0: Why CCNA? */}
              <div
                className={`${styles.sliceCol} ${activeSlice === 0 ? styles.sliceColActive : styles.sliceColCollapsed}`}
                onClick={() => setActiveSlice(0)}
              >
                <div className={styles.sliceRail} aria-hidden={activeSlice === 0}>
                  <div className={styles.sliceRailNum}>01</div>
                  <div className={styles.sliceRailIcon}><Globe size={18} /></div>
                  <span className={styles.sliceRailText}>Why CCNA Course?</span>
                </div>
                <div className={styles.sliceExpandedView} aria-hidden={activeSlice !== 0}>
                  <div className={styles.sliceTopRow}>
                    <span className={styles.sliceBadge}>01 • Market Leadership</span>
                    <h3 className={styles.sliceTitle}>Why CCNA Course/CCNA Training?</h3>
                  </div>
                  <div className={styles.sliceBodyScroll} data-lenis-prevent>
                    <p className={styles.sliceParagraph}>
                      Cisco is the worldwide leader in IT and networking. Cisco has transformed the way people connect, communicate, and collaborate. Cisco products and solutions are deployed in companies from small &amp; medium sizes to large enterprises.
                    </p>
                    <p className={styles.sliceParagraph}>
                      Cisco is the most dominant player in India for network infrastructure, a clear leader in all segments – Ethernet Switch, Routers and WLAN. Hence there is a good scope for Cisco Networking Professionals in India.
                    </p>
                    <p className={styles.sliceParagraph}>
                      CCNA certification demonstrates the skills and knowledge required to install, operate, configure, and verify basic IPv4 and IPv6 networks. The CCNA Course/CCNA Training also gives you a foundation in networking fundamentals, IP services, security fundamentals, automation, and programmability. The CCNA training course and exam give you the foundation to take your career in any direction in the IT Domain.
                    </p>
                  </div>
                </div>
              </div>

              {/* Panel 1: Who Should Take? */}
              <div
                className={`${styles.sliceCol} ${activeSlice === 1 ? styles.sliceColActive : styles.sliceColCollapsed}`}
                onClick={() => setActiveSlice(1)}
              >
                <div className={styles.sliceRail} aria-hidden={activeSlice === 1}>
                  <div className={styles.sliceRailNum}>02</div>
                  <div className={styles.sliceRailIcon}><Users size={18} /></div>
                  <span className={styles.sliceRailText}>Who Should Take?</span>
                </div>
                <div className={styles.sliceExpandedView} aria-hidden={activeSlice !== 1}>
                  <div className={styles.sliceTopRow}>
                    <span className={styles.sliceBadge}>02 • Target Audience</span>
                    <h3 className={styles.sliceTitle}>Who Should Take CCNA Course/CCNA Training?</h3>
                    <p className={styles.sliceSubtitle}>The CCNA course is ideal for:</p>
                  </div>
                  <div className={styles.sliceBodyScroll} data-lenis-prevent>
                    <div className={styles.sliceAudienceGrid}>
                      {[
                        'Candidates passionate about achieving Cisco CCNA Certification.',
                        'Students enthusiastic about making a career as a Network Engineer can take the CCNA Course/CCNA Training.',
                        'Working professionals in IT networking can take the CCNA training course to enhance their knowledge and skills.',
                        'Professionals employed in network administration, operations, and management.',
                        'Entry-level network engineer, Network administrator, Network support technician, Network Engineers, Help desk technician.',
                        'Technicians involved in the installation, operation, and verification of Cisco networks.'
                      ].map((item, idx) => (
                        <div key={idx} className={styles.sliceAudienceItem}>
                          <div className={styles.sliceCheck}>
                            <Check size={11} color="#ffffff" strokeWidth={3} />
                          </div>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Panel 2: Pre-Requisites */}
              <div
                className={`${styles.sliceCol} ${activeSlice === 2 ? styles.sliceColActive : styles.sliceColCollapsed}`}
                onClick={() => setActiveSlice(2)}
              >
                <div className={styles.sliceRail} aria-hidden={activeSlice === 2}>
                  <div className={styles.sliceRailNum}>03</div>
                  <div className={styles.sliceRailIcon}><ShieldCheck size={18} /></div>
                  <span className={styles.sliceRailText}>Pre-Requisites</span>
                </div>
                <div className={styles.sliceExpandedView} aria-hidden={activeSlice !== 2}>
                  <div className={styles.sliceTopRow}>
                    <span className={styles.sliceBadge}>03 • Eligibility Criteria</span>
                    <h3 className={styles.sliceTitle}>Pre-Requisites For CCNA Course/CCNA Training</h3>
                  </div>
                  <div className={styles.sliceBodyScroll} data-lenis-prevent>
                    <p className={styles.sliceParagraph}>
                      There are no formal pre-requisites for the CCNA Global Certification Exam, but before appearing for the CCNA Course/CCNA Training, candidates should possess the following knowledge:
                    </p>
                    <div className={styles.slicePrereqGrid}>
                      <div className={styles.slicePrereqCard}>
                        <div className={styles.slicePrereqIcon}><Laptop size={18} color="#0066cc" /></div>
                        <span>Basic Computer literacy</span>
                      </div>
                      <div className={styles.slicePrereqCard}>
                        <div className={styles.slicePrereqIcon}><Globe size={18} color="#0066cc" /></div>
                        <span>Basic Internet usage skills</span>
                      </div>
                      <div className={styles.slicePrereqCard}>
                        <div className={styles.slicePrereqIcon}><Network size={18} color="#0066cc" /></div>
                        <span>Basic IP address knowledge</span>
                      </div>
                      <div className={styles.slicePrereqCard}>
                        <div className={styles.slicePrereqIcon}><Cpu size={18} color="#0066cc" /></div>
                        <span>Basic PC operating system navigation skills</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Panel 3: Job Profiles Post CCNA */}
              <div
                className={`${styles.sliceCol} ${activeSlice === 3 ? styles.sliceColActive : styles.sliceColCollapsed}`}
                onClick={() => setActiveSlice(3)}
              >
                <div className={styles.sliceRail} aria-hidden={activeSlice === 3}>
                  <div className={styles.sliceRailNum}>04</div>
                  <div className={styles.sliceRailIcon}><Briefcase size={18} /></div>
                  <span className={styles.sliceRailText}>Job Profiles Post CCNA</span>
                </div>
                <div className={styles.sliceExpandedView} aria-hidden={activeSlice !== 3}>
                  <div className={styles.sliceTopRow}>
                    <span className={styles.sliceBadge}>04 • Career Opportunities</span>
                    <h3 className={styles.sliceTitle}>Job Profiles Available Post CCNA Course/CCNA Training</h3>
                    <p className={styles.sliceSubtitle}>
                      The 200-301 Cisco CCNA Course/CCNA Training program will train and make you competent to achieve the following job titles:
                    </p>
                  </div>
                  <div className={styles.sliceBodyScroll} data-lenis-prevent>
                    <div className={styles.sliceRolesGrid}>
                      {[
                        'Network Associate',
                        'Network Administrator',
                        'Network Engineer',
                        'Network Operations Center (NOC) Engineer',
                        'Network Support Engineer',
                        'Entry-level Network Engineer',
                        'Help Desk Technician',
                        'Network Support Technician'
                      ].map((role, idx) => (
                        <div key={idx} className={styles.sliceRoleBadge}>
                          <span className={styles.sliceRoleDot} />
                          <span>{role}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Panel 4: Devices & Tools */}
              <div
                className={`${styles.sliceCol} ${activeSlice === 4 ? styles.sliceColActive : styles.sliceColCollapsed}`}
                onClick={() => setActiveSlice(4)}
              >
                <div className={styles.sliceRail} aria-hidden={activeSlice === 4}>
                  <div className={styles.sliceRailNum}>05</div>
                  <div className={styles.sliceRailIcon}><Server size={18} /></div>
                  <span className={styles.sliceRailText}>Devices &amp; Tools</span>
                </div>
                <div className={styles.sliceExpandedView} aria-hidden={activeSlice !== 4}>
                  <div className={styles.sliceTopRow}>
                    <span className={styles.sliceBadge}>05 • Physical Equipment</span>
                    <h3 className={styles.sliceTitle}>Devices To Be Used During The CCNA Course/CCNA Training</h3>
                    <p className={styles.sliceSubtitle}>
                      During the CCNA Course/CCNA Training, we provide students the opportunity to work on the following devices:
                    </p>
                  </div>
                  <div className={styles.sliceBodyScroll} data-lenis-prevent>
                    <div className={styles.sliceDevicesGrid}>
                      <div className={styles.sliceDeviceBox}>
                        <span className={styles.sliceDeviceTag}>Router</span>
                        <p className={styles.sliceDeviceText}>2611 XM, 1841, 1905, 2811, and other latest series.</p>
                      </div>
                      <div className={styles.sliceDeviceBox}>
                        <span className={styles.sliceDeviceTag}>Switches</span>
                        <p className={styles.sliceDeviceText}>2950, 2960, 3750, 3560, and other latest series.</p>
                      </div>
                      <div className={styles.sliceDeviceBox}>
                        <span className={styles.sliceDeviceTag}>Tools to be used</span>
                        <p className={styles.sliceDeviceText}>Cisco IOS, Putty, GNS, Cisco Packet Tracer, and EVE-NG.</p>
                      </div>
                    </div>
                    <div className={styles.sliceDeviceCallout}>
                      <CheckCircle2 size={16} color="#0284c7" style={{ flexShrink: 0, marginTop: 2 }} />
                      <p>
                        The above devices will provide candidates with hands-on knowledge and make them confident in operating these tools. Candidates become efficient at setting up, managing, and operating enterprise networks at the entry-level after completing the CCNA Course/CCNA Training.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Panel 5: Exam Details */}
              <div
                className={`${styles.sliceCol} ${activeSlice === 5 ? styles.sliceColActive : styles.sliceColCollapsed}`}
                onClick={() => setActiveSlice(5)}
              >
                <div className={styles.sliceRail} aria-hidden={activeSlice === 5}>
                  <div className={styles.sliceRailNum}>06</div>
                  <div className={styles.sliceRailIcon}><Award size={18} /></div>
                  <span className={styles.sliceRailText}>Exam Details (200-301)</span>
                </div>
                <div className={styles.sliceExpandedView} aria-hidden={activeSlice !== 5}>
                  <div className={styles.sliceTopRow}>
                    <span className={styles.sliceBadge}>06 • Global Certification</span>
                    <h3 className={styles.sliceTitle}>CCNA Course/CCNA Training – Exam Details</h3>
                  </div>
                  <div className={styles.sliceBodyScroll} data-lenis-prevent>
                    <div className={styles.sliceExamTable}>
                      <div className={styles.sliceExamRow}>
                        <span className={styles.sliceExamKey}>Certification Name</span>
                        <strong className={styles.sliceExamVal}>CCNA – Cisco Certified Network Associate</strong>
                      </div>
                      <div className={styles.sliceExamRow}>
                        <span className={styles.sliceExamKey}>Exam Code</span>
                        <strong className={styles.sliceExamVal}>200-301 CCNA</strong>
                      </div>
                      <div className={styles.sliceExamRow}>
                        <span className={styles.sliceExamKey}>Exam Duration</span>
                        <strong className={styles.sliceExamVal}>120 minutes</strong>
                      </div>
                      <div className={styles.sliceExamRow}>
                        <span className={styles.sliceExamKey}>Available Languages</span>
                        <strong className={styles.sliceExamVal}>English, Japanese</strong>
                      </div>
                      <div className={styles.sliceExamRow}>
                        <span className={styles.sliceExamKey}>Exam Location</span>
                        <strong className={styles.sliceExamVal}>Examination at Pearson Vue Centers</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Stepper & Nav */}
            <div className={styles.slicesBottomNav}>
              <span className={styles.slicesCounter}>
                Section {activeSlice + 1} of 6
              </span>
              <div className={styles.slicesBtnGroup}>
                <button
                  type="button"
                  className={styles.sliceNavBtn}
                  disabled={activeSlice === 0}
                  onClick={() => setActiveSlice((prev) => Math.max(0, prev - 1))}
                >
                  <ChevronLeft size={16} />
                  <span>Previous</span>
                </button>
                <button
                  type="button"
                  className={styles.sliceNavBtnNext}
                  disabled={activeSlice === 5}
                  onClick={() => setActiveSlice((prev) => Math.min(5, prev + 1))}
                >
                  <span>Next Section</span>
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

          </div>
        </section>
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
      </div>

      {/* =========================================================================
          7. MASTER CCIE FACULTY & MENTORS (STICKY TAB #trainers)
          ========================================================================= */}
      <TrainersSection />

      {/* =========================================================================
          8. PLACEMENT PARTNERS & CAREER OPPORTUNITIES (STICKY TAB #placement)
          ========================================================================= */}
      <div id="placement">
        <PlacementPartners />

        {/* =========================================================================
            9. EXAM DETAILS & CAREER OPPORTUNITIES
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
      </div>

      {/* =========================================================================
          10. STUDENT GOOGLE REVIEWS & TESTIMONIALS (STICKY TAB #reviews)
          ========================================================================= */}
      <GoogleReviews />

      {/* =========================================================================
          11. UPCOMING TECHNICAL BOOTCAMPS & EVENTS (STICKY TAB #events)
          ========================================================================= */}
      <div id="events">
        <EventsSection onOpenDemo={handleOpenDemo} />

        {/* =========================================================================
            12. UPCOMING LIVE BATCHES SCHEDULE
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
      </div>

      {/* =========================================================================
          13. FREQUENTLY ASKED QUESTIONS (STICKY TAB #faq)
          ========================================================================= */}
      <section className={styles.contentSection} id="faq">
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

