import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BaseComponent } from '../../../../common/component/BaseComponent';
import { IInterviewModel } from '../../../../models/interview/IInterviewModel';
import { IItemDetailComponent } from '../../../../common/component/IItemDetailComponent';
import { InterviewService } from '../../services/interview-service.service';
import { ComponentModeEnum } from '../../../../common/component/ComponentModeEnum';
import { ServiceTypeComponent } from '../../../shared/components/service-type/service-type.component';
import { IServiceType } from '../../../../models/service-type/IServiceType';
import { SharedModule } from '../../../shared/shared.module';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { IProposalModel } from '../../../../models/proposal/IProposal';

@Component({
  selector: 'app-interview-details',
  templateUrl: './interview-details.component.html',
  styleUrls: ['./interview-details.component.scss']
})
export class InterviewDetailsComponent extends BaseComponent<IInterviewModel> implements OnInit, IItemDetailComponent {
  Model: IInterviewModel;
  proposalModel: IProposalModel;
  proposalServiceType: IServiceType;
  addButtonToggle = false;
  SubmitButtonText: string;
  @ViewChild('serviceType') serviceType: ServiceTypeComponent;
  @ViewChild('serviceTypeToggle') serviceTypeToggle: ElementRef;
  constructor(private interviewService: InterviewService, private router: Router, private location: Location) {
    super();
  }
  ngOnInit() {
    if (this.componentMode === ComponentModeEnum.Create || this.componentMode === ComponentModeEnum.Edit) {
      if (this.Model.serviceTypes === undefined || this.Model.serviceTypes === null) {
        this.Model.serviceTypes = new Array<IServiceType>();
      }
      if (this.Model.proposals === undefined || this.Model.proposals === null) { this.Model.proposals = new Array<IProposalModel>(); }
      if (this.proposalModel.serviceTypes === undefined || this.proposalModel.serviceTypes === undefined) {
        this.proposalModel.serviceTypes = new Array<IServiceType>();
      }
    }

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
    this.proposalModel = <IProposalModel>{};
    this.proposalServiceType = <IServiceType>{};
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
    /* this.router.navigate(['/interview']);
    this.interviewService.ReadById(this.Model.id); */
  }
  onToggle() {
    this.addButtonToggle = !this.addButtonToggle;
    return this.addButtonToggle;
  }
  OnServiceTypeAdded(data: IServiceType) {
    if (!this.serviceType.SaveMode) {
      this.serviceTypeToggle.nativeElement.click();
    }
    this.Model.serviceTypes.push(data);
  }
  onServiceTypeDeleted(data: IServiceType) {
    this.Model.serviceTypes.splice(this.Model.serviceTypes.indexOf(data), 1);
  }
  onAlert(item: IServiceType, rowORder: number) {
    alert(item.name + ' : row order : ' + rowORder);
  }
  onProposalServiceTypeAdded(data: IServiceType) {
    this.proposalModel.serviceTypes.push(data);
    this.proposalServiceType = <IServiceType>{};
  }
  onProposalServiceTypeDeleted(data: IServiceType) {
    this.Model.serviceTypes.splice(this.Model.serviceTypes.indexOf(data), 1);
  }
  onProposalAdded(data: IProposalModel) {
    this.Model.proposals.push(data);
    this.proposalModel = <IProposalModel>{};
  }
  onProposalDeleted(data: IProposalModel) {
    this.Model.proposals.splice(this.Model.proposals.indexOf(data), 1);
  }
}
