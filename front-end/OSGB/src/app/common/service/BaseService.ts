import { Observable } from 'rxjs/Observable';
import { ReturnResult } from './ReturnResult';
import { GlobalService } from '../../services/global.service';
import { ajax } from 'rxjs/observable/dom/ajax';

export class BaseService<T> {
    private _globalService: GlobalService;
    protected urlSuffix: string;
    constructor(protected globalService: GlobalService) {
        this._globalService = globalService;
    }
    Call(): Observable<ReturnResult<T>> {
        return new Observable<ReturnResult<T>>(o => {
            ajax(this.globalService.ApiBaseUrl + this.urlSuffix).subscribe(
                r => o.next(r.response as ReturnResult<T>),
                e => o.error({ resultType: 1, resultVaue: <T>{}, humanReadableMessage: 'Oops' }));
        });
    }
}
