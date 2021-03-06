import _ from 'lodash';
import React, { Component } from 'react';
import openHours from './openHours';
import socialLinks from '../../links/socialLinks';
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
            className="white-text waves-effect light-effect"
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
            <div className="col s12 l6 info-footer">
              <h5 className="white-text">New York Styles Salon</h5>
              <p>
                Open Hours: 9:30am-7pm Mon-Fri
                <br />
                9am-7pm Sat &#124; Closed Sunday
              </p>
              <ul>
                <li className="white-text">
                  <a
                    href="https://goo.gl/maps/SrR7Ju3YG8P2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="white-text"
                  >
                    1519 E Chapman Ave
                    <br />
                    Orange, CA 92866
                  </a>
                </li>
                <br />
                <li className="white-text">
                  <a href="tel:+17142881300">
                    <u className="white-text">(714) 288-1300</u>
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
          <div className="container center">© 2019 New York Styles Salon</div>
        </div>
      </footer>
    );
  }
}

export default Footer;
