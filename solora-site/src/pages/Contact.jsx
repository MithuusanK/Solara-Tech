import { Link } from 'react-router-dom';
import Hero from '../components/Hero/Hero';
import styles from './Contact.module.css';

// Import contact assets
import contactHeroBg from '../assets/Contact1.png';
import contactMapImg from '../assets/ContactImage3.png';

const Contact = () => {
  const handleSubmit = (e) => {
    // Formspree will handle the submission
    // Just let the default form submission happen
  };

  const features = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Quick Response',
      description: 'We typically respond within 24 hours',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Confidential',
      description: 'Your information is secure and private',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'No Obligation',
      description: 'Free consultation to explore possibilities',
    },
  ];

  const exploreCards = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'How We Work',
      description: 'Learn about our collaborative process and methodology',
      linkText: 'Learn More',
      linkHref: '/how-we-work',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M22 4L12 14.01l-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Impact',
      description: 'See real results from our sustainability projects',
      linkText: 'View Results',
      linkHref: '/our-impact',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="8" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="8" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="8" y1="18" x2="21" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="3" y1="6" x2="3.01" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="3" y1="12" x2="3.01" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="3" y1="18" x2="3.01" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Services Overview',
      description: 'Explore all our sustainability solutions and offerings',
      linkText: 'Explore Services',
      linkHref: '/what-we-do',
    },
  ];

  return (
    <div className={styles.contact}>
      {/* Hero Section */}
      <Hero
        title="Get in Contact with the Solora Team"
        description="Book a one-on-one session to discuss your projects, challenges, or potential collaborations."
        backgroundImage={contactMapImg}
        minHeight="340px"
        align="center"
      />

      {/* Main Contact Section */}
      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.contactGrid}>
            {/* Left column - Info */}
            <div className={styles.infoColumn}>
              <div className={styles.infoContent}>
                <h2 className={styles.infoHeading}>
                  Rooted Locally.{' '}
                  <span className={styles.headingAccent}>Impacting Globally.</span>
                </h2>
                <p className={styles.infoDescription}>
                  Though our team is based in British Columbia, we collaborate with municipalities, investors, and emerging technology providers across Canada who are ready to enter the waste-to-resource space. No matter where you're located, we bring local context, strategic guidance, and real-world expertise to help your project take root.
                </p>
              </div>

              {/* Feature badges */}
              <div className={styles.featureBadges}>
                {features.map((feature, index) => (
                  <div key={index} className={styles.featureBadge}>
                    <div className={styles.featureIcon}>
                      {feature.icon}
                    </div>
                    <h4 className={styles.featureTitle}>{feature.title}</h4>
                    <p className={styles.featureDescription}>{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column - Form */}
            <div className={styles.formColumn}>
              <div className={styles.formCard}>
                <h2 className={styles.formTitle}>Contact Us</h2>
                <p className={styles.formDescription}>
                  Please complete the contact form and our knowledgable staff will contact you directly.
                </p>

                <form 
                  className={styles.form} 
                  action="https://formspree.io/f/YOUR_FORM_ID" 
                  method="POST"
                  onSubmit={handleSubmit}
                >
                  {/* 
                    IMPORTANT: Replace YOUR_FORM_ID with your actual Formspree form ID
                    Steps to get your form ID:
                    1. Go to https://formspree.io
                    2. Click "New Form"
                    3. Enter your email: contact@solora-tech.com
                    4. Copy your form ID (e.g., "mxyzwpva")
                    5. Replace YOUR_FORM_ID above with your actual form ID
                  */}
                  <div className={styles.formGroup}>
                    <label htmlFor="fullName" className={styles.label}>
                      FULL NAME
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      className={styles.input}
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label}>
                      EMAIL ADDRESS
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className={styles.input}
                      required
                    />
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="organization" className={styles.label}>
                        Organization/Company
                      </label>
                      <input
                        type="text"
                        id="organization"
                        name="organization"
                        className={styles.input}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="role" className={styles.label}>
                        Role/Title
                      </label>
                      <input
                        type="text"
                        id="role"
                        name="role"
                        className={styles.input}
                      />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="reason" className={styles.label}>
                      REASON FOR CONTACT
                    </label>
                    <select
                      id="reason"
                      name="reason"
                      className={styles.select}
                      required
                    >
                      <option value="general">General Inquiry</option>
                      <option value="services">Service Information</option>
                      <option value="partnership">Partnership Opportunities</option>
                      <option value="consultation">Request Consultation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message" className={styles.label}>
                      Message / Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className={styles.textarea}
                      rows="5"
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className={styles.submitBtn}>
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office / Map Section */}
      <section className={styles.officeSection}>
        <div className={styles.container}>
          <div className={styles.officeGrid}>
            <div className={styles.officeInfo}>
              <h2 className={styles.officeTitle}>Our Office</h2>
              <div className={styles.addressBlock}>
                <div className={styles.addressIcon}>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h4 className={styles.addressLabel}>Address</h4>
                  <p className={styles.addressText}>
                    8191 Westminster Hwy,<br />
                    Richmond, BC V6X 1A7,<br />
                    Canada
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.mapContainer}>
              <img
                src={contactHeroBg}
                alt="Office location map - Richmond, BC"
                className={styles.mapImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Explore Section */}
      <section className={styles.exploreSection}>
        <div className={styles.container}>
          <div className={styles.exploreHeader}>
            <h2 className={styles.exploreTitle}>Explore While Our Team Gets in Touch</h2>
            <p className={styles.exploreDescription}>
              Explore our resources to learn more about how we can help transform your sustainability initiatives.
            </p>
          </div>

          <div className={styles.exploreCards}>
            {exploreCards.map((card, index) => (
              <div key={index} className={styles.exploreCard}>
                <div className={styles.exploreCardIcon}>
                  {card.icon}
                </div>
                <h3 className={styles.exploreCardTitle}>{card.title}</h3>
                <p className={styles.exploreCardDescription}>{card.description}</p>
                <Link to={card.linkHref} className={styles.exploreCardLink}>
                  {card.linkText} <span>&rarr;</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
