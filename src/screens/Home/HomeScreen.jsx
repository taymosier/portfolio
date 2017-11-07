import React, { Component } from 'react';
import 'babel-polyfill';
import 'styles/HomeScreen.css';
import { HomeNavItem } from './HomeNavItem';
import { passActiveTitle } from './homeFunctions';


export class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.passActiveTitle = passActiveTitle.bind(this);
  }

  render() {
    const firstRow = ['About Me', 'Skills'];
    const secondRow = ['Portfolio', 'Contact'];
    const listFirstRow = firstRow.map((item) => {
      return (<HomeNavItem
        title={item}
        key={item}
        passLinkedComponentToHomeScreen={this.passActiveTitle}
      />);
    });
    const listSecondRow = secondRow.map((item) => {
      return (<HomeNavItem
        title={item}
        key={item}
        passLinkedComponentToHomeScreen={this.passActiveTitle}
      />);
    });
    return (
      <div>
        <div className="homeContent">

          <div className="header">
            Welcome
          </div>

          <div className="homeContentRow">
            {listFirstRow}
          </div>

          <br />

          <div className="homeContentRow">
            {listSecondRow}
          </div>

        </div>
      </div>
    );
  }
}
