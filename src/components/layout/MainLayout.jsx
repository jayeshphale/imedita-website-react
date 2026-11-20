import React, { useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { TopNavbar } from '../navigation/TopNavbar';
import { MainNavbar } from '../navigation/MainNavbar';
import Footer from '../footer/Footer';
import { DemoBookingModal } from '../navigation/DemoBookingModal';
import ScrollToTop from '../common/ScrollToTop';
import SmoothScroll from '../common/SmoothScroll';
import ScrollRevealManager from '../common/ScrollRevealManager';

export function MainLayout() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('Cisco CCNA & Cyber Security');
  const location = useLocation();
  const navigate = useNavigate();

  const handleOpenDemo = (courseName) => {
    if (typeof courseName === 'string' && courseName.trim()) {
      setSelectedCourse(courseName);
    }

    // If on homepage and the demo section exists, scroll down to it
    const demoElement = document.getElementById('request-demo');
    if (demoElement && location.pathname === '/') {
      if (window.__lenis) {
        window.__lenis.scrollTo(demoElement, { offset: -70 });
      } else {
        demoElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // On other pages (like course detail page), open the global Demo Booking Modal
      setIsDemoOpen(true);
    }
  };

  return (
    <SmoothScroll>
      <ScrollToTop />
      <ScrollRevealManager />

      <div className="app-root" style={{ minHeight: '100vh', background: '#F8FAFC', color: '#0F172A' }}>
        {/* =========================================================================
            GLOBAL COMPONENT 1: TOP NAVBAR (Contact & Social Ribbon)
            ========================================================================= */}
        <TopNavbar />

        {/* =========================================================================
            GLOBAL COMPONENT 2: MAIN NAVBAR (Logo, Direct Links, Dropdown Mega Menus)
            ========================================================================= */}
        <MainNavbar onOpenDemo={() => handleOpenDemo()} />

        {/* =========================================================================
            DYNAMIC PAGE OUTLET (Renders Home, Course Pages, etc.)
            ========================================================================= */}
        <main className="main-viewport-content" style={{ minHeight: 'calc(100vh - 110px)', background: '#F8FAFC' }}>
          <Outlet context={{ handleOpenDemo, selectedCourse, setSelectedCourse }} />
        </main>

        {/* =========================================================================
            GLOBAL COMPONENT 3: FOOTER (Enterprise Multi-Tier Site Footer)
            ========================================================================= */}
        <Footer />

        {/* =========================================================================
            GLOBAL DEMO BOOKING MODAL
            ========================================================================= */}
        <DemoBookingModal
          isOpen={isDemoOpen}
          onClose={() => setIsDemoOpen(false)}
          preselectedCourse={selectedCourse}
        />
      </div>
    </SmoothScroll>
  );
}

export default MainLayout;

