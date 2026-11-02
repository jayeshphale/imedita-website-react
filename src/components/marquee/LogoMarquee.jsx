import React from 'react';
import { row1Logos, row2Logos } from '../../data/clientLogos';
import '../../styles/marquee.css';

export function LogoMarquee() {
  return (
    <section 
      className="marquee-section" 
      aria-label="Supporting Enterprises Around The Globe"
    >
      {/* Edge Fade Gradients (Left and Right) */}
      <div className="marquee-edge-fade marquee-edge-left" aria-hidden="true" />
      <div className="marquee-edge-fade marquee-edge-right" aria-hidden="true" />

      {/* Header Container */}
      <div className="marquee-header-container scroll-header">
        <div className="marquee-badge">
          <span className="marquee-badge-dot" aria-hidden="true" />
          <span>ENTERPRISE RECOGNITION</span>
        </div>
        <h2 className="marquee-heading">
          SUPPORTING ENTERPRISES AROUND THE GLOBE
        </h2>
        <p className="marquee-subheading">
          Trusted by Fortune 500 tech leaders, telecom giants, and system integrators worldwide
        </p>
      </div>

      {/* Dual Row Marquee Viewport */}
      <div className="marquee-container scroll-reveal" data-delay="150">
        
        {/* ROW 1: Forward Infinite Scroll (Logos 1 to 30) */}
        <div className="marquee-row-wrapper" aria-hidden="true">
          <div className="marquee-track scroll-left">
            {/* Set 1 */}
            {row1Logos.map((logoUrl, index) => (
              <div className="marquee-logo-card" key={`r1-orig-${index}`}>
                <img
                  src={logoUrl}
                  alt={`Enterprise Partner Logo ${index + 1}`}
                  className="marquee-logo-img"
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                />
              </div>
            ))}
            {/* Set 2 (Duplicate for seamless infinite loop) */}
            {row1Logos.map((logoUrl, index) => (
              <div className="marquee-logo-card" key={`r1-dup-${index}`}>
                <img
                  src={logoUrl}
                  alt={`Enterprise Partner Logo ${index + 1}`}
                  className="marquee-logo-img"
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>

        {/* ROW 2: Reverse Infinite Scroll (Logos 31 to 59) */}
        <div className="marquee-row-wrapper" aria-hidden="true">
          <div className="marquee-track scroll-right">
            {/* Set 1 */}
            {row2Logos.map((logoUrl, index) => (
              <div className="marquee-logo-card" key={`r2-orig-${index}`}>
                <img
                  src={logoUrl}
                  alt={`Enterprise Partner Logo ${index + 31}`}
                  className="marquee-logo-img"
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                />
              </div>
            ))}
            {/* Set 2 (Duplicate for seamless infinite loop) */}
            {row2Logos.map((logoUrl, index) => (
              <div className="marquee-logo-card" key={`r2-dup-${index}`}>
                <img
                  src={logoUrl}
                  alt={`Enterprise Partner Logo ${index + 31}`}
                  className="marquee-logo-img"
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

