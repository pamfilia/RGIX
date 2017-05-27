/**
 * Created by mehmetgani on 26/03/2017.
 */
import { BaseComponent } from "../../common/BaseComponent";
import { TopMenuTemplate } from "./topMenu.template";

export default class TopMenu extends BaseComponent<any, any> {
    render() {
        return new TopMenuTemplate().renderTemplate();
    }
}