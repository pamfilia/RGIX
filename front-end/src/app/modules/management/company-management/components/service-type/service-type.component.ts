import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { IServiceType } from '../../../../../models/service-type/IServiceType';
import { BaseComponent } from '../../../../../common/component/BaseComponent';
import { ComponentModeEnum } from '../../../../../common/component/ComponentModeEnum';
import { CompanyDetailsComponent } from '../company-details/company-details.component';
@Component({
  selector: 'app-service-type',
  templateUrl: './service-type.component.html',
  styleUrls: ['./service-type.component.scss']
})
export class ServiceTypeComponent extends BaseComponent<IServiceType> implements OnInit {
  Model: IServiceType;
  index: number;
  @ViewChild(CompanyDetailsComponent) companyDetailsModel: CompanyDetailsComponent;
  constructor() {
    super();
    this.Model = <IServiceType>{};
  }

  ngOnInit() {
  }
  onSubmit() {
    this.companyDetailsModel.Model.serviceTypes.push(this.Model);

    if (this.componentMode === ComponentModeEnum.Create) {
    } else if (this.componentMode === ComponentModeEnum.Edit) {
    } else if (this.componentMode === ComponentModeEnum.Delete) {
      this.companyDetailsModel.Model.serviceTypes
      .splice(this.companyDetailsModel.Model.serviceTypes.indexOf(this.Model), 1);
    }
  }
}
