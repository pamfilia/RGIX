import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';

@Injectable()
export class GlobalService {

  ApiBaseUrl = environment.production ?
    'https://osgb.azurewebsites.net/api/' : 'http://localhost:5000/api/';
  AjaxReqRetryCount = 3;
  constructor() {
    Object.freeze(this);
  }
}
