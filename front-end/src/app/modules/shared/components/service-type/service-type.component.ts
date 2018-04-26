import { Component, OnInit, Input, ViewChild, EventEmitter, Output } from '@angular/core';
import { IServiceType } from '../../../../models/service-type/IServiceType';
import { BaseComponent } from '../../../../common/component/BaseComponent';
import { ComponentModeEnum } from '../../../../common/component/ComponentModeEnum';

@Component({
  selector: 'app-service-type',
  templateUrl: './service-type.component.html',
  styleUrls: ['./service-type.component.scss']
})
export class ServiceTypeComponent extends BaseComponent<IServiceType> implements OnInit {
  Model: IServiceType;
  @Output('OnServiceTypeAdded') OnServiceTypeAdded = new EventEmitter<IServiceType>();
  @Output('SaveMode') SaveMode: boolean;
  constructor() {
    super();
  }

  ngOnInit() {
    this.Model = <IServiceType>{};
  }
  onSubmit(saveMode: boolean) {
    this.SaveMode = saveMode;
    this.OnServiceTypeAdded.emit(this.Model);
    this.Model = <IServiceType>{};
  }
}
