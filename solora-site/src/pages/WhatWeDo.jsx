import { Link } from 'react-router-dom';
import SlidingCarousel from '../components/Carousel/SlidingCarousel';
import styles from './WhatWeDo.module.css';

const WhatWeDo = () => {
  // Services carousel items
  const servicesItems = [
    {
      title: 'Energy Transition Strategy',
      description: 'Helping waste management partners adopt more efficient technologies that convert solid waste into energy.',
      backgroundImage: new URL('../assets/servicesimage1.png', import.meta.url).href,
      link: '/services/energy-transition-strategy',
    },
    {
      title: 'Waste Management Planning',
      description: 'Supporting renewable energy integration, working with local waste management partners, and providing policy guidance for investors.',
      backgroundImage: new URL('../assets/serviceimage2.png', import.meta.url).href,
      link: '/services/waste-management',
    },
    {
      title: 'Technology Transfer & Integration',
      description: 'Assisting local and international technology providers entering Canada with regulatory navigation, compliance, and market positioning.',
      backgroundImage: new URL('../assets/serviceimage3.png', import.meta.url).href,
      link: '/services/technology-evaluation-adoption',
    },
    {
      title: 'Environmental Analytics & Insights',
      description: 'Turn complex environmental data into tool, actionable maps that guide policy, technology, and investments.',
      backgroundImage: new URL('../assets/serviceimage4.png', import.meta.url).href,
      link: '/services/environmental-analytics',
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
      icon: new URL('../assets/investors_whatwedo.png', import.meta.url).href,
      title: 'Investors',
      description: 'Assessing the feasibility and market potential of emerging technologies.',
    },
    {
      icon: new URL('../assets/indigenous.png', import.meta.url).href,
      title: 'Indigenous Community Leaders',
      description: 'Ensuring solutions align with community values and environmental stewardship.',
    },
    {
      icon: new URL('../assets/policy_whatwedo.png', import.meta.url).href,
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
                <li><img src={new URL('../assets/whatwedo1.png', import.meta.url).href} alt="" className={styles.challengeIcon} /> Aging infrastructure and growing waste volumes</li>
                <li><img src={new URL('../assets/whatwedo2.png', import.meta.url).href} alt="" className={styles.challengeIcon} /> Complex environmental regulations</li>
                <li><img src={new URL('../assets/whatwedo3.png', import.meta.url).href} alt="" className={styles.challengeIcon} /> Uncertain technology choices</li>
                <li><img src={new URL('../assets/whatwedo4.png', import.meta.url).href} alt="" className={styles.challengeIcon} /> Increased pressure to meet sustainability goals</li>
                <li><img src={new URL('../assets/whatwedo5.png', import.meta.url).href} alt="" className={styles.challengeIcon} /> Limited access to local environmental data</li>
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

      {/* Overview of Solora's Approach */}
      <section className={styles.approachSection}>
        <div className={styles.container}>
          <div className={styles.approachHeader}>
            <h2 className={styles.sectionTitle}>
              Overview of <span className={styles.highlight}>Solora's Approach</span>
            </h2>
            <p className={styles.approachSubtitle}>
              Solora combines policy expertise, technical analysis, and cross-sector collaboration to support environmental transformation across Canada. Our team brings together municipalities, Indigenous communities, investors, and international technology providers to ensure every solution is proven, compliant, and aligned with long-term sustainability goals.
            </p>
          </div>
          <div className={styles.approachGrid}>
            <div className={styles.approachItem}>
              <div className={styles.approachIcon}>
                <img src={new URL('../assets/L Primary Icon 16.png', import.meta.url).href} alt="" />
              </div>
              <div className={styles.approachItemContent}>
                <h3 className={styles.approachItemTitle}>Waste-to-energy strategy</h3>
                <p className={styles.approachItemText}>
                  We help stakeholders explore and adopt technologies that convert organic waste into renewable fuels, reducing landfill use and emissions.
                </p>
              </div>
            </div>
            <div className={styles.approachItem}>
              <div className={styles.approachIcon}>
                <img src={new URL('../assets/L Primary Icon 17.png', import.meta.url).href} alt="" />
              </div>
              <div className={styles.approachItemContent}>
                <h3 className={styles.approachItemTitle}>Clean energy development</h3>
                <p className={styles.approachItemText}>
                  We support municipalities and investors in identifying renewable energy pathways that fit local needs and align with regulatory and climate commitments.
                </p>
              </div>
            </div>
            <div className={styles.approachItem}>
              <div className={styles.approachIcon}>
                <img src={new URL('../assets/L Primary Icon 18.png', import.meta.url).href} alt="" />
              </div>
              <div className={styles.approachItemContent}>
                <h3 className={styles.approachItemTitle}>Circular economy solutions</h3>
                <p className={styles.approachItemText}>
                  We guide partners in creating systems that repurpose waste into usable resources, strengthening environmental and economic resilience.
                </p>
              </div>
            </div>
            <div className={styles.approachItem}>
              <div className={styles.approachIcon}>
                <img src={new URL('../assets/L Primary Icon 19.png', import.meta.url).href} alt="" />
              </div>
              <div className={styles.approachItemContent}>
                <h3 className={styles.approachItemTitle}>Environmental intelligence</h3>
                <p className={styles.approachItemText}>
                  We deliver data-driven insights—such as waste-flow modeling, market forecasting, and ROI analysis—to inform investment and operational decisions.
                </p>
              </div>
            </div>
            <div className={styles.approachItem}>
              <div className={styles.approachIcon}>
                <img src={new URL('../assets/L Primary Icon 20.png', import.meta.url).href} alt="" />
              </div>
              <div className={styles.approachItemContent}>
                <h3 className={styles.approachItemTitle}>Technology transfer & deployment</h3>
                <p className={styles.approachItemText}>
                  We help innovative global technologies enter the Canadian market by evaluating feasibility, navigating regulations, and coordinating partnerships.
                </p>
              </div>
            </div>
            <div className={styles.approachItem}>
              <div className={styles.approachIcon}>
                <img src={new URL('../assets/L Primary Icon 21.png', import.meta.url).href} alt="" />
              </div>
              <div className={styles.approachItemContent}>
                <h3 className={styles.approachItemTitle}>Regulatory and permitting support</h3>
                <p className={styles.approachItemText}>
                  We assist clients in understanding and completing the necessary permits, compliance steps, and documentation needed to move projects forward smoothly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Carousel */}
      <SlidingCarousel
        title="End-to-End Waste-to-Energy Transition Coordination & Implementation"
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
      <section className={styles.ctaBanner}>
        <img
          src={new URL('../assets/whatwedofinalsection.jpg', import.meta.url).href}
          alt="Workers at clean energy site"
          className={styles.ctaBannerImage}
        />
        <div className={styles.ctaBannerOverlay}></div>
        <div className={styles.ctaBannerContent}>
          <h2 className={styles.ctaBannerTitle}>
            Let's power Canada's clean-energy evolution together.
          </h2>
          <Link to="/contact" className={styles.ctaBannerButton}>
            Connect with Our Team
          </Link>
        </div>
      </section>
    </div>
  );
};

export default WhatWeDo;
