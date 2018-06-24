import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PostComponent } from './post/post.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './filters.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    PostComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, 
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
