import M from 'materialize-css';
import _ from 'lodash';
import React, { Component, createRef } from 'react';

import './Slider.css';

class Slider extends Component {
  constructor(props) {
    super(props);

    this.slider = createRef();
  }

  componentDidMount() {
    M.Slider.init(this.slider.current, {
      indicators: true,
      duration: 2000,
      interval: 7000
    });
  }

  renderContent = content => {
    return _.map(content.content, ({ imgSrc, imgAlt }) => {
      return (
        <li key={imgAlt}>
          <img src={imgSrc} alt={imgAlt} />
        </li>
      );
    });
  };

  render() {
    const { content } = this.props;

    return (
      <div ref={this.slider} className="slider">
        <ul className="slides">{this.renderContent(content)}</ul>
      </div>
    );
  }
}

export default Slider;
