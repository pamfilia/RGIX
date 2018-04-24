import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterviewRoutingModule } from './interview-routing.module';
import { InterviewComponent } from './components/interview/interview.component';
import { InterviewDetailsComponent } from './components/interview-details/interview-details.component';
import { InterviewService } from './services/interview-service.service';
import { SharedModule } from '../shared/shared.module';
import { ProposalDetailsComponent } from '../proposal/components/proposal-details/proposal-details.component';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    InterviewRoutingModule
  ],
  declarations: [InterviewComponent, InterviewDetailsComponent, ProposalDetailsComponent],
  providers: [InterviewService],
  entryComponents: [InterviewDetailsComponent, ProposalDetailsComponent]

})
export class InterviewModule { }
