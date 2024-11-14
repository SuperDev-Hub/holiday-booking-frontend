import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface User {
  username?: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8081/api/users';

  constructor(private http: HttpClient) {}

  // Register user
  register(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/register`, user)
      .pipe(catchError(this.handleError));
  }

  // Login user
  login(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/login`, user)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    throw error;
  }
}
