import 'babel-polyfill';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from '../../styles/AboutScreen.css';


// import {handleItemClick, getItemContent} from './aboutFunctions.js';

export class AboutMeItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    // this.handleItemClick = handleItemClick.bind(this);
    // this.getItemContent = getItemContent.bind(this);
  }

  render() {
    return (
      <div className={styles.rowItem}>
        <h1>{this.props.title}</h1>
        <p>{this.props.content}</p>
      </div>
    );
  }
}

AboutMeItem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
