import { Observable } from 'rxjs/Observable';
import { ReturnResult } from './ReturnResult';
import { GlobalService } from '../../services/global.service';
import { ajaxGet, ajaxPut, ajaxDelete, ajaxPost, AjaxResponse } from 'rxjs/observable/dom/AjaxObservable';
import { retry, map, catchError } from 'rxjs/operators';
import { ServiceOperationType } from '../enums/ServiceOperationType';
import { isNull } from 'util';

export class BaseService<T> {
    private _globalService: GlobalService;
    protected urlSuffix: string;
    constructor(protected globalService: GlobalService) {
        this._globalService = globalService;
    }
    private handleError(a: any, b: any, c: any): any {
        console.log(a + '|' + b + ':' + isNull(c) ? '' : JSON.stringify(c));
    }

    Call(sot: ServiceOperationType, objData: T | null = null): Observable<ReturnResult<T>>|any {
        switch (sot) {
            case ServiceOperationType.Create:
            case ServiceOperationType.Read:
            return new Observable<ReturnResult<T>>(o => {
                ajaxGet(this.globalService.ApiBaseUrl + this.urlSuffix)
                    .pipe(
                        retry(this.globalService.AjaxReqRetryCount),
                        catchError(e => this.handleError(e, sot, objData)))
                    .subscribe(
                        (ajaxRes: AjaxResponse) => o.next(ajaxRes.response as ReturnResult<T>),
                        e => o.next({ resultType: 1, resultValue: <T>{}, humanReadableMessage: ['Oops'] }));
                    });
            case ServiceOperationType.Update:
                break;
            case ServiceOperationType.Delete:
                break;
        }
    }
}
