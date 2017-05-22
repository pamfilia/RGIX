import * as React from "react";
import * as ReactDOM from "react-dom";

import {BaseComponent} from "../common/BaseComponent";
import Header from "../components/header";

class App extends BaseComponent<any,any>
{
    render() {
        return(<Header/>);
    }
}

ReactDOM.render(<App/>,document.querySelector('.container-fluid')); 