import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  content: string | undefined;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getPublicContent().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }

  // logOut() {
  //   const answer = window.confirm('Are You Sure?');
  //   if (answer) {
  //     this.backendService.isLoggedIn = false;
  //     this.router.navigateByUrl('/');
  //   }
  // }

}
