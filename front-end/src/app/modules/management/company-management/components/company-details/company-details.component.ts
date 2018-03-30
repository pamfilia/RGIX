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

  constructor(private companyService: CompanyService) {
    super(ComponentModeEnum.Edit);
  }

  ngOnInit() {
  }

  onSubmit() {
  }
}
