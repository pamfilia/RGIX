import * as React from "react";
import * as ReactDOM from "react-dom";

import { BaseComponent } from "../common/BaseComponent";
import TopMenu from "../components/header/topMenu";
import LeftMenu from "../components/leftmenu/leftMenu";

class Reports extends BaseComponent<undefined, undefined> {
    render() {
        return (<div className="row">
            <LeftMenu />
        </div>
        );
    }
}
ReactDOM.render(<TopMenu
    brandItemText=""
    menuItems={[
        { customClass: 'active', Text: 'Reports',Url:'./reports.html' },
        { customClass: undefined, Text: 'Samples',Url:'./samples.html' },
        { customClass: undefined, Text: 'Standarts',Url:'./standarts.html' },
        { customClass: 'disabled', Text: 'Tests',Url:'./tests.html' },
    ]} />,document.querySelector('.topMenu'));
    
ReactDOM.render(<Reports />, document.querySelector('.app'));