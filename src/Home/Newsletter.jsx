import React from 'react';
import newsletterBanner from "./assets/images/newsletter-banner.png"

const Newsletter = () => {
  return (
    <section className="section newsletter" aria-label="newsletter">
      <div className="container">
        <figure className="newsletter-banner img-holder">
          <img
            src={newsletterBanner}
            width="303"
            height="381"
            alt="newsletter banner"
            className="w-100"
          />
        </figure>
        <div className="newsletter-content">
          <h2 className="h2 section-title">Rejoignez-nous !</h2>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
