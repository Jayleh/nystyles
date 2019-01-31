import _ from 'lodash';
import React from 'react';

import './Carousel.css';

const Carousel = ({ content }) => {
  const renderContent = () => {
    if (content.type === 'hero') {
      return _.map(content.content, ({ imgSrc, imgAlt }) => {
        return (
          <div key={imgAlt} className="carousel-item">
            <img src={imgSrc} alt={imgAlt} />
          </div>
        );
      });
    }

    if (content.type === 'services') {
      return _.map(content.content, ({ imgSrc, imgAlt, title, price }) => {
        return (
          <div
            key={title}
            className="carousel-item valign-wrapper flex-column justify-content-center"
          >
            <img src={imgSrc} alt={imgAlt} className="circle" />
            <div>{title}</div>
            <div>{price}</div>
          </div>
        );
      });
    }

    if (content.type === 'testimonials') {
      return _.map(content.content, ({ review, name, location }) => {
        return (
          <div
            key={name}
            className="carousel-item transparent valign-wrapper flex-column justify-content-center"
            href="#one!"
          >
            <div className="review-icon">"</div>
            <p className="center">{review}</p>
            <div>{name}</div>
            <div>{location}</div>
          </div>
        );
      });
    }
  };

  return <div className="carousel carousel-slider">{renderContent()}</div>;
};

export default Carousel;
