import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="section-container" style={{ borderTop: '1px solid var(--glass-border)' }}>
      <div className="footer-cta">
        <h2 className="footer-cta-title" style={{ color: 'var(--text-color)' }}>Ready to Start?</h2>
        <p style={{ color: 'var(--subheading-color)', marginBottom: '32px' }}>Book a no-obligation discovery call. We will assess your requirements and outline a realistic plan.</p>
        <a href="#contact" style={{ display: 'inline-block', padding: '16px 32px', backgroundColor: 'var(--text-color)', color: 'var(--bg-color)', borderRadius: '30px', fontWeight: '500', textDecoration: 'none', fontSize: '16px' }}>Book a Consultation</a>
        <div style={{ marginTop: '24px', color: 'var(--subheading-color)', fontSize: '14px' }}>contact@vebgenix.com</div>
      </div>
      
      <div className="grid-4 footer-links-grid">
        <div className="footer-brand-section">
          <div style={{ fontSize: '24px', fontWeight: '600', marginBottom: '24px', color: 'var(--text-color)' }}>Vebgenix</div>
          <p style={{ color: 'var(--subheading-color)', lineHeight: '1.5', maxWidth: '400px', marginBottom: '24px' }}>
            Custom software, ERP systems, dashboards, and digital products for businesses that need more than off-the-shelf solutions.
          </p>
          <div style={{ color: 'var(--text-color)', fontWeight: '500' }}>Build Smarter Digital Systems.</div>
        </div>
        
        <div>
          <h4 style={{ fontSize: '14px', color: 'var(--subheading-color)', marginBottom: '24px', textTransform: 'uppercase', letterSpacing: '1px' }}>Services</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <li><a href="#" style={{ color: 'var(--text-color)', opacity: 0.8, textDecoration: 'none', fontSize: '15px' }}>Web Development</a></li>
            <li><a href="#" style={{ color: 'var(--text-color)', opacity: 0.8, textDecoration: 'none', fontSize: '15px' }}>ERP Systems</a></li>
            <li><a href="#" style={{ color: 'var(--text-color)', opacity: 0.8, textDecoration: 'none', fontSize: '15px' }}>CRM & Automation</a></li>
            <li><a href="#" style={{ color: 'var(--text-color)', opacity: 0.8, textDecoration: 'none', fontSize: '15px' }}>UI/UX Design</a></li>
          </ul>
        </div>
        
        <div>
          <h4 style={{ fontSize: '14px', color: 'var(--subheading-color)', marginBottom: '24px', textTransform: 'uppercase', letterSpacing: '1px' }}>Company</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <li><a href="#about" style={{ color: 'var(--text-color)', opacity: 0.8, textDecoration: 'none', fontSize: '15px' }}>About</a></li>
            <li><a href="#process" style={{ color: 'var(--text-color)', opacity: 0.8, textDecoration: 'none', fontSize: '15px' }}>Process</a></li>
            <li><a href="#work" style={{ color: 'var(--text-color)', opacity: 0.8, textDecoration: 'none', fontSize: '15px' }}>Work</a></li>
            <li><a href="#contact" style={{ color: 'var(--text-color)', opacity: 0.8, textDecoration: 'none', fontSize: '15px' }}>Contact</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div>© 2026 Vebgenix. All rights reserved.</div>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#10B981' }}></div>
          All Systems Operational
        </div>
      </div>
    </footer>
  );
};

export default Footer;
