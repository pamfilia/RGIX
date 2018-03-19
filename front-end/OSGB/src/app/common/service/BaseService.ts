import { Observable } from 'rxjs/Observable';
import { ReturnResult } from './ReturnResult';
import { GlobalService } from '../../services/global.service';
import { ajaxGet, ajaxPut, ajaxDelete, ajaxPost, AjaxResponse } from 'rxjs/observable/dom/AjaxObservable';
import { retry, map, catchError } from 'rxjs/operators';
import { isNull } from 'util';

export class BaseService<T> {
    private _globalService: GlobalService;
    protected urlSuffix: string;
    constructor(protected globalService: GlobalService) {
        this._globalService = globalService;
    }

    Read(page: Number = 1, limit: Number = 0): Observable<ReturnResult<T>> | any {
        return new Observable<ReturnResult<T>>(o => {
            ajaxGet(this.globalService.ApiBaseUrl + this.urlSuffix)
                .pipe(
                    retry(this.globalService.AjaxReqRetryCount),
                    catchError((e, v) => {
                        console.log(JSON.stringify(e));
                        return v;
                    }))
                .subscribe(
                    (ajaxRes: AjaxResponse) => o.next(ajaxRes.response as ReturnResult<T>),
                    e => o.next({ resultType: 1, resultValue: <T>{}, humanReadableMessage: ['Oops'] }));
        });
    }

    ReadById(id: any): Observable<ReturnResult<T>> | any {
        return new Observable<ReturnResult<T>>(o => {
            ajaxGet(this.globalService.ApiBaseUrl + this.urlSuffix)
                .pipe(
                    retry(this.globalService.AjaxReqRetryCount),
                    catchError((e, v) => {
                        console.log(JSON.stringify(e));
                        return v;
                    }))
                .subscribe(
                    (ajaxRes: AjaxResponse) => o.next(ajaxRes.response as ReturnResult<T>),
                    e => o.next({ resultType: 1, resultValue: <T>{}, humanReadableMessage: ['Oops'] }));
        });
    }

    Create(): Observable<ReturnResult<T>> | any {
        return new Observable<ReturnResult<T>>(o => {
            ajaxPost(this.globalService.ApiBaseUrl + this.urlSuffix)
                .pipe(
                    retry(this.globalService.AjaxReqRetryCount),
                    catchError((e, v) => {
                        console.log(JSON.stringify(e));
                        return v;
                    }))
                .subscribe(
                    (ajaxRes: AjaxResponse) => o.next(ajaxRes.response as ReturnResult<T>),
                    e => o.next({ resultType: 1, resultValue: <T>{}, humanReadableMessage: ['Oops'] }));
        });
    }

    Update(): Observable<ReturnResult<T>> | any {
        return new Observable<ReturnResult<T>>(o => {
            ajaxPut(this.globalService.ApiBaseUrl + this.urlSuffix)
                .pipe(
                    retry(this.globalService.AjaxReqRetryCount),
                    catchError((e, v) => {
                        console.log(JSON.stringify(e));
                        return v;
                    }))
                .subscribe(
                    (ajaxRes: AjaxResponse) => o.next(ajaxRes.response as ReturnResult<T>),
                    e => o.next({ resultType: 1, resultValue: <T>{}, humanReadableMessage: ['Oops'] }));
        });
    }

    Delete(): Observable<ReturnResult<T>> | any {
        return new Observable<ReturnResult<T>>(o => {
            ajaxDelete(this.globalService.ApiBaseUrl + this.urlSuffix)
                .pipe(
                    retry(this.globalService.AjaxReqRetryCount),
                    catchError((e, v) => {
                        console.log(JSON.stringify(e));
                        return v;
                    }))
                .subscribe(
                    (ajaxRes: AjaxResponse) => o.next(ajaxRes.response as ReturnResult<T>),
                    e => o.next({ resultType: 1, resultValue: <T>{}, humanReadableMessage: ['Oops'] }));
        });
    }
}
