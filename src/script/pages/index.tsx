import * as React from "react";
import * as ReactDOM from "react-dom";

import Header from "../components/header";
import Login from "../components/login/login";


ReactDOM.render(<Header/>,document.querySelector('.header'));
ReactDOM.render(<Login/>,document.querySelector('.login'));