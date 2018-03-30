import { Observable } from 'rxjs/Observable';
import { ReturnResult } from './ReturnResult';
import { GlobalService } from '../../services/global.service';
import { ajaxGet, ajaxPut, ajaxDelete, ajaxPost, AjaxResponse } from 'rxjs/observable/dom/AjaxObservable';
import { retry, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { isNullOrUndefined } from 'util';
export class BaseService<T> {
    protected urlSuffix: string;
    private readonly emptyResult: ReturnResult<T> =
        {
            resultType: 1,
            resultValue: <T>{},
            totalRecordCount: 0,
            requestContinuation: '',
            humanReadableMessage: ['Oops']
        };
    constructor(protected globalService: GlobalService) { }

    Read(page?: number, requestContinuation?: string, limit?: number): Observable<ReturnResult<T>> | any {
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

    ReadById(id: any): Observable<ReturnResult<T>> | any {
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

    Create(): Observable<ReturnResult<T>> | any {
        return new Observable<ReturnResult<T>>(o => {
            ajaxPost(this.globalService.ApiBaseUrl + this.urlSuffix)
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

    Update(): Observable<ReturnResult<T>> | any {
        return new Observable<ReturnResult<T>>(o => {
            ajaxPut(this.globalService.ApiBaseUrl + this.urlSuffix)
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

    Delete(): Observable<ReturnResult<T>> | any {
        return new Observable<ReturnResult<T>>(o => {
            ajaxDelete(this.globalService.ApiBaseUrl + this.urlSuffix)
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
