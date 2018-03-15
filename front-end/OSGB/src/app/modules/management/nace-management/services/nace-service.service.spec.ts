import { TestBed, inject } from '@angular/core/testing';

import { NaceService } from './nace-service.service';

describe('NaceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NaceService]
    });
  });

  it('should be created', inject([NaceService], (service: NaceService) => {
    expect(service).toBeTruthy();
  }));
});
