import React, {Component} from 'react';
import { Col, Row } from 'reactstrap';
import { ProfileImage } from './ProfileImage';
import { SectionSelector } from './Navigation/SectionSelector';
import { TabbedContentContainer } from './Content/TabbedContentContainer';
import $ from 'jquery';


import sections from './aboutme.json';

export class AboutMe extends Component {
  constructor(props){
    super(props);
    this.state = {
      keys: Object.keys(sections),
      activeSectionContent: sections[Object.keys(sections)[0]].body,
      activeChild: 0,
      activeSectionIndex: 0,
      sections: sections,
      filter: this.adjustFilter
    }
    this.updateActiveSection = this.updateActiveSection.bind(this);
  }

  componentDidMount(){
    this.setState({
      activeSectionIndex: 0,
      activeSectionContent: this.state.sections[this.state.keys[0]].body,
      activeChildKeys: Object.keys(sections[this.state.keys[0]].body),
      activeChild: this.props.activeChild,
      screenSize: this.props.screenSize
    });
    window.onresize = this.adjustFilter;
  }

  adjustFilter(){
    console.log("adjusting")
    let filterHeight = `${$(".about-me-view").height()}px`;
    $(".about-me-filter").css(
      "height",`${filterHeight}`
    )
    console.log("adjusted")
  }

  componentDidUpdate(){
    if(this.props.screenSize !== undefined && this.state.screenSize !== this.props.screenSize){
      this.setState({
        screenSize: this.props.screenSize
      })
    }
  }



  getActiveSectionChildKeys(sections, activeSectionIndex, keys){
    let children = Object.keys(sections[keys[activeSectionIndex]].body);
    let childKeys = Object.keys(children);
    for(let item in childKeys){
      console.log(`Child Key: ${children[childKeys[item]]}`)
    }
  }

  updateActiveSection(sectionIndex){
    this.setState({
      activeChild: 0,
      activeSectionIndex: sectionIndex,
      activeChildKeys: Object.keys(sections[this.state.keys[sectionIndex]].body),
      activeSectionContent: this.state.sections[this.state.keys[sectionIndex]].body,
    })
  }

  render(){
    if(this.state.activeSectionIndex){
      this.getActiveSectionChildKeys(this.state.sections, this.state.activeSectionIndex, this.state.keys)
    }

    return(
      <Row className={"about-me-view"}>
        <div className={"about-me-filter"} />
        <TabbedContentContainer
          keys={this.state.keys}
          activeSectionContent={this.state.activeSectionContent}
          activeSectionIndex={this.state.activeSectionIndex}
          activeChildKeys={this.state.activeChildKeys}
          activeChild={this.state.activeChild}
          updateActiveSection={this.updateActiveSection}
          sections={this.state.sections}
          screenSize={this.state.screenSize !== undefined ? this.state.screenSize : null}
        />
        <Col
          xl={{ size: 5, offset: 0 }}
          lg={{ size: 5, offset: 0 }}
          md={{ size: 5, offset: 0 }}
          sm={{ size: 5, offset: 0 }}
          xs={{ size: 5, offset: 0 }}
          className={"about-me-right-col"}
        >
          {this.state.screenSize !== undefined && this.state.screenSize === "xlarge" || this.state.screenSize === "large"
            ? <Row className={"profile-image-container"}>
                <ProfileImage />
              </Row>
            : null
          }
          <Row className={"section-options-container"}>
            <SectionSelector
              screenSize={this.state.screenSize !== undefined ? this.state.screenSize : null}
              sections={this.state.sections}
              updateActiveSection={this.updateActiveSection}
            />
          </Row>
        </Col>
      </Row>
    )
  }
}
