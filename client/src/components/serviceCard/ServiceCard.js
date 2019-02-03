import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router-dom';
import { scrollTopInstant } from '../scrollTopButton/scrollTop';

import './ServiceCard.css';

const ServiceCard = ({ imgSrc, imgAlt, title, price, subservices }) => {
  const renderSubservices = _.map(subservices, subservice => {
    return <li key={subservice}>{subservice}</li>;
  });

  return (
    <div className="col s12 m6 l3">
      <div className="pricing-wrap valign-wrapper">
        <div className="image-top">
          <img src={imgSrc} alt={imgAlt} className="circle" />
        </div>
        <div className="content-bottom">
          <h5>{title}</h5>
          <h6>{price}</h6>
          <ul>{renderSubservices}</ul>
        </div>
        <Link to="/services" className="btn" onClick={scrollTopInstant}>
          See More
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
