/**
 * Created by mehmetgani on 26/03/2017.
 */
import { BaseComponent } from "../../common/component/baseComponent";
import { TopMenuTemplate } from "./topMenu.template";

export default class TopMenu extends BaseComponent<mgt.rgix.prop.ITopMenuProps, any> {
    render() {
        return new TopMenuTemplate().renderTemplate(this.props);
    }
}