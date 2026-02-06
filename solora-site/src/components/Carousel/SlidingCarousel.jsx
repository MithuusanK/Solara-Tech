import { useState, useEffect, useCallback, useRef } from 'react';
import styles from './SlidingCarousel.module.css';

const SlidingCarousel = ({ items, title, subtitle }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const carouselRef = useRef(null);

  // Number of visible cards based on screen size
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalItems = items.length;
  const maxIndex = Math.max(0, totalItems - visibleCards);

  const goToNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [isTransitioning, maxIndex]);

  const goToPrev = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [isTransitioning, maxIndex]);

  // Reset transition lock
  useEffect(() => {
    const timer = setTimeout(() => setIsTransitioning(false), 350);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!carouselRef.current?.contains(document.activeElement)) return;
      
      if (e.key === 'ArrowRight') {
        goToNext();
      } else if (e.key === 'ArrowLeft') {
        goToPrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrev]);

  // Touch handlers for swipe
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrev();
    }
  };

  // Calculate transform offset
  const cardWidth = 100 / visibleCards;
  const translateX = -(currentIndex * cardWidth);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerText}>
            {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
            {title && <h2 className={styles.title}>{title}</h2>}
          </div>
          
          <div className={styles.controls}>
            <button
              className={styles.arrowBtn}
              onClick={goToPrev}
              aria-label="Previous slide"
            >
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <span className={styles.counter} aria-live="polite">
              {currentIndex + 1} / {maxIndex + 1}
            </span>
            <button
              className={styles.arrowBtn}
              onClick={goToNext}
              aria-label="Next slide"
            >
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        <div 
          className={styles.carouselWrapper}
          ref={carouselRef}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          tabIndex={0}
          aria-label="Services carousel"
          role="region"
        >
          <div 
            className={styles.carousel}
            style={{ transform: `translateX(${translateX}%)` }}
          >
            {items.map((item, index) => (
              <div
                key={index}
                className={styles.card}
                style={{ width: `${cardWidth}%` }}
              >
                <div 
                  className={styles.cardInner}
                  style={item.backgroundImage ? { backgroundImage: `url(${item.backgroundImage})` } : {}}
                >
                  <div className={styles.cardOverlay}></div>
                  <div className={styles.cardContent}>
                    {item.pillar && <span className={styles.pillar}>{item.pillar}</span>}
                    <h3 className={styles.cardTitle}>{item.title}</h3>
                    {item.description && (
                      <p className={styles.cardDescription}>{item.description}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SlidingCarousel;
