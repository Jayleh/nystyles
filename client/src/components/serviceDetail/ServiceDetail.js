import _ from 'lodash';
import React from 'react';
import serviceDetailContent from './serviceDetailContent';

const ServiceDetail = ({ serviceFocus }) => {
  const renderSubservicesImages = images => {
    return _.map(images, ({ imgSrc, imgAlt }) => {
      return <img src={imgSrc} alt={imgAlt} />;
    });
  };

  const renderSubservices = subservices => {
    return _.map(subservices, ({ subservice, price, description }) => {
      return (
        <li>
          <div className="d-flex justify-content-between">
            <h5>{subservice}</h5>
            <h5>{price}</h5>
          </div>
          <p>{description}</p>
        </li>
      );
    });
  };

  const renderContent = serviceFocus => {
    const serviceMatch = serviceDetailContent.find(
      item => item.service === serviceFocus
    );

    if (serviceMatch) {
      const { service, subservices, images } = serviceMatch;

      return (
        <React.Fragment>
          <h4>{service}</h4>
          <ul className="subservices">{renderSubservices(subservices)}</ul>
          <div className="subservices-gallery">
            {renderSubservicesImages(images)}
          </div>
        </React.Fragment>
      );
    }

    return <p>There is no content</p>;
  };

  return <div className="service-detail">{renderContent(serviceFocus)}</div>;
};

export default ServiceDetail;
