import React from 'react';
import { FormTest } from './FormTest';
import '../../styles/TestingScreen.css';

export class TestingScreen extends React.Component {
  render() {
    return (
      <div className="testingContent">
        <div className="header">
        Testing
        </div>
        <div >
          <FormTest />
        </div>
      </div>
    );
  }
}
