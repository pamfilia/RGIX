import * as React from "react";
import * as ReactDOM from "react-dom";

import TopMenu from "../components/header/topMenu";
import Login from "../components/login/login";
import ForgetPassword from "../components/login/forgetPassword";


ReactDOM.render(<TopMenu/>,document.querySelector('.header'));
ReactDOM.render(<Login/>,document.querySelector('.login'));
ReactDOM.render(<ForgetPassword/>,document.querySelector('.forgetPassword'));