const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'public', 'assets', 'courses');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

function createBaseSvg(id, label, accent, content) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360" width="640" height="360" style="background:#0B0F19">
  <defs>
    <pattern id="grid_${id}" width="32" height="32" patternUnits="userSpaceOnUse">
      <path d="M 32 0 L 0 0 0 32" fill="none" stroke="rgba(255, 255, 255, 0.04)" stroke-width="1"/>
    </pattern>
    <linearGradient id="grad_${id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${accent}" stop-opacity="0.14"/>
      <stop offset="60%" stop-color="#0B0F19" stop-opacity="0.0"/>
    </linearGradient>
    <filter id="glow_${id}" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="3" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>

  <!-- Background Grid & Gradient -->
  <rect width="640" height="360" fill="url(#grid_${id})"/>
  <rect width="640" height="360" fill="url(#grad_${id})"/>
  
  <!-- Subtle Border Guides -->
  <line x1="0" y1="0" x2="640" y2="0" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
  <line x1="0" y1="359" x2="640" y2="359" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>

  <!-- Top Right Spec Capsule -->
  <g transform="translate(440, 20)">
    <rect width="180" height="24" rx="12" fill="rgba(15, 23, 42, 0.85)" stroke="rgba(255,255,255,0.12)"/>
    <circle cx="16" cy="12" r="4" fill="${accent}"/>
    <text x="28" y="16" fill="#94A3B8" font-family="'Courier New', monospace" font-size="10" font-weight="700" letter-spacing="1">${label}</text>
  </g>

  <!-- Architecture Specific Content -->
  ${content}

  <!-- Watermark Monospace Footer -->
  <text x="25" y="340" fill="#475569" font-family="'Courier New', monospace" font-size="10" letter-spacing="0.5">I-MEDITA DATACENTER LABS // ARCHITECTURE VERIFIED</text>
</svg>`;
}

// 1. CCNA 200-301 Routing Topology
const ccnaSvg = createBaseSvg('ccna', 'CISCO CCNA 200-301', '#38BDF8', `
  <!-- Topology Links -->
  <line x1="130" y1="180" x2="270" y2="180" stroke="#0284C7" stroke-width="2.5" stroke-dasharray="6,4"/>
  <line x1="270" y1="180" x2="410" y2="180" stroke="#38BDF8" stroke-width="3"/>
  <line x1="410" y1="180" x2="520" y2="120" stroke="#10B981" stroke-width="2"/>
  <line x1="410" y1="180" x2="520" y2="240" stroke="#F59E0B" stroke-width="2"/>

  <!-- Node 1: Edge Router -->
  <g transform="translate(90, 145)">
    <rect width="80" height="70" rx="8" fill="#1E293B" stroke="#38BDF8" stroke-width="1.5"/>
    <text x="40" y="32" fill="#38BDF8" font-family="Arial, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">R1: EDGE</text>
    <text x="40" y="48" fill="#94A3B8" font-family="'Courier New', monospace" font-size="9" text-anchor="middle">10.0.0.1/30</text>
    <circle cx="40" cy="58" r="3" fill="#38BDF8"/>
  </g>

  <!-- Node 2: Core Router (OSPF Area 0) -->
  <g transform="translate(230, 135)">
    <rect width="90" height="90" rx="10" fill="#0F172A" stroke="#0284C7" stroke-width="2"/>
    <circle cx="45" cy="45" r="28" fill="none" stroke="#38BDF8" stroke-width="1.5" stroke-dasharray="4,2"/>
    <text x="45" y="42" fill="#FFFFFF" font-family="Arial, sans-serif" font-size="12" font-weight="bold" text-anchor="middle">CORE R2</text>
    <text x="45" y="56" fill="#38BDF8" font-family="'Courier New', monospace" font-size="9" text-anchor="middle">[OSPF 0]</text>
  </g>

  <!-- Node 3: Catalyst Switch (802.1Q Trunk) -->
  <g transform="translate(370, 145)">
    <rect width="90" height="70" rx="8" fill="#1E293B" stroke="#0284C7" stroke-width="1.5"/>
    <text x="45" y="32" fill="#E2E8F0" font-family="Arial, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">CATALYST</text>
    <text x="45" y="48" fill="#60A5FA" font-family="'Courier New', monospace" font-size="9" text-anchor="middle">802.1Q TRUNK</text>
    <line x1="15" y1="56" x2="75" y2="56" stroke="#475569" stroke-width="2"/>
  </g>

  <!-- Subnet A: VLAN 10 -->
  <g transform="translate(500, 95)">
    <rect width="115" height="46" rx="6" fill="rgba(16, 185, 129, 0.1)" stroke="#10B981" stroke-width="1.5"/>
    <text x="12" y="20" fill="#10B981" font-family="Arial, sans-serif" font-size="10" font-weight="bold">VLAN 10: PROD</text>
    <text x="12" y="34" fill="#94A3B8" font-family="'Courier New', monospace" font-size="9">192.168.10.0/24</text>
  </g>

  <!-- Subnet B: VLAN 20 -->
  <g transform="translate(500, 215)">
    <rect width="115" height="46" rx="6" fill="rgba(245, 158, 11, 0.1)" stroke="#F59E0B" stroke-width="1.5"/>
    <text x="12" y="20" fill="#F59E0B" font-family="Arial, sans-serif" font-size="10" font-weight="bold">VLAN 20: MGMT</text>
    <text x="12" y="34" fill="#94A3B8" font-family="'Courier New', monospace" font-size="9">192.168.20.0/24</text>
  </g>

  <!-- Protocol Pills -->
  <rect x="235" y="245" width="80" height="20" rx="4" fill="rgba(56, 189, 248, 0.12)" stroke="#38BDF8"/>
  <text x="275" y="259" fill="#38BDF8" font-family="'Courier New', monospace" font-size="9" font-weight="bold" text-anchor="middle">IPv4 / IPv6</text>
`);

// 2. CCNP Enterprise Fabric (ENCOR / ENARSI)
const ccnpSvg = createBaseSvg('ccnp', 'CCNP ENTERPRISE', '#0066FF', `
  <!-- Fabric Links -->
  <path d="M 120 180 L 240 120 L 400 120 L 520 180" fill="none" stroke="#0066FF" stroke-width="2.5"/>
  <path d="M 120 180 L 240 240 L 400 240 L 520 180" fill="none" stroke="#0284C7" stroke-width="2.5"/>
  <line x1="240" y1="120" x2="240" y2="240" stroke="#38BDF8" stroke-width="2" stroke-dasharray="4,4"/>
  <line x1="400" y1="120" x2="400" y2="240" stroke="#38BDF8" stroke-width="2" stroke-dasharray="4,4"/>

  <!-- Left: Spine 1 -->
  <g transform="translate(195, 85)">
    <rect width="90" height="70" rx="8" fill="#0F172A" stroke="#0066FF" stroke-width="2"/>
    <text x="45" y="30" fill="#FFFFFF" font-family="Arial, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">SPINE 9500-A</text>
    <text x="45" y="46" fill="#38BDF8" font-family="'Courier New', monospace" font-size="9" text-anchor="middle">BGP AS 65001</text>
    <circle cx="45" cy="56" r="3" fill="#10B981"/>
  </g>

  <!-- Left: Spine 2 -->
  <g transform="translate(195, 205)">
    <rect width="90" height="70" rx="8" fill="#0F172A" stroke="#0284C7" stroke-width="2"/>
    <text x="45" y="30" fill="#FFFFFF" font-family="Arial, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">SPINE 9500-B</text>
    <text x="45" y="46" fill="#38BDF8" font-family="'Courier New', monospace" font-size="9" text-anchor="middle">VSS STACK</text>
    <circle cx="45" cy="56" r="3" fill="#10B981"/>
  </g>

  <!-- Right: Leaf 1 -->
  <g transform="translate(355, 85)">
    <rect width="90" height="70" rx="8" fill="#1E293B" stroke="#38BDF8" stroke-width="1.5"/>
    <text x="45" y="30" fill="#FFFFFF" font-family="Arial, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">LEAF SWITCH</text>
    <text x="45" y="46" fill="#94A3B8" font-family="'Courier New', monospace" font-size="9" text-anchor="middle">VRF_CORP</text>
  </g>

  <!-- Right: Leaf 2 -->
  <g transform="translate(355, 205)">
    <rect width="90" height="70" rx="8" fill="#1E293B" stroke="#38BDF8" stroke-width="1.5"/>
    <text x="45" y="30" fill="#FFFFFF" font-family="Arial, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">LEAF SWITCH</text>
    <text x="45" y="46" fill="#94A3B8" font-family="'Courier New', monospace" font-size="9" text-anchor="middle">VRF_GUEST</text>
  </g>

  <!-- Central MPLS & Segment Routing Badge -->
  <g transform="translate(265, 160)">
    <rect width="110" height="38" rx="6" fill="#0B0F19" stroke="#0066FF" stroke-width="1.5"/>
    <text x="55" y="18" fill="#38BDF8" font-family="'Courier New', monospace" font-size="9" font-weight="bold" text-anchor="middle">MPLS / SRv6</text>
    <text x="55" y="30" fill="#10B981" font-family="'Courier New', monospace" font-size="8" text-anchor="middle">L3VPN PEERING</text>
  </g>
`);

// 3. CCIE Enterprise Infrastructure (SD-WAN Fabric & Automation)
const ccieSvg = createBaseSvg('ccie', 'CCIE ENTERPRISE LAB', '#8B5CF6', `
  <!-- SD-WAN Fabric Mesh -->
  <ellipse cx="320" cy="180" rx="200" ry="85" fill="none" stroke="rgba(139, 92, 246, 0.25)" stroke-width="2" stroke-dasharray="6,4"/>
  
  <!-- Controller 1: vManage -->
  <g transform="translate(140, 80)">
    <rect width="95" height="65" rx="8" fill="#1E1B4B" stroke="#8B5CF6" stroke-width="2"/>
    <text x="47" y="28" fill="#C4B5FD" font-family="Arial, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">vMANAGE</text>
    <text x="47" y="44" fill="#94A3B8" font-family="'Courier New', monospace" font-size="8" text-anchor="middle">MANAGEMENT</text>
  </g>

  <!-- Controller 2: vSmart -->
  <g transform="translate(272, 60)">
    <rect width="95" height="65" rx="8" fill="#1E1B4B" stroke="#A78BFA" stroke-width="2"/>
    <text x="47" y="28" fill="#FFFFFF" font-family="Arial, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">vSMART</text>
    <text x="47" y="44" fill="#38BDF8" font-family="'Courier New', monospace" font-size="8" text-anchor="middle">OMP CONTROL</text>
  </g>

  <!-- Controller 3: vBond -->
  <g transform="translate(405, 80)">
    <rect width="95" height="65" rx="8" fill="#1E1B4B" stroke="#8B5CF6" stroke-width="2"/>
    <text x="47" y="28" fill="#C4B5FD" font-family="Arial, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">vBOND</text>
    <text x="47" y="44" fill="#94A3B8" font-family="'Courier New', monospace" font-size="8" text-anchor="middle">ORCHESTRATION</text>
  </g>

  <!-- Edge Nodes -->
  <g transform="translate(120, 210)">
    <rect width="105" height="60" rx="8" fill="#0F172A" stroke="#38BDF8" stroke-width="1.5"/>
    <text x="52" y="28" fill="#38BDF8" font-family="Arial, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">cEDGE 8300</text>
    <text x="52" y="44" fill="#94A3B8" font-family="'Courier New', monospace" font-size="8" text-anchor="middle">BRANCH IPSEC</text>
  </g>

  <g transform="translate(415, 210)">
    <rect width="105" height="60" rx="8" fill="#0F172A" stroke="#10B981" stroke-width="1.5"/>
    <text x="52" y="28" fill="#10B981" font-family="Arial, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">DNA CENTER</text>
    <text x="52" y="44" fill="#94A3B8" font-family="'Courier New', monospace" font-size="8" text-anchor="middle">SDA FABRIC</text>
  </g>

  <!-- Automation Bus -->
  <line x1="170" y1="240" x2="470" y2="240" stroke="#8B5CF6" stroke-width="2"/>
  <rect x="250" y="225" width="140" height="30" rx="6" fill="#0B0F19" stroke="#8B5CF6"/>
  <text x="320" y="244" fill="#E9D5FF" font-family="'Courier New', monospace" font-size="9" font-weight="bold" text-anchor="middle">PYTHON & RESTCONF</text>
`);

// 4. Palo Alto Networks PCNSA / PCNSE
const paloAltoSvg = createBaseSvg('paloalto', 'PALO ALTO PCNSE', '#F97316', `
  <!-- Single Pass Parallel Processing (SP3) Pipeline -->
  <line x1="80" y1="180" x2="560" y2="180" stroke="#EA580C" stroke-width="4"/>

  <!-- Block 1: Ingress Packet -->
  <g transform="translate(70, 140)">
    <rect width="80" height="80" rx="8" fill="#1E293B" stroke="#F97316" stroke-width="1.5"/>
    <text x="40" y="35" fill="#F97316" font-family="Arial, sans-serif" font-size="10" font-weight="bold" text-anchor="middle">INGRESS</text>
    <text x="40" y="52" fill="#94A3B8" font-family="'Courier New', monospace" font-size="8" text-anchor="middle">L2-L4 NET</text>
  </g>

  <!-- Block 2: App-ID Engine -->
  <g transform="translate(190, 125)">
    <rect width="100" height="110" rx="10" fill="#0F172A" stroke="#EA580C" stroke-width="2"/>
    <text x="50" y="35" fill="#FFFFFF" font-family="Arial, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">App-ID™</text>
    <text x="50" y="55" fill="#FDBA74" font-family="'Courier New', monospace" font-size="9" text-anchor="middle">SSL DECRYPT</text>
    <rect x="15" y="72" width="70" height="20" rx="4" fill="rgba(249, 115, 22, 0.15)"/>
    <text x="50" y="86" fill="#F97316" font-family="'Courier New', monospace" font-size="8" text-anchor="middle">PAN-OS 11</text>
  </g>

  <!-- Block 3: User-ID & Policy Rulebase -->
  <g transform="translate(325, 125)">
    <rect width="110" height="110" rx="10" fill="#0F172A" stroke="#38BDF8" stroke-width="2"/>
    <text x="55" y="35" fill="#FFFFFF" font-family="Arial, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">Content-ID™</text>
    <text x="55" y="55" fill="#38BDF8" font-family="'Courier New', monospace" font-size="9" text-anchor="middle">THREAT PREV</text>
    <text x="55" y="75" fill="#10B981" font-family="'Courier New', monospace" font-size="8" text-anchor="middle">WILDFIRE CLOUD</text>
  </g>

  <!-- Block 4: Panorama Central Sync -->
  <g transform="translate(470, 140)">
    <rect width="100" height="80" rx="8" fill="#1E293B" stroke="#10B981" stroke-width="1.5"/>
    <text x="50" y="35" fill="#10B981" font-family="Arial, sans-serif" font-size="10" font-weight="bold" text-anchor="middle">PANORAMA</text>
    <text x="50" y="52" fill="#94A3B8" font-family="'Courier New', monospace" font-size="8" text-anchor="middle">HA SYNC OK</text>
  </g>
`);

// 5. Check Point Quantum CCSE
const checkPointSvg = createBaseSvg('checkpoint', 'CHECK POINT CCSE', '#EC4899', `
  <!-- ClusterXL Sync Bus -->
  <path d="M 170 140 L 470 140" stroke="#EC4899" stroke-width="3" stroke-dasharray="6,4"/>
  <path d="M 170 240 L 470 240" stroke="#0066FF" stroke-width="3"/>

  <!-- Gateway 1: ClusterXL Active -->
  <g transform="translate(120, 105)">
    <rect width="120" height="85" rx="8" fill="#1F1528" stroke="#EC4899" stroke-width="2"/>
    <text x="60" y="30" fill="#F472B6" font-family="Arial, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">QUANTUM GW-1</text>
    <text x="60" y="48" fill="#FFFFFF" font-family="'Courier New', monospace" font-size="9" text-anchor="middle">[ACTIVE STATE]</text>
    <text x="60" y="65" fill="#94A3B8" font-family="'Courier New', monospace" font-size="8" text-anchor="middle">Gaia R81.20</text>
  </g>

  <!-- Gateway 2: ClusterXL Standby -->
  <g transform="translate(400, 105)">
    <rect width="120" height="85" rx="8" fill="#1F1528" stroke="#DB2777" stroke-width="1.5"/>
    <text x="60" y="30" fill="#F472B6" font-family="Arial, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">QUANTUM GW-2</text>
    <text x="60" y="48" fill="#A1A1AA" font-family="'Courier New', monospace" font-size="9" text-anchor="middle">[STANDBY HA]</text>
    <text x="60" y="65" fill="#94A3B8" font-family="'Courier New', monospace" font-size="8" text-anchor="middle">SYNC HEARTBEAT</text>
  </g>

  <!-- Central SmartConsole Management -->
  <g transform="translate(255, 195)">
    <rect width="130" height="75" rx="8" fill="#0F172A" stroke="#38BDF8" stroke-width="2"/>
    <text x="65" y="30" fill="#38BDF8" font-family="Arial, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">SMARTCONSOLE</text>
    <text x="65" y="48" fill="#FFFFFF" font-family="'Courier New', monospace" font-size="9" text-anchor="middle">POLICY SERVER</text>
    <text x="65" y="62" fill="#10B981" font-family="'Courier New', monospace" font-size="8" text-anchor="middle">SANDBLAST ACTIVE</text>
  </g>
`);

// 6. 100% Job Guaranteed Network Engineer Track
const jobNetSvg = createBaseSvg('jobnet', '100% JOB GUARANTEE', '#10B981', `
  <!-- Multi-Vendor Rack Frame -->
  <rect x="80" y="80" width="480" height="200" rx="10" fill="#030712" stroke="#10B981" stroke-width="1.5" stroke-dasharray="8,4"/>

  <!-- Rack Unit 1: Cisco Core -->
  <g transform="translate(105, 95)">
    <rect width="430" height="38" rx="6" fill="#0F172A" stroke="#0066FF" stroke-width="1.5"/>
    <circle cx="25" cy="19" r="5" fill="#0066FF"/>
    <text x="45" y="23" fill="#FFFFFF" font-family="Arial, sans-serif" font-size="11" font-weight="bold">CISCO CATALYST 9300 ENTERPRISE CORE</text>
    <text x="360" y="23" fill="#38BDF8" font-family="'Courier New', monospace" font-size="9">48x 10GbE</text>
  </g>

  <!-- Rack Unit 2: Palo Alto NGFW -->
  <g transform="translate(105, 143)">
    <rect width="430" height="38" rx="6" fill="#0F172A" stroke="#F97316" stroke-width="1.5"/>
    <circle cx="25" cy="19" r="5" fill="#F97316"/>
    <text x="45" y="23" fill="#FFFFFF" font-family="Arial, sans-serif" font-size="11" font-weight="bold">PALO ALTO PA-440 NEXT-GEN FIREWALL</text>
    <text x="360" y="23" fill="#FDBA74" font-family="'Courier New', monospace" font-size="9">PAN-OS 11</text>
  </g>

  <!-- Rack Unit 3: Fortinet SD-WAN -->
  <g transform="translate(105, 191)">
    <rect width="430" height="38" rx="6" fill="#0F172A" stroke="#DC2626" stroke-width="1.5"/>
    <circle cx="25" cy="19" r="5" fill="#DC2626"/>
    <text x="45" y="23" fill="#FFFFFF" font-family="Arial, sans-serif" font-size="11" font-weight="bold">FORTINET FORTIGATE 100F APPLIANCE</text>
    <text x="360" y="23" fill="#FCA5A5" font-family="'Courier New', monospace" font-size="9">FortiOS 7</text>
  </g>

  <!-- Rack Unit 4: Cloud Connect -->
  <g transform="translate(105, 239)">
    <rect width="430" height="30" rx="6" fill="#0B132B" stroke="#10B981" stroke-width="1.5"/>
    <text x="215" y="19" fill="#10B981" font-family="'Courier New', monospace" font-size="10" font-weight="bold" text-anchor="middle">★ DIRECT INDUSTRY PLACEMENT INTERVIEW MATRIX ★</text>
  </g>
`);

// 7. AWS Solutions Architect (SAA-C03)
const awsSvg = createBaseSvg('aws', 'AWS ARCHITECT SAA-C03', '#FF9900', `
  <!-- Region Box -->
  <rect x="80" y="80" width="480" height="210" rx="10" fill="#0F172A" stroke="#FF9900" stroke-width="1.5"/>
  <text x="100" y="105" fill="#FF9900" font-family="Arial, sans-serif" font-size="10" font-weight="bold">AWS REGION: ap-south-1 (MUMBAI)</text>

  <!-- VPC Container -->
  <rect x="95" y="115" width="450" height="160" rx="8" fill="#0B0F19" stroke="#38BDF8" stroke-width="1.5" stroke-dasharray="4,4"/>
  <text x="110" y="135" fill="#38BDF8" font-family="'Courier New', monospace" font-size="9">VPC 10.100.0.0/16 [MULTI-AZ]</text>

  <!-- AZ 1 Subnet -->
  <g transform="translate(115, 145)">
    <rect width="180" height="115" rx="6" fill="#1E293B" stroke="#10B981"/>
    <text x="15" y="22" fill="#10B981" font-family="Arial, sans-serif" font-size="9" font-weight="bold">AZ 1a (PUBLIC + PRIVATE)</text>
    <rect x="15" y="32" width="150" height="32" rx="4" fill="#0F172A" stroke="#64748B"/>
    <text x="25" y="52" fill="#E2E8F0" font-family="'Courier New', monospace" font-size="9">ALB + NAT GATEWAY</text>
    <rect x="15" y="70" width="150" height="32" rx="4" fill="#0F172A" stroke="#FF9900"/>
    <text x="25" y="90" fill="#FFB74D" font-family="'Courier New', monospace" font-size="9">EC2 AUTO-SCALING</text>
  </g>

  <!-- AZ 2 Subnet -->
  <g transform="translate(345, 145)">
    <rect width="180" height="115" rx="6" fill="#1E293B" stroke="#10B981"/>
    <text x="15" y="22" fill="#10B981" font-family="Arial, sans-serif" font-size="9" font-weight="bold">AZ 1b (FAILOVER REPLICA)</text>
    <rect x="15" y="32" width="150" height="32" rx="4" fill="#0F172A" stroke="#64748B"/>
    <text x="25" y="52" fill="#E2E8F0" font-family="'Courier New', monospace" font-size="9">STANDBY NAT GW</text>
    <rect x="15" y="70" width="150" height="32" rx="4" fill="#0F172A" stroke="#FF9900"/>
    <text x="25" y="90" fill="#FFB74D" font-family="'Courier New', monospace" font-size="9">AURORA MULTI-AZ DB</text>
  </g>
`);

// 8. Cyber Security Job Guaranteed
const jobCyberSvg = createBaseSvg('jobcyber', 'JOB GUARANTEE CYBER', '#EF4444', `
  <!-- SOC Grid -->
  <rect x="80" y="80" width="480" height="210" rx="10" fill="#180B0F" stroke="#EF4444" stroke-width="1.5"/>
  <text x="100" y="105" fill="#EF4444" font-family="Arial, sans-serif" font-size="11" font-weight="bold">ENTERPRISE SOC INCIDENT RESPONSE MATRIX</text>

  <!-- SIEM Center -->
  <g transform="translate(230, 125)">
    <rect width="180" height="70" rx="8" fill="#0F172A" stroke="#EF4444" stroke-width="2"/>
    <text x="90" y="30" fill="#FFFFFF" font-family="Arial, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">SIEM & EDR PLATFORM</text>
    <text x="90" y="48" fill="#F87171" font-family="'Courier New', monospace" font-size="9" text-anchor="middle">SPLUNK / SENTINEL</text>
    <text x="90" y="62" fill="#10B981" font-family="'Courier New', monospace" font-size="8" text-anchor="middle">CORRELATION RULES ACTIVE</text>
  </g>

  <!-- Sensor Left -->
  <g transform="translate(100, 205)">
    <rect width="150" height="65" rx="6" fill="#1E293B" stroke="#F97316"/>
    <text x="75" y="26" fill="#FDBA74" font-family="Arial, sans-serif" font-size="10" font-weight="bold" text-anchor="middle">NGFW TRAFFIC LOGS</text>
    <text x="75" y="44" fill="#94A3B8" font-family="'Courier New', monospace" font-size="8" text-anchor="middle">SSL DECRYPTED FEED</text>
  </g>

  <!-- Sensor Right -->
  <g transform="translate(390, 205)">
    <rect width="150" height="65" rx="6" fill="#1E293B" stroke="#38BDF8"/>
    <text x="75" y="26" fill="#38BDF8" font-family="Arial, sans-serif" font-size="10" font-weight="bold" text-anchor="middle">ZERO-TRUST BROKER</text>
    <text x="75" y="44" fill="#94A3B8" font-family="'Courier New', monospace" font-size="8" text-anchor="middle">MICRO-SEGMENTATION</text>
  </g>
`);

// 9. Multi-Vendor Security Guaranteed
const jobSecSvg = createBaseSvg('jobsec', 'SECURITY ENGINEER TRACK', '#06B6D4', `
  <path d="M 120 180 L 230 180 L 340 180 L 450 180" stroke="#06B6D4" stroke-width="3"/>
  
  <g transform="translate(90, 130)">
    <rect width="100" height="100" rx="8" fill="#164E63" stroke="#06B6D4" stroke-width="1.5"/>
    <text x="50" y="35" fill="#FFFFFF" font-family="Arial, sans-serif" font-size="10" font-weight="bold" text-anchor="middle">CISCO ASA/FTD</text>
    <text x="50" y="55" fill="#67E8F9" font-family="'Courier New', monospace" font-size="8" text-anchor="middle">PERIMETER DEFENSE</text>
  </g>
  <g transform="translate(210, 130)">
    <rect width="100" height="100" rx="8" fill="#1E293B" stroke="#F97316" stroke-width="1.5"/>
    <text x="50" y="35" fill="#F97316" font-family="Arial, sans-serif" font-size="10" font-weight="bold" text-anchor="middle">PALO ALTO</text>
    <text x="50" y="55" fill="#FED7AA" font-family="'Courier New', monospace" font-size="8" text-anchor="middle">APP-ID CONTROL</text>
  </g>
  <g transform="translate(330, 130)">
    <rect width="100" height="100" rx="8" fill="#1E293B" stroke="#EC4899" stroke-width="1.5"/>
    <text x="50" y="35" fill="#F472B6" font-family="Arial, sans-serif" font-size="10" font-weight="bold" text-anchor="middle">CHECK POINT</text>
    <text x="50" y="55" fill="#FBCFE8" font-family="'Courier New', monospace" font-size="8" text-anchor="middle">CLUSTERXL HA</text>
  </g>
  <g transform="translate(450, 130)">
    <rect width="100" height="100" rx="8" fill="#1E293B" stroke="#DC2626" stroke-width="1.5"/>
    <text x="50" y="35" fill="#EF4444" font-family="Arial, sans-serif" font-size="10" font-weight="bold" text-anchor="middle">FORTINET</text>
    <text x="50" y="55" fill="#FECACA" font-family="'Courier New', monospace" font-size="8" text-anchor="middle">SECURE SD-WAN</text>
  </g>
`);

// 10. Multi-Vendor Firewall Masterclass
const multiFwSvg = createBaseSvg('multifw', 'MULTI-VENDOR FIREWALL', '#8B5CF6', `
  <rect x="80" y="80" width="480" height="200" rx="8" fill="#1E1B4B" stroke="#8B5CF6" stroke-width="1.5"/>
  <text x="100" y="105" fill="#C4B5FD" font-family="Arial, sans-serif" font-size="11" font-weight="bold">UNIVERSAL PACKET INSPECTION & NAT ENGINE</text>
  
  <g transform="translate(100, 130)">
    <rect width="80" height="120" rx="6" fill="#0F172A" stroke="#8B5CF6"/>
    <text x="40" y="35" fill="#FFFFFF" font-family="Arial, sans-serif" font-size="9" font-weight="bold" text-anchor="middle">INGRESS</text>
    <text x="40" y="65" fill="#94A3B8" font-family="'Courier New', monospace" font-size="8" text-anchor="middle">TCP/UDP</text>
  </g>
  <g transform="translate(200, 130)">
    <rect width="100" height="120" rx="6" fill="#0F172A" stroke="#38BDF8"/>
    <text x="50" y="35" fill="#38BDF8" font-family="Arial, sans-serif" font-size="9" font-weight="bold" text-anchor="middle">STATEFUL</text>
    <text x="50" y="55" fill="#FFFFFF" font-family="'Courier New', monospace" font-size="8" text-anchor="middle">CONN TABLE</text>
    <text x="50" y="75" fill="#94A3B8" font-family="'Courier New', monospace" font-size="8" text-anchor="middle">SYN/ACK TRACK</text>
  </g>
  <g transform="translate(320, 130)">
    <rect width="100" height="120" rx="6" fill="#0F172A" stroke="#10B981"/>
    <text x="50" y="35" fill="#10B981" font-family="Arial, sans-serif" font-size="9" font-weight="bold" text-anchor="middle">NAT & VPN</text>
    <text x="50" y="55" fill="#FFFFFF" font-family="'Courier New', monospace" font-size="8" text-anchor="middle">STATIC/PAT</text>
    <text x="50" y="75" fill="#94A3B8" font-family="'Courier New', monospace" font-size="8" text-anchor="middle">IPSEC IKEv2</text>
  </g>
  <g transform="translate(440, 130)">
    <rect width="100" height="120" rx="6" fill="#0F172A" stroke="#F97316"/>
    <text x="50" y="35" fill="#F97316" font-family="Arial, sans-serif" font-size="9" font-weight="bold" text-anchor="middle">L7 DPI</text>
    <text x="50" y="55" fill="#FFFFFF" font-family="'Courier New', monospace" font-size="8" text-anchor="middle">SNORT / IPS</text>
    <text x="50" y="75" fill="#94A3B8" font-family="'Courier New', monospace" font-size="8" text-anchor="middle">ANTIVIRUS</text>
  </g>
`);

// 11. Fortinet FortiGate NSE
const fortinetSvg = createBaseSvg('fortinet', 'FORTINET NSE', '#DC2626', `
  <rect x="80" y="80" width="480" height="200" rx="8" fill="#1A0A0A" stroke="#DC2626" stroke-width="1.5"/>
  <text x="100" y="105" fill="#F87171" font-family="Arial, sans-serif" font-size="11" font-weight="bold">FORTIOS SECURITY FABRIC & SD-WAN</text>
  <g transform="translate(100, 130)">
    <rect width="160" height="120" rx="8" fill="#0F172A" stroke="#DC2626"/>
    <text x="80" y="35" fill="#FFFFFF" font-family="Arial, sans-serif" font-size="10" font-weight="bold" text-anchor="middle">FORTIGATE 100F</text>
    <text x="80" y="55" fill="#EF4444" font-family="'Courier New', monospace" font-size="9" text-anchor="middle">NP7 / CP9 ASIC</text>
    <text x="80" y="75" fill="#94A3B8" font-family="'Courier New', monospace" font-size="8" text-anchor="middle">HARDWARE ACCEL</text>
  </g>
  <g transform="translate(280, 130)">
    <rect width="140" height="120" rx="8" fill="#0F172A" stroke="#38BDF8"/>
    <text x="70" y="35" fill="#38BDF8" font-family="Arial, sans-serif" font-size="10" font-weight="bold" text-anchor="middle">SECURE SD-WAN</text>
    <text x="70" y="55" fill="#FFFFFF" font-family="'Courier New', monospace" font-size="9" text-anchor="middle">SLA MONITOR</text>
    <text x="70" y="75" fill="#94A3B8" font-family="'Courier New', monospace" font-size="8" text-anchor="middle">JITTER / LATENCY</text>
  </g>
  <g transform="translate(440, 130)">
    <rect width="100" height="120" rx="8" fill="#0F172A" stroke="#10B981"/>
    <text x="50" y="35" fill="#10B981" font-family="Arial, sans-serif" font-size="10" font-weight="bold" text-anchor="middle">FORTIANALYZER</text>
    <text x="50" y="55" fill="#94A3B8" font-family="'Courier New', monospace" font-size="8" text-anchor="middle">LOG SYNC</text>
  </g>
`);

// 12. Cisco ASA Firewall
const ciscoAsaSvg = createBaseSvg('ciscoasa', 'CISCO ASA 5500-X', '#1E40AF', `
  <rect x="80" y="80" width="480" height="200" rx="8" fill="#0F172A" stroke="#2563EB" stroke-width="1.5"/>
  <text x="100" y="105" fill="#60A5FA" font-family="Arial, sans-serif" font-size="11" font-weight="bold">MODULAR POLICY FRAMEWORK & FAILOVER PAIR</text>
  <g transform="translate(100, 130)">
    <rect width="160" height="120" rx="8" fill="#1E293B" stroke="#2563EB"/>
    <text x="80" y="35" fill="#FFFFFF" font-family="Arial, sans-serif" font-size="10" font-weight="bold" text-anchor="middle">PRIMARY ASA 5516-X</text>
    <text x="80" y="55" fill="#38BDF8" font-family="'Courier New', monospace" font-size="9" text-anchor="middle">INSIDE (100) -> OUT (0)</text>
    <text x="80" y="75" fill="#94A3B8" font-family="'Courier New', monospace" font-size="8" text-anchor="middle">STATEFUL ACTIVE</text>
  </g>
  <g transform="translate(300, 130)">
    <rect width="160" height="120" rx="8" fill="#1E293B" stroke="#60A5FA"/>
    <text x="80" y="35" fill="#FFFFFF" font-family="Arial, sans-serif" font-size="10" font-weight="bold" text-anchor="middle">SECONDARY ASA</text>
    <text x="80" y="55" fill="#94A3B8" font-family="'Courier New', monospace" font-size="9" text-anchor="middle">STANDBY READY</text>
    <text x="80" y="75" fill="#10B981" font-family="'Courier New', monospace" font-size="8" text-anchor="middle">SYNC HEARTBEAT</text>
  </g>
`);

// 13. Cisco FTD (Firepower Threat Defense)
const ciscoFtdSvg = createBaseSvg('ciscoftd', 'CISCO FTD & FMC', '#2563EB', `
  <rect x="80" y="80" width="480" height="200" rx="8" fill="#0F172A" stroke="#38BDF8" stroke-width="1.5"/>
  <text x="100" y="105" fill="#38BDF8" font-family="Arial, sans-serif" font-size="11" font-weight="bold">FIREPOWER MANAGEMENT CENTER (FMC) TOPOLOGY</text>
  <g transform="translate(120, 130)">
    <rect width="180" height="120" rx="8" fill="#1E293B" stroke="#38BDF8"/>
    <text x="90" y="35" fill="#38BDF8" font-family="Arial, sans-serif" font-size="10" font-weight="bold" text-anchor="middle">FMC CONTROLLER</text>
    <text x="90" y="55" fill="#FFFFFF" font-family="'Courier New', monospace" font-size="9" text-anchor="middle">SNORT 3.0 IPS</text>
    <text x="90" y="75" fill="#94A3B8" font-family="'Courier New', monospace" font-size="8" text-anchor="middle">TALOS THREAT INTEL</text>
  </g>
  <g transform="translate(340, 130)">
    <rect width="180" height="120" rx="8" fill="#1E293B" stroke="#10B981"/>
    <text x="90" y="35" fill="#10B981" font-family="Arial, sans-serif" font-size="10" font-weight="bold" text-anchor="middle">FTD 2100 SENSOR</text>
    <text x="90" y="55" fill="#FFFFFF" font-family="'Courier New', monospace" font-size="9" text-anchor="middle">PRE-FILTER & PREF</text>
    <text x="90" y="75" fill="#94A3B8" font-family="'Courier New', monospace" font-size="8" text-anchor="middle">SSL/TLS INSPECTION</text>
  </g>
`);

// 14. CEH (Certified Ethical Hacker)
const cehSvg = createBaseSvg('ceh', 'CEH ETHICAL HACKING', '#22C55E', `
  <rect x="80" y="80" width="480" height="200" rx="8" fill="#051B0F" stroke="#22C55E" stroke-width="1.5"/>
  <text x="100" y="105" fill="#4ADE80" font-family="Arial, sans-serif" font-size="11" font-weight="bold">5-PHASE PENETRATION TESTING BLUEPRINT</text>
  <g transform="translate(95, 130)">
    <rect width="85" height="120" rx="6" fill="#0F172A" stroke="#22C55E"/>
    <text x="42" y="35" fill="#4ADE80" font-family="Arial, sans-serif" font-size="8" font-weight="bold" text-anchor="middle">1. RECON</text>
    <text x="42" y="55" fill="#94A3B8" font-family="'Courier New', monospace" font-size="8" text-anchor="middle">OSINT/NMAP</text>
  </g>
  <g transform="translate(185, 130)">
    <rect width="85" height="120" rx="6" fill="#0F172A" stroke="#38BDF8"/>
    <text x="42" y="35" fill="#38BDF8" font-family="Arial, sans-serif" font-size="8" font-weight="bold" text-anchor="middle">2. SCAN</text>
    <text x="42" y="55" fill="#94A3B8" font-family="'Courier New', monospace" font-size="8" text-anchor="middle">VULN DISCOV</text>
  </g>
  <g transform="translate(275, 130)">
    <rect width="85" height="120" rx="6" fill="#0F172A" stroke="#F59E0B"/>
    <text x="42" y="35" fill="#FBBF24" font-family="Arial, sans-serif" font-size="8" font-weight="bold" text-anchor="middle">3. EXPLOIT</text>
    <text x="42" y="55" fill="#94A3B8" font-family="'Courier New', monospace" font-size="8" text-anchor="middle">METASPLOIT</text>
  </g>
  <g transform="translate(365, 130)">
    <rect width="85" height="120" rx="6" fill="#0F172A" stroke="#EF4444"/>
    <text x="42" y="35" fill="#F87171" font-family="Arial, sans-serif" font-size="8" font-weight="bold" text-anchor="middle">4. MAINTAIN</text>
    <text x="42" y="55" fill="#94A3B8" font-family="'Courier New', monospace" font-size="8" text-anchor="middle">PIVOT/PERSIST</text>
  </g>
  <g transform="translate(455, 130)">
    <rect width="85" height="120" rx="6" fill="#0F172A" stroke="#A855F7"/>
    <text x="42" y="35" fill="#C084FC" font-family="Arial, sans-serif" font-size="8" font-weight="bold" text-anchor="middle">5. COVER</text>
    <text x="42" y="55" fill="#94A3B8" font-family="'Courier New', monospace" font-size="8" text-anchor="middle">AUDIT LOGS</text>
  </g>
`);

// 15. Cisco SD-WAN (ENSDWI)
const sdwanSvg = createBaseSvg('sdwan', 'CISCO SD-WAN OVERLAY', '#14B8A6', `
  <rect x="80" y="80" width="480" height="200" rx="8" fill="#0D2024" stroke="#14B8A6" stroke-width="1.5"/>
  <text x="100" y="105" fill="#2DD4BF" font-family="Arial, sans-serif" font-size="11" font-weight="bold">vMANAGE / vSMART / vBOND OVERLAY FABRIC</text>
  <g transform="translate(100, 130)">
    <rect width="130" height="120" rx="8" fill="#0F172A" stroke="#14B8A6"/>
    <text x="65" y="35" fill="#2DD4BF" font-family="Arial, sans-serif" font-size="10" font-weight="bold" text-anchor="middle">vSMART</text>
    <text x="65" y="55" fill="#FFFFFF" font-family="'Courier New', monospace" font-size="9" text-anchor="middle">OMP ROUTING</text>
    <text x="65" y="75" fill="#94A3B8" font-family="'Courier New', monospace" font-size="8" text-anchor="middle">CONTROL PLANE</text>
  </g>
  <g transform="translate(255, 130)">
    <rect width="130" height="120" rx="8" fill="#0F172A" stroke="#38BDF8"/>
    <text x="65" y="35" fill="#38BDF8" font-family="Arial, sans-serif" font-size="10" font-weight="bold" text-anchor="middle">vMANAGE</text>
    <text x="65" y="55" fill="#FFFFFF" font-family="'Courier New', monospace" font-size="9" text-anchor="middle">TEMPLATES</text>
    <text x="65" y="75" fill="#94A3B8" font-family="'Courier New', monospace" font-size="8" text-anchor="middle">GUI MONITORING</text>
  </g>
  <g transform="translate(410, 130)">
    <rect width="130" height="120" rx="8" fill="#0F172A" stroke="#F59E0B"/>
    <text x="65" y="35" fill="#FBBF24" font-family="Arial, sans-serif" font-size="10" font-weight="bold" text-anchor="middle">cEDGE ROUTERS</text>
    <text x="65" y="55" fill="#FFFFFF" font-family="'Courier New', monospace" font-size="9" text-anchor="middle">IPSEC OVERLAY</text>
    <text x="65" y="75" fill="#94A3B8" font-family="'Courier New', monospace" font-size="8" text-anchor="middle">APP-AWARE ROUTE</text>
  </g>
`);

// 16. Cisco SD-Access (SDA)
const sdaSvg = createBaseSvg('sda', 'CISCO SD-ACCESS', '#0284C7', `
  <rect x="80" y="80" width="480" height="200" rx="8" fill="#0B1C2D" stroke="#0284C7" stroke-width="1.5"/>
  <text x="100" y="105" fill="#38BDF8" font-family="Arial, sans-serif" font-size="11" font-weight="bold">DNA CENTER & ISE CAMPUS FABRIC</text>
  <g transform="translate(100, 130)">
    <rect width="130" height="120" rx="8" fill="#0F172A" stroke="#0284C7"/>
    <text x="65" y="35" fill="#38BDF8" font-family="Arial, sans-serif" font-size="10" font-weight="bold" text-anchor="middle">DNA CENTER</text>
    <text x="65" y="55" fill="#FFFFFF" font-family="'Courier New', monospace" font-size="9" text-anchor="middle">AUTOMATION</text>
    <text x="65" y="75" fill="#94A3B8" font-family="'Courier New', monospace" font-size="8" text-anchor="middle">FABRIC BUILDER</text>
  </g>
  <g transform="translate(255, 130)">
    <rect width="130" height="120" rx="8" fill="#0F172A" stroke="#10B981"/>
    <text x="65" y="35" fill="#10B981" font-family="Arial, sans-serif" font-size="10" font-weight="bold" text-anchor="middle">CISCO ISE</text>
    <text x="65" y="55" fill="#FFFFFF" font-family="'Courier New', monospace" font-size="9" text-anchor="middle">POLICY SGT</text>
    <text x="65" y="75" fill="#94A3B8" font-family="'Courier New', monospace" font-size="8" text-anchor="middle">ZERO TRUST AAA</text>
  </g>
  <g transform="translate(410, 130)">
    <rect width="130" height="120" rx="8" fill="#0F172A" stroke="#8B5CF6"/>
    <text x="65" y="35" fill="#C084FC" font-family="Arial, sans-serif" font-size="10" font-weight="bold" text-anchor="middle">VXLAN / LISP</text>
    <text x="65" y="55" fill="#FFFFFF" font-family="'Courier New', monospace" font-size="9" text-anchor="middle">DATA ENCAP</text>
    <text x="65" y="75" fill="#94A3B8" font-family="'Courier New', monospace" font-size="8" text-anchor="middle">BORDER & EDGE</text>
  </g>
`);

// 17. F5 Load Balancer (BIG-IP LTM)
const f5Svg = createBaseSvg('f5', 'F5 BIG-IP LTM', '#E11D48', `
  <rect x="80" y="80" width="480" height="200" rx="8" fill="#200B13" stroke="#E11D48" stroke-width="1.5"/>
  <text x="100" y="105" fill="#FB7185" font-family="Arial, sans-serif" font-size="11" font-weight="bold">FULL PROXY TRAFFIC DISTRIBUTION MATRIX</text>
  <g transform="translate(100, 130)">
    <rect width="100" height="120" rx="6" fill="#0F172A" stroke="#E11D48"/>
    <text x="50" y="35" fill="#FB7185" font-family="Arial, sans-serif" font-size="9" font-weight="bold" text-anchor="middle">CLIENT VIP</text>
    <text x="50" y="55" fill="#FFFFFF" font-family="'Courier New', monospace" font-size="8" text-anchor="middle">VIRTUAL SERVER</text>
    <text x="50" y="75" fill="#94A3B8" font-family="'Courier New', monospace" font-size="8" text-anchor="middle">SSL OFFLOAD</text>
  </g>
  <g transform="translate(225, 130)">
    <rect width="120" height="120" rx="6" fill="#0F172A" stroke="#38BDF8"/>
    <text x="60" y="35" fill="#38BDF8" font-family="Arial, sans-serif" font-size="9" font-weight="bold" text-anchor="middle">TMOS ENGINE</text>
    <text x="60" y="55" fill="#FFFFFF" font-family="'Courier New', monospace" font-size="8" text-anchor="middle">iRULES SCRIPT</text>
    <text x="60" y="75" fill="#94A3B8" font-family="'Courier New', monospace" font-size="8" text-anchor="middle">PERSISTENCE</text>
  </g>
  <g transform="translate(370, 130)">
    <rect width="170" height="120" rx="6" fill="#0F172A" stroke="#10B981"/>
    <text x="85" y="35" fill="#10B981" font-family="Arial, sans-serif" font-size="9" font-weight="bold" text-anchor="middle">NODE POOL</text>
    <text x="85" y="55" fill="#FFFFFF" font-family="'Courier New', monospace" font-size="8" text-anchor="middle">SERVER 1, 2, 3</text>
    <text x="85" y="75" fill="#94A3B8" font-family="'Courier New', monospace" font-size="8" text-anchor="middle">ROUND ROBIN / LEAST</text>
  </g>
`);

// Write files
const files = {
  'ccna-200-301.svg': ccnaSvg,
  'ccnp-enterprise.svg': ccnpSvg,
  'ccie-enterprise.svg': ccieSvg,
  'palo-alto-pcnse.svg': paloAltoSvg,
  'checkpoint-ccse.svg': checkPointSvg,
  'job-guaranteed-network.svg': jobNetSvg,
  'aws-solutions-architect.svg': awsSvg,
  'job-guaranteed-cyber.svg': jobCyberSvg,
  'job-guaranteed-multivendor.svg': jobSecSvg,
  'multivendor-firewall.svg': multiFwSvg,
  'fortinet-nse.svg': fortinetSvg,
  'cisco-asa.svg': ciscoAsaSvg,
  'cisco-ftd.svg': ciscoFtdSvg,
  'ceh-ethical-hacking.svg': cehSvg,
  'cisco-sdwan.svg': sdwanSvg,
  'cisco-sdaccess.svg': sdaSvg,
  'f5-load-balancer.svg': f5Svg
};

for (const [filename, content] of Object.entries(files)) {
  fs.writeFileSync(path.join(outDir, filename), content.trim());
  console.log('Created:', filename);
}
console.log('All 17 course architecture SVG files created successfully!');

