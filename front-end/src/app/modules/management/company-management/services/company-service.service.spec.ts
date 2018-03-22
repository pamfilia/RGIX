import { TestBed, inject } from '@angular/core/testing';

import { CompanyService } from './company-service.service';
import { GlobalService } from '../../../../services/global.service';

describe('CompanyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompanyService, GlobalService]
    });
  });

  it('should be created', inject([CompanyService], (service: CompanyService) => {
    expect(service).toBeTruthy();
  }));
});
