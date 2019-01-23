import React from 'react';

const Banner = ({ title }) => {
  return (
    <div className="container">
      <div className="row center">
        <h4 className="banner-title">{title}</h4>
      </div>
    </div>
  );
};

export default Banner;
