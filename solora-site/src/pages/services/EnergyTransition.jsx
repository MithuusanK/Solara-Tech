import { Link } from 'react-router-dom';
import styles from './EnergyTransition.module.css';

// Import images
import heroImage from '../../assets/hero-section-ets.jpg';
import wteDiagram from '../../assets/WTE Diagram 3.png';
import renewableImg from '../../assets/renewable-energy.png';
import ppaImg from '../../assets/energy-market.png';
import districtImg from '../../assets/lowcarbon.png';
import zeroWasteImg from '../../assets/section6.jpg';
import comingSoonImg from '../../assets/sludge.jpg';
import ctaBgImg from '../../assets/section10.jpg';
import ubcLogo from '../../assets/UBC.png';
import grasslandLogo from '../../assets/Grassland.png';

const EnergyTransition = () => {
  return (
    <div className={styles.page}>

      {/* ===== HERO SECTION ===== */}
      <section
        className={styles.hero}
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className={styles.heroOverlay}></div>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <span className={styles.heroLabel}>Energy Transition Strategy</span>
            <h1 className={styles.heroTitle}>
              Turn Waste<br />Into A Strategic Asset
            </h1>
            <p className={styles.heroDescription}>
              Unlock new value, reduce waste costs, and support long-term
              sustainability with clear, data-driven Waste-to-Energy (WTE)
              transition strategy.
            </p>
            <div className={styles.heroButtons}>
              <Link to="/contact" className={styles.btnPrimary}>
                Speak With Our Team
              </Link>
              <Link to="/how-we-work" className={styles.btnSecondary}>
                Explore How We Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ACHIEVE CARBON REDUCTION SECTION ===== */}
      <section className={styles.achieveSection}>
        <div className={styles.container}>
          <h2 className={styles.achieveTitle}>
            Achieve <span className={styles.highlight}>Carbon Reduction</span> &{' '}
            <span className={styles.highlight}>Operation Efficiency</span>
            <br />Through Waste to Energy
          </h2>
          <p className={styles.achieveSubtitle}>
            Unlock renewable power, optimize energy markets, & integrate district energy solutions
            all guided by our expert strategic advisory
          </p>
          <div className={styles.achieveCards}>
            {/* Cost Control */}
            <div className={styles.achieveCard}>
              <div className={styles.achieveCardIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="1" x2="12" y2="23"/>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              </div>
              <h3 className={styles.achieveCardTitle}>Cost Control</h3>
              <p className={styles.achieveCardDesc}>
                Strengthen environmental, social, & governance metrics with transparent carbon
                reduction data & sustainability achievements.
              </p>
            </div>
            {/* EnhanceESG Performance */}
            <div className={styles.achieveCard}>
              <div className={styles.achieveCardIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              </div>
              <h3 className={styles.achieveCardTitle}>EnhanceESG Performance</h3>
              <p className={styles.achieveCardDesc}>
                Strengthen environmental, social, & governance metrics with transparent carbon
                reduction data & sustainability.
              </p>
            </div>
            {/* Reduced Landfill */}
            <div className={styles.achieveCard}>
              <div className={styles.achieveCardIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <h3 className={styles.achieveCardTitle}>Reduced Landfill</h3>
              <p className={styles.achieveCardDesc}>
                Minimize dependence on increasingly restricted landfill capacity and avoid the risks
                of regulatory changes and disposal limitations.
              </p>
            </div>
            {/* Regulatory Compliance */}
            <div className={styles.achieveCard}>
              <div className={styles.achieveCardIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <line x1="3" y1="9" x2="21" y2="9"/>
                  <line x1="9" y1="21" x2="9" y2="9"/>
                </svg>
              </div>
              <h3 className={styles.achieveCardTitle}>Regulatory Compliance</h3>
              <p className={styles.achieveCardDesc}>
                Compliance with emerging environmental regulations, prevent fines and
                opportunities for circular economy leadership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WASTE-TO-ENERGY: HOW IT WORKS ===== */}
      <section className={styles.howItWorksSection}>
        <div className={styles.container}>
          <div className={styles.howItWorksHeader}>
            <h2 className={styles.howItWorksTitle}>
              Waste-to-Energy:<br />
              <span className={styles.highlight}>How It Works</span>
            </h2>
            <p className={styles.howItWorksIntro}>
              The waste-to-energy process transforms everyday waste streams into clean, usable power
              through a series of controlled, sustainable steps. By converting organic materials into heat,
              electricity, or fuel, this approach reduces landfill dependence, cuts greenhouse gas emissions,
              and creates local sources of renewable energy. Solora helps communities and industry partners
              understand, optimize, and adopt this process—ensuring that waste is no longer an environmental
              burden, but a resource for a more resilient future.
            </p>
          </div>

          <div className={styles.howItWorksContent}>
            {/* Left: Timeline Steps */}
            <div className={styles.timelineSteps}>
              {/* Step 01 */}
              <div className={styles.timelineStep}>
                <span className={styles.stepNumber}>01</span>
                <h3 className={styles.stepTitle}>Collection & Pre-Processing</h3>
                <div className={styles.stepTags}>
                  <span className={styles.stepTag}>Waste Identification</span>
                  <span className={styles.stepTag}>Vendor Connection</span>
                  <span className={styles.stepTag}>Energy Transition Planning</span>
                </div>
                <p className={styles.stepDesc}>
                  Solora Technologies works with municipalities and operators to evaluate waste composition,
                  prepare materials for conversion, and identify the right technologies based on local
                  infrastructure and environmental goals.
                </p>
              </div>

              {/* Step 02 */}
              <div className={styles.timelineStep}>
                <span className={styles.stepNumber}>02</span>
                <h3 className={styles.stepTitle}>Conversion Technologies</h3>
                <div className={styles.stepTags}>
                  <span className={styles.stepTag}>Thermal Conversion</span>
                  <span className={styles.stepTag}>Gasification</span>
                  <span className={styles.stepTag}>Bioenergy</span>
                </div>
                <p className={styles.stepDesc}>
                  We assess and recommend advanced technologies that convert prepared waste into renewable
                  energy and valuable byproducts —using data-driven insights to determine feasibility.
                </p>
              </div>

              {/* Step 03 */}
              <div className={styles.timelineStep}>
                <span className={styles.stepNumber}>03</span>
                <h3 className={styles.stepTitle}>Energy & Resource Output</h3>
                <div className={styles.stepTags}>
                  <span className={styles.stepTag}>Clean Energy</span>
                  <span className={styles.stepTag}>Fuel</span>
                  <span className={styles.stepTag}>Circular Economy Byproducts</span>
                </div>
                <p className={styles.stepDesc}>
                  The resulting energy or recovered materials support local power grids, heating systems,
                  and industrial use, helping communities reduce emissions and landfill reliance.
                </p>
              </div>
            </div>

            {/* Right: WTE Diagram */}
            <div className={styles.diagramImage}>
              <img src={wteDiagram} alt="Waste-to-Energy Process Diagram" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW WE SUPPORT YOUR CLEAN ENERGY SHIFT ===== */}
      <section className={styles.supportSection}>
        <div className={styles.container}>
          <div className={styles.supportHeader}>
            <h2 className={styles.supportTitle}>How We Support Your Clean Energy Shift</h2>
            <p className={styles.supportSubtitle}>
              We provide executives, communities, and project leaders with clarity on financial, operational, and
              regulatory considerations:
            </p>
          </div>
          <div className={styles.supportGrid}>
            {/* Card 1 */}
            <div className={styles.supportCard}>
              <div className={styles.supportCardIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="1" x2="12" y2="23"/>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              </div>
              <h3 className={styles.supportCardTitle}>Waste Stream & Energy Analysis</h3>
              <p className={styles.supportCardDesc}>
                Comprehensive waste analysis to identify opportunities for energy recovery
              </p>
            </div>
            {/* Card 2 */}
            <div className={styles.supportCard}>
              <div className={styles.supportCardIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                </svg>
              </div>
              <h3 className={styles.supportCardTitle}>Financial Projections & ROI Analysis</h3>
              <p className={styles.supportCardDesc}>
                Detailed financial modeling for project viability & ROI calculations
              </p>
            </div>
            {/* Card 3 */}
            <div className={styles.supportCard}>
              <div className={styles.supportCardIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9c.26.604.852.997 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                </svg>
              </div>
              <h3 className={styles.supportCardTitle}>Technology & Vendor Assessment</h3>
              <p className={styles.supportCardDesc}>
                Evaluation of available technologies and vendor capabilities
              </p>
            </div>
            {/* Card 4 */}
            <div className={styles.supportCard}>
              <div className={styles.supportCardIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 7V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <line x1="10" y1="9" x2="8" y2="9"/>
                </svg>
              </div>
              <h3 className={styles.supportCardTitle}>Regulatory Compliance Pathways</h3>
              <p className={styles.supportCardDesc}>
                Clear guidance on regulatory requirements and compliance strategies
              </p>
            </div>
            {/* Card 5 */}
            <div className={styles.supportCard}>
              <div className={styles.supportCardIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h3 className={styles.supportCardTitle}>Operational Feasibility & Risk Analysis</h3>
              <p className={styles.supportCardDesc}>
                Assessment of operational viability and potential risk factors
              </p>
            </div>
            {/* Card 6 */}
            <div className={styles.supportCard}>
              <div className={styles.supportCardIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                </svg>
              </div>
              <h3 className={styles.supportCardTitle}>Implementation Roadmap & Change</h3>
              <p className={styles.supportCardDesc}>
                Step-by-step implementation plans with change management strategies
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ZERO WASTE PARTNER BANNER ===== */}
      <section
        className={styles.zeroWasteBanner}
        style={{ backgroundImage: `url(${zeroWasteImg})` }}
      >
        <div className={styles.zeroWasteBannerOverlay}></div>
        <div className={styles.container}>
          <div className={styles.zeroWasteContent}>
            <h2 className={styles.zeroWasteTitle}>
              <em>Zero Waste <span className={styles.highlight}>Partner.</span></em>
              <br />
              UN <span className={styles.highlight}>SDG Aligned.</span>
            </h2>
            <Link to="/our-impact" className={styles.btnOutlineWhite}>
              See Our Impact
            </Link>
          </div>
        </div>
      </section>

      {/* ===== TURN WASTE INTO REVENUE SECTION ===== */}
      <section className={styles.revenueSection}>
        <div className={styles.container}>
          <h2 className={styles.revenueSectionTitle}>
            Turn <span className={styles.highlight}>Waste Into Revenue</span>
            <br />& <span className={styles.highlight}>Low Carbon</span> Advantage
          </h2>
          <p className={styles.revenueSubtitle}>
            Unlock renewable power, optimize energy markets, & integrate district energy solutions
            all guided by our expert strategic advisory
          </p>

          {/* Block 1: Renewable Energy Opportunities */}
          <div className={styles.contentBlock}>
            <div className={styles.contentText}>
              <h3>Renewable Energy Opportunities</h3>
              <p>
                We explore waste-derived energy, heat recovery, distributed energy systems,
                and grid-connected projects.
              </p>
              <div className={styles.checkList}>
                <div className={styles.checkItem}>
                  <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Additional revenue streams from energy production</span>
                </div>
                <div className={styles.checkItem}>
                  <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Reduced energy procurement costs & volatility</span>
                </div>
                <div className={styles.checkItem}>
                  <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Operational efficiency through heat & energy recovery</span>
                </div>
                <div className={styles.checkItem}>
                  <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Alignment with decarbonization goals</span>
                </div>
              </div>
            </div>
            <div className={styles.contentImage}>
              <img src={renewableImg} alt="Renewable Energy Opportunities" />
            </div>
          </div>

          {/* Block 2: PPA & Energy Market Advisory (reversed) */}
          <div className={styles.contentBlockReverse}>
            <div className={styles.contentImage}>
              <img src={ppaImg} alt="PPA & Energy Market Advisory" />
            </div>
            <div className={styles.contentText}>
              <h3>PPA & Energy Market Advisory</h3>
              <p>
                We help organizations assess electricity pricing, energy policies,
                interconnection pathways and revenue scenarios.
              </p>
              <div className={styles.checkList}>
                <div className={styles.checkItem}>
                  <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Predictable energy revenue and ROI modeling</span>
                </div>
                <div className={styles.checkItem}>
                  <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Optimized power purchase agreements (PPAs)</span>
                </div>
                <div className={styles.checkItem}>
                  <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Clear regulatory compliance pathways</span>
                </div>
                <div className={styles.checkItem}>
                  <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Alignment with decarbonization goals</span>
                </div>
              </div>
            </div>
          </div>

          {/* Block 3: District Energy & Low Carbon Infrastructure */}
          <div className={styles.contentBlock}>
            <div className={styles.contentText}>
              <h3>District Energy & Low Carbon Infrastructure</h3>
              <p>
                We evaluate opportunities to integrate waste-to-energy with district heating,
                industrial steam networks & other low-carbon infrastructure solutions.
              </p>
              <div className={styles.checkList}>
                <div className={styles.checkItem}>
                  <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Reduced operational energy costs</span>
                </div>
                <div className={styles.checkItem}>
                  <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Scalable community and industrial energy solutions</span>
                </div>
                <div className={styles.checkItem}>
                  <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Improved ESG and decarbonization outcomes</span>
                </div>
                <div className={styles.checkItem}>
                  <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Future-proof, low carbon infrastructure</span>
                </div>
              </div>
            </div>
            <div className={styles.contentImage}>
              <img src={districtImg} alt="District Energy & Low Carbon Infrastructure" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== COMING SOON SECTION ===== */}
      <section
        className={styles.comingSoonSection}
        style={{ backgroundImage: `url(${comingSoonImg})` }}
      >
        <div className={styles.comingSoonOverlay}></div>
        <div className={styles.container}>
          <div className={styles.comingSoonContent}>
            <span className={styles.comingSoonBadge}>Coming Soon</span>
            <h2 className={styles.comingSoonTitle}>
              Organic Waste Hydrothermal Liquefaction
            </h2>
            <p className={styles.comingSoonDesc}>
              Deploy Solora's proprietary HTL-based process for converting organic residue into renewable fuels.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SIMPLE PROCESS SECTION ===== */}
      <section className={styles.processSection}>
        <div className={styles.container}>
          <div className={styles.processGrid}>
            <div className={styles.processLeft}>
              <h2>
                A <span className={styles.highlight}>Simple Process</span> for
                Innovators & Communities
              </h2>
              <Link to="/how-we-work" className={styles.processBtnDark}>
                See Our Full Process
              </Link>
            </div>
            <div className={styles.processSteps}>
              <div className={styles.processStep}>
                <span className={styles.processStepNumber}>01</span>
                <div className={styles.processStepContent}>
                  <h4>Data Collection & Analysis</h4>
                  <p>We assess waste streams, financial exposure, carbon impact, and operational realities.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <span className={styles.processStepNumber}>02</span>
                <div className={styles.processStepContent}>
                  <h4>Build a Tailored Strategy</h4>
                  <p>We outline the optimal technologies, partners, vendors, and infrastructure path</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <span className={styles.processStepNumber}>03</span>
                <div className={styles.processStepContent}>
                  <h4>Implement & Integrate</h4>
                  <p>We oversee vendor negotiations, regulatory steps, and operational rollout.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <span className={styles.processStepNumber}>04</span>
                <div className={styles.processStepContent}>
                  <h4>Monitor & Optimize</h4>
                  <p>Continuous optimization and performance tracking</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== EXPERT GUIDANCE SECTION ===== */}
      <section className={styles.expertSection}>
        <div className={styles.container}>
          <h2 className={styles.expertTitle}>
            Expert Guidance Backed by{' '}
            <span className={styles.highlight}>science, technology</span> and{' '}
            <span className={styles.highlight}>real world experience</span>
          </h2>
          <div className={styles.expertGrid}>
            <div className={styles.expertItem}>
              <span className={styles.expertItemNumber}>01</span>
              <div className={styles.expertItemContent}>
                <h4>20+ Years Industry Combined Expertise</h4>
                <p>Decades of cross-sector waste and clean-tech experience</p>
              </div>
            </div>
            <div className={styles.expertItem}>
              <span className={styles.expertItemNumber}>02</span>
              <div className={styles.expertItemContent}>
                <h4>Industry, Government & Tech Network</h4>
                <p>Connections that accelerate progress & open opportunities</p>
              </div>
            </div>
            <div className={styles.expertItem}>
              <span className={styles.expertItemNumber}>03</span>
              <div className={styles.expertItemContent}>
                <h4>Tailored End-to-End Solutions</h4>
                <p>Customized strategies that address your unique operational needs & conditions</p>
              </div>
            </div>
            <div className={styles.expertItem}>
              <span className={styles.expertItemNumber}>04</span>
              <div className={styles.expertItemContent}>
                <h4>Data-Driven, Technology-Agnostic Insights</h4>
                <p>Objective, evidence based assessments focused on what works - not vendor influence</p>
              </div>
            </div>
            <div className={styles.expertItem}>
              <span className={styles.expertItemNumber}>05</span>
              <div className={styles.expertItemContent}>
                <h4>Commitment to Sustainability & Community Impact</h4>
                <p>Objective, evidence based assessments focused on what works - not vendor influence</p>
              </div>
            </div>
            <div className={styles.expertItem}>
              <span className={styles.expertItemNumber}>06</span>
              <div className={styles.expertItemContent}>
                <h4>Multidisciplinary Team</h4>
                <p>Experience across municipalities, regional districts engineering, technology, EPC Contractors & clean tech markets</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROJECT PARTNERS SECTION ===== */}
      <section className={styles.partnersSection}>
        <div className={styles.container}>
          <div className={styles.partnersGrid}>
            <div className={styles.partnersContent}>
              <h2 className={styles.partnersTitle}>Solora's Project Partners</h2>
              <p className={styles.partnersText}>
                Solora works closely with partners such as Grassland Organics, UBC Researchers, and municipal, regional, and Indigenous governments to advance sustainable waste and energy innovations. This partner network is rapidly expanding as we engage with more technology providers across Asia, Europe, and North America.
              </p>
            </div>
            <div className={styles.partnersLogos}>
              <div className={styles.partnerLogo}>
                <img src={ubcLogo} alt="UBC" className={styles.ubcLogoImg} />
              </div>
              <div className={styles.partnerLogo}>
                <img src={grasslandLogo} alt="Grassland Organics" className={styles.partnerLogoImg} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section
        className={styles.ctaBanner}
        style={{ backgroundImage: `url(${ctaBgImg})` }}
      >
        <div className={styles.ctaBannerOverlay}></div>
        <div className={styles.container}>
          <div className={styles.ctaBannerContent}>
            <h2 className={styles.ctaBannerTitle}>Explore Your Waste-to-Energy Opportunities</h2>
            <p className={styles.ctaBannerDesc}>
              We'll help you shape a strategy that's practical, sustainable and built around your goals
            </p>
            <Link to="/contact" className={styles.ctaBannerBtn}>
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnergyTransition;
