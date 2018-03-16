import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyManagementRoutingModule } from './company-management-routing.module';
import { CompanyComponent } from './components/company/company.component';
import { CompanyService } from './services/company-service.service';

@NgModule({
  imports: [
    CommonModule,
    CompanyManagementRoutingModule
  ],
  declarations: [CompanyComponent],
  providers: [CompanyService]
})
export class CompanyManagementModule { }
