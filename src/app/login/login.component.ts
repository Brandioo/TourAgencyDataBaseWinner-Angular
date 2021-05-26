import {Component, OnInit, Input} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {BackendService} from '../service/backend.service';
import {AuthService} from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = 'Brand';
  password2 = 'Good';
  dateObj = new Date();

  constructor(private router: Router, private backendService: BackendService, private authService: AuthService) {
  }

  ngOnInit(): void {
  }


  // tslint:disable-next-line:typedef
  login() {
    console.log('test');
    this.authService.getDestination(3);
  }

  // tslint:disable-next-line:typedef
  onAddForm(formValue: NgForm) {
    this.email = formValue.value.user;
    this.password2 = formValue.value.password;
    const answer = window.confirm('Are You Sure?');
    if (answer) {
      this.backendService.isLoggedIn = true;
      this.router.navigateByUrl('home');
    }
  }
}
