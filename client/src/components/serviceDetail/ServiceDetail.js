import _ from 'lodash';
import React from 'react';
import serviceDetailContent from './serviceDetailContent';

import './ServiceDetail.css';

const ServiceDetail = ({ serviceFocus }) => {
  const renderServiceImages = images => {
    return _.map(images, ({ imgSrc, imgAlt }) => {
      return (
        <div key={Math.random()} className="col s6 m3">
          <img src={imgSrc} alt={imgAlt} />
        </div>
      );
    });
  };

  const renderSubservices = subservices => {
    return _.map(subservices, ({ subservice, price, detail }) => {
      return (
        <li key={subservice}>
          <div>
            {subservice} &mdash; {price}
          </div>
          <div>{detail}</div>
        </li>
      );
    });
  };

  const renderContent = serviceFocus => {
    const serviceMatch = serviceDetailContent.find(
      item => item.service === serviceFocus
    );

    if (serviceMatch) {
      const {
        service,
        description,
        subservices,
        subDescription,
        images
      } = serviceMatch;

      return (
        <React.Fragment>
          <div className="subservice-info">
            <h4>{service}</h4>
            <p>{description}</p>
            <ul className="subservices">{renderSubservices(subservices)}</ul>
            <p>{subDescription}</p>
          </div>
          <div className="service-gallery">{renderServiceImages(images)}</div>
        </React.Fragment>
      );
    }

    return <p>There is no content</p>;
  };

  return <div className="service-detail">{renderContent(serviceFocus)}</div>;
};

export default ServiceDetail;
