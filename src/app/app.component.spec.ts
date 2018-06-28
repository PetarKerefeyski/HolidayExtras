import { TestBed, async } from '@angular/core/testing';
import { GalleryComponent }  from './gallery/gallery.component'
import { GalleryService } from './gallery.service';
import { PostComponent }  from './post/post.component'
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FilterPipe } from './filters.pipe';
import { HttpModule } from '@angular/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        GalleryComponent,
        PostComponent,
        FilterPipe
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        InfiniteScrollModule,
        HttpModule,
        HttpClientModule, 
      ],

    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Holiday Extras Task'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Holiday Extras Task');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Holiday Extras Task');
  }));
});
