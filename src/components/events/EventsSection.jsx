import React from 'react';
import { 
  Radio, 
  Calendar, 
  Clock, 
  Video, 
  MapPin, 
  Users, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import styles from './EventsSection.module.css';

const featuredEvent = {
  id: "ccie-masterclass",
  isLive: true,
  status: "Free Masterclass",
  date: "Saturday, Nov 14, 2026",
  time: "6:00 PM - 8:30 PM IST",
  title: "Building Enterprise SD-WAN & Multi-Region VPC Overlays",
  desc: "Join Triple CCIE Saurabh Yadav in a live hands-on architecture masterclass. Learn how to design redundant IPSec fabrics, configure vManage control policies, and integrate cloud VPCs.",
  speaker: {
    name: "Saurabh Yadav",
    role: "Triple CCIE #46962 & Chief Architect",
    image: "https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/12/10071401/Saurabh-Yadav-imedita.svg"
  },
  seatsLeft: "14 Seats Remaining",
  registerUrl: "https://www.imedita.com/events/sd-wan-masterclass/"
};

const upcomingEvents = [
  {
    id: "firewall-bootcamp",
    mode: "Live Interactive Workshop",
    modeIcon: Video,
    title: "Zero-Trust Perimeter Defense with Palo Alto Firewalls",
    date: "Sunday, Nov 22, 2026",
    time: "11:00 AM IST",
    seats: "Limited Slots",
    registerUrl: "https://www.imedita.com/events/palo-alto-workshop/"
  },
  {
    id: "campus-lab-day",
    mode: "Pune Campus Lab Access",
    modeIcon: MapPin,
    title: "Open Datacenter Lab Day: Hands-on with Real Cisco 9300 Switches",
    date: "Saturday, Nov 28, 2026",
    time: "10:00 AM - 4:00 PM IST",
    seats: "Offline Physical Seats",
    registerUrl: "https://www.imedita.com/events/open-lab-day/"
  }
];

export function EventsSection({ onOpenDemo }) {
  return (
    <section className={styles.eventsSection} id="events">
      <div className={styles.sectionContainer}>
        
        {/* Header Block */}
        <div className={styles.headerBlock}>
          <div className={styles.eyebrowBadge}>
            <span className={styles.pulseLive}></span>
            <span>Workshops & Masterclasses</span>
          </div>
          <h2 className={styles.sectionHeading}>
            Upcoming Live Technical Bootcamps
          </h2>
          <p className={styles.sectionSubtext}>
            Join interactive weekend labs, topology deep-dives, and certification webinars hosted by working CCIE architects.
          </p>
        </div>

        {/* Bento Split Layout */}
        <div className={styles.eventsGrid}>
          
          {/* Left Column: Featured Hero Event */}
          <div className={styles.featuredCard}>
            <div>
              <div className={styles.featuredTop}>
                <span className={styles.liveTag}>
                  <Radio size={13} />
                  <span>{featuredEvent.status}</span>
                </span>
                <span className={styles.dateBadge}>
                  <Calendar size={13} color="#0066FF" />
                  <span>{featuredEvent.date}</span>
                </span>
              </div>

              <h3 className={styles.featuredTitle}>{featuredEvent.title}</h3>
              <p className={styles.featuredDesc}>{featuredEvent.desc}</p>

              <div className={styles.instructorStrip}>
                <img
                  src={featuredEvent.speaker.image}
                  alt={featuredEvent.speaker.name}
                  className={styles.speakerAvatar}
                />
                <div className={styles.speakerInfo}>
                  <span className={styles.speakerName}>{featuredEvent.speaker.name}</span>
                  <span className={styles.speakerCredential}>{featuredEvent.speaker.role}</span>
                </div>
              </div>
            </div>

            <div className={styles.featuredActionRow}>
              <div className={styles.seatCount}>
                <Users size={14} />
                <span>{featuredEvent.seatsLeft}</span>
              </div>
              <a
                href={featuredEvent.registerUrl}
                target="_blank"
                rel="noreferrer"
                className={styles.primaryCta}
                onClick={(e) => {
                  if (onOpenDemo && featuredEvent.registerUrl.startsWith('#')) {
                    e.preventDefault();
                    onOpenDemo(featuredEvent.title);
                  }
                }}
              >
                <span>Reserve Free Seat</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>

          {/* Right Column: Stacked Upcoming Events */}
          <div className={styles.sideStack}>
            {upcomingEvents.map((evt) => {
              const ModeIcon = evt.modeIcon;
              return (
                <div key={evt.id} className={styles.compactCard}>
                  <div>
                    <div className={styles.compactTop}>
                      <span className={styles.modePill}>
                        <ModeIcon size={12} />
                        <span>{evt.mode}</span>
                      </span>
                    </div>

                    <h4 className={styles.compactTitle}>{evt.title}</h4>

                    <div className={styles.compactMeta}>
                      <div className={styles.compactMetaItem}>
                        <Calendar size={13} color="#0066FF" />
                        <span>{evt.date}</span>
                      </div>
                      <div className={styles.compactMetaItem}>
                        <Clock size={13} color="#64748B" />
                        <span>{evt.time}</span>
                      </div>
                    </div>
                  </div>

                  <div className={styles.compactFooter}>
                    <span style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 600 }}>
                      {evt.seats}
                    </span>
                    <a
                      href={evt.registerUrl}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.linkCta}
                      onClick={(e) => {
                        if (onOpenDemo && evt.registerUrl.startsWith('#')) {
                          e.preventDefault();
                          onOpenDemo(evt.title);
                        }
                      }}
                    >
                      <span>Register Now</span>
                      <ArrowRight size={13} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

export { EventsSection as UpcomingBatchesSection };
export default EventsSection;

