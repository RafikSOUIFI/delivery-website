import React from 'react';
import { IonIcon } from '@ionic/react';
import { expandOutline } from 'ionicons/icons';
import project1 from "./assets/images/project-1.jpg"
import project2 from "./assets/images/project-2.jpg"
import project3 from "./assets/images/project-3.jpg"
import project4 from "./assets/images/project-4.jpg"
import project5 from "./assets/images/project-5.jpg"
import project6 from "./assets/images/project-6.jpg"

const Projects = () => {
  return (
    <section className="section project" aria-label="project">
      <div className="container">

        <p className="section-subtitle">Projects</p>
        <h2 className="h2 section-title">Featured Projects</h2>

        <p className="section-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry the standard dummy text ever since
          the when an printer took.
        </p>

        <ul className="project-list">

          <li className="project-item">
            <div className="project-card">
              <figure className="card-banner img-holder" style={{ '--width': 397, '--height': 352 }}>
                <img src={project1} width="397" height="352" loading="lazy" alt="Warehouse inventory" className="img-cover" />
              </figure>

              <button className="action-btn" aria-label="View image">
                <IonIcon icon={expandOutline} />
              </button>

              <div className="card-content">
                <p className="card-tag">Warehousing, Distribution</p>
                <h3 className="h3">
                  <a href="#" className="card-title">Warehouse inventory</a>
                </h3>
                <a href="#" className="card-link">Read More</a>
              </div>
            </div>
          </li>

          <li className="project-item">
            <div className="project-card">
              <figure className="card-banner img-holder" style={{ '--width': 397, '--height': 352 }}>
                <img src={project2} width="397" height="352" loading="lazy" alt="Warehouse inventory" className="img-cover" />
              </figure>

              <button className="action-btn" aria-label="View image">
                <IonIcon icon={expandOutline} />
              </button>

              <div className="card-content">
                <p className="card-tag">Logistics, Analytics</p>
                <h3 className="h3">
                  <a href="#" className="card-title">Minimize Manufacturing</a>
                </h3>
                <a href="#" className="card-link">Read More</a>
              </div>
            </div>
          </li>

          <li className="project-item">
            <div className="project-card">
              <figure className="card-banner img-holder" style={{ '--width': 397, '--height': 352 }}>
                <img src={project3} width="397" height="352" loading="lazy" alt="Warehouse inventory" className="img-cover" />
              </figure>

              <button className="action-btn" aria-label="View image">
                <IonIcon icon={expandOutline} />
              </button>

              <div className="card-content">
                <p className="card-tag">Warehousing, Distribution</p>
                <h3 className="h3">
                  <a href="#" className="card-title">Warehouse inventory</a>
                </h3>
                <a href="#" className="card-link">Read More</a>
              </div>
            </div>
          </li>

          <li className="project-item">
            <div className="project-card">
              <figure className="card-banner img-holder" style={{ '--width': 397, '--height': 352 }}>
                <img src={project4} width="397" height="352" loading="lazy" alt="Warehouse inventory" className="img-cover" />
              </figure>

              <button className="action-btn" aria-label="View image">
                <IonIcon icon={expandOutline} />
              </button>

              <div className="card-content">
                <p className="card-tag">Logistics, Analytics</p>
                <h3 className="h3">
                  <a href="#" className="card-title">Minimize Manufacturing</a>
                </h3>
                <a href="#" className="card-link">Read More</a>
              </div>
            </div>
          </li>

          <li className="project-item">
            <div className="project-card">
              <figure className="card-banner img-holder" style={{ '--width': 397, '--height': 352 }}>
                <img src={project5} width="397" height="352" loading="lazy" alt="Warehouse inventory" className="img-cover" />
              </figure>

              <button className="action-btn" aria-label="View image">
                <IonIcon icon={expandOutline} />
              </button>

              <div className="card-content">
                <p className="card-tag">Warehousing, Distribution</p>
                <h3 className="h3">
                  <a href="#" className="card-title">Warehouse inventory</a>
                </h3>
                <a href="#" className="card-link">Read More</a>
              </div>
            </div>
          </li>

          <li className="project-item">
            <div className="project-card">
              <figure className="card-banner img-holder" style={{ '--width': 397, '--height': 352 }}>
                <img src={project6} width="397" height="352" loading="lazy" alt="Warehouse inventory" className="img-cover" />
              </figure>

              <button className="action-btn" aria-label="View image">
                <IonIcon icon={expandOutline} />
              </button>

              <div className="card-content">
                <p className="card-tag">Logistics, Analytics</p>
                <h3 className="h3">
                  <a href="#" className="card-title">Minimize Manufacturing</a>
                </h3>
                <a href="#" className="card-link">Read More</a>
              </div>
            </div>
          </li>

        </ul>

      </div>
    </section>
  );
};

export default Projects;
