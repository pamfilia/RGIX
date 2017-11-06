/// <reference path="../../common/interface/ITemplate.d.ts" />
import * as React from "react";

export class DashboardTemplate implements mgt.rgix.template.ITemplate<any> {
  renderTemplate = (p:any): JSX.Element => {
    return (<main className="col-sm-9 col-md-10 pt-3">
      <h1>Dashboard</h1>
      <section className="row text-center placeholders">
        <div className="col-6 col-sm-3 placeholder">
          <div className="testchart"></div>
          <img src="data:image/gif;base64,R0lGODlhAQABAIABAAJ12AAAACwAAAAAAQABAAACAkQBADs=" width="200" height="200" className="img-fluid rounded-circle" alt="Generic placeholder thumbnail"/>
            <h4>Label</h4>
            <div className="text-muted">Something else</div>
            </div>
          <div className="col-6 col-sm-3 placeholder">
            <img src="data:image/gif;base64,R0lGODlhAQABAIABAADcgwAAACwAAAAAAQABAAACAkQBADs=" width="200" height="200" className="img-fluid rounded-circle" alt="Generic placeholder thumbnail"/>
              <h4>Label</h4>
              <span className="text-muted">Something else</span>
            </div>
            <div className="col-6 col-sm-3 placeholder">
              <img src="data:image/gif;base64,R0lGODlhAQABAIABAAJ12AAAACwAAAAAAQABAAACAkQBADs=" width="200" height="200" className="img-fluid rounded-circle" alt="Generic placeholder thumbnail"/>
                <h4>Label</h4>
                <span className="text-muted">Something else</span>
            </div>
              <div className="col-6 col-sm-3 placeholder">
                <img src="data:image/gif;base64,R0lGODlhAQABAIABAADcgwAAACwAAAAAAQABAAACAkQBADs=" width="200" height="200" className="img-fluid rounded-circle" alt="Generic placeholder thumbnail"/>
                  <h4>Label</h4>
                  <span className="text-muted">Something else</span>
            </div>
          </section>
        </main>);
    }
}