import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { IProposalModel } from '../../../../models/proposal/IProposal';
import { BaseComponent } from '../../../../common/component/BaseComponent';
import { ComponentModeEnum } from '../../../../common/component/ComponentModeEnum';
import { IServiceType } from '../../../../models/service-type/IServiceType';
import { ServiceTypeComponent } from '../../../shared/components/service-type/service-type.component';
@Component({
  selector: 'app-proposal-details',
  templateUrl: './proposal-details.component.html',
  styleUrls: ['./proposal-details.component.scss']
})
export class ProposalDetailsComponent extends BaseComponent<IProposalModel> implements OnInit {
  Model: IProposalModel;
  addButtonToggle = false;
  @Output('OnProposalAdded') OnProposalAdded = new EventEmitter<IProposalModel>();
  @Output('SaveMode') SaveMode: boolean;
  @ViewChild('serviceType') serviceType: ServiceTypeComponent;
  @ViewChild('serviceTypeToggle') serviceTypeToggle: ElementRef;
  constructor() {
    super();
    this.Model = <IProposalModel>{};
  }

  ngOnInit() {
  }

  onSubmit(saveMode: boolean) {
    this.SaveMode = saveMode;
    this.OnProposalAdded.emit(this.Model);
  }
  onToggle() {
    this.addButtonToggle = !this.addButtonToggle;
    return this.addButtonToggle;
  }
  onProposalServiceTypeAdded(data: IServiceType) {
    if (!this.serviceType.SaveMode) {
      this.serviceTypeToggle.nativeElement.click();
    }
    this.Model.serviceTypes.push(data);
  }
}
