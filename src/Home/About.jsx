import React from 'react';
import { IonIcon } from '@ionic/react';
import { chevronForward } from 'ionicons/icons';
import aboutBannerImage from './assets/images/about-banner.jpg';
import aboutShape1Image from './assets/images/about-shape-1.png';
import aboutShape2Image from './assets/images/about-shape-2.png';

const About = () => {
  return (
    <section className="section about" id="about" aria-label="about">
      <div className="container">
        <figure className="about-banner img-holder" style={{ '--width': 400, '--height': 720 }}>
          <img src={aboutBannerImage} width="400" height="720" loading="lazy" alt="" className="img-cover" />
          <img src={aboutShape1Image} width="260" height="170" loading="lazy" alt="" className="abs-img abs-img-1" />
          <img src={aboutShape2Image} width="500" height="500" loading="lazy" alt="" className="abs-img abs-img-2" />
        </figure>

        <div className="about-content">
          <p className="section-subtitle">QUI SOMMES NOUS</p>
          <h2 className="h2 section-title">Comptez sur nous pour une livraison de vos colis dans des conditions optimales.</h2>
          <p className="section-text">
          L'AVION Express, société 100% tunisienne, spécialisée dans le transport routier et la livraison de colis.
          </p>

          <ul className="about-list">
            <li className="about-item">
              <div className="about-icon">
                <IonIcon icon={chevronForward} />
              </div>
              <p className="about-text">Leader national pour des solutions de livraison rapides et personnalisées.</p>
            </li>
            {/* Add the rest of the list items */}
            <li className="about-item">
                <div className="about-icon">
                  <IonIcon icon={chevronForward} />
                </div>

                <p className="about-text">
                Notre culture d'entreprise place l'expéditeur et ses besoins en tête de nos priorités.
                </p>
              </li>

              <li className="about-item">
                <div className="about-icon">
                  <IonIcon icon={chevronForward} />
                </div>

                <p className="about-text">
                Livraison garantie partout en Tunisie pour les entreprises de toutes tailles et les professionnels.
                </p>
              </li>

              <li className="about-item">
                <div className="about-icon">
                  <IonIcon icon={chevronForward} />
                </div>

                <p className="about-text">
                Des services variés et un réseau étendu pour satisfaire vos exigences uniques.
                </p>
              </li>

              <li className="about-item">
                <div className="about-icon">
                  <IonIcon icon={chevronForward} />
                </div>

                <p className="about-text">
                La qualité ne se démode jamais. Sécurité, qualité, professionnalisme.
                </p>
              </li>

              <li className="about-item">
                <div className="about-icon">
                  <IonIcon icon={chevronForward} />
                </div>

                <p className="about-text">
                La qualité se voit dans chaque mouvement que nous faisons.
                </p>
              </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
