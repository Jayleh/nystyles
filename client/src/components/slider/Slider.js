import _ from 'lodash';
import React from 'react';

import './Slider.css';

const Slider = ({ content }) => {
  const renderContent = _.map(content.content, ({ imgSrc, imgAlt }) => {
    return (
      <li key={imgAlt}>
        <img src={imgSrc} alt={imgAlt} />
      </li>
    );
  });
  return (
    <div className="slider">
      <ul className="slides">{renderContent}</ul>
    </div>
  );
};

export default Slider;
