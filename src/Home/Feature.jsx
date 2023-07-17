import React from 'react';
import { IonIcon } from '@ionic/react';
import { arrowForward } from 'ionicons/icons';
import featureicon1 from './assets/images/feature-icon-1.png';
import featureicon2 from './assets/images/feature-icon-2.png';
import featureicon3 from './assets/images/feature-icon-3.png';

const Feature = () => {
  return (
    <section className="section feature" aria-label="feature">
      <div className="container">
        <div className="title-wrapper">
          <div>
            <p className="section-subtitle">Estimation</p>
            <h2 className="h2 section-title">Has a wide range of solutions</h2>
            <p className="section-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry the standard dummy text ever
              since the when an printer took.
            </p>
          </div>
          <a href="#" className="btn">Read More</a>
        </div>

        <ul className="feature-list grid-list">
          <li>
            <div className="feature-card" style={{ '--card-number': "'01'" }}>
              <div className="card-icon">
                <img src={featureicon1} width="72" height="91" alt="" />
              </div>
              <h3 className="h3 card-title">Solutions and specialized</h3>
              <p className="card-text">
                Our aim is to optimize and improve your supply chain so that we can give you the best service
              </p>
              <a href="#" className="card-btn" aria-label="Read more">
              <IonIcon icon={arrowForward} />
              </a>
            </div>
          </li>

          <li>
            <div className="feature-card" style={{ '--card-number': "'02'" }}>
              <div className="card-icon">
                <img src={featureicon2} width="94" height="94" alt="" />
              </div>
              <h3 className="h3 card-title">Multiple warehouses</h3>
              <p className="card-text">
                We provide multiple drop off and pickup locations so you don't have to worry. And you should not face
                any kind...
              </p>
              <a href="#" className="card-btn" aria-label="Read more">
                <IonIcon icon={arrowForward} />
              </a>
            </div>
          </li>

          <li>
            <div className="feature-card" style={{ '--card-number': "'03'" }}>
              <div className="card-icon">
                <img src={featureicon3} width="93" height="93" alt="" />
              </div>
              <h3 className="h3 card-title">Tracking made easy</h3>
              <p className="card-text">
                A tracking number for the entire process. so that you can find the exact position. this process will
                help you
              </p>
              <a href="#" className="card-btn" aria-label="Read more">
                <IonIcon icon={arrowForward} />
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Feature;
