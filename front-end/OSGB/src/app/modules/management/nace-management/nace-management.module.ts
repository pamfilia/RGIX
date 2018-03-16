import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NaceManagementRoutingModule } from './nace-management-routing.module';
import { NaceComponent } from './components/nace/nace.component';
import {NaceService} from './services/nace-service.service';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NaceManagementRoutingModule
  ],
  declarations: [NaceComponent],
  providers: [NaceService]
})
export class NaceManagementModule { }
