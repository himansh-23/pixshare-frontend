import { TestBed } from '@angular/core/testing';

import { ImagedetailscontainerService } from './imagedetailscontainer.service';

describe('ImagedetailscontainerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImagedetailscontainerService = TestBed.get(ImagedetailscontainerService);
    expect(service).toBeTruthy();
  });
});
