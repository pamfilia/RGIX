import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './components/app-component/app.component';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'login', loadChildren: './modules/auth/auth.module#AuthModule' },
  { path: 'nace-management', loadChildren: './modules/management/nace-management/nace-management.module#NaceManagementModule'},
  { path: 'company-management', loadChildren: './modules/management/company-management/company-management.module#CompanyManagementModule'},
  { path: 'proposal', loadChildren: './modules/proposal/proposal.module#ProposalModule'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
