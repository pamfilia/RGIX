import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';

@Injectable()
export class GlobalService {

  ApiBaseUrl = environment.production ?
    'http://localhost:5000/api/' : 'https://osgb.azurewebsites.net/api/';
  AjaxReqRetryCount = 3;
  constructor() {
    Object.freeze(this);
  }
}
