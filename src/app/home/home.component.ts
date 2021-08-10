import {Component, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {Router} from '@angular/router';
import {BackendService} from '../service/backend.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnChanges, OnDestroy {
  constructor(private router: Router, public backendService: BackendService) {
  }
  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  logOut() {
    let answer: boolean;
    // @ts-ignore
    answer = window.confirm('Are You Sure?');
    if (answer) {
      // @ts-ignore
      localStorage.removeItem('isLoggedIn');
      this.router.navigate(['/login']);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnDestroy(): void {
  }
}
