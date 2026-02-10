import { Link } from 'react-router-dom';
import styles from './ServicePage.module.css';
import heroBackground from '../../assets/waste_manage.jpg';
import wasteToEnergyImage from '../../assets/waste-to-energy.jpg';
import sludgeImage from '../../assets/sludge.jpg';
import landfillImage from '../../assets/landfille.jpg';
import municWasteImage from '../../assets/munic-waste.png';
import indigImage from '../../assets/indig.png';
import policyImage from '../../assets/policy.png';
import investorsImage from '../../assets/investors.png';
import ubcLogo from '../../assets/ubc.png';
import grasslandLogo from '../../assets/grassland.png';
import trashBinImage from '../../assets/trash_bin.jpg';

const WasteManagement = () => {
  return (
    <div className={styles.servicePage}>
      {/* Hero Section with Background Image */}
      <section 
        className={styles.wasteHero}
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className={styles.wasteHeroOverlay}></div>
        <div className={styles.wasteHeroContainer}>
          <div className={styles.wasteHeroContent}>
            <span className={styles.wasteHeroLabel}>WASTE MANAGEMENT & PLANNING</span>
            <h1 className={styles.wasteHeroTitle}>
              Optimize Your Waste Processing for Efficiency, Compliance & Sustainability
            </h1>
            <p className={styles.wasteHeroDescription}>
              Our experts help organizations reduce costs, streamline processing, and meet environmental standards through data-driven
            </p>
            <div className={styles.wasteHeroButtons}>
              <Link to="/contact" className={styles.wasteHeroPrimaryBtn}>
                Speak With Our Team
              </Link>
              <Link to="/how-we-work" className={styles.wasteHeroSecondaryBtn}>
                Explore How We Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Reduction Section */}
      <section className={styles.costReductionSection}>
        <div className={styles.container}>
          <div className={styles.costReductionHeader}>
            <h2 className={styles.costReductionTitle}>
              From Cost Reduction to Compliance
            </h2>
            <p className={styles.costReductionSubtitle}>
              We Have the Expertise to Solve Your Toughest Problems
            </p>
          </div>
          <div className={styles.costReductionGrid}>
            <div className={styles.costReductionCard}>
              <div className={styles.costReductionIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
              </div>
              <h3 className={styles.costReductionCardTitle}>Lower Disposal Costs</h3>
              <p className={styles.costReductionCardText}>Lower operational & disposal expenses</p>
            </div>
            <div className={styles.costReductionCard}>
              <div className={styles.costReductionIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h3 className={styles.costReductionCardTitle}>Regulatory Assurance</h3>
              <p className={styles.costReductionCardText}>Avoid fines and stay compliant</p>
            </div>
            <div className={styles.costReductionCard}>
              <div className={styles.costReductionIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                </svg>
              </div>
              <h3 className={styles.costReductionCardTitle}>Efficient Operations</h3>
              <p className={styles.costReductionCardText}>Maximize productivity & Minimize Waste</p>
            </div>
            <div className={styles.costReductionCard}>
              <div className={styles.costReductionIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                  <line x1="12" y1="22.08" x2="12" y2="12"/>
                </svg>
              </div>
              <h3 className={styles.costReductionCardTitle}>Sustainable Practices</h3>
              <p className={styles.costReductionCardText}>Boost ESG & Cut Liabilities</p>
            </div>
            <div className={styles.costReductionCard}>
              <div className={styles.costReductionIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                </svg>
              </div>
              <h3 className={styles.costReductionCardTitle}>Actionable Insights</h3>
              <p className={styles.costReductionCardText}>Optimize decisions with data</p>
            </div>
            <div className={styles.costReductionCard}>
              <div className={styles.costReductionIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3 className={styles.costReductionCardTitle}>Vendor Management</h3>
              <p className={styles.costReductionCardText}>Improve Contracts & Save Resources</p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Advantages Section */}
      <section className={styles.strategicSection}>
        <div className={styles.container}>
          <div className={styles.strategicHeader}>
            <h2 className={styles.strategicTitle}>
              Turning <span className={styles.highlight}>Complex Waste</span> Streams Into <span className={styles.highlightGreen}>Strategic Advantages</span>
            </h2>
            <p className={styles.strategicSubtitle}>
              Waste isn't just something to get rid of—it's a resource, a cost lever, and a compliance priority.<br/>
              We help organizations manage their most challenging waste streams with clarity, efficiency, and measurable results.
            </p>
          </div>

          {/* Waste-to-Energy Project Development */}
          <div className={styles.strategicItem}>
            <div className={styles.strategicContent}>
              <h3 className={styles.strategicItemTitle}>Waste-to-Energy Project Development</h3>
              <p className={styles.strategicItemText}>
                Transform high-volume waste into operational value with modern thermal and biological systems. We simplify the entire process—from feasibility to vendor coordination—so you can reduce disposal costs and enhance sustainability performance.
              </p>
              <div className={styles.strategicChecklist}>
                <div className={styles.strategicChecklistColumn}>
                  <div className={styles.strategicCheckItem}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span>Feasibility Support</span>
                  </div>
                  <div className={styles.strategicCheckItem}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span>Technology Selection</span>
                  </div>
                  <div className={styles.strategicCheckItem}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span>Siting & Permitting</span>
                  </div>
                </div>
                <div className={styles.strategicChecklistColumn}>
                  <div className={styles.strategicCheckItem}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span>Lower disposal fees</span>
                  </div>
                  <div className={styles.strategicCheckItem}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span>New energy recovery opportunities</span>
                  </div>
                  <div className={styles.strategicCheckItem}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span>Stronger sustainability metrics</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.strategicImage}>
              <img src={wasteToEnergyImage} alt="Waste-to-Energy Project" className={styles.image} />
            </div>
          </div>

          {/* Sludge & Biosolids Management */}
          <div className={`${styles.strategicItem} ${styles.strategicItemReverse}`}>
            <div className={styles.strategicContent}>
              <h3 className={styles.strategicItemTitle}>Sludge & Biosolids Management</h3>
              <p className={styles.strategicItemText}>
                Sludge and biosolids are costly and highly regulated. We help you manage them safely, efficiently, and in full compliance with evolving environmental standards.
              </p>
              <div className={styles.strategicChecklist}>
                <div className={styles.strategicChecklistColumn}>
                  <div className={styles.strategicCheckItem}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span>Advanced treatment options</span>
                  </div>
                  <div className={styles.strategicCheckItem}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span>Compliance guidance</span>
                  </div>
                  <div className={styles.strategicCheckItem}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span>Optimization strategies</span>
                  </div>
                </div>
                <div className={styles.strategicChecklistColumn}>
                  <div className={styles.strategicCheckItem}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span>Lower hauling & treatment expenses</span>
                  </div>
                  <div className={styles.strategicCheckItem}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span>Improved regulatory readiness</span>
                  </div>
                  <div className={styles.strategicCheckItem}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span>Reduced operational risk</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.strategicImage}>
              <img src={sludgeImage} alt="Sludge & Biosolids Management" className={styles.image} />
            </div>
          </div>

          {/* Landfill Diversion Strategy */}
          <div className={styles.strategicItem}>
            <div className={styles.strategicContent}>
              <h3 className={styles.strategicItemTitle}>Landfill Diversion Strategy</h3>
              <p className={styles.strategicItemText}>
                We partner with you to transform your waste management system into a resilient, future-proof model that eliminates landfill dependency through cutting-edge, circular alternatives.
              </p>
              <div className={styles.strategicChecklist}>
                <div className={styles.strategicChecklistColumn}>
                  <div className={styles.strategicCheckItem}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span>Reduce Methane Emissions</span>
                  </div>
                  <div className={styles.strategicCheckItem}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span>Reduce Disposal Costs</span>
                  </div>
                  <div className={styles.strategicCheckItem}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span>Secure Long-Term Capacity</span>
                  </div>
                </div>
                <div className={styles.strategicChecklistColumn}>
                  <div className={styles.strategicCheckItem}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span>Protection of land and water resources</span>
                  </div>
                  <div className={styles.strategicCheckItem}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span>Higher resource recovery</span>
                  </div>
                  <div className={styles.strategicCheckItem}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span>Healthier communities</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.strategicImage}>
              <img src={landfillImage} alt="Landfill Diversion Strategy" className={styles.image} />
            </div>
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section className={styles.clientsSection}>
        <div className={styles.container}>
          <div className={styles.clientsGrid}>
            <div className={styles.clientsHeader}>
              <h2 className={styles.clientsTitle}>Our Clients Are Part of the Solution</h2>
              <p className={styles.clientsText}>
                We value the opportunity to work alongside municipalities, Indigenous communities, technology partners, and investors who share our commitment to a cleaner, more resilient future. Together, we help Canada build sustainable waste and energy systems grounded in data, stewardship, and long-term impact.
              </p>
            </div>
            <div className={styles.clientsCards}>
              <div className={styles.clientCard}>
                <div className={styles.clientCardImage}>
                  <img src={municWasteImage} alt="Municipal Waste & Infrastructure" className={styles.image} />
                </div>
                <h3 className={styles.clientCardTitle}>Municipal Waste & Infrastructure Leaders</h3>
                <p className={styles.clientCardText}>Need expert guidance to plan upgrades and modernize waste systems.</p>
              </div>
              <div className={styles.clientCard}>
                <div className={styles.clientCardImage}>
                  <img src={indigImage} alt="Indigenous & Local Community" className={styles.image} />
                </div>
                <h3 className={styles.clientCardTitle}>Indigenous & Local Community Leaders</h3>
                <p className={styles.clientCardText}>Need solutions that are culturally aligned, scalable, and environmentally sound.</p>
              </div>
              <div className={styles.clientCard}>
                <div className={styles.clientCardImage}>
                  <img src={policyImage} alt="Policy & Environmental Analysts" className={styles.image} />
                </div>
                <h3 className={styles.clientCardTitle}>Policy & Environmental Analysts</h3>
                <p className={styles.clientCardText}>Require validated data to inform regulations and program planning.</p>
              </div>
              <div className={styles.clientCard}>
                <div className={styles.clientCardImage}>
                  <img src={investorsImage} alt="Investors & Engineering Partners" className={styles.image} />
                </div>
                <h3 className={styles.clientCardTitle}>Investors & Engineering Partners</h3>
                <p className={styles.clientCardText}>Need feasibility insight and clear risk profiles before funding or deployment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Process Section */}
      <section className={styles.transformationSection}>
        <div className={styles.container}>
          <div className={styles.transformationGrid}>
            <div className={styles.transformationContent}>
              <h2 className={styles.transformationTitle}>
                <span className={styles.transformationOrange}>We Simplify</span><br />
                Waste Management<br />
                Transformation
              </h2>
              <Link to="/how-we-work" className={styles.transformationBtn}>
                See Our Full Process
              </Link>
            </div>
            <div className={styles.transformationSteps}>
              <div className={styles.transformationStep}>
                <span className={styles.stepNumber}>01</span>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>Evaluate Needs & Opportunities</h3>
                  <p className={styles.stepText}>We assess waste streams, financial exposure, carbon impact, and operational realities.</p>
                </div>
              </div>
              <div className={styles.transformationStep}>
                <span className={styles.stepNumber}>02</span>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>Waste Audit</h3>
                  <p className={styles.stepText}>Comprehensive on-site or remote assessment of your waste streams and processes.</p>
                </div>
              </div>
              <div className={styles.transformationStep}>
                <span className={styles.stepNumber}>03</span>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>Support Deployment & Integration</h3>
                  <p className={styles.stepText}>Receive custom solutions and implementation plan tailored to your operations.</p>
                </div>
              </div>
              <div className={styles.transformationStep}>
                <span className={styles.stepNumber}>04</span>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>Explore Long-term Implementation</h3>
                  <p className={styles.stepText}>Ongoing guidance and continuous optimization of your waste management systems available as needed.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Guidance Section */}
      <section className={styles.expertSection}>
        <div className={styles.container}>
          <div className={styles.expertHeader}>
            <h2 className={styles.expertTitle}>Expert Guidance Backed by</h2>
            <p className={styles.expertSubtitle}>Science, Technology, & Real World Experience</p>
          </div>
          <div className={styles.expertGrid}>
            <div className={styles.expertCard}>
              <span className={styles.expertCardNumber}>01</span>
              <h3 className={styles.expertCardTitle}>20+ Years Industry Combined Expertise</h3>
              <p className={styles.expertCardText}>Decades of cross-sector waste and clean-tech experience</p>
            </div>
            <div className={styles.expertCard}>
              <span className={styles.expertCardNumber}>02</span>
              <h3 className={styles.expertCardTitle}>Industry, Government & Tech Network</h3>
              <p className={styles.expertCardText}>Connections that accelerate progress & open opportunities</p>
            </div>
            <div className={styles.expertCard}>
              <span className={styles.expertCardNumber}>03</span>
              <h3 className={styles.expertCardTitle}>Tailored End-to-End Solutions</h3>
              <p className={styles.expertCardText}>Customized strategies that address your unique operational needs & conditions</p>
            </div>
            <div className={styles.expertCard}>
              <span className={styles.expertCardNumber}>04</span>
              <h3 className={styles.expertCardTitle}>Data-Driven, Technology-Agnostic Insights</h3>
              <p className={styles.expertCardText}>Objective, evidence based assessments focused on what works - not vendor influence</p>
            </div>
            <div className={styles.expertCard}>
              <span className={styles.expertCardNumber}>05</span>
              <h3 className={styles.expertCardTitle}>Commitment to Sustainability & Community Impact</h3>
              <p className={styles.expertCardText}>Objective, evidence based assessments focused on what works - not vendor influence</p>
            </div>
            <div className={styles.expertCard}>
              <span className={styles.expertCardNumber}>06</span>
              <h3 className={styles.expertCardTitle}>Multidisciplinary Team</h3>
              <p className={styles.expertCardText}>Experience across municipalities, regional districts engineering, technology, EPC Contractors & clean tech markets.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className={styles.partnersSection}>
        <div className={styles.container}>
          <div className={styles.partnersGrid}>
            <div className={styles.partnersContent}>
              <h2 className={styles.partnersTitle}>Solora's Project Partners</h2>
              <p className={styles.partnersText}>
                Solora works closely with partners such as Grassland Organics, DEBNA Co., UBC Researchers, and municipal, regional, and Indigenous governments to advance sustainable waste and energy innovations. This partner network is rapidly expanding as we engage with more technology providers across Asia, Europe, and North America.
              </p>
            </div>
            <div className={styles.partnersLogos}>
              <div className={styles.partnerLogo}>
                <img src={ubcLogo} alt="UBC" className={styles.ubcLogoImg} />
              </div>
              <div className={styles.partnerLogo}>
                <img src={grasslandLogo} alt="Grassland Organics" className={styles.partnerLogoImg} />
              </div>
              <div className={styles.partnerLogo}>
                <span className={styles.debnaText}>DEBNA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className={styles.wasteCTASection}
        style={{ backgroundImage: `url(${trashBinImage})` }}
      >
        <div className={styles.wasteCTAOverlay}></div>
        <div className={styles.wasteCTAContainer}>
          <h2 className={styles.wasteCTATitle}>Ready To Transform<br />Your Waste Management?</h2>
          <Link to="/contact" className={styles.wasteCTABtn}>
            Book a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default WasteManagement;
