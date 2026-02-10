import React from 'react';
import styles from './TechnologyEvaluation.module.css';
import heroImage from '../../assets/banner-tea.png';
import transferImg from '../../assets/image6.png';
import stakeholder1 from '../../assets/image1.png';
import stakeholder2 from '../../assets/image2.png';
import stakeholder3 from '../../assets/image3.png';
import stakeholder4 from '../../assets/image4.png';
import ubcLogo from '../../assets/ubc.png';
import grasslandLogo from '../../assets/grassland.png';

const CheckCircle = () => (
  <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CircularCheck = () => (
  <svg className={styles.circularCheckIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const stakeholders = [
  { img: stakeholder1, title: 'Municipal Waste & Infrastructure Leaders', desc: 'We help municipal decision-makers evaluate and adopt technologies that solve solid waste, biosolids, and wastewater challenges.' },
  { img: stakeholder2, title: 'Indigenous & Local Community Leaders', desc: 'We bring technologies to Indigenous and rural communities, supporting sovereignty and culturally-sensitive adoption strategies.' },
  { img: stakeholder3, title: 'Policy & Environmental Analysts', desc: 'We offer evidence-based technology reviews, data modeling, and environmental benchmarking for regulatory decision-making.' },
  { img: stakeholder4, title: 'Investors & Engineering Partners', desc: 'We provide technology due diligence, market-readiness assessments, and partnership facilitation for the Canadian market.' },
];

const gains = [
  { title: 'Regulatory Clarity', desc: 'Navigate Canadian environmental regulations and compliance requirements with confidence before committing resources.', iconPath: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
  { title: 'Vendor-Neutral Benchmarking', desc: 'Receive unbiased technology comparisons based on performance data, not vendor claims — making better decisions easier.', iconPath: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
  { title: 'Canadian Market Compatibility', desc: "Understand how technologies perform under Canada's unique climate, regulatory, and community conditions.", iconPath: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
  { title: 'Risk Identification & Mitigation', desc: 'Spot environmental, regulatory, and financial risks early — before they become costly problems.', iconPath: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z' },
  { title: 'Perfect Alignment', desc: 'We match innovators with communities that need their solutions — ensuring mutual success and measurable impact.', iconPath: 'M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1' },
  { title: 'End-to-End Support', desc: "From initial assessment to pilot projects and full adoption — we're with you at every stage of the process.", iconPath: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15' },
];

const processSteps = [
  { title: 'Discovery & Needs Assessment', desc: 'We start by understanding your specific challenges, community needs, or technology capabilities to define the right scope.' },
  { title: 'Technology Scouting & Evaluation', desc: 'We identify and evaluate technologies using performance data, regulatory fit, environmental impact, and market readiness criteria.' },
  { title: 'Compatibility & Risk Analysis', desc: "We assess how well a technology fits Canada's environment, regulations, infrastructure, and community expectations." },
  { title: 'Adoption Roadmap & Implementation Support', desc: 'We deliver a tailored roadmap — from pilot planning to full-scale deployment — with hands-on guidance throughout.' },
];

export default function TechnologyEvaluation() {
  return (
    <div className={styles.page}>
      <section className={styles.hero} style={{ backgroundImage: `url(${heroImage})` }}>
        <div className={styles.heroOverlay} />
        <div className={`${styles.container} ${styles.heroContent}`}>
          <span className={styles.heroLabel}>Technology Evaluation &amp; Adoption</span>
          <h1 className={styles.heroTitle}>Connecting Global Technologies with Canadian Communities</h1>
          <p className={styles.heroDescription}>We evaluate innovative international technologies and match them with the communities that need them most — accelerating adoption for waste, water, energy, and infrastructure challenges.</p>
          <div className={styles.heroButtons}>
            <a href="#contact" className={styles.btnPrimary}>Find Solutions For Your Needs</a>
            <a href="#contact" className={styles.btnSecondary}>Bring Your Technology to Canada</a>
          </div>
        </div>
      </section>

      <section className={styles.transferSection}>
        <div className={styles.container}>
          <div className={styles.transferGrid}>
            <div>
              <h2 className={styles.transferTitle}>What <span className={styles.highlight}>Technology Transfer</span> <em>Means</em></h2>
              <p className={styles.transferText}>Technology transfer is the process of adapting and applying proven solutions — developed internationally — to solve local environmental and infrastructure challenges in Canada.</p>
              <p className={styles.transferText}>At Solora, we serve as a bridge: identifying cutting-edge technologies from around the world and evaluating whether they are the right fit for Canadian municipalities, Indigenous communities, and infrastructure projects.</p>
              <div className={styles.transferQuote}>We do not just find technology — we ensure it works for the land, the people, and the regulations that define each community needs.</div>
            </div>
            <div className={styles.transferImage}>
              <img src={transferImg} alt="Technology Transfer" />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.bridgeSection}>
        <div className={styles.container}>
          <h2 className={styles.bridgeTitle}>A Bridge Between <span className={styles.highlight}>Global Innovation</span> &amp; Local Needs</h2>
          <div className={styles.bridgeCards}>
            <div className={styles.bridgeCard}>
              <h3 className={styles.bridgeCardTitle}>For International Innovators</h3>
              <p className={styles.bridgeCardDesc}>We help global technology providers understand Canada regulatory landscape, environmental standards, and community expectations — so they can enter the market with confidence and impact.</p>
            </div>
            <div className={styles.bridgeCard}>
              <h3 className={styles.bridgeCardTitle}>For Canadian Municipalities &amp; Communities</h3>
              <p className={styles.bridgeCardDesc}>We evaluate emerging technologies from around the world, customize recommendations, and guide adoption — ensuring solutions align with local needs, budgets, and environmental goals.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.whatWeDoSection}>
        <div className={styles.container}>
          <h2 className={styles.whatWeDoTitle}>What We Do</h2>
          <div className={styles.whatWeDoGrid}>
            <div className={styles.whatWeDoCard}>
              <div className={styles.whatWeDoCardIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
              </div>
              <h3 className={styles.whatWeDoCardTitle}>International Innovators</h3>
              <p className={styles.whatWeDoCardSubtitle}>Technology Providers Entering Canada</p>
              <div className={styles.whatWeDoCheckList}>
                <div className={styles.whatWeDoCheckItem}><CheckCircle /><span>Market compatibility assessments</span></div>
                <div className={styles.whatWeDoCheckItem}><CheckCircle /><span>Regulatory alignment reviews</span></div>
                <div className={styles.whatWeDoCheckItem}><CheckCircle /><span>Pilot project facilitation</span></div>
                <div className={styles.whatWeDoCheckItem}><CheckCircle /><span>Community engagement guidance</span></div>
                <div className={styles.whatWeDoCheckItem}><CheckCircle /><span>Environmental risk evaluation</span></div>
              </div>
            </div>
            <div className={styles.connectingIcon}>
              <div className={styles.connectingIconCircle}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M8 7l4-4 4 4M8 17l4 4 4-4M12 3v18" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
              <span className={styles.connectingLabel}>Solora connects both sides</span>
            </div>
            <div className={styles.whatWeDoCard}>
              <div className={styles.whatWeDoCardIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
              <h3 className={styles.whatWeDoCardTitle}>Canadian Municipalities</h3>
              <p className={styles.whatWeDoCardSubtitle}>Communities Seeking Solutions</p>
              <div className={styles.whatWeDoCheckList}>
                <div className={styles.whatWeDoCheckItem}><CheckCircle /><span>Technology scouting &amp; sourcing</span></div>
                <div className={styles.whatWeDoCheckItem}><CheckCircle /><span>Vendor-neutral performance benchmarking</span></div>
                <div className={styles.whatWeDoCheckItem}><CheckCircle /><span>Environmental &amp; social impact analysis</span></div>
                <div className={styles.whatWeDoCheckItem}><CheckCircle /><span>Adoption roadmap development</span></div>
                <div className={styles.whatWeDoCheckItem}><CheckCircle /><span>End-to-end support through implementation</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.stakeholdersSection}>
        <div className={styles.container}>
          <h2 className={styles.stakeholdersTitle}>How We Support Different <span className={styles.highlight}>Stakeholders</span></h2>
          <div className={styles.stakeholdersGrid}>
            {stakeholders.map((item, i) => (
              <div key={i} className={styles.stakeholderCard}>
                <div className={styles.stakeholderImage}><img src={item.img} alt={item.title} /></div>
                <div className={styles.stakeholderContent}>
                  <h3 className={styles.stakeholderCardTitle}>{item.title}</h3>
                  <p className={styles.stakeholderCardDesc}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.gainSection}>
        <div className={styles.container}>
          <h2 className={styles.gainTitle}>What You <span className={styles.highlight}>Gain</span> With Solora</h2>
          <div className={styles.gainGrid}>
            {gains.map((card, i) => (
              <div key={i} className={styles.gainCard}>
                <div className={styles.gainCardIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d={card.iconPath} strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
                <h3 className={styles.gainCardTitle}>{card.title}</h3>
                <p className={styles.gainCardDesc}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.processSection}>
        <div className={styles.container}>
          <div className={styles.processGrid}>
            <div className={styles.processLeft}>
              <h2>A Simple Process for <span className={styles.highlight}>Innovators &amp; Communities</span></h2>
              <a href="/how-we-work" className={styles.processBtnDark}>See Our Full Process</a>
            </div>
            <div className={styles.processSteps}>
              {processSteps.map((step, i) => (
                <div key={i} className={styles.processStep}>
                  <span className={styles.processStepNumber}>{i + 1}</span>
                  <div className={styles.processStepContent}>
                    <h4>{step.title}</h4>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.circularSection}>
        <div className={styles.container}>
          <h2 className={styles.circularTitle}>Circular Systems: <span className={styles.highlight}>Environmental, Economic, &amp; Community Impact</span></h2>
          <div className={styles.circularCards}>
            <div className={styles.circularCard}>
              <h3 className={styles.circularCardTitle}>Environmental Benefits</h3>
              <div className={styles.circularCheckList}>
                <div className={styles.circularCheckItem}><CircularCheck /><span>Reduced landfill dependency through advanced waste processing</span></div>
                <div className={styles.circularCheckItem}><CircularCheck /><span>Lower greenhouse gas emissions through clean technology adoption</span></div>
                <div className={styles.circularCheckItem}><CircularCheck /><span>Improved water and soil quality through modern treatment systems</span></div>
                <div className={styles.circularCheckItem}><CircularCheck /><span>Biodiversity protection through sustainable infrastructure planning</span></div>
              </div>
            </div>
            <div className={styles.circularCard}>
              <h3 className={styles.circularCardTitle}>Economic &amp; Community Benefits</h3>
              <div className={styles.circularCheckList}>
                <div className={styles.circularCheckItem}><CircularCheck /><span>New local employment through technology deployment and maintenance</span></div>
                <div className={styles.circularCheckItem}><CircularCheck /><span>Revenue generation from resource recovery and energy production</span></div>
                <div className={styles.circularCheckItem}><CircularCheck /><span>Community resilience through locally-managed infrastructure solutions</span></div>
                <div className={styles.circularCheckItem}><CircularCheck /><span>Cost savings through efficient, right-sized technology systems</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      <section className={styles.ctaBanner} style={{ backgroundImage: `url(${heroImage})` }}>
        <div className={styles.ctaBannerOverlay} />
        <div className={`${styles.container} ${styles.ctaBannerContent}`}>
          <h2 className={styles.ctaBannerTitle}>Whether You Are Bringing Technology In or Looking for It — We Are Here to Help</h2>
          <p className={styles.ctaBannerDesc}>Let us explore how the right technology can transform your community, infrastructure, or business.</p>
          <a href="/contact" className={styles.ctaBannerBtn}>Get in Touch</a>
        </div>
      </section>
    </div>
  );
}

