import React, { useState } from 'react';
import {
  ArrowRight,
  ChevronRight,
  Award,
  Network,
  Flame,
  Shield,
  Lock,
  Terminal,
  Server,
  Cloud,
  Cpu,
  Layers,
  ShieldCheck,
  Globe,
  KeyRound,
  Fingerprint,
  Share2,
  ShieldAlert,
  CloudLightning,
  Sparkles
} from 'lucide-react';
import { liveTrainingCategories } from '../../data/liveTrainingMenuData';

const iconMap = {
  Award,
  Network,
  Flame,
  Shield,
  Lock,
  Terminal,
  Server,
  Cloud,
  Cpu,
  Layers,
  ShieldCheck,
  Globe,
  KeyRound,
  Fingerprint,
  Share2,
  ShieldAlert,
  CloudLightning
};

export const LiveTrainingMegaMenu = ({ isOpen, onClose, onOpenDemo }) => {
  const [activeCategoryId, setActiveCategoryId] = useState('cisco');

  if (!isOpen) return null;

  const currentCategory =
    liveTrainingCategories.find((cat) => cat.id === activeCategoryId) ||
    liveTrainingCategories[0];

  const promo = currentCategory.promo || liveTrainingCategories[0].promo;

  return (
    <div className="mega-menu-wrapper" onMouseLeave={onClose}>
      <div className="mega-menu-hover-bridge" />

      <div className="mega-menu-card">
        {/* =========================================================================
            COLUMN 1: DOMAINS (LEFT)
            ========================================================================= */}
        <div className="mega-menu-col mega-col-domains">
          <div className="mega-col-label">TRAINING DOMAINS</div>

          <div className="mega-domains-list">
            {liveTrainingCategories.map((cat) => {
              const isActive = cat.id === activeCategoryId;
              const DomainIcon = iconMap[cat.icon] || Sparkles;

              return (
                <button
                  key={cat.id}
                  type="button"
                  className={`mega-domain-item ${isActive ? 'is-active' : ''}`}
                  onMouseEnter={() => setActiveCategoryId(cat.id)}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveCategoryId(cat.id);
                  }}
                >
                  <div className="mega-domain-icon-box">
                    <DomainIcon size={16} />
                  </div>
                  <div className="mega-item-text">
                    <span className="mega-item-title">{cat.name}</span>
                    <span className="mega-item-desc">{cat.desc}</span>
                  </div>
                  <ChevronRight size={14} className="mega-item-arrow" />
                </button>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            COLUMN 2: COURSES (MIDDLE - 2-COLUMN GRID)
            ========================================================================= */}
        <div className="mega-menu-col mega-col-courses">
          <div className="mega-col-label">
            {currentCategory.name.toUpperCase()} COURSES ({currentCategory.courses.length} AVAILABLE)
          </div>

          <div className="mega-courses-list">
            {currentCategory.courses.map((course, idx) => {
              const CourseIcon = iconMap[course.icon] || Sparkles;
              return (
                <a
                  key={idx}
                  href={course.link}
                  className="mega-course-item"
                  onClick={onClose}
                >
                  <div className="mega-course-icon-box">
                    <CourseIcon size={14} />
                  </div>
                  <div className="mega-item-text">
                    <span className="mega-item-title">{course.name}</span>
                    <span className="mega-item-desc">{course.desc}</span>
                  </div>
                  <ArrowRight size={13} className="mega-item-arrow" />
                </a>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            COLUMN 3: SHOWCASE CARD (RIGHT - FRAMER STYLE)
            ========================================================================= */}
        <div className="mega-menu-col mega-col-showcase">
          <div className="mega-col-label">FEATURED SPOTLIGHT</div>
          <div className="mega-showcase-card">
            <div className="mega-showcase-visual">
              <div className="mega-showcase-visual-badge">{promo.eyebrow}</div>
              <div className="mega-showcase-visual-mesh">
                <div className="mesh-circle mesh-1"></div>
                <div className="mesh-circle mesh-2"></div>
              </div>
              <div className="mega-showcase-visual-title">{promo.title}</div>
            </div>

            <div className="mega-showcase-body">
              <p className="mega-showcase-desc">{promo.desc}</p>

              <button
                type="button"
                className="mega-showcase-cta"
                onClick={() => {
                  onClose();
                  if (onOpenDemo) onOpenDemo();
                }}
              >
                <span>{promo.ctaText}</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
