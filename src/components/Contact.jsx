import React, { useState } from 'react';
import Button from './Button';
import './Contact.css';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="section-container">
      <div className="glass-card grid-2 contact-grid">
        <div>
          <span className="label-text reveal">Start Your Project</span>
          <h2 className="section-heading gradient-text reveal delay-1 contact-heading">Let's Build<br/>Something Real.</h2>
          <p className="section-subheading reveal delay-2">Tell us about your business and what you need to build. We will respond with a scoping call invitation within one business day.</p>
          
          <div className="contact-info-item">
            <div>
              <span className="contact-info-title">Email</span>
              <div className="contact-info-value">contact@vebgenix.com</div>
            </div>
            <div>
              <span className="contact-info-title">Website</span>
              <div className="contact-info-value">vebgenix.com</div>
            </div>
            <div className="contact-meta-grid">
              <div>
                <span style={{ display: 'block', fontSize: '11px', color: 'var(--subheading-color)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>Response Time</span>
                <div style={{ fontSize: '15px', color: 'var(--text-color)', opacity: 0.8 }}>Within 1 business day</div>
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '11px', color: 'var(--subheading-color)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>NDA</span>
                <div style={{ fontSize: '15px', color: 'var(--text-color)', opacity: 0.8 }}>Signed before discussion</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="contact-form-container">
          {submitted ? (
            <div className="reveal active" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', gap: '24px' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', border: '2px solid var(--text-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px', color: 'var(--text-color)' }}>✓</div>
              <h3 style={{ fontSize: '32px', fontWeight: '500', color: 'var(--text-color)' }}>Enquiry Received</h3>
              <p style={{ color: 'var(--subheading-color)', lineHeight: '1.6' }}>Thank you. Our team will review your details and reach out via email within one business day to schedule a scoping call.</p>
              <Button variant="navbar" onClick={() => setSubmitted(false)}>Send Another</Button>
            </div>
          ) : (
            <>
              <h3 style={{ fontSize: '24px', fontWeight: '500', marginBottom: '40px', color: 'var(--text-color)' }}>Project Enquiry</h3>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div className="contact-input-group">
                  <div style={{ flex: 1 }}>
                    <label style={{ display: 'block', fontSize: '13px', color: 'var(--subheading-color)', marginBottom: '12px' }}>Name *</label>
                    <input required type="text" placeholder="Your full name" style={{ width: '100%', padding: '16px', backgroundColor: 'var(--bg-color)', border: '1px solid var(--label-border)', borderRadius: '12px', color: 'var(--text-color)', fontSize: '15px', outline: 'none', transition: 'border-color 0.3s' }} onFocus={(e) => e.target.style.borderColor = 'var(--text-color)'} onBlur={(e) => e.target.style.borderColor = 'var(--label-border)'} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <label style={{ display: 'block', fontSize: '13px', color: 'var(--subheading-color)', marginBottom: '12px' }}>Email *</label>
                    <input required type="email" placeholder="your@email.com" style={{ width: '100%', padding: '16px', backgroundColor: 'var(--bg-color)', border: '1px solid var(--label-border)', borderRadius: '12px', color: 'var(--text-color)', fontSize: '15px', outline: 'none', transition: 'border-color 0.3s' }} onFocus={(e) => e.target.style.borderColor = 'var(--text-color)'} onBlur={(e) => e.target.style.borderColor = 'var(--label-border)'} />
                  </div>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', color: 'var(--subheading-color)', marginBottom: '12px' }}>Company</label>
                  <input type="text" placeholder="Company or organisation" style={{ width: '100%', padding: '16px', backgroundColor: 'var(--bg-color)', border: '1px solid var(--label-border)', borderRadius: '12px', color: 'var(--text-color)', fontSize: '15px', outline: 'none', transition: 'border-color 0.3s' }} onFocus={(e) => e.target.style.borderColor = 'var(--text-color)'} onBlur={(e) => e.target.style.borderColor = 'var(--label-border)'} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', color: 'var(--subheading-color)', marginBottom: '12px' }}>Project Type</label>
                  <select style={{ width: '100%', padding: '16px', backgroundColor: 'var(--bg-color)', border: '1px solid var(--label-border)', borderRadius: '12px', color: 'var(--text-color)', fontSize: '15px', outline: 'none', appearance: 'none', transition: 'border-color 0.3s' }} onFocus={(e) => e.target.style.borderColor = 'var(--text-color)'} onBlur={(e) => e.target.style.borderColor = 'var(--label-border)'}>
                    <option value="">Select a service</option>
                    <option value="web">Custom Web Development</option>
                    <option value="erp">ERP & Business Systems</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', color: 'var(--subheading-color)', marginBottom: '12px' }}>Tell us about your project *</label>
                  <textarea required placeholder="Describe what you need built, current challenges, and any relevant details..." rows="5" style={{ width: '100%', padding: '16px', backgroundColor: 'var(--bg-color)', border: '1px solid var(--label-border)', borderRadius: '12px', color: 'var(--text-color)', fontSize: '15px', outline: 'none', resize: 'vertical', transition: 'border-color 0.3s' }} onFocus={(e) => e.target.style.borderColor = 'var(--text-color)'} onBlur={(e) => e.target.style.borderColor = 'var(--label-border)'}></textarea>
                </div>
                <div style={{ marginTop: '24px' }}>
                  <Button variant="cta" type="submit">Send Enquiry</Button>
                </div>
                <p style={{ fontSize: '12px', color: 'var(--subheading-color)', marginTop: '16px', lineHeight: '1.5' }}>We review all enquiries carefully and sign NDAs before any in-depth technical discussion.</p>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
