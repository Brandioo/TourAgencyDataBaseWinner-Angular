import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
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
  isLoggedIn: any;
  logout: any;

  constructor(private router: Router, public backendService: BackendService, public dialog: MatDialog) {

    this.backendService.currentUser.subscribe(
      data => {
        this.isLoggedIn = data;
        console.log(data);
      }
    );


  }

  ngOnInit(): void {

  }

  // tslint:disable-next-line:typedef
  logOut() {
    const answer = window.confirm('Are You Sure?');
    if (answer) {
      localStorage.removeItem('isLoggedIn');
      this.backendService.isLoggedIn.next(null);
      this.router.navigate(['/login']);
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
export class DialogContentExampleDialog {
}






