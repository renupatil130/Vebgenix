import React from 'react';
import { motion } from 'framer-motion';
import './TechStack.css';

const TechStack = () => {
  const industries = [
    'Startups & Scale-Ups', 'Retail & E-Commerce', 'Professional Services', 'Education & EdTech',
    'Healthcare & Wellness', 'Logistics & Supply Chain', 'Manufacturing', 'Finance & Fintech'
  ];

  const stack = {
    Frontend: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS'],
    Backend: ['Node.js', 'Python', 'PHP / Laravel', 'REST APIs', 'GraphQL'],
    Database: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Supabase'],
    Cloud: ['AWS', 'Vercel', 'Docker', 'CI/CD', 'Linux'],
    Integrations: ['Stripe', 'Twilio', 'Firebase', 'Zapier', 'OAuth 2.0']
  };

  return (
    <section className="section-container">
      <div className="grid-2">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="sticky-header"
        >
          <span className="label-text">Industries We Serve</span>
          <h2 className="section-heading gradient-text" style={{ marginBottom: '24px' }}>Sector Experience</h2>
          <p className="section-subheading" style={{ marginBottom: '40px' }}>We work with businesses across multiple verticals. Our team has delivered systems in every sector — each requiring domain-specific thinking alongside technical execution.</p>
          
          <div className="tech-industries-grid">
            {industries.map((ind, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05, x: 10, backgroundColor: 'var(--glass-hover-bg)' }}
                className="glass-card" 
                style={{ display: 'flex', gap: '16px', alignItems: 'center', padding: '24px', borderRadius: '16px' }}
              >
                <span className="number-accent" style={{ margin: 0 }}>0{idx + 1}</span>
                <span style={{ fontSize: '15px', fontWeight: '500', color: 'var(--text-color)' }}>{ind}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="label-text">Technical Capabilities</span>
          <h2 className="section-heading gradient-text" style={{ marginBottom: '24px' }}>The Stack Behind Every Build</h2>
          <p className="section-subheading" style={{ marginBottom: '40px' }}>We build exclusively with actively maintained, production-proven technologies. Our stack is chosen for performance, longevity, and developer availability — so your system is supportable by any competent team.</p>
          
          <motion.div 
            className="glass-card tech-stack-card" 
            whileHover={{ scale: 1.01 }}
          >
            {Object.entries(stack).map(([category, items], idx) => (
              <motion.div 
                key={category} 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                style={{ paddingBottom: '24px', borderBottom: idx !== Object.entries(stack).length - 1 ? '1px solid var(--glass-border)' : 'none' }}
              >
                <h4 style={{ fontSize: '14px', fontWeight: '600', color: 'var(--subheading-color)', marginBottom: '16px', letterSpacing: '1px', textTransform: 'uppercase' }}>{category}</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                  {items.map(item => (
                    <motion.span 
                      key={item} 
                      whileHover={{ scale: 1.1, backgroundColor: 'var(--accent-color)', color: 'var(--bg-color)' }}
                      className="tag-pill"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
