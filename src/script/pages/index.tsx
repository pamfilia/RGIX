import * as React from "react";
import * as ReactDOM from "react-dom";

import { BaseComponent } from "../common/component/baseComponent";
import TopMenu from "../components/header/topMenu";
import LeftMenu from "../components/leftmenu/leftMenu";
import Dashboard from "../components/dashboard/dashboard";

class Index extends BaseComponent<undefined, undefined> {
    render() {
        return (<div className="row">
            <Dashboard />
        </div>
        );
    }
}
ReactDOM.render(<TopMenu
    brandItemText=""
    menuItems={[
        { CustomClass: undefined, Text: 'Reports', Url: './reports.html' },
        { CustomClass: undefined, Text: 'Samples', Url: './samples.html' },
        { CustomClass: undefined, Text: 'Standarts', Url: './standarts.html' },
        { CustomClass: 'disabled', Text: 'Tests', Url: './tests.html' },
    ]} />, document.querySelector('.topMenu'));

ReactDOM.render(<Index />, document.querySelector('.app'));
