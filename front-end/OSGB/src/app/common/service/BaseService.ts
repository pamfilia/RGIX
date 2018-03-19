import { Observable } from 'rxjs/Observable';
import { ReturnResult } from './ReturnResult';
import { GlobalService } from '../../services/global.service';
import { ajaxGet, ajaxPut, ajaxDelete, ajaxPost, AjaxResponse } from 'rxjs/observable/dom/AjaxObservable';
import { retry, map, catchError } from 'rxjs/operators';
import { isNull } from 'util';

export class BaseService<T> {
    private _globalService: GlobalService;
    protected urlSuffix: string;
    private readonly emptyResult: ReturnResult<T> =
    { resultType: 1, resultValue: <T>{}, totalRecordCount: 0, humanReadableMessage: ['Oops'] };
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
                    e => o.next(this.emptyResult));
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
                    e => o.next(this.emptyResult));
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
                    e => o.next(this.emptyResult));
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
                    e => o.next(this.emptyResult));
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
                    e => o.next(this.emptyResult));
        });
    }
}
