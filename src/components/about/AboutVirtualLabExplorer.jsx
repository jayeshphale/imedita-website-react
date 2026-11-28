import React, { useState } from 'react';
import { 
  Server, 
  Terminal, 
  Cpu, 
  Shield, 
  Activity, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  Play,
  Layers,
  Zap,
  Info,
  Check,
  Copy,
  Radio,
  Thermometer,
  HardDrive
} from 'lucide-react';
import styles from './AboutVirtualLabExplorer.module.css';

/**
 * ADJUSTED & ENHANCED: Virtual Lab & Datacenter Rack Explorer
 * Equalized column heights, 6 authentic enterprise appliances,
 * authentic 42U rack telemetry, and compact high-tech inspection cockpit.
 */
export function AboutVirtualLabExplorer({ onOpenDemo }) {
  const [selectedUnit, setSelectedUnit] = useState('nexus9k');
  const [copied, setCopied] = useState(false);

  const rackUnits = [
    {
      id: 'nexus9k',
      unitNumber: 'U40-U42',
      name: 'Cisco Nexus 9300-FX3',
      role: 'Datacenter Spine-Leaf Core (100G)',
      badge: 'DATACENTER CORE',
      status: 'ONLINE • LIVE CLI',
      description: 'Enterprise datacenter spine-and-leaf switching engine powering multi-tenant VXLAN-EVPN fabrics with wire-speed 100G uplinks.',
      specs: [
        { label: 'Throughput', value: '3.6 Tbps Wire-Speed' },
        { label: 'Protocols', value: 'BGP-EVPN, VXLAN, OSPF' },
        { label: 'Uplinks', value: '40G / 100G QSFP28' }
      ],
      cliPreview: `Nexus-9K-Core# show ip interface brief vrf ENTERPRISE_PROD
Interface       IP-Address      Status   Protocol   VLAN/VRF
Eth1/1          10.100.1.1      up       up         SPINE-100G
Eth1/2          10.100.2.1      up       up         LEAF-TRUNK
Vlan100         192.168.10.1    up       up         MGMT-FABRIC
Nexus-9K-Core# show bgp l2vpn evpn summary
Neighbor        V    AS    MsgRcvd MsgSent   TblVer  Up/Down    State
10.255.255.1    4 65001      48123   48120      124  42w3d      Established`,
      skillsLearned: [
        'VXLAN Overlay Networks & BGP EVPN Spine-Leaf Topologies',
        'Multi-tenant VRF Segmentation & Datacenter QoS Tuning',
        'Direct Cisco NX-OS Hardware Console Troubleshooting'
      ]
    },
    {
      id: 'isr4451',
      unitNumber: 'U34-U36',
      name: 'Cisco ISR 4451-X',
      role: 'Enterprise SD-WAN & Edge Gateway',
      badge: 'ENTERPRISE SD-WAN',
      status: 'ONLINE • LIVE CLI',
      description: 'Carrier-grade routing appliance delivering hardware-accelerated IPsec encryption, Cisco SD-WAN vEdge capabilities, and high-density voice/data trunks.',
      specs: [
        { label: 'Forwarding', value: 'Up to 2 Gbps Encrypted' },
        { label: 'SD-WAN', value: 'Cisco Catalyst SD-WAN' },
        { label: 'Redundancy', value: 'Dual Hot-Swap PSUs' }
      ],
      cliPreview: `ISR4451-HQ# show sdwan control connections
PEER PEER PEER     SITE        DOMAIN PEER       PRIV  PRIV  PUB   PUB
TYPE PROT SYSTEM-IP ID         ID     PRIVATE-IP PORT  IP    PORT  STATE
vman dtls 10.1.1.10 1000       1      10.0.0.1   12346 198.5 12346 up
vbrk dtls 10.1.1.20 1000       1      10.0.0.2   12346 198.5 12346 up
ISR4451-HQ# show ip route bgp | include 172.16.0.0
B 172.16.0.0/16 [20/0] via 10.200.1.2, 3w2d, GigabitEthernet0/0/1`,
      skillsLearned: [
        'Zero-Touch Provisioning on Cisco Catalyst SD-WAN',
        'BGP Route-Maps, Prefix-Lists & MPLS Failover',
        'IPsec Site-to-Site Tunnels with Hardware Crypto Engine'
      ]
    },
    {
      id: 'paloalto',
      unitNumber: 'U28-U30',
      name: 'Palo Alto PA-3220',
      role: 'Next-Gen Firewall High Availability',
      badge: 'CYBER SECURITY',
      status: 'ONLINE • ACTIVE / PASSIVE',
      description: 'Industry-standard enterprise next-generation firewall pair with dedicated hardware processing for Layer 7 App-ID, Threat Prevention, and SSL Decryption.',
      specs: [
        { label: 'Firewall', value: '5 Gbps Threat Prevention' },
        { label: 'Inspection', value: 'Full Layer 7 App-ID' },
        { label: 'HA Mode', value: 'Active / Passive Pair' },
      ],
      cliPreview: `admin@PA-3220-HA1> show high-availability state
Group 10:
  Mode: Active-Passive
  Local Information: State: active, Priority: 100
  Peer Information:  State: passive, Priority: 110
admin@PA-3220-HA1> show running security-policy rule Branch-to-DC
Rule: Branch-to-DC { from: Trust; to: Datacenter; app: [ssl, dns, ssh]; action: allow; }`,
      skillsLearned: [
        'Active/Passive Stateful High Availability Failover',
        'Layer 7 App-ID Policy Creation & SSL Decryption',
        'WildFire Cloud Sandboxing & Zero-Day Threat Mitigation'
      ]
    },
    {
      id: 'catalyst3850',
      unitNumber: 'U22-U24',
      name: 'Cisco Catalyst 3850',
      role: 'Enterprise Campus PoE+ Stack',
      badge: 'CAMPUS ACCESS',
      status: 'ONLINE • LIVE CLI',
      description: 'High-availability converged access switch stack running StackWise-480 technology, providing Power-over-Ethernet and hardware Layer 3 routing.',
      specs: [
        { label: 'Stack Bandwidth', value: '480 Gbps StackWise' },
        { label: 'Security', value: '802.1X, DAI, DHCP Snooping' },
        { label: 'PoE Budget', value: 'PoE+ 30W Per Port' }
      ],
      cliPreview: `Cat3850-Stack# show switch
Switch/Stack Mac Address : 002a.6a33.5800 - Local Mac Address
Switch#   Role    Mac Address     Priority   Version  State
------------------------------------------------------------
*1       Master   002a.6a33.5800     15         V02     Ready
 2       Member   002a.6a33.5900      1         V02     Ready`,
      skillsLearned: [
        'StackWise-480 Interconnect Cable Ring & Master Election',
        'Dynamic ARP Inspection, DHCP Snooping & Port Security',
        'Inter-VLAN SVI Routing & HSRP Default Gateway Redundancy'
      ]
    },
    {
      id: 'checkpoint',
      unitNumber: 'U16-U18',
      name: 'Check Point Quantum 6200',
      role: 'Next-Gen Threat Prevention Appliance',
      badge: 'GATEWAY DEFENSE',
      status: 'ONLINE • LIVE GAIA',
      description: 'Enterprise security gateway appliance with SandBlast threat emulation, stateful packet inspection, and central SmartConsole management.',
      specs: [
        { label: 'Gen V Security', value: '3.72 Gbps Threat Prevention' },
        { label: 'OS Version', value: 'Check Point Gaia R81.20' },
        { label: 'Management', value: 'SmartConsole Multi-Domain' }
      ],
      cliPreview: `[Expert@CP-Quantum-6200:0]# fw ctl multik stat
ID | Active  | CPU    | Connections | Peak Connections
--------------------------------------------------------
 0 |     yes |   0    |       14890 |            42100
 1 |     yes |   1    |       15120 |            41890
[Expert@CP-Quantum-6200:0]# cpstat fw -f policy
Policy name: Enterprise_Security_Gateway_Cluster_R81`,
      skillsLearned: [
        'Check Point Gaia OS Deployment & Command Line Tuning',
        'Multi-Queue CoreXL & SecureXL Hardware Acceleration',
        'SmartConsole Firewall Policies & Site-to-Site VPN Mesh'
      ]
    },
    {
      id: 'ciscoasa',
      unitNumber: 'U10-U12',
      name: 'Cisco ASA 5525-X',
      role: 'Adaptive Security Appliance with FirePOWER',
      badge: 'FIREWALL APPLIANCE',
      status: 'ONLINE • LIVE CLI',
      description: 'Dedicated hardware security firewall with multi-context virtualization, AnyConnect SSL VPN termination, and modular FirePOWER inspection.',
      specs: [
        { label: 'Stateful Rate', value: '2 Gbps Throughput' },
        { label: 'VPN Sessions', value: 'Up to 750 AnyConnect' },
        { label: 'Contexts', value: 'Multi-Security Contexts' }
      ],
      cliPreview: `ciscoasa# show failover state
               State          Local                  Remote
State:         Active         Primary                Standby Ready
Last Failover: None
ciscoasa# show running-config access-list INSIDE_IN
access-list INSIDE_IN extended permit tcp any host 10.50.1.10 eq https
access-list INSIDE_IN extended permit ip 192.168.0.0 255.255.0.0 any`,
      skillsLearned: [
        'Active/Standby Hardware Failover Configuration',
        'AnyConnect SSL VPN Gateway & Split-Tunneling Policies',
        'Network Address Translation (NAT) & Modular Policy Framework'
      ]
    }
  ];

  const current = rackUnits.find(u => u.id === selectedUnit) || rackUnits[0];

  const handleCopyCli = () => {
    navigator.clipboard.writeText(current.cliPreview);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className={styles.labSection} id="virtual-lab-tour" aria-label="Interactive Virtual Lab Tour">
      <div className={styles.container}>
        
        {/* Section Header */}
        <div className={styles.header}>
          <div className={styles.eyebrowBadge}>
            <Server size={13} className={styles.badgeIcon} />
            <span>INTERACTIVE HARDWARE RACK EXPLORER</span>
          </div>

          <h2 className={styles.sectionHeading}>
            Inspect Our <span className={styles.headingAccent}>Physical Hardware Racks</span>
          </h2>

          <p className={styles.sectionDescription}>
            Zero packet tracer simulators. Zero emulated shortcuts. Click below to inspect our real multi-vendor 
            datacenter appliances in Baner, Pune and see what you actually configure.
          </p>
        </div>

        {/* Harmonized Explorer Layout: Balanced Heights & Proportions */}
        <div className={styles.explorerContainer}>
          
          {/* LEFT: 42U Server Rack Cabinet */}
          <div className={styles.rackCol}>
            <div className={styles.rackCabinet}>
              
              {/* Rack Header Rail */}
              <div className={styles.rackHeaderRail}>
                <div className={styles.rackTitleGroup}>
                  <HardDrive size={14} className={styles.rackTitleIcon} />
                  <span className={styles.rackBrand}>I-MEDITA DATACENTER • RACK-01</span>
                </div>
                <span className={styles.rackUnitsIndicator}>42U ENCLOSURE</span>
              </div>

              {/* Rack Units Vertical Stack */}
              <div className={styles.rackUnitsList}>
                {rackUnits.map((unit) => {
                  const isSelected = selectedUnit === unit.id;
                  return (
                    <button
                      key={unit.id}
                      type="button"
                      className={`${styles.rackSlotBtn} ${isSelected ? styles.slotActive : ''}`}
                      onClick={() => setSelectedUnit(unit.id)}
                    >
                      <div className={styles.slotMountEarLeft} />

                      <div className={styles.slotUGroup}>
                        <span className={styles.slotU}>{unit.unitNumber}</span>
                        <div className={`${styles.slotLed} ${isSelected ? styles.ledActive : ''}`} />
                      </div>

                      <div className={styles.slotMainInfo}>
                        <div className={styles.slotTopRow}>
                          <span className={styles.slotName}>{unit.name}</span>
                          <span className={styles.slotBadgePill}>{unit.badge}</span>
                        </div>
                        <span className={styles.slotRole}>{unit.role}</span>
                      </div>

                      <div className={styles.slotMountEarRight} />
                    </button>
                  );
                })}
              </div>

              {/* Rack Telemetry Footer Dock */}
              <div className={styles.rackTelemetryDock}>
                <div className={styles.telemetryItem}>
                  <Thermometer size={12} className={styles.teleIcon} />
                  <span>21°C Ambient</span>
                </div>
                <div className={styles.telemetryDivider}>•</div>
                <div className={styles.telemetryItem}>
                  <Zap size={12} className={styles.teleIconAmber} />
                  <span>2.4 kW Active</span>
                </div>
                <div className={styles.telemetryDivider}>•</div>
                <div className={styles.telemetryItem}>
                  <Radio size={12} className={styles.teleIconGreen} />
                  <span>48 Console Ports Up</span>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT: Selected Equipment Inspection Cockpit */}
          <div className={styles.inspectionCol}>
            <div className={styles.cockpitCard}>
              
              {/* Cockpit Header */}
              <div className={styles.cockpitHeader}>
                <div className={styles.cockpitInfo}>
                  <div className={styles.deviceBadgeRow}>
                    <span className={styles.categoryBadge}>{current.badge}</span>
                    <span className={styles.slotUIndicator}>{current.unitNumber}</span>
                    <span className={styles.statusPill}>
                      <span className={styles.greenPulseDot} />
                      {current.status}
                    </span>
                  </div>
                  <h3 className={styles.deviceName}>{current.name}</h3>
                  <p className={styles.deviceRole}>{current.role}</p>
                </div>

                <button 
                  type="button"
                  onClick={() => onOpenDemo && onOpenDemo(`Virtual Lab Explorer: ${current.name}`)}
                  className={styles.practiceBtn}
                >
                  <Play size={13} className={styles.playIcon} />
                  <span>Practice on this Gear</span>
                </button>
              </div>

              {/* Specifications Pills */}
              <div className={styles.specsRow}>
                {current.specs.map((sp, idx) => (
                  <div key={idx} className={styles.specItem}>
                    <span className={styles.specLabel}>{sp.label}</span>
                    <span className={styles.specValue}>{sp.value}</span>
                  </div>
                ))}
              </div>

              {/* Real CLI Terminal Window */}
              <div className={styles.terminalBox}>
                <div className={styles.terminalHeader}>
                  <div className={styles.terminalDots}>
                    <span className={`${styles.dot} ${styles.dotRed}`} />
                    <span className={`${styles.dot} ${styles.dotYellow}`} />
                    <span className={`${styles.dot} ${styles.dotGreen}`} />
                  </div>
                  <div className={styles.terminalTitle}>
                    <Terminal size={12} className={styles.terminalIcon} />
                    <span>Real Hardware CLI Console Session (Direct Serial/SSH)</span>
                  </div>
                  <button 
                    type="button" 
                    onClick={handleCopyCli} 
                    className={styles.copyCliBtn}
                    title="Copy CLI snippet"
                  >
                    {copied ? <Check size={12} /> : <Copy size={12} />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <pre className={styles.terminalCode}>
                  <code>{current.cliPreview}</code>
                </pre>
              </div>

              {/* Skills Learned Grid (Compact 2-Column Grid) */}
              <div className={styles.skillsSection}>
                <div className={styles.skillsHeading}>
                  <CheckCircle2 size={15} className={styles.checkIcon} />
                  <span>Hands-on Topologies Mastered on this Appliance:</span>
                </div>
                <div className={styles.skillsGrid}>
                  {current.skillsLearned.map((sk, idx) => (
                    <div key={idx} className={styles.skillCard}>
                      <ArrowRight size={13} className={styles.skillArrow} />
                      <span>{sk}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Guarantee Banner */}
        <div className={styles.bottomLabBanner}>
          <div className={styles.bannerInner}>
            <div className={styles.bannerIconBox}>
              <Info size={16} />
            </div>
            <div className={styles.bannerText}>
              <strong>100% Zero-Simulator Guarantee:</strong> At I-Medita, student engineers configure real Cisco Nexus, Catalyst, ISR routers, and Palo Alto firewalls. Experience authentic cables, true transceiver optics, and non-simulated command line responses.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default AboutVirtualLabExplorer;
