import { Component, OnInit, Input } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  mobileQuery: MediaQueryList;
  @Input() drawerHandler: MatSidenav;
  ngOnInit(): void {
  }
  toggle(): void {
    this.drawerHandler.toggle();
  }
}
