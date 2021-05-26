import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  private isUserLoggedIn;
  public username!: string;

  constructor() {
    this.isUserLoggedIn = false;
  }

  // tslint:disable-next-line:typedef
  setUserLoggedIn() {
    this.isUserLoggedIn = true;
    this.username = 'admin';
  }

  // tslint:disable-next-line:typedef
  getUserLoggedIn() {
    return this.isUserLoggedIn;
  }

}
