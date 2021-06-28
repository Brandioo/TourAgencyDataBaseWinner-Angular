import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  isLoggedIn: BehaviorSubject<any>;
  currentUser: Observable<any>;
  toDoUsers = [
    'Brand',
    'Xhoi'
  ];
  private serverUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) {
    this.isLoggedIn = new BehaviorSubject<any>(localStorage.getItem('isLoggedIn'))
    this.currentUser = this.isLoggedIn.asObservable();
  }

  public get currentUserValue(): any {
    return this.isLoggedIn.value;
}
  getUsers(): Observable<any> {
    return this.http.get<any>(this.serverUrl + 'todoitems');
  }

  addUser(user: any): Observable<any> {
    return this.http.post<any>(this.serverUrl + 'todoitems', user);
  }
}
