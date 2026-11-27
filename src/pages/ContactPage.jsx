import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { ContactHeroStage } from '../components/contact/ContactHeroStage';
import { ContactDemoSpotlight } from '../components/contact/ContactDemoSpotlight';
import { ContactCampusShowcase } from '../components/contact/ContactCampusShowcase';
import { ContactFaqSection } from '../components/contact/ContactFaqSection';
import { ContactFinalCTA } from '../components/contact/ContactFinalCTA';
import styles from './ContactPage.module.css';

export function ContactPage() {
  const context = useOutletContext() || {};
  const { handleOpenDemo } = context;

  // Set document title & SEO meta tags
  useEffect(() => {
    document.title = "Contact I-Medita | Training Center in Pune, Phone, Email & Support";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "Contact I-Medita Learning Solutions in Baner, Pune. Reach us at +91 8750004411 or info@imedita.com for Cisco CCNA, CCNP, Cyber Security training, demo classes, and admissions.";

    // Smooth scroll to top on mount
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // JSON-LD Structured Data for LocalBusiness & ContactPage
  const contactJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    'name': 'I-Medita Contact Us',
    'description': 'Contact details for I-Medita Cisco & Cyber Security Training Institute in Pune, Maharashtra.',
    'url': 'https://www.imedita.com/contact/',
    'mainEntity': {
      '@type': 'EducationalOrganization',
      'name': 'I-Medita Learning Solutions',
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
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': '18.562253',
        'longitude': '73.784405'
      },
      'openingHoursSpecification': [
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          'opens': '10:00',
          'closes': '19:00'
        }
      ],
      'sameAs': [
        'https://www.facebook.com/imeditapune/',
        'https://twitter.com/imeditapune',
        'https://www.linkedin.com/company/i-medita-learning-solutions/',
        'https://www.youtube.com/user/imedita'
      ]
    }
  };

  return (
    <div className={styles.pageWrapper}>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />

      {/* 1. HERO SPLIT STAGE: Story, Direct Touchpoints, Pune Lab Dossier & Floating Form */}
      <ContactHeroStage onOpenDemo={handleOpenDemo} />

      {/* 2. DEMO SPOTLIGHT: "Experience I-Medita Before You Enroll" 4 Pillars & Demo CTA */}
      <ContactDemoSpotlight onOpenDemo={handleOpenDemo} />

      {/* 3. CAMPUS SHOWCASE: "A Great Place to Learn & Grow" Office, Verified Map & Real Racks */}
      <ContactCampusShowcase />

      {/* 4. FREQUENTLY ASKED QUESTIONS */}
      <ContactFaqSection />

      {/* 5. FINAL HIGH-CONVERSION CTA */}
      <ContactFinalCTA onOpenDemo={handleOpenDemo} />
    </div>
  );
}

export default ContactPage;
