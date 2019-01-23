import React from 'react';
import Banner from '../banner/Banner';
import PricesTable from './PricesTable';

import './Prices.css';

const Prices = () => {
  return (
    <main>
      <Banner title="CHECK OUR PRICES" />
      <div className="container">
        <div className="row">
          <div className="col s12 l6">
            <PricesTable header="Hair" />
          </div>
          <div className="col s12 l6">
            <PricesTable header="Nails" />
          </div>
        </div>
        <div className="row">
          <div className="col s12 l6">
            <PricesTable header="Acrylic Nails" />
          </div>
          <div className="col s12 l6">
            <PricesTable header="Facials & Waxing" />
          </div>
        </div>
        <div className="row">
          <div className="col s12 l6">
            <PricesTable header="Facial Therapies" />
          </div>
          <div className="col s12 l6">
            <PricesTable header="Body Waxing" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Prices;
