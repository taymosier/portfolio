import 'babel-polyfill';
import React, { Component } from 'react';
import './styles/main.css';

import { Menu } from './components/Menu';
import { ActiveScreen } from './ActiveScreen';

import { setNewActiveScreenState } from './components/menuFunctions';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.setNewActiveScreenState = setNewActiveScreenState.bind(this);
    this.state = {
      screen: 'HomeScreen',
    };
  }

  render() {
    return (
      <div className="app">
        <Menu passScreenChoiceToApp={this.setNewActiveScreenState} />
        <ActiveScreen
          passScreenChoiceToApp={this.setNewActiveScreenState}
          activeScreen={this.state.screen}
        />
      </div>
    );
  }
}
