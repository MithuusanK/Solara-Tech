import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './OurImpact.module.css';

const OurImpact = () => {


  const wasteStats = [
    {
      value: '3.6 million tonnes',
      description: 'Metro Vancouver produces ~3.6 million tonnes per year of municipal solid waste (MSW).',
    },
    {
      value: '~35 years left',
      description: "British Columbia's remaining landfill capacity is approximately 35 years",
    },
    {
      value: 'Friction Factor',
      description: 'Expansion faces high cost, regulatory barriers, and community resistance',
    },
    {
      value: '3.7 million',
      description: 'British Columbia generates ~3.7 million tonnes of MSW per year, with per-capita rates among the highest in Canada.',
    },
    {
      value: '2030',
      description: 'Vancouver landfill projected to reach capacity within the next decade.',
    },
  ];

  const sdgData = [
    {
      id: 'sdg7',
      number: 7,
      tab: 'Affordable & Clean Energy',
      title: 'SDG 7 | Affordable & Clean Energy',
      icon: new URL('../assets/Sustainable_Development_Goal_07CleanEnergy.svg.png', import.meta.url).href,
      description: 'Solora advances clean, low-carbon energy by supporting the deployment of modern waste-to-energy, hydrothermal liquefaction, anaerobic digestion, and other renewable technologies. We guide municipalities and investors through feasibility studies, permitting pathways, and PPA options that enable responsible project development. By helping communities replace landfill-dependent systems with energy-producing alternatives, Solora contributes directly to more affordable and sustainable energy solutions across Canada.',
    },
    {
      id: 'sdg11',
      number: 11,
      tab: 'Sustainable Cities',
      icon: new URL('../assets/E_SDG_Icons-11.jpg', import.meta.url).href,
      title: 'SDG 11 | Sustainable Cities & Communities',
      description: 'Solora strengthens the resilience and sustainability of Canadian communities through data-driven waste-system planning and environmental intelligence. Our work reduces landfill pressure, supports long-term infrastructure decisions, and improves community safety by addressing emissions, leachate risks, and costly waste exports. Through partnerships with regional governments and Indigenous communities, we help build waste and energy solutions that are transparent, community-focused, and sustainable for future generations.',
    },
    {
      id: 'sdg12',
      number: 12,
      tab: 'Responsible Consumption & Production',
      icon: new URL('../assets/E_SDG goals_icons-individual-rgb-12.png', import.meta.url).href,
      title: 'SDG 12 | Responsible Consumption & Production',
      description: 'Solora supports the shift toward circular, resource-efficient systems by identifying opportunities for waste reduction, material recovery, and sustainable technology adoption. Our environmental analytics help communities understand their waste streams and choose solutions that reduce landfill use and promote responsible resource management. By guiding clients through regulatory compliance and safe market entry, we ensure that environmental technologies are deployed responsibly and sustainably.',
    },
    {
      id: 'sdg13',
      number: 13,
      tab: 'Climate Action',
      icon: new URL('../assets/Sustainable_Development_Goal_13Climate.svg.png', import.meta.url).href,
      title: 'SDG 13 | Climate Action',
      description: 'Solora plays a key role in reducing greenhouse gas emissions by providing emissions baselining, GHG modeling, and scenario analysis that target methane reduction from landfills. We help municipalities, investors, and technology providers align projects with provincial climate policies and regulatory expectations. By supporting the transition from landfill-dependent systems to cleaner waste-to-energy pathways, Solora directly contributes to Canada\'s broader decarbonization goals.',
    },
    {
      id: 'sdg17',
      number: 17,
      tab: 'Partnerships for Goals',
      icon: new URL('../assets/E_SDG+goals_icons-individual-cmyk-17.jpg.webp', import.meta.url).href,
      title: 'SDG 17 | Partnerships for the Goals',
      description: 'Solora fosters collaboration among municipalities, Indigenous governments, investors, engineering firms, and technology providers to drive shared progress on environmental and clean-energy goals. Our work brings diverse partners together around aligned interests in sustainability, regulatory readiness, and community benefit. Through these cross-sector partnerships, we help build equitable, long-term pathways toward a cleaner and more resilient future.',
    },
  ];

  const [activeSDG, setActiveSDG] = useState(0);

  return (
    <div className={styles.ourImpact}>
      {/* Hero Section with Video Background */}
      <section className={styles.heroSection}>
        <div className={styles.accentBar}></div>
        <video autoPlay muted loop playsInline className={styles.heroVideo}>
          <source src={new URL('../assets/impactpagemainvideo.mp4', import.meta.url).href} type="video/mp4" />
        </video>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <div className={styles.heroBox}>
            <span className={styles.heroLabel}>OUR IMPACT</span>
            <h1 className={styles.heroTitle}>Driving Sustainable Change Across Waste, Energy, and Environmental Innovation</h1>
            <div className={styles.heroButtons}>
              <Link to="/contact" className={styles.btnPrimary}>Speak With Our Team</Link>
              <Link to="/what-we-do" className={styles.btnSecondary}>Explore What We Do</Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Waste Landscape Section */}
      <section className={styles.wasteLandscapeSection}>
        <div className={styles.wasteLandscapeAccent}></div>
        <div className={styles.container}>
          <h2 className={styles.wasteLandscapeTitle}>The Waste Landscape</h2>
          <div className={styles.wasteLandscapeGrid}>
            <div className={styles.wasteLandscapeContent}>
              <h3 className={styles.wasteLandscapeSubtitle}>Canada's Waste &amp; Emissions Reality</h3>
              <p className={styles.wasteLandscapeText}>
                Canada produces ~35 million tonnes of municipal solid waste annually, and volumes continue
                to rise 1–2% per year. Provinces across the country face tightening landfill capacity, increasing
                disposal costs, and pressure to reduce methane emissions—responsible for roughly 5% of
                Canada's total GHG footprint.
              </p>
              <p className={styles.wasteLandscapeText}>
                Canada is facing mounting waste generation, shrinking landfill capacity, and increasing
                pressure to decarbonize. Solora Technologies helps governments, investors, and technology
                providers accelerate the transition to a circular, low-carbon future through evidence-based
                analysis and strategic advisory.
              </p>
            </div>
            <div className={styles.wasteLandscapeImage}>
              <img
                src={new URL('../assets/landfille.jpg', import.meta.url).href}
                alt="Landfill waste site"
              />
            </div>
          </div>
        </div>
      </section>

      {/* BC Waste Challenge Section */}
      <section className={styles.bcWasteSection}>
        <div className={styles.bcWasteAccent}></div>
        <div className={styles.container}>
          <h2 className={styles.bcWasteTitle}>British Columbia's Waste Challenge</h2>
          <div className={styles.bcWasteGrid}>
            <div className={styles.bcWasteImageCard}>
              <img
                src={new URL('../assets/landfille.jpg', import.meta.url).href}
                alt="Landfill waste site"
              />
            </div>
            {wasteStats.map((stat, index) => (
              <div key={index} className={styles.bcWasteCard}>
                <h3 className={styles.bcWasteValue}>{stat.value}</h3>
                <p className={styles.bcWasteDescription}>{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost of Inaction Section */}
      <section className={styles.costSection}>
        <div className={styles.bcWasteAccent}></div>
        <div className={styles.container}>
          <div className={styles.costInner}>
            <h2 className={styles.costTitle}>The Cost of Inaction</h2>
            <p className={styles.costSubtitle}>How different stakeholders benefit from our services</p>
            <div className={styles.costGrid}>
              <div className={styles.costCard}>
                <h3 className={styles.costCardTitle}>High and Rising Municipal Disposal Costs</h3>
                <p className={styles.costCardText}>
                  Municipalities now pay <strong>$110–$150 per tonne</strong> for disposal, with
                  costs continuing to climb as landfills reach critical limits.
                </p>
              </div>
              <div className={styles.costCard}>
                <h3 className={styles.costCardTitle}>Severe Cost Burdens in Remote &amp; Coastal Regions</h3>
                <p className={styles.costCardText}>
                  Remote communities face disposal costs of <strong>$180–$350 per tonne</strong> due
                  to long-haul transportation and limited landfill options.
                </p>
              </div>
              <div className={styles.costCard}>
                <h3 className={styles.costCardTitle}>Unstable Cross-Border Waste Exporting</h3>
                <p className={styles.costCardText}>
                  Shipping waste to the United States is becoming increasingly
                  expensive and unreliable, leaving communities vulnerable to
                  sudden policy or border changes.
                </p>
              </div>
              <div className={styles.costCard}>
                <h3 className={styles.costCardTitle}>Insufficient Waste-to-Energy Capacity</h3>
                <p className={styles.costCardText}>
                  BC's single WTE facility no longer meets provincial demand,
                  creating an urgent need for scalable alternatives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Opportunities Banner */}
      <section className={styles.opportunitiesBanner}>
        <div className={styles.bcWasteAccent}></div>
        <img
          src={new URL('../assets/resilient-water-infrastructure.jpg', import.meta.url).href}
          alt="Water treatment facility"
          className={styles.opportunitiesImage}
        />
        <div className={styles.opportunitiesOverlay}></div>
        <div className={styles.opportunitiesContent}>
          <h2 className={styles.opportunitiesText}>
            Turning Canada’s waste challenges into clean-energy opportunities.
          </h2>
        </div>
      </section>

      {/* Our Work Section */}
      <section className={styles.ourWorkSection}>
        <div className={styles.container}>
          <div className={styles.ourWorkHeader}>
            <div className={styles.ourWorkImage}>
              <img
                src={new URL('../assets/pexels-harrison-reilly-78972762-27300881 (1).jpg', import.meta.url).href}
                alt="Sustainable landscape"
              />
            </div>
            <div className={styles.ourWorkIntro}>
              <h2 className={styles.ourWorkTitle}>Our Work</h2>
              <h3 className={styles.ourWorkSubtitle}>What Solora Technologies is doing</h3>
              <p className={styles.ourWorkDescription}>
                Our work strengthens municipal readiness, builds investor confidence, and aligns environmental goals with practical, real-world solutions.
              </p>
            </div>
          </div>
          <div className={styles.ourWorkGrid}>
            <div className={styles.ourWorkCard}>
              <h4 className={styles.ourWorkCardTitle}>Advancing Environmental Intelligence</h4>
              <p className={styles.ourWorkCardText}>
                Solora provides the data analysis and modeling that municipalities and investors need to adopt cleaner, more efficient systems. Our work includes waste-flow assessments, ROI projections, capacity modeling, and environmental impact evaluations that guide informed decision-making.
              </p>
            </div>
            <div className={styles.ourWorkCard}>
              <h4 className={styles.ourWorkCardTitle}>Integrating Waste-to-Resource Technologies</h4>
              <p className={styles.ourWorkCardText}>
                We help deploy technologies that convert organic waste into renewable fuels and materials—reducing emissions, improving waste-stream performance, and supporting circular-economy goals across Canadian communities.
              </p>
            </div>
            <div className={styles.ourWorkCard}>
              <h4 className={styles.ourWorkCardTitle}>Supporting Market Entry for Global Innovators</h4>
              <p className={styles.ourWorkCardText}>
                For international technology providers, we ensure solutions are validated, compliant, and positioned for success in the Canadian market. This includes regulatory support, feasibility assessments, and introductions to municipal and industrial partners.
              </p>
            </div>
            <div className={styles.ourWorkCard}>
              <h4 className={styles.ourWorkCardTitle}>Building Sustainable Cross-Sector Partnerships</h4>
              <p className={styles.ourWorkCardText}>
                We work with municipalities, Indigenous communities, investors, and technology firms to develop solutions that align environmental objectives with operational needs. These relationships help accelerate the transition away from landfill-reliant systems.
              </p>
            </div>
            <div className={styles.ourWorkCard}>
              <h4 className={styles.ourWorkCardTitle}>Strengthening Municipal Readiness</h4>
              <p className={styles.ourWorkCardText}>
                Solora equips local governments with the insights, tools, and frameworks needed to evaluate new clean-energy technologies and prepare for long-term environmental transitions.
              </p>
            </div>
            <div className={styles.ourWorkCard}>
              <h4 className={styles.ourWorkCardTitle}>Enhancing Investor Confidence</h4>
              <p className={styles.ourWorkCardText}>
                By bridging policy, technology, and operational realities, we give investors the clarity and risk-reduction they need to pursue high-impact environmental opportunities in Canada’s evolving clean-energy market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SDG Section */}
      <section className={styles.sdgSection}>
        <div className={styles.bcWasteAccent}></div>
        <div className={styles.container}>
          <div className={styles.sdgTop}>
            <div className={styles.sdgIntro}>
              <h2 className={styles.sdgMainTitle}>Our Alignment with UN Sustainable Development Goals (SDGs)</h2>
              <p className={styles.sdgIntroText}>
                Solora's sustainability goals are to advance low-carbon waste and energy systems that deliver real environmental, social, and economic benefits. Through our partnerships and projects, we contribute to multiple UN Sustainable Development Goals that support healthier communities and a circular future.
              </p>
            </div>
            <div className={styles.sdgLogo}>
              <img
                src={new URL('../assets/original.jpg', import.meta.url).href}
                alt="UN Sustainable Development Goals"
              />
            </div>
          </div>
          <div className={styles.sdgTabs}>
            {sdgData.map((sdg, index) => (
              <button
                key={sdg.id}
                className={`${styles.sdgTab} ${activeSDG === index ? styles.sdgTabActive : ''}`}
                onClick={() => setActiveSDG(index)}
              >
                {sdg.tab}
              </button>
            ))}
          </div>
          <div className={styles.sdgDetail}>
            <div className={styles.sdgIconWrapper}>
              <img
                src={sdgData[activeSDG].icon}
                alt={sdgData[activeSDG].title}
                className={styles.sdgIcon}
              />
            </div>
            <div className={styles.sdgDetailContent}>
              <h3 className={styles.sdgDetailTitle}>{sdgData[activeSDG].title}</h3>
              <p className={styles.sdgDetailText}>{sdgData[activeSDG].description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships Banner */}
      <section className={styles.partnershipsBanner}>
        <div className={styles.bcWasteAccent}></div>
        <img
          src={new URL('../assets/pexels-olly-3781895.jpg', import.meta.url).href}
          alt="Business partnership handshake"
          className={styles.partnershipsImage}
        />
        <div className={styles.partnershipsOverlay}></div>
        <div className={styles.partnershipsContent}>
          <h2 className={styles.partnershipsText}>
            Our partnerships turn challenges into lasting impact
          </h2>
        </div>
      </section>

      {/* Our Clients Section */}
      <section className={styles.clientsSection}>
        <div className={styles.bcWasteAccent}></div>
        <div className={styles.container}>
          <div className={styles.clientsHeader}>
            <h2 className={styles.clientsTitle}>Our Clients Are Part of the Solution</h2>
            <p className={styles.clientsDescription}>
              We value the opportunity to work alongside municipalities, Indigenous communities, technology partners, and investors who share our commitment to a cleaner, more resilient future. Together, we help Canada build sustainable waste and energy systems grounded in data, stewardship, and long-term impact.
            </p>
          </div>
          <div className={styles.clientsGrid}>
            <div className={styles.clientCard}>
              <div className={styles.clientImageWrapper}>
                <img
                  src={new URL('../assets/picture.png', import.meta.url).href}
                  alt="Municipal Waste & Infrastructure Leaders"
                />
              </div>
              <p className={styles.clientLabel}>Municipal Waste &amp; Infrastructure Leaders</p>
            </div>
            <div className={styles.clientCard}>
              <div className={styles.clientImageWrapper}>
                <img
                  src={new URL('../assets/state_ready.jpg', import.meta.url).href}
                  alt="Indigenous & Local Community Leaders"
                />
              </div>
              <p className={styles.clientLabel}>Indigenous &amp; Local Community Leaders</p>
            </div>
            <div className={styles.clientCard}>
              <div className={styles.clientImageWrapper}>
                <img
                  src={new URL('../assets/52751-waste-management-audit-xl.webp', import.meta.url).href}
                  alt="Policy & Environmental Analysts"
                />
              </div>
              <p className={styles.clientLabel}>Policy &amp; Environmental Analysts</p>
            </div>
            <div className={styles.clientCard}>
              <div className={styles.clientImageWrapper}>
                <img
                  src={new URL('../assets/pexels-olia-danilevich-5313361.jpg', import.meta.url).href}
                  alt="Investors & Engineering Partners"
                />
              </div>
              <p className={styles.clientLabel}>Investors &amp; Engineering Partners</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaBanner}>
        <img
          src={new URL('../assets/pexels-esmerald-34448820.jpg', import.meta.url).href}
          alt="Canadian landscape with wind turbine"
          className={styles.ctaBannerImage}
        />
        <div className={styles.ctaBannerOverlay}></div>
        <div className={styles.ctaBannerContent}>
          <h2 className={styles.ctaBannerTitle}>
            Let’s power Canada’s clean-energy evolution together.
          </h2>
          <p className={styles.ctaBannerSubtitle}>Contact us to discuss solutions.</p>
          <Link to="/contact" className={styles.ctaBannerButton}>
            Connect with Our Team
          </Link>
        </div>
      </section>
    </div>
  );
};

export default OurImpact;
