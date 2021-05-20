import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InstagramService{
  private baseUrl = 'http://localhost:8080/api/instagrams';
  private httpHeaders = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient) { }

  getAll(): Observable<Instagram[]> {
    return this.http.get<Instagram[]>(`${this.baseUrl}`);
  }

  getById(id: number): Observable<Instagram> {
    return this.http.get<Instagram>(`${this.baseUrl}/${id}`);
  }

  save(instagram: SaveInstagramRequest): Observable<number> {
    return this.http.post<number>(this.baseUrl, instagram, this.httpHeaders);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

}

export interface SaveInstagramRequest {
  id: number;
  name: string;
  photo: string;
}


export interface Instagram {
  id: number;
  name: string;
  photo: string;
}
