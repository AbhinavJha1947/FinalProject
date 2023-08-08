import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'your-backend-api-url';

  constructor(private http: HttpClient) {}

  registerUser(user: { email: string, password: string }) {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  loginUser(user: { email: string, password: string }) {
    return this.http.post(`${this.apiUrl}/login`, user);
  }

  resetPassword(email: string) {
    return this.http.post(`${this.apiUrl}/reset-password`, { email });
  }
}

