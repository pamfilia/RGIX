import * as React from "react";

export class LoginTemplate implements mgt.rgix.template.ITemplate<any> {
    renderTemplate = (p:any): JSX.Element => {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">Login</div>
                    <div className="w-100"></div>
                    <div className="col">
                        <div className="input-group">
                            <div className="input-group-addon">@</div>
                            <input type="text" className="form-control" id="user.name" placeholder="Username" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="input-group">
                              <span className="input-group-addon"><div className="glyphicon glyphicon-lock"></div></span>                              
                            <input type="password" className="form-control" id="user.password" placeholder="Password" />
                        </div>
                    </div>
                    <div className="w-100"></div>
                    <div className="col">
                        <button className="btn btn-outline-primary">
                            Remind my password
                        </button>
                    </div>
                    <div className="col">
                        < button className="btn btn-outline-primary">
                            Login <span className="badge badge-success">0</span>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}