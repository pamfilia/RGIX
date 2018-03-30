import { TestBed, inject } from '@angular/core/testing';

import { NaceService } from './nace-service.service';
import { GlobalService } from '../../../../services/global.service';

describe('NaceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NaceService, GlobalService]
    });
  });

  it('should be created', inject([NaceService], (service: NaceService) => {
    expect(service).toBeTruthy();
  }));
});
