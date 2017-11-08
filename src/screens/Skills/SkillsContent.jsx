import React, { Component } from 'react';
import styles from '../../styles/SkillsScreen.css';


class SkillsTable extends Component {
  constructor(props){
    super(props);

  }

  render(){
    return(
      <p>Table</p>
    );
  }
}

class SkillsCategoryRow extends Component {
  render(){
    return(
      <p>Category Heading</p>
    );
  }
}

class SkillsRow extends Component {
  render(){
    return(
      <p>Category Row</p>
    );
  }
}

export class SkillsContent extends Component {
  render(){
    return(
      <div>Skills Content</div>
    );
  }
}
