import {Component, OnInit, Input} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {BackendService} from '../service/backend.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private backendService: BackendService) {
    alert('test');
  }

  user = 'Brand';
  password = 'Ok';
  dateObj = new Date();
  authUser = {
    username: 'bcitozi19@epoka.edu.al',
    password: 'Admin@123'
  };
  DEFAULT_EMAIL_REGEXP = /[a-zA-Z0-9\.\_\-]+@epoka\.edu\.al/g; // .../gi case insesivity
  DEFAULT_PASSWORD_REGEXP = /[a-zA-Z0-9\.\_\-\!\?]+/g;
  formElement = document.getElementById('loginForm');
  emailInputElement = document.getElementById('loginFormEmailInput');
  passwordInputElement = document.getElementById('loginFormPasswordInput');
  emailInputElementValue = (document.getElementById('loginFormEmailInput') as HTMLInputElement).value;
  passwordInputElementValue = (document.getElementById('loginFormPasswordInput') as HTMLInputElement).value;

  ngOnInit(): void {
  }

  preventAndNotify = (event: any, message: any) => {
    event.preventDefault();
    event.stopPropagation();

    alert(message);
  }

  // tslint:disable-next-line:typedef
  required(input: any) {
    if (input && input instanceof HTMLInputElement) {
      input.required = true;
    }
  }

  // tslint:disable-next-line:typedef
  pattern(input: any, pattern: any) {
    if (input && input instanceof HTMLInputElement) {
      input.pattern = pattern;
    }
  }

  // tslint:disable-next-line:typedef
  minlength(input: any, length = 8) {
    if (input && input instanceof HTMLInputElement) {
      input.minLength = length;
    }
  }

  emailChecker = (event: any) => {
    if (this.emailInputElement && this.emailInputElementValue) { // required
      if (typeof this.emailInputElementValue === 'string') {
        if (this.emailInputElementValue.match(this.DEFAULT_EMAIL_REGEXP)) { // patter
          if (this.emailInputElementValue === this.authUser.username) {
            return true;
          } else {
            this.preventAndNotify(event, 'Wrong username');
          }
        } else {
          this.preventAndNotify(event, 'Username must be an epoka email, example@epoka.edu.al');
          this.pattern(this.emailInputElement, this.DEFAULT_EMAIL_REGEXP);
        }
      } else {
        this.preventAndNotify(event, 'Username must be a string');
      }
    } else {
      this.preventAndNotify(event, 'Username is required');
      this.required(this.emailInputElement);
    }
  }
  // tslint:disable-next-line:typedef
  passwordChecker(event: any) {
    if (this.passwordInputElement && this.passwordInputElementValue) { // required
      if (this.passwordInputElementValue.length >= 8) { // minlength
        if (this.passwordInputElementValue.match(this.DEFAULT_PASSWORD_REGEXP)) { // pattern
          if (this.passwordInputElementValue === this.authUser.password) {
            return true;
          } else {
            this.preventAndNotify(event, 'Wrong password');
          }
        } else {
          this.preventAndNotify(event, 'Password is weak');
          this.pattern(this.passwordInputElement, this.DEFAULT_PASSWORD_REGEXP);
        }
      } else {
        this.preventAndNotify(event, 'Password must be 8 characters or logger');
        this.minlength(this.passwordInputElement);
      }
    } else {
      this.preventAndNotify(event, 'Password is required');
      this.required(this.passwordInputElement);
    }
  }

  formChecker = (event: any) => {
    if (this.emailChecker(event) && this.passwordChecker(event)) {
      // TODO is up to you
    } else {
      this.preventAndNotify(event, 'Form not valid');
    }
  }

  // tslint:disable-next-line:typedef
  main() {
    if (this.formElement instanceof HTMLFormElement) {
      this.formElement.addEventListener('submit', this.formChecker);
    }
  }

  // tslint:disable-next-line:typedef
  onAddForm(formValue: NgForm) {
    this.user = formValue.value.username;
    this.backendService.isLoggedIn = true;
    this.password = formValue.value.password;
    this.main();
    this.router.navigateByUrl('home');
  }

}
