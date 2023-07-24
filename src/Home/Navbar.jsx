import React, { useState, useEffect, useRef } from 'react';
import { IonIcon } from '@ionic/react';
import { closeOutline, menuOutline, chevronForward, chevronUp, callOutline, logInOutline } from 'ionicons/icons';
import logo from "./assets/images/logo.png"
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
      window.location.href = 'https://dashboard-lavion-express.netlify.app/';
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
            <img src={logo} alt="Logo"  style={{ width: '150px', height: '55.5px' }}/>
          </a>
        </h1>

        <nav className={`navbar ${isActive ? 'active' : ''}`}>
          <div className="navbar-top">
            <a href="#" className="logo">
            <img src={logo} alt="Logo"  style={{ width: '150px', height: '55.5px' }}/>
            </a>
            <button className="nav-close-btn" aria-label="Close menu" onClick={handleNavToggle}>
              <IonIcon icon={closeOutline} />
            </button>
          </div>

          <ul className={`navbar-list ${isActive ? 'active' : ''}`}>
            <li className="navbar-item">
              <a href="#home" className="navbar-link" onClick={handleNavLinkClick}>
                <span>Accueil</span>
                <IonIcon icon={chevronForward} />
              </a>
            </li>
            <li className="navbar-item">
              <a href="#about" className="navbar-link" onClick={handleNavLinkClick}>
                <span>À propos de nous</span>
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
                <span>Smart Livraison</span>
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
            {isActive && <li className="navbar-item" style={{ cursor: 'pointer' }}>
              <a href="tel:22143383" className="navbar-link" onClick={handleLogin}>
                <span>Service client</span>
                <IonIcon icon={chevronForward} />
              </a>
            </li>}
          </ul>
        </nav>

        <div className="header-contact">
          <div>
            <p className="contact-label">Service client</p>
            <a href="tel:22143383" className="contact-number">
              22 142 383
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
