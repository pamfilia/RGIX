import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CompanyService } from '../../services/company-service.service';
import { ICompanyModel } from '../../../../../models/company/ICompanyModel';
import { BaseComponent } from '../../../../../common/component/BaseComponent';
import { IItemDetailComponent } from '../../../../../common/component/IItemDetailComponent';
import { ComponentModeEnum } from '../../../../../common/component/ComponentModeEnum';
import { IServiceType } from '../../../../../models/service-type/IServiceType';
import { ServiceTypeComponent } from '../../../../shared/components/service-type/service-type.component';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss']
})

export class CompanyDetailsComponent extends BaseComponent<ICompanyModel> implements OnInit, IItemDetailComponent {
  Model: ICompanyModel;
  addButtonToggle = false;
  SubmitButtonText: string;
  @ViewChild('serviceType') serviceType: ServiceTypeComponent;
  @ViewChild('serviceTypeToggle') serviceTypeToggle: ElementRef;
  constructor(private companyService: CompanyService) {
    super();
  }

  ngOnInit() {
    if (!this.Model.dangerLevel) { this.Model.dangerLevel = 0; }
    if (this.componentMode === ComponentModeEnum.Create) {
      this.Model.serviceTypes = new Array<IServiceType>();
    }
  }

  Bind(data: ICompanyModel, componentMode: ComponentModeEnum) {
    this.componentMode = componentMode;
    switch (componentMode) {
      case ComponentModeEnum.Create:
        this.SubmitButtonText = 'Add';
        break;
      case ComponentModeEnum.Edit:
        this.SubmitButtonText = 'Update';
        break;
      case ComponentModeEnum.Delete:
        this.SubmitButtonText = 'Delete';
        break;
    }
    this.Model = data ? data : <ICompanyModel>{};
  }
  onSubmit() {
    if (this.componentMode === ComponentModeEnum.Create) {
      this.companyService.Create(this.Model).subscribe(
        r => console.log(r.humanReadableMessage),
        e => console.log(e),
        () => console.log('completed'));
    } else if (this.componentMode === ComponentModeEnum.Edit) {
      this.companyService
        .Update(this.Model)
        .subscribe(
          r => console.log(r.humanReadableMessage),
          e => console.log(e),
          () => console.log('completed'));
    } else if (this.componentMode === ComponentModeEnum.Delete) {
      this.companyService.Delete(this.Model.id).subscribe(
        r => console.log(r.humanReadableMessage),
        e => console.log(e),
        () => console.log('completed'));
    }
  }
  onToggle() {
    this.addButtonToggle = !this.addButtonToggle;
    return this.addButtonToggle;
  }
  OnServiceTypeAdded(data: IServiceType) {
    if (!this.serviceType.SaveMode) {
      this.serviceTypeToggle.nativeElement.click();
    }
    this.Model.serviceTypes.push(data);
  }
  onServiceTypeDeleted(data: IServiceType) {
    this.Model.serviceTypes.splice(this.Model.serviceTypes.indexOf(data), 1);
  }
}
