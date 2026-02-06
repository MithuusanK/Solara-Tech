import Hero from '../../components/Hero/Hero';
import CTA from '../../components/CTA/CTA';
import styles from './ServicePage.module.css';
import heroImage from '../../assets/Hero Section.png';
import introImage from '../../assets/WTE Diagram 3.png';

const WasteManagement = () => {
  const benefits = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
          <path d="M2 17l10 5 10-5"/>
          <path d="M2 12l10 5 10-5"/>
        </svg>
      ),
      title: 'Waste Stream Analysis',
      description: 'Comprehensive assessment of waste composition, volumes, and optimization opportunities.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3"/>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
        </svg>
      ),
      title: 'Process Optimization',
      description: 'Streamlined collection, sorting, and processing operations for maximum efficiency.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        </svg>
      ),
      title: 'Resource Recovery',
      description: 'Maximizing the extraction of valuable materials and energy from waste streams.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <line x1="2" y1="12" x2="22" y2="12"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
      ),
      title: 'Circular Economy Integration',
      description: 'Designing systems that keep materials in use and minimize waste generation.',
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
      title: 'Compliance Support',
      description: 'Ensuring adherence to environmental regulations and industry standards.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
        </svg>
      ),
      title: 'Performance Metrics',
      description: 'Data-driven tracking and reporting on waste management performance.',
    },
  ];

  const useCases = [
    {
      title: 'Municipal Solid Waste',
      description: 'Optimizing collection routes, processing facilities, and diversion programs for cities and towns.',
    },
    {
      title: 'Industrial Waste',
      description: 'Managing complex industrial waste streams with focus on regulatory compliance and resource recovery.',
    },
    {
      title: 'Commercial Operations',
      description: 'Developing waste reduction and recycling programs for retail, hospitality, and office environments.',
    },
    {
      title: 'Construction & Demolition',
      description: 'Maximizing material recovery and minimizing landfill disposal from construction projects.',
    },
  ];

  return (
    <div className={styles.servicePage}>
      {/* Hero Section */}
      <Hero
        label="Service"
        title="Waste Management"
        description="Comprehensive waste stream analysis and optimization for maximum resource recovery and environmental benefit."
        primaryCTA={{ text: 'Get Started', href: '/contact' }}
        minHeight="500px"
      />

      {/* Intro Section */}
      <section className={styles.introSection}>
        <div className={styles.container}>
          <div className={styles.introGrid}>
            <div className={styles.introContent}>
              <span className={styles.sectionLabel}>Overview</span>
              <h2 className={styles.sectionTitle}>Transform Waste into Value</h2>
              <p className={styles.sectionText}>
                Effective waste management is about more than just disposal—it's about 
                recognizing waste as a valuable resource and optimizing systems to 
                extract maximum value while minimizing environmental impact.
              </p>
              <p className={styles.sectionText}>
                Our waste management consulting services help organizations of all 
                sizes develop and implement strategies that reduce costs, improve 
                sustainability, and contribute to a circular economy.
              </p>
              <div className={styles.featuresList}>
                <div className={styles.featureItem}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Comprehensive waste audits</span>
                </div>
                <div className={styles.featureItem}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Custom diversion strategies</span>
                </div>
                <div className={styles.featureItem}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Technology recommendations</span>
                </div>
              </div>
            </div>
            <div className={styles.introImage}>
              <img src={introImage} alt="Waste Management Solutions" className={styles.image} />
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
              <span className={styles.statValue}>75%</span>
              <span className={styles.statLabel}>Average diversion rate achieved</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>2M+</span>
              <span className={styles.statLabel}>Tonnes analyzed</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>30%</span>
              <span className={styles.statLabel}>Average cost reduction</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>50+</span>
              <span className={styles.statLabel}>Projects completed</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="Ready to Optimize Your Waste Management?"
        description="Let's discuss how we can help you turn waste into value."
        buttonText="Schedule a Consultation"
        buttonLink="/contact"
      />
    </div>
  );
};

export default WasteManagement;
