import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PaginatorComponent } from './component/paginator/paginator.component';
import { ModalContentHostDirective } from '../../common/directive/ModalContentHost.directive';
import { ModalComponent } from './component/modal/modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [PaginatorComponent, ModalComponent, ModalContentHostDirective],
  exports: [CommonModule, FormsModule, PaginatorComponent, ModalComponent, ModalContentHostDirective]
})
export class SharedModule { }
