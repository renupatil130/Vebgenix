import './Stats.css';

const Stats = () => {
  const stats = [
    { value: '23+', label: 'Projects Delivered', desc: 'Across 8 industries' },
    { value: '30+', label: 'Businesses Served', desc: 'Startups to enterprise' },
    { value: '98%', label: 'Client Retention', desc: 'Long-term partnerships' },
    { value: '2+', label: 'Years in Operation', desc: 'Consistent delivery' }
  ];

  return (
    <section className="section-container" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
      <div className="glass-card grid-4 reveal stats-card">
        {stats.map((stat, idx) => (
          <div key={idx} className={`reveal delay-${idx + 1}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <div className="gradient-text stat-value">{stat.value}</div>
            <div className="stat-label" style={{ color: 'var(--text-color)' }}>{stat.label}</div>
            <div className="stat-desc" style={{ color: 'var(--subheading-color)' }}>{stat.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
