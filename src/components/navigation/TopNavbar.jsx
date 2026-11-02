import React from 'react';
import { Phone, Mail, Globe } from 'lucide-react';
import { 
  FacebookIcon, 
  TwitterIcon, 
  YoutubeIcon, 
  LinkedinIcon, 
  InstagramIcon, 
  WhatsappIcon 
} from './SocialIcons';

export const TopNavbar = () => {
  return (
    <div className="top-navbar-strip">
      <div className="container top-navbar-container">
        {/* Left Side: Contact & Location Info */}
        <div className="top-nav-contact-list">
          <a href="tel:+918750004411" className="top-nav-contact-link top-nav-phone-link">
            <Phone size={13} className="top-nav-icon" />
            <span>+91 8750004411</span>
          </a>

          <span className="top-nav-divider"></span>

          <a href="mailto:info@imedita.com" className="top-nav-contact-link top-nav-email-link">
            <Mail size={13} className="top-nav-icon" />
            <span>info@imedita.com</span>
          </a>

          <span className="top-nav-divider"></span>

          <div className="top-nav-contact-link top-nav-location-link">
            <Globe size={13} className="top-nav-icon" />
            <span>Pune, India</span>
          </div>
        </div>

        {/* Mobile Quick WhatsApp Button (Visible only on mobile < 640px) */}
        <a 
          href="https://wa.me/918750004411" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="top-nav-mobile-wa-btn"
          aria-label="Chat on WhatsApp"
        >
          <WhatsappIcon size={14} />
          <span>WhatsApp Us</span>
        </a>

        {/* Right Side: Social Media Icons (Modern Rounded Outlines) */}
        <div className="top-nav-social-list">
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="top-social-btn" 
            title="Follow us on Facebook"
            aria-label="Facebook"
          >
            <FacebookIcon size={14} />
          </a>

          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="top-social-btn" 
            title="Follow us on Twitter / X"
            aria-label="Twitter"
          >
            <TwitterIcon size={14} />
          </a>

          <a 
            href="https://youtube.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="top-social-btn" 
            title="Subscribe on YouTube"
            aria-label="YouTube"
          >
            <YoutubeIcon size={14} />
          </a>

          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="top-social-btn" 
            title="Connect on LinkedIn"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={14} />
          </a>

          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="top-social-btn" 
            title="Follow on Instagram"
            aria-label="Instagram"
          >
            <InstagramIcon size={14} />
          </a>

          <a 
            href="https://wa.me/918750004411" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="top-social-btn top-social-whatsapp" 
            title="Chat on WhatsApp"
            aria-label="WhatsApp"
          >
            <WhatsappIcon size={14} />
          </a>
        </div>
      </div>
    </div>
  );
};
