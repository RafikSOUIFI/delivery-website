import React from 'react';
import heroBannerImage from './assets/images/hero-banner.jpg';
import heroShapeImage from './assets/images/hero-shape.png';

const Hero = () => {
  const handleLogin = (event) => {
    if (event.target.textContent === 'Accéder à votre compte') {
      window.location.href = 'https://dashboard-lavion-express.netlify.app/';
    }
  };
  return (
    <section className="section hero" aria-label="home" id="home" style={{ backgroundImage: `url(${heroBannerImage})` }}>
      <div className="container">
        <div className="hero-content">
          <h2 className="h1 hero-title">
            <span className="span">Vitesse et</span>précision
          </h2>
          <p className="hero-text">
          Le service de livraison à domicile le plus rapide en Tunisie
          </p>
          <a  className="btn-outline" onClick={handleLogin} style={{ cursor: 'pointer' }}>
          Accéder à votre compte
          </a>
          <img src={heroShapeImage} width="116" height="116" loading="lazy" className="hero-shape shape-1" alt="Shape 1" />
          <img src={heroShapeImage} width="116" height="116" loading="lazy" className="hero-shape shape-2" alt="Shape 2" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
