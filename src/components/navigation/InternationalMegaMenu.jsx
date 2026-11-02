import React from 'react';
import { ArrowRight, Plane, Building2, HelpCircle, CreditCard, Globe } from 'lucide-react';
import { internationalMenuItems, internationalShowcase } from '../../data/internationalMenuData';

const iconMap = {
  Plane: Plane,
  Building2: Building2,
  HelpCircle: HelpCircle,
  CreditCard: CreditCard
};

export const InternationalMegaMenu = ({ isOpen, onClose, onOpenDemo }) => {
  if (!isOpen) return null;

  return (
    <div className="mega-menu-wrapper" onMouseLeave={onClose}>
      <div className="mega-menu-hover-bridge" />

      <div className="mega-menu-card international-menu-card">
        {/* =========================================================================
            COLUMN 1: INTERNATIONAL SERVICES (LEFT)
            ========================================================================= */}
        <div className="mega-menu-col international-menu-col-links">
          <div className="mega-col-label">INTERNATIONAL STUDENT SERVICES</div>

          <div className="international-items-list">
            {internationalMenuItems.map((item) => {
              const IconComponent = iconMap[item.icon] || Globe;
              return (
                <a
                  key={item.id}
                  href={item.link}
                  className="international-item"
                  onClick={onClose}
                >
                  <div className="international-item-icon-box">
                    <IconComponent size={18} />
                  </div>
                  <div className="international-item-text">
                    <span className="international-item-title">{item.name}</span>
                    <span className="international-item-desc">{item.desc}</span>
                  </div>
                  <ArrowRight size={14} className="international-item-arrow" />
                </a>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            COLUMN 2: GLOBAL STUDENT SHOWCASE CARD (RIGHT)
            ========================================================================= */}
        <div className="mega-menu-col international-menu-col-showcase">
          <div className="mega-showcase-card">
            <div className="mega-showcase-visual">
              <div className="mega-showcase-visual-badge">
                {internationalShowcase.badge}
              </div>
              <div className="mesh-circle mesh-1"></div>
              <div className="mesh-circle mesh-2"></div>
              <div className="mega-showcase-visual-title">
                {internationalShowcase.title}
              </div>
            </div>

            <div className="mega-showcase-body">
              <p className="mega-showcase-desc">{internationalShowcase.desc}</p>

              <button
                type="button"
                className="mega-showcase-cta"
                onClick={() => {
                  onClose();
                  if (onOpenDemo) onOpenDemo();
                }}
              >
                <Globe size={13} />
                <span>{internationalShowcase.ctaText}</span>
                <ArrowRight size={13} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
