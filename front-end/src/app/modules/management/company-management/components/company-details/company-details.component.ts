import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../services/company-service.service';
import { ICompanyModel } from '../../../../../models/company/ICompanyModel';
import { BaseComponent } from '../../../../../common/component/BaseComponent';
import { IItemDetailComponent } from '../../../../../common/component/IItemDetailComponent';
import { ComponentModeEnum } from '../../../../../common/component/ComponentModeEnum';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss']
})

export class CompanyDetailsComponent extends BaseComponent<ICompanyModel> implements OnInit, IItemDetailComponent {
  Model: ICompanyModel;
  protected addButtonToggle = false;
  SubmitButtonText: string;
  constructor(private companyService: CompanyService) {
    super();
  }

  ngOnInit() { }

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
}
