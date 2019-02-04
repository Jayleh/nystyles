import M from 'materialize-css';
import VanillaTilt from 'vanilla-tilt';
import _ from 'lodash';
import React, { Component, createRef } from 'react';
import { isMobile } from 'react-device-detect';

import Slider from '../../slider/Slider';
import Carousel from '../../carousel/Carousel';
import ServiceCard from '../../serviceCard/ServiceCard';
import PricingAccordian from '../../pricingAccordian/PricingAccordian';
import Breaker from '../../breaker/Breaker';
import SimpleMap from '../../simpleMap/SimpleMap';

import { heroImages, galleryImages, testimonials } from './landingContent';
import services from '../../serviceCard/services';
import bgParallax from '../../../assets/images/bg-parallax.jpg';
import girl from '../../../assets/images/girl.jpg';

import './Landing.css';

class Landing extends Component {
  constructor(props) {
    super(props);

    this.collapsible = createRef();
    this.materialboxed = createRef();
    this.tiltImage = createRef();
    this.parallax = createRef();
    this.carouselReviews = createRef();
  }

  componentDidMount() {
    M.Parallax.init(this.parallax.current);

    // const imageBoxes = document.querySelectorAll('.materialboxed');
    // M.Materialbox.init(imageBoxes);

    VanillaTilt.init(this.tiltImage.current, {
      max: 15,
      scale: 1.05,
      glare: true,
      'max-glare': 0.8
    });

    const carouselReviews = document.querySelector(
      '.carousel-reviews .carousel-slider'
    );
    M.Carousel.init(carouselReviews, { fullWidth: true, indicators: true });
  }

  renderServiceCards = () => {
    return _.map(services, ({ imgSrc, imgAlt, title, price, subservices }) => {
      return (
        <ServiceCard
          key={title}
          imgSrc={imgSrc}
          imgAlt={imgAlt}
          title={title}
          price={price}
          subservices={subservices}
        />
      );
    });
  };

  renderGalleryImages = () => {
    return _.map(galleryImages, ({ imgSrc, imgAlt }) => {
      return (
        <div key={imgAlt} className="col s6 l3">
          <img src={imgSrc} alt={imgAlt} />
        </div>
      );
    });
  };

  renderTiltImage = () => {
    if (isMobile) {
      return (
        <div className="tilt-image">
          <img src={girl} alt="girl" />
        </div>
      );
    }

    return (
      <div ref={this.tiltImage} className="tilt-image">
        <img src={girl} alt="girl" />
      </div>
    );
  };

  render() {
    return (
      <main className="main">
        <section>
          <div className="row">
            <Slider content={heroImages} />
          </div>
        </section>
        <section className="container introduction">
          <div className="row">
            <div className="col s12">
              <Breaker
                topic="Welcome to"
                subtopic="New York Styles Salon & Spa"
              />
            </div>
          </div>
          <div className="row">
            <div className="col s12 d-flex justify-content-center">
              <div className="introduction-hook center">
                <h4 className="playfair-text">You will look amazing!</h4>
                <h5>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </h5>
              </div>
            </div>
          </div>
        </section>
        <section className="container">
          <div className="row">{this.renderServiceCards()}</div>
        </section>
        <section className="container pricing">
          <div className="row">
            <div className="col s12">
              <Breaker topic="Best Deals" subtopic="Our Pricing" />
            </div>
          </div>
          <div className="row">
            <div className="col s12 d-flex justify-content-center">
              <PricingAccordian />
            </div>
          </div>
        </section>
        <section className="gallery">
          <div className="row">
            <div className="col s12">
              <Breaker topic="Spa Center" subtopic="Style Gallery" />
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="gallery-wrapper">{this.renderGalleryImages()}</div>
          </div>
        </section>
        <section className="container appointment">
          <div className="row">
            <div className="col s12 m6 d-flex justify-content-center">
              {this.renderTiltImage()}
            </div>
            <div className="col s12 m6">
              <Breaker topic="Spa Center" subtopic="Appointment" />
              <div className="center">
                <h4>Want to make a booking or have a question?</h4>
                <a
                  href="tel:+17142881300"
                  className="btn btn-large waves-effect waves-light call-store-button"
                >
                  <i className="material-icons left">phone</i>
                  Call Store
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="reviews">
          <div className="row">
            <article className="carousel-reviews d-flex justify-content-center">
              <Carousel content={testimonials} />
            </article>
            <article className="parallax-container">
              <div ref={this.parallax} className="parallax">
                <img src={bgParallax} alt="bgParallax" />
              </div>
            </article>
          </div>
        </section>
        <section className="container map-landing">
          <div className="row">
            <div className="col s12 d-flex justify-content-center">
              <div className="map-wrapper">
                <SimpleMap lat={33.788128} lng={-117.837379} />
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default Landing;
