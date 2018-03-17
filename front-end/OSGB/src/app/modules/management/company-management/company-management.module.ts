import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyManagementRoutingModule } from './company-management-routing.module';
import { CompanyComponent } from './components/company/company.component';
import { CompanyService } from './services/company-service.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CompanyManagementRoutingModule
  ],
  declarations: [CompanyComponent],
  providers: [CompanyService]
})
export class CompanyManagementModule { }
