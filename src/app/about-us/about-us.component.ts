import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {BackendService} from '../service/backend.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor(private router: Router, public backendService: BackendService ) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  logOut() {
  //   const answer = window.confirm('Are You Sure?');
  //   if (answer) {
  //     this.backendService.isLoggedIn = false;
  // //     this.router.navigateByUrl('/');
  // // //   }
  }

}
