import Hero from '../../components/Hero/Hero';
import CTA from '../../components/CTA/CTA';
import styles from './ServicePage.module.css';

const EnvironmentalAnalytics = () => {
  const benefits = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="20" x2="18" y2="10"/>
          <line x1="12" y1="20" x2="12" y2="4"/>
          <line x1="6" y1="20" x2="6" y2="14"/>
        </svg>
      ),
      title: 'Data Integration',
      description: 'Unified collection and integration of environmental data from multiple sources and formats.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8"/>
          <line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
      ),
      title: 'Pattern Recognition',
      description: 'Advanced analytics to identify trends, anomalies, and correlations in environmental data.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="12 2 2 7 12 12 22 7 12 2"/>
          <polyline points="2 17 12 22 22 17"/>
          <polyline points="2 12 12 17 22 12"/>
        </svg>
      ),
      title: 'Predictive Modeling',
      description: 'Forecasting tools to anticipate environmental impacts and inform planning decisions.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
          <line x1="3" y1="9" x2="21" y2="9"/>
          <line x1="9" y1="21" x2="9" y2="9"/>
        </svg>
      ),
      title: 'Interactive Dashboards',
      description: 'Custom visualization tools for real-time monitoring and stakeholder communication.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
          <polyline points="10 9 9 9 8 9"/>
        </svg>
      ),
      title: 'Automated Reporting',
      description: 'Streamlined reporting workflows for regulatory compliance and stakeholder updates.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      title: 'Data Quality Assurance',
      description: 'Robust validation and quality control processes to ensure data integrity.',
    },
  ];

  const useCases = [
    {
      title: 'Air Quality Monitoring',
      description: 'Real-time analysis and visualization of air quality data across monitoring networks.',
    },
    {
      title: 'Water Resource Management',
      description: 'Comprehensive analytics for water quality, usage patterns, and resource planning.',
    },
    {
      title: 'Biodiversity Tracking',
      description: 'Data collection and analysis tools for monitoring species populations and ecosystem health.',
    },
    {
      title: 'Climate Impact Assessment',
      description: 'Modeling and analysis of climate-related risks and adaptation strategies.',
    },
  ];

  return (
    <div className={styles.servicePage}>
      {/* Figma-style Hero Section */}
      <section
        style={{
          position: 'relative',
          width: '100vw',
          left: '50%',
          right: '50%',
          marginLeft: '-50vw',
          marginRight: '-50vw',
          minHeight: '600px',
          backgroundImage: 'url(/src/assets/env-ana-hero.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          paddingTop: '48px',
          paddingBottom: '48px',
        }}
      >
        <div
          style={{
            background: 'rgba(37, 99, 45, 0.8)', // #25632D with 80% opacity
            color: '#fff',
            maxWidth: 600,
            marginLeft: '5vw',
            padding: '2.5rem 2.5rem 2.5rem 2.5rem',
            borderRadius: '1.5rem',
            boxShadow: '0 4px 32px rgba(0,0,0,0.12)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
          }}
        >
          <span style={{
            color: '#B6E2C6',
            fontSize: 14,
            fontWeight: 600,
            letterSpacing: 2,
            textTransform: 'uppercase',
            marginBottom: 8,
          }}>
            ENVIRONMENTAL ANALYTICS
          </span>
          <h1 style={{ fontSize: 36, fontWeight: 700, margin: 0, lineHeight: 1.15, color: '#fff' }}>
            Leverage Data & Market Clarity That Moves Projects Forward
          </h1>
          <p style={{ fontSize: 18, color: '#E6F2EC', margin: 0 }}>
            Turn complex environmental data into clear, actionable insights that guide policy, technology adoption, and investment strategies across Canada’s evolving waste-to-energy landscape.
          </p>
          <div style={{ display: 'flex', gap: 16, marginTop: 8 }}>
            <a
              href="/contact"
              style={{
                background: '#fff',
                color: '#103624',
                fontWeight: 600,
                padding: '0.75rem 1.5rem',
                borderRadius: 6,
                textDecoration: 'none',
                fontSize: 16,
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                border: 'none',
                transition: 'background 0.2s',
              }}
            >
              Speak With Our Team
            </a>
            <a
              href="/how-we-work"
              style={{
                background: 'transparent',
                color: '#fff',
                fontWeight: 600,
                padding: '0.75rem 1.5rem',
                borderRadius: 6,
                textDecoration: 'none',
                fontSize: 16,
                border: '2px solid #fff',
                transition: 'background 0.2s, color 0.2s',
              }}
            >
              Explore How We Work
            </a>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className={styles.introSection}>
        <div className={styles.container}>
          <div className={styles.introGrid}>
            <div className={styles.introContent}>
              <span className={styles.sectionLabel}>Overview</span>
              <h2 className={styles.sectionTitle}>Transform Environmental Data into Actionable Insights</h2>
              <p className={styles.sectionText}>
                Environmental data is only valuable when it can be transformed into 
                insights that drive action. Our environmental analytics services help 
                organizations harness the power of their data to make better decisions, 
                ensure compliance, and communicate impact.
              </p>
              <p className={styles.sectionText}>
                From sensor networks to satellite imagery, we integrate diverse data 
                sources and apply advanced analytics to reveal patterns and trends that 
                inform strategy and operations.
              </p>
              <div className={styles.featuresList}>
                <div className={styles.featureItem}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Multi-source data integration</span>
                </div>
                <div className={styles.featureItem}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Custom analytics solutions</span>
                </div>
                <div className={styles.featureItem}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Visualization and reporting tools</span>
                </div>
              </div>
            </div>
            <div className={styles.introImage}>
              <div className={styles.imagePlaceholder}>
                Environmental Data Analytics
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={styles.benefitsSection}>
        <div className={styles.container}>
          <div className={styles.benefitsHeader}>
            <span className={styles.sectionLabel}>What You Get</span>
            <h2 className={styles.sectionTitle}>Key Benefits</h2>
          </div>
          <div className={styles.benefitsGrid}>
            {benefits.map((benefit, index) => (
              <div key={index} className={styles.benefitCard}>
                <div className={styles.benefitIcon}>
                  {benefit.icon}
                </div>
                <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                <p className={styles.benefitDescription}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className={styles.useCasesSection}>
        <div className={styles.container}>
          <div className={styles.useCasesHeader}>
            <span className={styles.sectionLabel}>Applications</span>
            <h2 className={styles.sectionTitle}>Common Use Cases</h2>
          </div>
          <div className={styles.useCasesList}>
            {useCases.map((useCase, index) => (
              <div key={index} className={styles.useCaseItem}>
                <span className={styles.useCaseNumber}>{String(index + 1).padStart(2, '0')}</span>
                <div className={styles.useCaseContent}>
                  <h3 className={styles.useCaseTitle}>{useCase.title}</h3>
                  <p className={styles.useCaseDescription}>{useCase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <span className={styles.statValue}>10M+</span>
              <span className={styles.statLabel}>Data points processed daily</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>100+</span>
              <span className={styles.statLabel}>Monitoring locations</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>99.9%</span>
              <span className={styles.statLabel}>System uptime</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>50%</span>
              <span className={styles.statLabel}>Faster reporting cycles</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="Ready to Unlock the Power of Your Environmental Data?"
        description="Let's discuss how we can help you build analytics capabilities."
        buttonText="Schedule a Consultation"
        buttonLink="/contact"
      />
    </div>
  );
};

export default EnvironmentalAnalytics;
