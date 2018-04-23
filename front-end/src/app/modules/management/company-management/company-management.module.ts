import { NgModule } from '@angular/core';
import { CompanyManagementRoutingModule } from './company-management-routing.module';
import { CompanyComponent } from './components/company/company.component';
import { CompanyService } from './services/company-service.service';
import { CompanyDetailsComponent } from './components/company-details/company-details.component';
import { SharedModule } from '../../shared/shared.module';
import { TagInputModule } from 'ngx-chips';
@NgModule({
  imports: [
    SharedModule,
    TagInputModule,
    CompanyManagementRoutingModule
  ],
  declarations: [CompanyComponent, CompanyDetailsComponent],
  providers: [CompanyService],
  entryComponents: [CompanyDetailsComponent]
})
export class CompanyManagementModule { }
