import React, { useState } from 'react';
import {
  ArrowRight,
  ChevronRight,
  Tag,
  Ticket,
  Network,
  Terminal,
  Laptop,
  Cloud,
  Award,
  Shield,
  ShieldCheck,
  Bug,
  FileSearch,
  RefreshCw,
  AlertTriangle,
  Crosshair,
  Activity,
  Key,
  CheckSquare,
  Code,
  Database,
  Server
} from 'lucide-react';
import { voucherCategories } from '../../data/vouchersMenuData';

const iconMap = {
  Tag,
  Ticket,
  Network,
  Terminal,
  Laptop,
  Cloud,
  Award,
  Shield,
  ShieldCheck,
  Bug,
  FileSearch,
  RefreshCw,
  AlertTriangle,
  Crosshair,
  Activity,
  Key,
  CheckSquare,
  Code,
  Database,
  Server
};

export const VouchersMegaMenu = ({ isOpen, onClose, onOpenDemo }) => {
  const [activeCategoryId, setActiveCategoryId] = useState('cisco-vouchers');

  if (!isOpen) return null;

  const currentCategory =
    voucherCategories.find((cat) => cat.id === activeCategoryId) ||
    voucherCategories[0];

  const promo = currentCategory.promo || voucherCategories[0].promo;

  return (
    <div className="mega-menu-wrapper" onMouseLeave={onClose}>
      <div className="mega-menu-hover-bridge" />

      <div className="mega-menu-card">
        {/* =========================================================================
            COLUMN 1: VOUCHER DOMAINS (LEFT)
            ========================================================================= */}
        <div className="mega-menu-col mega-col-domains">
          <div className="mega-col-label">EXAM DOMAINS</div>

          <div className="mega-domains-list">
            {voucherCategories.map((cat) => {
              const isActive = cat.id === activeCategoryId;
              const DomainIcon = iconMap[cat.icon] || Ticket;

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
            COLUMN 2: VOUCHERS LIST (MIDDLE - 2-COLUMN GRID)
            ========================================================================= */}
        <div className="mega-menu-col mega-col-courses">
          <div className="mega-col-label">
            {currentCategory.name.toUpperCase()} ({currentCategory.vouchers.length} AVAILABLE)
          </div>

          <div className="mega-courses-list">
            {currentCategory.vouchers.map((voucher, idx) => {
              const VoucherIcon = iconMap[voucher.icon] || Ticket;
              return (
                <a
                  key={idx}
                  href={voucher.link}
                  className="mega-course-item"
                  onClick={onClose}
                >
                  <div className="mega-course-icon-box">
                    <VoucherIcon size={14} />
                  </div>
                  <div className="mega-item-text">
                    <span className="mega-item-title">{voucher.name}</span>
                    <span className="mega-item-desc">{voucher.desc}</span>
                  </div>
                  <ArrowRight size={13} className="mega-item-arrow" />
                </a>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            COLUMN 3: PROMO / VOUCHER SAVINGS (RIGHT)
            ========================================================================= */}
        <div className="mega-menu-col mega-col-showcase">
          <div className="mega-col-label">FEATURED SPOTLIGHT</div>
          <div className="mega-showcase-card">
            <div className="mega-showcase-visual">
              <div className="mega-showcase-visual-badge">{promo.eyebrow}</div>
              <div className="mesh-circle mesh-1"></div>
              <div className="mesh-circle mesh-2"></div>
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
                <Tag size={13} />
                <span>{promo.ctaText}</span>
                <ArrowRight size={13} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
