import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { IProposalModel } from '../../../../models/proposal/IProposal';
import { BaseComponent } from '../../../../common/component/BaseComponent';
import { ComponentModeEnum } from '../../../../common/component/ComponentModeEnum';
import { IServiceType } from '../../../../models/service-type/IServiceType';
import { ServiceTypeComponent } from '../../../shared/components/service-type/service-type.component';
import { IItemDetailComponent } from '../../../../common/component/IItemDetailComponent';
@Component({
  selector: 'app-proposal-details',
  templateUrl: './proposal-details.component.html',
  styleUrls: ['./proposal-details.component.scss']
})
export class ProposalDetailsComponent extends BaseComponent<IProposalModel> implements OnInit, IItemDetailComponent {
  Model: IProposalModel;
  addButtonToggle = false;
  @Output('OnProposalAdded') OnProposalAdded = new EventEmitter<IProposalModel>();
  @Output('SaveMode') SaveMode: boolean;
  @ViewChild('serviceType') proposalServiceType: ServiceTypeComponent;
  @ViewChild('serviceTypeTogglee') proposalServiceTypeToggle: ElementRef;
  constructor() {
    super();
    this.Model = <IProposalModel>{};
  }

  ngOnInit() {
    if (this.componentMode === ComponentModeEnum.Create) {
      this.Model.serviceTypes = new Array<IServiceType>();
    }
  }
  Bind(data: IProposalModel, componentMode: ComponentModeEnum) {
    this.componentMode = componentMode;
    /* switch (componentMode) {
      case ComponentModeEnum.Create:
        this.SubmitButtonText = 'Add';
        break;
      case ComponentModeEnum.Edit:
        this.SubmitButtonText = 'Update';
        break;
      case ComponentModeEnum.Delete:
        this.SubmitButtonText = 'Delete';
        break;
    } */
    this.Model = data ? data : <IProposalModel>{};
  }
  onSubmit(saveMode: boolean) {
    this.SaveMode = saveMode;
    this.OnProposalAdded.emit(this.Model);
  }
  onTogglee() {
    this.addButtonToggle = !this.addButtonToggle;
    return this.addButtonToggle;
  }
  OnServiceTypeAdded(data: IServiceType) {
    if (!this.proposalServiceType.SaveMode) {
      this.proposalServiceTypeToggle.nativeElement.click();
    }
    this.Model.serviceTypes.push(data);
  }
}
