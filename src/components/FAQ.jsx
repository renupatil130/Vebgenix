import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      q: 'How is working with Vebgenix different from hiring a general agency?',
      a: 'General agencies often rely on templates and off-the-shelf plugins to churn out projects quickly. We engineer custom software and systems from scratch. Our focus is on long-term business value, scalable architecture, and solving complex operational problems that generic solutions can\'t handle.'
    },
    {
      q: 'How long does a typical project take?',
      a: 'Project timelines vary depending on scope and complexity, but a typical project generally takes 5 to 10 days to complete. We provide clear, milestone-based timelines during the scoping phase.'
    },
    {
      q: 'Do you work with businesses outside your location?',
      a: 'Yes, we work with clients globally. Our processes are designed for seamless remote collaboration, featuring asynchronous updates, regular video check-ins, and shared staging environments so you always have visibility into the project.'
    },
    {
      q: 'What happens after the project is launched?',
      a: 'We don\'t just hand over the keys and disappear. We offer dedicated post-launch support, security monitoring, and performance optimisation. As your business scales, we serve as your ongoing technical partner to build new features and adapt the system.'
    },
    {
      q: 'Can you work with our existing systems or migrate from legacy software?',
      a: 'Absolutely. A significant part of our work involves migrating businesses away from patchwork legacy systems into unified, modern platforms, or building custom integrations (APIs) to make disparate systems communicate seamlessly.'
    },
    {
      q: 'Do you sign NDAs and handle our data securely?',
      a: 'Yes. We sign Non-Disclosure Agreements before any deep technical or business discussions take place. Security and data privacy are foundational to our engineering process, not afterthoughts.'
    }
  ];

  return (
    <section id="faq" className="section-container">
      <div className="grid-2">
        <div className="reveal sticky-header">
          <span className="label-text">FAQ</span>
          <h2 className="section-heading gradient-text">Common Questions</h2>
          <p className="section-subheading" style={{ marginBottom: '40px' }}>Answers to questions we hear most before a first engagement. If yours isn't here, ask us directly.</p>
          <a href="#contact" className="tag-pill" style={{ display: 'inline-flex', padding: '16px 32px', fontSize: '15px', color: 'var(--text-color)', textDecoration: 'none' }}>Ask Us Directly</a>
        </div>
        
        <div className="glass-card reveal delay-1" style={{ display: 'flex', flexDirection: 'column' }}>
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`faq-item ${openIndex === idx ? 'open' : ''}`}
              onClick={() => toggleFaq(idx)}
            >
              <div className="faq-question-container">
                <div className="faq-question-left">
                  <span className="faq-number">0{idx + 1}</span>
                  <h3 className="faq-question">{faq.q}</h3>
                </div>
                <span className="faq-icon">{openIndex === idx ? '−' : '+'}</span>
              </div>
              <div className="faq-answer-wrapper">
                <div className="faq-answer">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
