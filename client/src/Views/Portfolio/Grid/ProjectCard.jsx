import React, { Component } from 'react';
import { Card, CardText, CardBody, CardSubtitle, CardTitle } from 'reactstrap';

export class ProjectCard extends Component {
  constructor(props){
    super(props);
    this.state = {
      visible: false
    };
    this.generateProjectTags = this.generateProjectTags.bind(this);
  }

  componentDidMount(){
    this.setState({
      visible: this.props.visible,
      card: this.props.card,
      tags: this.generateProjectTags()
    })
  }

  componentDidUpdate(){
    if(this.state.card !== this.props.card){
      this.setState({
        visible: this.props.visible,
        card: this.props.card
      })
    }
  }

  generateProjectLinkButtons(){

  }

  generateProjectTags(){
    let string = "";
    console.log(this.props.card.tags)
    for(let item in this.props.card.tags){
      string = string + ` | ${this.props.card.tags[item]}`
    }
    string = string + " |"
    return string
  }

  render(){
    return(
      this.state.visible
      ? <Card className="project-card">
          <CardBody>
            <CardTitle className="project-title">{this.state.card.title}</CardTitle>
            <CardSubtitle className="project-date">{this.state.card.date}</CardSubtitle>
            <CardText>
              <p className="project-tags">{this.state.tags}</p>
              <p className="project-description">{this.state.card.text}</p>
            </CardText>
          </CardBody>
        </Card>
      : null
    );
  }
}
