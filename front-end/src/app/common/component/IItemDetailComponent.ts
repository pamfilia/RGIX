import { ComponentModeEnum } from './ComponentModeEnum';

export interface IItemDetailComponent {
    Model: any;
    Bind(data: any, componentMode: ComponentModeEnum);
}
