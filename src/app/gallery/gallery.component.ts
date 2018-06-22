import { Component, OnInit, ValueProvider } from '@angular/core';
import { GalleryService } from '../gallery.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import * as _ from 'lodash';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  providers: [GalleryService]
})
export class GalleryComponent implements OnInit {

  constructor(private galleryService: GalleryService) {
    
  }

  public posts: any;
  public allPosts: any;
  public currIndex: number;
  public offset: number;

  ngOnInit() {
    this.getGalleryData();
  }

  getGalleryData(): void {
    this.galleryService.getGalleryData().subscribe(
      data => {
        console.log(data);
        this.allPosts = _.cloneDeep(data);
        this.posts = data;
        this.posts.items.length = 5;
        this.offset = 1;
        this.currIndex = 5;
      }
    )
  }

  onScrollDown() {
    if(this.currIndex >= this.allPosts.items.length) {
      return;
    }
    for (let index = this.currIndex; index < this.currIndex + this.offset; index++) {
      this.posts.items.push(this.allPosts.items[index]);
    }
    this.currIndex += this.offset;
    console.log('scrolled down!!');
  }
  
}
