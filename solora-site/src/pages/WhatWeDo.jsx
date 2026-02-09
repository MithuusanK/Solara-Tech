import { Link } from 'react-router-dom';
import SlidingCarousel from '../components/Carousel/SlidingCarousel';
import CTA from '../components/CTA/CTA';
import styles from './WhatWeDo.module.css';

const WhatWeDo = () => {
  // Services carousel items
  const servicesItems = [
    {
      pillar: 'Service',
      title: 'Energy Transition Strategy',
      description: 'Strategic planning and roadmapping for organizations transitioning to sustainable energy sources.',
      backgroundImage: new URL('../assets/servicesimage1.png', import.meta.url).href,
    },
    {
      pillar: 'Service',
      title: 'Waste Management',
      description: 'Comprehensive waste stream analysis and optimization for maximum resource recovery.',
      backgroundImage: new URL('../assets/serviceimage2.png', import.meta.url).href,
    },
    {
      pillar: 'Service',
      title: 'Environmental Analytics',
      description: 'Data-driven insights and reporting on environmental impact and sustainability metrics.',
      backgroundImage: new URL('../assets/serviceimage3.png', import.meta.url).href,
    },
    {
      pillar: 'Service',
      title: 'Technology Evaluation',
      description: 'Assessment and adoption of cutting-edge waste-to-energy and sustainability technologies.',
      backgroundImage: new URL('../assets/serviceimage4.png', import.meta.url).href,
    },
  ];

  // Use cases
  const useCases = [
    {
      icon: new URL('../assets/municipalities.png', import.meta.url).href,
      title: 'Municipalities',
      description: 'Choosing the right waste-to-energy system for your community\'s unique needs.',
    },
    {
      icon: new URL('../assets/engineers.png', import.meta.url).href,
      title: 'Engineers',
      description: 'Expert help evaluating environmental compliance and technical feasibility.',
    },
    {
      icon: new URL('../assets/technology.png', import.meta.url).href,
      title: 'Technology & Engineering Vendors',
      description: 'Market data and insights to pitch the right buyers effectively.',
    },
    {
      icon: new URL('../assets/investors.png', import.meta.url).href,
      title: 'Investors',
      description: 'Assessing the feasibility and market potential of emerging technologies.',
    },
    {
      icon: new URL('../assets/indigenous.png', import.meta.url).href,
      title: 'Indigenous Community Leaders',
      description: 'Ensuring solutions align with community values and environmental stewardship.',
    },
    {
      icon: new URL('../assets/policy.png', import.meta.url).href,
      title: 'Policy Analysts',
      description: 'Environmental analysis and data that require actionable, local environmental data.',
    },
  ];

  return (
    <div className={styles.whatWeDo}>
      {/* Hero Section with Video Background */}
      <section className={styles.heroSection}>
        <video autoPlay muted loop className={styles.heroVideo}>
          <source src={new URL('../assets/13805097-hd_1920_1080_30fps.mp4', import.meta.url).href} type="video/mp4" />
        </video>
        <div className={styles.heroContent}>
          <span className={styles.heroLabel}>Our Solutions</span>
          <h1 className={styles.heroTitle}>What We Do</h1>
          <p className={styles.heroDescription}>Solara delivers strategic guidance, environmental intelligence, and technology integration to help communities, investors, and innovators accelerate the transition to clean energy.</p>
          <div className={styles.heroButtons}>
            <Link to="/contact" className={styles.buttonPrimary}>
              Speak With Our Team
            </Link>
            <Link to="/how-we-work" className={styles.buttonSecondary}>
              Explore How We Work
            </Link>
          </div>
        </div>
      </section>

      {/* Why This Work Section */}
      <section className={styles.whySection}>
        <div className={styles.container}>
          <div className={styles.whyGrid}>
            <div className={styles.whyImage}>
              <img src={new URL('../assets/garbagedump.png', import.meta.url).href} alt="Garbage dump" />
            </div>
            <div className={styles.whyContent}>
              <span className={styles.sectionLabel}>The Challenge</span>
              <h2 className={styles.sectionTitle}>Why This Work Is Needed <span className={styles.highlightNow}>Now</span></h2>
              <h3 className={styles.whySubtitle}>A World Facing Urgent Environmental Challenges</h3>
              <p className={styles.sectionText}>
                Clean energy and waste-to-resource technologies are evolving rapidly—but adoption isn't keeping pace. Communities and organizations are struggling with:
              </p>
              <ul className={styles.challengesList}>
                <li><span className={styles.challengeIcon}>▲</span> Aging infrastructure and growing waste volumes</li>
                <li><span className={styles.challengeIcon}>▲</span> Complex environmental regulations</li>
                <li><span className={styles.challengeIcon}>●</span> Uncertain technology choices</li>
                <li><span className={styles.challengeIcon}>◆</span> Increased pressure to meet sustainability goals</li>
                <li><span className={styles.challengeIcon}>■</span> Limited access to local environmental data</li>
              </ul>
              <div className={styles.calloutBox}>
                <p>Solara bridges these gaps—ensuring innovation doesn't stall but instead creates meaningful, measurable change.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Use Cases */}
      <section className={styles.useCases}>
        <div className={styles.container}>
          <div className={styles.useCasesHeader}>
            <h2 className={styles.sectionTitle}>Common Use Cases</h2>
            <p className={styles.useCasesSubtitle}>How different stakeholders benefit from our services</p>
          </div>
          <div className={styles.useCasesGrid}>
            {useCases.map((useCase, index) => (
              <div key={index} className={styles.useCaseCard}>
                <img src={useCase.icon} alt={useCase.title} className={styles.stakeholderIcon} />
                <h3 className={styles.useCaseTitle}>{useCase.title}</h3>
                <p className={styles.useCaseDescription}>{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Carousel */}
      <SlidingCarousel
        title="Our Services"
        subtitle="What We Offer"
        items={servicesItems}
      />

      {/* Service Links */}
      <section className={styles.processSection}>
        <div className={styles.container}>
          <div className={styles.processSectionContent}>
            <div className={styles.processHeader}>
              <h2 className={styles.processTitle}>From Insight to Execution — <span className={styles.highlight}>We Drive Your Path Forward</span></h2>
              <Link to="/how-we-work" className={styles.processCTA}>
                Explore How We Work
              </Link>
            </div>
            <div className={styles.processSteps}>
              <div className={styles.processStep}>
                <div className={styles.stepBadge}>01</div>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>Data Collection & Analysis</h3>
                  <p className={styles.stepDescription}>Gather environmental, community, and market data.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepBadge}>02</div>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>Strategy & Solution Design</h3>
                  <p className={styles.stepDescription}>Identify the right technologies, partners, and policy pathways for your community or project.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepBadge}>03</div>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>Deployment & Support</h3>
                  <p className={styles.stepDescription}>Implement solutions and guide partners.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepBadge}>04</div>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>Monitoring & Impact</h3>
                  <p className={styles.stepDescription}>Measure outcomes, provide dashboards, and refine strategy.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="Ready to Explore Our Services?"
        description="Let us help you find the right solution for your sustainability challenges."
        buttonText="Get in Touch"
        buttonLink="/contact"
      />
    </div>
  );
};

export default WhatWeDo;
