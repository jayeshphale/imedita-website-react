import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  PhoneCall,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Phone,
  MessageCircle,
  Award,
  Network,
  Flame,
  Shield,
  Lock,
  Terminal,
  Server,
  Cloud,
  Cpu,
  Ticket,
  Laptop,
  Plane,
  Building2,
  HelpCircle,
  CreditCard,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { ImeditaLogo } from './ImeditaLogo';
import { LiveTrainingMegaMenu } from './LiveTrainingMegaMenu';
import { VouchersMegaMenu } from './VouchersMegaMenu';
import { InternationalMegaMenu } from './InternationalMegaMenu';
import { liveTrainingCategories } from '../../data/liveTrainingMenuData';
import { voucherCategories } from '../../data/vouchersMenuData';
import { internationalMenuItems } from '../../data/internationalMenuData';

const mobileIconMap = {
  Award,
  Network,
  Flame,
  Shield,
  Lock,
  Terminal,
  Server,
  Cloud,
  Cpu,
  Ticket,
  Laptop,
  Plane,
  Building2,
  HelpCircle,
  CreditCard,
  Sparkles
};

export const MainNavbar = ({ onOpenDemo }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavAnchor = (e, targetId) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const el = document.getElementById(targetId);
      if (el) {
        if (window.__lenis) {
          window.__lenis.scrollTo(el, { offset: -70 });
        } else {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      navigate(`/#${targetId}`);
    }
  };

  const handleMobileNavAnchor = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (location.pathname === '/') {
      const el = document.getElementById(targetId);
      if (el) {
        if (window.__lenis) {
          window.__lenis.scrollTo(el, { offset: -70 });
        } else {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      navigate(`/#${targetId}`);
    }
  };
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLiveTrainingOpen, setIsLiveTrainingOpen] = useState(false);
  const [isVouchersOpen, setIsVouchersOpen] = useState(false);
  const [isInternationalOpen, setIsInternationalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Mobile Accordion States
  const [mobileLiveTrainingExpanded, setMobileLiveTrainingExpanded] = useState(false);
  const [mobileVouchersExpanded, setMobileVouchersExpanded] = useState(false);
  const [mobileInternationalExpanded, setMobileInternationalExpanded] = useState(false);
  const [mobileActiveLiveDomain, setMobileActiveLiveDomain] = useState(null);
  const [mobileActiveVoucherDomain, setMobileActiveVoucherDomain] = useState(null);

  // Scroll detection for navbar elevation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-close mobile drawer on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navItemRef = useRef(null);
  const vouchersRef = useRef(null);
  const internationalRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navItemRef.current && !navItemRef.current.contains(event.target)) {
        setIsLiveTrainingOpen(false);
      }
      if (vouchersRef.current && !vouchersRef.current.contains(event.target)) {
        setIsVouchersOpen(false);
      }
      if (internationalRef.current && !internationalRef.current.contains(event.target)) {
        setIsInternationalOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  return (
    <header className={`main-navbar-wrapper ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="container main-navbar-container">
        {/* Brand Logo */}
        <Link to="/" className="main-nav-brand" title="I-Medita Cisco & Cyber Security Academy">
          <ImeditaLogo height={42} />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="main-nav-menu">
          {/* 1. Live Training with Modern 3-Column Framer-Style Mega Menu */}
          <div 
            ref={navItemRef}
            className="main-nav-item"
            onMouseEnter={() => {
              setIsLiveTrainingOpen(true);
              setIsVouchersOpen(false);
              setIsInternationalOpen(false);
            }}
            onMouseLeave={() => setIsLiveTrainingOpen(false)}
          >
            <a 
              href="#training" 
              className={`main-nav-link ${isLiveTrainingOpen ? 'is-dropdown-open' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                setIsLiveTrainingOpen(!isLiveTrainingOpen);
                setIsVouchersOpen(false);
                setIsInternationalOpen(false);
              }}
            >
              <span>Live Training</span>
              <ChevronDown size={14} className={`nav-chevron ${isLiveTrainingOpen ? 'rotate' : ''}`} />
            </a>

            {/* Framer-Style 3-Column Mega Menu (Domains | Courses | Promotions) */}
            <LiveTrainingMegaMenu 
              isOpen={isLiveTrainingOpen} 
              onClose={() => setIsLiveTrainingOpen(false)} 
              onOpenDemo={onOpenDemo}
            />
          </div>

          {/* 2. Vouchers with Modern 3-Column Mega Menu */}
          <div 
            ref={vouchersRef}
            className="main-nav-item"
            onMouseEnter={() => {
              setIsVouchersOpen(true);
              setIsLiveTrainingOpen(false);
              setIsInternationalOpen(false);
            }}
            onMouseLeave={() => setIsVouchersOpen(false)}
          >
            <a 
              href="#vouchers" 
              className={`main-nav-link ${isVouchersOpen ? 'is-dropdown-open' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                setIsVouchersOpen(!isVouchersOpen);
                setIsLiveTrainingOpen(false);
                setIsInternationalOpen(false);
              }}
            >
              <span>Vouchers</span>
              <ChevronDown size={14} className={`nav-chevron ${isVouchersOpen ? 'rotate' : ''}`} />
            </a>

            <VouchersMegaMenu 
              isOpen={isVouchersOpen} 
              onClose={() => setIsVouchersOpen(false)} 
              onOpenDemo={onOpenDemo}
            />
          </div>

          {/* 3. International with 2-Column Floating Menu */}
          <div 
            ref={internationalRef}
            className="main-nav-item"
            onMouseEnter={() => {
              setIsInternationalOpen(true);
              setIsLiveTrainingOpen(false);
              setIsVouchersOpen(false);
            }}
            onMouseLeave={() => setIsInternationalOpen(false)}
          >
            <a 
              href="#international" 
              className={`main-nav-link ${isInternationalOpen ? 'is-dropdown-open' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                setIsInternationalOpen(!isInternationalOpen);
                setIsLiveTrainingOpen(false);
                setIsVouchersOpen(false);
              }}
            >
              <span>International</span>
              <ChevronDown size={14} className={`nav-chevron ${isInternationalOpen ? 'rotate' : ''}`} />
            </a>

            <InternationalMegaMenu 
              isOpen={isInternationalOpen} 
              onClose={() => setIsInternationalOpen(false)} 
              onOpenDemo={onOpenDemo}
            />
          </div>

          {/* 4. Success Stories */}
          <div 
            className="main-nav-item"
            onMouseEnter={() => {
              setIsLiveTrainingOpen(false);
              setIsVouchersOpen(false);
              setIsInternationalOpen(false);
            }}
          >
            <a 
              href="/#reviews" 
              className="main-nav-link"
              onClick={(e) => handleNavAnchor(e, 'reviews')}
            >
              <span>Success Stories</span>
            </a>
          </div>

          {/* 5. Gallery */}
          <div 
            className="main-nav-item"
            onMouseEnter={() => {
              setIsLiveTrainingOpen(false);
              setIsVouchersOpen(false);
              setIsInternationalOpen(false);
            }}
          >
            <a 
              href="/#campus" 
              className="main-nav-link"
              onClick={(e) => handleNavAnchor(e, 'campus')}
            >
              <span>Gallery</span>
            </a>
          </div>

          {/* 6. Contact */}
          <div 
            className="main-nav-item"
            onMouseEnter={() => {
              setIsLiveTrainingOpen(false);
              setIsVouchersOpen(false);
              setIsInternationalOpen(false);
            }}
          >
            <a 
              href="/#request-demo" 
              className="main-nav-link"
              onClick={(e) => handleNavAnchor(e, 'request-demo')}
            >
              <span>Contact</span>
            </a>
          </div>
        </nav>

        {/* Right Action Elements (Book Free Demo CTA + Mobile Hamburger) */}
        <div className="main-nav-actions">
          <button 
            className="main-demo-cta-btn" 
            onClick={onOpenDemo}
            title="Book Free 2-Hour Practical Demo Session"
          >
            <PhoneCall size={14} />
            <span className="btn-text-full">Book Free Demo</span>
            <span className="btn-text-compact">Demo</span>
          </button>

          {/* Mobile Menu Hamburger */}
          <button 
            className="mobile-hamburger-btn" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Backdrop overlay for Mobile Drawer */}
      {mobileMenuOpen && (
        <div 
          className="mobile-nav-backdrop" 
          onClick={() => setMobileMenuOpen(false)} 
          aria-hidden="true"
        />
      )}

      {/* Clean Light-Theme Mobile Menu Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'is-open' : ''}`}>
        <div className="mobile-nav-scroll-area">
          <div className="mobile-nav-links">
            {/* 1. Live Training Mobile Accordion */}
            <div className="mobile-accordion-card">
              <button 
                type="button"
                className={`mobile-accordion-header ${mobileLiveTrainingExpanded ? 'is-active' : ''}`}
                onClick={() => setMobileLiveTrainingExpanded(!mobileLiveTrainingExpanded)}
              >
                <div className="mobile-header-left">
                  <div className="mobile-header-icon-box">
                    <Sparkles size={16} />
                  </div>
                  <span className="mobile-header-title">Live Training</span>
                  <span className="mobile-badge-count">9 Domains</span>
                </div>
                <ChevronDown 
                  size={16} 
                  className={`mobile-chevron ${mobileLiveTrainingExpanded ? 'rotate' : ''}`} 
                />
              </button>

              {mobileLiveTrainingExpanded && (
                <div className="mobile-accordion-body">
                  <div className="mobile-subcategories-list">
                    {liveTrainingCategories.map((cat) => {
                      const CatIcon = mobileIconMap[cat.icon] || Sparkles;
                      const isDomainOpen = mobileActiveLiveDomain === cat.id;

                      return (
                        <div key={cat.id} className="mobile-domain-group">
                          <button
                            type="button"
                            className={`mobile-domain-trigger ${isDomainOpen ? 'is-open' : ''}`}
                            onClick={() => setMobileActiveLiveDomain(isDomainOpen ? null : cat.id)}
                          >
                            <div className="mobile-domain-info">
                              <div className="mobile-domain-icon">
                                <CatIcon size={14} />
                              </div>
                              <div className="mobile-domain-text">
                                <span className="mobile-domain-name">{cat.name}</span>
                                <span className="mobile-domain-desc">{cat.desc}</span>
                              </div>
                            </div>
                            <ChevronRight 
                              size={14} 
                              className={`mobile-subchevron ${isDomainOpen ? 'rotate' : ''}`} 
                            />
                          </button>

                          {isDomainOpen && (
                            <div className="mobile-courses-tray">
                              {cat.courses.map((course, cIdx) => (
                                course.link && course.link.startsWith('/') ? (
                                  <Link
                                    key={cIdx}
                                    to={course.link}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="mobile-course-link"
                                  >
                                    <div className="mobile-course-bullet"></div>
                                    <div className="mobile-course-info">
                                      <span className="mobile-course-name">{course.name}</span>
                                      <span className="mobile-course-sub">{course.desc}</span>
                                    </div>
                                    <ArrowRight size={12} className="mobile-link-arrow" />
                                  </Link>
                                ) : (
                                  <a 
                                    key={cIdx} 
                                    href={course.link} 
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="mobile-course-link"
                                  >
                                    <div className="mobile-course-bullet"></div>
                                    <div className="mobile-course-info">
                                      <span className="mobile-course-name">{course.name}</span>
                                      <span className="mobile-course-sub">{course.desc}</span>
                                    </div>
                                    <ArrowRight size={12} className="mobile-link-arrow" />
                                  </a>
                                )
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* 2. Vouchers Mobile Accordion */}
            <div className="mobile-accordion-card">
              <button 
                type="button"
                className={`mobile-accordion-header ${mobileVouchersExpanded ? 'is-active' : ''}`}
                onClick={() => setMobileVouchersExpanded(!mobileVouchersExpanded)}
              >
                <div className="mobile-header-left">
                  <div className="mobile-header-icon-box">
                    <Ticket size={16} />
                  </div>
                  <span className="mobile-header-title">Exam Vouchers</span>
                  <span className="mobile-badge-count">4 Brands</span>
                </div>
                <ChevronDown 
                  size={16} 
                  className={`mobile-chevron ${mobileVouchersExpanded ? 'rotate' : ''}`} 
                />
              </button>

              {mobileVouchersExpanded && (
                <div className="mobile-accordion-body">
                  <div className="mobile-subcategories-list">
                    {voucherCategories.map((cat) => {
                      const CatIcon = mobileIconMap[cat.icon] || Ticket;
                      const isVoucherOpen = mobileActiveVoucherDomain === cat.id;

                      return (
                        <div key={cat.id} className="mobile-domain-group">
                          <button
                            type="button"
                            className={`mobile-domain-trigger ${isVoucherOpen ? 'is-open' : ''}`}
                            onClick={() => setMobileActiveVoucherDomain(isVoucherOpen ? null : cat.id)}
                          >
                            <div className="mobile-domain-info">
                              <div className="mobile-domain-icon">
                                <CatIcon size={14} />
                              </div>
                              <div className="mobile-domain-text">
                                <span className="mobile-domain-name">{cat.name}</span>
                                <span className="mobile-domain-desc">{cat.desc}</span>
                              </div>
                            </div>
                            <ChevronRight 
                              size={14} 
                              className={`mobile-subchevron ${isVoucherOpen ? 'rotate' : ''}`} 
                            />
                          </button>

                          {isVoucherOpen && (
                            <div className="mobile-courses-tray">
                              {cat.vouchers.map((voucher, vIdx) => (
                                <a 
                                  key={vIdx} 
                                  href={voucher.link} 
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="mobile-course-link"
                                >
                                  <div className="mobile-course-bullet"></div>
                                  <div className="mobile-course-info">
                                    <span className="mobile-course-name">{voucher.name}</span>
                                    <span className="mobile-course-sub">{voucher.desc}</span>
                                  </div>
                                  <ArrowRight size={12} className="mobile-link-arrow" />
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* 3. International Mobile Accordion */}
            <div className="mobile-accordion-card">
              <button 
                type="button"
                className={`mobile-accordion-header ${mobileInternationalExpanded ? 'is-active' : ''}`}
                onClick={() => setMobileInternationalExpanded(!mobileInternationalExpanded)}
              >
                <div className="mobile-header-left">
                  <div className="mobile-header-icon-box">
                    <Plane size={16} />
                  </div>
                  <span className="mobile-header-title">International Students</span>
                </div>
                <ChevronDown 
                  size={16} 
                  className={`mobile-chevron ${mobileInternationalExpanded ? 'rotate' : ''}`} 
                />
              </button>

              {mobileInternationalExpanded && (
                <div className="mobile-accordion-body">
                  <div className="mobile-subcategories-list">
                    {internationalMenuItems.map((item) => {
                      const ItemIcon = mobileIconMap[item.icon] || Plane;
                      return (
                        <a 
                          key={item.id} 
                          href={item.link} 
                          onClick={() => setMobileMenuOpen(false)}
                          className="mobile-service-link"
                        >
                          <div className="mobile-domain-icon">
                            <ItemIcon size={15} />
                          </div>
                          <div className="mobile-domain-text">
                            <span className="mobile-domain-name">{item.name}</span>
                            <span className="mobile-domain-desc">{item.desc}</span>
                          </div>
                          <ArrowRight size={14} className="mobile-link-arrow" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Single Nav Links */}
            <div className="mobile-direct-links-group">
              <a 
                href="/#reviews" 
                onClick={(e) => handleMobileNavAnchor(e, 'reviews')}
                className="mobile-direct-link"
              >
                <span>Success Stories</span>
                <ChevronRight size={14} className="mobile-link-arrow" />
              </a>

              <a 
                href="/#campus" 
                onClick={(e) => handleMobileNavAnchor(e, 'campus')}
                className="mobile-direct-link"
              >
                <span>Lab & Campus Gallery</span>
                <ChevronRight size={14} className="mobile-link-arrow" />
              </a>

              <a 
                href="/#request-demo" 
                onClick={(e) => handleMobileNavAnchor(e, 'request-demo')}
                className="mobile-direct-link"
              >
                <span>Contact & Baner Center</span>
                <ChevronRight size={14} className="mobile-link-arrow" />
              </a>
            </div>
          </div>

          {/* Mobile Navigation Footer & Quick Help Actions */}
          <div className="mobile-nav-footer">
            <div className="mobile-quick-actions-row">
              <a href="tel:+918750004411" className="mobile-quick-btn call">
                <Phone size={14} />
                <span>Call Center</span>
              </a>

              <a 
                href="https://wa.me/918750004411" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mobile-quick-btn wa"
              >
                <MessageCircle size={14} />
                <span>WhatsApp</span>
              </a>
            </div>

            <button 
              type="button"
              className="main-demo-cta-btn full-width mobile-demo-btn" 
              onClick={() => { setMobileMenuOpen(false); onOpenDemo(); }}
            >
              <PhoneCall size={16} />
              <span>Book Free 2-Hour Demo Class</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
