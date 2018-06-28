import { TestBed, inject } from '@angular/core/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { GalleryService } from './gallery.service';

describe('GalleryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule, HttpClientModule ],
      providers: [GalleryService]
    });
  });

  it('should be created', inject([GalleryService], (service: GalleryService) => {
    expect(service).toBeTruthy();
  }));
});
