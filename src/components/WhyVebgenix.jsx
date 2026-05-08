import React from 'react';

const WhyVebgenix = () => {
  const reasons = [
    { num: '01', title: 'Custom-Built, Not Configured', desc: 'We don\'t adapt generic software to your needs. Every system is engineered from scratch around your specific business logic, workflows, and goals.' },
    { num: '02', title: 'Scalable Architecture', desc: 'Our systems are designed to grow. Whether you are onboarding 10 or 10,000 users, the architecture handles demand without costly rebuilds.' },
    { num: '03', title: 'Business-First Development', desc: 'We are software developers who understand business operations. Every technical decision is evaluated against business impact — not just technical elegance.' },
    { num: '04', title: 'Modern, Maintained Stack', desc: 'We build exclusively with current, actively maintained technologies. No legacy dependencies. No vendor lock-in. No technical debt by design.' },
    { num: '05', title: 'Clean, Secure Code', desc: 'Security-first development with code review standards, documented APIs, and maintainable structure — so future changes remain fast and low-risk.' },
    { num: '06', title: 'Transparent Process', desc: 'Regular progress updates, staging environments, and client visibility at every stage. You always know where the project stands.' }
  ];

  return (
    <section className="section-container" style={{ backgroundColor: 'var(--glass-bg)' }}>
      <div className="grid-2" style={{ marginBottom: '80px' }}>
        <div className="reveal">
          <span className="label-text">Why Vebgenix</span>
          <h2 className="section-heading gradient-text" style={{ marginBottom: '24px' }}>Built Different.<br/>Delivered Differently.</h2>
        </div>
        <div className="reveal delay-1">
          <p className="section-subheading" style={{ marginBottom: '32px' }}>Most agencies optimise for speed and margin. We optimise for long-term business value and systems that don't need to be replaced.</p>
          <a href="#contact" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '16px 32px', backgroundColor: 'var(--text-color)', color: 'var(--bg-color)', borderRadius: '30px', fontWeight: '600', textDecoration: 'none', transition: 'transform 0.2s ease' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>Book a Consultation</a>
        </div>
      </div>
      
      <div className="grid-3">
        {reasons.map((r, idx) => (
          <div key={idx} className={`glass-card tilt-3d reveal delay-${(idx % 3) + 1}`} style={{ padding: '40px' }}>
            <span className="number-accent">{r.num}</span>
            <h3 className="card-title" style={{ marginBottom: '16px' }}>{r.title}</h3>
            <p style={{ color: 'var(--subheading-color)', lineHeight: '1.6', fontSize: '15px' }}>{r.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyVebgenix;
