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

  user = '';
  password = '';
  dateObj = new Date();

  constructor(private router: Router, private backendService: BackendService) {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onAddForm(formValue: NgForm) {
    this.user = formValue.value.username;
    this.backendService.isLoggedIn = true;
    // this.password = formValue.value.password;
    this.router.navigateByUrl('home');
  }
}
