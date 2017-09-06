/**
 * Created by Mehmet Gani Tombalak on 22/05/2017.
 */
import { BaseComponent } from "../../common/component/baseComponent";
import { ForgetPasswordTemplate } from "./forgetPassword.template";

export default class ForgetPassword extends BaseComponent<any, any> {
    render() {
        return new ForgetPasswordTemplate().renderTemplate(null);
    }
}