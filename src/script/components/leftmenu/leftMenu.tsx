/**
 * Created by mehmetgani on 26/03/2017.
 */
import { BaseComponent } from "../../common/BaseComponent";
import { LeftMenuTemplate } from "./leftMenu.template";

export default class LeftMenu extends BaseComponent<any, any> {
    render() {
        return new LeftMenuTemplate().renderTemplate(null);
    }
}