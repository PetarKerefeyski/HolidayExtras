import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()
  post: object;
  query: string;

  constructor() { }

  ngOnInit() {
  }

  getAuthor(author: string): string {
    var flickrLink = "nobody@flickr.com (\"";
    author = author.substring(flickrLink.length, author.length - 2);
    author = author.replace(/\s/g, "");
    return author;
  }
}
