import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './styles/global.css';
import './styles/navbar.css';
import './styles/hero.css';
import './styles/scroll-animations.css';

import { MainLayout } from './components/layout/MainLayout';
import { HomePage } from './pages/HomePage';
import { CCNACoursePage } from './pages/CCNACoursePage';
import { CCNAAutomationCoursePage } from './pages/CCNAAutomationCoursePage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="courses/ccna-training" element={<CCNACoursePage />} />
          <Route path="courses/ccna-automation-training" element={<CCNAAutomationCoursePage />} />
          
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
