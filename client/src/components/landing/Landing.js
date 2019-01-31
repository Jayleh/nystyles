import M from 'materialize-css';
import VanillaTilt from 'vanilla-tilt';
import _ from 'lodash';
import React, { Component } from 'react';
import Slider from '../slider/Slider';
import Carousel from '../carousel/Carousel';
import ServiceCard from '../serviceCard/ServiceCard';
import PricingAccordian from '../pricingAccordian/PricingAccordian';
import Breaker from '../breaker/Breaker';
import SimpleMap from '../simpleMap/SimpleMap';
import { heroImages, galleryImages, testimonials } from './landingContent';
import bgParallax from '../../assets/images/bg-parallax.jpg';
import girl from '../../assets/images/girl.jpg';
import services from '../serviceCard/services';

import './Landing.css';

class Landing extends Component {
  componentDidMount() {
    const slider = document.querySelector('.slider');
    M.Slider.init(slider, {
      indicators: true,
      duration: 2000,
      interval: 7000
    });

    const carouselHero = document.querySelector(
      '.carousel-hero .carousel-slider'
    );
    M.Carousel.init(carouselHero, { fullWidth: true, indicators: true });

    const carouselServices = document.querySelector(
      '.carousel-services .carousel-slider'
    );
    M.Carousel.init(carouselServices, { fullWidth: true });

    const carouselReviews = document.querySelector(
      '.carousel-reviews .carousel-slider'
    );
    M.Carousel.init(carouselReviews, { fullWidth: true, indicators: true });

    const parallax = document.querySelectorAll('.parallax');
    M.Parallax.init(parallax);

    const collapsible = document.querySelector('.collapsible');
    M.Collapsible.init(collapsible);

    const imageBoxes = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(imageBoxes);

    const tiltImage = document.querySelector('.tilt-image');
    VanillaTilt.init(tiltImage, {
      max: 15,
      scale: 1.05,
      glare: true,
      'max-glare': 0.8
    });
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
        <div key={imgAlt} className="col s6 l3 d-flex justify-content-center">
          <img className="materialboxed" src={imgSrc} alt={imgAlt} />
        </div>
      );
    });
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
            <div className="col s12 center">
              <h4 className="playfair-text">You will look amazing!</h4>
              <h5>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </h5>
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
            <div className="col s12">
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
          <div className="row">{this.renderGalleryImages()}</div>
        </section>
        <section className="container appointment">
          <div className="row">
            <div className="col s12 m6 center">
              <div className="tilt-image" data-tilt>
                <img src={girl} alt="girl" />
              </div>
            </div>
            <div className="col s12 m6">
              <Breaker topic="Spa Center" subtopic="Appointment" />
              <div className="center">
                <h4>Want to make a booking or have a question?</h4>
                <a
                  href="tel:+17142881300"
                  className="btn waves-effect waves-light"
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
            <article className="carousel-reviews">
              <Carousel content={testimonials} />
            </article>
            <article className="parallax-container">
              <div className="parallax">
                <img src={bgParallax} alt="bgParallax" />
              </div>
            </article>
          </div>
        </section>
        <section className="container map">
          <div className="row">
            <div className="col s12">
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
