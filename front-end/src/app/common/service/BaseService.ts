import { Observable } from 'rxjs/Observable';
import { ReturnResult } from './ReturnResult';
import { GlobalService } from '../../services/global.service';
import { ajaxGet, ajaxPut, ajaxDelete, ajaxPost, AjaxResponse } from 'rxjs/observable/dom/AjaxObservable';
import { retry, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { isNullOrUndefined } from 'util';
import { HttpHeaders } from '@angular/common/http';
export class BaseService<T> {
    protected urlSuffix: string;
    private readonly emptyResult: ReturnResult<T> =
        {
            resultType: 1,
            resultValue: null,
            totalRecordCount: 0,
            requestContinuation: null,
            humanReadableMessage: ['Oops']
        };
    constructor(protected globalService: GlobalService) { }

    Read(page?: number, requestContinuation?: string, limit?: number): Observable<ReturnResult<T>> {
        const url = this.globalService.ApiBaseUrl +
            this.urlSuffix + '/?' +
            (isNullOrUndefined(page) ? '' : 'p=' + page + '&') +
            (isNullOrUndefined(requestContinuation) ? '' : 'rc=' + requestContinuation + '&') +
            (isNullOrUndefined(limit) ? '' : 'l=' + limit);
        return new Observable<ReturnResult<T>>(o => {
            ajaxGet(url)
                .pipe(retry(this.globalService.AjaxReqRetryCount),
                    catchError((e, v) => {
                        o.error(e);
                        o.complete();
                        return of(this.emptyResult);
                    }))
                .subscribe(
                    (ajaxRes: AjaxResponse) => o.next(ajaxRes.response as ReturnResult<T>),
                    e => o.error(e),
                    () => o.complete());
        });
    }

    ReadById(id: any): Observable<ReturnResult<T>> {
        return new Observable<ReturnResult<T>>(o => {
            ajaxGet(this.globalService.ApiBaseUrl + this.urlSuffix)
                .pipe(retry(this.globalService.AjaxReqRetryCount),
                    catchError((e, v) => {
                        o.error(e);
                        o.complete();
                        return of(this.emptyResult);
                    }))
                .subscribe(
                    (ajaxRes: AjaxResponse) => o.next(ajaxRes.response as ReturnResult<T>),
                    e => o.error(e),
                    () => o.complete());
        });
    }

    Create(item: T): Observable<ReturnResult<T>> {
        return new Observable<ReturnResult<T>>(o => {
            ajaxPost(this.globalService.ApiBaseUrl + this.urlSuffix,
                JSON.stringify(item), { 'Content-Type': 'application/json' })
                .pipe(retry(this.globalService.AjaxReqRetryCount),
                    catchError((e, v) => {
                        o.error(e);
                        o.complete();
                        return of(this.emptyResult);
                    }))
                .subscribe(
                    (ajaxRes: AjaxResponse) => o.next(ajaxRes.response as ReturnResult<T>),
                    e => o.error(e),
                    () => o.complete());
        });
    }

    Update(item: T): Observable<ReturnResult<T>> {
        return new Observable<ReturnResult<T>>(o => {
            ajaxPut(this.globalService.ApiBaseUrl + this.urlSuffix,
                JSON.stringify(item), { 'Content-Type': 'application/json' })
                .pipe(retry(this.globalService.AjaxReqRetryCount),
                    catchError((e, v) => {
                        o.error(e);
                        o.complete();
                        return of(this.emptyResult);
                    }))
                .subscribe(
                    (ajaxRes: AjaxResponse) => o.next(ajaxRes.response as ReturnResult<T>),
                    e => o.error(e),
                    () => o.complete());
        });
    }

    Delete(id: any): Observable<ReturnResult<T>> | any {
        return new Observable<ReturnResult<T>>(o => {
            ajaxDelete(this.globalService.ApiBaseUrl + this.urlSuffix + '/' + id)
                .pipe(retry(this.globalService.AjaxReqRetryCount),
                    catchError((e, v) => {
                        o.error(e);
                        o.complete();
                        return of(this.emptyResult);
                    }))
                .subscribe(
                    (ajaxRes: AjaxResponse) => o.next(ajaxRes.response as ReturnResult<T>),
                    e => o.error(e),
                    () => o.complete());
        });
    }
}
