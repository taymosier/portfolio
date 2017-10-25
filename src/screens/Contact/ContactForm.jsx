import { Col, Form, FormGroup, FormControl, ControlLabel,
  Button } from 'react-bootstrap';
import React, { Component } from 'react';
import { SubmitConfirmation } from './SubmitConfirmation';
import styles from '../../styles/ContactScreen.css';

import {
  isFormComplete,
  submit,
  onInputChange,
  reset,
  cancelSubmit,
  renderConfirmation,
} from './contactFunctions';

export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactForm: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        topic: '',
        message: '',
      },
      showConfirmation: false,
    };
    this.onInputChange = onInputChange.bind(this);
    this.isFormComplete = isFormComplete.bind(this);
    this.reset = reset.bind(this);
    this.submit = submit.bind(this);
    this.cancelSubmit = cancelSubmit.bind(this);
    this.renderConfirmation = renderConfirmation.bind(this);
  }

  render() {
    const contactForm = this.state.contactForm;
    return (
      <div className={styles.formContainer}>
        <Form horizontal className={styles.form} action="https://formspree.io/taymosier@gmail.com" method="post">

          <FormGroup sm={12} md={12} lg={12} className={styles.formGroup}>
            <Col componentClass={ControlLabel} sm={2} md={2} lg={2}>
              First Name
            </Col>
            <Col sm={8} md={8} lg={8}>
              <FormControl name="firstName" placeholder="Required" autoFocus />
            </Col>
          </FormGroup>

          <FormGroup className={styles.formGroup}>
            <Col componentClass={ControlLabel} sm={2} md={2} lg={2}>
              Last Name
            </Col>
            <Col sm={8} md={8} lg={8}>
              <FormControl name="lastName" placeholder="Required" />
            </Col>
          </FormGroup>

          <FormGroup className={styles.formGroup}>
            <Col componentClass={ControlLabel} sm={2} md={2} lg={2}>
                Email Address
            </Col>
            <Col sm={8} md={8} lg={8}>
              <FormControl name="email" placeholder="Required" />
            </Col>
          </FormGroup>
          <FormGroup className={styles.formGroup}>
            <Col componentClass={ControlLabel} sm={2} md={2} lg={2}>
                Telephone Number
            </Col>
            <Col sm={8} md={8} lg={8}>
              <FormControl name="phone" placeholder="Optional" />
            </Col>
          </FormGroup>

          <FormGroup className={styles.formGroup}>
            <Col componentClass={ControlLabel} sm={2} md={2} lg={2}>
                  Message Topic
            </Col>
            <Col sm={8} md={8} lg={8}>
              <FormControl componentClass="select" name="feedback">
                <option value="fulltime">FTE Opportunity</option>
                <option value="parttime">PTE Opportunity</option>
                <option value="internship">Internship Opportunity</option>
                <option value="meeting">Meeting/Interview</option>
                <option value="misc">Other</option>
              </FormControl>
            </Col>
          </FormGroup>
          <FormGroup smOffset={2} className={styles.formGroup}>
            <Col sm={2} md={2} lg={2} />
            <Col sm={8} md={8} lg={8}>
              <FormControl
                componentClass="textarea"
                placeholder="Write your message here"
                rows="5"
                name="message"
              />
            </Col>
          </FormGroup>
          <Button type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
