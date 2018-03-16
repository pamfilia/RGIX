import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './components/app-component/app.component';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'login', loadChildren: './modules/authModule/auth.module#AuthModule' },
  { path: 'nace-management', loadChildren: './modules/management/nace-management/nace-management.module#NaceManagementModule'},
  { path: 'company-management', loadChildren: './modules/management/company-management/company-management.module#CompanyManagementModule'},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
