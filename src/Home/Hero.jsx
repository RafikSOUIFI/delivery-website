import React from 'react';
import heroBannerImage from './assets/images/hero-banner.jpg';
import heroShapeImage from './assets/images/hero-shape.png';

const Hero = () => {
  return (
    <section className="section hero" aria-label="home" id="home" style={{ backgroundImage: `url(${heroBannerImage})` }}>
      <div className="container">
        <div className="hero-content">
          <h2 className="h1 hero-title">
            <span className="span">To Every</span> Direction
          </h2>
          <p className="hero-text">
            There are many variations of passages of worem Ipsum available, but the majority
          </p>
          <a href="#" className="btn-outline">
            View Services
          </a>
          <img src={heroShapeImage} width="116" height="116" loading="lazy" className="hero-shape shape-1" alt="Shape 1" />
          <img src={heroShapeImage} width="116" height="116" loading="lazy" className="hero-shape shape-2" alt="Shape 2" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
