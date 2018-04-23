import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { ModalContentHostDirective } from '../../common/directive/ModalContentHost.directive';
import { ModalComponent } from './components/modal/modal.component';
import { ServiceTypeComponent } from './components/service-type/service-type.component';
import { NgxMaskModule } from 'ngx-mask';
import {
  MatFormFieldModule,
  MatDatepickerModule,
  MatInputModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    NgxMaskModule.forRoot({ clearIfNotMatch: true, dropSpecialCharacters: true }),
  ],
  declarations: [PaginatorComponent, ModalComponent, ModalContentHostDirective, ServiceTypeComponent],
  exports: [
    CommonModule,
    FormsModule,
    NgxMaskModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    PaginatorComponent,
    ModalComponent,
    ServiceTypeComponent,
    ModalContentHostDirective]
})
export class SharedModule { }
