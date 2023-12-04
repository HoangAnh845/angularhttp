import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Post } from '../interface/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private apiUrl = environment.apiUrl

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiUrl}/posts`);
  }

  getPost(id: number): Observable<Post[] | any> {
    return this.http.get<Post[] | any>(`${this.apiUrl}/posts/${id}`);
  }

  updatePost(post: Post): Observable<Post[] | any> {
    return this.http.put<Post[] | any>(`${this.apiUrl}/posts/${post.id}`, post);
  }

  deletePost(id: number): Observable<Post[]> {
    return this.http.delete<Post[]>(`${this.apiUrl}/posts/${id}`);
  }
}
