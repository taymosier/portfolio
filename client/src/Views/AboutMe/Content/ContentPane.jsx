import React, { Component } from 'react';
import { TabPane, Row, Col } from 'reactstrap';

export class ContentPane extends Component {
  constructor(props){
    super(props);
    this.state={
      index: this.props.index,
      columnSize: 12,
      hasScrollbar: true,
      content: {
        "header": "",
        "body": ""
      },
    };
    this.checkForScrollbar = this.checkForScrollbar.bind(this);
  }

  componentDidMount(){
    this.setState({
      content: {
        "header": this.props.content.header,
        "body": this.props.content.body
      },
    })
  }

  componentDidUpdate(){
    if(this.state.content.body !== this.props.content.body){
      this.setState({
        index: this.props.index,
        content: {
          "header": this.props.content.header,
          "body": this.props.content.body
        },
      })
    }
  }

  checkForScrollbar(){
    let visibleContentHeight = document.getElementsByClassName('section-content-text')[0].offsetHeight;
    let contentScrollHeight = document.getElementsByClassName('section-content-text')[0].scrollHeight;
    if(visibleContentHeight <= contentScrollHeight && this.state.hasScrollbar === false && contentScrollHeight !== undefined){
      this.setState({hasScrollbar: true})
    }
    if(visibleContentHeight >= contentScrollHeight && this.state.hasScrollbar === true){
      this.setState({hasScrollbar: false})
    }
  }

  render(){
    return(
      <TabPane tabId={this.state.index} className={`section-content `}>
        <Row>
          <Col sm={this.state.columnSize}>
            <h4 className="section-content-subheader" >{this.state.content.header}</h4>
            <p className={`section-content-text ${this.state.hasScrollbar ? "show-scrollbar" : "hide-scrollbar"}`}>{this.state.content.body}</p>
          </Col>
        </Row>
      </TabPane>
    )
  }
}
