import { Component, OnInit, ValueProvider } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GalleryService } from '../gallery.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FilterPipe } from '../filters.pipe';
import { Pipe, PipeTransform } from '@angular/core';

import * as _ from 'lodash';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  providers: [GalleryService]
})
export class GalleryComponent implements OnInit {

  constructor(private galleryService: GalleryService) { }

  public posts: any;
  public allPosts: any;
  public currIndex: number;
  public offset: number;
  public query: string;

  ngOnInit() {
    this.getGalleryData();
    this.query = '';
  }

  getGalleryData(): void {
    this.galleryService.getGalleryData().subscribe(
      data => {
        this.allPosts = _.cloneDeep(data);
        this.posts = data;
        this.posts.items.length = 10;
        this.offset = 1;
        this.currIndex = 10;
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
  }  
}
