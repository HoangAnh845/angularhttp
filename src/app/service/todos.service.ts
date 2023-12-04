import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Todo } from '../interface/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private apiUrl = environment.apiUrl

  constructor(private http: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.apiUrl}/todos`);
  }
}
