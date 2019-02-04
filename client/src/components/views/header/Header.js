import M from 'materialize-css';
import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { scrollTopInstant } from '../../scrollTopButton/scrollTop';
import headerLinks from './headerLinks';
import socialLinks from '../../links/socialLinks';
import './Header.css';

class Header extends Component {
  state = { navbarSticky: '', mainPaddingTop: '' };

  componentDidMount() {
    const sidenav = document.querySelector('.sidenav');
    M.Sidenav.init(sidenav);

    // sticky navbar on scroll
    window.addEventListener('scroll', () => {
      const topBarHeight = document.querySelector('.top-bar').clientHeight;
      const navBarHeight = document.querySelector('.nav').clientHeight;
      const main = document.querySelector('.main');

      try {
        if (window.scrollY > topBarHeight) {
          this.setState({ navbarSticky: ' sticky' });
          main.style['padding-top'] = `${navBarHeight}px`;
        }
        if (window.scrollY < topBarHeight) {
          this.setState({ navbarSticky: '' });
          main.style['padding-top'] = '0px';
        }
      } catch {}
    });
  }

  renderSocialLinks = () => {
    return _.map(socialLinks, ({ link, icon }) => {
      return (
        <a key={icon} href={link} target="_blank" rel="noopener noreferrer">
          <i className={`fab ${icon} white-text`} />
        </a>
      );
    });
  };

  renderLinks = () => {
    return _.map(headerLinks, ({ link, label }) => {
      return (
        <li key={label} className="header-link">
          <Link to={link} onClick={scrollTopInstant}>
            {label}
          </Link>
        </li>
      );
    });
  };

  render() {
    return (
      <header className="header">
        <div className="top-bar">
          <div className="container">
            <div className="row mb0">
              <div className="col s12 widget-container">
                <div className="row mb0">
                  <div className="col s12 l6">
                    <div className="widget-text">
                      <div className="valign-wrapper white-text">
                        <i className="material-icons">phone</i>
                        <a href="tel:+17142881300">
                          <u className="white-text">(714) 288-1300</u>
                        </a>
                      </div>
                      <div className="valign-wrapper white-text">
                        <i className="material-icons">place</i>
                        <a
                          href="https://goo.gl/maps/SrR7Ju3YG8P2"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="white-text"
                        >
                          1519 E Chapman Ave, Orange, CA 92866
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col s12 l6">
                    <div className="widget-social white-text">
                      <div>
                        Open Hours: 10am-7pm Mon-Sat &#124; 10am-5pm Sun
                      </div>
                      <div className="social-links-top-bar">
                        {this.renderSocialLinks()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav className={`nav${this.state.navbarSticky}`}>
          <div className="nav-wrapper">
            <div className="container">
              <div className="row">
                <div className="col s12">
                  <Link to="/" className="brand-logo playfair-text">
                    NYSS
                  </Link>
                  <button data-target="mobile-nav" className="sidenav-trigger">
                    <i className="material-icons">menu</i>
                  </button>
                  <ul className="right hide-on-med-and-down">
                    {this.renderLinks()}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <ul className="sidenav" id="mobile-nav">
          {this.renderLinks()}
        </ul>
      </header>
    );
  }
}

export default Header;
