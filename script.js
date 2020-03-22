const firstName = document.getElementById('firstName'),
  lastName = document.getElementById('lastName'),
  email = document.getElementById('email');

const firstNameErrorElement = firstName.parentNode.querySelector('.validation span'),
  lastNameErrorElement = lastName.parentNode.querySelector('.validation span'),
  emailErrorElement = email.parentNode.querySelector('.validation span');

const firstNameLabelElement = firstName.parentNode.querySelector('label'),
  lastNameLabelElement = lastName.parentNode.querySelector('label'),
  emailLabelElement = email.parentNode.querySelector('label');

let firstNameMessages = [],
  lastNameMessages = [],
  emailMessages = [];

firstName.onblur = () => {
  firstNameMessages = [];
  checkFirstName();
  setValidation(firstName);
};
lastName.onblur = () => {
  lastNameMessages = [];
  checkLastName();
  setValidation(lastName);
};
email.onblur = () => {
  emailMessages = [];
  checkEmail();
  setValidation(email);
};

function myForm(event) {
  event.preventDefault();
  checkFirstName();
  checkLastName();
  checkEmail();
  if (firstNameMessages.length > 0 || lastNameMessages.length > 0 || emailMessages.length > 0) {
    firstNameMessages = [];
    lastNameMessages = [];
    emailMessages = [];
    checkFirstName();
    checkLastName();
    checkEmail();
    setValidation(firstName);
    setValidation(lastName);
    setValidation(email);
  } else {
    alert('Submitted');
  }
}

function checkFirstName() {
  if (firstName.value === '' || firstName.value == null) {
    firstNameMessages.push('First name is required');
  } else if (firstName.value.length <= 2) {
    firstNameMessages.push('First name must be longer than 3 characters');
  } else if (firstName.value.length >= 20) {
    firstNameMessages.push('First name must be less than 20 characters');
  } else {
    firstNameMessages = [];
  }
}

function checkLastName() {
  if (lastName.value === '' || lastName.value == null) {
    lastNameMessages.push('Last name is required');
  } else if (lastName.value.length <= 2) {
    lastNameMessages.push('Last name must be longer than 3 characters');
  } else if (lastName.value.length >= 20) {
    lastNameMessages.push('Last name must be less than 20 characters');
  } else {
    lastNameMessages = [];
  }
}

function checkEmail() {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.value === '' || email.value == null) {
    emailMessages.push('Email is required');
  } else if (!re.test(email.value.toLowerCase())) {
    emailMessages.push('Email is not valid');
  } else {
    emailMessages = [];
  }
}

function setValidation(input) {
  switch (input) {
    case firstName:
      if (firstNameMessages.length > 0) {
        firstNameErrorElement.innerHTML = firstNameMessages.join('. ');
        firstName.classList.add('error');
        firstNameLabelElement.classList.add('error');
      } else {
        firstNameErrorElement.innerHTML = '';
        firstName.classList.remove('error');
        firstNameLabelElement.classList.remove('error');
      }
      break;
    case lastName:
      if (lastNameMessages.length > 0) {
        lastNameErrorElement.innerHTML = lastNameMessages.join('. ');
        lastName.classList.add('error');
        lastNameLabelElement.classList.add('error');
      } else {
        lastNameErrorElement.innerHTML = '';
        lastName.classList.remove('error');
        lastNameLabelElement.classList.remove('error');
      }
      break;
    case email:
      if (emailMessages.length > 0) {
        emailErrorElement.innerHTML = emailMessages.join('. ');
        email.classList.add('error');
        emailLabelElement.classList.add('error');
      } else {
        emailErrorElement.innerHTML = '';
        email.classList.remove('error');
        emailLabelElement.classList.remove('error');
      }
      break;
  }
}
