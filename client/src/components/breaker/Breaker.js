import React from 'react';
import lineBreak from './images/line-break1.svg';

import './Breaker.css';

const Breaker = ({ topic, subtopic }) => {
  return (
    <div className="heading center">
      <h5>{topic}</h5>
      <h4>{subtopic}</h4>
      <img src={lineBreak} alt="line break" />
    </div>
  );
};

export default Breaker;
