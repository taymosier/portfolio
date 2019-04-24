import React, {Component} from 'react';
import { NavItem, NavLink} from 'reactstrap';

export class ContentTab extends Component {
  constructor(props){
    super(props);
    this.state = {
      updateActiveChildTab: this.props.updateActiveChildTab
    };
  }

  componentDidMount(){
    this.setState({
      activeTab: this.props.activeChild,
      isActive: this.props.activeChild === this.props.index,
      index: this.props.index,
      text: this.props.text,
    })
  }

  componentDidUpdate(){
    if(this.state.text !== this.props.text){
      this.setState({
        index: this.state.index,
        text: this.props.text
      })
    }
    if(this.props.activeChild !== undefined && this.state.activeTab !== this.props.activeChild){
      this.setState({
        activeTab: this.props.activeChild,
        isActive: this.props.activeChild === this.state.index
      })
    }
  }

  render(){
    return(
      <NavItem>
        <NavLink
          style={this.state.isActive ? {"background": "linear-gradient(35deg,#475f84 5%, #364c6d 90%)"} : null}
          className={"content-tab"} //classnames({ active: this.state.activeTab === '1' })
          onClick={() => {this.state.updateActiveChildTab(this.state.index)}}
        >
          {this.state.text}
        </NavLink>
      </NavItem>
    )
  }
}
