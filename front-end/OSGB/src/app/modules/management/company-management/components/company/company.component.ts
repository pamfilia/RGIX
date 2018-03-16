import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../services/company-service.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  private _companyService: CompanyService;
  constructor(private companyService: CompanyService) {
    this._companyService = companyService;
   }

  ngOnInit() {
    
  }

}
