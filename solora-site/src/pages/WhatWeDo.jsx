import { Link } from 'react-router-dom';
import Hero from '../components/Hero/Hero';
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
    },
    {
      pillar: 'Service',
      title: 'Waste Management',
      description: 'Comprehensive waste stream analysis and optimization for maximum resource recovery.',
    },
    {
      pillar: 'Service',
      title: 'Environmental Analytics',
      description: 'Data-driven insights and reporting on environmental impact and sustainability metrics.',
    },
    {
      pillar: 'Service',
      title: 'Technology Evaluation',
      description: 'Assessment and adoption of cutting-edge waste-to-energy and sustainability technologies.',
    },
  ];

  // Use cases
  const useCases = [
    {
      title: 'Municipal Waste Systems',
      description: 'Helping cities transform their waste management infrastructure into sustainable energy resources.',
    },
    {
      title: 'Industrial Operations',
      description: 'Optimizing industrial waste streams for energy recovery and circular economy integration.',
    },
    {
      title: 'Agricultural Sectors',
      description: 'Converting agricultural waste into biogas and other valuable energy products.',
    },
    {
      title: 'Healthcare Facilities',
      description: 'Safe and sustainable management of medical waste with energy recovery options.',
    },
  ];

  return (
    <div className={styles.whatWeDo}>
      {/* Hero Section */}
      <Hero
        label="Our Services"
        title="What We Do"
        description="We provide comprehensive solutions that bridge the gap between sustainable technology and real-world implementation."
        minHeight="500px"
      />

      {/* Why This Work Section */}
      <section className={styles.whySection}>
        <div className={styles.container}>
          <div className={styles.whyGrid}>
            <div className={styles.whyImage}>
              <div className={styles.imagePlaceholder}>
                <span>Global Impact</span>
              </div>
            </div>
            <div className={styles.whyContent}>
              <span className={styles.sectionLabel}>The Challenge</span>
              <h2 className={styles.sectionTitle}>Why This Work Is Needed Now</h2>
              <p className={styles.sectionText}>
                The world generates over 2 billion tonnes of municipal solid waste annually, 
                with at least 33% not managed in an environmentally safe manner. This waste 
                represents not just an environmental crisis, but an untapped energy resource.
              </p>
              <p className={styles.sectionText}>
                Communities worldwide are seeking sustainable alternatives to landfills and 
                incineration. Waste-to-energy technologies offer a solution, but navigating 
                the complex landscape of options, regulations, and implementation challenges 
                requires specialized expertise.
              </p>
              <p className={styles.sectionText}>
                That's where Solora comes in. We connect proven technologies with the 
                communities that need them, ensuring successful adoption and lasting impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Use Cases */}
      <section className={styles.useCases}>
        <div className={styles.container}>
          <div className={styles.useCasesHeader}>
            <span className={styles.sectionLabel}>Applications</span>
            <h2 className={styles.sectionTitle}>Common Use Cases</h2>
          </div>
          <div className={styles.useCasesGrid}>
            {useCases.map((useCase, index) => (
              <div key={index} className={styles.useCaseCard}>
                <span className={styles.useCaseNumber}>{String(index + 1).padStart(2, '0')}</span>
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
      <section className={styles.serviceLinks}>
        <div className={styles.container}>
          <div className={styles.serviceLinksGrid}>
            <Link to="/services/energy-transition-strategy" className={styles.serviceLink}>
              <span className={styles.serviceLinkTitle}>Energy Transition Strategy</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            <Link to="/services/waste-management" className={styles.serviceLink}>
              <span className={styles.serviceLinkTitle}>Waste Management</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            <Link to="/services/environmental-analytics" className={styles.serviceLink}>
              <span className={styles.serviceLinkTitle}>Environmental Analytics & Insights</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            <Link to="/services/technology-evaluation-adoption" className={styles.serviceLink}>
              <span className={styles.serviceLinkTitle}>Technology Evaluation & Adoption</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
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
