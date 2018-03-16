import { Injectable } from '@angular/core';
import { BaseService } from '../../../../common/service/BaseService';
import { ICompanyListModel } from '../../../../models/company/ICompanyListModel';
import { GlobalService } from '../../../../services/global.service';

@Injectable()
export class CompanyService extends BaseService<ICompanyListModel[]> {
  constructor(globalService: GlobalService) {
    super(globalService);
    this.urlSuffix = 'company';
  }
}
