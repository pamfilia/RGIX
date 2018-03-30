import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NaceComponent } from './components/nace/nace.component';
import { NaceDetailsComponent } from './components/nace-details/nace-details.component';

const routes: Routes = [
  { path: '', component: NaceComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NaceManagementRoutingModule { }
