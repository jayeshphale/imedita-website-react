import React, { useState, useEffect } from 'react';
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
  Code,
  GitBranch,
  Box,
  TrendingUp,
  Coins,
  Check,
  X,
  Laptop,
  Flame,
  Globe,
  Radio,
  Share2,
  KeyRound,
  Fingerprint
} from 'lucide-react';
import styles from './CCNAAutomationCoursePage.module.css';

// ---------------------------------------------------------------------------
// DATA: SECTION 3 - CURRICULUM HIGHLIGHTS (10 CORE PILLARS)
// ---------------------------------------------------------------------------
const curriculumPillars = [
  {
    icon: Code,
    title: 'Python Programming',
    desc: 'Build a strong foundation in Python for network automation and API development.'
  },
  {
    icon: Globe,
    title: 'REST APIs & API Integration',
    desc: 'Learn REST APIs, HTTP, JSON, Postman, and API authentication to automate Cisco platforms.'
  },
  {
    icon: Network,
    title: 'Cisco Platform APIs',
    desc: 'Work with Cisco DNA Center, Meraki, Webex, UCS, SD-WAN, and other Cisco APIs.'
  },
  {
    icon: Terminal,
    title: 'Network Automation',
    desc: 'Automate network configuration, monitoring, and management using Python and Cisco APIs.'
  },
  {
    icon: Layers,
    title: 'Infrastructure as Code',
    desc: 'Learn Ansible, YAML, Jinja2 templates, and Infrastructure as Code (IaC) concepts.'
  },
  {
    icon: GitBranch,
    title: 'Software Development',
    desc: 'Understand Git, version control, software architecture, design patterns, and development workflows.'
  },
  {
    icon: Box,
    title: 'DevOps & Containers',
    desc: 'Learn Docker, CI/CD fundamentals, Bash scripting, and application deployment concepts.'
  },
  {
    icon: Shield,
    title: 'Security & Authentication',
    desc: 'Implement secure API authentication, application security, encryption, and OWASP best practices.'
  },
  {
    icon: Cpu,
    title: 'Cisco Model-Driven Programmability',
    desc: 'Configure and automate networks using NETCONF, RESTCONF, YANG models, and Cisco SDKs.'
  },
  {
    icon: Server,
    title: 'Real-World Automation Labs',
    desc: 'Build enterprise automation projects using Python, Cisco APIs, Ansible, Docker, Git, and Postman.'
  }
];

// ---------------------------------------------------------------------------
// DATA: SECTION 4 - DEVNET LEARNING ROADMAP (5 STAGES)
// ---------------------------------------------------------------------------
const learningStages = [
  {
    iconKey: 'book',
    Icon: BookOpen,
    label: 'Learn Concepts',
    tag: 'Live Training',
    tagBg: '#EFF6FF',
    tagC: '#1565C0',
    title: 'Learn CCNA Automation concepts',
    desc: 'Live instructor-led sessions covering the complete Cisco CCNA Automation (200-901 CCNAAUTO) curriculum, including Python, APIs, automation, and Cisco platform programmability.',
    pts: [
      'Complete Cisco CCNA Automation syllabus coverage',
      'Weekday (Mon–Thu) and weekend (Sat–Sun) batches available',
      'All sessions are recorded and accessible through our learning portal and mobile app'
    ]
  },
  {
    iconKey: 'server',
    Icon: Server,
    label: 'Real Labs',
    tag: 'Hands-on Labs',
    tagBg: '#F0FDF4',
    tagC: '#15803D',
    title: 'Practice in real automation labs',
    desc: 'Gain hands-on experience using Postman, Python, Git, and Cisco platform APIs to build real automation solutions.',
    pts: [
      'Practice with Cisco APIs and automation tools',
      '24×7 access to automation lab environment',
      'Dedicated trainers for lab support and guidance'
    ]
  },
  {
    iconKey: 'clipboard',
    Icon: FileText,
    label: 'Assignments',
    tag: 'Applied Learning',
    tagBg: '#FFFBEB',
    tagC: '#B45309',
    title: 'Projects & automation assignments',
    desc: 'Build real-world automation projects using Python and REST APIs to strengthen your practical CCNA Automation skills.',
    pts: [
      'API integration projects',
      'Network automation workflows',
      'Enterprise automation use cases'
    ]
  },
  {
    iconKey: 'mic',
    Icon: Users,
    label: 'Mock Interviews',
    tag: 'Interview Prep',
    tagBg: '#FEF2F2',
    tagC: '#B91C1C',
    title: 'Mock interviews',
    desc: 'Prepare for network automation careers with technical mock interviews, resume reviews, and personalized feedback from industry experts.',
    pts: [
      'Technical & HR mock interviews',
      'Resume optimization for network automation roles',
      'LinkedIn profile guidance'
    ]
  },
  {
    iconKey: 'award',
    Icon: Award,
    label: 'Certification',
    tag: 'Certification Ready',
    tagBg: '#F0FDF4',
    tagC: '#15803D',
    title: 'Certification & placement',
    desc: 'Prepare for the Cisco CCNA Automation (200-901 CCNAAUTO) certification exam while receiving an I-Medita course completion certificate and placement support.',
    pts: [
      'Prepare for the Cisco 200-901 CCNAAUTO exam',
      'Receive an I-Medita course completion certificate',
      'Access placement opportunities through our hiring partner network'
    ]
  }
];

// ---------------------------------------------------------------------------
// DATA: SECTION 5 - FULL 9 MODULES SYLLABUS
// ---------------------------------------------------------------------------
const fullSyllabusModules = [
  {
    id: 'mod-1',
    number: 'Module 01',
    title: 'Python Programming & Software Development',
    duration: '10 Hours',
    topics: [
      'Python fundamentals for network automation',
      'Data structures, functions, modules & OOP',
      'XML, JSON & YAML data formats',
      'Software development lifecycle & Agile',
      'Git & Version Control (Clone, Commit, Branch, Merge)',
      'Software architecture & design patterns'
    ]
  },
  {
    id: 'mod-2',
    number: 'Module 02',
    title: 'REST APIs & HTTP',
    duration: '8 Hours',
    topics: [
      'REST API fundamentals',
      'HTTP methods & response codes',
      'API authentication (Basic, Token & API Keys)',
      'JSON request & response handling',
      'API testing with Postman',
      'Python Requests library & Webhooks'
    ]
  },
  {
    id: 'mod-3',
    number: 'Module 03',
    title: 'Cisco Platforms & APIs',
    duration: '8 Hours',
    topics: [
      'Cisco DNA Center APIs',
      'Cisco Meraki Dashboard APIs',
      'Cisco SD-WAN & NSO',
      'Cisco UCS & Intersight APIs',
      'Cisco Webex Collaboration APIs',
      'Cisco Security Platform APIs'
    ]
  },
  {
    id: 'mod-4',
    number: 'Module 04',
    title: 'Network Fundamentals',
    duration: '6 Hours',
    topics: [
      'TCP/IP, IPv4 & IPv6 basics',
      'Switching & Routing concepts',
      'VLANs & MAC addressing',
      'DHCP, DNS, NAT & SNMP',
      'Network topology interpretation',
      'Network troubleshooting fundamentals'
    ]
  },
  {
    id: 'mod-5',
    number: 'Module 05',
    title: 'Network Automation & Programmability',
    duration: '8 Hours',
    topics: [
      'Python automation scripting',
      'Cisco SDKs',
      'NETCONF & RESTCONF',
      'YANG data models',
      'Model-driven programmability',
      'Infrastructure automation workflows'
    ]
  },
  {
    id: 'mod-6',
    number: 'Module 06',
    title: 'Infrastructure as Code & DevOps',
    duration: '6 Hours',
    topics: [
      'Ansible fundamentals',
      'YAML & Jinja2 Templates',
      'Infrastructure as Code (IaC)',
      'CI/CD pipelines',
      'Bash scripting',
      'Automation best practices'
    ]
  },
  {
    id: 'mod-7',
    number: 'Module 07',
    title: 'Application Deployment & Security',
    duration: '6 Hours',
    topics: [
      'Docker & containerization',
      'Dockerfile creation',
      'Virtual Machines & Cloud deployment models',
      'API & application security',
      'OWASP Top 10',
      'Secure application development'
    ]
  },
  {
    id: 'mod-8',
    number: 'Module 08',
    title: 'Hands-on Automation Labs',
    duration: '10 Hours',
    topics: [
      'Python API scripting',
      'Cisco Controller APIs',
      'Cisco Webex API',
      'Cisco SDK automation',
      'Docker & Git labs',
      'Infrastructure automation projects'
    ]
  },
  {
    id: 'mod-9',
    number: 'Module 09',
    title: 'Certification & Enterprise Projects',
    duration: '8 Hours',
    topics: [
      'Enterprise automation projects',
      'DevNet Associate mock tests',
      'Interview preparation',
      'Resume & LinkedIn optimization',
      'Cisco 200-901 DEVASC exam guidance',
      'Placement assistance'
    ]
  }
];

// ---------------------------------------------------------------------------
// DATA: SECTION 6 - LAB TOPICS & ENVIRONMENT
// ---------------------------------------------------------------------------
const labEnvironmentPoints = [
  '24×7 access to automation lab environment',
  'Python development environment with virtualenvs',
  'Cisco Meraki Dashboard APIs',
  'Cisco Webex Collaboration APIs',
  'Postman API testing & debugging suite',
  'Git & GitHub version control workflows',
  'REST API testing & packet tracing tools',
  'Structured, module-wise lab exercises',
  'Dedicated lab trainers for one-to-one mentoring'
];

const labTopicsList = [
  'Python programming for network automation',
  'REST API development & integration',
  'HTTP requests, JSON, XML & YAML parsing',
  'API authentication & Postman collections',
  'Cisco Meraki & Webex APIs automation',
  'Git version control & peer branch reviews',
  'NETCONF, RESTCONF & YANG models',
  'Infrastructure as Code with Ansible playbooks',
  'Docker & container-based application deployment',
  'CI/CD pipeline workflow automation',
  'Network topology & packet troubleshooting',
  'Enterprise controller automation workflows',
  'Real-world CCNA Automation capstone projects'
];

// ---------------------------------------------------------------------------
// DATA: SECTION 7 - COURSE FEATURES (10 ITEMS)
// ---------------------------------------------------------------------------
const courseFeaturesData = [
  { label: 'Total Duration', primary: '60+ Hrs', secondary: '2–3 Months' },
  { label: 'Batches', primary: 'Weekday (Mon–Thu)', secondary: 'Weekend (Sat–Sun)' },
  { label: 'Lab Access', primary: 'Automation Labs', secondary: '24×7 Access' },
  { label: 'Training Mode', primary: 'Classroom & Online', secondary: 'Pune Campus / Live Virtual' },
  { label: 'Language', primary: 'English & Hindi', secondary: 'Bilingual Delivery' },
  { label: 'Certification', primary: 'CCNA Automation', secondary: '+ I-Medita Certificate' },
  { label: 'Interview Prep', primary: 'Mock Interviews', secondary: '& Q&A Sessions' },
  { label: 'Students Enrolled', primary: '2,189+ Students', secondary: 'Trained & Certified' },
  { label: 'Trainers', primary: 'CCIE-Certified', secondary: 'Learn from Experts' },
  { label: 'Lab Support', primary: 'Dedicated Support', secondary: 'One-to-One Mentoring' }
];

// ---------------------------------------------------------------------------
// DATA: SECTION 8 - REAL DEV ENVIRONMENT (4 PILLARS)
// ---------------------------------------------------------------------------
const devEnvironmentPillars = [
  {
    title: 'Development Tools',
    icon: Code,
    desc: 'Python, Git, GitHub, Postman, Docker, Bash, Visual Studio Code, and REST API development tools.'
  },
  {
    title: 'Cisco Platforms',
    icon: Network,
    desc: 'Cisco DNA Center, Cisco Meraki, Cisco Webex, Cisco UCS, Cisco SD-WAN, Cisco NSO, and Cisco Intersight APIs.'
  },
  {
    title: 'Automation Technologies',
    icon: Cpu,
    desc: 'NETCONF, RESTCONF, YANG, Cisco SDKs, Ansible, Infrastructure as Code (IaC), and CI/CD workflows.'
  },
  {
    title: 'Enterprise Lab Environment',
    icon: Server,
    desc: 'API testing labs, Python automation projects, Docker-based development, and real-world enterprise automation scenarios.'
  }
];

// ---------------------------------------------------------------------------
// DATA: SECTION 9 - PLACEMENT & ROLES
// ---------------------------------------------------------------------------
const placementSupportPillars = [
  {
    title: 'Resume Building',
    desc: 'One-on-one resume reviews tailored for networking, automation, and IT infrastructure roles.'
  },
  {
    title: 'Mock Interviews',
    desc: 'Rigorous technical and HR mock interviews based on real corporate recruitment processes.'
  },
  {
    title: 'Job Referrals',
    desc: 'Direct placement assistance through our extensive network of 250+ hiring partners across India.'
  },
  {
    title: 'Career Counseling',
    desc: 'Personalized 1-on-1 guidance for CCNP Automation, CCIE, and advanced DevOps career paths.'
  }
];

const potentialRoles = [
  'Network Automation Engineer',
  'DevOps Engineer',
  'Software Developer (Networking)',
  'Cloud Network Engineer',
  'Infrastructure Automation Engineer',
  'Solutions Architect',
  'Network Security Automation Engineer',
  'Technical Consultant'
];

// ---------------------------------------------------------------------------
// DATA: SECTION 11 - HEAD-TO-HEAD COMPARISON (12 FEATURES)
// ---------------------------------------------------------------------------
const comparisonFeatures = [
  {
    feature: 'Trainer Expertise',
    imedita: 'CCIE-Certified Trainers',
    others: 'General Networking Trainers'
  },
  {
    feature: 'Curriculum',
    imedita: 'Latest Cisco CCNA Automation (200-901 CCNAAUTO)',
    others: 'Often outdated or incomplete'
  },
  {
    feature: 'Hands-on Labs',
    imedita: 'Real Automation & Enterprise Labs',
    others: 'Limited practical exposure'
  },
  {
    feature: 'Programming Skills',
    imedita: 'Python, REST APIs & Automation',
    others: 'Basic or limited coverage'
  },
  {
    feature: 'Cisco Platforms',
    imedita: 'Meraki, Webex & Cisco Platform APIs',
    others: 'Limited platform exposure'
  },
  {
    feature: 'Automation Tools',
    imedita: 'Git, Postman & API Development Tools',
    others: 'Rarely included'
  },
  {
    feature: 'Projects',
    imedita: 'Real-world Network Automation Projects',
    others: 'Basic assignments'
  },
  {
    feature: 'Lab Support',
    imedita: 'Dedicated Automation Lab Mentors',
    others: 'Limited assistance'
  },
  {
    feature: 'Study Material',
    imedita: 'Digital Notes, Workbooks & Lab Guides',
    others: 'Notes/PDFs only'
  },
  {
    feature: 'Placement Support',
    imedita: 'Resume, Mock Interviews & Job Assistance',
    others: 'Basic career guidance'
  },
  {
    feature: 'Learning Access',
    imedita: 'Recorded Sessions + Learning Portal',
    others: 'Limited access'
  },
  {
    feature: 'Demo Session',
    imedita: 'FREE Live Demo Class',
    others: 'Limited or unavailable'
  }
];

// ---------------------------------------------------------------------------
// DATA: SECTION 13 - FAQS (7 CATEGORIES)
// ---------------------------------------------------------------------------
const faqCategories = [
  { id: 'all', label: 'All FAQs' },
  { id: 'training', label: 'Training Specific' },
  { id: 'mode', label: 'Time & Mode' },
  { id: 'prereq', label: 'Prerequisites' },
  { id: 'placement', label: 'Placement' },
  { id: 'payment', label: 'Payment' },
  { id: 'cert', label: 'Certificate' },
  { id: 'assist', label: 'Need Assistance' }
];

const faqsData = [
  // Training Specific
  {
    category: 'training',
    q: 'What does the Cisco CCNA Automation training program cover?',
    a: 'Our Cisco CCNA Automation training covers the complete Cisco 200-901 CCNAAUTO certification syllabus, including Python programming, REST APIs, JSON, YANG, Cisco platforms, network automation, Meraki, Webex APIs, Git, and software development fundamentals for network engineers. Every concept is reinforced through hands-on labs and real-world automation projects.'
  },
  {
    category: 'training',
    q: 'Will I get hands-on experience with Cisco automation tools?',
    a: 'Yes. You’ll work with Cisco Meraki Dashboard APIs, Webex APIs, Postman, Git, Python, REST APIs, JSON, and automation frameworks used in modern enterprise environments.'
  },
  {
    category: 'training',
    q: 'Is this course suitable for beginners?',
    a: 'Yes. This course is designed for beginners as well as networking professionals. Basic networking knowledge is helpful, but we teach Python programming, APIs, automation, and software development concepts from the ground up.'
  },
  {
    category: 'training',
    q: 'Are real-world projects included?',
    a: 'Absolutely. You’ll build practical projects such as: Network Automation using Python, REST API Integration, Configuration Backup Automation, Device Monitoring Scripts, API-based Network Provisioning, and Cisco Meraki Dashboard Automation. These projects help build a strong network automation portfolio.'
  },
  {
    category: 'training',
    q: 'Will this prepare me for the Cisco 200-901 CCNAAUTO certification?',
    a: 'Yes. The curriculum is fully aligned with the latest Cisco CCNA Automation (200-901 CCNAAUTO) blueprint and includes mock exams, practice questions, lab exercises, and exam preparation sessions.'
  },

  // Time & Mode
  {
    category: 'mode',
    q: 'How long is the Cisco CCNA Automation training?',
    a: 'The complete course includes 60+ to 80+ hours of instructor-led training and is typically completed within 2–3 months, depending on your selected batch.'
  },
  {
    category: 'mode',
    q: 'What batch options are available?',
    a: 'We offer Weekday batches (Mon–Thu), Weekend batches (Sat–Sun), Fast-track batches, and Evening batches for working professionals. New batches start regularly.'
  },
  {
    category: 'mode',
    q: 'Is the course available online and classroom?',
    a: 'Yes. You can attend live classes at our Baner, Pune training center or join online from anywhere in India or abroad. Both learning modes provide identical labs, recordings, and mentor support.'
  },
  {
    category: 'mode',
    q: 'Which language is used during training?',
    a: 'Training is delivered in English and Hindi, making technical concepts easy to understand. Study material and documentation are provided in English.'
  },
  {
    category: 'mode',
    q: 'Will I get access to class recordings?',
    a: 'Yes. Every live session is recorded and uploaded to our Learning Management System (LMS), allowing you to revise topics anytime during your course access period.'
  },

  // Prerequisites
  {
    category: 'prereq',
    q: 'Do I need programming experience before joining?',
    a: 'No. Python programming is taught from the basics. Even students with no coding background can comfortably complete the course.'
  },
  {
    category: 'prereq',
    q: 'Is networking knowledge required?',
    a: 'Basic networking concepts are recommended but not mandatory. If you’re familiar with CCNA-level networking, you’ll learn faster. Beginners can also start with mentor guidance.'
  },
  {
    category: 'prereq',
    q: 'Who should join this course?',
    a: 'This course is ideal for CCNA Engineers, Network Engineers, System Administrators, NOC Engineers, DevOps Beginners, Cloud Engineers, Software Engineers interested in networking, and students preparing for Cisco certifications.'
  },
  {
    category: 'prereq',
    q: 'Can working professionals join?',
    a: 'Yes. Our flexible weekend and evening batches are specially designed for working professionals who want to upgrade to Network Automation roles.'
  },

  // Placement
  {
    category: 'placement',
    q: 'Is placement assistance included?',
    a: 'Yes. Every student receives Resume Building, LinkedIn Profile Optimization, Mock Technical Interviews, HR Interview Preparation, Job Referral Assistance, and Career Guidance.'
  },
  {
    category: 'placement',
    q: 'What companies hire Cisco CCNA Automation professionals?',
    a: 'Network automation and Cisco-trained professionals are hired by companies such as: Cisco, Infosys, TCS, Wipro, Capgemini, Accenture, Tech Mahindra, IBM, Cognizant, HCLTech, LTIMindtree, Reliance Jio, Airtel, Verizon, and VMware Partners.'
  },
  {
    category: 'placement',
    q: 'What salary can I expect after CCNA Automation certification?',
    a: 'Typical salary ranges in India: Freshers: ₹4–7 LPA; 2–4 Years Experience: ₹8–14 LPA; Senior Automation Engineers: ₹15–25+ LPA. Actual salary depends on technical skills, project experience, location, and interview performance.'
  },
  {
    category: 'placement',
    q: 'Is placement guaranteed?',
    a: 'We provide complete placement assistance, interview preparation, and hiring referrals. Final job selection depends on your technical knowledge, project work, communication skills, and interview performance.'
  },

  // Payment
  {
    category: 'payment',
    q: 'What is the course fee?',
    a: 'Please contact our admissions team for the latest course fee, scholarships, seasonal discounts, and promotional offers.'
  },
  {
    category: 'payment',
    q: 'Are EMI options available?',
    a: 'Yes. We offer easy No-Cost EMI options through our finance partners with flexible repayment plans.'
  },
  {
    category: 'payment',
    q: 'Can I attend a free demo class?',
    a: 'Yes. You can book a FREE Live Demo Class and experience our teaching methodology, lab environment, and learning platform before enrolling.'
  },
  {
    category: 'payment',
    q: 'Is the fee refundable?',
    a: 'Please refer to our official Refund Policy and Terms & Conditions. We recommend attending the free demo session before enrollment to ensure the course meets your expectations.'
  },
  {
    category: 'payment',
    q: 'Which payment methods are accepted?',
    a: 'We accept: UPI, Debit Cards, Credit Cards, Net Banking, EMI, Digital Wallets, Cash, Cheque, Demand Draft, and PayPal (International Students).'
  },

  // Certificate
  {
    category: 'cert',
    q: 'Will I receive a certificate after completing the course?',
    a: 'Yes. You’ll receive the I-Medita CCNA Automation Training Completion Certificate after successfully completing all required labs and projects. You’ll also be fully prepared to appear for the official Cisco CCNA Automation (200-901 CCNAAUTO) certification exam.'
  },
  {
    category: 'cert',
    q: 'Is the I-Medita certificate valuable?',
    a: 'Yes. The certificate validates your CCNA Automation training, practical lab work, automation projects, and hands-on experience. It can be shared on LinkedIn and included in resumes to demonstrate your network automation skills.'
  },
  {
    category: 'cert',
    q: 'How do I take the Cisco CCNA Automation certification exam?',
    a: 'The official Cisco 200-901 CCNAAUTO exam is conducted through Pearson VUE testing centers and online proctored exams. We guide you through exam registration and scheduling.'
  },
  {
    category: 'cert',
    q: 'How long is the Cisco CCNA Automation certification valid?',
    a: 'The Cisco CCNA Automation certification is typically valid for 3 years. Renewal can be completed through Cisco Continuing Education credits or by passing a qualifying Cisco certification exam.'
  },

  // Need Assistance
  {
    category: 'assist',
    q: 'Who can I contact for course-related queries?',
    a: 'Call our admissions team at +91 8750004411 during business hours or submit the inquiry form on this page. Our counselors usually respond within 24 hours.'
  },
  {
    category: 'assist',
    q: 'Can I visit the institute before enrolling?',
    a: 'Yes. You can walk into our Baner, Pune campus any working day between 10 AM – 7 PM. Address: 3rd Floor, Aditi Samruddhi Building, Baner Road, Baner, Pune 411045.'
  },
  {
    category: 'assist',
    q: 'I\'m stuck choosing the right course — can I talk to someone?',
    a: 'Yes. Submit the assistance form below or book a free demo. Our career counsellor will give you 1-to-1 free guidance on the right Cisco track for your goals.'
  },
  {
    category: 'assist',
    q: 'I\'m not sure whether I should choose CCNA or CCNA Automation. Can someone guide me?',
    a: 'Absolutely. Our career counselors provide FREE one-on-one guidance to help you choose between CCNA, Cisco CCNA Automation, CCNP Enterprise, Cyber Security, Cloud Networking, or other Cisco certification paths based on your career goals.'
  }
];

// ---------------------------------------------------------------------------
// MAIN COMPONENT: CCNAAutomationCoursePage
// ---------------------------------------------------------------------------
export function CCNAAutomationCoursePage() {
  const context = useOutletContext() || {};
  const handleOpenDemo = context.handleOpenDemo || (() => {});

  // Section 0: Dynamic Countdown Timer
  const [timeLeft, setTimeLeft] = useState({
    hours: 13,
    minutes: 56,
    seconds: 4
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 14, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTimer = () => {
    const pad = (n) => String(n).padStart(2, '0');
    return `${pad(timeLeft.hours)}:${pad(timeLeft.minutes)}:${pad(timeLeft.seconds)}`;
  };

  // Section 4: Learning Journey Active Stage
  const [activeStage, setActiveStage] = useState(0);

  // Section 5: Syllabus Accordion State
  const [openModule, setOpenModule] = useState('mod-1');
  const toggleModule = (id) => {
    setOpenModule((prev) => (prev === id ? null : id));
  };

  // Section 13: FAQ Filter & Accordion State
  const [faqTab, setFaqTab] = useState('all');
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const filteredFaqs =
    faqTab === 'all'
      ? faqsData
      : faqsData.filter((item) => item.category === faqTab);

  const toggleFaq = (index) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  const currentStageData = learningStages[activeStage];

  return (
    <div className={styles.coursePageRoot}>
      {/* =========================================================================
          SECTION 0: LIMITED-TIME DISCOUNT BANNER
          ========================================================================= */}
      <div className={styles.offerTopBanner}>
        <div className={styles.offerBannerInner}>
          <div className={styles.offerLeft}>
            <span className={styles.offerSaveBadge}>
              <Sparkles size={13} />
              Limited Offer
            </span>
            <span className={styles.offerTextHighlight}>
              Save ₹5,000 on CCNA Automation Training
            </span>
            <div className={styles.offerTimer}>
              <Clock size={13} />
              <span>Offer Ends : {formatTimer()}</span>
            </div>
          </div>
          <button
            type="button"
            className={styles.claimOfferBtn}
            onClick={() => handleOpenDemo('CCNA Automation ₹5,000 Discount Offer')}
          >
            <span>Claim Offer</span>
            <ArrowRight size={13} />
          </button>
        </div>
      </div>

      {/* =========================================================================
          SECTION 1: HERO SECTION (DEEP OBSIDIAN SLATE #080c14)
          ========================================================================= */}
      <header className={styles.courseHero}>
        <div className={styles.heroGridOverlay} />
        <div className={styles.container}>
          {/* Breadcrumbs */}
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <Link to="/" className={styles.breadcrumbLink}>Home</Link>
            <span>/</span>
            <Link to="/courses/ccna-training" className={styles.breadcrumbLink}>Courses</Link>
            <span>/</span>
            <span className={styles.breadcrumbCurrent}>Cisco CCNA Automation (200-901 CCNAAUTO)</span>
          </nav>

          <div className={styles.heroContentSplit}>
            {/* Left Content Column */}
            <div>
              <div className={styles.heroPillRow}>
                <div className={styles.officialBadge}>
                  <Shield size={13} />
                  <span>Cisco 200-901 CCNAAUTO Certified</span>
                </div>
                <div className={styles.ratingBadge}>
                  <Star size={13} fill="#F59E0B" />
                  <span>Rated 4.9/5 by 11,210+ Students</span>
                </div>
              </div>

              <h1 className={styles.heroTitle}>
                Best Cisco <span className={styles.highlightText}>CCNA Automation</span> Training & Certification
              </h1>

              <p className={styles.heroSubtext}>
                Become CCNA Automation certified in just <strong>2 months*</strong> with hands-on API development, 
                Python programming, network automation, real automation labs, and placement assistance. Prepare for the 
                Cisco 200-901 CCNAAUTO certification exam through instructor-led training and real-world automation projects.
              </p>

              {/* 4 Hero Key Stats */}
              <div className={styles.heroKeyStats}>
                <div className={styles.heroStatBox}>
                  <div className={styles.heroStatVal}>2,189+</div>
                  <div className={styles.heroStatLbl}>Students Trained</div>
                </div>
                <div className={styles.heroStatBox}>
                  <div className={styles.heroStatVal}>100%</div>
                  <div className={styles.heroStatLbl}>Placement Assistance</div>
                </div>
                <div className={styles.heroStatBox}>
                  <div className={styles.heroStatVal}>24×7</div>
                  <div className={styles.heroStatLbl}>DevNet Lab Access</div>
                </div>
                <div className={styles.heroStatBox}>
                  <div className={styles.heroStatVal}>Triple CCIE</div>
                  <div className={styles.heroStatLbl}>Certified Trainers</div>
                </div>
              </div>

              {/* Urgency Badge */}
              <div className={styles.heroAlertStrip}>
                <span className={styles.pulseDot} />
                <span>Upcoming Batch Filling Fast • Free Demo Sessions Available • Limited Seats</span>
              </div>

              {/* CTAs */}
              <div className={styles.heroCtaRow}>
                <button
                  type="button"
                  className={styles.primaryCtaBtn}
                  onClick={() => handleOpenDemo('Cisco CCNA Automation (200-901)')}
                >
                  <PhoneCall size={16} />
                  <span>Book Free 2-Hour Practical Demo</span>
                </button>
                <button
                  type="button"
                  className={styles.secondaryCtaBtn}
                  onClick={() => handleOpenDemo('Cisco CCNA Automation Syllabus')}
                >
                  <Download size={16} />
                  <span>Download 200-901 Syllabus</span>
                </button>
              </div>
            </div>

            {/* Right Column: Modern MacOS DevNet Terminal & Pricing Card */}
            <div>
              <div className={styles.heroTerminalCard}>
                <div className={styles.terminalHeader}>
                  <div className={styles.terminalControls}>
                    <span className={`${styles.macDot} ${styles.macDotRed}`} />
                    <span className={`${styles.macDot} ${styles.macDotYellow}`} />
                    <span className={`${styles.macDot} ${styles.macDotGreen}`} />
                  </div>
                  <div className={styles.terminalTabTitle}>
                    <Code size={13} />
                    <span>cisco_automation.py</span>
                  </div>
                  <div style={{ fontSize: '0.72rem', color: '#64748b' }}>DevNet API</div>
                </div>

                {/* Live Code Snippet Display */}
                <div className={styles.terminalCodeBody}>
                  <div><span className={styles.codeComment}># Cisco Meraki & REST API Automation</span></div>
                  <div><span className={styles.codeKw}>import</span> requests, json</div>
                  <div style={{ margin: '4px 0' }}>
                    <span className={styles.codeVar}>headers</span> = &#123;<span className={styles.codeStr}>"X-Cisco-Meraki-API-Key"</span>: <span className={styles.codeStr}>"DEVNET_KEY"</span>&#125;
                  </div>
                  <div>
                    <span className={styles.codeVar}>res</span> = requests.<span className={styles.codeFunc}>get</span>(
                  </div>
                  <div style={{ paddingLeft: '14px' }}>
                    <span className={styles.codeStr}>"https://api.meraki.com/api/v1/devices"</span>,
                  </div>
                  <div style={{ paddingLeft: '14px' }}>
                    headers=<span className={styles.codeVar}>headers</span>
                  </div>
                  <div>)</div>
                  <div><span className={styles.codeFunc}>print</span>(f<span className={styles.codeStr}>"[✓] Automated &#123;len(res.json())&#125; Enterprise Pods"</span>)</div>
                </div>

                {/* Integrated Pricing Block */}
                <div className={styles.pricingInnerBlock}>
                  <div className={styles.pricingHeaderRow}>
                    <span className={styles.pricingTrackBadge}>Special Launch Offer</span>
                    <span className={styles.pricingExamCode}>EXAM: 200-901 CCNAAUTO</span>
                  </div>

                  <div className={styles.priceDisplayRow}>
                    <span className={styles.currentPrice}>₹16,900</span>
                    <span className={styles.originalPrice}>₹21,900</span>
                    <span className={styles.discountPill}>Save ₹5,000</span>
                  </div>
                  <p className={styles.priceNote}>Inclusive of 24×7 DevNet cloud labs, mock tests & placement support</p>

                  <ul className={styles.terminalFeatureList}>
                    <li className={styles.terminalFeatureItem}>
                      <CheckCircle2 size={16} />
                      <span>60+ Real Python, REST API & Meraki Labs</span>
                    </li>
                    <li className={styles.terminalFeatureItem}>
                      <CheckCircle2 size={16} />
                      <span>Live Weekend & Weekday Interactive Batches</span>
                    </li>
                    <li className={styles.terminalFeatureItem}>
                      <CheckCircle2 size={16} />
                      <span>1-on-1 Technical Mock Interviews & Resume Sculpting</span>
                    </li>
                    <li className={styles.terminalFeatureItem}>
                      <CheckCircle2 size={16} />
                      <span>Official Pearson VUE 200-901 Exam Preparation</span>
                    </li>
                    <li className={styles.terminalFeatureItem}>
                      <CheckCircle2 size={16} />
                      <span>I-Medita Verified Course Completion Credential</span>
                    </li>
                  </ul>

                  <button
                    type="button"
                    className={styles.terminalEnrollBtn}
                    onClick={() => handleOpenDemo('Cisco CCNA Automation - Instant Enrollment')}
                  >
                    <span>Enroll in Next Live Batch</span>
                    <ArrowRight size={16} />
                  </button>

                  <div className={styles.cardGuarantee}>
                    <Shield size={14} color="#059669" />
                    <span>100% Satisfaction Guarantee • Free Demo Sessions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* =========================================================================
          SECTION 2: WHY CCNA AUTOMATION? (METRICS & MARKET DEMAND)
          ========================================================================= */}
      <section className={`${styles.contentSection} ${styles.sectionLight}`} id="why-automation">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.eyebrowBadge}>
              <TrendingUp size={14} />
              <span>Why CCNA Automation?</span>
            </div>
            <h2 className={styles.sectionHeading}>
              Network Automation Is One of the <br />
              <span style={{ color: '#1e88e5' }}>Fastest-Growing IT Careers</span>
            </h2>
            <p className={styles.sectionSubtext}>
              Modern IT relies on network automation, APIs, and cloud technologies. The Cisco CCNA Automation 
              (200-901 CCNAAUTO) certification helps you build in-demand skills in Python, REST APIs, and Cisco automation 
              for high-growth careers in networking, DevOps, and cloud infrastructure.
            </p>
          </div>

          {/* 4 In-Demand Metrics */}
          <div className={styles.metricsGrid}>
            <div className={styles.metricCard}>
              <div className={styles.metricValue}>30,000+</div>
              <div className={styles.metricTitle}>Job Openings</div>
              <p className={styles.metricDesc}>Active network automation and programmability job roles across India.</p>
            </div>

            <div className={styles.metricCard}>
              <div className={styles.metricValue}>₹15–25 LPA</div>
              <div className={styles.metricTitle}>Typical Starting Package</div>
              <p className={styles.metricDesc}>For Cisco CCNA Automation certified professionals with hands-on API skills.</p>
            </div>

            <div className={styles.metricCard}>
              <div className={styles.metricValue}>3×</div>
              <div className={styles.metricTitle}>Career Growth Multiplier</div>
              <p className={styles.metricDesc}>Fast-track into high-paying DevOps, Cloud Networking, and SRE careers.</p>
            </div>

            <div className={styles.metricCard}>
              <div className={styles.metricValue}>95%</div>
              <div className={styles.metricTitle}>Placement Success Rate</div>
              <p className={styles.metricDesc}>Among I-Medita automation students who complete all projects & mock interviews.</p>
            </div>
          </div>

          {/* Banner CTA */}
          <div className={styles.demoBannerCard}>
            <div className={styles.demoBannerContent}>
              <h3 className={styles.demoBannerTitle}>Not Sure if CCNA Automation Is Right for You?</h3>
              <p className={styles.demoBannerText}>
                Join a FREE live interactive demo to explore the course, experience real hands-on DevNet labs, 
                and get personalized career counseling from CCIE certified mentors.
              </p>
            </div>
            <button
              type="button"
              className={styles.demoBannerBtn}
              onClick={() => handleOpenDemo('CCNA Automation Free Live Demo')}
            >
              <span>Join a FREE Live Demo</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: COURSE CURRICULUM HIGHLIGHTS (10 CORE PILLARS)
          ========================================================================= */}
      <section className={`${styles.contentSection} ${styles.sectionSlate}`} id="curriculum-overview">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.eyebrowBadge}>
              <BookOpen size={14} />
              <span>Course Curriculum</span>
            </div>
            <h2 className={styles.sectionHeading}>
              What You'll Learn in Our <br />
              <span style={{ color: '#1e88e5' }}>Cisco CCNA Automation Training Program</span>
            </h2>
            <p className={styles.sectionSubtext}>
              Aligned with the Cisco CCNA Automation (200-901 CCNA AUTO) exam blueprint. Master Python, APIs, 
              network automation, Cisco platforms, and automation fundamentals through hands-on labs and enterprise projects.
            </p>
          </div>

          <div className={styles.curriculumHighlightsGrid}>
            {curriculumPillars.map((item, idx) => {
              const PillarIcon = item.icon;
              return (
                <div key={idx} className={styles.curriculumHighlightCard}>
                  <div className={styles.highlightIconBox}>
                    <PillarIcon size={22} />
                  </div>
                  <div>
                    <h3 className={styles.highlightCardTitle}>{item.title}</h3>
                    <p className={styles.highlightCardDesc}>{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: YOUR CCNA AUTOMATION LEARNING ROADMAP (.imj 5-STAGE JOURNEY)
          ========================================================================= */}
      <section className={`${styles.contentSection} ${styles.sectionLight}`} id="learning-roadmap">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.eyebrowBadge}>
              <GitBranch size={14} />
              <span>Learning Roadmap</span>
            </div>
            <h2 className={styles.sectionHeading}>
              Your Step-by-Step <br />
              <span style={{ color: '#1e88e5' }}>DevNet Learning Journey</span>
            </h2>
            <p className={styles.sectionSubtext}>
              Learn, practice, and validate your skills through a 5-stage framework designed around real-world 
              network automation and software development workflows.
            </p>
          </div>

          {/* Interactive .imj Engine */}
          <div className={styles.imj}>
            {/* Step Dots & Progress Lines */}
            <div className={styles.imjProg}>
              {learningStages.map((st, i) => {
                const isDone = i < activeStage;
                const isActive = i === activeStage;
                return (
                  <React.Fragment key={i}>
                    <div
                      className={`${styles.imjDot} ${isActive ? styles.imjDotActive : ''} ${isDone ? styles.imjDotDone : ''}`}
                      onClick={() => setActiveStage(i)}
                      title={`Stage 0${i + 1}: ${st.label}`}
                    >
                      {isDone ? (
                        <Check size={16} strokeWidth={2.5} />
                      ) : (
                        `0${i + 1}`
                      )}
                    </div>
                    {i < 4 && (
                      <div
                        className={`${styles.imjLine} ${isDone ? styles.imjLineDone : ''}`}
                      />
                    )}
                  </React.Fragment>
                );
              })}
            </div>

            {/* Stage Selector Cards */}
            <div className={styles.imjCards}>
              {learningStages.map((st, i) => {
                const isDone = i < activeStage;
                const isActive = i === activeStage;
                const StageIcon = st.Icon;
                return (
                  <div
                    key={i}
                    className={`${styles.imjCard} ${isActive ? styles.imjCardActive : ''} ${isDone ? styles.imjCardDone : ''}`}
                    onClick={() => setActiveStage(i)}
                  >
                    {isDone && (
                      <div className={styles.imjCbadge}>
                        <Check size={12} strokeWidth={2.5} />
                      </div>
                    )}
                    <div className={styles.imjCnum}>STAGE 0{i + 1}</div>
                    <div className={styles.imjCicon}>
                      <StageIcon size={20} />
                    </div>
                    <div className={styles.imjCtitle}>{st.label}</div>
                  </div>
                );
              })}
            </div>

            {/* Active Stage Detailed Display Box */}
            <div className={styles.imjBox}>
              <div className={styles.imjInner}>
                <div className={styles.imjBleft}>
                  <div className={styles.imjBnum}>0{activeStage + 1}</div>
                  <div className={styles.imjBigicon}>
                    {React.createElement(currentStageData.Icon, { size: 34 })}
                  </div>
                </div>
                <div style={{ flex: 1 }}>
                  <div
                    className={styles.imjDtag}
                    style={{
                      background: currentStageData.tagBg,
                      color: currentStageData.tagC
                    }}
                  >
                    {currentStageData.tag}
                  </div>
                  <h3 className={styles.imjDtitle}>{currentStageData.title}</h3>
                  <p className={styles.imjDdesc}>{currentStageData.desc}</p>
                  <div className={styles.imjPts}>
                    {currentStageData.pts.map((p, idx) => (
                      <div key={idx} className={styles.imjPt}>
                        <div className={styles.imjPtick}>
                          <Check size={12} strokeWidth={2.5} />
                        </div>
                        <span>{p}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className={styles.imjNav}>
              <button
                type="button"
                className={styles.imjBtn}
                onClick={() => setActiveStage((prev) => Math.max(0, prev - 1))}
                disabled={activeStage === 0}
              >
                <ChevronDown
                  size={16}
                  style={{ transform: 'rotate(90deg)' }}
                />
                <span>Previous Stage</span>
              </button>
              <span className={styles.imjCount}>
                Stage {activeStage + 1} of 5
              </span>
              <button
                type="button"
                className={`${styles.imjBtn} ${styles.imjBtnNext}`}
                onClick={() => setActiveStage((prev) => Math.min(4, prev + 1))}
                disabled={activeStage === 4}
              >
                <span>Next Stage</span>
                <ChevronDown
                  size={16}
                  style={{ transform: 'rotate(-90deg)' }}
                />
              </button>
            </div>
          </div>

          {/* Roadmap Bottom CTA */}
          <div style={{ marginTop: '3.5rem', textAlign: 'center' }}>
            <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#ff6b00', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              Ready to start?
            </div>
            <h3 style={{ fontSize: '1.55rem', fontWeight: 850, color: '#0b3c5d', marginBottom: '0.75rem' }}>
              Book Your Free CCNA Automation Demo Class This Week
            </h3>
            <p style={{ maxWidth: '680px', margin: '0 auto 1.75rem', fontSize: '0.95rem', color: '#64748b', lineHeight: 1.65 }}>
              Experience our live CCNA Automation training, hands-on automation labs, and learning platform before you enroll. 
              Explore Python, Cisco APIs, and network automation with guidance from CCIE-certified trainers.
            </p>
            <button
              type="button"
              className={styles.primaryCtaBtn}
              onClick={() => handleOpenDemo('CCNA Automation Roadmap Demo')}
            >
              <span>Book a Free Demo</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: FULL COURSE SYLLABUS (9 COMPREHENSIVE MODULES)
          ========================================================================= */}
      <section className={`${styles.contentSection} ${styles.sectionSlate}`} id="syllabus">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.eyebrowBadge}>
              <Layers size={14} />
              <span>Full Course Syllabus</span>
            </div>
            <h2 className={styles.sectionHeading}>
              9 Modules • 60+ Hours • <br />
              <span style={{ color: '#1e88e5' }}>Aligned with Cisco 200-901 CCNAAUTO Blueprint</span>
            </h2>
            <p className={styles.sectionSubtext}>
              Master the CCNA Automation curriculum through 9 comprehensive modules covering software development, 
              APIs, Cisco platform programmability, network fundamentals, and hands-on automation labs.
            </p>
          </div>

          <div className={styles.syllabusContainer}>
            <div className={styles.modulesList}>
              {fullSyllabusModules.map((mod) => {
                const isOpen = openModule === mod.id;
                return (
                  <div
                    key={mod.id}
                    className={`${styles.moduleCard} ${isOpen ? styles.isOpen : ''}`}
                  >
                    <button
                      type="button"
                      className={styles.moduleHeader}
                      onClick={() => toggleModule(mod.id)}
                    >
                      <div className={styles.moduleLeft}>
                        <span className={styles.moduleIndexBadge}>{mod.number}</span>
                        <div>
                          <div className={styles.moduleTitleText}>{mod.title}</div>
                          <span className={styles.moduleMetaTag}>
                            {mod.topics.length} Key Topics Covered • {mod.duration}
                          </span>
                        </div>
                      </div>
                      <ChevronDown size={20} className={styles.moduleChevron} />
                    </button>

                    {isOpen && (
                      <div className={styles.moduleContent}>
                        <div className={styles.moduleTopicsGrid}>
                          {mod.topics.map((t, tIdx) => (
                            <div key={tIdx} className={styles.moduleTopicItem}>
                              <CheckCircle2 size={16} />
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
          SECTION 6: HANDS-ON LABS (60+ REAL AUTOMATION LABS)
          ========================================================================= */}
      <section className={`${styles.contentSection} ${styles.sectionLight}`} id="hands-on-labs">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.eyebrowBadge}>
              <Server size={14} />
              <span>Hands-on Labs</span>
            </div>
            <h2 className={styles.sectionHeading}>
              60+ Real Automation Labs <br />
              <span style={{ color: '#1e88e5' }}>Before Your CCNA Automation Certification</span>
            </h2>
            <p className={styles.sectionSubtext}>
              This isn't just a theory course. Gain hands-on experience building network automation solutions using 
              Python, Cisco APIs, REST APIs, and Git in enterprise-style lab environments.
            </p>
          </div>

          <div className={styles.labsSplitGrid}>
            {/* Left Card: Lab Environment */}
            <div className={styles.labEnvCard}>
              <h3 className={styles.labEnvTitle}>
                <Laptop size={22} color="#1e88e5" />
                <span>Your Lab Environment</span>
              </h3>
              <ul className={styles.labEnvList}>
                {labEnvironmentPoints.map((item, idx) => (
                  <li key={idx} className={styles.labEnvItem}>
                    <span className={styles.labEnvBullet} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Card: Lab Topics Grid */}
            <div>
              <h3 className={styles.labEnvTitle} style={{ marginBottom: '1.25rem' }}>
                <Terminal size={22} color="#ff6b00" />
                <span>Hands-on Lab Topics</span>
              </h3>
              <div className={styles.labTopicsGrid}>
                {labTopicsList.map((topic, idx) => (
                  <div key={idx} className={styles.labTopicCard}>
                    <CheckCircle2 size={16} className={styles.labTopicIcon} />
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: COURSE FEATURES GRID (EVERYTHING INCLUDED)
          ========================================================================= */}
      <section className={`${styles.contentSection} ${styles.sectionSlate}`} id="features">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.eyebrowBadge}>
              <Sparkles size={14} />
              <span>Course Features</span>
            </div>
            <h2 className={styles.sectionHeading}>
              Everything Included in This <br />
              <span style={{ color: '#1e88e5' }}>Cisco CCNA Automation Training Program</span>
            </h2>
            <p className={styles.sectionSubtext}>
              No hidden fees. No surprise charges. Your course fee includes everything you need to prepare for the 
              Cisco CCNA Automation (200-901 CCNAAUTO) certification and a career in network automation.
            </p>
          </div>

          <div className={styles.courseFeaturesGrid}>
            {courseFeaturesData.map((f, idx) => (
              <div key={idx} className={styles.featureBox}>
                <div className={styles.featureLabel}>{f.label}</div>
                <div className={styles.featurePrimary}>{f.primary}</div>
                <div className={styles.featureSecondary}>{f.secondary}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: REAL DEVELOPMENT ENVIRONMENT
          ========================================================================= */}
      <section className={`${styles.contentSection} ${styles.sectionLight}`} id="dev-environment">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.eyebrowBadge}>
              <Cpu size={14} />
              <span>Real Development Environment</span>
            </div>
            <h2 className={styles.sectionHeading}>
              Hands-On Training with <br />
              <span style={{ color: '#1e88e5' }}>Enterprise Automation Tools</span>
            </h2>
            <p className={styles.sectionSubtext}>
              Build real-world network automation solutions using Cisco platforms, Python, APIs, and modern 
              development tools in enterprise-style lab environments.
            </p>
          </div>

          <div className={styles.devEnvGrid}>
            {devEnvironmentPillars.map((pillar, idx) => {
              const PIcon = pillar.icon;
              return (
                <div key={idx} className={styles.devEnvBox}>
                  <div className={styles.devEnvIcon}>
                    <PIcon size={24} />
                  </div>
                  <h3 className={styles.devEnvHeading}>{pillar.title}</h3>
                  <p className={styles.devEnvText}>{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 9: PLACEMENT ASSISTANCE & CAREER OPPORTUNITIES
          ========================================================================= */}
      <section className={`${styles.contentSection} ${styles.sectionSlate}`} id="placement">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.eyebrowBadge}>
              <Briefcase size={14} />
              <span>Placement Assistance</span>
            </div>
            <h2 className={styles.sectionHeading}>
              Career Support Beyond Certification
            </h2>
            <p className={styles.sectionSubtext}>
              Build a successful career in network automation, DevOps, and software-defined networking with expert 
              career guidance, mock interviews, and placement assistance. We help you prepare for Cisco CCNA Automation 
              and network automation job opportunities.
            </p>
          </div>

          {/* 4 Placement Service Pillars */}
          <div className={styles.placementPillarsGrid}>
            {placementSupportPillars.map((p, idx) => (
              <div key={idx} className={styles.placementPillarCard}>
                <div className={styles.pillarIconBox}>
                  <Briefcase size={24} />
                </div>
                <h3 className={styles.pillarTitle}>{p.title}</h3>
                <p className={styles.pillarText}>{p.desc}</p>
              </div>
            ))}
          </div>

          {/* Roles & Salary Range Container */}
          <div className={styles.rolesSalaryContainer}>
            <div>
              <h3 className={styles.rolesHeading}>Potential Networking Career Opportunities</h3>
              <div className={styles.rolesTagsGrid}>
                {potentialRoles.map((role, idx) => (
                  <div key={idx} className={styles.roleTag}>
                    <CheckCircle2 size={15} color="#059669" />
                    <span>{role}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.salaryHighlightBox}>
              <div className={styles.salaryLabel}>Typical Entry-Level Salary Range</div>
              <div className={styles.salaryVal}>₹15 LPA – ₹25 LPA</div>
              <p className={styles.salarySub}>For Cisco CCNA Automation-certified professionals in India & MNCs</p>
              <button
                type="button"
                className={styles.counsellorBtn}
                onClick={() => handleOpenDemo('Talk to a Career Counsellor')}
              >
                <span>Talk to a Career Counsellor</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 10: CERTIFICATIONS (TWO VALUABLE CREDENTIALS)
          ========================================================================= */}
      <section className={`${styles.contentSection} ${styles.sectionLight}`} id="certifications">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.eyebrowBadge}>
              <Award size={14} />
              <span>Certifications</span>
            </div>
            <h2 className={styles.sectionHeading}>
              Earn Two Valuable Credentials <br />
              <span style={{ color: '#1e88e5' }}>During Your CCNA Automation Journey</span>
            </h2>
            <p className={styles.sectionSubtext}>
              Prepare for the official Cisco CCNA Automation (200-901 CCNAAUTO) certification exam and receive an 
              I-Medita Course Completion Certificate upon successfully completing the training.
            </p>
          </div>

          <div className={styles.certCredentialsGrid}>
            {/* Card 1: Official Cisco Exam */}
            <div className={`${styles.certCard} ${styles.certCardCisco}`}>
              <div className={styles.certBadgeStrip}>
                <span className={`${styles.certOrgBadge} ${styles.ciscoPill}`}>Official Cisco Exam</span>
                <span className={styles.certValidity}>Valid 3 Years Globally</span>
              </div>
              <h3 className={styles.certHeading}>CCNA Automation Certification</h3>
              <p className={styles.certDesc}>
                Developing Applications and Automating Workflows Using Cisco Platforms (Delivered through Pearson VUE).
              </p>

              <div className={styles.examSpecsTable}>
                <div>
                  <div className={styles.specItemLbl}>CODE</div>
                  <div className={styles.specItemVal}>200-901</div>
                </div>
                <div>
                  <div className={styles.specItemLbl}>DURATION</div>
                  <div className={styles.specItemVal}>120 Mins</div>
                </div>
                <div>
                  <div className={styles.specItemLbl}>QUESTIONS</div>
                  <div className={styles.specItemVal}>~120</div>
                </div>
                <div>
                  <div className={styles.specItemLbl}>PASS SCORE</div>
                  <div className={styles.specItemVal}>80–85%</div>
                </div>
              </div>

              <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#0b3c5d', marginBottom: '0.85rem' }}>
                WHAT WE PROVIDE FOR THIS EXAM:
              </div>
              <ul className={styles.certPointsList}>
                <li className={styles.certPointItem}>
                  <CheckCircle2 size={16} />
                  <span>Full-length DEVASC mock exams & practice question drills</span>
                </li>
                <li className={styles.certPointItem}>
                  <CheckCircle2 size={16} />
                  <span>Exam strategy & time management preparation sessions</span>
                </li>
                <li className={styles.certPointItem}>
                  <CheckCircle2 size={16} />
                  <span>Pearson VUE exam scheduling & discounted voucher guidance</span>
                </li>
                <li className={styles.certPointItem}>
                  <CheckCircle2 size={16} />
                  <span>Hands-on automation lab practice with live Cisco APIs</span>
                </li>
                <li className={styles.certPointItem}>
                  <CheckCircle2 size={16} />
                  <span>Technical interview preparation & portfolio verification</span>
                </li>
              </ul>
              <div className={styles.certFooterNote}>
                * Note: Cisco exam fee (USD 300 + tax) is paid separately to Pearson VUE testing center.
              </div>
            </div>

            {/* Card 2: I-Medita Course Certificate */}
            <div className={`${styles.certCard} ${styles.certCardImedita}`}>
              <div className={styles.certBadgeStrip}>
                <span className={`${styles.certOrgBadge} ${styles.imeditaPill}`}>Institute Certificate</span>
                <span className={styles.certValidity}>Lifetime Validity</span>
              </div>
              <h3 className={styles.certHeading}>I-Medita Course Completion Certificate</h3>
              <p className={styles.certDesc}>
                Issued after successful completion of all Cisco DevNet Associate training modules, assignments & labs.
              </p>

              <div className={styles.examSpecsTable}>
                <div>
                  <div className={styles.specItemLbl}>PARTNERS</div>
                  <div className={styles.specItemVal}>250+</div>
                </div>
                <div>
                  <div className={styles.specItemLbl}>LABS LOGGED</div>
                  <div className={styles.specItemVal}>60+ Labs</div>
                </div>
                <div>
                  <div className={styles.specItemLbl}>DELIVERY</div>
                  <div className={styles.specItemVal}>Within 7 Days</div>
                </div>
                <div>
                  <div className={styles.specItemLbl}>COST</div>
                  <div className={styles.specItemVal}>Included Free</div>
                </div>
              </div>

              <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#0b3c5d', marginBottom: '0.85rem' }}>
                CERTIFICATE FEATURES & BENEFITS:
              </div>
              <ul className={styles.certPointsList}>
                <li className={styles.certPointItem}>
                  <CheckCircle2 size={16} />
                  <span>Shareable on LinkedIn, GitHub & professional CVs</span>
                </li>
                <li className={styles.certPointItem}>
                  <CheckCircle2 size={16} />
                  <span>Validates Python, REST APIs & network automation proficiency</span>
                </li>
                <li className={styles.certPointItem}>
                  <CheckCircle2 size={16} />
                  <span>Demonstrates hands-on experience on Cisco Meraki & Webex APIs</span>
                </li>
                <li className={styles.certPointItem}>
                  <CheckCircle2 size={16} />
                  <span>Showcases DevOps, Docker, Git & Infrastructure as Code skills</span>
                </li>
                <li className={styles.certPointItem}>
                  <CheckCircle2 size={16} />
                  <span>Directly supports applications for DevNet, DevOps & Cloud roles</span>
                </li>
              </ul>
              <div className={styles.certFooterNote}>
                Included free with your course — available in both verifiable high-resolution digital & print formats.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 11: HEAD-TO-HEAD COMPARISON TABLE (.cmp)
          ========================================================================= */}
      <section className={`${styles.contentSection} ${styles.sectionSlate}`} id="comparison">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.eyebrowBadge}>
              <Shield size={14} />
              <span>Head-to-Head Comparison</span>
            </div>
            <h2 className={styles.sectionHeading}>
              What Sets Us Apart From <br />
              <span style={{ color: '#1e88e5' }}>Other CCNA Automation Institutes</span>
            </h2>
            <p className={styles.sectionSubtext}>
              A transparent head-to-head comparison so you can make an informed decision for your engineering career.
            </p>
          </div>

          <div className={styles.cmp}>
            <div className={styles.cmpWrap}>
              {/* Table Header */}
              <div className={styles.cmpHeader}>
                <div className={`${styles.cmpHcell} ${styles.cmpHcellFeat}`}>
                  <div className={styles.cmpHlabel}>FEATURE</div>
                </div>
                <div className={`${styles.cmpHcell} ${styles.cmpHcellImed}`}>
                  <div className={styles.cmpLogo}>
                    <Server size={18} strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className={styles.cmpHname}>I-Medita</div>
                    <div className={styles.cmpHbadge}>★ Top rated in India</div>
                  </div>
                </div>
                <div className={`${styles.cmpHcell} ${styles.cmpHcellOther}`}>
                  <div className={styles.cmpLogo} style={{ background: '#64748B' }}>
                    <Users size={18} strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className={styles.cmpHname}>Other Institutes</div>
                    <div className={styles.cmpHbadge} style={{ background: 'rgba(0,0,0,.15)', borderColor: 'rgba(255,255,255,.1)' }}>
                      Generic training
                    </div>
                  </div>
                </div>
              </div>

              {/* Rows */}
              {comparisonFeatures.map((row, idx) => (
                <div key={idx} className={styles.cmpRow}>
                  <div className={`${styles.cmpCell} ${styles.cmpCellFeatCol}`}>
                    <div className={styles.cmpFeatIcon}>
                      <CheckCircle2 size={15} />
                    </div>
                    <span className={styles.cmpFeatLabel}>{row.feature}</span>
                  </div>

                  <div className={`${styles.cmpCell} ${styles.cmpCellImedCol}`}>
                    <div className={styles.cmpWin}>
                      <div className={styles.cmpTick}>
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span className={styles.cmpWinText}>{row.imedita}</span>
                    </div>
                  </div>

                  <div className={styles.cmpCell}>
                    <div className={styles.cmpWin}>
                      <div className={styles.cmpCross}>
                        <X size={12} strokeWidth={3} />
                      </div>
                      <span className={styles.cmpLoseText}>{row.others}</span>
                    </div>
                  </div>
                </div>
              ))}

              {/* Score Summary Row */}
              <div className={styles.cmpScore}>
                <div className={`${styles.cmpScoreCell} ${styles.cmpScoreCellFeatCol}`}>
                  <div className={styles.cmpScoreLabel}>OVERALL SCORE</div>
                </div>
                <div className={`${styles.cmpScoreCell} ${styles.cmpScoreCellImedCol}`}>
                  <div>
                    <div className={styles.cmpScoreLabel}>I-MEDITA</div>
                    <div className={`${styles.cmpScoreVal} ${styles.cmpScoreValWin}`}>12 / 12</div>
                  </div>
                  <div className={styles.cmpBarWrap}>
                    <div className={styles.cmpBar} style={{ width: '100%' }} />
                  </div>
                </div>
                <div className={`${styles.cmpScoreCell} ${styles.cmpScoreCellOtherCol}`}>
                  <div>
                    <div className={styles.cmpScoreLabel}>OTHERS</div>
                    <div className={styles.cmpScoreVal}>3 / 12</div>
                  </div>
                  <div className={styles.cmpBarWrap}>
                    <div className={`${styles.cmpBar} ${styles.cmpBarLose}`} style={{ width: '25%' }} />
                  </div>
                </div>
              </div>

              {/* Table Footer */}
              <div className={styles.cmpFoot}>
                <div className={styles.cmpFootNote}>
                  Train with CCIE-certified experts, build real automation skills on live Cisco platforms, 
                  and prepare confidently for the CCNA Automation certification and networking automation careers.
                </div>
                <button
                  type="button"
                  className={styles.cmpEnrollBtn}
                  onClick={() => handleOpenDemo('CCNA Automation - Head to Head Enroll')}
                >
                  <span>Enroll Now →</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 12: CAREER GROWTH TIMELINE (.cg 6+ YEARS LADDER)
          ========================================================================= */}
      <section className={`${styles.contentSection} ${styles.sectionLight}`} id="career-growth">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.eyebrowBadge}>
              <TrendingUp size={14} />
              <span>Career Growth</span>
            </div>
            <h2 className={styles.sectionHeading}>
              Where Cisco CCNA Automation <br />
              <span style={{ color: '#1e88e5' }}>Takes You Over the Next 6+ Years</span>
            </h2>
            <p className={styles.sectionSubtext}>
              Explore career opportunities in Network Automation, DevOps, Cloud, and Software Development 
              after earning your Cisco CCNA Automation (200-901 CCNAAUTO) certification.
            </p>
          </div>

          <div className={styles.cg}>
            <div className={styles.cgTrack}>
              <div className={styles.cgLine} />

              {/* Row 1: 0-1 Year */}
              <div className={styles.cgRow}>
                <div className={`${styles.cgLcard} ${styles.cgLcardRole}`}>
                  <div className={styles.cgRtag} style={{ justifyContent: 'flex-end' }}>
                    <TrendingUp size={11} strokeWidth={2.5} color="#FF6B00" />
                    <span>0–1 YEAR</span>
                  </div>
                  <div className={styles.cgRname}>Junior Network Automation Engineer</div>
                  <div className={styles.cgRdesc}>
                    Develop Python scripts, work with REST APIs, automate network tasks, and support enterprise infrastructure.
                  </div>
                  <div className={`${styles.cgRnext} ${styles.cgRnextLeft}`}>
                    <span>Next: Cisco CCNA Automation (200-901 CCNAAUTO)</span>
                    <ArrowRight size={11} strokeWidth={2.5} />
                  </div>
                </div>

                <div className={styles.cgMid}>
                  <div className={styles.cgDot}>
                    <Clock size={18} strokeWidth={2.5} />
                  </div>
                  <div className={styles.cgYr}>START</div>
                </div>

                <div className={`${styles.cgRcard} ${styles.cgSalCard}`}>
                  <div className={styles.cgSlbl}>AVG. SALARY IN INDIA</div>
                  <div className={styles.cgSval}>₹4 – 7 LPA</div>
                  <div className={styles.cgSgrow}>
                    <TrendingUp size={11} strokeWidth={2.5} />
                    <span>Entry Level</span>
                  </div>
                  <div className={styles.cgSbar}>
                    <div className={styles.cgSfill} style={{ width: '22%' }} />
                  </div>
                </div>
              </div>

              {/* Row 2: 1-3 Years */}
              <div className={styles.cgRow}>
                <div className={`${styles.cgLcard} ${styles.cgSalCard}`}>
                  <div className={styles.cgSlbl} style={{ textAlign: 'right' }}>AVG. SALARY IN INDIA</div>
                  <div className={styles.cgSval} style={{ textAlign: 'right' }}>₹7 – 12 LPA</div>
                  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <div className={styles.cgSgrow}>
                      <TrendingUp size={11} strokeWidth={2.5} />
                      <span>+70% Growth</span>
                    </div>
                  </div>
                  <div className={styles.cgSbar}>
                    <div className={styles.cgSfill} style={{ width: '42%' }} />
                  </div>
                </div>

                <div className={styles.cgMid}>
                  <div className={styles.cgDot}>
                    <Cpu size={18} strokeWidth={2.5} />
                  </div>
                  <div className={styles.cgYr}>1–3 YRS</div>
                </div>

                <div className={`${styles.cgRcard} ${styles.cgRcardRole}`}>
                  <div className={styles.cgRtag}>
                    <TrendingUp size={11} strokeWidth={2.5} color="#FF6B00" />
                    <span>1–3 YEARS</span>
                  </div>
                  <div className={styles.cgRname}>Network Automation Engineer / DevOps Engineer</div>
                  <div className={styles.cgRdesc}>
                    Build automation workflows using Python and Cisco APIs, and strengthen REST API integration skills.
                  </div>
                  <div className={styles.cgRnext}>
                    <ArrowRight size={11} strokeWidth={2.5} />
                    <span>Next: Cisco CCNP Automation</span>
                  </div>
                </div>
              </div>

              {/* Row 3: 3-6 Years */}
              <div className={styles.cgRow}>
                <div className={`${styles.cgLcard} ${styles.cgLcardRole}`}>
                  <div className={styles.cgRtag} style={{ justifyContent: 'flex-end' }}>
                    <TrendingUp size={11} strokeWidth={2.5} color="#FF6B00" />
                    <span>3–6 YEARS</span>
                  </div>
                  <div className={styles.cgRname}>Senior Automation Engineer / Cloud Network Engineer</div>
                  <div className={styles.cgRdesc}>
                    Design scalable automation solutions and manage cloud networking implementations.
                  </div>
                  <div className={`${styles.cgRnext} ${styles.cgRnextLeft}`}>
                    <span>Next: DevOps, Cloud, or Cisco Specialist Certifications</span>
                    <ArrowRight size={11} strokeWidth={2.5} />
                  </div>
                </div>

                <div className={styles.cgMid}>
                  <div className={styles.cgDot}>
                    <Star size={18} strokeWidth={2.5} />
                  </div>
                  <div className={styles.cgYr}>3–6 YRS</div>
                </div>

                <div className={`${styles.cgRcard} ${styles.cgSalCard}`}>
                  <div className={styles.cgSlbl}>AVG. SALARY IN INDIA</div>
                  <div className={styles.cgSval}>₹12 – 20 LPA</div>
                  <div className={styles.cgSgrow}>
                    <TrendingUp size={11} strokeWidth={2.5} />
                    <span>+200% Growth</span>
                  </div>
                  <div className={styles.cgSbar}>
                    <div className={styles.cgSfill} style={{ width: '68%' }} />
                  </div>
                </div>
              </div>

              {/* Row 4: 6+ Years */}
              <div className={styles.cgRow}>
                <div className={`${styles.cgLcard} ${styles.cgSalCard}`}>
                  <div className={styles.cgSlbl} style={{ textAlign: 'right' }}>AVG. SALARY IN INDIA</div>
                  <div className={styles.cgSval} style={{ textAlign: 'right' }}>₹20 – 35+ LPA</div>
                  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <div className={styles.cgSgrow}>
                      <TrendingUp size={11} strokeWidth={2.5} />
                      <span>+400% Growth from Start</span>
                    </div>
                  </div>
                  <div className={styles.cgSbar}>
                    <div className={`${styles.cgSfill} ${styles.cgSfillFinal}`} style={{ width: '100%' }} />
                  </div>
                </div>

                <div className={styles.cgMid}>
                  <div className={`${styles.cgDot} ${styles.cgDotFinal}`}>
                    <Award size={18} strokeWidth={2.5} />
                  </div>
                  <div className={styles.cgYr}>6+ YRS</div>
                </div>

                <div className={`${styles.cgRcard} ${styles.cgRcardRole} ${styles.cgRcardFinal}`}>
                  <div className={styles.cgRtag} style={{ color: '#FF6B00' }}>
                    <TrendingUp size={11} strokeWidth={2.5} color="#FF6B00" />
                    <span>6+ YEARS</span>
                  </div>
                  <div className={styles.cgRname}>Solutions Architect / Platform Engineer</div>
                  <div className={styles.cgRdesc}>
                    Lead enterprise automation initiatives, cloud infrastructure, DevOps transformation, and software-defined networking projects.
                  </div>
                  <div className={styles.cgRnext} style={{ color: '#FF6B00' }}>
                    <ArrowRight size={11} strokeWidth={2.5} />
                    <span>Next: Enterprise Architect / Cloud Architect / DevOps Lead</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 13: FAQS (ACCORDION & CATEGORY TABS)
          ========================================================================= */}
      <section className={`${styles.contentSection} ${styles.sectionSlate}`} id="faqs">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.eyebrowBadge}>
              <HelpCircle size={14} />
              <span>FAQs</span>
            </div>
            <h2 className={styles.sectionHeading}>
              Everything You Wanted to Ask
            </h2>
            <p className={styles.sectionSubtext}>
              Still have questions? Drop us a query below — our dedicated admission counselors respond within 24 hours.
            </p>
          </div>

          <div className={styles.faqSectionWrapper}>
            {/* Category Filter Tabs */}
            <div className={styles.faqTabsRow}>
              {faqCategories.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  className={`${styles.faqTabBtn} ${faqTab === tab.id ? styles.faqTabBtnActive : ''}`}
                  onClick={() => {
                    setFaqTab(tab.id);
                    setOpenFaqIndex(0);
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Accordion Questions */}
            <div className={styles.faqList}>
              {filteredFaqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className={`${styles.faqItem} ${isOpen ? styles.isOpen : ''}`}
                  >
                    <button
                      type="button"
                      className={styles.faqQuestion}
                      onClick={() => toggleFaq(idx)}
                    >
                      <span>{faq.q}</span>
                      <ChevronDown size={18} />
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
        </div>
      </section>

      {/* =========================================================================
          FINAL BOTTOM CALL-TO-ACTION SECTION
          ========================================================================= */}
      <section className={styles.bottomCtaSection}>
        <div className={styles.container}>
          <div className={styles.bottomCtaCard}>
            <h2 className={styles.bottomTitle}>
              Ready to Advance into <br />
              <span className={styles.highlightText}>Network Automation & DevOps?</span>
            </h2>
            <p className={styles.bottomSub}>
              Attend our free 2-hour practical orientation session. Tour our DevNet cloud labs, test-drive 
              live Cisco APIs with Python, and interact with Triple CCIE instructors before making any payment.
            </p>
            <div className={styles.bottomBtnRow}>
              <button
                type="button"
                className={styles.primaryCtaBtn}
                onClick={() => handleOpenDemo('Cisco CCNA Automation Final Demo')}
              >
                <PhoneCall size={16} />
                <span>Book Free 2-Hour Practical Demo</span>
              </button>
              <button
                type="button"
                className={styles.secondaryCtaBtn}
                onClick={() => handleOpenDemo('Cisco CCNA Automation Syllabus PDF')}
              >
                <Download size={16} />
                <span>Download Full Course Syllabus</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 14: STRUCTURED JSON-LD SEO SCHEMA
          ========================================================================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "LocalBusiness",
                "@id": "https://www.imedita.com/#localbusiness",
                "name": "I-Medita Learning Solutions Private Limited",
                "image": "https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2026/05/26085113/Sample-Certificate-imedita.jpg",
                "url": "https://www.imedita.com/",
                "telephone": "+918750004411",
                "email": "info@imedita.com",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "3rd Floor, Aditi Samruddhi Building, Baner Road, Baner",
                  "addressLocality": "Pune",
                  "addressRegion": "Maharashtra",
                  "postalCode": "411045",
                  "addressCountry": "IN"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 18.559,
                  "longitude": 73.7868
                },
                "areaServed": [
                  { "@type": "City", "name": "Pune" },
                  { "@type": "Country", "name": "India" },
                  { "@type": "Place", "name": "Worldwide" }
                ],
                "sameAs": [
                  "https://www.facebook.com/imeditaindia",
                  "https://www.youtube.com/imeditaindia",
                  "https://www.linkedin.com/company/imedita-learning-solutions/mycompany/",
                  "https://www.instagram.com/imeditaindia/"
                ],
                "contactPoint": [
                  {
                    "@type": "ContactPoint",
                    "contactType": "sales",
                    "telephone": "+918750004411",
                    "email": "info@imedita.com",
                    "areaServed": "IN",
                    "availableLanguage": ["English", "Hindi"]
                  },
                  {
                    "@type": "ContactPoint",
                    "contactType": "sales",
                    "telephone": "+918750004411",
                    "email": "info@imedita.com",
                    "areaServed": "Worldwide",
                    "availableLanguage": ["English"]
                  }
                ],
                "paymentAccepted": "UPI, Debit Card, Credit Card, Net Banking, EMI, Digital Wallets, Cash, Cheque, Demand Draft, PayPal (for international students)",
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.9",
                  "reviewCount": "1897"
                }
              },
              {
                "@type": "Course",
                "@id": "https://www.imedita.com/courses/cisco-ccna-automation-training/#course",
                "name": "Cisco CCNA Automation Training – 200-901 CCNAAUTO Certification Course",
                "description": "Industry-oriented Cisco CCNA Automation training with CCIE-certified instructor-led classroom and online classes, 24x7 hands-on automation lab access, Python programming, REST APIs, Cisco Meraki and Webex APIs, network automation, Git, Postman, NETCONF/RESTCONF/YANG, real-world automation projects, mock interviews, and placement assistance. Suitable for learners in India and worldwide.",
                "image": "https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2026/05/26085113/Sample-Certificate-imedita.jpg",
                "provider": {
                  "@id": "https://www.imedita.com/#localbusiness"
                },
                "courseCode": "200-901 CCNAAUTO",
                "educationalLevel": "Associate",
                "inLanguage": ["en", "hi"],
                "coursePrerequisites": "No formal prerequisite is mandatory. Basic computer literacy, basic PC operating system navigation, and basic internet usage skills are recommended. Prior programming experience (especially Python) is beneficial but not required, as Python fundamentals for network engineers are covered in the course.",
                "teaches": [
                  "Python programming",
                  "REST APIs",
                  "Cisco Meraki APIs",
                  "Cisco Webex APIs",
                  "Network automation",
                  "Git and version control",
                  "Postman API testing",
                  "NETCONF, RESTCONF and YANG models",
                  "Application deployment and security",
                  "Network fundamentals"
                ],
                "about": [
                  { "@type": "Thing", "name": "Cisco CCNA Automation" },
                  { "@type": "Thing", "name": "Cisco 200-901 CCNAAUTO" },
                  { "@type": "Thing", "name": "Network Automation" },
                  { "@type": "Thing", "name": "Python Automation" },
                  { "@type": "Thing", "name": "REST APIs" },
                  { "@type": "Thing", "name": "Network Programmability" }
                ],
                "hasCourseInstance": [
                  {
                    "@type": "CourseInstance",
                    "courseMode": ["Onsite", "Online"],
                    "courseWorkload": "PT50H",
                    "startDate": "2026-08-17",
                    "inLanguage": ["en", "hi"],
                    "location": {
                      "@type": "Place",
                      "name": "I-Medita Learning Solutions, Baner, Pune",
                      "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "3rd Floor, Aditi Samruddhi Building, Baner Road, Baner",
                        "addressLocality": "Pune",
                        "addressRegion": "Maharashtra",
                        "postalCode": "411045",
                        "addressCountry": "IN"
                      }
                    },
                    "offers": {
                      "@type": "Offer",
                      "url": "https://www.imedita.com/courses/cisco-ccna-automation-training/",
                      "priceCurrency": "INR",
                      "eligibleRegion": { "@type": "Country", "name": "India" },
                      "availability": "https://schema.org/InStock",
                      "availableAtOrFrom": { "@id": "https://www.imedita.com/#localbusiness" }
                    }
                  },
                  {
                    "@type": "CourseInstance",
                    "courseMode": ["Onsite", "Online"],
                    "courseWorkload": "PT50H",
                    "startDate": "2026-08-22",
                    "inLanguage": ["en", "hi"],
                    "location": {
                      "@type": "Place",
                      "name": "I-Medita Learning Solutions, Baner, Pune",
                      "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "3rd Floor, Aditi Samruddhi Building, Baner Road, Baner",
                        "addressLocality": "Pune",
                        "addressRegion": "Maharashtra",
                        "postalCode": "411045",
                        "addressCountry": "IN"
                      }
                    },
                    "offers": {
                      "@type": "Offer",
                      "url": "https://www.imedita.com/courses/cisco-ccna-automation-training/",
                      "priceCurrency": "INR",
                      "eligibleRegion": { "@type": "Country", "name": "India" },
                      "availability": "https://schema.org/InStock",
                      "availableAtOrFrom": { "@id": "https://www.imedita.com/#localbusiness" }
                    }
                  },
                  {
                    "@type": "CourseInstance",
                    "courseMode": ["Onsite", "Online"],
                    "courseWorkload": "PT50H",
                    "startDate": "2026-11-23",
                    "inLanguage": ["en", "hi"],
                    "location": {
                      "@type": "Place",
                      "name": "I-Medita Learning Solutions, Baner, Pune",
                      "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "3rd Floor, Aditi Samruddhi Building, Baner Road, Baner",
                        "addressLocality": "Pune",
                        "addressRegion": "Maharashtra",
                        "postalCode": "411045",
                        "addressCountry": "IN"
                      }
                    },
                    "offers": {
                      "@type": "Offer",
                      "url": "https://www.imedita.com/courses/cisco-ccna-automation-training/",
                      "priceCurrency": "INR",
                      "eligibleRegion": { "@type": "Country", "name": "India" },
                      "availability": "https://schema.org/InStock",
                      "availableAtOrFrom": { "@id": "https://www.imedita.com/#localbusiness" }
                    }
                  },
                  {
                    "@type": "CourseInstance",
                    "courseMode": "Online",
                    "courseWorkload": "PT50H",
                    "inLanguage": "en",
                    "location": {
                      "@type": "VirtualLocation",
                      "url": "https://www.imedita.com/courses/cisco-ccna-automation-training/"
                    },
                    "offers": {
                      "@type": "Offer",
                      "url": "https://www.imedita.com/courses/cisco-ccna-automation-training/",
                      "priceCurrency": "USD",
                      "eligibleRegion": { "@type": "Place", "name": "Worldwide" },
                      "availability": "https://schema.org/InStock",
                      "acceptedPaymentMethod": "https://schema.org/PaymentCard"
                    }
                  }
                ],
                "audience": {
                  "@type": "EducationalAudience",
                  "educationalRole": ["student", "professional"],
                  "geographicArea": [
                    { "@type": "Country", "name": "India" },
                    { "@type": "Place", "name": "Worldwide" }
                  ]
                },
                "occupationalCredentialAwarded": "I-Medita Course Completion Certificate; prepares candidates for the official Cisco CCNA Automation (200-901 CCNAAUTO) certification exam, administered globally via Pearson VUE testing centers and online proctored exams"
              },
              {
                "@type": "ItemList",
                "@id": "https://www.imedita.com/courses/cisco-ccna-automation-training/#training-features",
                "name": "Cisco CCNA Automation Training Features",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Cisco CCNA Automation 200-901 CCNAAUTO Exam Preparation" },
                  { "@type": "ListItem", "position": 2, "name": "Python Programming for Network Automation" },
                  { "@type": "ListItem", "position": 3, "name": "REST API and Cisco Platform API Integration (Meraki, Webex)" },
                  { "@type": "ListItem", "position": 4, "name": "24x7 Automation Lab Access" },
                  { "@type": "ListItem", "position": 5, "name": "Git and Postman" },
                  { "@type": "ListItem", "position": 6, "name": "NETCONF, RESTCONF and YANG Models" },
                  { "@type": "ListItem", "position": 7, "name": "Real-world Network Automation Projects" },
                  { "@type": "ListItem", "position": 8, "name": "Mock Interviews and Interview Preparation" },
                  { "@type": "ListItem", "position": 9, "name": "Resume Building and Placement Assistance" },
                  { "@type": "ListItem", "position": 10, "name": "Live Online and Classroom Training" }
                ]
              }
            ]
          })
        }}
      />
    </div>
  );
}

export default CCNAAutomationCoursePage;
