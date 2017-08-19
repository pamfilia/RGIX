import * as React from "react";

export class TopMenuTemplate implements mgt.rgix.template.ITemplate<mgt.rgix.prop.ITopMenuProps> {
    renderTemplate = (data: mgt.rgix.prop.ITopMenuProps): JSX.Element => {
        return (<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <a className="navbar-brand" href="#"><img src="../../src/assets/rgix-solid.svg" width="30" height="30" className="d-inline-block align-top" alt="" />
                    {data.brandItemText}</a>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                    <ul className="navbar-nav mr-auto">
                        {data.menuItems.map((m, i) => {
                            return (
                                <li key={i.toString()} className={"nav-item" + (m.CustomClass == undefined ? '' : ' ' + m.CustomClass)}>
                                    <a className="nav-link" href={m.Url}>{m.Text}</a>
                                </li>
                            );
                        })}
                    </ul>
                    <form className="form-inline mt-2 mt-md-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>);
    }
}