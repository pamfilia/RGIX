import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterviewRoutingModule } from './interview-routing.module';
import { InterviewComponent } from './components/interview/interview.component';
import { InterviewDetailsComponent } from './components/interview-details/interview-details.component';
import { InterviewService } from './services/interview-service.service';
import { SharedModule } from '../shared/shared.module';
import { ProposalModule } from '../proposal/proposal.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    InterviewRoutingModule,
    ProposalModule
  ],
  declarations: [InterviewComponent, InterviewDetailsComponent],
  providers: [InterviewService],
  entryComponents: [InterviewDetailsComponent]

})
export class InterviewModule { }
