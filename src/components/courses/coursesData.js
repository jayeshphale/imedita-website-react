export const originalCategories = [
  { id: "all", label: "All Programs" },
  { id: "job-guaranteed", label: "100% Job Guaranteed Programs" },
  { id: "network-security", label: "Network Security Programs" },
  { id: "trending", label: "Popular Trending Courses" }
];

export const originalCoursesData = [
  // 100% Job Guaranteed Programs
  {
    id: "job-guarantee-network",
    category: "job-guaranteed",
    track: "Job Guarantee",
    mode: "Classroom / Online",
    title: "Multi-Track Job Guaranteed Training for Network Engineers",
    desc: "Rigorous job guarantee program covering enterprise routing, switching, multi-vendor labs, and placement drives.",
    image: "/assets/courses/job-guaranteed-network.svg",
    features: [
      "100% Written Placement Guarantee",
      "Unlimited Physical Cisco Rack Practice",
      "Resume Sculpting & Mock HR / Technical Drills"
    ],
    duration: "4 - 6 Months",
    href: "https://www.imedita.com/courses/job-guaranteed-training-for-network-engineers/"
  },
  {
    id: "job-guarantee-cyber-security",
    category: "job-guaranteed",
    track: "Job Guarantee",
    mode: "Classroom / Online",
    title: "Multi-Track Job Guaranteed Training with Cyber Security",
    desc: "Comprehensive dual-domain curriculum combining core networking with next-generation firewall engineering.",
    image: "/assets/courses/job-guaranteed-cyber.svg",
    features: [
      "Palo Alto & Check Point Gateway Labs",
      "Direct Corporate Placement Interviews",
      "Senior CCIE Security Mentor Allocation"
    ],
    duration: "6 Months",
    href: "https://www.imedita.com/courses/job-guaranteed-training-for-cyber-security-engineers/"
  },
  {
    id: "job-guarantee-multi-vendor",
    category: "job-guaranteed",
    track: "Job Guarantee",
    mode: "Classroom / Online",
    title: "Multi-Vendor Job Guaranteed Training for Security Engineers",
    desc: "Deep-dive specialization across enterprise perimeter defense, policy deployments, and high-availability clusters.",
    image: "/assets/courses/job-guaranteed-multivendor.svg",
    features: [
      "Multi-Vendor Firewalls Hands-on",
      "Live Production Topology Scenarios",
      "Interview Clear Guarantee"
    ],
    duration: "5 Months",
    href: "https://www.imedita.com/courses/multi-vendor-training/"
  },

  // Popular Network Security Programs
  {
    id: "multi-vendor-firewall",
    category: "network-security",
    track: "Security",
    mode: "Live Interactive",
    title: "Multi Vendor Firewall Training",
    desc: "Hands-on mastery over Cisco ASA/FTD, Palo Alto Networks, Fortinet, and Check Point Quantum firewalls.",
    image: "/assets/courses/multivendor-firewall.svg",
    features: [
      "Real Physical Appliance Debugging",
      "VPN, App-ID & NAT Rule Design",
      "Multi-Platform Packet Tracing"
    ],
    duration: "80 Hours",
    href: "https://www.imedita.com/courses/multi-vendor-training/"
  },
  {
    id: "palo-alto-training",
    category: "network-security",
    track: "Security",
    mode: "Classroom / Online",
    title: "Palo Alto Firewall Training (PCNSA / PCNSE)",
    desc: "Configuration and administration of PAN-OS next-gen firewalls, Panorama centralization, and threat prevention.",
    image: "/assets/courses/palo-alto-pcnse.svg",
    features: [
      "PA-400 Dedicated Hardware Pods",
      "Official PCNSE Exam Prep",
      "SSL Decryption & Threat Profiles"
    ],
    duration: "45 Hours",
    href: "https://www.imedita.com/courses/palo-alto-firewall-training/"
  },
  {
    id: "checkpoint-training",
    category: "network-security",
    track: "Security",
    mode: "Live Interactive",
    title: "Checkpoint Firewall Training (CCSA / CCSE)",
    desc: "Enterprise gateway deployment, SmartConsole policy control, ClusterXL high availability, and IPsec VPNs.",
    image: "/assets/courses/checkpoint-ccse.svg",
    features: [
      "Quantum Gateway Topologies",
      "Gaia OS Kernel Debugging",
      "Official CCSE Curriculum"
    ],
    duration: "40 Hours",
    href: "https://www.imedita.com/courses/checkpoint-firewall-training/"
  },
  {
    id: "fortinet-training",
    category: "network-security",
    track: "Security",
    mode: "Live Interactive",
    title: "Fortinet Firewall Training (FCNSA / FCNSP)",
    desc: "FortiGate Next-Generation Firewall configuration, FortiOS operations, fabric connectors, and SD-WAN.",
    image: "/assets/courses/fortinet-nse.svg",
    features: [
      "FortiOS Real Device Labs",
      "Secure SD-WAN Configuration",
      "Network Security Expert Track"
    ],
    duration: "40 Hours",
    href: "https://www.imedita.com/courses/fortinet-firewall-training/"
  },
  {
    id: "cisco-asa-training",
    category: "network-security",
    track: "Security",
    mode: "Classroom / Online",
    title: "Cisco ASA Firewall Training",
    desc: "Deep packet inspection, modular policy framework (MPF), AnyConnect Remote Access VPN, and Failover pairs.",
    image: "/assets/courses/cisco-asa.svg",
    features: [
      "Cisco 5500-X Appliance Lab Access",
      "CLI & ASDM Interface Deep-Dives",
      "Site-to-Site & RA VPN Design"
    ],
    duration: "35 Hours",
    href: "https://www.imedita.com/courses/cisco-asa-firewall-training/"
  },
  {
    id: "cisco-ftd-training",
    category: "network-security",
    track: "Security",
    mode: "Classroom / Online",
    title: "Cisco FTD Firewall Training",
    desc: "Firepower Threat Defense (FTD) management via FMC, Snort IPS rules, pre-filter policies, and URL filtering.",
    image: "/assets/courses/cisco-ftd.svg",
    features: [
      "Firepower Management Center Labs",
      "Advanced Malware Protection (AMP)",
      "Next-Gen Intrusion Prevention"
    ],
    duration: "40 Hours",
    href: "https://www.imedita.com/courses/cisco-firepower-training/"
  },
  {
    id: "ceh-training",
    category: "network-security",
    track: "Security",
    mode: "Classroom / Online",
    title: "CEH Certified Ethical Hacker Training",
    desc: "Offensive ethical hacking methodology, vulnerability scanning, social engineering, and network attack analysis.",
    image: "/assets/courses/ceh-ethical-hacking.svg",
    features: [
      "EC-Council Authorized Curriculum",
      "Simulated Cyber Attack Labs",
      "Exam Preparation & Vouchers"
    ],
    duration: "45 Hours",
    href: "https://www.imedita.com/courses/ethical-hacking-training/"
  },

  // Popular Trending Courses
  {
    id: "cisco-ccna",
    category: "trending",
    track: "Enterprise",
    mode: "Classroom / Online",
    title: "Cisco CCNA Certification Training",
    desc: "Foundational enterprise infrastructure, IPv4/IPv6 subnetting, VLANs, OSPF, and network automation basics.",
    image: "/assets/courses/ccna-200-301.svg",
    features: [
      "Real Catalyst Switches & Routers",
      "CCIE Instructor Mentorship",
      "Global Exam Code 200-301 Focus"
    ],
    duration: "60 Hours",
    href: "https://www.imedita.com/courses/ccna-training/"
  },
  {
    id: "cisco-ccnp-enterprise",
    category: "trending",
    track: "Enterprise",
    mode: "Classroom / Online",
    title: "Cisco CCNP Enterprise Certification Training",
    desc: "Dual-stack enterprise core routing (ENCOR 350-401) and advanced routing specialization (ENARSI 300-410).",
    image: "/assets/courses/ccnp-enterprise.svg",
    features: [
      "ISR 4000 & 9300 Hardware Labs",
      "BGP, MPLS & Segment Routing",
      "Placement Support Included"
    ],
    duration: "120 Hours",
    href: "https://www.imedita.com/courses/ccnp-training/"
  },
  {
    id: "cisco-ccie-enterprise",
    category: "trending",
    track: "Enterprise",
    mode: "Classroom / Online",
    title: "Cisco CCIE Enterprise Certification Training",
    desc: "Comprehensive lab preparation for CCIE Enterprise Infrastructure (EI), complex topologies, and automation.",
    image: "/assets/courses/ccie-enterprise.svg",
    features: [
      "Trained by Triple CCIE Instructors",
      "24/7 Dedicated Server Rack Pods",
      "Full 8-Hour Mock Lab Drills"
    ],
    duration: "180 Hours",
    href: "https://www.imedita.com/courses/ccie-training/"
  },
  {
    id: "cisco-sdwan-trending",
    category: "trending",
    track: "Enterprise",
    mode: "Live Interactive",
    title: "Cisco SD-WAN Certification Training",
    desc: "Architecture and operations of vManage, vSmart, vBond controllers, and secure overlay routing.",
    image: "/assets/courses/cisco-sdwan.svg",
    features: [
      "Complete Controller Setup Labs",
      "Application-Aware Routing Policies",
      "Exam 300-415 ENSDWI Prep"
    ],
    duration: "40 Hours",
    href: "https://www.imedita.com/courses/sd-wan-training/"
  },
  {
    id: "cisco-sda-training",
    category: "trending",
    track: "Enterprise",
    mode: "Classroom / Online",
    title: "Cisco SD-Access Training",
    desc: "Software-Defined Access deployment with Cisco DNA Center, identity services engine (ISE), and fabric switches.",
    image: "/assets/courses/cisco-sdaccess.svg",
    features: [
      "Cisco DNA Center Architecture",
      "Fabric Edge & Border Node Labs",
      "Zero-Trust Segmentation"
    ],
    duration: "40 Hours",
    href: "https://www.imedita.com/courses/cisco-sda-training/"
  },
  {
    id: "aws-training-trending",
    category: "trending",
    track: "Cloud Architect",
    mode: "Classroom / Online",
    title: "AWS Certification Training (Solutions Architect)",
    desc: "Designing resilient, high-performing, secure, and cost-optimized multi-tier enterprise cloud infrastructures.",
    image: "/assets/courses/aws-solutions-architect.svg",
    features: [
      "Enterprise VPC Architecture",
      "EC2, S3, RDS, IAM & Auto-Scaling",
      "Official Exam Preparation"
    ],
    duration: "50 Hours",
    href: "https://www.imedita.com/courses/aws-solution-architect-associate-training/"
  },
  {
    id: "f5-training-trending",
    category: "trending",
    track: "Load Balancing",
    mode: "Live Interactive",
    title: "F5 Load Balancer Certification Training",
    desc: "F5 BIG-IP Local Traffic Manager (LTM) & DNS setup, virtual servers, pools, and SSL acceleration.",
    image: "/assets/courses/f5-load-balancer.svg",
    features: [
      "BIG-IP Virtual Edition Labs",
      "High Availability & Sync-Failover",
      "iRules Scripting Fundamentals"
    ],
    duration: "40 Hours",
    href: "https://www.imedita.com/courses/f5-training/"
  }
];
