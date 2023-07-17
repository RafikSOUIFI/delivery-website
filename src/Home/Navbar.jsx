import React, { useState, useEffect, useRef } from 'react';
import { IonIcon } from '@ionic/react';
import { closeOutline, menuOutline, chevronForward, chevronUp, callOutline, logInOutline } from 'ionicons/icons';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const headerRef = useRef(null);
  const backTopBtnRef = useRef(null);

  const handleNavToggle = () => {
    setIsActive((prevIsActive) => !prevIsActive);
  };

  const handleNavLinkClick = () => {
    setIsActive(false);
  };

  const handleLogin = (event) => {
    if (event.target.textContent === 'Mon Compte') {
      window.location.href = 'https://www.claquette.online';
    }
    setIsActive(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        headerRef.current.classList.add('active');
        backTopBtnRef.current.classList.add('active');
      } else {
        headerRef.current.classList.remove('active');
        backTopBtnRef.current.classList.remove('active');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header ref={headerRef} className={`header`}>
      <div className="container">
        <h1>
          <a href="#" className="logo">
            Transportio
          </a>
        </h1>

        <nav className={`navbar ${isActive ? 'active' : ''}`}>
          <div className="navbar-top">
            <a href="#" className="logo">
              Transportio
            </a>
            <button className="nav-close-btn" aria-label="Close menu" onClick={handleNavToggle}>
              <IonIcon icon={closeOutline} />
            </button>
          </div>

          <ul className={`navbar-list ${isActive ? 'active' : ''}`}>
            <li className="navbar-item">
              <a href="#home" className="navbar-link" onClick={handleNavLinkClick}>
                <span>Home</span>
                <IonIcon icon={chevronForward} />
              </a>
            </li>
            <li className="navbar-item">
              <a href="#about" className="navbar-link" onClick={handleNavLinkClick}>
                <span>About</span>
                <IonIcon icon={chevronForward} />
              </a>
            </li>
            <li className="navbar-item">
              <a href="#service" className="navbar-link" onClick={handleNavLinkClick}>
                <span>Service</span>
                <IonIcon icon={chevronForward} />
              </a>
            </li>
            <li className="navbar-item">
              <a href="#blog" className="navbar-link" onClick={handleNavLinkClick}>
                <span>Blog</span>
                <IonIcon icon={chevronForward} />
              </a>
            </li>
            <li className="navbar-item">
              <a href="#" className="navbar-link" onClick={handleNavLinkClick}>
                <span>Contact</span>
                <IonIcon icon={chevronForward} />
              </a>
            </li>
            <li className="navbar-item" style={{ cursor: 'pointer' }}>
              <a className="navbar-link" onClick={handleLogin}>
                <span>Mon Compte</span>
                <IonIcon icon={chevronForward} />
              </a>
            </li>
          </ul>
        </nav>

        <div className="header-contact">
          <div>
            <p className="contact-label">Free Call In U.S.A</p>
            <a href="tel:12345678910" className="contact-number">
              1 234 567 8910
            </a>
          </div>
          <div className="contact-icon">
            <IonIcon icon={callOutline} />
          </div>
        </div>

        <button className="nav-open-btn" aria-label="Open menu" onClick={handleNavToggle}>
          <IonIcon icon={menuOutline} />
        </button>

        <div ref={backTopBtnRef} className={`back-top-btn`}>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <IonIcon icon={chevronUp} style={{color: 'white'}}/>
          </button>
        </div>

        <div className={`overlay ${isActive ? 'active' : ''}`} onClick={handleNavLinkClick} ></div>
      </div>
    </header>
  );
};

export default Navbar;
