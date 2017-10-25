import React, { Component } from 'react';
import { handleConfirmationClick, handleCancelClick } from './contactFunctions';
// import styles from '../../styles/ContactScreen.css';


export class SubmitConfirmation extends Component {
  constructor(props) {
    super(props);

    this.handleConfirmationClick = handleConfirmationClick.bind(this);
    this.handleCancelClick = handleCancelClick.bind(this);
  }

  render() {
    return (
      <div>
        <p>Confirmation Component</p>
        <button onClick={this.handleConfirmationClick} type="submit">Confirm</button>
        <button onClick={this.handleCancelClick}>Cancel</button>
      </div>
    );
  }
}
