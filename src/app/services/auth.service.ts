import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://mesfilms-backend.onrender.com/auth';

  constructor(private http: HttpClient, private router: Router) {}

  register(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, data);
  }

  login(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, data);
  }

  saveToken(token: string, nom: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('nom', nom);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getNom(): string | null {
    return localStorage.getItem('nom');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('nom');
    this.router.navigate(['/login']);
  }
}