import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { Photo } from '../interface/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getPhoto(id: number): Observable<Photo> {
    return this.http.get<Photo>(`${this.apiUrl}/photos/${id}`)
  }
}
