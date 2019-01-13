import M from 'materialize-css';
import _ from 'lodash';
import React, { Component } from 'react';
import headerLinks from './headerLinks';

class Header extends Component {
  state = {};

  componentDidMount() {
    const sidenav = document.querySelector('.sidenav');
    M.Sidenav.init(sidenav);
  }

  renderLinks = () => {
    return _.map(headerLinks, ({ link, label }) => {
      return (
        <li key={label}>
          <a href={link}>{label}</a>
        </li>
      );
    });
  };

  render() {
    return (
      <header>
        <nav>
          <div className="nav-wrapper">
            <div className="container">
              <div className="row">
                <div className="col s12">
                  <a href="#!" className="brand-logo">
                    Logo
                  </a>
                  <a
                    href="#"
                    data-target="mobile-demo"
                    className="sidenav-trigger"
                  >
                    <i className="material-icons">menu</i>
                  </a>
                  <ul className="right hide-on-med-and-down">
                    {this.renderLinks()}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
          {this.renderLinks()}
        </ul>
      </header>
    );
  }
}

export default Header;
