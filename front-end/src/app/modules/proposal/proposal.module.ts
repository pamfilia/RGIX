import { NgModule } from '@angular/core';

import { ProposalRoutingModule } from './proposal-routing.module';
import { ProposalComponent } from './components/proposal/proposal.component';
import { SharedModule } from '../shared/shared.module';
import { ProposalService } from './services/proposal.service';
import { ProposalDetailsComponent } from './components/proposal-details/proposal-details.component';

@NgModule({
  imports: [
    SharedModule,
    ProposalRoutingModule
  ],
  declarations: [ProposalComponent, ProposalDetailsComponent],
  providers: [ProposalService],
  exports: [ProposalDetailsComponent],
  entryComponents: [ProposalDetailsComponent]
})
export class ProposalModule { }
