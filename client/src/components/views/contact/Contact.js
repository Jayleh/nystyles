import React, { Component } from 'react';
import Banner from '../../banner/Banner';
// import Breaker from '../../breaker/Breaker';
import SimpleMap from '../../simpleMap/SimpleMap';

import './Contact.css';

class Contact extends Component {
  render() {
    return (
      <main className="main">
        <Banner title="CONTACT US" />
        <section className="container map-contact">
          <div className="row">
            <div className="col s12 d-flex justify-content-center">
              <div className="map-wrapper">
                <SimpleMap lat={33.788128} lng={-117.837379} />
              </div>
            </div>
          </div>
        </section>
        <section className="container location">
          <div className="row">
            <div className="col s12 center">
              <h5>New York Styles Salon</h5>
              <a
                href="https://goo.gl/maps/SrR7Ju3YG8P2"
                target="_blank"
                rel="noopener noreferrer"
                className="black-text"
              >
                1519 E Chapman Ave
                <br />
                Orange, CA 92866
              </a>
              <br />
              <a href="tel:+17142881300" className="black-text">
                <u>(714) 288-1300</u>
              </a>
            </div>
          </div>
        </section>
        <section className="container">
          <div className="row">
            <hr />
          </div>
        </section>
      </main>
    );
  }
}

export default Contact;
