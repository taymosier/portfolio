import React, {Component} from 'react';
import { Button, Row } from 'reactstrap';


export class SectionOption extends Component {
  constructor(props){
    super(props);
    this.state = {
      updateActiveSection: this.props.updateActiveSection
    };
  }

  componentDidMount(){
    this.setState({
      index: this.props.index,
      option: this.props.option,
      style: this.props.style
    })
  }

  componentDidUpdate(){
    if(this.props.style !== undefined && this.state.style !== this.props.style){
      this.setState({
        style: this.props.style
      })
    }
  }

  render(){
    return(
      <Row className={"section-option"}>
        <Button onClick={() =>{this.props.updateActiveSection(this.state.index)}} style={this.state.style}>
          {this.props.option}
        </Button>
      </Row>
    );
  }

}
