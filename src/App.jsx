import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './styles/global.css';
import './styles/navbar.css';
import './styles/hero.css';
import './styles/scroll-animations.css';

import { MainLayout } from './components/layout/MainLayout';
import { HomePage } from './pages/HomePage';

const CCNACoursePage = lazy(() =>
  import('./pages/CCNACoursePage').then((m) => ({ default: m.CCNACoursePage || m.default }))
);
const CCNAAutomationCoursePage = lazy(() =>
  import('./pages/CCNAAutomationCoursePage').then((m) => ({ default: m.CCNAAutomationCoursePage || m.default }))
);

const PageFallback = () => (
  <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div
      style={{
        width: '34px',
        height: '34px',
        border: '3px solid #e2e8f0',
        borderTopColor: '#0b63e5',
        borderRadius: '50%',
        animation: 'spin 0.7s linear infinite'
      }}
    />
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          
          <Route
            path="courses/ccna-training"
            element={
              <Suspense fallback={<PageFallback />}>
                <CCNACoursePage />
              </Suspense>
            }
          />
          <Route
            path="courses/ccna-automation-training"
            element={
              <Suspense fallback={<PageFallback />}>
                <CCNAAutomationCoursePage />
              </Suspense>
            }
          />
          
          {/* SEO & Alternative URL Alias Redirects for CCNA */}
          <Route path="courses/ccna-course" element={<Navigate to="/courses/ccna-training" replace />} />
          <Route path="courses/ccna" element={<Navigate to="/courses/ccna-training" replace />} />
          <Route path="ccna-training" element={<Navigate to="/courses/ccna-training" replace />} />

          {/* SEO & Alternative URL Alias Redirects for CCNA Automation */}
          <Route path="courses/cisco-ccna-automation-training" element={<Navigate to="/courses/ccna-automation-training" replace />} />
          <Route path="courses/ccna-automation" element={<Navigate to="/courses/ccna-automation-training" replace />} />
          <Route path="ccna-automation-training" element={<Navigate to="/courses/ccna-automation-training" replace />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
