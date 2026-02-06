import Hero from '../../components/Hero/Hero';
import CTA from '../../components/CTA/CTA';
import styles from './ServicePage.module.css';
import heroImage from '../../assets/Hero Section.png';
import introImage from '../../assets/Image.png';

const TechnologyEvaluation = () => {
  const benefits = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
      ),
      title: 'Due Diligence',
      description: 'Thorough assessment of technology maturity, reliability, and vendor stability.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
          <polyline points="22 4 12 14.01 9 11.01"/>
        </svg>
      ),
      title: 'Performance Validation',
      description: 'Independent verification of technology performance claims and specifications.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="12" y1="1" x2="12" y2="23"/>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
      ),
      title: 'Cost-Benefit Analysis',
      description: 'Comprehensive financial modeling including total cost of ownership and ROI projections.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="12 2 2 7 12 12 22 7 12 2"/>
          <polyline points="2 17 12 22 22 17"/>
          <polyline points="2 12 12 17 22 12"/>
        </svg>
      ),
      title: 'Integration Assessment',
      description: 'Evaluation of technology compatibility with existing systems and infrastructure.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      title: 'Risk Analysis',
      description: 'Identification and assessment of implementation risks with mitigation strategies.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
          <line x1="12" y1="22.08" x2="12" y2="12"/>
        </svg>
      ),
      title: 'Vendor Comparison',
      description: 'Side-by-side comparison of competing technologies and vendors.',
    },
  ];

  const useCases = [
    {
      title: 'Renewable Energy Technologies',
      description: 'Evaluating solar, wind, storage, and other clean energy technologies for deployment.',
    },
    {
      title: 'Waste Processing Equipment',
      description: 'Assessing sorting, processing, and recycling technologies for waste management operations.',
    },
    {
      title: 'Monitoring & Sensing Systems',
      description: 'Evaluating environmental monitoring equipment and IoT sensor networks.',
    },
    {
      title: 'Carbon Capture Technologies',
      description: 'Assessing emerging carbon capture and sequestration technologies for viability.',
    },
  ];

  return (
    <div className={styles.servicePage}>
      {/* Hero Section */}
      <Hero
        label="Service"
        title="Technology Evaluation"
        description="Independent assessment and validation of environmental technologies for informed investment decisions."
        primaryCTA={{ text: 'Get Started', href: '/contact' }}
        minHeight="500px"
      />

      {/* Intro Section */}
      <section className={styles.introSection}>
        <div className={styles.container}>
          <div className={styles.introGrid}>
            <div className={styles.introContent}>
              <span className={styles.sectionLabel}>Overview</span>
              <h2 className={styles.sectionTitle}>Make Confident Technology Investments</h2>
              <p className={styles.sectionText}>
                The environmental technology landscape is evolving rapidly, with new 
                solutions emerging constantly. Making the right technology investments 
                requires thorough due diligence and independent evaluation to separate 
                proven solutions from unproven promises.
              </p>
              <p className={styles.sectionText}>
                Our technology evaluation services provide objective, expert assessment 
                of environmental technologies across the full range of maturity levels—from 
                emerging innovations to commercial-ready solutions.
              </p>
              <div className={styles.featuresList}>
                <div className={styles.featureItem}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Vendor-neutral assessment</span>
                </div>
                <div className={styles.featureItem}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Technical deep-dives</span>
                </div>
                <div className={styles.featureItem}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Implementation roadmaps</span>
                </div>
              </div>
            </div>
            <div className={styles.introImage}>
              <img src={introImage} alt="Technology Evaluation" className={styles.image} />
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
              <span className={styles.statValue}>200+</span>
              <span className={styles.statLabel}>Technologies evaluated</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>$100M+</span>
              <span className={styles.statLabel}>Investment decisions supported</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>85%</span>
              <span className={styles.statLabel}>Client procurement success rate</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>40+</span>
              <span className={styles.statLabel}>Technology categories covered</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="Ready to Evaluate Environmental Technologies?"
        description="Let's discuss how we can help you make informed technology decisions."
        buttonText="Schedule a Consultation"
        buttonLink="/contact"
      />
    </div>
  );
};

export default TechnologyEvaluation;
