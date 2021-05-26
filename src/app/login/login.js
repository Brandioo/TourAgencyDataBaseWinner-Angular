// function isLoaded(el) {
//     console.log(el);
// }

const authUser = {
  username: 'bcitozi19@epoka.edu.al',
  password: 'Admin@123'
};

const DEFAULT_EMAIL_REGEXP = /[a-zA-Z0-9\.\_\-]+@epoka\.edu\.al/g; // .../gi case insesivity
const DEFAULT_PASSWORD_REGEXP = /[a-zA-Z0-9\.\_\-\!\?]+/g;

const formElement = document.getElementById('loginForm');
const emailInputElement = document.getElementById('loginFormEmailInput');
const passwordInputElement = document.getElementById('loginFormPasswordInput');

const preventAndNotify = (event, message) => {
  event.preventDefault();
  event.stopPropagation();

  alert(message);
};

function required(input) {
  if (input && input instanceof HTMLInputElement) {
    input.required = true;
  }
}

function pattern(input, pattern) {
  if (input && input instanceof HTMLInputElement) {
    input.pattern = pattern;
  }
}

function minlength(input, length = 8) {
  if (input && input instanceof HTMLInputElement) {
    input.minLength = length;
  }
}

const emailChecker = (event) => {
  if (emailInputElement && emailInputElement.value) { // required
    if (typeof emailInputElement.value === 'string') {
      if (emailInputElement.value.match(DEFAULT_EMAIL_REGEXP)) { // patter
        if (emailInputElement.value === authUser.username) {
          return true;
        } else {
          preventAndNotify(event, 'Wrong username');
        }
      } else {
        preventAndNotify(event, 'Username must be an epoka email, example@epoka.edu.al');
        pattern(emailInputElement, DEFAULT_EMAIL_REGEXP);
      }
    } else {
      preventAndNotify(event, 'Username must be a string');
    }
  } else {
    preventAndNotify(event, 'Username is required');
    required(emailInputElement);
  }
};

function passwordChecker(event) {
  if (passwordInputElement && passwordInputElement.value) { // required
    if (passwordInputElement.value.length >= 8) { // minlength
      if (passwordInputElement.value.match(DEFAULT_PASSWORD_REGEXP)) { // pattern
        if (passwordInputElement.value === authUser.password) {
          return true;
        } else {
          preventAndNotify(event, 'Wrong password');
        }
      } else {
        preventAndNotify(event, 'Password is weak');
        pattern(passwordInputElement, DEFAULT_PASSWORD_REGEXP);
      }
    } else {
      preventAndNotify(event, 'Password must be 8 characters or logger');
      minlength(passwordInputElement);
    }
  } else {
    preventAndNotify(event, 'Password is required');
    required(passwordInputElement);
  }
}

const formChecker = (event) => {
  if (emailChecker(event) && passwordChecker(event)) {
    // TODO is up to you
  } else {
    preventAndNotify(event, 'Form not valid');
  }
};

function main() {
  if (formElement instanceof HTMLFormElement) {
    formElement.addEventListener('submit', formChecker);
  }
}

main();
