import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServer {
  baseUrl = 'https://fakestoreapi.com'

  constructor(private http: HttpClient) { }

  login(credentials: any): Observable<any> {
  return this.http.post('https://fakestoreapi.com/auth/login', {
    username: credentials.username, // Use 'username' instead of 'email'
    password: credentials.password
  });
}

signup(credentials: any): Observable<any> {
  return this.http.post('https://fakestoreapi.com/users', {
    "id": 0,
"username": credentials.username,
"email": credentials.email,
"password": credentials.password
  });
}

getUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/users`);
  }
}

