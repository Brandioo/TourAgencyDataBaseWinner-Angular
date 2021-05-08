import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TourService{
  private baseUrl = 'http://localhost:8080/api/tours';
  private httpHeaders = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient) { }

  getAll(): Observable<Tour[]> {
    return this.http.get<Tour[]>(`${this.baseUrl}`);
  }

  getById(id: number): Observable<Tour> {
    return this.http.get<Tour>(`${this.baseUrl}/${id}`);
  }

  save(destination: SaveTourRequest): Observable<number> {
    return this.http.post<number>(this.baseUrl, destination, this.httpHeaders);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

}

export interface SaveTourRequest {
  id: number;
  title: string;
  days: number;
  maxPeople: number;
  minPeople: number;
  description: string;
  departure: string;
  photo: string;
  featured: boolean;
  travelType: TravelType;
  price: number;
  quantity: number;
}


export interface Tour {
  id: number;
  title: string;
  days: number;
  maxPeople: number;
  minPeople: number;
  description: string;
  departure: string;
  photo: string;
  featured: boolean;
  travelType: TravelType;
  price: number;
  quantity: number;
  createdAt: Date;
}

export enum TravelType {
  Adventure,
  Hiking,
  Surfing
}
