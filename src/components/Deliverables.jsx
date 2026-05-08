import React from 'react';

const Deliverables = () => {
  const systems = [
    {
      category: 'ERP',
      title: 'Enterprise Resource Planning',
      desc: 'Multi-module ERP systems for manufacturing, logistics, and service businesses that need to manage complex operations at scale.',
      tags: ['Inventory & Stock', 'Finance & Accounting', 'HR & Payroll', 'Procurement', 'Reporting']
    },
    {
      category: 'Dashboard',
      title: 'Analytics & Admin Dashboards',
      desc: 'Operational intelligence dashboards that surface KPIs, automate reports, and give managers direct control over business data.',
      tags: ['Real-Time Metrics', 'Custom Reports', 'Role-Based Access', 'Data Exports', 'API-Connected']
    },
    {
      category: 'Platform',
      title: 'Web Portals & Platforms',
      desc: 'Customer portals, vendor platforms, staff intranets, and multi-tenant SaaS applications with modular architecture.',
      tags: ['Multi-Role Auth', 'Custom Workflows', 'File Management', 'Notifications', 'Audit Logs']
    },
    {
      category: 'Commerce',
      title: 'E-Commerce & Marketplaces',
      desc: 'Custom-built storefronts and marketplace platforms with product management, payment processing, and scalable catalog systems.',
      tags: ['Product Catalog', 'Payment Gateway', 'Order Management', 'Discount Engine', 'Analytics']
    },
    {
      category: 'Automation',
      title: 'Workflow Automation Systems',
      desc: 'Process automation for approvals, notifications, data sync, document generation, and scheduling — reducing manual work at every stage.',
      tags: ['Trigger-Based Logic', 'Email & SMS', 'Document Templates', 'Integrations', 'Audit Trails']
    },
    {
      category: 'Website',
      title: 'Corporate Websites',
      desc: 'Performance-first corporate and marketing websites built for speed, SEO, and conversion — designed to establish authority and generate leads.',
      tags: ['CMS Integration', 'SEO Optimised', 'Fast Load Times', 'Lead Capture', 'Analytics']
    }
  ];

  return (
    <section className="section-container">
      <span className="label-text reveal">What We Build</span>
      <h2 className="section-heading gradient-text reveal delay-1">Digital Systems We Deliver</h2>
      <p className="section-subheading reveal delay-2">Structured solution types with repeatable outcomes — each configured to your operations.</p>
      
      <div className="grid-2">
        {systems.map((sys, idx) => (
          <div key={idx} className={`glass-card tilt-3d reveal delay-${(idx % 4) + 1}`} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <span className="number-accent" style={{ alignSelf: 'flex-start' }}>{sys.category}</span>
            <h3 className="card-title">{sys.title}</h3>
            <p style={{ color: 'var(--subheading-color)', lineHeight: '1.6', fontSize: '15px', flex: 1 }}>{sys.desc}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '16px' }}>
              {sys.tags.map((tag, i) => (
                <span key={i} className="tag-pill">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Deliverables;
