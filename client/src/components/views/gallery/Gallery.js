import _ from 'lodash';
import Isotope from 'isotope-layout';
import imagesLoaded from 'imagesloaded';
import faker from 'faker';
import React, { Component, createRef } from 'react';
import Banner from '../../banner/Banner';

import './Gallery.css';

class Gallery extends Component {
  constructor() {
    super();

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
    });

    const goodButton = this.goodButtonRef;

    goodButton.current.addEventListener('click', () => {
      isotope.arrange({ filter: '.good' });
    });
  }

  renderContent = () => {
    const imageUrls = [];

    for (let i = 0; i < 21; i++) {
      imageUrls.push({ id: i, imageUrl: faker.image.image() });
    }

    return _.map(imageUrls, ({ id, imageUrl }) => {
      return (
        <div key={id} className="grid-item">
          <img src={imageUrl} alt="" />
        </div>
      );
    });
  };

  render() {
    return (
      <main className="main">
        <Banner title="GALLERY" />
        <div className="container">
          <div className="row">
            <button
              ref={this.goodButtonRef}
              className="btn btn-large waves-effect waves-light"
            >
              Good
            </button>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div ref={this.gridRef} className="grid">
              <div className="grid-sizer" />
              {this.renderContent()}
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Gallery;
