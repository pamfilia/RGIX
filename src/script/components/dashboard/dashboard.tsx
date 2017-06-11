/// <reference path="../../../../node_modules/@types/amcharts/index.d.ts" />
/**
 * Created by mehmetgani on 26/03/2017.
 */
import { BaseComponent } from "../../common/BaseComponent";
import { DashboardTemplate } from "./dashboard.template";

export default class Dashboard extends BaseComponent<any, any> {
    render() {
        return new DashboardTemplate().renderTemplate(null);
    }
}