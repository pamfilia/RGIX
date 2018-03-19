import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { from } from 'rxjs/observable/from';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit, OnChanges {

  @Input('TotalRecodCount') TotalRecodCount: Number | any;
  @Input('PageLimit') PageLimit: Number | any;
  PageCount: Observable<Array<Number>> | any;
  SelectedPage: Number;
  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.Calculate();
  }
  private Calculate(): void {
    const v = this.TotalRecodCount / this.PageLimit;
    this.PageCount = of(Array.apply(null, { length: v }).map(Number.call, Number));
  }

  onPageChange(page: Number) {
    this.SelectedPage = page;
    console.log(this.SelectedPage);
  }
}
