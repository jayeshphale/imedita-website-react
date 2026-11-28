import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { AboutHero } from '../components/about/AboutHero';
import { AboutImpactStats } from '../components/about/AboutImpactStats';
import { AboutWhyChoose } from '../components/about/AboutWhyChoose';
import { AboutTrainers } from '../components/about/AboutTrainers';
import { AboutCorporatePresence } from '../components/about/AboutCorporatePresence';
import { AboutLearningEnvironment } from '../components/about/AboutLearningEnvironment';
import { AboutFinalCTA } from '../components/about/AboutFinalCTA';
import styles from './AboutPage.module.css';

/**
 * I-Medita About Us Page - Premium Corporate Redesign
 * Reference: https://www.imedita.com/about-us/
 * Strict adherence to Design System, Alternating Slate/White Sections, and Verified Facts.
 */
export function AboutPage() {
  const context = useOutletContext() || {};
  const { handleOpenDemo } = context;

  // Set document title & SEO meta tags
  useEffect(() => {
    document.title = "About Us | I-Medita - Premier Cisco & Cyber Security Training Institute";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "Learn about I-Medita, India's trusted technology training institute in Pune. Over a decade of excellence in Cisco CCNA, CCNP, Cyber Security, 24/7 physical hardware labs, and certified CCIE faculty.";

    // Scroll to top on mount
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Schema.org Structured Data for AboutPage & EducationalOrganization
  const aboutJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    'name': 'About I-Medita Learning Solutions',
    'description': 'Premier Cisco & Cyber Security training institute in Pune, Maharashtra with Maharashtra’s largest physical Cisco lab.',
    'url': 'https://www.imedita.com/about-us/',
    'mainEntity': {
      '@type': 'EducationalOrganization',
      'name': 'I-Medita Learning Solutions',
      'foundingDate': '2014',
      'url': 'https://www.imedita.com',
      'logo': 'https://www.imedita.com/assets/logo.png',
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
      },
      'sameAs': [
        'https://www.facebook.com/imeditapune/',
        'https://twitter.com/imeditapune',
        'https://www.linkedin.com/company/i-medita-learning-solutions/',
        'https://www.youtube.com/user/imedita'
      ]
    }
  };

  return (
    <main className={styles.pageWrapper}>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />

      {/* SECTION 1: Premium About Hero (Two-column layout, Soft Slate) */}
      <AboutHero onOpenDemo={handleOpenDemo} />

      {/* SECTION 2: Our Journey & Impact (6 Verified Impact Metrics, Pure White) */}
      <AboutImpactStats />

      {/* SECTION 3: What Makes I-Medita Different? (4 Feature Cards, Soft Slate) */}
      <AboutWhyChoose onOpenDemo={handleOpenDemo} />

      {/* SECTION 4: Meet Our Expert Trainers (Certified CCIE Mentors Grid, Pure White) */}
      <AboutTrainers />

      {/* SECTION 5: Global Corporate Presence (59 Enterprise Logos Marquee, Soft Slate) */}
      <AboutCorporatePresence />

      {/* SECTION 6: Our Learning Environment (High-Res Campus & Lab Photo Gallery, Pure White) */}
      <AboutLearningEnvironment />

      {/* SECTION 7: Career & Learning CTA (Deep Corporate Navy Closing Enclosure) */}
      <AboutFinalCTA onOpenDemo={handleOpenDemo} />
    </main>
  );
}

export default AboutPage;
