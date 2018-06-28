import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  data: Object;

  constructor(private http: HttpClient) { } 

  public getGalleryData(): any {
    return this.http.get('http://localhost:1337/api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=?');
  }
}
