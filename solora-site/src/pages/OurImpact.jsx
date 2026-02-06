import Hero from '../components/Hero/Hero';
import CTA from '../components/CTA/CTA';
import { InfoCard } from '../components/Cards/Card';
import styles from './OurImpact.module.css';

const OurImpact = () => {
  const stats = [
    { value: '50+', label: 'Projects Completed', description: 'Successful implementations across multiple sectors' },
    { value: '2M+', label: 'Tonnes Diverted', description: 'Waste diverted from landfills annually' },
    { value: '35%', label: 'Emissions Reduced', description: 'Average reduction in carbon emissions' },
    { value: '100+', label: 'Communities Served', description: 'Local communities benefiting from our solutions' },
  ];

  const impactAreas = [
    {
      title: 'Environmental Protection',
      description: 'Our solutions help reduce greenhouse gas emissions, prevent soil and water contamination, and conserve natural resources by transforming waste into valuable energy.',
      metrics: ['Reduced landfill usage', 'Lower carbon footprint', 'Resource conservation'],
    },
    {
      title: 'Economic Development',
      description: 'Waste-to-energy projects create local jobs, reduce energy costs, and generate new revenue streams for communities while addressing waste management challenges.',
      metrics: ['Job creation', 'Energy cost savings', 'Revenue generation'],
    },
    {
      title: 'Community Resilience',
      description: 'By developing local energy sources from waste, communities become more self-sufficient and less dependent on external energy supplies.',
      metrics: ['Energy independence', 'Local empowerment', 'Sustainable growth'],
    },
  ];

  const sdgs = [
    { number: 7, title: 'Affordable and Clean Energy' },
    { number: 11, title: 'Sustainable Cities and Communities' },
    { number: 12, title: 'Responsible Consumption and Production' },
    { number: 13, title: 'Climate Action' },
  ];

  return (
    <div className={styles.ourImpact}>
      {/* Hero Section */}
      <Hero
        label="Making a Difference"
        title="Our Impact"
        description="Measurable results in sustainability, community development, and environmental protection."
        minHeight="500px"
      />

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <InfoCard
                key={index}
                value={stat.value}
                label={stat.label}
                description={stat.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Impact Areas Section */}
      <section className={styles.impactAreasSection}>
        <div className={styles.container}>
          <div className={styles.impactHeader}>
            <span className={styles.sectionLabel}>Our Focus</span>
            <h2 className={styles.sectionTitle}>Areas of Impact</h2>
          </div>
          <div className={styles.impactAreasGrid}>
            {impactAreas.map((area, index) => (
              <div key={index} className={styles.impactCard}>
                <span className={styles.impactNumber}>{String(index + 1).padStart(2, '0')}</span>
                <h3 className={styles.impactTitle}>{area.title}</h3>
                <p className={styles.impactDescription}>{area.description}</p>
                <ul className={styles.metricsList}>
                  {area.metrics.map((metric, mIndex) => (
                    <li key={mIndex} className={styles.metricItem}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {metric}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Section */}
      <section className={styles.environmentalSection}>
        <div className={styles.container}>
          <div className={styles.environmentalGrid}>
            <div className={styles.environmentalContent}>
              <span className={styles.sectionLabel}>Environmental Benefits</span>
              <h2 className={styles.sectionTitle}>Protecting Our Planet</h2>
              <p className={styles.environmentalText}>
                Every project we undertake contributes to a healthier environment. 
                By converting waste to energy, we reduce the need for fossil fuels, 
                decrease landfill usage, and cut harmful emissions.
              </p>
              <p className={styles.environmentalText}>
                Our data-driven approach ensures that environmental benefits are 
                measured, verified, and continuously optimized throughout the 
                lifecycle of each project.
              </p>
              <div className={styles.benefitTags}>
                <span className={styles.tag}>Carbon Reduction</span>
                <span className={styles.tag}>Clean Energy</span>
                <span className={styles.tag}>Waste Diversion</span>
                <span className={styles.tag}>Resource Recovery</span>
              </div>
            </div>
            <div className={styles.environmentalVisual}>
              <div className={styles.visualPlaceholder}>
                <span>Environmental Impact Visualization</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SDG Section */}
      <section className={styles.sdgSection}>
        <div className={styles.container}>
          <div className={styles.sdgHeader}>
            <span className={styles.sectionLabel}>Global Goals</span>
            <h2 className={styles.sectionTitle}>Aligned with UN Sustainable Development Goals</h2>
            <p className={styles.sdgDescription}>
              Our work directly contributes to multiple SDGs, helping to create 
              a more sustainable and equitable world.
            </p>
          </div>
          <div className={styles.sdgGrid}>
            {sdgs.map((sdg) => (
              <div key={sdg.number} className={styles.sdgCard}>
                <span className={styles.sdgNumber}>SDG {sdg.number}</span>
                <h3 className={styles.sdgTitle}>{sdg.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="Want to Make an Impact?"
        description="Partner with us to create sustainable solutions that benefit your community and the environment."
        buttonText="Start the Conversation"
        buttonLink="/contact"
      />
    </div>
  );
};

export default OurImpact;
