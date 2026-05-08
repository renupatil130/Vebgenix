import React from 'react';
import { motion } from 'framer-motion';

const CaseStudies = () => {
  const studies = [
    {
      type: 'ERP System',
      title: 'Manufacturing Operations Platform',
      tech: ['React', 'Node.js', 'PostgreSQL', 'REST API'],
      challenge: 'A mid-sized manufacturer was managing production schedules, inventory, and supplier orders across six disconnected spreadsheets.',
      solution: 'A unified ERP with production planning, real-time inventory tracking, procurement workflows, and a management dashboard.',
      outcome: '42% reduction in stock discrepancies. Reporting time reduced by 18 hours per week.'
    },
    {
      type: 'Web Platform',
      title: 'B2B Service Booking Portal',
      tech: ['Next.js', 'Supabase', 'Stripe', 'Tailwind'],
      challenge: 'A logistics services company was managing hundreds of monthly client bookings entirely through email and phone calls.',
      solution: 'A full-stack client portal with booking management, real-time status tracking, invoicing, and an admin dashboard for internal operations.',
      outcome: 'Booking confirmation time dropped from 24 hours to under 3 minutes. Admin overhead cut by 60%.'
    },
    {
      type: 'Dashboard',
      title: 'Retail Analytics Dashboard',
      tech: ['Vue.js', 'Python', 'Postgres', 'Chart.js'],
      challenge: 'A multi-location retail business had sales data across four POS systems with no consolidated reporting or performance visibility.',
      solution: 'A real-time analytics dashboard aggregating data from all locations with KPI tracking and trend forecasting.',
      outcome: 'Management gained cross-location visibility for the first time. Inventory decisions improved with 3-month demand forecasting.'
    }
  ];

  return (
    <section id="work" className="section-container" style={{ backgroundColor: 'transparent' }}>
      <motion.span 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="label-text"
      >
        Featured Work
      </motion.span>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="section-heading gradient-text"
      >
        Systems We've Shipped
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="section-subheading"
      >
        A selection of completed engagements across sectors. All outcomes are measured and reported by clients.
      </motion.p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>
        {studies.map((study, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            whileHover={{ 
              rotateX: 2, 
              rotateY: -2, 
              translateZ: 10,
              boxShadow: "0 25px 50px rgba(0,0,0,0.5)"
            }}
            style={{ transformStyle: 'preserve-3d' }}
            className="glass-card"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', transform: 'translateZ(20px)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '24px' }}>
                <div>
                  <span className="number-accent">{study.type}</span>
                  <h3 style={{ fontSize: '36px', fontWeight: '500', color: 'var(--text-color)' }}>{study.title}</h3>
                </div>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  {study.tech.map((t, i) => (
                    <span key={i} className="tag-pill">{t}</span>
                  ))}
                </div>
              </div>
              
              <div className="grid-3" style={{ gap: '32px', borderTop: '1px solid var(--glass-border)', paddingTop: '40px' }}>
                <div>
                  <span style={{ display: 'block', fontSize: '11px', color: 'var(--subheading-color)', textTransform: 'uppercase', marginBottom: '12px', letterSpacing: '1px' }}>Challenge</span>
                  <p style={{ color: 'var(--subheading-color)', lineHeight: '1.6', fontSize: '15px' }}>{study.challenge}</p>
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '11px', color: 'var(--subheading-color)', textTransform: 'uppercase', marginBottom: '12px', letterSpacing: '1px' }}>Solution</span>
                  <p style={{ color: 'var(--subheading-color)', lineHeight: '1.6', fontSize: '15px' }}>{study.solution}</p>
                </div>
                <motion.div 
                  whileHover={{ backgroundColor: 'var(--glass-hover-bg)' }}
                  style={{ backgroundColor: 'var(--label-bg)', padding: '24px', borderRadius: '12px', border: '1px solid var(--label-border)' }}
                >
                  <span style={{ display: 'block', fontSize: '11px', color: 'var(--subheading-color)', textTransform: 'uppercase', marginBottom: '12px', letterSpacing: '1px' }}>Measured Outcome</span>
                  <p style={{ color: 'var(--text-color)', lineHeight: '1.5', fontSize: '18px', fontWeight: '500' }}>{study.outcome}</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <p style={{ marginTop: '64px', fontSize: '14px', color: 'var(--subheading-color)', textAlign: 'center' }}>
        Note: All case studies represent real engagement categories. Specific client details are anonymised under NDA. We share full case documentation during consultations.
      </p>
    </section>
  );
};

export default CaseStudies;
