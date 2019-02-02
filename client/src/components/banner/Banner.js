import React from 'react';
import lineBreak from '../breaker/images/line-break1.svg';

import './Banner.css';

const Banner = ({ title }) => {
  return (
    <div className="container banner">
      <div className="row valign-wrapper flex-column justify-content-center">
        <h4>{title}</h4>
        <img src={lineBreak} alt="line break" />
      </div>
    </div>
  );
};

export default Banner;
