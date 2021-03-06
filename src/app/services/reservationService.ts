import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Tour} from './tourService';
import {Client} from './clientService';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private baseUrl = 'http://localhost:8080/api/reservations';
  private httpHeaders = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
  };

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.baseUrl}`);
  }

  getById(id: number): Observable<Reservation> {
    return this.http.get<Reservation>(`${this.baseUrl}/${id}`);
  }

  save(reservation: SaveReservationRequest): Observable<number> {
    return this.http.post<number>(this.baseUrl, reservation, this.httpHeaders);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}

export interface SaveReservationRequest {
  id: number;
  finalPrice: number;
  comment: string;
  checkInDate: Date;
  checkOutDate: Date;
  client: Client;
  tour: Tour;
}

export interface Reservation {
  id: number;
  finalPrice: number;
  comment: string;
  checkInDate: Date;
  checkOutDate: Date;
  client: Client;
  tour: Tour;
}
