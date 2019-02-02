import M from 'materialize-css';
import _ from 'lodash';
import Isotope from 'isotope-layout';
import imagesLoaded from 'imagesloaded';
import faker from 'faker';
import React, { Component, createRef } from 'react';
import Banner from '../../banner/Banner';
import { filterButtons } from './galleryContent';

import './Gallery.css';

class Gallery extends Component {
  constructor() {
    super();

    this.tabsRef = createRef();
    this.gridRef = createRef();
    this.showAllTabRef = createRef();
    this.hairTabRef = createRef();
    this.nailsTabRef = createRef();
  }

  componentDidMount() {
    M.Tabs.init(this.tabsRef.current);

    const grid = this.gridRef.current;
    let isotope;

    imagesLoaded(grid, () => {
      isotope = new Isotope(grid, {
        itemSelector: '.grid-item',
        masonry: {
          columnWidth: '.grid-sizer'
        }
      });

      this.showAllTabRef.current.addEventListener('click', () => {
        isotope.arrange({ filter: '*' });
      });

      this.hairTabRef.current.addEventListener('click', () => {
        isotope.arrange({ filter: '.hair' });
      });

      this.nailsTabRef.current.addEventListener('click', () => {
        isotope.arrange({ filter: '.hair' });
      });

      const imageBoxes = document.querySelectorAll('.materialboxed');
      M.Materialbox.init(imageBoxes);
    });
  }

  renderFilterTabs = () => {
    return (
      <ul ref={this.tabsRef} class="tabs tabs-filter">
        <li class="tab col s3">
          <a ref={this.showAllTabRef} className="active" href="#all">
            All
          </a>
        </li>
        <li class="tab col s3">
          <a ref={this.hairTabRef} href="#hair">
            Hair
          </a>
        </li>
        <li class="tab col s3">
          <a ref={this.nailsTabRef} href="#nails">
            Nails
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
        <Banner title="GALLERY OF STYLES" />
        <div className="container">
          <div className="row">
            <div class="col s12">{this.renderFilterTabs()}</div>
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
