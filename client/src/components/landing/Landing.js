import React from 'react';
import Pricing from '../pricing/Pricing';

import './Landing.css';

const Landing = () => {
  return (
    <main className="main">
      <section className="row">
        <div className="parallax-box" />
      </section>
      <section className="container pricing">
        <div className="row">
          <div className="col s12">
            <Pricing />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Landing;
