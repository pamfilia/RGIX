import * as React from "react";
import * as ReactDOM from "react-dom";

import TopMenu from "../components/header/topMenu";
import Login from "../components/login/login";


ReactDOM.render(<TopMenu/>,document.querySelector('.header'));
ReactDOM.render(<Login/>,document.querySelector('.login'));