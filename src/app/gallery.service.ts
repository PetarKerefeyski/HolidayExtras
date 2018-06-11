import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private http: HttpClient) { }


  getGalleryData(){
    return this.http.get<Object>('https://api.flickr.com/services/feeds/photos_public.gne?format=json');
  }
}
