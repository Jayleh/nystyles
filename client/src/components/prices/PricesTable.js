import _ from 'lodash';
import React from 'react';
import pricingInfo from '../pricingAccordian/pricingInfo';

const PricesTable = ({ header }) => {
  const renderSubServices = info => {
    return _.map(info, ({ subservice, price, detail }) => {
      return (
        <li
          key={subservice}
          className="subservice d-flex justify-content-between"
        >
          <div>{subservice}</div>
          <div>{price}</div>
        </li>
      );
    });
  };

  const renderPricingTable = header => {
    const serviceMatch = pricingInfo.filter(info => info.service === header);
    const { title, info } = serviceMatch[0];

    return (
      <div className="price-table">
        <h4>{title}</h4>
        <ul>{renderSubServices(info)}</ul>
      </div>
    );
  };

  return renderPricingTable(header);
};

export default PricesTable;
