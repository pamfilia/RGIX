import * as React from "react";
import { ITemplate } from "../../common/ITemplate";

export class ForgetPasswordTemplate implements ITemplate {
    renderTemplate = (): JSX.Element => {
        return (<span>Enter your email</span> );
    }
}