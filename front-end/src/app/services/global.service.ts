import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {

  ApiBaseUrl = 'https://osgb.azurewebsites.net/api/';
  AjaxReqRetryCount = 3;
  constructor() {
    Object.freeze(this);
   }
}
