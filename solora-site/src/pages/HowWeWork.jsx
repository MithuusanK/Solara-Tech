import Hero from '../components/Hero/Hero';
import CTA from '../components/CTA/CTA';
import { StepCard } from '../components/Cards/Card';
import styles from './HowWeWork.module.css';

const HowWeWork = () => {
  const processSteps = [
    {
      number: 1,
      title: 'Discovery & Assessment',
      description: 'We begin with a comprehensive assessment of your current situation, waste streams, energy needs, and community context. This phase establishes the foundation for a tailored solution.',
    },
    {
      number: 2,
      title: 'Strategic Planning',
      description: 'Based on our findings, we develop a strategic roadmap that outlines optimal technologies, implementation timelines, regulatory considerations, and expected outcomes.',
    },
    {
      number: 3,
      title: 'Technology Matching',
      description: 'We connect you with proven waste-to-energy technologies that align with your specific requirements, ensuring the best fit for your unique circumstances.',
    },
    {
      number: 4,
      title: 'Stakeholder Engagement',
      description: 'Successful implementation requires community buy-in. We facilitate stakeholder engagement to build support and address concerns throughout the process.',
    },
    {
      number: 5,
      title: 'Implementation Support',
      description: 'Our team provides hands-on support during implementation, ensuring smooth execution and addressing challenges as they arise.',
    },
    {
      number: 6,
      title: 'Monitoring & Optimization',
      description: 'Post-implementation, we continue to monitor performance, provide analytics, and optimize operations for maximum efficiency and impact.',
    },
  ];

  const principles = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      title: 'Trust & Transparency',
      description: 'We build relationships based on honest communication and transparent processes.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12,6 12,12 16,14"/>
        </svg>
      ),
      title: 'Long-term Partnership',
      description: 'We commit to your success beyond project completion with ongoing support.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
          <polyline points="22,4 12,14.01 9,11.01"/>
        </svg>
      ),
      title: 'Evidence-Based',
      description: 'Every recommendation is backed by data, research, and proven methodologies.',
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
      title: 'Community-Centered',
      description: 'Solutions are designed with community needs and benefits at the forefront.',
    },
  ];

  return (
    <div className={styles.howWeWork}>
      {/* Hero Section */}
      <Hero
        label="Our Process"
        title="How We Work"
        description="A structured, collaborative approach that ensures successful outcomes from discovery through implementation and beyond."
        minHeight="500px"
      />

      {/* Process Steps Section */}
      <section className={styles.processSection}>
        <div className={styles.container}>
          <div className={styles.processHeader}>
            <span className={styles.sectionLabel}>Our Process</span>
            <h2 className={styles.sectionTitle}>A Proven Approach to Sustainable Solutions</h2>
            <p className={styles.headerDescription}>
              Our six-step process has been refined through years of experience, 
              ensuring every project receives the attention and expertise it deserves.
            </p>
          </div>
          <div className={styles.processGrid}>
            {processSteps.map((step) => (
              <StepCard
                key={step.number}
                number={step.number}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className={styles.principlesSection}>
        <div className={styles.container}>
          <div className={styles.principlesGrid}>
            <div className={styles.principlesContent}>
              <span className={styles.sectionLabel}>Our Principles</span>
              <h2 className={styles.sectionTitle}>What Guides Our Work</h2>
              <p className={styles.principlesText}>
                Every engagement is guided by core principles that ensure we deliver 
                meaningful value while maintaining the highest standards of integrity 
                and professionalism.
              </p>
            </div>
            <div className={styles.principlesList}>
              {principles.map((principle, index) => (
                <div key={index} className={styles.principleCard}>
                  <div className={styles.principleIcon}>
                    {principle.icon}
                  </div>
                  <div className={styles.principleContent}>
                    <h3 className={styles.principleTitle}>{principle.title}</h3>
                    <p className={styles.principleDescription}>{principle.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className={styles.timelineSection}>
        <div className={styles.container}>
          <div className={styles.timelineHeader}>
            <span className={styles.sectionLabel}>Timeline</span>
            <h2 className={styles.sectionTitle}>What to Expect</h2>
          </div>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineMarker}></div>
              <div className={styles.timelineContent}>
                <span className={styles.timelinePeriod}>Week 1-2</span>
                <h3 className={styles.timelineTitle}>Initial Consultation</h3>
                <p className={styles.timelineDescription}>
                  Understanding your needs and defining project scope.
                </p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineMarker}></div>
              <div className={styles.timelineContent}>
                <span className={styles.timelinePeriod}>Week 3-6</span>
                <h3 className={styles.timelineTitle}>Assessment Phase</h3>
                <p className={styles.timelineDescription}>
                  Comprehensive analysis and technology evaluation.
                </p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineMarker}></div>
              <div className={styles.timelineContent}>
                <span className={styles.timelinePeriod}>Week 7-10</span>
                <h3 className={styles.timelineTitle}>Strategic Planning</h3>
                <p className={styles.timelineDescription}>
                  Developing your customized implementation roadmap.
                </p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineMarker}></div>
              <div className={styles.timelineContent}>
                <span className={styles.timelinePeriod}>Ongoing</span>
                <h3 className={styles.timelineTitle}>Implementation & Support</h3>
                <p className={styles.timelineDescription}>
                  Guiding you through execution with continuous support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="Ready to Start Your Journey?"
        description="Let's discuss how our proven process can help you achieve your sustainability goals."
        buttonText="Schedule a Consultation"
        buttonLink="/contact"
      />
    </div>
  );
};

export default HowWeWork;
