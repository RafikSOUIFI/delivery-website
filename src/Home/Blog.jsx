import React from 'react';
import blog1 from "./assets/images/blog-1.jpg"
import blog2 from "./assets/images/blog-2.jpg"

const Blog = () => {
  return (
    <section className="section blog" aria-label="blog" id="blog">
      <div className="container">
        <p className="section-subtitle">Accélérez votre croissance.</p>
        <h2 className="h2 section-title">VOUS AVEZ UN COMMERCE EN LIGNE?</h2>
        <p className="section-text">
        L'AVION Express vous accompagne pour le développement de votre business en ligne et vous assure la livraison express de vos colis en 24H dans les meilleures conditions sur tout le territoire tunisien.
        </p>
        <ul className="blog-list grid-list">
          <li>
            <div className="blog-card">
              <figure className="card-banner img-holder" style={{ '--width': 770, '--height': 500 }}>
                <img
                  src={blog1}
                  width="770"
                  height="500"
                  loading="lazy"
                  alt="At the end of the day, going forward, a new normal that has evolved from. your only logistic partner."
                  className="img-cover"
                />
              </figure>
              <div className="card-content">
                <time className="card-meta" datetime="2022-08-02">
                  <span className="span">24</span>/24
                </time>
                <h3 className="h3 card-title">
                  
                En avant, un partenaire logistique fiable, pour une nouvelle normalité adaptée à vos besoins.
                
                </h3>
                <p className="card-text">
                Nous vous accompagnons vers une nouvelle normalité, en proposant des solutions adaptées à vos besoins. Notre engagement envers la qualité, la sécurité et la rapidité assure une livraison efficace de vos colis partout en Tunisie. Fiez-vous à notre expertise pour une expérience de livraison sans pareille, répondant à toutes vos attentes professionnelles.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="blog-card">
              <figure className="card-banner img-holder" style={{ '--width': 770, '--height': 500 }}>
                <img
                  src={blog2}
                  width="770"
                  height="500"
                  loading="lazy"
                  alt="Going forward, a new normal that has evolved from generation. moving your products across all borders."
                  className="img-cover"
                />
              </figure>
              <div className="card-content">
                <time className="card-meta" datetime="2022-08-21">
                  <span className="span">07</span> /07
                </time>
                <h3 className="h3 card-title">
                  Vous possédez un commerce en ligne ? Confiez-nous la gestion logistique de vos livraisons. 
                </h3>
                <p className="card-text">
                L'AVION Express est votre partenaire dédié pour assurer des solutions de livraison rapides, sécurisées et personnalisées. Avec notre réseau étendu couvrant tout le territoire tunisien, vous pouvez vous concentrer sur votre activité tandis que nous nous occupons de la distribution de vos colis en toute efficacité. Simplifiez votre processus logistique avec notre expertise éprouvée et offrez à vos clients une expérience de livraison optimale.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Blog;
