import * as React from "react";

export class LeftMenuTemplate implements mgt.rgix.template.ITemplate<any> {
  renderTemplate = (p: any): JSX.Element => {
    return (
      <nav className="col-sm-3 col-md-2 hidden-xs-down pt-3 bg-faded sidebar">
        <a className="nav-link active" href="#">New Report</a>
        <a className="nav-link" href="#">Search</a>
        <a className="nav-link" href="#">Track</a>
        <a className="nav-link disabled" href="#">Disabled</a>
      </nav>
    );
  }
}