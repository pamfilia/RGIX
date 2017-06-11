/**
 * Created by mehmetgani on 26/03/2017.
 */
import { BaseComponent } from "../../common/component/baseComponent";
import { LeftMenuTemplate } from "./leftMenu.template";

export default class LeftMenu extends BaseComponent<mgt.rgix.prop.ILeftMenuProps, any> {
    render() {
        return new LeftMenuTemplate().renderTemplate(this.props);
    }
}