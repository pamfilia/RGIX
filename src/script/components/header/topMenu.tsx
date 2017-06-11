/**
 * Created by mehmetgani on 26/03/2017.
 */
/// <reference path="../../common/ITopMenuProps.d.ts" />

import { BaseComponent } from "../../common/BaseComponent";
import { TopMenuTemplate } from "./topMenu.template";

export default class TopMenu extends BaseComponent<mgt.rgix.prop.ITopMenuProps, any> {
    constructor(props:mgt.rgix.prop.ITopMenuProps){
        super(props);
    }
    render() {
        return new TopMenuTemplate().renderTemplate(this.props);
    }
}