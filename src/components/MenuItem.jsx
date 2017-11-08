import PropTypes from 'prop-types';
import React, { Component } from 'react';
import 'babel-polyfill';

import { getActiveScreenName, handleMenuItemClick } from './menuFunctions';

export class MenuItem extends Component {
  constructor(props) {
    super(props);
    this.handleMenuItemClick = handleMenuItemClick.bind(this);
    this.getActiveScreenName = getActiveScreenName.bind(this);
  }

  render() {
    return (
      <li
        className="menuitem"
        onClick={this.handleMenuItemClick}
        value={this.props.title}
      >
        {this.props.title}
      </li>
    );
  }
}

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
};
