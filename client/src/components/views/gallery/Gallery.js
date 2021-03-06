import M from 'materialize-css';
import _ from 'lodash';
import Isotope from 'isotope-layout';
import imagesLoaded from 'imagesloaded';
import faker from 'faker';
import React, { Component, createRef } from 'react';
import Banner from '../../banner/Banner';
// import { filterButtons } from './galleryContent';

import './Gallery.css';

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.tabsRef = createRef();
    this.gridRef = createRef();
    this.allTabRef = createRef();
    this.hairTabRef = createRef();
    this.nailsTabRef = createRef();
    this.skinTabRef = createRef();
  }

  componentDidMount() {
    M.Tabs.init(this.tabsRef.current);

    this.configureGallery();
  }

  configureGallery = () => {
    const grid = this.gridRef.current;
    let isotope;

    imagesLoaded(grid, () => {
      isotope = new Isotope(grid, {
        itemSelector: '.grid-item',
        masonry: {
          columnWidth: '.grid-sizer'
        }
      });

      this.allTabRef.current.addEventListener('click', () => {
        isotope.arrange({ filter: '*' });
      });

      this.hairTabRef.current.addEventListener('click', () => {
        isotope.arrange({ filter: '.hair' });
      });

      this.nailsTabRef.current.addEventListener('click', () => {
        isotope.arrange({ filter: '.nails' });
      });

      this.skinTabRef.current.addEventListener('click', () => {
        isotope.arrange({ filter: '.skin' });
      });

      const imageBoxes = document.querySelectorAll('.materialboxed');
      M.Materialbox.init(imageBoxes);
    });
  };

  renderFilterTabs = () => {
    return (
      <ul
        ref={this.tabsRef}
        className="tabs tabs-filter d-flex justify-content-center"
      >
        <li className="tab">
          <a ref={this.allTabRef} className="active" href="#all">
            All
          </a>
        </li>
        <li className="tab">
          <a ref={this.hairTabRef} href="#hairstyle">
            Hair Styling
          </a>
        </li>
        <li className="tab">
          <a ref={this.nailsTabRef} href="#nailcare">
            Nail Care
          </a>
        </li>
        <li className="tab">
          <a ref={this.skinTabRef} href="#skincare">
            Skin Care
          </a>
        </li>
      </ul>
    );
  };

  renderContent = () => {
    const imageUrls = [];

    for (let i = 0; i < 21; i++) {
      imageUrls.push({ id: i, imageUrl: faker.image.image() });
    }

    return _.map(imageUrls, ({ id, imageUrl }) => {
      return (
        <div key={id} className="grid-item">
          <img src={imageUrl} alt="" className="materialboxed" />
        </div>
      );
    });
  };

  render() {
    return (
      <main className="main">
        <Banner title="OUR GALLERY" />
        <div className="container">
          <div className="row">{this.renderFilterTabs()}</div>
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
