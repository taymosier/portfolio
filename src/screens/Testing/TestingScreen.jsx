import React from 'react';
import { FormTest } from './FormTest';
import styles from '../../styles/TestingScreen.css';

export class TestingScreen extends React.Component {
  render() {
    return (
      <div className={styles.testingContent}>
        <div className={styles.header}>
        Testing
        </div>
        <div >
          <FormTest />
        </div>
      </div>
    );
  }
}
