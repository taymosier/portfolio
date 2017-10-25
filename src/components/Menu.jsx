import React, { Component } from 'react';
import 'babel-polyfill';
import styles from '../styles/menu.css';

import { passActiveTitle } from './menuFunctions';

import { MenuItem } from './MenuItem';

export class Menu extends Component {
  constructor(props) {
    super(props);
    this.passActiveTitle = passActiveTitle.bind(this);
  }

  render() {
    const pages = ['Home', 'About Me', 'Skills', 'Portfolio', 'Contact Me', 'Testing'];
    const listPages = pages.map(page =>
      (
        <MenuItem
          title={page}
          key={page}
          passItemSelectionToMenu={this.passActiveTitle}
        />
      ));
    return (
      <div className={styles.menu}>
        <ul>
          {listPages}
        </ul>
      </div>
    );
  }
}
