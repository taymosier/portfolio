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

  linkButton(link){
    return(
      <button className="project-link-button">{link.id}</button>
    )
  }

  render(){
    return(
      this.state.visible
      ? <Card className="project-card">
          <CardBody>
            <CardText>
              <div className="project-card-left-column">
                <div className="project-links-container">
                  {this.state.card.links.map((item) =>{
                      return <button className="project-link-button">
                        <a href={`${item.url}`}>{item.id}</a>
                      </button>
                    })
                  }
                </div>
                <ul className="project-tag-container">
                  {this.state.card.tags.map((item)=>{ return <li className="project-tags">{item}</li>})}
                </ul>
              </div>
              <div className="project-card-right-column">
                <CardTitle className="project-title">{this.state.card.title}</CardTitle>
                <CardSubtitle className="project-date">{this.state.card.date}</CardSubtitle>
                <p className="project-description">{this.state.card.text}</p>
              </div>
            </CardText>
          </CardBody>
        </Card>
      : null
    );
  }
}
