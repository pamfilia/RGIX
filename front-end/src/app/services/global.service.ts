import { Injectable, isDevMode } from '@angular/core';

@Injectable()
export class GlobalService {

  ApiBaseUrl = isDevMode ?
    'http://localhost:5000/api/' : 'https://osgb.azurewebsites.net/api/';
  AjaxReqRetryCount = 3;
  constructor() {
    Object.freeze(this);
  }
}
