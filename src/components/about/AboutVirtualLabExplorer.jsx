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
  Info
} from 'lucide-react';
import styles from './AboutVirtualLabExplorer.module.css';

/**
 * SECTION 3: Virtual Lab & Datacenter Rack Explorer
 * Interactive inspection of Maharashtra's #1 Physical Cisco Datacenter Lab
 */
export function AboutVirtualLabExplorer({ onOpenDemo }) {
  const [selectedUnit, setSelectedUnit] = useState('nexus9k');

  const rackUnits = [
    {
      id: 'nexus9k',
      unitNumber: 'U40-U42',
      name: 'Cisco Nexus 9300-FX3 Series',
      role: 'Datacenter Spine-Leaf Core (100G)',
      badge: 'DATACENTER CORE',
      status: 'ONLINE • LIVE CLI',
      description: 'Enterprise datacenter spine-and-leaf switching engine powering multi-tenant VXLAN-EVPN fabrics with wire-speed 100G uplinks.',
      image: 'https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/06/10071301/imedita_72.jpg',
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
        'Configuring VXLAN Overlay Networks & BGP EVPN Spine-Leaf Topologies',
        'Multi-tenant VRF Segmentation & Datacenter QoS traffic prioritization',
        'Hardware CLI troubleshooting on real Cisco NX-OS'
      ]
    },
    {
      id: 'isr4451',
      unitNumber: 'U32-U34',
      name: 'Cisco ISR 4451-X Enterprise Router',
      role: 'Enterprise SD-WAN & Branch Aggregation',
      badge: 'ENTERPRISE SD-WAN',
      status: 'ONLINE • LIVE CLI',
      description: 'Carrier-grade routing appliance delivering hardware-accelerated IPsec encryption, Cisco SD-WAN vEdge capabilities, and high-density voice/data trunks.',
      image: 'https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/06/10071301/imedita_71.jpg',
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
        'Deploying Cisco Catalyst SD-WAN fabrics with zero-touch provisioning',
        'BGP route filtering, route-maps, and prefix-lists on Cisco IOS-XE',
        'Live failover testing between Dual MPLS and Broadband ISP links'
      ]
    },
    {
      id: 'paloalto',
      unitNumber: 'U24-U26',
      name: 'Palo Alto Networks PA-3220',
      role: 'Next-Gen Firewall High Availability Pair',
      badge: 'CYBER SECURITY',
      status: 'ONLINE • ACTIVE / PASSIVE',
      description: 'Industry-standard enterprise next-generation firewall pair with dedicated hardware processing for Layer 7 App-ID, Threat Prevention, and SSL Decryption.',
      image: 'https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/06/10071301/imedita_69.jpg',
      specs: [
        { label: 'Firewall', value: '5 Gbps Threat Prevention' },
        { label: 'Inspection', value: 'Full Layer 7 App-ID' },
        { label: 'HA Mode', value: 'Stateful Active / Passive' },
      ],
      cliPreview: `admin@PA-3220-HA1> show high-availability state
Group 10:
  Mode: Active-Passive
  Local Information:
    State: active
    Priority: 100
  Peer Information:
    State: passive
    Priority: 110
admin@PA-3220-HA1> show running security-policy rule Branch-to-DC
Rule: Branch-to-DC { from: Trust; to: Datacenter; source: any; application: [ssl, dns, ssh]; action: allow; }`,
      skillsLearned: [
        'Configuring Palo Alto Active/Passive High Availability failover clusters',
        'Creating L7 App-ID security policies & SSL forward proxy decryption',
        'Threat Prevention, WildFire sandboxing & URL filtering policy tuning'
      ]
    },
    {
      id: 'catalyst3850',
      unitNumber: 'U16-U18',
      name: 'Cisco Catalyst 3850 PoE+ Stack',
      role: 'Enterprise Campus Distribution & PoE',
      badge: 'CAMPUS ACCESS',
      status: 'ONLINE • LIVE CLI',
      description: 'High-availability converged access switch stack running StackWise-480 technology, providing Power-over-Ethernet and hardware Layer 3 routing.',
      image: 'https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/06/10071301/imedita_70.jpg',
      specs: [
        { label: 'Stack Bandwidth', value: '480 Gbps StackWise' },
        { label: 'Features', value: '802.1X, DAI, DHCP Snooping' },
        { label: 'Power', value: 'PoE+ 30W Per Port' }
      ],
      cliPreview: `Cat3850-Stack# show switch
Switch/Stack Mac Address : 002a.6a33.5800 - Local Mac Address
Mac persistency wait time: Indefinite
                                             H/W   Current
Switch#   Role    Mac Address     Priority   Version  State
------------------------------------------------------------
*1       Master   002a.6a33.5800     15         V02     Ready
 2       Member   002a.6a33.5900      1         V02     Ready`,
      skillsLearned: [
        'StackWise-480 cable interconnectivity, master election & state replication',
        'Dynamic ARP Inspection, DHCP Snooping, and Port Security hardening',
        'Inter-VLAN routing, HSRP gateway redundancy & 802.1Q trunking'
      ]
    }
  ];

  const current = rackUnits.find(u => u.id === selectedUnit) || rackUnits[0];

  return (
    <section className={styles.labSection} id="virtual-lab-tour" aria-label="Interactive Virtual Lab Tour">
      <div className={styles.container}>
        
        {/* Header */}
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

        {/* Interactive Lab Stage */}
        <div className={styles.explorerContainer}>
          
          {/* LEFT: 42U Server Rack Selector */}
          <div className={styles.rackCol}>
            <div className={styles.rackFrame}>
              <div className={styles.rackTopRail}>
                <span className={styles.rackBrand}>I-MEDITA DATACENTER • RACK-01</span>
                <span className={styles.rackUnitsIndicator}>42U ENCLOSURE</span>
              </div>

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
                      <div className={styles.slotLeft}>
                        <span className={styles.slotU}>{unit.unitNumber}</span>
                        <div className={styles.slotLed} />
                      </div>

                      <div className={styles.slotInfo}>
                        <span className={styles.slotName}>{unit.name}</span>
                        <span className={styles.slotRole}>{unit.role}</span>
                      </div>

                      <div className={styles.slotRight}>
                        <span className={styles.slotStatus}>{unit.badge}</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className={styles.rackBottomRail}>
                <span className={styles.liveCableNote}>
                  <Zap size={13} className={styles.zapIcon} />
                  <span>Cisco Nexus, ISR &amp; Palo Alto Hardware Online 24/7</span>
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: Selected Equipment Inspection Cockpit */}
          <div className={styles.inspectionCol}>
            <div className={styles.cockpitCard}>
              
              {/* Cockpit Header */}
              <div className={styles.cockpitHeader}>
                <div>
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
                  <Play size={14} className={styles.playIcon} />
                  <span>Practice on this Gear</span>
                </button>
              </div>

              {/* Technical Specifications Grid */}
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
                  <Terminal size={13} className={styles.terminalIcon} />
                  <span className={styles.terminalTitle}>Active CLI Console Session • Real Physical Hardware</span>
                </div>
                <pre className={styles.terminalCode}>
                  <code>{current.cliPreview}</code>
                </pre>
              </div>

              {/* Skills Learned On This Unit */}
              <div className={styles.skillsSection}>
                <h4 className={styles.skillsHeading}>
                  <CheckCircle2 size={15} className={styles.checkIcon} />
                  <span>What You Will Configure on this Appliance:</span>
                </h4>
                <ul className={styles.skillsList}>
                  {current.skillsLearned.map((sk, idx) => (
                    <li key={idx} className={styles.skillItem}>
                      <ArrowRight size={13} className={styles.arrowIcon} />
                      <span>{sk}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Guarantee Banner */}
        <div className={styles.bottomLabBanner}>
          <div className={styles.bannerInner}>
            <Info size={16} className={styles.infoIcon} />
            <p>
              <strong>100% Zero-Simulator Policy:</strong> At I-Medita, students practice on physical Cisco racks in class or through dedicated low-latency remote console pods. Experience real cables, real fiber, and real console access.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default AboutVirtualLabExplorer;
