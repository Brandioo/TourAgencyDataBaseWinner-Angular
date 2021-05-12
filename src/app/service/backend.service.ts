import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  isLoggedIn = false;

  toDoUsers = [
    'Brand',
    'Xhoi'
  ];
  private serverUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<any> {
    return this.http.get<any>(this.serverUrl + 'todoitems');
  }

  addUser(user: any): Observable<any> {
    return this.http.post<any>(this.serverUrl + 'todoitems', user);
  }
}
