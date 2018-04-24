import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../../common/component/BaseComponent';
import { IProposalModel } from '../../../../models/proposal/IProposal';
import { ReturnResult } from '../../../../common/service/ReturnResult';
import { CompanyComponent } from '../../../management/company-management/components/company/company.component';
import { Observable } from 'rxjs/Observable';
import { ModalContentComponent } from '../../../../common/modal/ModalContentComponent';
import { isNullOrUndefined } from 'util';
import { ProposalService } from '../../services/proposal.service';
import { ProposalDetailsComponent } from '../proposal-details/proposal-details.component';
import { ComponentModeEnum } from '../../../../common/component/ComponentModeEnum';

@Component({
  selector: 'app-proposal',
  templateUrl: './proposal.component.html',
  styleUrls: ['./proposal.component.scss']
})
export class ProposalComponent extends BaseComponent<IProposalModel> implements OnInit {

  private static ContinuationTokens: Map<number, string> = new Map();
  private currentPage: Observable<number>;
  SelectedItem: ModalContentComponent;
  SelectedTitle: string;
  Model: ReturnResult<IProposalModel>;
  constructor(private proposalService: ProposalService) {
    super();
  }

  ngOnInit() {
    ProposalComponent.ContinuationTokens.clear();
    this.proposalService.Read().subscribe(
      (r: ReturnResult<IProposalModel>) => {
        this.Model = r;
        ProposalComponent.ContinuationTokens.set(1, r.requestContinuation);
      }, (e) => console.log('OOps'));
  }

  onPageChanged(page: number) {
    const token: string = ProposalComponent.ContinuationTokens.get(page);
    const isTokenNull = isNullOrUndefined(token);
    this.proposalService.Read(isTokenNull ? page : null, token).subscribe(
      (r: ReturnResult<IProposalModel>) => {
        this.Model = r;
        if (page > 0) {
          ProposalComponent.ContinuationTokens.set(page + 1, r.requestContinuation);
        }
      }, (e) => console.log('Oops'));
  }

  onDetails(item: IProposalModel): void {
    this.SelectedTitle = item.id + ' Proposal Details';
    // this.SelectedItem = new ModalContentComponent(CompanyDetailsComponent, ComponentModeEnum.Edit, item);
  }
  onDelete(item: IProposalModel): void {
    this.SelectedTitle = 'Delete Proposal:' + item.id;
    // this.SelectedItem = new ModalContentComponent(CompanyDetailsComponent, ComponentModeEnum.Delete, item);
  }
  onAdd() {
    this.SelectedTitle = 'Add New';
    this.SelectedItem = new ModalContentComponent(ProposalDetailsComponent, ComponentModeEnum.Create, null);
  }
}
