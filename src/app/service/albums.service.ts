import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Album } from '../interface/album';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  private apiUrl = environment.apiUrl

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.apiUrl}/albums`);
  }

  deleteAlbum(id: number): Observable<Album[]> {
    return this.http.delete<Album[]>(`${this.apiUrl}/albums/${id}`);
  }
}
