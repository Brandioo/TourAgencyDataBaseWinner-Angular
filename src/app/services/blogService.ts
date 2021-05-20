import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private baseUrl = 'http://localhost:8080/api/blogs';
  private httpHeaders = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
  };
  constructor(private http: HttpClient) {
  }
  getAll(): Observable<Blog[]> {
    return this.http.get<Blog[]>(`${this.baseUrl}`);
  }
  getById(id: number): Observable<Blog> {
    return this.http.get<Blog>(`${this.baseUrl}/${id}`);
  }
  save(blog: SaveBlogRequest): Observable<number> {
    return this.http.post<number>(this.baseUrl, blog, this.httpHeaders);
  }
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
export interface SaveBlogRequest {
  id: number;
  title: string;
  author: string;
  content: string;
  createdAt: Date;
  photo: string;
}

export interface Blog {
  id: number;
  title: string;
  author: string;
  content: string;
  createdAt: Date;
  photo: string;
}
