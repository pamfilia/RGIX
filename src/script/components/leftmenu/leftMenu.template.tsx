import * as React from "react";
import { LinkNavigationItem } from "../../common/component/linkNavigationItem";

export class LeftMenuTemplate implements mgt.rgix.template.ITemplate<mgt.rgix.prop.ILeftMenuProps> {
  renderTemplate = (data: mgt.rgix.prop.ILeftMenuProps): JSX.Element => {
    const arr = data.menuItems.map((e, i) =>
      <LinkNavigationItem
        key={i.toString()}
        Text={e.Text}
        Url="#"
        CustomClass={e.CustomClass} />);
    return (
      <nav className="col-sm-3 col-md-2 hidden-xs-down pt-3 bg-faded sidebar">
        {arr}
      </nav>
    );
  }
}