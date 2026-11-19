/**
 * I-Medita Editorial Journal Dataset (Chronological Feed)
 * Authentic published guides, enterprise architecture blueprints, and career resources.
 * Strictly verified titles, publication dates, author credentials, and URLs.
 */

export const EDITORIAL_ARTICLES = [
  // ================= NOVEMBER 2026 =================
  {
    id: 'aws-certification-cost-2026',
    month: 'NOV',
    day: '19',
    year: '2026',
    fullDate: '19 Nov 2026',
    monthGroup: 'November 2026',
    category: 'Cloud Computing & AWS',
    badgeColor: 'blue',
    title: 'AWS Certification Cost in 2026: Complete Exam Fee & India Taxes Guide',
    excerpt: 'The definitive breakdown of official AWS exam registration fees ($100–$300), Indian 18% GST calculation, retake policies, and interactive cost roadmap from CCIE & AWS architects.',
    image: 'https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/03/10071323/AWS-Certification-Cost-AWS-Certification-Price_-300x139.webp',
    readTime: '12 min read',
    author: {
      name: 'Saurabh Yadav',
      credential: 'Triple CCIE #46962 & Enterprise Networking Lead',
      image: 'https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/12/10071401/Saurabh-Yadav-imedita.svg'
    },
    url: '/blog/aws-certification-cost/',
    isInternal: true,
    variant: 'featured-large',
    featuredBadge: 'Featured Architecture Guide',
    highlights: [
      'Standardized USD exam tiers: Foundational ($100), Associate ($150), Pro ($300)',
      'Accurate INR conversion with 18% GST and forex surcharge breakdowns',
      'Official AWS 50% discount benefit deposits upon passing any certification'
    ]
  },
  {
    id: 'cisco-sdwan-design',
    month: 'NOV',
    day: '14',
    year: '2026',
    fullDate: '14 Nov 2026',
    monthGroup: 'November 2026',
    category: 'Enterprise Networking',
    badgeColor: 'sky',
    title: 'Architecting Zero-Downtime Cisco SD-WAN Across Dual-ISP & MPLS Overlays',
    excerpt: 'Production walkthrough of BFD template probes, color-binding fallbacks, and Application-Aware Routing (AAR) policies for enterprise datacenter failover without VoIP connection drops.',
    image: 'https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/06/10071301/imedita_71.jpg',
    readTime: '11 min read',
    author: {
      name: 'Saurabh Yadav',
      credential: 'Triple CCIE #46962',
      image: 'https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/12/10071401/Saurabh-Yadav-imedita.svg'
    },
    url: 'https://www.imedita.com/blog/cisco-sd-wan-architecture-design/',
    isInternal: false,
    variant: 'split-horizontal',
    highlights: [
      'BFD echo probes configured with 100ms multiplier for sub-second failover',
      'Color-binding fallbacks preventing mission-critical VoIP drops during brownouts'
    ]
  },
  {
    id: 'palo-alto-certification-cost',
    month: 'NOV',
    day: '08',
    year: '2026',
    fullDate: '08 Nov 2026',
    monthGroup: 'November 2026',
    category: 'Cybersecurity & Firewalls',
    badgeColor: 'red',
    title: 'Palo Alto Certification Cost: PCNSA & PCNSE Examination Guide',
    excerpt: 'Understand official Pearson VUE voucher fees ($155–$175), syllabus prerequisites, recertification rules, and practical lab tips for physical PA-400 enterprise firewalls.',
    image: 'https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/03/10071324/Palo-Alto-Certification-Cost-PCNSA-PCNSE-300x139.webp',
    readTime: '6 min read',
    author: {
      name: 'Baldev Singh',
      credential: 'CCIE Security #37094',
      image: 'https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/01/10071335/Baldev-Singh-imedita-3-1.svg'
    },
    url: 'https://www.imedita.com/blog/palo-alto-certification-cost/',
    isInternal: false,
    variant: 'compact-horizontal'
  },
  {
    id: 'palo-alto-pcnse-blueprint',
    month: 'NOV',
    day: '02',
    year: '2026',
    fullDate: '02 Nov 2026',
    monthGroup: 'November 2026',
    category: 'Cloud Security',
    badgeColor: 'purple',
    title: 'Palo Alto PCNSE Blueprint: Mastering App-ID & Inbound SSL Decryption',
    excerpt: '“Decryption is non-negotiable in modern zero-trust perimeters. Over 85% of enterprise threat traffic conceals inside encrypted TLS tunnels. Here is how to inspect outbound traffic safely.”',
    readTime: '8 min read',
    author: {
      name: 'Baldev Singh',
      credential: 'CCIE Security #37094',
      image: 'https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/01/10071335/Baldev-Singh-imedita-3-1.svg'
    },
    url: 'https://www.imedita.com/blog/palo-alto-pcnse-preparation-guide/',
    isInternal: false,
    variant: 'text-focused',
    quoteAuthor: 'Baldev Singh, CCIE Security #37094'
  },

  // ================= OCTOBER 2026 =================
  {
    id: 'aws-transit-peering',
    month: 'OCT',
    day: '28',
    year: '2026',
    fullDate: '28 Oct 2026',
    monthGroup: 'October 2026',
    category: 'Cloud Infrastructure',
    badgeColor: 'indigo',
    title: 'AWS Transit Gateway & Direct Connect: Multi-Account BGP Peering',
    excerpt: 'Designing enterprise BGP peering between on-premise Cisco ASR routers and AWS Transit Gateways across multiple active Availability Zones with automated IPSec failovers.',
    image: 'https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/06/10071302/imedita_66.jpg',
    readTime: '10 min read',
    author: {
      name: 'Sudhanshu Bhat',
      credential: 'CCIE #41212 & AWS Solutions Arch',
      image: 'https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/12/10071359/Sudhanshu-Bhat-imedita.svg'
    },
    url: 'https://www.imedita.com/blog/aws-transit-gateway-vpc-peering/',
    isInternal: false,
    variant: 'split-horizontal-reverse',
    highlights: [
      'Redundant 10G Direct Connect circuits with BGP path prepending',
      'Transit Gateway route table propagation across production and shared services'
    ]
  },
  {
    id: 'f5-certification-cost',
    month: 'OCT',
    day: '22',
    year: '2026',
    fullDate: '22 Oct 2026',
    monthGroup: 'October 2026',
    category: 'Application Delivery & DNS',
    badgeColor: 'emerald',
    title: 'Discover F5 Certification Cost: BIG-IP LTM & DNS Blueprint Guide',
    excerpt: 'Comprehensive breakdown of F5 exam tiers (Exam 101, 201, 301A/B), official voucher costs ($135–$180), and career progression for Application Delivery Controllers.',
    image: 'https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/03/10071324/F5-Certification-Cost-300x139.webp',
    readTime: '5 min read',
    author: {
      name: 'Sudhanshu Bhat',
      credential: 'CCIE #41212 & AWS Solutions Arch',
      image: 'https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/12/10071359/Sudhanshu-Bhat-imedita.svg'
    },
    url: 'https://www.imedita.com/blog/f5-certification-cost/',
    isInternal: false,
    variant: 'compact-horizontal'
  },
  {
    id: 'career-salary-roadmap',
    month: 'OCT',
    day: '15',
    year: '2026',
    fullDate: '15 Oct 2026',
    monthGroup: 'October 2026',
    category: 'Career Guidance & Salary',
    badgeColor: 'amber',
    title: 'How to Land a ₹6–10 LPA Network & Cloud Role as a Fresher in India',
    excerpt: 'A milestone-by-milestone playbook: clearing CCNA, building physical hardware lab topologies, crafting high-impact resumes, and cracking NOC technical interviews.',
    image: 'https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/06/10071301/imedita_69.jpg',
    readTime: '7 min read',
    author: {
      name: 'Saurabh Yadav',
      credential: 'Triple CCIE #46962',
      image: 'https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/12/10071401/Saurabh-Yadav-imedita.svg'
    },
    url: 'https://www.imedita.com/blog/network-engineer-salary-in-india/',
    isInternal: false,
    variant: 'featured-large',
    featuredBadge: 'Career Roadmap & Salary Report',
    highlights: [
      'Core lab topologies that impress enterprise interviewers (OSPF, BGP, NAT, ACLs)',
      'Step-by-step interview strategy for clearing L1/L2 NOC and Systems rounds'
    ]
  },
  {
    id: 'ccna-v1-1-blueprint',
    month: 'OCT',
    day: '05',
    year: '2026',
    fullDate: '05 Oct 2026',
    monthGroup: 'October 2026',
    category: 'Cisco Certifications',
    badgeColor: 'sky',
    title: 'New CCNA 200-301 v1.1 Blueprint: AI & Cloud Management Deep-Dive',
    excerpt: 'A complete technical breakdown of the latest official Cisco blueprint updates, covering Generative AI in network operations, REST APIs, and cloud controller architectures.',
    image: '/career-roadmap.webp',
    readTime: '9 min read',
    author: {
      name: 'Saurabh Yadav',
      credential: 'Triple CCIE #46962',
      image: 'https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/12/10071401/Saurabh-Yadav-imedita.svg'
    },
    url: 'https://www.imedita.com/blog/cisco-ccna-200-301-syllabus-changes/',
    isInternal: false,
    variant: 'split-horizontal'
  },

  // ================= SEPTEMBER 2026 =================
  {
    id: 'top-ccna-interview-questions',
    month: 'SEP',
    day: '25',
    year: '2026',
    fullDate: '25 Sep 2026',
    monthGroup: 'September 2026',
    category: 'Interview Preparation',
    badgeColor: 'emerald',
    title: 'Top 50 Cisco CCNA Interview Questions & Scenario-Based Solutions',
    excerpt: 'High-frequency interview questions covering VLSM subnetting, OSPF states, VLAN hopping prevention, STP root elections, and NAT overload troubleshooting.',
    image: '/instructors.webp',
    readTime: '14 min read',
    author: {
      name: 'Surendra Singh',
      credential: 'Triple CCIE #52981',
      image: 'https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/12/10071401/Saurabh-Yadav-imedita.svg'
    },
    url: 'https://imedita.com/blog/top-ccna-interview-questions/',
    isInternal: false,
    variant: 'compact-horizontal'
  },
  {
    id: 'top-ccnp-interview-questions',
    month: 'SEP',
    day: '12',
    year: '2026',
    fullDate: '12 Sep 2026',
    monthGroup: 'September 2026',
    category: 'Interview Preparation',
    badgeColor: 'purple',
    title: 'Mastering CCNP Enterprise & Security Technical Interview Scenarios',
    excerpt: '“In senior enterprise rounds, interviewers don’t ask for textbook definitions. They present a multi-homed BGP routing blackhole or stateful firewall packet drop and ask: where does your ping stop?”',
    readTime: '12 min read',
    author: {
      name: 'Baldev Singh',
      credential: 'CCIE Security #37094',
      image: 'https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/01/10071335/Baldev-Singh-imedita-3-1.svg'
    },
    url: 'https://imedita.com/blog/top-ccnp-interview-questions-guide/',
    isInternal: false,
    variant: 'text-focused',
    quoteAuthor: 'Baldev Singh, CCIE Security #37094'
  }
];

export const EDITORIAL_CATEGORIES = [
  'All Insights',
  'Cloud Computing & AWS',
  'Enterprise Networking',
  'Cybersecurity & Firewalls',
  'Interview Preparation',
  'Career Guidance & Salary'
];
