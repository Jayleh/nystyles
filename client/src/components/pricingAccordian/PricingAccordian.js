import M from 'materialize-css';
import _ from 'lodash';
import React, { Component, createRef } from 'react';

import './PricingAccordian.css';
import pricingInfo from './pricingInfo';

class Pricing extends Component {
  constructor() {
    super();

    this.collapsible = createRef();
  }

  componentDidMount() {
    M.Collapsible.init(this.collapsible.current);
  }

  renderSubServices(info) {
    return _.map(info, ({ subservice, price, detail }) => {
      return (
        <li key={subservice} className="d-flex justify-content-between">
          <div>{subservice}</div>
          <div className="right-align">{price}</div>
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
    return (
      <ul ref={this.collapsible} className="collapsible collapsible-pricing">
        {this.renderContent()}
      </ul>
    );
  }
}

export default Pricing;
