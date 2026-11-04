import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const jobGuaranteed = [
  { label: "Multi-Track Job Guaranteed Training for Network Engineers", href: "https://www.imedita.com/courses/job-guaranteed-training-for-network-engineers/" },
  { label: "Multi-Track Job Guaranteed Training with Cyber Security", href: "https://www.imedita.com/courses/job-guaranteed-training-for-cyber-security-engineers/" },
  { label: "Multi-Vendor Job Guaranteed Training for Security Engineers", href: "https://www.imedita.com/courses/multi-vendor-training/" }
];

const networkSecurity = [
  { label: "Multi Vendor Firewall Training", href: "https://www.imedita.com/courses/multi-vendor-training/" },
  { label: "Palo Alto Firewall Training", href: "https://www.imedita.com/courses/palo-alto-firewall-training/" },
  { label: "Checkpoint Firewall Training", href: "https://www.imedita.com/courses/checkpoint-firewall-training/" },
  { label: "Fortinet Firewall Training", href: "https://www.imedita.com/courses/fortinet-firewall-training/" },
  { label: "Cisco ASA Firewall Training", href: "https://www.imedita.com/courses/cisco-asa-firewall-training/" },
  { label: "Cisco FTD Firewall Training", href: "https://www.imedita.com/courses/cisco-firepower-training/" },
  { label: "Network Security Associate Training", href: "https://www.imedita.com/courses/multi-vendor-training/" },
  { label: "CEH Certified Ethical Hacker Training", href: "https://www.imedita.com/courses/ethical-hacking-training/" }
];

const trendingCourses = [
  { label: "Cisco CCNA Certification Training", href: "/courses/ccna-training" },
  { label: "Cisco SD-Access Training", href: "https://www.imedita.com/courses/cisco-sda-training/" },
  { label: "Cisco CCNP Enterprise Certification Training", href: "https://www.imedita.com/courses/ccnp-training/" },
  { label: "Cisco CCIE Enterprise Certification Training", href: "https://www.imedita.com/courses/ccie-training/" },
  { label: "Cisco ENARSI Certification Training", href: "https://www.imedita.com/courses/ccnp-training/" },
  { label: "Cisco CCNP Security Certification Training", href: "https://www.imedita.com/courses/cisco-ccnp-security-training/" },
  { label: "Cisco CCIE Security Certification Training", href: "https://www.imedita.com/courses/ccie-security-training/" },
  { label: "AWS Certification Training", href: "https://www.imedita.com/courses/aws-solution-architect-associate-training/" },
  { label: "CEH Certification Training", href: "https://www.imedita.com/courses/ethical-hacking-training/" },
  { label: "Cisco SD-WAN Certification Training", href: "https://www.imedita.com/courses/sd-wan-training/" },
  { label: "Palo Alto PCNSE Certification Training", href: "https://www.imedita.com/courses/palo-alto-firewall-training/" },
  { label: "Checkpoint CCSE Certification Training", href: "https://www.imedita.com/courses/checkpoint-firewall-training/" },
  { label: "F5 Load Balancer Certification Training", href: "https://www.imedita.com/courses/f5-training/" }
];

const freeResources = [
  { label: "Top CCNA Interview Questions and Answers", href: "https://www.imedita.com/blog/" },
  { label: "Top CCNP Interview Questions and Answers", href: "https://www.imedita.com/blog/" },
  { label: "Top CCNA Resume Templates", href: "https://www.imedita.com/free-resources/" },
  { label: "Top Cisco SD-WAN Interview Questions", href: "https://www.imedita.com/blog/" },
  { label: "Top Palo Alto Firewall Interview Questions", href: "https://www.imedita.com/blog/" }
];

const InlineGroup = ({ links }) => (
  <div className={styles.inlineLinksList}>
    {links.map((item, idx) => (
      <React.Fragment key={idx}>
        {item.href.startsWith('/') ? (
          <Link to={item.href} className={styles.inlineLink}>{item.label}</Link>
        ) : (
          <a href={item.href} className={styles.inlineLink}>{item.label}</a>
        )}
        {idx < links.length - 1 && <span className={styles.separator}>|</span>}
      </React.Fragment>
    ))}
  </div>
);

export function Footer() {
  return (
    <footer className={styles.footerRoot}>
      <div className={styles.footerContainer}>
        
        {/* TOP TIER */}
        <div className={`${styles.topTier} scroll-reveal`}>
          <div className={styles.logoCol}>
            <Link to="/">
              <img 
                src="https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2022/06/10071502/i-medita-logo-White-1-1024x287.png" 
                alt="I-Medita" 
                className={styles.logoImg}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/assets/i-medita-logo-white.png";
                }}
              />
            </Link>
          </div>

          <div className={styles.linkCol}>
            <a href="https://www.imedita.com/about-us/" className={styles.topLink}>About us</a>
            <a href="https://www.imedita.com/privacy-policy/" className={styles.topLink}>Privacy Policy</a>
            <a href="https://www.imedita.com/terms-of-use/" className={styles.topLink}>Terms of Use</a>
            <a href="https://www.imedita.com/payment/" className={styles.topLink}>Online Payment Gateway</a>
            <a href="https://www.imedita.com/refund-policy/" className={styles.topLink}>Refund Policy</a>
            <a href="https://www.imedita.com/support/" className={styles.topLink}>Support - Submit a Ticket</a>
            <a href="https://www.imedita.com/contact-us/" className={styles.topLink}>Contact Us</a>
          </div>

          <div className={styles.linkCol}>
            <a href="https://www.imedita.com/free-resources/" className={styles.topLink}>Free Interview Guides</a>
            <a href="https://www.imedita.com/free-resources/" className={styles.topLink}>Free Resume Templates</a>
            <a href="https://www.imedita.com/free-resources/" className={styles.topLink}>Free Exam Practice Questions</a>
            <a href="https://www.imedita.com/courses/" className={styles.topLink}>Free Courses</a>
          </div>

          <div className={styles.linkCol}>
            <a href="https://www.imedita.com/corporate-training/" className={styles.topLink}>Corporate Training</a>
            <a href="https://www.imedita.com/hire-from-us/" className={styles.topLink}>Hire from us</a>
            <a href="https://www.imedita.com/industrial-visit-pune/" className={styles.topLink}>Industrial Visit For Colleges</a>
          </div>

          <div className={styles.appCol}>
            <div className={styles.appButtonGroup}>
              <a href="https://play.google.com/store/apps/details?id=com.imedita.learn" target="_blank" rel="noreferrer" className={styles.appBtn}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-1.0002s.4482-1.0002.9993-1.0002c.5516 0 1.0002.4486 1.0002 1.0002 0 .5516-.4486 1.0002-1.0002 1.0002m-11.046 0c-.5511 0-.9993-.4486-.9993-1.0002s.4482-1.0002.9993-1.0002c.5516 0 1.0002.4486 1.0002 1.0002 0 .5516-.4486 1.0002-1.0002 1.0002m11.4045-6.02l1.996-3.4572c.1084-.1875.0441-.4282-.1434-.5367-.1875-.1085-.4282-.0442-.5367.1433l-2.023 3.5041C15.6888 8.441 13.9038 8 12 8c-1.9038 0-3.6888.441-5.1744 1.2149L4.8026 5.7108c-.1085-.1875-.3492-.2518-.5367-.1433-.1875.1085-.2518.3492-.1434.5367l1.996 3.4572C2.688 11.4554 1 14.733 1 18.5h22c0-3.767-1.688-7.0446-5.1185-9.1786"/>
                </svg>
                <span>Get the Android App</span>
              </a>
              <a href="https://apps.apple.com/app/imedita-learning/id1500000000" target="_blank" rel="noreferrer" className={styles.appBtn}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.99.6-2.64 1.35-.57.65-1.07 1.72-.94 2.74 1 .08 2.04-.49 2.66-1.24z"/>
                </svg>
                <span>Get the iOS App</span>
              </a>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className={styles.divider}></div>

        {/* BOTTOM TIER */}
        <div className={`${styles.bottomTier} scroll-reveal`}>
          <div className={styles.categoryBlock}>
            <h4 className={styles.categoryTitle}>Popular 100% Job Guaranteed Programs</h4>
            <InlineGroup links={jobGuaranteed} />
          </div>

          <div className={styles.categoryBlock}>
            <h4 className={styles.categoryTitle}>Popular Network Security Programs</h4>
            <InlineGroup links={networkSecurity} />
          </div>

          <div className={styles.categoryBlock}>
            <h4 className={styles.categoryTitle}>Popular Trending Courses</h4>
            <InlineGroup links={trendingCourses} />
          </div>

          <div className={styles.categoryBlock}>
            <h4 className={styles.categoryTitle}>Trending Free Resources</h4>
            <InlineGroup links={freeResources} />
          </div>
        </div>

        {/* FOOTER BASE */}
        <div className={`${styles.footerBase} scroll-reveal`}>
          <h5 className={styles.addressHeading}>Address</h5>
          <p className={styles.addressLine}><strong>3rd Floor, Aditi Samruddhi Building,</strong></p>
          <p className={styles.addressLine}>Baner Road, Baner, Pune – 411 045, Maharashtra, India</p>
          <p className={styles.addressLine}>Landmark: Near Baner Welcome Board.</p>
          <p className={styles.copyrightNotice}>
            © 2026–2027 – I-Medita Learning Solutions. All Rights Reserved. The certification names are the trademarks of their respective owners.
          </p>
        </div>

      </div>
    </footer>
  );
}

export { Footer as SiteFooter };
export default Footer;
