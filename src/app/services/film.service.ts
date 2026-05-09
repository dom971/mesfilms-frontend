import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  //private apiUrl = 'http://localhost:3000/films';
  private apiUrl = 'https://mesfilms-backend.onrender.com/films';

  constructor(private http: HttpClient) { }

  getBoites(): Observable<any> {
    return this.http.get(`${this.apiUrl}/boites`);
  }

  getFilms(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getFilm(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  addFilm(film: any): Observable<any> {
    return this.http.post(this.apiUrl, film);
  }

  deleteFilm(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}