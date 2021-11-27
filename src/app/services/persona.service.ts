import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Persona } from '../entities/Persona';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private readonly apiUrl = "http://192.168.178.101:8084";

  constructor(private http : HttpClient) { }

  getPersona(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.apiUrl);
  }

  deletePersona(persona : Persona) : Observable<Persona>{
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: persona
    }
    return this.http.delete<Persona>(this.apiUrl, options);
  }

  updatePersona(persona : Persona) : Observable<Persona>{
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.put<Persona>(this.apiUrl, persona, options);
  }

  addPersona(persona : Persona): Observable<Persona>{
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.post<Persona>(this.apiUrl, persona, options);
  }
}
