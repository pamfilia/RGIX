import { Injectable } from '@angular/core';
import { BaseService } from '../../../../common/service/BaseService';
import { INaceModel } from '../../../../models/nace/INaceModel';
import { Observable } from 'rxjs/Observable';
import { ReturnResult } from '../../../../common/service/ReturnResult';
import { GlobalService } from '../../../../services/global.service';

@Injectable()
export class NaceService extends BaseService<INaceModel> {
  constructor(globalService: GlobalService) {
    super(globalService);
    this.urlSuffix = 'nace';
  }
}
