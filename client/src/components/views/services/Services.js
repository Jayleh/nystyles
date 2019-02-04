import M from 'materialize-css';
import VanillaTilt from 'vanilla-tilt';
import _ from 'lodash';
import React, { Component, createRef } from 'react';
import { isMobile } from 'react-device-detect';
import Banner from '../../banner/Banner';
import Breaker from '../../breaker/Breaker';
import ServiceDetail from '../../serviceDetail/ServiceDetail';
import servicesContent from './servicesContent';
import girl from '../../../assets/images/girl.jpg';

import './Services.css';

class Services extends Component {
  constructor(props) {
    super(props);

    this.state = { serviceFocus: 'Hair Styling' };

    this.collapsible = createRef();
    this.tiltImage = createRef();
  }

  componentDidMount() {
    M.Collapsible.init(this.collapsible.current);

    VanillaTilt.init(this.tiltImage.current, {
      max: 15,
      scale: 1.05,
      glare: true,
      'max-glare': 0.8
    });
  }

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

  renderCollection() {
    return _.map(servicesContent, ({ service, price }) => {
      return (
        <a
          key={service}
          href="#!"
          className="collection-item"
          onClick={() => this.setState({ serviceFocus: service })}
        >
          {service}
        </a>
      );
    });
  }

  renderContent() {
    return (
      <li className="active">
        <div className="collapsible-header">
          <i className="material-icons">whatshot</i>Hot Stuff
        </div>
        <div className="collapsible-body">
          <span>
            <div className="collection">{this.renderCollection()}</div>
          </span>
        </div>
      </li>
    );
  }

  render() {
    return (
      <main className="main">
        <Banner title="SERVICES" />
        <section className="container services">
          <div className="row">
            <div className="col s12 l3">
              <ul
                ref={this.collapsible}
                className="collapsible collapsible-services"
              >
                {this.renderContent()}
              </ul>
            </div>
            <div className="col s12 l9">
              <ServiceDetail serviceFocus={this.state.serviceFocus} />
            </div>
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
      </main>
    );
  }
}

export default Services;
