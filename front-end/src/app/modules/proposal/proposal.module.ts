import { NgModule } from '@angular/core';

import { ProposalRoutingModule } from './proposal-routing.module';
import { ProposalComponent } from './components/proposal/proposal.component';
import { SharedModule } from '../shared/shared.module';
import { ProposalService } from './services/proposal.service';

@NgModule({
  imports: [
    SharedModule,
    ProposalRoutingModule
  ],
  declarations: [ProposalComponent],
  providers: [ProposalService]
})
export class ProposalModule { }
