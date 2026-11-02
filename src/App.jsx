import React, { useState } from 'react';
import './styles/global.css';
import './styles/navbar.css';
import './styles/hero.css';
import './styles/scroll-animations.css';

// 3 Core Components based on User's Provided Reference
import { TopNavbar } from './components/navigation/TopNavbar';
import { MainNavbar } from './components/navigation/MainNavbar';
import { HeroSlider } from './components/hero/HeroSlider';
import { LogoMarquee } from './components/marquee/LogoMarquee';
import { TopCategories } from './components/categories/TopCategories';
import { PopularCourses } from './components/courses/PopularCourses';
import { WhyChooseUs } from './components/whychoose/WhyChooseUs';
import { TrainersSection } from './components/trainers/TrainersSection';
import { BatchesSection } from './components/batches/BatchesSection';
import { DemoRequestSection } from './components/demo/DemoRequestSection';
import { CampusLife } from './components/campus/CampusLife';
import { GoogleReviewsSection } from './components/reviews/GoogleReviewsSection';
import { LatestBlogsSection } from './components/blogs/LatestBlogsSection';
import { AuthorizedPartnersSection } from './components/partners/AuthorizedPartnersSection';
import Footer from './components/footer/Footer';
import SmoothScroll from './components/common/SmoothScroll';
import ScrollRevealManager from './components/common/ScrollRevealManager';

import { DemoBookingModal } from './components/navigation/DemoBookingModal';

export default function App() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('Cisco CCNA & Cyber Security');

  const handleOpenDemo = (courseName) => {
    if (typeof courseName === 'string' && courseName.trim()) {
      setSelectedCourse(courseName);
    }
    const demoElement = document.getElementById('request-demo');
    if (demoElement) {
      if (window.__lenis) {
        window.__lenis.scrollTo(demoElement, { offset: -70 });
      } else {
        demoElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      setIsDemoOpen(true);
    }
  };

  return (
    <SmoothScroll>
      <ScrollRevealManager />
      <div className="app-root" style={{ minHeight: '100vh', background: '#F8FAFC', color: '#0F172A' }}>
      {/* =========================================================================
          COMPONENT 1: TOP NAV BAR (Blue Ribbon with Contact & Social Icons)
          ========================================================================= */}
      <TopNavbar />

      {/* =========================================================================
          COMPONENT 2: MAIN NAVBAR (Logo, Direct Links, Dropdown Mega Menus)
          ========================================================================= */}
      <MainNavbar 
        onOpenDemo={() => handleOpenDemo()}
      />

      {/* =========================================================================
          MAIN PAGE CONTENT
          ========================================================================= */}
      <main style={{ minHeight: 'calc(100vh - 110px)', background: '#F8FAFC' }}>
        {/* COMPONENT 3: HERO SLIDER (Razorpay-Style Tech Showcase with Instructors) */}
        <HeroSlider 
          onOpenDemo={() => handleOpenDemo()} 
        />

        {/* COMPONENT 4: DUAL-ROW INFINITE ENTERPRISE LOGO MARQUEE */}
        <LogoMarquee />

        {/* COMPONENT 5: TOP CATEGORIES GRID & VALUE PILLARS SECTION */}
        <TopCategories 
          onOpenDemo={(course) => handleOpenDemo(course)} 
        />

        {/* COMPONENT 6: UNCLUTTERED POPULAR CERTIFICATION COURSES (CARDS GRID WITH TABS) */}
        <PopularCourses 
          onOpenDemo={(course) => handleOpenDemo(course)} 
        />

        {/* COMPONENT 7: WHY CHOOSE I-MEDITA (ADVANTAGES & STATS SECTION) */}
        <WhyChooseUs />

        {/* COMPONENT 8: ELITE MENTORS & INSTRUCTORS SECTION */}
        <TrainersSection />

        {/* COMPONENT 9: UPCOMING LIVE BATCHES (SCHEDULE TABLE & MOBILE CARDS) */}
        <BatchesSection 
          onOpenDemo={(course) => handleOpenDemo(course)} 
        />

        {/* DEDICATED HIGH-CONVERTING "REQUEST FOR DEMO" LEAD GENERATION SECTION */}
        <DemoRequestSection selectedCourse={selectedCourse} />

        {/* COMPONENT 10: "GREAT PLACE TO LEARN & GROW" CAMPUS & LAB LIFE SHOWCASE */}
        <CampusLife />

        {/* COMPONENT 11: GOOGLE REVIEWS & SOCIAL PROOF SECTION */}
        <GoogleReviewsSection />

        {/* COMPONENT 12: LATEST ARTICLES & EXAM GUIDES (KNOWLEDGE BASE) */}
        <LatestBlogsSection />

        {/* COMPONENT 13: AUTHORIZED VENDOR & CERTIFICATION PARTNERS */}
        <AuthorizedPartnersSection />
      </main>

      {/* COMPONENT 14: MODERN DARK ENTERPRISE FOOTER */}
      <Footer />

      {/* Demo Booking Modal */}
      <DemoBookingModal 
        isOpen={isDemoOpen} 
        onClose={() => setIsDemoOpen(false)} 
        preselectedCourse={selectedCourse}
      />
    </div>
    </SmoothScroll>
  );
}
