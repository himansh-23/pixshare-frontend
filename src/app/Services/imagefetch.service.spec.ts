import { TestBed } from '@angular/core/testing';

import { ImagefetchService } from './imagefetch.service';

describe('ImagefetchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImagefetchService = TestBed.get(ImagefetchService);
    expect(service).toBeTruthy();
  });
});
