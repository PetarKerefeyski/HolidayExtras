import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { JsonpModule, Jsonp, Response} from '@angular/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  private _url: string = "/assets/data/data.json";

  data: Object;

  constructor(private http: HttpClient) { } 

  public getGalleryData(): any {
    return this.http.get<any>(this._url);

    // .pipe(
    //   map(response => {
    //     console.log(response);
    //   })
    
    // return this.http.get('https://api.flickr.com/services/feeds/photos_public.gne?format=jsonp')
  }
}
