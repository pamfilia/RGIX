import { Component, OnInit, Input } from '@angular/core';
import { IServiceType } from '../../../../../models/service-type/IServiceType';
import { BaseComponent } from '../../../../../common/component/BaseComponent';
import { ComponentModeEnum } from '../../../../../common/component/ComponentModeEnum';

@Component({
  selector: 'app-service-type',
  templateUrl: './service-type.component.html',
  styleUrls: ['./service-type.component.scss']
})
export class ServiceTypeComponent extends BaseComponent<IServiceType> implements OnInit {
  Model: IServiceType;
  constructor() {
    super();
    this.Model = <IServiceType>{};
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.componentMode === ComponentModeEnum.Create) {
    } else if (this.componentMode === ComponentModeEnum.Edit) {
    } else if (this.componentMode === ComponentModeEnum.Delete) {
    }
  }
}
