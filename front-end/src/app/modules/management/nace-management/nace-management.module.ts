import { NgModule } from '@angular/core';
import { NaceManagementRoutingModule } from './nace-management-routing.module';

import { NaceService } from './services/nace-service.service';
import { NaceComponent } from './components/nace/nace.component';
import { NaceDetailsComponent } from './components/nace-details/nace-details.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    NaceManagementRoutingModule,
  ],
  declarations: [NaceComponent, NaceDetailsComponent],
  providers: [NaceService],
  entryComponents: [NaceComponent, NaceDetailsComponent]
})
export class NaceManagementModule { }
