import { Link } from 'react-router-dom';
import Hero from '../components/Hero/Hero';
import CTA from '../components/CTA/CTA';
import { FeatureCard } from '../components/Cards/Card';
import styles from './Home.module.css';

// Import images
import heroVideo from '../assets/5669737-uhd_3840_2160_24fps.mp4';
import imgTopLeft from '../assets/Placeholder/e6999d49d4a464c7aa62cb1ecc5c5bea870c0f0e.png';
import imgTopRight from '../assets/Placeholder/518cdd0e51350205518294f4d0284d069bc75705.png';
import imgMiddle from '../assets/Placeholder/1007058d7e8d3f4a8f862e80fc876c7b0a8064e2.png';
import imgBottomRight from '../assets/Placeholder/7e7f0f40e5a527abddea5768f4518060207a782c.png';
import pillar1Img from '../assets/46aea658d8ff82079265326bc2a7dd8db23937c9.png';
import pillar2Img from '../assets/f8434dd5c587786c1992231da9744deb53f3b643.png';
import pillar3Img from '../assets/351b01cb02f62e5a1b4ced3ca08077d350c33fcb.png';
import wasteManagementImg from '../assets/Placeholder/picture-37.png';
import techInnoImg from '../assets/techinno.png';
import envAnlyImg from '../assets/envanly.png';
import energyTransImg from '../assets/energytrans.png';

const Home = () => {
  // Three Pillars for Solution Framework
  const pillars = [
    {
      label: 'Pillar One',
      title: 'Circular Waste Systems & Clean Resource Planning',
      image: pillar1Img,
    },
    {
      label: 'Pillar Two',
      title: 'Regulatory Intelligence & Market Pathways',
      image: pillar2Img,
    },
    {
      label: 'Pillar Three',
      title: 'Data-Driven Technology & Energy Transition Solutions',
      image: pillar3Img,
    },
  ];

  // Challenges/Expertise items
  const challenges = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3"/>
          <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
        </svg>
      ),
      title: 'Sub-optimal Or Outdated Waste Management Infrastructure?',
      description: 'Clarify your path forward with data-driven insights that help you modernize waste, energy, and environmental systems—so your community or organization can make informed, future-proof decisions.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8"/>
          <path d="M21 21l-4.35-4.35"/>
          <path d="M11 8v6M8 11h6"/>
        </svg>
      ),
      title: 'Difficulty Evaluating or Deploying the Right Technologies',
      description: 'Whether you\'re a municipality seeking the right solution or a tech vendor trying to identify ideal communities, finding the right fit is challenging. We provide data-backed assessments, feasibility insights, and deployment strategies.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="7" height="7"/>
          <rect x="14" y="3" width="7" height="7"/>
          <rect x="3" y="14" width="7" height="7"/>
          <rect x="14" y="14" width="7" height="7"/>
        </svg>
      ),
      title: 'Unclear policy, regulations, or compliance requirements?',
      description: 'Navigate complex policy landscapes with clarity. Our team translates regulations into actionable plans, helping you stay compliant while advancing real sustainability outcomes.',
    },
  ];

  // Core Services
  const services = [
    {
      title: 'Waste Management & Planning',
      description: 'Transforming waste streams into economic and environmental value.',
      link: '/services/waste-management',
      image: wasteManagementImg,
    },
    {
      title: 'Technology Evaluation & Adoption',
      description: 'Helping international environmental technologies enter and succeed in the Canadian market.',
      link: '/services/technology-evaluation',
      image: techInnoImg,
    },
    {
      title: 'Environmental Analytics & Insights',
      description: 'Evidence-based insights for better planning, investment, and environmental outcomes.',
      link: '/services/environmental-analytics',
      image: envAnlyImg,
    },
    {
      title: 'Energy Transition Strategy',
      description: 'Advancing low-carbon projects that align with Canada\'s climate and energy targets.',
      link: '/services/energy-transition',
      image: energyTransImg,
    },
  ];

  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <Hero
        label="Sustainable Energy Solutions"
        title="Connecting Waste-to-Energy Technologies with Communities that Need Them."
        description="We bridge the gap between innovative waste-to-energy solutions and the communities ready to embrace sustainable transformation."
        primaryCTA={{ text: 'Speak With Our Team', href: '/contact' }}
        backgroundVideo={heroVideo}
        minHeight="700px"
      />

      {/* Pioneering Smart Waste Solutions Section */}
      <section className={styles.pioneering}>
        <div className={styles.container}>
          <div className={styles.pioneeringGrid}>
            <div className={styles.pioneeringContent}>
              <h2 className={styles.sectionTitle}>
                Pioneering <span className={styles.highlight}>Smart Waste Solutions</span> for Energy Transitions
              </h2>
              <p className={styles.sectionText}>
                Solora Technologies is a strategic partner for communities aiming to reduce waste, recover resources, and advance clean-energy goals. Achieving Canada's climate commitments requires more than technology — it requires trusted guidance, strong partnerships, and new, data-backed pathways. Solora provides the strategic intelligence, environmental insights, and solution frameworks that enable leaders to adopt waste-to-energy approaches with confidence.
              </p>
              <h3 className={styles.subheading}>Our edge? Rooted in science — built for a cleaner future.</h3>
              <p className={styles.sectionText}>
                Solora's integrated portfolio combines environmental data, policy alignment, and vetted technology partners to help forward-thinking clients reduce risk, strengthen their circular economy, and unlock measurable environmental and financial returns.
              </p>
            </div>
            <div className={styles.pioneeringImages}>
              <div className={styles.imageGridFour}>
                <div className={styles.imgTopLeft}>
                  <img src={imgTopLeft} alt="Industrial Facility" className={styles.actualImage} />
                </div>
                <div className={styles.imgTopRight}>
                  <img src={imgTopRight} alt="Person on mountain" className={styles.actualImage} />
                </div>
                <div className={styles.imgMiddle}>
                  <img src={imgMiddle} alt="Waste treatment facility" className={styles.actualImage} />
                </div>
                <div className={styles.imgBottomRight}>
                  <img src={imgBottomRight} alt="Landscape" className={styles.actualImage} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Framework - Three Pillars */}
      <section className={styles.solutionFramework}>
        <div className={styles.container}>
          <div className={styles.frameworkHeader}>
            <h2 className={styles.frameworkTitle}>Solora's Solution Framework</h2>
            <p className={styles.frameworkSubtitle}>Three Pillars. One Resilient Tomorrow.</p>
          </div>
          <div className={styles.pillarsGrid}>
            {pillars.map((pillar, index) => (
              <div 
                key={index} 
                className={styles.pillarCard}
                style={{ backgroundImage: `url(${pillar.image})` }}
              >
                <div className={styles.pillarOverlay}>
                  <span className={styles.pillarLabel}>{pillar.label}</span>
                  <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                </div>
              </div>
            ))}
          </div>
          <p className={styles.frameworkDescription}>
            Solora helps communities and organizations build future-ready waste systems through strategic planning, operational assessments, and technology-neutral guidance. We reduce uncertainty by identifying viable pathways for reducing landfill use, improving resource recovery, and preparing for waste-to-energy integration. Our approach empowers leaders to make confident, data-backed decisions that strengthen environmental, economic, and community resilience.
          </p>
        </div>
      </section>

      {/* Challenges / Expertise Section */}
      <section className={styles.challenges}>
        <div className={styles.container}>
          <div className={styles.challengesHeader}>
            <h2 className={styles.sectionTitle}>
              Your Challenges. <span className={styles.highlight}>Our Expertise</span>
            </h2>
          </div>
          <div className={styles.challengesGrid}>
            {challenges.map((challenge, index) => (
              <FeatureCard
                key={index}
                icon={challenge.icon}
                title={challenge.title}
                description={challenge.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Our Core Services Section */}
      <section className={styles.services}>
        <div className={styles.container}>
          <div className={styles.servicesHeader}>
            <h2 className={styles.sectionTitle}>Our Core Services</h2>
          </div>
          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <div key={index} className={styles.serviceCard}>
                <div className={styles.serviceImage}>
                  {service.image ? (
                    <img src={service.image} alt={service.title} />
                  ) : (
                    <div className={styles.servicePlaceholder} />
                  )}
                </div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>{service.description}</p>
                <Link to={service.link} className={styles.serviceLink}>
                  Learn More <span aria-hidden="true">›</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="Ready to Transform Your Community's Waste Into Energy?"
        description="Let's discuss how Solora can help you navigate the path to sustainable energy solutions."
        buttonText="Contact Us Today"
        buttonLink="/contact"
      />
    </div>
  );
};

export default Home;
