import M from 'materialize-css';
import _ from 'lodash';
import React, { Component } from 'react';

import pricingInfo from './pricingInfo';

class Pricing extends Component {
  componentDidMount() {
    const collapsible = document.querySelector('.collapsible');
    M.Collapsible.init(collapsible);
  }

  renderSubServices(info) {
    return _.map(info, ({ subservice, price, detail }) => {
      return (
        <li key={subservice}>
          <h5>{`${subservice} - $${price}`}</h5>
        </li>
      );
    });
  }

  renderContent() {
    return _.map(pricingInfo, ({ service, info }) => {
      return (
        <li key={service}>
          <div className="collapsible-header">{service}</div>
          <div className="collapsible-body">
            <ul>{this.renderSubServices(info)}</ul>
          </div>
        </li>
      );
    });
  }

  render() {
    return <ul className="collapsible">{this.renderContent()}</ul>;
  }
}

export default Pricing;