import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SongsService {
  baseUrl = "http://127.0.0.1:7999/";
  constructor(private http: HttpClient) { }

  fetchSongs(url) {
    return this.http.get(this.baseUrl+url);
  }

  fetchSong(title) {
    return this.http.get(this.baseUrl+"song?key="+title);
  }

  fetchFeature(feature) {
    return this.http.get(this.baseUrl+"feature?key="+feature);
  }
}
