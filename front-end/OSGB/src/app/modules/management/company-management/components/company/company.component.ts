import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../services/company-service.service';
import { ICompanyModel } from '../../../../../models/company/ICompanyModel';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  private _companyService: CompanyService;
  public model: ICompanyModel[];
  constructor(private companyService: CompanyService) {
    this._companyService = companyService;
   }

  ngOnInit() {

  }

}
