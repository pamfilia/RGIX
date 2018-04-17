import { TestBed, inject } from '@angular/core/testing';

import { InterviewServiceService } from './interview-service.service';

describe('InterviewServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InterviewServiceService]
    });
  });

  it('should be created', inject([InterviewServiceService], (service: InterviewServiceService) => {
    expect(service).toBeTruthy();
  }));
});
