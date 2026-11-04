import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './styles/global.css';
import './styles/navbar.css';
import './styles/hero.css';
import './styles/scroll-animations.css';

import { MainLayout } from './components/layout/MainLayout';
import { HomePage } from './pages/HomePage';
import { CCNACoursePage } from './pages/CCNACoursePage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="courses/ccna-training" element={<CCNACoursePage />} />
          
          {/* SEO & Alternative URL Alias Redirects */}
          <Route path="courses/ccna-course" element={<Navigate to="/courses/ccna-training" replace />} />
          <Route path="courses/ccna" element={<Navigate to="/courses/ccna-training" replace />} />
          <Route path="ccna-training" element={<Navigate to="/courses/ccna-training" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
