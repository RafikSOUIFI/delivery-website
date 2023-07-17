import React from 'react';
import { IonIcon } from '@ionic/react';
import { chevronForward } from 'ionicons/icons';
import blog1 from "./assets/images/blog-1.jpg"
import blog2 from "./assets/images/blog-2.jpg"

const Blog = () => {
  return (
    <section className="section blog" aria-label="blog" id="blog">
      <div className="container">
        <p className="section-subtitle">Our Blogs</p>
        <h2 className="h2 section-title">Recent news & events</h2>
        <p className="section-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry the standard dummy text ever since
          the when an printer took.
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
                  <span className="span">02</span> Aug
                </time>
                <h3 className="h3 card-title">
                  <a href="#">
                    At the end of the day, going forward, a new normal that has evolved from. your only logistic
                    partner.
                  </a>
                </h3>
                <p className="card-text">
                  New chip traps clusters of migrating tumor cells asperiortenetur, blanditiis odit. typesetting industry
                  the standard dummy text ever since the when an printer.
                </p>
                <a href="#" className="btn-link">
                  <IonIcon icon={chevronForward} aria-hidden="true" />
                  <span className="span">Read More</span>
                </a>
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
                  <span className="span">21</span> Aug
                </time>
                <h3 className="h3 card-title">
                  <a href="#">
                    Going forward, a new normal that has evolved from generation. moving your products across all
                    borders.
                  </a>
                </h3>
                <p className="card-text">
                  New chip traps clusters of migrating tumor cells asperiortenetur, blanditiis odit. typesetting industry
                  the standard dummy text ever since the when an printer.
                </p>
                <a href="#" className="btn-link">
                  <IonIcon icon={chevronForward} aria-hidden="true" />
                  <span className="span">Read More</span>
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Blog;
