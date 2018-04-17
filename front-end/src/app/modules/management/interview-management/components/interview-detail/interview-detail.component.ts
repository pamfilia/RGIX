import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../../../common/component/BaseComponent';
import { IInterviewModel } from '../../../../../models/interview/IInterviewModel';
import { InterviewService } from '../../services/interview-service.service';
import { ComponentModeEnum } from '../../../../../common/component/ComponentModeEnum';
import { IItemDetailComponent } from '../../../../../common/component/IItemDetailComponent';

@Component({
  selector: 'app-interview-detail',
  templateUrl: './interview-detail.component.html',
  styleUrls: ['./interview-detail.component.scss']
})
export class InterviewDetailComponent extends BaseComponent<IInterviewModel> implements OnInit, IItemDetailComponent {
  Model: IInterviewModel;
  protected addButtonToggle = false;
  SubmitButtonText: string;
  constructor(private interviewService: InterviewService) {
    super();
  }

  ngOnInit() {
  }

  Bind(data: IInterviewModel, componentMode: ComponentModeEnum) {
    this.componentMode = componentMode;
    switch (componentMode) {
      case ComponentModeEnum.Create:
        this.SubmitButtonText = 'Add';
        break;
      case ComponentModeEnum.Edit:
        this.SubmitButtonText = 'Update';
        break;
      case ComponentModeEnum.Delete:
        this.SubmitButtonText = 'Delete';
        break;
    }
    this.Model = data ? data : <IInterviewModel>{};
  }
  onSubmit() {
    if (this.componentMode === ComponentModeEnum.Create) {
      this.interviewService.Create(this.Model).subscribe(
        r => console.log(r.humanReadableMessage),
        e => console.log(e),
        () => console.log('completed'));
    } else if (this.componentMode === ComponentModeEnum.Edit) {
      this.interviewService
        .Update(this.Model)
        .subscribe(
          r => console.log(r.humanReadableMessage),
          e => console.log(e),
          () => console.log('completed'));
    } else if (this.componentMode === ComponentModeEnum.Delete) {
      this.interviewService.Delete(this.Model.id).subscribe(
        r => console.log(r.humanReadableMessage),
        e => console.log(e),
        () => console.log('completed'));
    }
  }
  onToggle() {
    this.addButtonToggle = !this.addButtonToggle;
    return this.addButtonToggle;
  }
}
