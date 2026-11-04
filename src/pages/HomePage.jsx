import React from 'react';
import { useOutletContext } from 'react-router-dom';

// Homepage Component Sections
import { HeroSlider } from '../components/hero/HeroSlider';
import { LogoMarquee } from '../components/marquee/LogoMarquee';
import { TopCategories } from '../components/categories/TopCategories';
import { PopularCourses } from '../components/courses/PopularCourses';
import { WhyChooseUs } from '../components/whychoose/WhyChooseUs';
import { TrainersSection } from '../components/trainers/TrainersSection';
import { BatchesSection } from '../components/batches/BatchesSection';
import { DemoRequestSection } from '../components/demo/DemoRequestSection';
import { CampusLife } from '../components/campus/CampusLife';
import { GoogleReviewsSection } from '../components/reviews/GoogleReviewsSection';
import { LatestBlogsSection } from '../components/blogs/LatestBlogsSection';
import { AuthorizedPartnersSection } from '../components/partners/AuthorizedPartnersSection';

export function HomePage() {
  const context = useOutletContext() || {};
  const handleOpenDemo = context.handleOpenDemo || (() => {});
  const selectedCourse = context.selectedCourse || 'Cisco CCNA (200-301)';

  return (
    <>
      {/* 1. HERO SLIDER */}
      <HeroSlider onOpenDemo={() => handleOpenDemo()} />

      {/* 2. DUAL-ROW INFINITE ENTERPRISE LOGO MARQUEE */}
      <LogoMarquee />

      {/* 3. TOP CATEGORIES & VALUE PILLARS */}
      <TopCategories onOpenDemo={(course) => handleOpenDemo(course)} />

      {/* 4. POPULAR CERTIFICATION COURSES */}
      <PopularCourses onOpenDemo={(course) => handleOpenDemo(course)} />

      {/* 5. WHY CHOOSE I-MEDITA */}
      <WhyChooseUs />

      {/* 6. ELITE CCIE INSTRUCTORS & TRAINERS */}
      <TrainersSection />

      {/* 7. UPCOMING LIVE BATCHES */}
      <BatchesSection onOpenDemo={(course) => handleOpenDemo(course)} />

      {/* 8. REQUEST FOR DEMO FORM */}
      <DemoRequestSection selectedCourse={selectedCourse} />

      {/* 9. CAMPUS & LAB LIFE SHOWCASE */}
      <CampusLife />

      {/* 10. GOOGLE REVIEWS & SOCIAL PROOF */}
      <GoogleReviewsSection />

      {/* 11. KNOWLEDGE BASE & LATEST BLOGS */}
      <LatestBlogsSection />

      {/* 12. AUTHORIZED PARTNERS & ACCREDITATIONS */}
      <AuthorizedPartnersSection />
    </>
  );
}

export default HomePage;

