import { Link } from 'react-router-dom';
import styles from './Hero.module.css';

const Hero = ({
  label,
  title,
  description,
  primaryCTA,
  secondaryCTA,
  backgroundImage,
  backgroundVideo,
  minHeight = '600px',
  align = 'left',
  variant = 'default',
  lightOverlay = false,
}) => {
  // Default placeholder background if no image or video provided
  const bgStyle = backgroundImage && !backgroundVideo
    ? { backgroundImage: `url(${backgroundImage})` }
    : !backgroundVideo
    ? { backgroundColor: 'var(--color-gray-700)' }
    : {};

  return (
    <section 
      className={`${styles.hero} ${variant === 'gradientBox' ? styles.gradientBoxHero : ''}`} 
      style={{ ...bgStyle, minHeight }}
    >
      {backgroundVideo && (
        <video
          className={styles.videoBackground}
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      )}
      {variant !== 'gradientBox' && <div className={`${styles.overlay} ${lightOverlay ? styles.overlayLight : ''}`}></div>}
      <div className={`${styles.container} ${styles[align]}`}>
        <div className={`${styles.content} ${variant === 'gradientBox' ? styles.gradientBox : ''}`}>
          {label && <span className={styles.label}>{label}</span>}
          <h1 className={styles.title}>{title}</h1>
          {description && <p className={styles.description}>{description}</p>}
          
          {(primaryCTA || secondaryCTA) && (
            <div className={styles.buttons}>
              {primaryCTA && (
                <Link to={primaryCTA.href} className={styles.primaryBtn}>
                  {primaryCTA.text}
                </Link>
              )}
              {secondaryCTA && (
                <Link to={secondaryCTA.href} className={styles.secondaryBtn}>
                  {secondaryCTA.text}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
