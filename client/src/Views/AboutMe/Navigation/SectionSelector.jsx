import React, {Component} from 'react';
import { SectionOption } from './SectionOption';


export class SectionSelector extends Component {
  constructor(props){
    super(props);
    this.state = {
      updateActiveSection: this.props.updateActiveSection
    };
  }

  componentDidMount(){
    this.setState({
      sections: this.props.sections,
      keys: Object.keys(this.props.sections),
      screenSize: this.props.screenSize !== undefined ? this.props.screenSize : null
    });
  }

  componentDidUpdate(){
    if(this.props.screenSize !== undefined && this.state.screenSize !== this.props.screenSize){
      this.setState({screenSize: this.props.screenSize})
    }
  }

  getButtonSize(){
    let buttonHeight;
    if(this.state.screenSize !== undefined && this.state.screenSize === "large"){
      buttonHeight = `${(45/this.state.keys.length)-2}vh`;
      console.log(`large buttonHeight - ${buttonHeight}` )
    } else {
      buttonHeight = `${(35/this.state.keys.length)-1}vh`;
      console.log(`else buttonHeight - ${buttonHeight}` )
    }
    return buttonHeight
  }

  render(){
    let optionButtons = [];
    let index = 0;
    if(this.state.keys){
      let buttonHeight = this.getButtonSize();
      for(let item in this.state.keys){
        optionButtons.push(
          <SectionOption
            index={index}
            style={{"minHeight": `${buttonHeight}`, "maxHeight": `${buttonHeight}`}}
            option={this.state.keys[item]}
            updateActiveSection={this.state.updateActiveSection}
          />
        )
        index++;
      }
    }
    return(optionButtons);
  }
}
