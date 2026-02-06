import Hero from '../../components/Hero/Hero';
import CTA from '../../components/CTA/CTA';
import styles from './ServicePage.module.css';
import heroImage from '../../assets/Hero Section.png';
import introImage from '../../assets/Section 2.png';

const EnergyTransition = () => {
  const benefits = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
          <polyline points="22 4 12 14.01 9 11.01"/>
        </svg>
      ),
      title: 'Strategic Roadmapping',
      description: 'Clear, actionable plans for transitioning to sustainable energy sources with defined milestones and metrics.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
      ),
      title: 'Risk Assessment',
      description: 'Comprehensive analysis of potential challenges and development of mitigation strategies.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="12" y1="1" x2="12" y2="23"/>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
      ),
      title: 'Financial Modeling',
      description: 'Detailed cost-benefit analysis and ROI projections to support investment decisions.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      title: 'Stakeholder Alignment',
      description: 'Strategies for engaging and aligning diverse stakeholders around transition goals.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
          <line x1="3" y1="9" x2="21" y2="9"/>
          <line x1="9" y1="21" x2="9" y2="9"/>
        </svg>
      ),
      title: 'Regulatory Guidance',
      description: 'Navigation of complex regulatory landscapes and compliance requirements.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
        </svg>
      ),
      title: 'Performance Tracking',
      description: 'Ongoing monitoring and optimization to ensure transition goals are met.',
    },
  ];

  const useCases = [
    {
      title: 'Municipal Energy Transition',
      description: 'Helping cities develop comprehensive strategies for transitioning municipal operations and infrastructure to sustainable energy sources.',
    },
    {
      title: 'Industrial Decarbonization',
      description: 'Supporting manufacturing and industrial facilities in reducing their carbon footprint through strategic energy transition planning.',
    },
    {
      title: 'Corporate Sustainability Programs',
      description: 'Developing enterprise-wide energy transition strategies aligned with corporate sustainability commitments.',
    },
    {
      title: 'Community Energy Planning',
      description: 'Engaging communities in developing localized energy transition plans that reflect their unique needs and resources.',
    },
  ];

  return (
    <div className={styles.servicePage}>
      {/* Hero Section */}
      <Hero
        label="Service"
        title="Energy Transition Strategy"
        description="Strategic planning and roadmapping for organizations transitioning to sustainable energy sources."
        primaryCTA={{ text: 'Get Started', href: '/contact' }}
        minHeight="500px"
      />

      {/* Intro Section */}
      <section className={styles.introSection}>
        <div className={styles.container}>
          <div className={styles.introGrid}>
            <div className={styles.introContent}>
              <span className={styles.sectionLabel}>Overview</span>
              <h2 className={styles.sectionTitle}>Navigate Your Energy Transition with Confidence</h2>
              <p className={styles.sectionText}>
                The transition to sustainable energy is one of the most significant 
                transformations organizations face today. Whether you're a municipality, 
                industrial operator, or corporate entity, a well-planned energy transition 
                strategy is essential for success.
              </p>
              <p className={styles.sectionText}>
                At Solora, we bring deep expertise in energy systems, policy frameworks, 
                and change management to help you develop and execute effective transition 
                strategies that align with your goals and constraints.
              </p>
              <div className={styles.featuresList}>
                <div className={styles.featureItem}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Customized transition roadmaps</span>
                </div>
                <div className={styles.featureItem}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Technology-agnostic approach</span>
                </div>
                <div className={styles.featureItem}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Implementation support included</span>
                </div>
              </div>
            </div>
            <div className={styles.introImage}>
              <img src={introImage} alt="Energy Transition Planning" className={styles.image} />
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
              <span className={styles.statValue}>40%</span>
              <span className={styles.statLabel}>Average emissions reduction achieved</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>25+</span>
              <span className={styles.statLabel}>Transition strategies developed</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>$50M+</span>
              <span className={styles.statLabel}>Investment facilitated</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>100%</span>
              <span className={styles.statLabel}>Client satisfaction rate</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="Ready to Plan Your Energy Transition?"
        description="Let's discuss how we can help you develop a strategic roadmap for sustainable energy."
        buttonText="Schedule a Consultation"
        buttonLink="/contact"
      />
    </div>
  );
};

export default EnergyTransition;
