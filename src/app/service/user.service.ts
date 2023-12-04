import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // cung cấp để thực hiện các yêu cầu HTTP
import { Observable } from 'rxjs';
import { User } from '../interface/user';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = environment.apiUrl

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users`);
  }

  getUser(id:number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/users/${id}`);
  }

  createUser(user: User): Observable<User[]> {
    return this.http.post<User[]>(`${this.apiUrl}/users`, user);
  }

  updateUser(user: User): Observable<User[]> {
    return this.http.put<User[]>(`${this.apiUrl}/users/${user.id}`, user);
  }

  deleteUser(id: number): Observable<User[]> {
    return this.http.delete<User[]>(`${this.apiUrl}/users/${id}`);
  }
}

