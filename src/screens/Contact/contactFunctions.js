// onClick --> handleConfirmationClick/handleCancelClick
// --> passConfirmationClickToFormComponent/passCancelClickToFormComponent
// -->

// TO-DO
// cancelSubmission

export function onInputChange(event) {
  const contactForm = Object.assign({}, this.state.contactForm);
  contactForm[event.target.name] = event.target.value;
  this.setState({ contactForm });
}

export function renderConfirmation(e) {
  console.log('renderConfirmation called');
  const contactForm = Object.assign({}, this.state.contactForm);
  const isValid = validateForm(contactForm);
  (isValid)
    ? this.setState({ showConfirmation: true })
    : alert('Form is not valid. Please make necessary corrections before submitting');
}

export function handleConfirmationClick(e) {
  e.preventDefault();
  this.props.passConfirmationClickToFormComponent();
}

export function handleCancelClick(e) {
  e.preventDefault();
  this.props.passCancelClickToFormComponent();
}

export function submit(e) {
  this.setState({ showConfirmation: false });
  // this.reset();
}

export function cancelSubmit(e) {
  this.setState({ showConfirmation: false });
}

export function reset(e) {
  if (e) {
    e.preventDefault();
  }
  this.setState({
    contactForm: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      topic: 'fulltime',
      message: '',
    },
  });
}

export function confirmSubmission(e) {
  e.preventDefault();
  console.log('Submission confirmed');
}

export function isFormComplete(e) {
  e.preventDefault();
  const formElements = document.forms.contactForm;
  const submitButton = formElements[6];
  submitButton.disabled = true;
  let canSubmit = true;
  // length-2 in order to omit buttons VVV
  for (let i = 0; i < (formElements.length - 2); i++) {
    if (formElements[i].value.length === 0 && i !== 3) {
      canSubmit = false;
    }
  }
  (canSubmit)
    ? submitButton.disabled = false
    : submitButton.disabled;
}

function validateForm(contactForm) {
  const validFirstName = validateFirstName(contactForm.firstName);
  const validLastName = validateLastName(contactForm.lastName);
  const validEmail = validateEmail(contactForm.email);
  const validPhone = validatePhoneNumber(contactForm.phone);
  // no need to validate message since submit will not be clickable if message is empty
  if (validFirstName && validLastName && validEmail && validPhone) {
    return true;
  }
  return false;
}

function validateFirstName(firstName) {
  const isValid = checkForNonAlphabeticalCharacters(firstName);
  return !!(isValid);
}

function validateLastName(lastName) {
  const isValid = checkForNonAlphabeticalCharacters(lastName);
  return !!(isValid);
}

function checkForNonAlphabeticalCharacters(input) {
  const letters = /[a-zA-Z]/;
  for (let character = 0; character < input.length; character++) {
    if (input[character].match(letters) === null) {
      return false;
    }
  }
  return true;
}

function validateEmail(email) {
  const validEmail = checkEmailFormat(email);
  return !!(validEmail);
}

function checkEmailFormat(email) {
  const validEmailFormat = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b/i;
  if (validEmailFormat.test(email)) {
    return true;
  }
  return false;
}

function validatePhoneNumber(phoneNumber) {
  const validPhoneNumber = checkNumberOfDigits(phoneNumber);
  return !!(validPhoneNumber);
}

function checkNumberOfDigits(phoneNumber) {
  if (phoneNumber.length === 0) {
    return true;
  }
  if (phoneNumber.length === 10) {
    return true;
  } else if (phoneNumber.length < 10) {
    return false;
  } else if (phoneNumber.length > 10) {
    return false;
  }
  return false;
}
