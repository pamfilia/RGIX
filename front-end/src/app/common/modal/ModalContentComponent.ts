import { Type } from '@angular/core';
import { ComponentModeEnum } from '../component/ComponentModeEnum';

export class ModalContentComponent {
  constructor(public component: Type<any>, public componentMode: ComponentModeEnum, public data: any) { }
}
