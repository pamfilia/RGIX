import { Utils } from '../../common/utils/Utils';
import { ComponentModeEnum } from '../../common/component/ComponentModeEnum';

export class BaseComponent<T> {
    protected _componentMode: ComponentModeEnum;
    constructor(private componentMode: ComponentModeEnum) {
        this._componentMode = componentMode;
    }

    encodeParams(baseUrl: string, item: T): any {
        return baseUrl + '/' + Utils.b64EncodeUnicode(JSON.stringify(item));
    }

    decodeParams(data: string): T {
        return <T>JSON.parse(Utils.b64DecodeUnicode(data));
    }
}