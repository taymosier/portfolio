import React, { Component } from 'react';
import 'babel-polyfill';
import '../styles/menu.css';

import { passActiveTitle, enableButton } from './menuFunctions';

import { MenuItem } from './MenuItem';

export class Menu extends Component {
  constructor(props) {
    super(props);
    this.passActiveTitle = passActiveTitle.bind(this);
    this.enableButton = enableButton.bind(this);
  }

  render() {
    const pages = ['Home', 'About Me', 'Skills', 'Portfolio', 'Contact'];
    const listPages = pages.map(page =>
      (
        <MenuItem
          title={page}
          key={page}
          passItemSelectionToMenu={this.passActiveTitle}
        />
      ));
    return (
      <div id="menu" onClick={this.enableButton}>
        <div>
          <ul id="menuList">
            {listPages}
          </ul>
        </div>
      </div>
    );
  }
}
