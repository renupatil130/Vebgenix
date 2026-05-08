import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section-container">
      <div className="grid-2" style={{ alignItems: 'flex-start' }}>
        <div className="reveal">
          <span className="label-text">About Vebgenix</span>
          <h2 className="section-heading gradient-text" style={{ maxWidth: '600px' }}>
            We build the systems businesses actually run on.
          </h2>
          <p className="section-subheading" style={{ marginBottom: '32px' }}>
            Vebgenix is a software development studio that helps businesses replace patchwork tools, manual processes, and legacy systems with custom-built digital infrastructure — designed from the start to match how your organisation actually operates.
          </p>
          <p className="section-subheading" style={{ marginBottom: '48px' }}>
            We work with startups, growing SMEs, and established businesses across multiple sectors. Our engagements range from single-product launches to multi-year enterprise system builds — but the principle is the same: software that solves real business problems, delivered by engineers who understand both the technical and operational sides of the equation.
          </p>
          <a href="#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--text-color)', fontSize: '16px', fontWeight: '500', textDecoration: 'none', borderBottom: '1px solid var(--glass-border)', paddingBottom: '4px', transition: 'border-color 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--text-color)'} onMouseOut={(e) => e.currentTarget.style.borderColor = 'var(--glass-border)'}>
            Start a Conversation
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
        
        <div className="glass-card reveal delay-1 tilt-3d about-card-content">
          <div>
            <span className="number-accent">01</span>
            <h3 className="about-item-title" style={{ color: 'var(--text-color)' }}>Business-First Engineering</h3>
            <p style={{ color: 'var(--subheading-color)', lineHeight: '1.6', fontSize: '15px' }}>Every technical decision we make is evaluated against its real-world business impact — not just its elegance as code.</p>
          </div>
          <div style={{ height: '1px', background: 'var(--glass-border)', width: '100%' }}></div>
          <div>
            <span className="number-accent">02</span>
            <h3 className="about-item-title" style={{ color: 'var(--text-color)' }}>Built for the Long Run</h3>
            <p style={{ color: 'var(--subheading-color)', lineHeight: '1.6', fontSize: '15px' }}>We architect systems that grow with you. The software we deliver is maintainable, extensible, and built to last.</p>
          </div>
          <div style={{ height: '1px', background: 'var(--glass-border)', width: '100%' }}></div>
          <div>
            <span className="number-accent">03</span>
            <h3 className="about-item-title" style={{ color: 'var(--text-color)' }}>Transparent by Default</h3>
            <p style={{ color: 'var(--subheading-color)', lineHeight: '1.6', fontSize: '15px' }}>Staged milestones, regular check-ins, and always-accessible staging environments — you are never in the dark.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
