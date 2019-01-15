import M from 'materialize-css';
import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import headerLinks from './headerLinks';
import socialLinks from '../links/socialLinks';
import './Header.css';

class Header extends Component {
  state = { navbarSticky: '' };

  componentDidMount() {
    const sidenav = document.querySelector('.sidenav');
    M.Sidenav.init(sidenav);

    window.addEventListener('scroll', () => {
      const navbar = document.querySelector('.nav');
      let sticky = navbar.offsetTop;
      // console.log(window.pageYOffset);
      // console.log(sticky);

      if (window.pageYOffset > sticky) {
        this.setState({ navbarSticky: ' sticky' });
      } else {
        this.setState({ navbarSticky: '' });
      }
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
        <li key={label}>
          <Link to={link}>{label}</Link>
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
                  <div className="col s12 m6">
                    <div className="widget-text">
                      <div className="valign-wrapper white-text">
                        <i className="material-icons">phone</i>
                        (714) 288-1300
                      </div>
                      <div className="valign-wrapper white-text">
                        <i className="material-icons">place</i>
                        1519 E Chapman Ave, Orange, CA 92866
                      </div>
                    </div>
                  </div>
                  <div className="col s12 m6">
                    <div className="widget-social white-text">
                      <div>Open Hours: 10AM-7PM Mon-Sat 10AM-5PM Sun</div>
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
                  <Link to="/" className="brand-logo">
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
