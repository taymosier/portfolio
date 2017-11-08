import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { HomeScreen } from './screens/Home/HomeScreen';
import { AboutMeScreen } from './screens/About/AboutMeScreen';
import { SkillsScreen } from './screens/Skills/SkillsScreen';
import { ProjectsScreen } from './screens/Projects/ProjectsScreen';
import { ContactMeScreen } from './screens/Contact/ContactMeScreen';
import { TestingScreen } from './screens/Testing/TestingScreen';
import { passActiveTitle } from './components/menuFunctions';

export class ActiveScreen extends Component {
  constructor(props) {
    super(props);
    this.passActiveTitle = passActiveTitle.bind(this);
  }

  render() {
    if (this.props.activeScreen) {
      switch (this.props.activeScreen) {
        case 'HomeScreen':
          return <HomeScreen passScreenChoiceToActiveScreen={this.passActiveTitle} />;
        case 'AboutMeScreen':
          return <AboutMeScreen />;
        case 'SkillsScreen':
          return <SkillsScreen />;
        case 'PortfolioScreen':
          return <ProjectsScreen />;
        case 'ContactScreen':
          return <ContactMeScreen />;
        case 'TestingScreen':
          return <TestingScreen />;
        default:
          return <div>Something is wrong here.</div>;
      }
    } else {
      console.log('Something fucky is going on around here. Check ActiveScreen function.');
      return false;
    }
  }
}

ActiveScreen.propTypes = {
  activeScreen: PropTypes.string.isRequired,
};
