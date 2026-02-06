import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from '../../assets/Logo.png';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileAccordionOpen, setIsMobileAccordionOpen] = useState(false);
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const location = useLocation();

  // Close menus on route change
  useEffect(() => {
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
    setIsMobileAccordionOpen(false);
  }, [location]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        const hamburger = document.querySelector(`.${styles.hamburger}`);
        if (hamburger && !hamburger.contains(event.target)) {
          setIsMobileMenuOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDropdownKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleDropdownToggle();
    }
    if (e.key === 'Escape') {
      setIsDropdownOpen(false);
    }
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileAccordionToggle = () => {
    setIsMobileAccordionOpen(!isMobileAccordionOpen);
  };

  const dropdownItems = [
    { path: '/what-we-do', label: 'Services Overview' },
    { path: '/services/energy-transition-strategy', label: 'Energy Transition Strategy' },
    { path: '/services/waste-management', label: 'Waste Management' },
    { path: '/services/environmental-analytics', label: 'Environmental Analytics & Insights' },
    { path: '/services/technology-evaluation-adoption', label: 'Technology Evaluation & Adoption' },
  ];

  return (
    <header className={styles.header}>
      <nav className={styles.navbar} aria-label="Main navigation">
        <div className={styles.container}>
          {/* Logo */}
          <Link to="/" className={styles.logo} aria-label="Solora Home">
            <img src={logo} alt="Solora" className={styles.logoImage} />
          </Link>

          {/* Desktop Navigation */}
          <ul className={styles.navLinks}>
            {/* What We Do Dropdown */}
            <li 
              className={styles.navItem}
              ref={dropdownRef}
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button
                className={`${styles.navLink} ${styles.dropdownTrigger} ${isDropdownOpen ? styles.active : ''}`}
                onClick={handleDropdownToggle}
                onKeyDown={handleDropdownKeyDown}
                aria-expanded={isDropdownOpen}
                aria-haspopup="true"
              >
                What We Do
                <svg 
                  className={`${styles.dropdownArrow} ${isDropdownOpen ? styles.rotated : ''}`}
                  viewBox="0 0 12 12" 
                  fill="none"
                  aria-hidden="true"
                >
                  <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              <ul 
                className={`${styles.dropdown} ${isDropdownOpen ? styles.open : ''}`}
                role="menu"
                aria-label="What We Do submenu"
              >
                {dropdownItems.map((item) => (
                  <li key={item.path} role="none">
                    <NavLink
                      to={item.path}
                      className={({ isActive }) => 
                        `${styles.dropdownLink} ${isActive ? styles.activeLink : ''}`
                      }
                      role="menuitem"
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>

            <li className={styles.navItem}>
              <NavLink 
                to="/our-impact" 
                className={({ isActive }) => 
                  `${styles.navLink} ${isActive ? styles.activeLink : ''}`
                }
              >
                Our Impact
              </NavLink>
            </li>

            <li className={styles.navItem}>
              <NavLink 
                to="/how-we-work" 
                className={({ isActive }) => 
                  `${styles.navLink} ${isActive ? styles.activeLink : ''}`
                }
              >
                How We Work
              </NavLink>
            </li>

            <li className={styles.navItem}>
              <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  `${styles.navLink} ${isActive ? styles.activeLink : ''}`
                }
              >
                Who We Are
              </NavLink>
            </li>
          </ul>

          {/* Contact Button (Desktop) */}
          <Link to="/contact" className={styles.contactBtn}>
            Contact Us
          </Link>

          {/* Hamburger Menu (Mobile) */}
          <button
            className={`${styles.hamburger} ${isMobileMenuOpen ? styles.open : ''}`}
            onClick={handleMobileMenuToggle}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}
          ref={mobileMenuRef}
        >
          <ul className={styles.mobileNavLinks}>
            {/* What We Do Accordion */}
            <li className={styles.mobileNavItem}>
              <button
                className={`${styles.mobileNavLink} ${styles.accordionTrigger}`}
                onClick={handleMobileAccordionToggle}
                aria-expanded={isMobileAccordionOpen}
              >
                What We Do
                <svg 
                  className={`${styles.accordionArrow} ${isMobileAccordionOpen ? styles.rotated : ''}`}
                  viewBox="0 0 12 12" 
                  fill="none"
                  aria-hidden="true"
                >
                  <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              <ul className={`${styles.accordionContent} ${isMobileAccordionOpen ? styles.open : ''}`}>
                {dropdownItems.map((item) => (
                  <li key={item.path}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) => 
                        `${styles.accordionLink} ${isActive ? styles.activeLink : ''}`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>

            <li className={styles.mobileNavItem}>
              <NavLink 
                to="/our-impact" 
                className={({ isActive }) => 
                  `${styles.mobileNavLink} ${isActive ? styles.activeLink : ''}`
                }
              >
                Our Impact
              </NavLink>
            </li>

            <li className={styles.mobileNavItem}>
              <NavLink 
                to="/how-we-work" 
                className={({ isActive }) => 
                  `${styles.mobileNavLink} ${isActive ? styles.activeLink : ''}`
                }
              >
                How We Work
              </NavLink>
            </li>

            <li className={styles.mobileNavItem}>
              <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  `${styles.mobileNavLink} ${isActive ? styles.activeLink : ''}`
                }
              >
                Who We Are
              </NavLink>
            </li>

            <li className={styles.mobileNavItem}>
              <Link to="/contact" className={styles.mobileContactBtn}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div 
            className={styles.overlay} 
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />
        )}
      </nav>
    </header>
  );
};

export default Navbar;
