import React from 'react';
import serviceIcon1 from './assets/images/service-icon-1.png';
import serviceIcon4 from './assets/images/service-icon-4.png';
import serviceIcon6 from './assets/images/service-icon-6.png';

const Service = () => {
  return (
    <section className="section service" id="service" aria-label="service">
      <div className="container">
        <p className="section-subtitle">NOS SERVICES</p>
        <h2 className="h2 section-title">Faites confiance à nos services</h2>
        <p className="section-text">
        Nous offrons une large gamme de services pour répondre à vos besoins.
        </p>

        <ul className="service-list grid-list">
          <li>
            <div className="service-card">
              <div className="card-icon">
                <img src={serviceIcon1} width="80" height="60" loading="lazy" alt="Truck" />
              </div>
              <h3 className="h3 card-title">
                <span className="span">01</span> SERVICE PICK UP
              </h3>
              <p className="card-text">
              Express Delivery assure le PICK UP de vos colis partout en Tunisie, selon vos besoins : à la demande ou de manière systématique.
              </p>
            </div>
          </li>
          <li>
            <div className="service-card">
              <div className="card-icon">
                <img src={serviceIcon4} width="50" height="60" loading="lazy" alt="Train" />
              </div>
              <h3 className="h3 card-title">
                <span className="span">02</span>LIVRAISON
              </h3>
              <p className="card-text">
              Express Delivery assure une livraison sécurisée dans toute la Tunisie. Suivi en temps réel et notifications SMS disponibles.
              </p>
            </div>
          </li>
          <li>
            <div className="service-card">
              <div className="card-icon">
                <img src={serviceIcon6} width="63" height="60" loading="lazy" alt="Trolley" />
              </div>
              <h3 className="h3 card-title">
                <span className="span">03</span>PAIEMENT
              </h3>
              <p className="card-text">
              Nous mettons à la disposition de nos expéditeurs une solution de paiement simple et garantie et le paiement se fait en un clin d'œil.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Service;
