import React from 'react';
import './Process.css';

const Process = () => {
  const steps = [
    { num: '01', title: 'Discovery', desc: 'We start by understanding your business — current systems, goals, constraints, and the people who use your tools daily. No assumptions.' },
    { num: '02', title: 'Strategy & Scoping', desc: 'We define the technical architecture, feature set, integrations, and project roadmap before a single line of code is written.' },
    { num: '03', title: 'UI/UX Design', desc: 'Wireframes, interactive prototypes, and high-fidelity designs reviewed and approved with your team before development begins.' },
    { num: '04', title: 'Development', desc: 'Iterative, milestone-based development with staging deployments so you can see and test the system as it is built.' },
    { num: '05', title: 'QA & Testing', desc: 'Functional testing, performance audits, security review, and cross-device QA before anything reaches production.' },
    { num: '06', title: 'Launch', desc: 'Coordinated deployment with rollback safety, post-launch monitoring, and a technical handover your team can act on.' },
    { num: '07', title: 'Support & Growth', desc: 'Ongoing maintenance, feature development, and performance optimisation as your business scales and requirements evolve.' }
  ];

  return (
    <section id="process" className="section-container">
      <span className="label-text reveal">How We Work</span>
      <h2 className="section-heading gradient-text reveal delay-1">A Process Built for Clarity</h2>
      <p className="section-subheading reveal delay-2">No surprises. No scope creep. A structured engagement from first call to final handover.</p>
      
      <div className="glass-card reveal delay-3 process-card">
        {steps.map((step, idx) => (
          <div key={idx} className={`process-step reveal delay-${(idx % 5) + 1} process-step-container`}>
            <div className="process-number-badge">
              {step.num}
            </div>
            <div className="process-content" style={{ paddingBottom: idx === steps.length - 1 ? '0' : '32px', borderBottom: idx === steps.length - 1 ? 'none' : '1px solid var(--glass-border)' }}>
              <h3 className="process-step-title">{step.title}</h3>
              <p className="process-step-desc">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;
