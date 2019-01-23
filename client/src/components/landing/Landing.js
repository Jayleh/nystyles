import M from 'materialize-css';
import React, { Component } from 'react';
import Pricing from '../pricing/Pricing';
import Carousel from '../carousel/Carousel';

import './Landing.css';

class Landing extends Component {
  componentDidMount() {
    const carousel = document.querySelector('.carousel');
    M.Carousel.init(carousel, { fullWidth: true });
  }

  render() {
    return (
      <main className="main">
        <section className="row">
          <div className="parallax-box" />
        </section>
        <section className="container">
          <div className="row center">
            <h5>Welcome to</h5>
            <h4>New York Styles Salon & Spa</h4>
          </div>
        </section>
        <section className="container">
          <div className="row">
            <Carousel />
          </div>
        </section>
        <section className="container pricing">
          <div className="row">
            <div className="col s12">
              <Pricing />
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default Landing;
