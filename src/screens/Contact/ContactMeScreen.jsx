import React from 'react';
import 'babel-polyfill';
import 'styles/ContactScreen.css';

import ContactForm from './ContactForm';

export function ContactMeScreen() {
  return (
    <div className="contactContent">
      <div className="header">
        Contact Me
      </div>
      <ContactForm />
    </div>
  );
}
