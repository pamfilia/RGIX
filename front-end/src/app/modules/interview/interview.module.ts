import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterviewRoutingModule } from './interview-routing.module';
import { InterviewComponent } from './components/interview/interview.component';
import { InterviewDetailsComponent } from './components/interview-details/interview-details.component';

@NgModule({
  imports: [
    CommonModule,
    InterviewRoutingModule
  ],
  declarations: [InterviewComponent, InterviewDetailsComponent]
})
export class InterviewModule { }
