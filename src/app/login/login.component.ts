import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private user: UserService) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    console.log('hit');
  }


  // @ts-ignore
  // tslint:disable-next-line:typedef
  loginUser(e) {
    e.preventDefault();
    console.log(e);
    const username = e.target.elements[0].value;
    const password = e.target.elements[1].value;

    // tslint:disable-next-line:triple-equals
    if (username == 'admin' && password == 'admin') {
      this.user.setUserLoggedIn();
      this.router.navigate(['home']);
    }
  }



}
