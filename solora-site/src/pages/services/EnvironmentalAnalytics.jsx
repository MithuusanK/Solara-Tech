import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './EnvironmentalAnalytics.module.css';
import heroImage from '../../assets/EA-Image1.png';
import bannerImg1 from '../../assets/EA-Image4.png';
import bannerImg2 from '../../assets/EA-Image5.png';
import serviceImg from '../../assets/EA-Image3.png';
import ctaBgImg from '../../assets/EA-Image6.png';

// Tab-specific images
import municipalitiesImg from '../../assets/pexels-gerardo-ramirez-898054748-19804230.jpg';
import engineersImg from '../../assets/pexels-pixabay-257736.jpg';
import vendorsImg from '../../assets/pexels-fauxels-3184306.jpg';
import investorsImg from '../../assets/pexels-olia-danilevich-5313361.jpg';
import indigenousImg from '../../assets/istockphoto-1443576933-612x612.jpg';
import policyImg from '../../assets/pexels-a-darmel-7641994.jpg';

const CheckCircle = () => (
  <svg className={styles.checkCircleIcon} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" fill="var(--color-primary)" />
    <path d="M7 13l3 3 7-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

const importanceCards = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: 'Rising Waste, Shrinking Capacity',
    desc: 'Landfill space is nearing critical limits while waste generation continues to grow across Canada.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
        <path d="M3 3v18h18" />
        <path d="M18 17l-5-5-3 3-4-4" />
      </svg>
    ),
    title: 'Escalating Disposal & Infrastructure Costs',
    desc: 'Municipalities and regions face rapidly increasing disposal fees and long-term capital pressures.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Increasing Climate & Emissions Accountability',
    desc: 'Step-by-step implementation plans with change management strategies.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
        <rect x="4" y="4" width="6" height="6" rx="1" />
        <rect x="14" y="4" width="6" height="6" rx="1" />
        <rect x="4" y="14" width="6" height="6" rx="1" />
        <rect x="14" y="14" width="6" height="6" rx="1" />
      </svg>
    ),
    title: 'Complex Technology & Regulatory Decisions',
    desc: 'Comparing WTE, HTL, AD, and emerging technologies—while navigating CEPA, NSNR, and permitting—is increasingly challenging.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
    title: 'High-Stakes Policy, Investment & Community Decisions',
    desc: 'Leaders must justify decisions to councils, investors, Indigenous governments, and the public—often with incomplete or inconsistent data.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    title: 'Limited Access to Reliable, Region-Specific Data',
    desc: 'Critical waste-flow, emissions, and market datasets are often outdated, inconsistent, or unavailable—making confident planning and evaluation difficult.',
  },
];

const tabsData = {
  Municipalities: {
    title: 'Data That Strengthens Public Decisions',
    desc: 'Municipal leaders gain clear, localized environmental intelligence that supports long-term planning, infrastructure development, and community transparency. Our analytics translate complex waste and emissions data into actionable insights that help councils make confident, sustainable decisions.',
    bullets: [
      'Identify the most viable waste-to-resource technologies for your region',
      'Strengthen grant applications and climate-action reports with data-backed evidence',
      'Build community trust with simple, public-ready summaries',
    ],
    image: municipalitiesImg,
  },
  Engineers: {
    title: 'Technical Data for Engineering Excellence',
    desc: 'Access detailed environmental datasets, emissions modeling, and feasibility benchmarks to support engineering design and project scoping for waste and energy infrastructure.',
    bullets: [
      'Material composition and waste-flow data for system design',
      'Emissions baselines and GHG reduction projections',
      'Site-specific feasibility and risk assessments',
    ],
    image: engineersImg,
  },
  Vendors: {
    title: 'Market Intelligence for Technology Providers',
    desc: 'Understand the Canadian regulatory landscape and regional market opportunities with data that positions your technology for successful deployment.',
    bullets: [
      'Regional waste market sizing and opportunity mapping',
      'Regulatory pathway analysis for technology approvals',
      'Competitive landscape and technology benchmark data',
    ],
    image: vendorsImg,
  },
  Investors: {
    title: 'Evidence-Based Investment Intelligence',
    desc: 'Make informed investment decisions with rigorous environmental and financial analytics that quantify risk, project returns, and regulatory compliance.',
    bullets: [
      'Technology readiness and market-fit assessments',
      'Financial modeling with environmental cost-benefit analysis',
      'Regulatory risk profiling across Canadian jurisdictions',
    ],
    image: investorsImg,
  },
  'Indigenous Community Leaders': {
    title: 'Locally Relevant Environmental Insights',
    desc: 'Community-centered analytics that respect Indigenous data sovereignty and support environmental stewardship, resource planning, and clean-energy transitions.',
    bullets: [
      'Culturally appropriate environmental monitoring frameworks',
      'Local waste and emissions data for community planning',
      'Support for clean-energy and resource recovery proposals',
    ],
    image: indigenousImg,
  },
  'Policy Analysts': {
    title: 'Data-Driven Policy Insights',
    desc: 'Access comprehensive environmental analytics to inform policy development, regulatory assessments, and climate action planning.',
    bullets: [
      'Emissions trending and scenario modeling for policy evaluation',
      'Cross-jurisdictional regulatory comparison data',
      'Evidence packages for legislative and regulatory submissions',
    ],
    image: policyImg,
  },
};

const serviceIncludes = [
  {
    number: '1',
    title: 'Environmental Data Reporting',
    items: [
      'Waste-flow and material composition analysis across Canada and BC',
      'Emissions base-lining and GHG modeling',
      'Regional market intelligence on disposal costs and landfill capacity',
    ],
  },
  {
    number: '2',
    title: 'Feasibility Studies & Market Assessments',
    items: [
      'Technology and pathway comparisons (WTE, HTL, AD, etc.)',
      'Financial and environmental cost-benefit modeling',
      'Scenario, sensitivity, and risk analysis',
    ],
  },
  {
    number: '3',
    title: 'Policy & Regulatory Landscape Analysis',
    items: [
      'CEPA, NSNR, and environmental permitting pathways',
      'Provincial regulatory expectations and approval timelines',
      'Trend analysis on climate policy, waste regulations, and emissions standards',
    ],
  },
];

const regulatoryItems = [
  { title: 'Regulatory Clarity for Better Decisions', desc: 'Solora turns complex rules into clear guidance so teams can plan with confidence.' },
  { title: 'Compliance Risks Identified Early', desc: 'We flag regulatory risks early, helping clients avoid delays, penalties, and non-compliant imports.' },
  { title: 'Data-Driven Permitting Insights', desc: "Our analyses show what's feasible under federal, provincial, and regional regulations, reducing uncertainty." },
  { title: 'Support Across CEPA, NSNR & Imports', desc: 'We guide clients through emissions standards, new substances rules, and equipment import compliance.' },
  { title: 'Faster Approvals, Fewer Surprises', desc: 'With integrated regulatory and data insights, projects move through permitting more smoothly.' },
];

const approachCards = [
  { title: 'Budget Constraints', desc: 'Every recommendation backed by data and proven results to maximize your ROI',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /></svg>
  },
  { title: 'Diverse Stakeholders', desc: 'Clear communication and comprehensive analysis that builds stakeholder trust',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>
  },
  { title: 'Landfill Capacity Shrinking', desc: 'We recommend what works. Unbiased expertise to find the best solutions for your specific needs',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
  },
  { title: 'Carbon Expectations', desc: 'Every recommendation backed by data and proven results to maximize your ROI',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M3 3v18h18" /><path d="M18 17l-5-5-3 3-4-4" /></svg>
  },
  { title: 'Evolving Technology', desc: 'Every recommendation backed by data and proven results to maximize your ROI',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
  },
  { title: 'Regulatory Shifts', desc: 'Stay ahead of regulations with proactive compliance requirements.',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><circle cx="12" cy="8" r="6" /><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" /></svg>
  },
];

const deliverySteps = [
  { num: '01', title: 'Data Discovery & Local Context Review', desc: 'Gather waste flow data, regulatory requirements, and site conditions.' },
  { num: '02', title: 'Environmental & Scenario Analysis & Regulatory Planning', desc: 'Run comparative technology and emissions models tailored to your region.' },
  { num: '03', title: 'Insight Development & Validation', desc: 'Translate raw environmental data into meaningful findings for decision-makers.' },
  { num: '04', title: 'Stakeholder-Ready Reporting', desc: 'Prepare insights for councils, investors, regulators, and technology partners.' },
  { num: '05', title: 'Ongoing Analytics Support', desc: 'Access updated datasets, dashboards, and evolving policy intelligence.' },
];

const EnvironmentalAnalytics = () => {
  const [activeTab, setActiveTab] = useState('Municipalities');
  const activeTabData = tabsData[activeTab];

  const tabIcons = {
    Municipalities: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="2" width="16" height="20" rx="2" /><line x1="9" y1="6" x2="15" y2="6" /><line x1="9" y1="10" x2="15" y2="10" /><line x1="9" y1="14" x2="13" y2="14" /></svg>,
    Engineers: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>,
    Vendors: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /></svg>,
    Investors: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
    'Indigenous Community Leaders': <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
    'Policy Analysts': <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>,
  };

  return (
    <div className={styles.page}>

      {/* ===== HERO SECTION ===== */}
      <section className={styles.hero} style={{ backgroundImage: `url(${heroImage})` }}>
        <div className={styles.heroOverlay} />
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <span className={styles.heroLabel}>ENVIRONMENTAL ANALYTICS</span>
            <h1 className={styles.heroTitle}>
              Leverage Data & Market Clarity That Moves Projects Forward
            </h1>
            <p className={styles.heroDesc}>
              Turn complex environmental data into clear, actionable insights that guide policy, technology decisions, and investment strategies across Canada's evolving waste-to-energy landscape.
            </p>
            <div className={styles.heroButtons}>
              <Link to="/contact" className={styles.btnPrimary}>Speak With Our Team</Link>
              <Link to="/how-we-work" className={styles.btnOutline}>Explore How We Work</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== IMPORTANCE SECTION ===== */}
      <section className={styles.importanceSection}>
        <div className={styles.container}>
          <h2 className={styles.importanceTitle}>
            The Importance of<br />
            <span className={styles.highlight}>Environmental Analytics & Regulatory Expertise</span>
          </h2>
          <div className={styles.importanceGrid}>
            {importanceCards.map((card, i) => (
              <div key={i} className={styles.importanceCard}>
                <div className={styles.iconCircle}>{card.icon}</div>
                <h3 className={styles.importanceCardTitle}>{card.title}</h3>
                <p className={styles.importanceCardDesc}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== EVIDENCE BANNER ===== */}
      <section className={styles.evidenceBanner} style={{ backgroundImage: `url(${bannerImg1})` }}>
        <div className={styles.bannerOverlay} />
        <div className={styles.container}>
          <p className={styles.bannerText}>
            Evidence-based insights for better planning, investment, and environmental outcomes.
          </p>
        </div>
      </section>

      {/* ===== TABS SECTION ===== */}
      <section className={styles.tabsSection}>
        <div className={styles.container}>
          <h2 className={styles.tabsSectionTitle}>
            Data. <span className={styles.highlight}>Insight.</span> Evidence.
          </h2>
          <p className={styles.tabsSectionSubtitle}>
            Explore How Solora Technologies' data analytics and insights can support your Work.
          </p>

          <div className={styles.tabButtons}>
            {Object.keys(tabsData).map((tab) => (
              <button
                key={tab}
                className={`${styles.tabBtn} ${activeTab === tab ? styles.tabBtnActive : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                <span className={styles.tabIcon}>{tabIcons[tab]}</span>
                {tab}
              </button>
            ))}
          </div>

          <div className={styles.tabContent}>
            <div className={styles.tabImage}>
              <img src={activeTabData.image} alt={activeTab} />
            </div>
            <div className={styles.tabInfo}>
              <h3 className={styles.tabTitle}>{activeTabData.title}</h3>
              <p className={styles.tabDesc}>{activeTabData.desc}</p>
              <ul className={styles.tabBullets}>
                {activeTabData.bullets.map((b, i) => (
                  <li key={i}><CheckCircle /><span>{b}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHAT THIS SERVICE INCLUDES ===== */}
      <section className={styles.serviceSection}>
        <div className={styles.container}>
          <h2 className={styles.serviceSectionTitle}>What This Service Includes</h2>
          <p className={styles.serviceSectionSubtitle}>
            Evidence-based insights for better planning, investment, and environmental outcomes.
          </p>

          <div className={styles.serviceTopRow}>
            <div className={styles.serviceImage}>
              <img src={serviceImg} alt="Service" />
            </div>
            <div className={styles.serviceCard}>
              <span className={styles.serviceNum}>{serviceIncludes[0].number}</span>
              <h3 className={styles.serviceCardTitle}>{serviceIncludes[0].title}</h3>
              <ul className={styles.serviceList}>
                {serviceIncludes[0].items.map((item, i) => (
                  <li key={i}><CheckCircle /><span>{item}</span></li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.serviceBottomRow}>
            {serviceIncludes.slice(1).map((svc, i) => (
              <div key={i} className={styles.serviceCard}>
                <span className={styles.serviceNum}>{svc.number}</span>
                <h3 className={styles.serviceCardTitle}>{svc.title}</h3>
                <ul className={styles.serviceList}>
                  {svc.items.map((item, j) => (
                    <li key={j}><CheckCircle /><span>{item}</span></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== REGULATORY INTELLIGENCE ===== */}
      <section className={styles.regulatorySection}>
        <div className={styles.container}>
          <h2 className={styles.regulatoryTitle}>Regulatory Intelligence That Guides Every Decision</h2>
          <p className={styles.regulatorySubtitle}>
            Evidence-based insights that streamline compliance and reduce project risk.
          </p>
          <div className={styles.regulatoryList}>
            {regulatoryItems.map((item, i) => (
              <div key={i} className={styles.regulatoryItem}>
                <CheckCircle />
                <div>
                  <h4 className={styles.regulatoryItemTitle}>{item.title}</h4>
                  <p className={styles.regulatoryItemDesc}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INTEGRATED INSIGHTS BANNER ===== */}
      <section className={styles.insightsBanner} style={{ backgroundImage: `url(${bannerImg2})` }}>
        <div className={styles.bannerOverlay} />
        <div className={styles.container}>
          <p className={styles.bannerText}>
            Integrated insights that align operations, policy, and technology for stronger, future-ready results.
          </p>
        </div>
      </section>

      {/* ===== WHY OUR APPROACH WORKS ===== */}
      <section className={styles.approachSection}>
        <div className={styles.container}>
          <h2 className={styles.approachTitle}>Why Our Approach Works</h2>
          <p className={styles.approachSubtitle}>
            Designed for Municipalities, Tech Vendors, Indigenous Communities & Engineering Partners
          </p>

          <div className={styles.approachGrid}>
            {approachCards.map((card, i) => (
              <div key={i} className={styles.approachCard}>
                <div className={styles.iconCircle}>{card.icon}</div>
                <h4 className={styles.approachCardTitle}>{card.title}</h4>
                <p className={styles.approachCardDesc}>{card.desc}</p>
              </div>
            ))}
          </div>

          <div className={styles.approachBottomCard}>
            <div className={styles.approachBottomIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2">
                <circle cx="12" cy="8" r="6" />
                <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
              </svg>
            </div>
            <h4 className={styles.approachCardTitle}>Regulatory Shifts</h4>
            <p className={styles.approachCardDesc}>We reduce complexity, bring strategic clarity, and accelerate decision-making</p>
          </div>
        </div>
      </section>

      {/* ===== HOW SOLORA DELIVERS ===== */}
      <section className={styles.deliverySection}>
        <div className={styles.container}>
          <div className={styles.deliveryGrid}>
            <div className={styles.deliveryLeft}>
              <h2 className={styles.deliveryTitle}>How Solora Delivers These Insights</h2>
              <Link to="/how-we-work" className={styles.btnGreen}>See Our Full Process</Link>
            </div>
            <div className={styles.deliveryTimeline}>
              {deliverySteps.map((step, i) => (
                <div key={i} className={styles.deliveryStep}>
                  <div className={styles.deliveryStepLeft}>
                    <span className={styles.deliveryNum}>{step.num}</span>
                    {i < deliverySteps.length - 1 && <div className={styles.deliveryLine} />}
                  </div>
                  <div className={styles.deliveryStepContent}>
                    <h4 className={styles.deliveryStepTitle}>{step.title}</h4>
                    <p className={styles.deliveryStepDesc}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className={styles.ctaSection} style={{ backgroundImage: `url(${ctaBgImg})` }}>
        <div className={styles.ctaOverlay} />
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              Get data-driven insights for your environmental or investment decision
            </h2>
            <Link to="/contact" className={styles.ctaBtn}>Connect with Our Team</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnvironmentalAnalytics;