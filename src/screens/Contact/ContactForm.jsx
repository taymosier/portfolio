import { Col, Form, FormGroup, FormControl, ControlLabel,
  Button } from 'react-bootstrap';
import React, { Component } from 'react';
import { SubmitConfirmation } from './SubmitConfirmation';

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
    return (
      <div className="formContainer">
        <Form horizontal className="form" action="https://formspree.io/taymosier@gmail.com" method="post">
          <FormGroup className="formGroup">
            <Col componentClass={ControlLabel}>
              First Name
            </Col>
            <Col>
              <FormControl name="firstName" placeholder="Required" autoFocus />
            </Col>
          </FormGroup>

          <FormGroup className="formGroup">
            <Col componentClass={ControlLabel}>
              Last Name
            </Col>
            <Col>
              <FormControl name="lastName" placeholder="Required" />
            </Col>
          </FormGroup>

          <FormGroup className="formGroup">
            <Col componentClass={ControlLabel}>
                Email Address
            </Col>
            <Col>
              <FormControl name="email" placeholder="Required" />
            </Col>
          </FormGroup>
          <FormGroup className="formGroup">
            <Col componentClass={ControlLabel}>
               Phone Number
            </Col>
            <Col>
              <FormControl name="phone" placeholder="Optional" />
            </Col>
          </FormGroup>

          <FormGroup className="formGroup">
            <Col componentClass={ControlLabel}>
                  Message Topic
            </Col>
            <Col>
              <FormControl componentClass="select" name="feedback">
                <option value="fulltime">FTE Opportunity</option>
                <option value="parttime">PTE Opportunity</option>
                <option value="internship">Internship Opportunity</option>
                <option value="meeting">Meeting/Interview</option>
                <option value="misc">Other</option>
              </FormControl>
            </Col>
          </FormGroup>
          <FormGroup smOffset={2} className="formGroup">
            <Col />
            <Col >
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
