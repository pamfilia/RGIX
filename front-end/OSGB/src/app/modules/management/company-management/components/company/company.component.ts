import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../services/company-service.service';
import { ICompanyModel } from '../../../../../models/company/ICompanyModel';
import { BaseComponent } from '../../../../../common/component/BaseComponent';
import { ComponentModeEnum } from '../../../../../common/component/ComponentModeEnum';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent extends BaseComponent<ICompanyModel> implements OnInit {

  private _companyService: CompanyService;
  public model: ICompanyModel[];
  constructor(private companyService: CompanyService) {
    super(ComponentModeEnum.List);
    this._companyService = companyService;
   }

  ngOnInit() {

  }

}
