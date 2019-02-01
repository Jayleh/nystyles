import Isotope from 'isotope-layout';
import imagesLoaded from 'imagesloaded';
import React, { Component, createRef } from 'react';
import Banner from '../../banner/Banner';

import './Gallery.css';

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.gridRef = createRef();
    this.goodButtonRef = createRef();
  }

  componentDidMount() {
    const grid = this.gridRef.current;
    let isotope;

    imagesLoaded(grid, () => {
      isotope = new Isotope(grid, {
        itemSelector: '.grid-item',
        masonry: {
          columnWidth: '.grid-sizer'
        }
      });

      this.goodButtonRef.current.addEventListener('click', () => {
        isotope.arrange({ filter: '.good' });
      });
    });
  }

  render() {
    console.log(process.env.REACT_APP_UNSPLASH_CLIENT_ID);
    return (
      <main className="main">
        <Banner title="GALLERY" />
        <div className="container">
          <div className="row">
            <button
              ref={this.goodButtonRef}
              className="btn btn-large waves-effect waves-light good-button"
            >
              Good
            </button>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div ref={this.gridRef} className="grid">
              <div className="grid-sizer" />
              <div className="grid-item good">
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/orange-tree.jpg"
                  alt=""
                />
              </div>
              <div className="grid-item">
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/submerged.jpg"
                  alt=""
                />
              </div>
              <div className="grid-item">
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/look-out.jpg"
                  alt=""
                />
              </div>
              <div className="grid-item good">
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/one-world-trade.jpg"
                  alt=""
                />
              </div>
              <div className="grid-item">
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/drizzle.jpg"
                  alt=""
                />
              </div>
              <div className="grid-item">
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/cat-nose.jpg"
                  alt=""
                />
              </div>
              <div className="grid-item good">
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/contrail.jpg"
                  alt=""
                />
              </div>
              <div className="grid-item">
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/golden-hour.jpg"
                  alt=""
                />
              </div>
              <div className="grid-item">
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/flight-formation.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Gallery;
