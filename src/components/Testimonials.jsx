import React from 'react';

const Testimonials = () => {
  const reviews = [
    { text: 'Vebgenix replaced our entire patchwork of spreadsheets with a system that actually runs our production floor. Delivery was clean, communication was excellent, and the software has been rock-solid since launch.', initial: 'O', role: 'Operations Director', company: 'Manufacturing Client' },
    { text: 'They understood our business before they wrote a single line of code. That is rare. The portal they built us handles hundreds of bookings daily with zero manual intervention.', initial: 'F', role: 'Founder', company: 'B2B Logistics Company' },
    { text: 'We needed a dashboard that could be explained to our CFO in 30 seconds and still satisfy our data team. Vebgenix delivered exactly that.', initial: 'H', role: 'Head of Strategy', company: 'Retail Group' }
  ];

  return (
    <section className="section-container" style={{ backgroundColor: 'var(--glass-bg)' }}>
      <span className="label-text reveal">Client Feedback</span>
      <h2 className="section-heading gradient-text reveal delay-1" style={{ marginBottom: '64px' }}>What Clients Say</h2>
      
      <div className="grid-3">
        {reviews.map((r, idx) => (
          <div key={idx} className={`glass-card tilt-3d reveal delay-${idx + 1}`} style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <p style={{ color: 'var(--text-color)', fontSize: '18px', lineHeight: '1.6', flex: 1, fontStyle: 'italic', fontWeight: '400' }}>"{r.text}"</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', borderTop: '1px solid var(--glass-border)', paddingTop: '24px' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--text-color) 0%, var(--subheading-color) 100%)', color: 'var(--bg-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', fontWeight: '600', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>{r.initial}</div>
              <div>
                <div style={{ fontSize: '16px', fontWeight: '600', marginBottom: '4px', color: 'var(--text-color)' }}>{r.role}</div>
                <div style={{ fontSize: '13px', color: 'var(--subheading-color)', textTransform: 'uppercase', letterSpacing: '1px' }}>{r.company}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
