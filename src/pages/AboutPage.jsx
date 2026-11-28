import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { AboutHero } from '../components/about/AboutHero';
import { AboutStoryTimeline } from '../components/about/AboutStoryTimeline';
import { AboutVirtualLabExplorer } from '../components/about/AboutVirtualLabExplorer';
import { AboutImpactStats } from '../components/about/AboutImpactStats';
import { AboutWhyChoose } from '../components/about/AboutWhyChoose';
import { AboutTrainers } from '../components/about/AboutTrainers';
import { AboutCorporatePresence } from '../components/about/AboutCorporatePresence';
import { AboutLearningEnvironment } from '../components/about/AboutLearningEnvironment';
import { AboutFinalCTA } from '../components/about/AboutFinalCTA';
import styles from './AboutPage.module.css';

/**
 * I-Medita About Us Page - Creative Storytelling & Visual Lab Tour Edition
 * Fully responsive, alternating Slate ⇄ White themes, zero dummy data.
 */
export function AboutPage() {
  const context = useOutletContext() || {};
  const { handleOpenDemo } = context;

  // Set document title & SEO meta tags
  useEffect(() => {
    document.title = "About Us | I-Medita - The 10-Year Story & Maharashtra's #1 Cisco Lab";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "Explore the I-Medita story: From 2014 genesis to Maharashtra's largest physical Cisco datacenter lab. Inspect our hardware racks, meet dual & triple CCIE architects, and join 10,000+ alumni.";

    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Schema.org Structured Data
  const aboutJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    'name': 'About I-Medita Learning Solutions',
    'description': 'Premier Cisco & Cyber Security training institute in Pune with Maharashtra’s largest physical datacenter lab.',
    'url': 'https://www.imedita.com/about-us/',
    'mainEntity': {
      '@type': 'EducationalOrganization',
      'name': 'I-Medita Learning Solutions',
      'foundingDate': '2014',
      'url': 'https://www.imedita.com',
      'telephone': '+918750004411',
      'email': 'info@imedita.com',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '3rd Floor, Aditi Samruddhi Building, Baner Road, Baner',
        'addressLocality': 'Pune',
        'addressRegion': 'Maharashtra',
        'postalCode': '411045',
        'addressCountry': 'IN'
      },
      'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': '4.9',
        'reviewCount': '11200'
      }
    }
  };

  return (
    <main className={styles.pageWrapper}>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />

      {/* SECTION 1: Cinematic Vision Story Hero (Slate #f8fafc) */}
      <AboutHero onOpenDemo={handleOpenDemo} />

      {/* SECTION 2: The 10-Year Interactive Story Timeline: 2014 to 2026 (Pure White #ffffff) */}
      <AboutStoryTimeline />

      {/* SECTION 3: Virtual Lab & Datacenter Rack Explorer (Soft Slate #f8fafc) */}
      <AboutVirtualLabExplorer onOpenDemo={handleOpenDemo} />

      {/* SECTION 4: Our Journey & Bento Impact Metrics Hub (Pure White #ffffff) */}
      <AboutImpactStats />

      {/* SECTION 5: Why Professionals Choose I-Medita & Comparison Matrix (Soft Slate #f8fafc) */}
      <AboutWhyChoose onOpenDemo={handleOpenDemo} />

      {/* SECTION 6: Meet Our Expert CCIE Certified Architects (Pure White #ffffff) */}
      <AboutTrainers />

      {/* SECTION 7: Global Corporate Presence & 59 Enterprise Logos (Soft Slate #f8fafc) */}
      <AboutCorporatePresence />

      {/* SECTION 8: Campus & Virtual Lab Tour Photo Gallery with Lightbox (Pure White #ffffff) */}
      <AboutLearningEnvironment />

      {/* SECTION 9: Closing Career Milestone Launchpad CTA (Navy Enclosure Box) */}
      <AboutFinalCTA onOpenDemo={handleOpenDemo} />
    </main>
  );
}

export default AboutPage;
