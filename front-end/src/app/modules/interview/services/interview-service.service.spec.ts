import { TestBed, inject } from '@angular/core/testing';

import { InterviewService } from './interview-service.service';
import { GlobalService } from '../../../services/global.service';

describe('InterviewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InterviewService, GlobalService]
    });
  });

  it('should be created', inject([InterviewService], (service: InterviewService) => {
    expect(service).toBeTruthy();
  }));
});
