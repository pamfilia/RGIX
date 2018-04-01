import { Injectable } from '@angular/core';
import { BaseService } from '../../../../common/service/BaseService';
import { ICompanyModel } from '../../../../models/company/ICompanyModel';
import { GlobalService } from '../../../../services/global.service';

@Injectable()
export class CompanyService extends BaseService<ICompanyModel> {
  constructor(globalService: GlobalService) {
    super(globalService);
    this.urlSuffix = 'company';
  }
}
