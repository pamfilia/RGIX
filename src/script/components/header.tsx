/**
 * Created by mehmetgani on 26/03/2017.
 */
import { BaseComponent } from "../common/BaseComponent";
import { HeaderTemplate } from "./header.template";

export default class Header extends BaseComponent<any, any> {
    render() {
        return new HeaderTemplate().renderTemplate();
    }
}