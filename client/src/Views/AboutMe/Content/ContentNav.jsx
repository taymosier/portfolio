import React, { Component } from 'react';
import { Nav, Navbar } from 'reactstrap';
import { ContentTab } from './ContentTab';

export class ContentNav extends Component {
  constructor(props){
    super(props);
    this.state = {
      updateActiveChildTab: this.props.updateActiveChildTab,
    };
  }

  componentDidMount(){
    this.setState({
      activeChild: 0,
      tabItems: this.props.tabs
    })
  }

  componentDidUpdate(){
    if(this.state.activeChild !== this.props.activeChild){
      this.setState({
        activeChild: this.props.activeChild
      })
    }
    if(this.state.tabItems !== this.props.tabs){
      this.setState({
        tabItems: this.props.tabs
      })
    }
  }

  generateTabs(subsections){
    let index = 0;
    let tabs = [];
    for(let item in subsections){
      tabs.push(
        <ContentTab
          activeChild={this.state.activeChild}
          index={index}
          text={subsections[item]}
          updateActiveChildTab={this.state.updateActiveChildTab}
        />
      )
      index = index + 1;
    }
    return tabs;
  }

  render(){
    return(
      <Navbar className="section-tabs-container">
        <Nav tabs className={"section-tabs"}>
          {this.state.tabItems !== undefined ? this.generateTabs(this.state.tabItems) : null}
        </Nav>
      </Navbar>
    );
  }
}
