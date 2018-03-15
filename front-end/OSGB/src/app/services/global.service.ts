import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {

  ApiBaseUrl = 'http://localhost:5000/api/';
  constructor() { }

}
