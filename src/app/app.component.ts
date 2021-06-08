import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {BackendService} from './service/backend.service';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Simplicity Is Here';
  // myName = 'SDA';
  user = '';
  password = '';
  dateObj = new Date();
  isLoggedIn = false;

  constructor(private router: Router, public backendService: BackendService, public dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.isLoggedIn = Boolean(localStorage.getItem('isLoggedIn'));
  }

  // tslint:disable-next-line:typedef
  logOut() {
    const answer = window.confirm('Are You Sure?');
    if (answer) {
      this.backendService.isLoggedIn = false;
      this.router.navigateByUrl('/');
    }
  }


  // tslint:disable-next-line:typedef
  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
// tslint:disable-next-line:component-class-suffix
export class DialogContentExampleDialog {}






