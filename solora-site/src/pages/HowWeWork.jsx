import { useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero/Hero';
import styles from './HowWeWork.module.css';
import collaborationImg from '../assets/Data_Team_Collaboration.jpg';
import iconCredibility from '../assets/L Primary White 4.png';
import iconPermitting from '../assets/L Primary White 5.png';
import iconStrategies from '../assets/L Primary White 7.png';
import iconRisk from '../assets/L Primary White 3.png';

// Service area images
import wasteImg from '../assets/Waste_Truck_and_Excavator.jpg';
import energyImg from '../assets/Power_Plant_Energy.jpg';
import techImg from '../assets/Emission_Compliance_Testing.jpeg';
import analyticsImg from '../assets/Environmental_Analytics.png';
import lakeMountainsImg from '../assets/Lake_Trees_Mountains_Environment.jpeg';

// Approach icons
import approachIcon1 from '../assets/L Primary Icon 8.png';
import approachIcon2 from '../assets/L Primary Icon 15.png';
import approachIcon3 from '../assets/L Primary Icon 14.png';
import approachIcon4 from '../assets/L Primary Icon 20.png';
import approachIcon5 from '../assets/L Primary Icon 13.png';
import approachIcon6 from '../assets/L Primary Icon 17.png';
import resultIcon from '../assets/Isolated L Primary 1.png';

const HowWeWork = () => {
  const [activeServiceTab, setActiveServiceTab] = useState(0);

  const serviceAreas = [
    {
      id: 'waste',
      tabTitle: 'Waste Management',
      title: 'Waste Management & Planning',
      subtitle: 'Optimize waste infrastructure for communities',
      image: wasteImg,
      items: [
        { title: 'Energy Audit & Planning', description: 'Evaluate current energy use and identify opportunities for renewable integration.' },
        { title: 'Strategy Development', description: 'Build roadmaps for clean energy adoption, including technology selection, financing, and partnerships.' },
        { title: 'Implementation Support', description: 'Align local stakeholders, secure permits, and manage deployment.' },
      ],
      cta: { text: 'Learn How We Can Support Your Project', href: '/contact' },
    },
    {
      id: 'energy',
      tabTitle: 'Energy Transition Strategy',
      title: 'Energy Transition Strategy',
      subtitle: 'Actionable data decision making',
      image: energyImg,
      items: [
        { title: 'Energy Audit & Planning', description: 'Evaluate current energy use and identify opportunities for renewable integration.' },
        { title: 'Strategy Development', description: 'Build roadmaps for clean energy adoption, including technology selection, financing, and partnerships.' },
        { title: 'Implementation Support', description: 'Align local stakeholders, secure permits, and manage deployment.' },
      ],
      cta: { text: 'Learn How We Can Support Your Community', href: '/contact' },
    },
    {
      id: 'tech',
      tabTitle: 'Technology Evaluation & Adoption',
      title: 'Technology Evaluation & Adoption',
      subtitle: 'Evaluate and adopt the right tech solutions',
      image: techImg,
      items: [
        { title: 'Technology Screening', description: 'Assess emerging technologies for performance, feasibility, and impact.' },
        { title: 'Community Fit Analysis', description: 'Match solutions to specific site needs, local regulations, and community priorities.' },
        { title: 'Deployment Roadmap', description: 'Plan phased integration, piloting, and scaling.' },
      ],
      cta: { text: 'Learn How We Can Support Your Project', href: '/contact' },
    },
    {
      id: 'analytics',
      tabTitle: 'Environmental Analytics & Insights',
      title: 'Environmental Analytics & Insights',
      subtitle: 'Actionable data for decision-making',
      image: analyticsImg,
      items: [
        { title: 'Data Collection', description: 'Gather local environmental, operational and regulatory data.' },
        { title: 'Analysis & Reporting', description: 'Convert complex datasets into actionable insights and predictive models.' },
        { title: 'Policy & Investment Guidance', description: 'Inform planning, compliance, and sustainability investment decisions.' },
      ],
      cta: { text: 'Learn How We Can Support Your Community', href: '/contact' },
    },
  ];

  

  return (
    <div className={styles.howWeWork}>
      {/* Hero Section */}
      <Hero
        label="How We Work"
        title="A Collaborative Process Built Around You"
        description="Our process is designed to simplify complexity, reduce risk, and ensure your project moves from idea to real-world impact with clarity at every step."
        primaryCTA={{ text: 'Speak With Our Team', href: '/contact' }}
        secondaryCTA={{ text: 'See Our Impact', href: '/our-impact' }}
        backgroundImage={collaborationImg}
        minHeight="400px"
        align="left"
        variant="gradientBox"
      />

      {/* Outcomes Section */}
      <section className={styles.outcomesSection}>
        <div className={styles.container}>
          <h2 className={styles.outcomesTitle}>
            Expert Guidance That Delivers the <span className={styles.outcomesHighlight}>Outcomes You Care About</span>
          </h2>
          <div className={styles.outcomesGrid}>
            <div className={styles.outcomeCard}>
              <div className={styles.outcomeIcon}>
                <img src={iconCredibility} alt="Credibility" />
              </div>
              <p className={styles.outcomeText}>Stronger credibility with regulators, investors & indigenous Partners</p>
            </div>
            <div className={styles.outcomeCard}>
              <div className={styles.outcomeIcon}>
                <img src={iconPermitting} alt="Permitting" />
              </div>
              <p className={styles.outcomeText}>Faster permitting & approval Timelines</p>
            </div>
            <div className={styles.outcomeCard}>
              <div className={styles.outcomeIcon}>
                <img src={iconStrategies} alt="Strategies" />
              </div>
              <p className={styles.outcomeText}>Strategies that are practical, fundable & executable</p>
            </div>
            <div className={styles.outcomeCard}>
              <div className={styles.outcomeIcon}>
                <img src={iconRisk} alt="Risk reduction" />
              </div>
              <p className={styles.outcomeText}>Reduce risk of costly project interruption</p>
            </div>
          </div>
        </div>
      </section>

      {/* Phases Section */}
      <section className={styles.phasesSection}>
        <div className={styles.container}>
          <div className={styles.phasesHeader}>
            <h2 className={styles.phasesTitle}>From Discovery to Implementation</h2>
            <p className={styles.phasesSubtitle}>We Guide You Through Every Phase</p>
          </div>
          <div className={styles.phasesGrid}>
            {/* Phase 1 */}
            <div className={styles.phaseBlock}>
              <div className={styles.phaseHeader}>
                <span className={styles.phaseNumber}>1</span>
                <h3 className={styles.phaseTitle}>Understand Your Needs</h3>
              </div>
              <p className={styles.phaseDescription}>
                Every engagement begins with an initial connection and a discovery conversation. We learn about your goals, challenges, and local conditions to determine how Solora can support you.
              </p>
              <div className={styles.phaseCard}>
                <h4 className={styles.phaseCardTitle}>Discovery Session</h4>
                <ul className={styles.phaseList}>
                  <li>Goals assessment</li>
                  <li>Challenge identification</li>
                  <li>Local context analysis</li>
                </ul>
              </div>
            </div>

            {/* Phase 2 */}
            <div className={styles.phaseBlock}>
              <div className={styles.phaseHeader}>
                <span className={styles.phaseNumber}>2</span>
                <h3 className={styles.phaseTitle}>Analyze & Assess</h3>
              </div>
              <p className={styles.phaseDescription}>
                Our team conducts targeted research—waste data, policy context, technology requirements, market conditions, and community needs —to shape a clear picture of the opportunity.
              </p>
              <div className={styles.phaseCard}>
                <h4 className={styles.phaseCardTitle}>Comprehensive Research</h4>
                <ul className={styles.phaseList}>
                  <li>Waste data analysis</li>
                  <li>Policy landscape review</li>
                  <li>Market conditions study</li>
                </ul>
              </div>
            </div>

            {/* Phase 3 */}
            <div className={styles.phaseBlock}>
              <div className={styles.phaseHeader}>
                <span className={styles.phaseNumber}>3</span>
                <h3 className={styles.phaseTitle}>Build a Tailored Strategy</h3>
              </div>
              <p className={styles.phaseDescription}>
                We develop a customized plan outlining recommendations, technology fit, stakeholder coordination, permitting pathways, and the roadmap needed to move forward with confidence.
              </p>
              <div className={styles.phaseCard}>
                <h4 className={styles.phaseCardTitle}>Strategic Roadmap</h4>
                <ul className={styles.phaseList}>
                  <li>Technology recommendations</li>
                  <li>Stakeholder coordination</li>
                  <li>Permitting pathways</li>
                </ul>
              </div>
            </div>

            {/* Phase 4 */}
            <div className={styles.phaseBlock}>
              <div className={styles.phaseHeader}>
                <span className={styles.phaseNumber}>4</span>
                <h3 className={styles.phaseTitle}>Support Implementation & Impact</h3>
              </div>
              <p className={styles.phaseDescription}>
                Solora coordinates with vendors, partners, and stakeholders while providing ongoing guidance to ensure projects move smoothly from strategy to real-world results.
              </p>
              <div className={styles.phaseCard}>
                <h4 className={styles.phaseCardTitle}>Implementation Support</h4>
                <ul className={styles.phaseList}>
                  <li>Vendor coordination</li>
                  <li>Ongoing guidance</li>
                  <li>Results monitoring</li>
                </ul>
              </div>
            </div>
          </div>
          <p className={styles.phasesFooter}>
            These are the core deliverables and focus areas tailored to each audience. Your full engagement includes additional support and value beyond what's shown here.
          </p>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className={styles.serviceAreasSection}>
        <div className={styles.container}>
          <div className={styles.serviceAreasHeader}>
            <span className={styles.sectionLabel}>Service Areas</span>
            <h2 className={styles.serviceAreasTitle}>
              <span className={styles.serviceAreasHighlight}>Tailored Outcomes</span> for Every Audience
            </h2>
            <p className={styles.serviceAreasDescription}>
              These are the core deliverables and focus areas tailored to each audience. Your full engagement includes additional support and value beyond what's shown here.
            </p>
          </div>

          <div className={styles.serviceAreasContent}>
            <div className={styles.serviceAreasTabs}>
              {serviceAreas.map((area, index) => (
                <button
                  key={area.id}
                  className={`${styles.serviceAreaTab} ${activeServiceTab === index ? styles.serviceAreaTabActive : ''}`}
                  onClick={() => setActiveServiceTab(index)}
                >
                  {area.tabTitle}
                </button>
              ))}
            </div>

            <div className={styles.serviceAreaPanel}>
              <div className={styles.serviceAreaImage}>
                <img src={serviceAreas[activeServiceTab].image} alt={serviceAreas[activeServiceTab].title} />
              </div>
              <div className={styles.serviceAreaInfo}>
                <div className={styles.serviceAreaTitleRow}>
                  <div>
                    <h3 className={styles.serviceAreaTitle}>{serviceAreas[activeServiceTab].title}</h3>
                    <p className={styles.serviceAreaSubtitle}>{serviceAreas[activeServiceTab].subtitle}</p>
                  </div>
                </div>
                <ul className={styles.serviceAreaList}>
                  {serviceAreas[activeServiceTab].items.map((item, idx) => (
                    <li key={idx}>
                      <strong>{item.title}</strong>
                      <span>{item.description}</span>
                    </li>
                  ))}
                </ul>
                <Link to={serviceAreas[activeServiceTab].cta.href} className={styles.serviceAreaCta}>
                  {serviceAreas[activeServiceTab].cta.text}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transform CTA Section */}
      <section className={styles.transformCtaSection}>
        <div className={styles.transformCtaBackground} style={{ backgroundImage: `url(${lakeMountainsImg})` }}>
          <div className={styles.transformCtaOverlay}></div>
          <div className={styles.transformCtaContent}>
            <h2 className={styles.transformCtaTitle}>Ready to Transform Your Strategy?</h2>
            <p className={styles.transformCtaDescription}>
              See how our process can transform your waste and energy strategy with a customized, data-backed assessment.
            </p>
            <Link to="/contact" className={styles.transformCtaButton}>
              Request a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Why Our Approach Works Section */}
      <section className={styles.approachSection}>
        <div className={styles.container}>
          <div className={styles.approachHeader}>
            <h2 className={styles.approachTitle}>Why Our Approach Works</h2>
            <p className={styles.approachSubtitle}>
              Designed for Municipalities, Tech Vendors, Indigenous Communities & Engineering Partners
            </p>
          </div>
          <div className={styles.approachGrid}>
            <div className={styles.approachCard}>
              <div className={styles.approachIcon}>
                <img src={approachIcon1} alt="" />
              </div>
              <h3 className={styles.approachCardTitle}>Budgets Constraints</h3>
              <p className={styles.approachCardDescription}>
                Every recommendation backed by data and proven results to maximize your ROI
              </p>
            </div>
            <div className={styles.approachCard}>
              <div className={styles.approachIcon}>
                <img src={approachIcon2} alt="" />
              </div>
              <h3 className={styles.approachCardTitle}>Diverse Stakeholders</h3>
              <p className={styles.approachCardDescription}>
                Clear communication and comprehensive analysis that builds stakeholder trust
              </p>
            </div>
            <div className={styles.approachCard}>
              <div className={styles.approachIcon}>
                <img src={approachIcon3} alt="" />
              </div>
              <h3 className={styles.approachCardTitle}>Landfill Capacity Shrinking</h3>
              <p className={styles.approachCardDescription}>
                We recommend what works Unbiased expertise to find the best solutions for your specific needs
              </p>
            </div>
            <div className={styles.approachCard}>
              <div className={styles.approachIcon}>
                <img src={approachIcon4} alt="" />
              </div>
              <h3 className={styles.approachCardTitle}>Carbon Expectations</h3>
              <p className={styles.approachCardDescription}>
                Every recommendation backed by data and proven results to maximize your ROI
              </p>
            </div>
            <div className={styles.approachCard}>
              <div className={styles.approachIcon}>
                <img src={approachIcon5} alt="" />
              </div>
              <h3 className={styles.approachCardTitle}>Evolving Technology</h3>
              <p className={styles.approachCardDescription}>
                Every recommendation backed by data and proven results to maximize your ROI
              </p>
            </div>
            <div className={styles.approachCard}>
              <div className={styles.approachIcon}>
                <img src={approachIcon6} alt="" />
              </div>
              <h3 className={styles.approachCardTitle}>Regulatory Shifts</h3>
              <p className={styles.approachCardDescription}>
                Stay ahead of regulations with proactive compliance requirements.
              </p>
            </div>
          </div>
          <div className={styles.resultCard}>
            <div className={styles.resultIcon}>
              <img src={resultIcon} alt="" />
            </div>
            <h3 className={styles.resultTitle}>The Result</h3>
            <p className={styles.resultDescription}>
              We reduce complexity, bring strategic clarity, and accelerate decision-making
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowWeWork;
