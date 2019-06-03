import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { DefaultView } from './Views/DefaultView';
import { AboutMe } from './Views/AboutMe/AboutMe.jsx';
import { MobileAboutMe } from './Views/AboutMe/Mobile/MobileAboutMe.jsx';
import { SkillView } from './Views/Skillset/SkillView.jsx';
import { MobileSkillView } from './Views/Skillset/Mobile/MobileSkillView.jsx';
import { Portfolio } from './Views/Portfolio/Portfolio.jsx';
import { MobilePortfolio } from './Views/Portfolio/Mobile/MobilePortfolio.jsx';
import { ContactView} from './Views/Contact/ContactView';

export class Portal extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeView: this.props.activeView,
      setActiveView: this.props.setActiveView
    }
  }

  componentDidUpdate(){
    if(this.state.activeView !== this.props.activeView){
      this.setState({
        activeView: this.props.activeView
      });
    }
    if(this.state.screenSize !== this.props.screenSize){
      this.setState({
        screenSize: this.props.screenSize
      });
    }
  }

  render(){
    if(this.props.activeView){
      switch(`${this.props.activeView}`){
        case "DefaultView":
          return <DefaultView
                   setActiveView={this.state.setActiveView}
                   screenSize={this.state.screenSize !== undefined ? this.state.screenSize : null}
                 />;
        case "AboutMeView":
          if(this.props.screenSize === "small" || this.props.screenSize === "xsmall"){
            return <MobileAboutMe
                     screenSize={this.state.screenSize !== undefined ? this.state.screenSize : null}
                   />
          }
          return <AboutMe
                    screenSize={this.state.screenSize !== undefined ? this.state.screenSize : null}
                 />;
        case "SkillView":
          if(this.props.screenSize === "small" || this.props.screenSize === "xsmall"){
            return <MobileSkillView
                      screenSize={this.state.screenSize !== undefined ? this.state.screenSize : null}
                   />
          }
          return <SkillView
                    screenSize={this.state.screenSize !== undefined ? this.state.screenSize : null}
                 />
        case "PortfolioView":
          if(this.props.screenSize === "small" || this.props.screenSize === "xsmall"){
            return <MobilePortfolio
                      screenSize={this.state.screenSize !== undefined ? this.state.screenSize : null}
                   />
          }
          return <Portfolio
                    screenSize={this.state.screenSize !== undefined ? this.state.screenSize : null}
                 />
        case "ContactView":
          return <ContactView
                    screenSize={this.state.screenSize !== undefined ? this.state.screenSize : null}
                 />
        default:
          return <div>Something broke</div>
      }
    }
  }
}

Portal.propTypes = {
  activeView: PropTypes.string.isRequired
}
