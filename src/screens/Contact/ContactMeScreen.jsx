import React from 'react';
import 'babel-polyfill';
import styles from '../../styles/ContactScreen.css';

import ContactForm from './ContactForm';

export function ContactMeScreen() {
  return (
    <div className={styles.contactContent}>
      <div className={styles.header}>
        <h1>Contact Me</h1>
      </div>
      <div >
        <ContactForm />
      </div>
    </div>
  );
}
