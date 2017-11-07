import React, { Component } from 'react';
import 'babel-polyfill';
import '../../styles/AboutScreen.css';
import { AboutMeItem } from './AboutMeItem';
import { AboutMeItemContent } from './AboutMeItemContent';

const sections = [
  {
    id: '0',
    title: 'Who I Am',
    content: 'shoerme',
  }, {
    id: '1',
    title: 'Education',
    content: 'shoer',
  }, {
    id: '2',
    title: '',
    content: 'shoer',
  }, {
    id: '3',
    title: 'What I Am Looking For',
    content: 'shoer',
  },
];

export class AboutMeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showContent: true,
    };
  }
  render() {
    const listSections = sections.map((section, index) => {
      return <AboutMeItem title={section.title} key={section.title} />;
    });
    // CREATE SECTION CONTENT COMPONENT
    // LOAD CONTENT BASED ON ABOUTMEITEM KEY
    return (
      <div className="aboutContent">

        <div className="header">
          About Me
        </div>

        <div className="AboutContentRow">
          {listSections}
        </div>

      </div>
    );
  }
}
