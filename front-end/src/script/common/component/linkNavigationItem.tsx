/// <reference path="../interface/IMenuItem.d.ts" />
/// <reference path="../interface/ILeftMenuProps.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";
import { BaseComponent } from "./baseComponent";

export class LinkNavigationItem extends BaseComponent<mgt.rgix.menu.IMenuItem, any> {
  render() {
    return (
      <a
        className={"nav-link" + (this.props.CustomClass == undefined ? '' : ' ' + this.props.CustomClass)}
        href={this.props.Url}>{this.props.Text}</a>
    );
  }
}