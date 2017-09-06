import * as React from "react";

export class ForgetPasswordTemplate implements mgt.rgix.template.ITemplate<any> {
    renderTemplate = (p:any): JSX.Element => {
        return (<span>Enter your email</span> );
    }
}