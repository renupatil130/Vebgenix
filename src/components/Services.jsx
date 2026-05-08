import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    { num: '01', category: 'Core', title: 'Custom Web Development', desc: 'Fully bespoke web applications engineered from the ground up — no templates, no shortcuts. Built for performance, security, and long-term maintainability.', outcome: 'Launch faster with a system built exactly to your specifications.' },
    { num: '02', category: 'Enterprise', title: 'ERP & Business Systems', desc: 'End-to-end enterprise resource planning systems that unify your operations — inventory, finance, HR, procurement — in a single coherent platform.', outcome: 'Eliminate silos. Run your entire business from one dashboard.' },
    { num: '03', category: 'Automation', title: 'CRM & Workflow Automation', desc: 'Custom CRM platforms and automated workflows that reduce manual overhead, accelerate sales cycles, and give your team full visibility into every deal.', outcome: 'Close more deals with less effort and zero dropped leads.' },
    { num: '04', category: 'Design', title: 'UI/UX Design', desc: 'Interface design that is both visually compelling and ruthlessly functional. We design systems, not just screens — built to scale with your product.', outcome: 'Interfaces your users understand on the first click.' },
    { num: '05', category: 'Commerce', title: 'E-Commerce Development', desc: 'High-converting online stores with custom product logic, payment integration, inventory management, and performance-optimized storefronts.', outcome: 'A store built to convert, not just to display.' },
    { num: '06', category: 'Intelligence', title: 'Admin Dashboards', desc: 'Data-rich control panels and internal tooling that give decision-makers real-time insight into operations, performance metrics, and system health.', outcome: 'Turn raw data into decisions your leadership can act on.' },
    { num: '07', category: 'Integration', title: 'API Integration', desc: 'Seamlessly connect your tech stack — payment gateways, logistics APIs, third-party platforms, data pipelines — into a unified, reliable system.', outcome: 'Systems that talk to each other, not around each other.' },
    { num: '08', category: 'Ongoing', title: 'Maintenance & Support', desc: 'Dedicated post-launch support, security monitoring, performance optimisation, and feature development as your business evolves.', outcome: 'A long-term technical partner, not a one-off vendor.' }
  ];

  return (
    <section id="services" className="section-container" style={{ backgroundColor: 'transparent' }}>
      <motion.span 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="label-text"
      >
        What We Do
      </motion.span>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="section-heading gradient-text"
      >
        Core Services
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="section-subheading"
      >
        Every engagement is scoped to your specific requirements. We do not sell packages — we build solutions.
      </motion.p>
      
      <div className="grid-2">
        {services.map((svc, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ 
              scale: 1.02,
              rotateX: -5,
              rotateY: 5,
              translateZ: 20,
              boxShadow: "0 20px 40px rgba(0,0,0,0.4)"
            }}
            style={{ transformStyle: 'preserve-3d' }}
            className="glass-card"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', transform: 'translateZ(30px)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="number-accent">{svc.num}</span>
                <span style={{ fontSize: '13px', color: 'var(--subheading-color)', textTransform: 'uppercase', letterSpacing: '1px' }}>{svc.category}</span>
              </div>
              <h3 className="card-title">{svc.title}</h3>
              <p style={{ color: 'var(--subheading-color)', lineHeight: '1.6', flex: 1, fontSize: '15px' }}>{svc.desc}</p>
              <div style={{ backgroundColor: 'var(--label-bg)', padding: '20px', borderRadius: '12px', border: '1px solid var(--label-border)', borderLeft: '3px solid var(--accent-color)' }}>
                <span style={{ display: 'block', fontSize: '11px', color: 'var(--subheading-color)', textTransform: 'uppercase', marginBottom: '6px', letterSpacing: '1px' }}>Outcome</span>
                <span style={{ fontSize: '15px', fontWeight: '500', color: 'var(--text-color)' }}>{svc.outcome}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
