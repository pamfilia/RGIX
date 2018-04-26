import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../../common/component/BaseComponent';
import { IInterviewModel } from '../../../../models/interview/IInterviewModel';
import { Observable } from 'rxjs/Observable';
import { ModalContentComponent } from '../../../../common/modal/ModalContentComponent';
import { InterviewService } from '../../services/interview-service.service';
import { ReturnResult } from '../../../../common/service/ReturnResult';
import { ComponentModeEnum } from '../../../../common/component/ComponentModeEnum';
import { InterviewDetailsComponent } from '../interview-details/interview-details.component';
import { isNullOrUndefined } from 'util';
@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.scss']
})
export class InterviewComponent extends BaseComponent<IInterviewModel> implements OnInit {
  private static ContinuationTokens: Map<number, string> = new Map();
  private currentPage: Observable<number>;
  SelectedItem: ModalContentComponent;
  SelectedTitle: string;
  constructor(private interviewService: InterviewService) {
    super();
  }
  Model: ReturnResult<IInterviewModel>;
  ngOnInit() {
    InterviewComponent.ContinuationTokens.clear();
    this.interviewService.Read().subscribe(
      (r: ReturnResult<IInterviewModel>) => {
        this.Model = r;
        InterviewComponent.ContinuationTokens.set(1, r.requestContinuation);
      }, (e) => console.log('OOps'));
  }
  onPageChanged(page: number) {
    const token: string = InterviewComponent.ContinuationTokens.get(page);
    const isTokenNull = isNullOrUndefined(token);
    this.interviewService.Read(isTokenNull ? page : null, token).subscribe(
      (r: ReturnResult<IInterviewModel>) => {
        this.Model = r;
        if (page > 0) {
          InterviewComponent.ContinuationTokens.set(page + 1, r.requestContinuation);
        }
      }, (e) => console.log('OOps'));
  }
  onDetails(item: IInterviewModel): void {
    this.SelectedTitle = item.name + ' Details';
    this.SelectedItem = new ModalContentComponent(InterviewDetailsComponent, ComponentModeEnum.Edit, item);
  }
  onDelete(item: IInterviewModel): void {
    this.SelectedTitle = 'Delete :' + item.name;
    this.SelectedItem = new ModalContentComponent(InterviewDetailsComponent, ComponentModeEnum.Delete, item);
  }
  onAdd() {
    this.SelectedTitle = 'Add New';
    this.SelectedItem = new ModalContentComponent(InterviewDetailsComponent, ComponentModeEnum.Create, null);
  }
}
