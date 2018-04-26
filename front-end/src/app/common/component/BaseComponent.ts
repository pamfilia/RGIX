import { Utils } from '../../common/utils/Utils';
import { ComponentModeEnum } from '../../common/component/ComponentModeEnum';

export class BaseComponent<T> {
    componentMode: ComponentModeEnum;
    constructor() { }

    encodeParams(baseUrl: string, item: T): any {
        return baseUrl + '/' + Utils.b64EncodeUnicode(JSON.stringify(item));
    }

    decodeParams(data: string): T {
        return <T>JSON.parse(Utils.b64DecodeUnicode(data));
    }

    /* Navigate(url: string) {
        //this.location.replaceState('/');
        this.router.navigate([url]);
    } */
}
