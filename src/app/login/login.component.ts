import {Component, OnInit, Input} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {BackendService} from '../service/backend.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private router: Router,
              private backendService: BackendService,
              private formBuilder: FormBuilder) {
    alert('test');
  }

  user = '';
  password = '';
  dateObj = new Date();
  authUser = {
    username: 'bcitozi19@epoka.edu.al',
    password: 'Admin@123'
  };
  DEFAULT_EMAIL_REGEXP = /[a-zA-Z0-9\.\_\-]+@epoka\.edu\.al/g; // .../gi case insesivity
  DEFAULT_PASSWORD_REGEXP = /[a-zA-Z0-9\.\_\-\!\?]+/g;

  emailInputElementValue = '';
  passwordInputElementValue = '';

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  preventAndNotify = (event: any, message: any) => {
    //event.preventDefault();
    // event.stopPropagation();

    alert(message);
  };

  // tslint:disable-next-line:typedef
  // required(input: any) {
  //   if (input && input instanceof HTMLInputElement) {
  //     input.required = true;
  //   }
  // }

  // tslint:disable-next-line:typedef
  pattern(input: any, pattern: any) {
    if (input && input instanceof HTMLInputElement) {
      input.pattern = pattern;
    }
  }

  minlength(input: any, length = 8) {
    if (input && input instanceof HTMLInputElement) {
      input.minLength = length;
    }
  }

  emailChecker = (event: any) => {

    this.emailInputElementValue = event;

    if (this.emailInputElementValue) { // required
      if (typeof this.emailInputElementValue === 'string') {
        if (this.emailInputElementValue.match(this.DEFAULT_EMAIL_REGEXP)) { // patter
          if (this.emailInputElementValue === this.authUser.username) {
            return true;
          } else {
            return this.preventAndNotify(event, 'Wrong username');
          }
        } else {
          this.preventAndNotify(event, 'Username must be an epoka email, example@epoka.edu.al');
          this.pattern(this.emailInputElementValue, this.DEFAULT_EMAIL_REGEXP);
        }
      } else {
        this.preventAndNotify(event, 'Username must be a string');
      }
    } else {
      this.preventAndNotify(event, 'Username is required');
      // this.required(this.emailInputElementValue);
    }
  };

  passwordChecker(event: any) {
    this.passwordInputElementValue = event;
    if (this.passwordInputElementValue) { // required
      if (this.passwordInputElementValue.length >= 8) { // minlength
        if (this.passwordInputElementValue.match(this.DEFAULT_PASSWORD_REGEXP)) { // pattern
          if (this.passwordInputElementValue === this.authUser.password) {
            return true;
          } else {
            return this.preventAndNotify(event, 'Wrong password');
          }
        } else {
          this.preventAndNotify(event, 'Password is weak');
          this.pattern(this.passwordInputElementValue, this.DEFAULT_PASSWORD_REGEXP);
        }
      } else {
        this.preventAndNotify(event, 'Password must be 8 characters or logger');
        this.minlength(this.passwordInputElementValue);
      }
    } else {
      this.preventAndNotify(event, 'Password is required');
      // this.required(this.passwordInputElement);
    }
  }

  formChecker = (user: any, password: any) => {
    if (this.emailChecker(user) && this.passwordChecker(password)) {
      // TODO is up to you
      (localStorage.setItem('isLoggedIn', JSON.stringify(user)));
      this.router.navigate(['home']);
      this.backendService.isLoggedIn.next(user);
      //  localStorage.setItem('isLoggedIn','false')
    } else {
      // this.preventAndNotify(event, 'Form not valid');
    }
  };

  onAddForm() {
    this.user = this.loginForm.controls.username.value;
    this.password = this.loginForm.controls.password.value;
    this.formChecker(this.user, this.password);

  }

}
