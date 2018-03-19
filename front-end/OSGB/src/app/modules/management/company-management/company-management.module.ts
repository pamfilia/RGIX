import { NgModule } from '@angular/core';
import { CompanyManagementRoutingModule } from './company-management-routing.module';
import { CompanyComponent } from './components/company/company.component';
import { CompanyService } from './services/company-service.service';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    CompanyManagementRoutingModule
  ],
  declarations: [CompanyComponent],
  providers: [CompanyService]
})
export class CompanyManagementModule { }
