import $ from 'jquery';
import React, { Component } from 'react';
import { scrollTopCubic } from './scrollTop';

import './ScrollTopButton.css';

class ScrollTopButton extends Component {
  state = { display: 'none' };

  componentDidMount() {
    // show/hide scroll top button
    window.addEventListener('scroll', () => {
      const topBarHeight = document.querySelector('.top-bar').clientHeight;
      const navBarHeight = document.querySelector('.nav').clientHeight;
      const headerHeight = topBarHeight + navBarHeight;

      try {
        if (window.scrollY > headerHeight) {
          $('.scroll-top-button').fadeIn();
        }
        if (window.scrollY < headerHeight) {
          $('.scroll-top-button').fadeOut();
        }
      } catch {}
    });
  }
  render() {
    return (
      <div className="fixed-action-btn scroll-top-button">
        <button className="btn-floating" onClick={scrollTopCubic}>
          <i className="large material-icons">arrow_upward</i>
        </button>
      </div>
    );
  }
}

export default ScrollTopButton;
