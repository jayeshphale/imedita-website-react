export const liveTrainingCategories = [
  {
    id: 'job-guarantee',
    name: 'Job Guarantee Courses',
    desc: '100% Placement Tracks',
    icon: 'Award',
    link: '#job-guarantee-courses',
    promo: {
      eyebrow: 'Career Programs',
      title: 'Job Guarantee Network Training',
      desc: 'Comprehensive multi-vendor training with 100% written placement assurance and 24/7 physical lab access.',
      ctaText: 'Explore Career Track'
    },
    courses: [
      { 
        name: 'Network Security Engineer Track', 
        desc: 'Cisco, Palo Alto & Fortinet Multi-Vendor',
        icon: 'ShieldCheck',
        link: '#network-security-engineer' 
      },
      { 
        name: 'Enterprise Network Engineer Track', 
        desc: 'Dual-Stack Routing, Switching & Wireless',
        icon: 'Layers',
        link: '#multi-track-job-guarantee' 
      },
      { 
        name: 'Cyber Security Engineer Track', 
        desc: 'SOC Ops, Threat Hunting & Incident Defense',
        icon: 'Lock',
        link: '#cyber-security-engineer' 
      }
    ]
  },
  {
    id: 'cisco',
    name: 'Cisco',
    desc: 'CCNA, CCNP & CCIE Labs',
    icon: 'Network',
    link: '#cisco',
    promo: {
      eyebrow: 'Flagship Labs',
      title: 'Cisco CCNA to CCIE Masterclass',
      desc: 'Hands-on practice on real Cisco hardware racks guided by CCIE #35912 certified instructors.',
      ctaText: 'Book Free Demo Class'
    },
    courses: [
      { name: 'CCNA (200-301)', desc: 'Implementing & Administering Solutions', icon: 'Network', link: '/courses/ccna-training' },
      { name: 'Cisco SD-WAN (ENSDWI)', desc: 'SD-WAN Architecture & Deployment', icon: 'Globe', link: '#cisco-sdwan' },
      { name: 'CCNP Security (SCOR)', desc: 'Implementing Core Security Technologies', icon: 'Shield', link: '#ccnp-security' },
      { name: 'Cisco SVPN Training', desc: 'Securing Solutions with VPNs', icon: 'KeyRound', link: '#cisco-svpn' },
      { name: 'Cisco SISE Training', desc: 'Identity Services Engine (ISE)', icon: 'Fingerprint', link: '#cisco-sise' },
      { name: 'Cisco SD-Access', desc: 'DNA Center & Fabric Edge Provisioning', icon: 'Share2', link: '#cisco-sd-access' },
      { name: 'CCIE Enterprise Infrastructure', desc: 'Dual-Stack Core & Network Automation', icon: 'Award', link: '#ccie-enterprise-infrastructure' },
      { name: 'CCIE Security', desc: 'Complex Enterprise Security Architecture', icon: 'ShieldAlert', link: '#ccie-security' }
    ]
  },
  {
    id: 'palo-alto',
    name: 'Palo Alto Networks',
    desc: 'PCNSE & Next-Gen Firewalls',
    icon: 'Flame',
    link: '#palo-alto',
    promo: {
      eyebrow: 'Firewall Mastery',
      title: 'Palo Alto Next-Gen Security',
      desc: 'App-ID, User-ID, SSL decryption, and threat prevention on physical PAN-OS appliances.',
      ctaText: 'View Firewall Modules'
    },
    courses: [
      { name: 'Palo Alto Firewall (PCNSE)', desc: 'PAN-OS, App-ID, Threat & GlobalProtect', icon: 'Flame', link: '#palo-alto-firewall' }
    ]
  },
  {
    id: 'fortinet',
    name: 'Fortinet',
    desc: 'NSE 4-7 & FortiGate Fabric',
    icon: 'Shield',
    link: '#fortinet',
    promo: {
      eyebrow: 'Infrastructure Security',
      title: 'Fortinet FortiGate Training',
      desc: 'Fortinet Security Fabric, IPsec VPN tunnels, antivirus inspection, and high availability.',
      ctaText: 'View Fortinet Track'
    },
    courses: [
      { name: 'FortiGate Firewall (NSE 4)', desc: 'Enterprise Security Fabric & IPsec VPN', icon: 'Shield', link: '#fortigate-firewall' }
    ]
  },
  {
    id: 'checkpoint',
    name: 'Checkpoint',
    desc: 'CCSA & Quantum Gateways',
    icon: 'Lock',
    link: '#checkpoint',
    promo: {
      eyebrow: 'Perimeter Defense',
      title: 'Check Point Quantum R81.x',
      desc: 'Deploying, managing, and troubleshooting Check Point Quantum Gateways and ClusterXL.',
      ctaText: 'View Check Point Track'
    },
    courses: [
      { name: 'Check Point Firewall (CCSA)', desc: 'Quantum Gateways & SmartConsole R81', icon: 'Lock', link: '#checkpoint-firewall' }
    ]
  },
  {
    id: 'ec-council',
    name: 'EC-Council',
    desc: 'CEH v13 & Hands-on Labs',
    icon: 'Terminal',
    link: '#ec-council',
    promo: {
      eyebrow: 'Cyber Defense',
      title: 'CEH v13 AI-Powered Curriculum',
      desc: 'Practical ethical hacking, attack methodologies, vulnerability assessment, and countermeasures.',
      ctaText: 'Explore CEH Syllabus'
    },
    courses: [
      { name: 'CEH v13 (Ethical Hacker)', desc: 'Certified Ethical Hacker with AI Labs', icon: 'Terminal', link: '#cehv13' }
    ]
  },
  {
    id: 'f5-networks',
    name: 'F5 Networks',
    desc: 'BIG-IP LTM & DNS Traffic',
    icon: 'Server',
    link: '#f5-networks',
    promo: {
      eyebrow: 'Application Delivery',
      title: 'F5 BIG-IP LTM & DNS Architecture',
      desc: 'Virtual servers, load balancing algorithms, iRules programming, and health monitoring.',
      ctaText: 'Explore F5 Modules'
    },
    courses: [
      { name: 'F5 BIG-IP LTM + DNS', desc: 'Local & Global Traffic Management', icon: 'Server', link: '#f5-ltm-dns' }
    ]
  },
  {
    id: 'aws',
    name: 'AWS',
    desc: 'Solutions Architect & Cloud',
    icon: 'Cloud',
    link: '#aws',
    promo: {
      eyebrow: 'Cloud Infrastructure',
      title: 'AWS Cloud Networking Specialization',
      desc: 'VPC design, Transit Gateways, Direct Connect hybrid links, Route 53, and security groups.',
      ctaText: 'View AWS Curriculum'
    },
    courses: [
      { name: 'AWS Advanced Networking', desc: 'Specialty ANS-C01 Enterprise Cloud', icon: 'CloudLightning', link: '#aws-advanced-networking' },
      { name: 'AWS Solutions Architect (SAA)', desc: 'Resilient & Scalable Cloud Solutions', icon: 'Cloud', link: '#aws-saa' }
    ]
  },
  {
    id: 'network-automation',
    name: 'Network Automation',
    desc: 'Python, Ansible & NetDevOps',
    icon: 'Cpu',
    link: '#network-automation',
    promo: {
      eyebrow: 'Modern DevOps',
      title: 'Ansible Network Automation',
      desc: 'Automating multi-vendor switch and router configuration pushes, backups, and state validation.',
      ctaText: 'Explore Automation Track'
    },
    courses: [
      { name: 'Ansible Network Automation', desc: 'Automated Multi-Vendor Infrastructure', icon: 'Cpu', link: '#ansible-network-automation' }
    ]
  }
];
