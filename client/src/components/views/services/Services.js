import M from 'materialize-css';
import _ from 'lodash';
import React, { Component, createRef } from 'react';
import Banner from '../../banner/Banner';
import ServiceDetail from '../../serviceDetail/ServiceDetail';
import servicesContent from './servicesContent';

class Services extends Component {
  constructor() {
    super();

    this.state = { serviceFocus: 'Main Service' };

    this.collapsible = createRef();
  }

  componentDidMount() {
    M.Collapsible.init(this.collapsible.current);
  }

  renderCollection() {
    return _.map(servicesContent, ({ service, price }) => {
      return (
        <a
          key={service}
          href="#!"
          className="collection-item d-flex justify-content-between"
          onClick={() => this.setState({ serviceFocus: service })}
        >
          <div className="collection-item-service">{service}</div>
          <div className="collection-item-price">{price}</div>
        </a>
      );
    });
  }

  renderContent() {
    return (
      <li>
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
        <section className="container">
          <div className="row">
            <div className="col s12 l4">
              <ul
                ref={this.collapsible}
                className="collapsible collapsible-services"
              >
                {this.renderContent()}
              </ul>
            </div>
            <div className="col s12 l8">
              <ServiceDetail serviceFocus={this.state.serviceFocus} />
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default Services;
