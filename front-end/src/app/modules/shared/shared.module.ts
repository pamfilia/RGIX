import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PaginatorComponent } from './component/paginator/paginator.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [PaginatorComponent],
  exports: [CommonModule, FormsModule, PaginatorComponent]
})
export class SharedModule { }
