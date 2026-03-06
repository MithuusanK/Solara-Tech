import React from 'react';
import styles from './About.module.css';
import heroImage from '../assets/ContactHero Section.png';
import logoImg from '../assets/Logo.png';
import missionImg from '../assets/ContactImage1.jpg';
import visionImg from '../assets/ContactIamge2.jpg';
import commitmentImg from '../assets/ContactImage3.png';
import bannerImg from '../assets/ContactImage4.png';
import apartImg from '../assets/ContactImage5.png';

const About = () => {
  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero} style={{ backgroundImage: `url(${heroImage})` }}>
        <div className={styles.heroOverlay} />
      </section>

      {/* Our Story Section */}
      <section className={styles.storySection}>
        <div className={styles.container}>
          <div className={styles.storyIconWrapper}>
            <img src={logoImg} alt="Solora Logo" className={styles.storyIcon} />
          </div>
          <h2 className={styles.storyTitle}>Our Story</h2>
          
          <div className={styles.storyTimeline}>
            <div className={styles.storyStep}>
              <div className={styles.stepNumber}>01</div>
              <div className={styles.stepCard}>
                <h3 className={styles.stepTitle}>The Challenge We Saw</h3>
                <p className={styles.stepText}>
                  Canada faces growing waste streams and shrinking landfill capacity while disposal costs, and increasingly, jurisdiction's clean energy goals demand new pathways for low-carbon, resilient infrastructure. Investors, municipalities, and technology providers often struggle to navigate the intersection of policy, technology, and environmental impact.
                </p>
              </div>
            </div>

            <div className={styles.storyStep}>
              <div className={styles.stepNumber}>02</div>
              <div className={styles.stepCard}>
                <h3 className={styles.stepTitle}>The Solora Solution</h3>
                <p className={styles.stepText}>
                  Solora was created to fill this role by offering a service advisory approach that integrates environmental analytics, policy navigation, technology evaluation, and Indigenous-guided partnership development. We bridge governments, international innovators, and investors to deliver sustainable, proven waste-to-resource and energy solutions.
                </p>
              </div>
            </div>

            <div className={styles.storyStep}>
              <div className={styles.stepNumber}>03</div>
              <div className={styles.stepCard}>
                <h3 className={styles.stepTitle}>Real World Impact</h3>
                <p className={styles.stepText}>Our work has supported:</p>
                <ul className={styles.stepList}>
                  <li>Municipal waste system improvements</li>
                  <li>Renewable energy project and large-scale infrastructure planning</li>
                  <li>Indigenous-led clean-energy partnerships</li>
                  <li>Cross-border technology transfer & localization</li>
                  <li>Compliance pathways that prevent costly enforcement actions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className={styles.missionSection}>
        <div className={styles.container}>
          <div className={styles.missionGrid}>
            <div className={styles.missionImage}>
              <img src={missionImg} alt="Our Mission" />
            </div>
            <div className={styles.missionContent}>
              <h2 className={styles.missionTitle}>Our Mission</h2>
              <p className={styles.missionText}>
                Our mission is to accelerate the transition to a circular, low-carbon economy through evidence-based insights, innovative technologies, and respectful partnerships that create environmental, economic, and social value. Supporting communities in the journey towards a more sustainable, efficient, and resilient future. We help organizations transform waste into opportunity, adopt clean energy solutions, and navigate regulatory systems with clarity and confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className={styles.visionSection}>
        <div className={styles.container}>
          <div className={styles.visionGrid}>
            <div className={styles.visionContent}>
              <h2 className={styles.visionTitle}>Our Vision</h2>
              <p className={styles.visionText}>
                We envision a world where waste streams become renewable resources, where communities have access to clean, low-cost energy systems, and where innovative technologies can move seamlessly from development to deployment. Our vision centers on creating a future where sustainable choices are accessible, proven, and integrated into everyday infrastructure.
              </p>
              <p className={styles.visionText}>
                A future where clean energy powers communities, waste becomes opportunity, and sustainable development is guided by Indigenous values and shared prosperity.
              </p>
            </div>
            <div className={styles.visionImage}>
              <img src={visionImg} alt="Our Vision" />
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className={styles.commitmentSection}>
        <div className={styles.container}>
          <div className={styles.commitmentGrid}>
            <div className={styles.commitmentImage}>
              <img src={commitmentImg} alt="Our Commitment" />
            </div>
            <div className={styles.commitmentContent}>
              <h2 className={styles.commitmentTitle}>Our Commitment & Approach</h2>
              <p className={styles.commitmentText}>
                At Solora, our work is guided by a commitment to environmental responsibility, transparent collaboration, and evidence-driven decision making. We integrate ESG principles into every project we undertake, ensuring that the solutions we design not only meet today's waste, energy, and regulatory challenges but also contribute to long-term community, environmental, and economic resilience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={styles.valuesSection}>
        <div className={styles.container}>
          <h2 className={styles.valuesMainTitle}>Solora's Values</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueLargeCard}>
              <h3 className={styles.valueLargeTitle}>Built Into Everything We Do</h3>
            </div>

            <div className={styles.valueCard}>
              <div className={styles.valueIconCircle}>
                <svg viewBox="0 0 24 24" fill="white" stroke="none">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2h16zM9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87m-4-10.26a4 4 0 0 1 0 7.75" stroke="white" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <h4 className={styles.valueTitle}>Collaboration First</h4>
              <p className={styles.valueDesc}>We work across stakeholders to build trust, alignment, and shared understanding.</p>
            </div>

            <div className={styles.valueCard}>
              <div className={styles.valueIconCircle}>
                <svg viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" fill="none" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" fill="none" />
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
              </div>
              <h4 className={styles.valueTitle}>Clarity Through Data</h4>
              <p className={styles.valueDesc}>We simplify complexity with insights that support confident decision-making.</p>
            </div>

            <div className={styles.valueCard}>
              <div className={styles.valueIconCircle}>
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <rect x="4" y="4" width="6" height="6" rx="1" />
                  <rect x="14" y="4" width="6" height="6" rx="1" />
                  <rect x="4" y="14" width="6" height="6" rx="1" />
                  <rect x="14" y="14" width="6" height="6" rx="1" />
                </svg>
              </div>
              <h4 className={styles.valueTitle}>Technology-Neutral</h4>
              <p className={styles.valueDesc}>Our evaluations prioritize what works — not what's trendy.</p>
            </div>

            <div className={styles.valueCard}>
              <div className={styles.valueIconCircle}>
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M3 3v18h18" />
                  <path d="M18 17l-5-5-3 3-4-4" />
                </svg>
              </div>
              <h4 className={styles.valueTitle}>Measurable Impact</h4>
              <p className={styles.valueDesc}>Every recommendation is tied to outcomes that matter.</p>
            </div>

            <div className={styles.valueCard}>
              <div className={styles.valueIconCircle}>
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2h16zM9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M17 11a4 4 0 0 0 0-8" />
                </svg>
              </div>
              <h4 className={styles.valueTitle}>Community at Center</h4>
              <p className={styles.valueDesc}>We support solutions that strengthen local resilience and reflect local needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Guided By Banner */}
      <section className={styles.bannerSection} style={{ backgroundImage: `url(${bannerImg})` }}>
        <div className={styles.bannerOverlay} />
        <div className={styles.container}>
          <div className={styles.bannerContent}>
            <h2 className={styles.bannerText}>
              Guided by <span className={styles.bannerHighlight}>Science.</span>
            </h2>
            <h2 className={styles.bannerText}>
              Driven by <span className={styles.bannerHighlight}>Purpose.</span>
            </h2>
            <h2 className={styles.bannerText}>
              Focused on a <span className={styles.bannerHighlight}>Sustainable Future.</span>
            </h2>
          </div>
        </div>
      </section>

      {/* ESG Section */}
      <section className={styles.esgSection}>
        <div className={styles.container}>
          <h2 className={styles.esgMainTitle}>Driven by ESG, Grounded in Sustainability</h2>
          <p className={styles.esgSubtitle}>We embed environmental, social, and governance considerations into the foundation of our advisory model. This means:</p>
          
          <div className={styles.esgGrid}>
            <div className={styles.esgCard}>
              <div className={styles.esgIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <h3 className={styles.esgTitle}>Environmental Responsibility</h3>
              <ul className={styles.esgList}>
                <li>Designing circular waste systems that reduce landfill and emissions</li>
                <li>Supporting clean-energy pathways that advance climate goals</li>
                <li>Ensuring that new technologies meet the highest air, water, and safety standards</li>
                <li>Prioritizing solutions that protect ecosystems and local watersheds</li>
              </ul>
            </div>

            <div className={styles.esgCard}>
              <div className={styles.esgIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className={styles.esgTitle}>Social Impact</h3>
              <ul className={styles.esgList}>
                <li>Building respectful, equity-centered partnerships with Indigenous communities</li>
                <li>Creating pathways for training, employment, and skills development</li>
                <li>Supporting community benefit programs, youth scholarship funding</li>
                <li>Ensuring that major infrastructure projects generate shared value for current and future generations</li>
              </ul>
            </div>

            <div className={styles.esgCard}>
              <div className={styles.esgIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3 className={styles.esgTitle}>Governance & Accountability</h3>
              <ul className={styles.esgList}>
                <li>Operating with transparency in all stakeholder engagement</li>
                <li>Providing objective, vendor-neutral analysis</li>
                <li>Aligning recommendations with federal, provincial, and municipal policy</li>
                <li>Maintaining the highest regulatory, ethical, and data integrity standards</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className={styles.apartSection}>
        <div className={styles.container}>
          <div className={styles.apartGrid}>
            <div className={styles.apartImage}>
              <img src={apartImg} alt="What Sets Us Apart" />
            </div>
            <div className={styles.apartContent}>
              <h2 className={styles.apartTitle}>What Sets Us Apart</h2>
              <div className={styles.apartCards}>
                <div className={styles.apartCard}>
                  <p className={styles.apartText}>A blend of technical, regulatory, and market expertise across waste, energy, emissions, and compliance.</p>
                </div>
                <div className={styles.apartCard}>
                  <p className={styles.apartText}>Ability to translate complexity into clear paths forward.</p>
                </div>
                <div className={styles.apartCard}>
                  <p className={styles.apartText}>Technology evaluation grounded in real-world field data.</p>
                </div>
                <div className={styles.apartCard}>
                  <p className={styles.apartText}>Deep expertise across municipal systems, policy, & emerging innovations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
