import { Injectable } from '@angular/core';
import { BaseService } from '../../../common/service/BaseService';
import { IProposalModel } from '../../../models/proposal/IProposal';
import { GlobalService } from '../../../services/global.service';

@Injectable()
export class ProposalService extends BaseService<IProposalModel> {
  constructor(globalService: GlobalService) {
    super(globalService);
    this.urlSuffix = 'proposal';
  }
}
