import { 
  ShieldCheck, 
  Layers, 
  Lock, 
  Network, 
  Globe, 
  Shield, 
  KeyRound, 
  Fingerprint, 
  Share2, 
  Award, 
  ShieldAlert, 
  Flame, 
  Terminal, 
  Server, 
  CloudLightning, 
  Cloud, 
  Cpu 
} from 'lucide-react';
import { liveTrainingCategories } from './liveTrainingMenuData';

/**
 * 19 All-Course Cards Dataset mapped directly to Live Training Curriculum
 * Strictly Zero Raster Images | Strictly Zero Emojis | 100% SVG Vectors
 */
export const allCoursesCards = [
  // =========================================================================
  // 1. Job Guarantee Courses (3 Cards)
  // =========================================================================
  {
    id: "job-multi-vendor",
    category: "Job Guarantee",
    categoryId: "job-guarantee",
    title: "Network Security Engineer Multi-Vendor Training",
    subtitle: "Cisco, Palo Alto & Fortinet multi-vendor firewall security.",
    url: "https://www.imedita.com/courses/multi-vendor-training/",
    badge: "100% Placement",
    badgeStyle: "badge-emerald",
    icon: ShieldCheck,
    duration: "240 Hours",
    labType: "Live Dedicated Racks",
    certType: "Written Guarantee",
    features: [
      "Direct hiring partner placement drives",
      "Multi-vendor firewall topology labs"
    ]
  },
  {
    id: "job-network-engineer",
    category: "Job Guarantee",
    categoryId: "job-guarantee",
    title: "Multi-Track Job Guaranteed Training for Network Engineers",
    subtitle: "Dual-Stack Routing, Switching & Enterprise Infrastructure.",
    url: "https://www.imedita.com/courses/job-guaranteed-training-for-network-engineers/",
    badge: "Career Assured",
    badgeStyle: "badge-emerald",
    icon: Layers,
    duration: "260 Hours",
    labType: "Physical Cisco Racks",
    certType: "100% Placement",
    features: [
      "1-on-1 CCIE mentorship & mock interviews",
      "Dual-stack routing, switching & wireless"
    ]
  },
  {
    id: "job-cyber-security",
    category: "Job Guarantee",
    categoryId: "job-guarantee",
    title: "Cyber Security Engineer Job Guaranteed Training",
    subtitle: "SOC operations, threat defense, ethical hacking & incident defense.",
    url: "https://www.imedita.com/courses/job-guaranteed-training-for-cyber-security-engineers/",
    badge: "High Demand",
    badgeStyle: "badge-rose",
    icon: Lock,
    duration: "220 Hours",
    labType: "Interactive Cyber Range",
    certType: "SOC Defense Track",
    features: [
      "Red vs. Blue team simulated attack scenarios",
      "Corporate placement cell assistance"
    ]
  },

  // =========================================================================
  // 2. Cisco (8 Cards)
  // =========================================================================
  {
    id: "cisco-ccna",
    category: "Cisco",
    categoryId: "cisco",
    title: "CCNA 200-301",
    subtitle: "Implementing and Administering Cisco Solutions.",
    url: "https://www.imedita.com/courses/ccna-training/",
    badge: "Best Seller",
    badgeStyle: "badge-blue",
    icon: Network,
    duration: "120 Hours",
    labType: "Virtual & Physical Racks",
    certType: "Global Certification",
    features: [
      "CCIE instructor-led interactive sessions",
      "Official passing guarantee preparation"
    ]
  },
  {
    id: "cisco-sd-wan",
    category: "Cisco",
    categoryId: "cisco",
    title: "Cisco SD-WAN (ENSDWI)",
    subtitle: "Designing, Deploying & Managing Cisco SD-WAN Architecture.",
    url: "https://www.imedita.com/courses/sd-wan-training/",
    badge: "Enterprise WAN",
    badgeStyle: "badge-sky",
    icon: Globe,
    duration: "60 Hours",
    labType: "vManage & vEdge Labs",
    certType: "Cisco Specialist",
    features: [
      "vSmart, vBond & vManage provisioning",
      "Zero-Touch Provisioning (ZTP) scenarios"
    ]
  },
  {
    id: "cisco-ccnp-security",
    category: "Cisco",
    categoryId: "cisco",
    title: "CCNP Security",
    subtitle: "Implementing and Operating Cisco Security Core Technologies (SCOR).",
    url: "https://www.imedita.com/courses/ccnp-security-training/",
    badge: "Core Security",
    badgeStyle: "badge-indigo",
    icon: Shield,
    duration: "160 Hours",
    labType: "ASA & FTD Appliances",
    certType: "Professional Track",
    features: [
      "Next-Gen Firewalls & VPN infrastructure",
      "Cisco ISE and endpoint security policies"
    ]
  },
  {
    id: "cisco-svpn",
    category: "Cisco",
    categoryId: "cisco",
    title: "Cisco SVPN Training",
    subtitle: "Implementing Secure Solutions with Virtual Private Networks.",
    url: "https://www.imedita.com/courses/old-vpn-training/",
    badge: "VPN Specialist",
    badgeStyle: "badge-indigo",
    icon: KeyRound,
    duration: "50 Hours",
    labType: "DMVPN & GETVPN Racks",
    certType: "Concentration Exam",
    features: [
      "Site-to-Site & Remote Access IPsec tunnels",
      "Advanced FlexVPN & SSL VPN deployments"
    ]
  },
  {
    id: "cisco-sise",
    category: "Cisco",
    categoryId: "cisco",
    title: "Cisco SISE Training",
    subtitle: "Implementing and Configuring Cisco Identity Services Engine (ISE).",
    url: "https://www.imedita.com/courses/old-cisco-ise-training/",
    badge: "Zero Trust",
    badgeStyle: "badge-blue",
    icon: Fingerprint,
    duration: "60 Hours",
    labType: "ISE 3.x Production Lab",
    certType: "Identity Specialist",
    features: [
      "802.1X policy design, profiling & posture",
      "TrustSec and TACACS+ AAA server deployment"
    ]
  },
  {
    id: "cisco-sd-access",
    category: "Cisco",
    categoryId: "cisco",
    title: "Cisco SD-Access",
    subtitle: "Software-Defined Access with Cisco DNA Center Architecture.",
    url: "https://www.imedita.com/courses/cisco-sda-training/",
    badge: "DNA Fabric",
    badgeStyle: "badge-sky",
    icon: Share2,
    duration: "50 Hours",
    labType: "DNAC & Catalyst 9K",
    certType: "Campus Fabric Track",
    features: [
      "Fabric Border, Control Plane & Edge Node setup",
      "Virtual Networks (VN) and macro segmentation"
    ]
  },
  {
    id: "cisco-ccie-ei",
    category: "Cisco",
    categoryId: "cisco",
    title: "CCIE Enterprise Infrastructure",
    subtitle: "Dual-Stack Complex Core Routing, Switching & Network Automation.",
    url: "https://www.imedita.com/courses/ccie-training/",
    badge: "Expert Level",
    badgeStyle: "badge-indigo",
    icon: Award,
    duration: "200 Hours",
    labType: "CCIE Real Lab Racks",
    certType: "Elite Certification",
    features: [
      "Direct 1-on-1 CCIE #35912 mentorship",
      "8-hour CCIE lab exam simulation scenarios"
    ]
  },
  {
    id: "cisco-ccie-sec",
    category: "Cisco",
    categoryId: "cisco",
    title: "CCIE Security",
    subtitle: "Complex Enterprise Security Architecture & Perimeter Defense.",
    url: "https://www.imedita.com/courses/ccie-security-training/",
    badge: "Master Level",
    badgeStyle: "badge-rose",
    icon: ShieldAlert,
    duration: "200 Hours",
    labType: "Full Security Topology",
    certType: "Elite Security",
    features: [
      "Stealthwatch, WSA, ESA, ISE & FTD labs",
      "Advanced threat defense troubleshooting"
    ]
  },

  // =========================================================================
  // 3. Palo Alto Networks (1 Card)
  // =========================================================================
  {
    id: "palo-alto-firewall",
    category: "Palo Alto",
    categoryId: "palo-alto",
    title: "Palo Alto Firewall (PCNSE)",
    subtitle: "PAN-OS, App-ID, Threat Prevention & GlobalProtect architecture.",
    url: "https://www.imedita.com/courses/palo-alto-firewall-training/",
    badge: "Firewall Mastery",
    badgeStyle: "badge-teal",
    icon: Flame,
    duration: "60 Hours",
    labType: "Physical PAN-OS Racks",
    certType: "PCNSE Global Cert",
    features: [
      "App-ID, User-ID & SSL decryption policies",
      "High Availability (HA) active/passive clustering"
    ]
  },

  // =========================================================================
  // 4. Fortinet (1 Card)
  // =========================================================================
  {
    id: "fortigate-firewall",
    category: "Fortinet",
    categoryId: "fortinet",
    title: "FortiGate Firewall (NSE 4)",
    subtitle: "Enterprise Security Fabric, IPsec VPN & Next-Gen UTM Defense.",
    url: "https://www.imedita.com/courses/fortinet-firewall-training/",
    badge: "Security Fabric",
    badgeStyle: "badge-rose",
    icon: Shield,
    duration: "50 Hours",
    labType: "Physical FortiGate Racks",
    certType: "NSE 4 Certified",
    features: [
      "Antivirus, IPS, Web Filtering & App Control",
      "FortiGate IPsec & SSL VPN client deployments"
    ]
  },

  // =========================================================================
  // 5. Checkpoint (1 Card)
  // =========================================================================
  {
    id: "checkpoint-firewall",
    category: "Checkpoint",
    categoryId: "checkpoint",
    title: "Checkpoint Firewall (CCSA)",
    subtitle: "Deploying and managing Check Point Quantum Gateways R81.x.",
    url: "https://www.imedita.com/courses/checkpoint-firewall-training/",
    badge: "Quantum Defense",
    badgeStyle: "badge-rose",
    icon: Lock,
    duration: "50 Hours",
    labType: "SmartConsole R81.x",
    certType: "CCSA Certified",
    features: [
      "SmartDashboard policy push & cluster XL setup",
      "Security Gateway backup and identity awareness"
    ]
  },

  // =========================================================================
  // 6. EC-Council (1 Card)
  // =========================================================================
  {
    id: "ec-council-cehv13",
    category: "EC-Council",
    categoryId: "ec-council",
    title: "CEHv13 (Ethical Hacking)",
    subtitle: "Certified Ethical Hacker v13 with AI-powered cyber attack labs.",
    url: "https://www.imedita.com/courses/ethical-hacking-training/",
    badge: "Global Standard",
    badgeStyle: "badge-rose",
    icon: Terminal,
    duration: "80 Hours",
    labType: "AI Cyber Range Labs",
    certType: "EC-Council Official",
    features: [
      "Network reconnaissance, exploits & malware analysis",
      "Official exam voucher discount assistance"
    ]
  },

  // =========================================================================
  // 7. F5 Networks (1 Card)
  // =========================================================================
  {
    id: "f5-networks-ltm-dns",
    category: "F5 Networks",
    categoryId: "f5-networks",
    title: "F5 BIG-IP LTM + DNS",
    subtitle: "Application Delivery, Local & Global Traffic Management (GTM).",
    url: "https://www.imedita.com/courses/f5-training/",
    badge: "App Delivery",
    badgeStyle: "badge-blue",
    icon: Server,
    duration: "60 Hours",
    labType: "BIG-IP Virtual Edition",
    certType: "F5 Certified",
    features: [
      "Virtual servers, pool members & health monitors",
      "iRules custom traffic scripting & SSL offloading"
    ]
  },

  // =========================================================================
  // 8. AWS (2 Cards)
  // =========================================================================
  {
    id: "aws-advanced-networking",
    category: "AWS",
    categoryId: "aws",
    title: "AWS Advanced Networking",
    subtitle: "Designing complex enterprise cloud topologies (ANS-C01 Specialty).",
    url: "https://www.imedita.com/courses/old-aws-advanced-networking-specialty/",
    badge: "Specialty Cloud",
    badgeStyle: "badge-sky",
    icon: CloudLightning,
    duration: "80 Hours",
    labType: "AWS Live Console Labs",
    certType: "AWS Specialty",
    features: [
      "Direct Connect, Transit Gateway & Route 53 setup",
      "Hybrid cloud network encryption & security policies"
    ]
  },
  {
    id: "aws-saa",
    category: "AWS",
    categoryId: "aws",
    title: "AWS Solutions Architect (SAA)",
    subtitle: "Resilient, high-performing & scalable cloud infrastructure (SAA-C03).",
    url: "https://www.imedita.com/courses/old-aws-solution-architect-associate-training/",
    badge: "Trending",
    badgeStyle: "badge-sky",
    icon: Cloud,
    duration: "90 Hours",
    labType: "Hands-on VPC Sandbox",
    certType: "Associate Level",
    features: [
      "Multi-tier VPC architecture & Auto Scaling",
      "IAM, S3, RDS & serverless Lambda architectures"
    ]
  },

  // =========================================================================
  // 9. Network Automation (1 Card)
  // =========================================================================
  {
    id: "ansible-network-automation",
    category: "Network Automation",
    categoryId: "network-automation",
    title: "Ansible Network Automation",
    subtitle: "Automating multi-vendor Cisco switch/router configs with Python & Ansible.",
    url: "https://www.imedita.com/courses/ansible-network-automation-training/",
    badge: "NetDevOps",
    badgeStyle: "badge-amber",
    icon: Cpu,
    duration: "60 Hours",
    labType: "Multi-Vendor Automation",
    certType: "DevOps Certified",
    features: [
      "Playbook creation for configuration compliance",
      "REST APIs, NETCONF/YANG & automated backups"
    ]
  }
];

export const categoryFilterTabs = [
  { id: "all", label: "All Programs", count: 19 },
  { id: "Job Guarantee", label: "Job Guarantee", count: 3 },
  { id: "Cisco", label: "Cisco", count: 8 },
  { id: "Palo Alto", label: "Palo Alto", count: 1 },
  { id: "Fortinet", label: "Fortinet", count: 1 },
  { id: "Checkpoint", label: "Checkpoint", count: 1 },
  { id: "EC-Council", label: "EC-Council", count: 1 },
  { id: "F5 Networks", label: "F5 Networks", count: 1 },
  { id: "AWS", label: "AWS", count: 2 },
  { id: "Network Automation", label: "Network Automation", count: 1 }
];

export { liveTrainingCategories };
