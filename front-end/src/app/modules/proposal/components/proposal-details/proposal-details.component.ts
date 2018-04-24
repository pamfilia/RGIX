import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IProposalModel } from '../../../../models/proposal/IProposal';
import { BaseComponent } from '../../../../common/component/BaseComponent';
import { ComponentModeEnum } from '../../../../common/component/ComponentModeEnum';
@Component({
  selector: 'app-proposal-details',
  templateUrl: './proposal-details.component.html',
  styleUrls: ['./proposal-details.component.scss']
})
export class ProposalDetailsComponent extends BaseComponent<IProposalModel> implements OnInit {
  Model: IProposalModel;
  @Output('OnProposalAdded') OnProposalAdded = new EventEmitter<IProposalModel>();
  @Output('SaveMode') SaveMode: boolean;
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
}
