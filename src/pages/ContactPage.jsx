import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { 
  PhoneCall, 
  MessageCircle, 
  Calendar, 
  ArrowRight, 
  Sparkles, 
  Star, 
  Users, 
  Server, 
  Award 
} from 'lucide-react';
import { PageHero } from '../components/common/PageHero';
import { ContactOptions } from '../components/contact/ContactOptions';
import { ContactFormSection } from '../components/contact/ContactFormSection';
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

      {/* =========================================================================
          SECTION 1: GLOBAL REUSABLE PAGE HERO (Creative, Attractive Light Theme)
          Can be reused across: About Us, Privacy Policy, Terms, Support, etc.
          ========================================================================= */}
      <PageHero
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Contact Us' }
        ]}
        badge={{
          text: 'Admissions & Inquiries Desk',
          icon: Sparkles,
          pulse: true
        }}
        title={
          <>
            Let's Start Your <span className={styles.gradientAccent}>Learning Journey</span>
          </>
        }
        description="Have questions about our training programs, certifications, or career opportunities? Our expert team in Baner, Pune is here to guide your next career milestone."
        actions={
          <div className={styles.heroActionGroup}>
            <a 
              href="tel:+918750004411" 
              className={styles.phoneActionBtn}
              title="Call our admissions desk directly"
            >
              <div className={styles.phoneIconBox}>
                <PhoneCall size={18} />
              </div>
              <div className={styles.btnTextStack}>
                <span className={styles.btnActionLabel}>Talk to Our Team</span>
                <span className={styles.btnActionSub}>+91 8750004411</span>
              </div>
            </a>

            <a 
              href="https://wa.me/918750004411?text=Hi%20I-Medita%20Team%2C%20I%20have%20an%20inquiry%20regarding%20training%20programs." 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.whatsappActionBtn}
              title="Chat directly with our team on WhatsApp"
            >
              <div className={styles.whatsappIconBox}>
                <MessageCircle size={18} />
              </div>
              <div className={styles.btnTextStack}>
                <span className={styles.btnActionLabel}>WhatsApp Us</span>
                <span className={styles.whatsappSub}>Instant Reply</span>
              </div>
            </a>

            <button 
              type="button" 
              onClick={() => handleOpenDemo ? handleOpenDemo('Contact Hero Quick Action') : null}
              className={styles.demoActionBtn}
              title="Book a free live classroom or online demo session"
            >
              <Calendar size={18} />
              <span>Book a Free Demo</span>
              <ArrowRight size={16} className={styles.btnArrow} />
            </button>
          </div>
        }
        stats={[
          { isStar: true, label: '4.9/5 Rating', subtext: '(11,200+ Reviews)' },
          { icon: Users, label: '10,000+', subtext: 'Engineers Trained' },
          { icon: Server, label: 'Maharashtra\'s Largest', subtext: 'Physical Cisco Lab' },
          { icon: Award, label: '100%', subtext: 'Placement Assistance' }
        ]}
      />

      {/* SECTION 2: 3 Modern Elevated Contact Cards (Phone, WhatsApp, Email) */}
      <ContactOptions />

      {/* SECTION 3: Main Conversion Two-Column Section (Form + Demo Promo Card) */}
      <ContactFormSection onOpenDemo={handleOpenDemo} />

      {/* SECTION 4: Visit Our Training Centre (Pune Office Dossier & Interactive Verified Google Map) */}
      <ContactCampusShowcase />

      {/* SECTION 5: Frequently Asked Questions Accordion */}
      <ContactFaqSection />

      {/* SECTION 6: Final High-Conversion Action Ribbon */}
      <ContactFinalCTA onOpenDemo={handleOpenDemo} />
    </div>
  );
}

export default ContactPage;
