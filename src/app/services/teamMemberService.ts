import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamMemberService{
  private baseUrl = 'http://localhost:8080/api/teamMembers';
  private httpHeaders = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient) { }

  getAll(): Observable<TeamMember[]> {
    return this.http.get<TeamMember[]>(`${this.baseUrl}`);
  }

  getById(id: number): Observable<TeamMember> {
    return this.http.get<TeamMember>(`${this.baseUrl}/${id}`);
  }

  save(teamMembers: SaveTeamMemberRequest): Observable<number> {
    return this.http.post<number>(this.baseUrl, teamMembers, this.httpHeaders);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

}

export interface SaveTeamMemberRequest {
  id: number;
  name: string;
  photo: string;
  role: string;
}


export interface TeamMember {
  id: number;
  name: string;
  photo: string;
  role: string;
}
