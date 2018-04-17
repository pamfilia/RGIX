import { Injectable } from '@angular/core';
import { BaseService } from '../../../../common/service/BaseService';
import { IInterviewModel } from '../../../../models/interview/IInterviewModel';
import { GlobalService } from '../../../../services/global.service';

@Injectable()
export class InterviewService extends BaseService<IInterviewModel> {

  constructor(globalService: GlobalService) {
    super(globalService);
    this.urlSuffix = 'interview';
  }

}
