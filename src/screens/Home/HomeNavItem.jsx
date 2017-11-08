import 'babel-polyfill';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { getLinkedComponentName, handleItemClick } from './homeFunctions';


export class HomeNavItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };

    this.handleItemClick = handleItemClick.bind(this);
    this.getLinkedComponentName = getLinkedComponentName.bind(this);
  }

  render() {
    return (
      <div className="homeContentRowItem" value={this.state.title} >
        <button onClick={this.handleItemClick}>{this.props.title}</button>
      </div>
    );
  }
}

HomeNavItem.propTypes = {
  title: PropTypes.string.isRequired,
};
