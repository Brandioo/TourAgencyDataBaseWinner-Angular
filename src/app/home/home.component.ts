import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {BackendService} from '../service/backend.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  latitude = 51.678418;
  longitude = 7.809007;
  locationChosen = false;
  isLoggedIn: boolean = false;

  onChoseLocation(event: any) {
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
    this.locationChosen = true;
  }

  constructor(private router: Router, public backendService: BackendService) {

  }

  ngOnInit(): void {
  }

  logOut() {
    const answer = window.confirm('Are You Sure?');
    if (answer) {
      localStorage.removeItem('isLoggedIn');
      this.router.navigate(['/login']);
    }
  }

  // tslint:disable-next-line:typedef
  // logOut() {
  //   const answer = window.confirm('Are You Sure?');
  //   if (answer) {
  //     // this.backendService.isLoggedIn = false;
  //     this.router.navigateByUrl('/');
  //   }
  // }
}
