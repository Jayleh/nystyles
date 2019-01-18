import React from 'react';
import pricingInfo from '../pricing/pricingInfo';

const Prices = () => {
  const renderPricingTable = (header, service, price) => {
    return (
      <React.Fragment>
        <h4>{header}</h4>
        <ul>
          <li className="d-flex justify-content-between">
            <div>{service}</div>
            <div>{price}</div>
          </li>
        </ul>
      </React.Fragment>
    );
  };

  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col s12 l6">
            <h4>Title</h4>
            <ul>
              <li className="d-flex justify-content-between">
                <div>Service</div>
                <div>Price</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Prices;
