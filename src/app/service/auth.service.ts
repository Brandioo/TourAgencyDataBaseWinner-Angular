import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  // tslint:disable-next-line:typedef
  login(username: string, password: string) {
    const data = {username, password};
    // tslint:disable-next-line:no-unused-expression
    this.http.post(this.apiUrl + '/destinations', data);
  }

  // tslint:disable-next-line:typedef
  getDestination(id: any) {
    // @ts-ignore
    this.http.get(this.apiUrl + '/destinations/' + id).subscribe(resp => {
      console.log(resp);
    });
    // .then((response: any) => {
    // console.log(response);
    // });
  }
}
