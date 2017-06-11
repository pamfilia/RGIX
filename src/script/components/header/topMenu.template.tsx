import * as React from "react";

export class TopMenuTemplate implements mgt.rgix.template.ITemplate<mgt.rgix.prop.ITopMenuProps> {
    renderTemplate = (data: mgt.rgix.prop.ITopMenuProps): JSX.Element => {
        return (<nav role="navigation" className="navbar navbar-toggleable-md navbar-inverse bg-inverse">
            <button className="navbar-toggler navbar-toggler-right" type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="#">
                <img src="../../src/assets/rgix-solid.svg" width="30" height="30" className="d-inline-block align-top" alt=""/>
                {data.brandItemText}
            </a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    {data.menuItems.map((m, i) => {
                        return (
                            <li key={i.toString()} className={"nav-item" + (m.customClass == undefined ? '' : ' ' + m.customClass)}>
                                <a className="nav-link" href={m.Url}>{m.Text}</a>
                            </li>
                        );
                    })}
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>);
    }
}