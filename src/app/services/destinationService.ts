import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DestinationService{
  private baseUrl = 'http://localhost:8080/api/destinations';
  private httpHeaders = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient) { }

  getAll(): Observable<Destination[]> {
    return this.http.get<Destination[]>(`${this.baseUrl}`);
  }

  getById(id: number): Observable<Destination> {
    return this.http.get<Destination>(`${this.baseUrl}/${id}`);
  }

  save(destination: SaveDestinationRequest): Observable<number> {
    return this.http.post<number>(this.baseUrl, destination, this.httpHeaders);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

}

export interface SaveDestinationRequest {
  id: number;
  name: string;
}


export interface Destination {
  id: number;
  name: string;
  createdAt: Date
}
