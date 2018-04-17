import { NgModule } from '@angular/core';
import { InterviewManagementRoutingModule } from './interview-management-routing.module';
import { InterviewComponent } from './components/interview/interview.component';
import { InterviewService } from './services/interview-service.service';
import { SharedModule } from '../../shared/shared.module';
import { InterviewDetailComponent } from './components/interview-detail/interview-detail.component';

@NgModule({
  imports: [
    SharedModule,
    InterviewManagementRoutingModule
  ],
  declarations: [InterviewComponent, InterviewDetailComponent],
  providers: [InterviewService],
  entryComponents: [InterviewDetailComponent]
})
export class InterviewManagementModule { }
