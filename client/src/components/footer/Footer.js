import _ from 'lodash';
import React, { Component } from 'react';
import socialLinks from '../links/socialLinks';
import './Footer.css';

class Footer extends Component {
  renderSocialLinks = () =>
    _.map(socialLinks, ({ link, icon }) => {
      return (
        <li key={icon}>
          <a
            className="grey-text text-lighten-3"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className={`fab ${icon}`} />
          </a>
        </li>
      );
    });

  render() {
    return (
      <footer className="page-footer">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">New York Styles Salon</h5>
              <ul>
                <li className="grey-text text-lighten-4">1519 E Chapman Ave</li>
                <li className="grey-text text-lighten-4">Orange, CA 92866</li>
                <li className="grey-text text-lighten-4">
                  <a href="tel:+17142881300">
                    <u className="grey-text text-lighten-4">(714) 288-1300</u>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col l4 offset-l2 s12">
              <ul className="social-links-footer">
                {this.renderSocialLinks()}
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            © 2019 New York Styles Salon
            <a className="grey-text text-lighten-4 right" href="#!">
              More Links
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
