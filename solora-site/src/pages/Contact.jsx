import Hero from '../components/Hero/Hero';
import styles from './Contact.module.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    // For static site, this is just placeholder
  };

  const contactInfo = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      ),
      title: 'Email',
      value: 'info@soloratech.com',
      link: 'mailto:info@soloratech.com',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      ),
      title: 'Phone',
      value: '+1 (514) 555-0123',
      link: 'tel:+15145550123',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      ),
      title: 'Location',
      value: 'Montreal, Quebec, Canada',
      link: null,
    },
  ];

  return (
    <div className={styles.contact}>
      {/* Hero Section */}
      <Hero
        label="Get in Touch"
        title="Contact Us"
        description="Ready to explore sustainable energy solutions? We'd love to hear from you."
        minHeight="400px"
      />

      {/* Contact Content */}
      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.contactGrid}>
            {/* Contact Form */}
            <div className={styles.formColumn}>
              <h2 className={styles.formTitle}>Send Us a Message</h2>
              <p className={styles.formDescription}>
                Fill out the form below and our team will get back to you within 24 hours.
              </p>
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="firstName" className={styles.label}>
                      First Name <span className={styles.required}>*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className={styles.input}
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="lastName" className={styles.label}>
                      Last Name <span className={styles.required}>*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className={styles.input}
                      required
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>
                    Email <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={styles.input}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="organization" className={styles.label}>
                    Organization
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    className={styles.input}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="subject" className={styles.label}>
                    Subject <span className={styles.required}>*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className={styles.select}
                    required
                  >
                    <option value="">Select a topic</option>
                    <option value="general">General Inquiry</option>
                    <option value="services">Service Information</option>
                    <option value="partnership">Partnership Opportunities</option>
                    <option value="consultation">Request Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.label}>
                    Message <span className={styles.required}>*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className={styles.textarea}
                    rows="6"
                    required
                  ></textarea>
                </div>

                <button type="submit" className={styles.submitBtn}>
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className={styles.infoColumn}>
              <div className={styles.infoCards}>
                {contactInfo.map((info, index) => (
                  <div key={index} className={styles.infoCard}>
                    <div className={styles.infoIcon}>
                      {info.icon}
                    </div>
                    <div className={styles.infoContent}>
                      <h3 className={styles.infoTitle}>{info.title}</h3>
                      {info.link ? (
                        <a href={info.link} className={styles.infoValue}>
                          {info.value}
                        </a>
                      ) : (
                        <p className={styles.infoValue}>{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className={styles.mapContainer}>
                <div className={styles.mapPlaceholder}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <span>Montreal, Quebec</span>
                </div>
              </div>

              {/* Office Hours */}
              <div className={styles.hoursCard}>
                <h3 className={styles.hoursTitle}>Office Hours</h3>
                <div className={styles.hoursList}>
                  <div className={styles.hoursRow}>
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </div>
                  <div className={styles.hoursRow}>
                    <span>Saturday - Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
