import { Link } from 'react-router-dom';
import styles from './Card.module.css';

// Feature Card - for icon + text cards
export const FeatureCard = ({ icon, title, description, link }) => {
  const CardWrapper = link ? Link : 'div';
  const cardProps = link ? { to: link } : {};

  return (
    <CardWrapper className={styles.featureCard} {...cardProps}>
      {icon && (
        <div className={styles.iconWrapper}>
          {typeof icon === 'string' ? (
            <img src={icon} alt="" className={styles.icon} />
          ) : (
            icon
          )}
        </div>
      )}
      <h3 className={styles.featureTitle}>{title}</h3>
      {description && <p className={styles.featureDescription}>{description}</p>}
    </CardWrapper>
  );
};

// Info Card - for statistics/data display
export const InfoCard = ({ value, label, description }) => {
  return (
    <div className={styles.infoCard}>
      {value && <span className={styles.value}>{value}</span>}
      {label && <h4 className={styles.label}>{label}</h4>}
      {description && <p className={styles.infoDescription}>{description}</p>}
    </div>
  );
};

// Service Card - for service previews
export const ServiceCard = ({ icon, title, description, link }) => {
  return (
    <Link to={link || '#'} className={styles.serviceCard}>
      {icon && (
        <div className={styles.serviceIcon}>
          {typeof icon === 'string' ? (
            <img src={icon} alt="" />
          ) : (
            icon
          )}
        </div>
      )}
      <div className={styles.serviceContent}>
        <h3 className={styles.serviceTitle}>{title}</h3>
        {description && <p className={styles.serviceDescription}>{description}</p>}
      </div>
      <div className={styles.serviceArrow}>
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </Link>
  );
};

// Process Step Card
export const StepCard = ({ number, title, description }) => {
  return (
    <div className={styles.stepCard}>
      <span className={styles.stepNumber}>{String(number).padStart(2, '0')}</span>
      <h3 className={styles.stepTitle}>{title}</h3>
      {description && <p className={styles.stepDescription}>{description}</p>}
    </div>
  );
};

// Image Card - for visual content
export const ImageCard = ({ image, title, description, overlay = true }) => {
  return (
    <div className={styles.imageCard}>
      <div className={styles.imageWrapper}>
        {image && <img src={image} alt={title || ''} className={styles.image} />}
        {overlay && <div className={styles.imageOverlay}></div>}
      </div>
      {(title || description) && (
        <div className={styles.imageContent}>
          {title && <h3 className={styles.imageTitle}>{title}</h3>}
          {description && <p className={styles.imageDescription}>{description}</p>}
        </div>
      )}
    </div>
  );
};

// Value Card - for values/principles
export const ValueCard = ({ icon, title, description }) => {
  return (
    <div className={styles.valueCard}>
      {icon && (
        <div className={styles.valueIcon}>
          {typeof icon === 'string' ? (
            <img src={icon} alt="" />
          ) : (
            icon
          )}
        </div>
      )}
      <h3 className={styles.valueTitle}>{title}</h3>
      {description && <p className={styles.valueDescription}>{description}</p>}
    </div>
  );
};
