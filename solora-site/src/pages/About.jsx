import Hero from '../components/Hero/Hero';
import CTA from '../components/CTA/CTA';
import { ValueCard } from '../components/Cards/Card';
import styles from './About.module.css';

const About = () => {
  const timeline = [
    { year: '2018', title: 'Foundation', description: 'Solora Technologies was founded with a vision to bridge the gap between waste-to-energy technology and communities.' },
    { year: '2019', title: 'First Projects', description: 'Completed our first municipal waste assessment projects in Quebec.' },
    { year: '2020', title: 'Expansion', description: 'Expanded services to include technology evaluation and adoption consulting.' },
    { year: '2021', title: 'Growing Impact', description: 'Reached milestone of 25 completed projects across Canada.' },
    { year: '2023', title: 'Innovation', description: 'Launched our environmental analytics platform for data-driven decision making.' },
    { year: '2024', title: 'Today', description: 'Continuing to grow our impact with 50+ projects and expanding into new markets.' },
  ];

  const values = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
          <polyline points="22 4 12 14.01 9 11.01"/>
        </svg>
      ),
      title: 'Integrity',
      description: 'We operate with complete transparency and honesty in all our dealings.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 16v-4M12 8h.01"/>
        </svg>
      ),
      title: 'Innovation',
      description: 'We continuously seek new and better ways to solve sustainability challenges.',
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
      title: 'Collaboration',
      description: 'We believe in the power of partnerships to achieve greater impact.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
          <path d="M2 17l10 5 10-5"/>
          <path d="M2 12l10 5 10-5"/>
        </svg>
      ),
      title: 'Excellence',
      description: 'We strive for the highest quality in every project we undertake.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <line x1="2" y1="12" x2="22" y2="12"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
      ),
      title: 'Sustainability',
      description: 'Environmental responsibility is at the core of everything we do.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
      ),
      title: 'Community Focus',
      description: 'We prioritize the needs and well-being of the communities we serve.',
    },
  ];

  return (
    <div className={styles.about}>
      {/* Hero Section */}
      <Hero
        label="Who We Are"
        title="About Solora Technologies"
        description="We're a team of passionate experts dedicated to transforming how communities approach waste management and sustainable energy."
        minHeight="500px"
      />

      {/* Our Story Section */}
      <section className={styles.storySection}>
        <div className={styles.container}>
          <div className={styles.storyHeader}>
            <span className={styles.sectionLabel}>Our Journey</span>
            <h2 className={styles.sectionTitle}>Our Story</h2>
          </div>
          <div className={styles.timeline}>
            {timeline.map((item, index) => (
              <div key={index} className={styles.timelineItem}>
                <div className={styles.timelineYear}>{item.year}</div>
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineTitle}>{item.title}</h3>
                  <p className={styles.timelineDescription}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className={styles.missionSection}>
        <div className={styles.container}>
          <div className={styles.missionGrid}>
            <div className={styles.missionContent}>
              <span className={styles.sectionLabel}>Our Purpose</span>
              <h2 className={styles.sectionTitle}>Our Mission</h2>
              <p className={styles.missionText}>
                To accelerate the adoption of sustainable waste-to-energy solutions 
                by connecting innovative technologies with the communities that need 
                them, creating lasting environmental and economic benefits.
              </p>
            </div>
            <div className={styles.missionVisual}>
              <div className={styles.visualPlaceholder}>
                <span>Mission</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className={styles.visionSection}>
        <div className={styles.container}>
          <div className={styles.visionGrid}>
            <div className={styles.visionVisual}>
              <div className={styles.visualPlaceholder}>
                <span>Vision</span>
              </div>
            </div>
            <div className={styles.visionContent}>
              <span className={styles.sectionLabel}>Looking Forward</span>
              <h2 className={styles.sectionTitle}>Our Vision</h2>
              <p className={styles.visionText}>
                A world where every community has access to sustainable energy 
                solutions, where waste is valued as a resource, and where 
                environmental stewardship drives economic prosperity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className={styles.commitmentSection}>
        <div className={styles.container}>
          <div className={styles.commitmentContent}>
            <span className={styles.sectionLabel}>Our Commitment</span>
            <h2 className={styles.sectionTitle}>Our Approach</h2>
            <p className={styles.commitmentText}>
              We take a holistic approach to sustainability consulting, considering 
              not just the technical aspects but also the social, economic, and 
              environmental context of each project. Our methodology ensures that 
              solutions are not only effective but also embraced by the communities 
              they serve.
            </p>
            <div className={styles.commitmentPoints}>
              <div className={styles.commitmentPoint}>
                <div className={styles.pointIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <span>Data-driven decision making</span>
              </div>
              <div className={styles.commitmentPoint}>
                <div className={styles.pointIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <span>Community-centered solutions</span>
              </div>
              <div className={styles.commitmentPoint}>
                <div className={styles.pointIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <span>Long-term partnership focus</span>
              </div>
              <div className={styles.commitmentPoint}>
                <div className={styles.pointIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <span>Continuous improvement</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={styles.valuesSection}>
        <div className={styles.container}>
          <div className={styles.valuesHeader}>
            <span className={styles.sectionLabel}>What Drives Us</span>
            <h2 className={styles.sectionTitle}>Our Values</h2>
          </div>
          <div className={styles.valuesGrid}>
            {values.map((value, index) => (
              <ValueCard
                key={index}
                icon={value.icon}
                title={value.title}
                description={value.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="Want to Learn More About Us?"
        description="We'd love to share our story and discuss how we can help your community."
        buttonText="Get in Touch"
        buttonLink="/contact"
      />
    </div>
  );
};

export default About;
