import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { GalleryComponent } from './gallery.component';
import { GalleryService } from '../gallery.service';
import { HttpModule } from '@angular/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FilterPipe } from '../filters.pipe';
import { Pipe, PipeTransform } from '@angular/core';
import { PostComponent } from '../post/post.component';


describe('GalleryComponent', () => {
  let component: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        GalleryComponent,
        PostComponent,
        FilterPipe 
      ],
      imports: [ 
        FormsModule, 
        ReactiveFormsModule, 
        InfiniteScrollModule, 
        HttpModule,
        HttpClientModule
      ],
      providers: [ GalleryService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
