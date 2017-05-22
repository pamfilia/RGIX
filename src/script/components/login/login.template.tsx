import * as React from "react";
import {ITemplate} from "../../common/ITemplate";

export class LoginTemplate implements ITemplate {
    renderTemplate(): any {
        return (<div className="container">
            <div className="row">
                <div className="col">Login</div>
                <div className="w-100"></div>
                <div className="col">
                    <div className="input-group">
                        <div className="input-group-addon">@</div>
                        <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Username"/>
                    </div>
                </div>
                <div className="col">
                    <input type="password" className="form-control" id="user.password" placeholder="Password"/>
                </div>
                <div className="w-100"></div>
                <div className="col">Remind My Password</div>
                <div className="col">Login</div>
            </div>
        </div>);
    }
}