import React from "react";
import {render} from "react-dom";
import {Header} from "../components/header";
class App extends React.Component {
    render() {
        return (
            <Header/>
        );
    }
}

$(document).ready(() => {
    render(<App/>, document.querySelector('.container-fluid'));
});
