import { Link } from 'react-router-dom';
import styles from './CTA.module.css';

const CTA = ({
  title,
  description,
  buttonText = 'Get Started',
  buttonLink = '/contact',
  variant = 'primary', // 'primary' or 'secondary'
}) => {
  return (
    <section className={`${styles.cta} ${styles[variant]}`}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>
          {description && <p className={styles.description}>{description}</p>}
          <Link to={buttonLink} className={styles.button}>
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
