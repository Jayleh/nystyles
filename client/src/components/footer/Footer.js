import _ from 'lodash';
import React, { Component } from 'react';
import openHours from './openHours';
import socialLinks from '../links/socialLinks';
import './Footer.css';

class Footer extends Component {
  renderOpenHours = () => {
    return _.map(openHours, ({ day, hours }) => {
      return (
        <li key={day} className="black-text d-flex justify-content-between">
          <div>{day}</div>
          <div>{hours}</div>
        </li>
      );
    });
  };

  renderSocialLinks = () => {
    return _.map(socialLinks, ({ link, icon }) => {
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
  };

  render() {
    return (
      <footer className="page-footer">
        <div className="container">
          <div className="row">
            <div className="col s12 l6 center">
              <h5 className="white-text">New York Styles Salon</h5>
              <p>
                Open Hours: 10am-7pm Mon-Sat
                <br />
                10am-5pm Sun
              </p>
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
            <div className="col s12 l4 offset-l2">
              <ul className="social-links-footer">
                {this.renderSocialLinks()}
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container center">
            © 2019 New York Styles Salon
            {/* <a className="grey-text text-lighten-4 right" href="#!">
              More Links
            </a> */}
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
