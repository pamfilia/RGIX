import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NaceManagementRoutingModule } from './nace-management-routing.module';
import { NaceComponent } from './components/nace/nace.component';
import { NaceService } from './services/nace-service.service';
import { NaceDetailsComponent } from './components/nace-details/nace-details.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NaceManagementRoutingModule,
  ],
  declarations: [NaceComponent, NaceDetailsComponent],
  providers: [NaceService]
})
export class NaceManagementModule { }
