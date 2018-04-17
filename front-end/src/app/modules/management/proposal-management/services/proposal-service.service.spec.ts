import { TestBed, inject } from '@angular/core/testing';

import { ProposalServiceService } from './proposal-service.service';

describe('ProposalServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProposalServiceService]
    });
  });

  it('should be created', inject([ProposalServiceService], (service: ProposalServiceService) => {
    expect(service).toBeTruthy();
  }));
});
