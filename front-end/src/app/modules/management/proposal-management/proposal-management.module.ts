import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProposalManagementRoutingModule } from './proposal-management-routing.module';
import { ProposalComponent } from './components/proposal/proposal.component';
import { ProposalDetailsComponent } from './components/proposal-details/proposal-details.component';
import { ServiceTypeComponent } from './components/service-type/service-type.component';

@NgModule({
  imports: [
    CommonModule,
    ProposalManagementRoutingModule
  ],
  declarations: [ProposalComponent, ProposalDetailsComponent, ServiceTypeComponent]
})
export class ProposalManagementModule { }
