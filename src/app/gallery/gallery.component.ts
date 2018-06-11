import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor(private galleryService: GalleryService) { }


  ngOnInit() {
    this.getGalleryData();
  }

  getGalleryData(): void {
    console.log(this.galleryService.getGalleryData());
  }

}
