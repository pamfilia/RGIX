import { Component, OnInit, Input, OnChanges, SimpleChanges, group, Output, EventEmitter } from '@angular/core';
import { from } from 'rxjs/observable/from';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import { mergeMap } from 'rxjs/operators';
import { Observer } from 'rxjs/Observer';
import { Subscriber } from 'rxjs/Subscriber';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit, OnChanges {

  @Input('TotalRecordCount') TotalRecordCount: number;
  @Input('PageLimit') PageLimit: number;
  @Output('OnPageChanged') OnPageChanged = new EventEmitter<number>();
  private SelectedPage = 0;
  private Pages: Array<number>;
  private Group = 0;
  private observer: Subscriber<number[]>;
  SelectedPageRange: Array<number>;

  constructor() { }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.Calculate();
  }

  private Calculate(): void {
    if (this.TotalRecordCount && this.PageLimit) {
      this.Pages = Array.apply(null, { length: Math.ceil(this.TotalRecordCount / this.PageLimit) }).map(Number.call, Number);
      this.SelectedPageRange = this.Pages.slice(this.Group * this.PageLimit, (this.Group * this.PageLimit) + this.PageLimit);
    }
  }

  onPageChange(page: number) {
    this.SelectedPage = page;
    this.OnPageChanged.emit(this.SelectedPage);
  }
  onGroupChange(isNext: boolean) {
    this.Group = [this.Group].map(v => isNext ? v += 1 : v -= 1)[0];
    this.SelectedPageRange = this.Pages.slice(this.Group * this.PageLimit, (this.Group * this.PageLimit) + this.PageLimit);
  }

  onPrevious() {
    if (this.SelectedPage - 2 < this.PageLimit * (this.Group > 0 ? this.Group : 1)) {
      this.onGroupChange(false);
    }
    this.onPageChange(this.SelectedPage - 1);
  }

  onNext() {
    if (this.SelectedPage + 2 > this.PageLimit * (this.Group > 0 ? this.Group : 1)) {
      this.onGroupChange(true);
    }
    this.onPageChange(this.SelectedPage + 1);
  }
}
