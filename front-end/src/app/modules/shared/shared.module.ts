import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PaginatorComponent } from './component/paginator/paginator.component';
import { ModalContentHostDirective } from '../../common/directive/ModalContentHost.directive';
import { ModalComponent } from './component/modal/modal.component';
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
  declarations: [PaginatorComponent, ModalComponent, ModalContentHostDirective],
  exports: [
    CommonModule,
    FormsModule,
    NgxMaskModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    PaginatorComponent,
    ModalComponent,
    ModalContentHostDirective]
})
export class SharedModule { }
