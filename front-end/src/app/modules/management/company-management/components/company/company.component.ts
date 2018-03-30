import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CompanyService } from '../../services/company-service.service';
import { ICompanyModel } from '../../../../../models/company/ICompanyModel';
import { ComponentModeEnum } from '../../../../../common/component/ComponentModeEnum';
import { BaseComponent } from '../../../../../common/component/BaseComponent';
import { ReturnResult } from '../../../../../common/service/ReturnResult';
import { Observable } from 'rxjs/Observable';
import { isNullOrUndefined } from 'util';
import { ModalContentComponent } from '../../../../../common/modal/ModalContentComponent';
import { CompanyDetailsComponent } from '../company-details/company-details.component';


@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent extends BaseComponent<ICompanyModel[]> implements OnInit {
  private static ContinuationTokens: Map<number, string> = new Map();
  private currentPage: Observable<number>;
  private SelectedItem: ModalContentComponent;
  private SelectedTitle: string;

  constructor(private companyService: CompanyService) {
    super(ComponentModeEnum.List);
  }

  public model: ReturnResult<ICompanyModel[]>;

  ngOnInit() {
    CompanyComponent.ContinuationTokens.clear();
    this.companyService.Read().subscribe(
      (r: ReturnResult<ICompanyModel[]>) => {
        this.model = r;
        CompanyComponent.ContinuationTokens.set(1, r.requestContinuation);
      }, (e) => console.log('OOps'));
  }

  onPageChanged(page: number) {
    const token: string = CompanyComponent.ContinuationTokens.get(page);
    const isTokenNull = isNullOrUndefined(token);
    this.companyService.Read(isTokenNull ? page : null, token).subscribe(
      (r: ReturnResult<ICompanyModel[]>) => {
        this.model = r;
        if (page > 0) {
          CompanyComponent.ContinuationTokens.set(page + 1, r.requestContinuation);
        }
      }, (e) => console.log('OOps'));
  }

  onDetails(item: ICompanyModel): void {
    this.SelectedTitle = item.name + ' Detaylari';
    this.SelectedItem = new ModalContentComponent(CompanyDetailsComponent, item);
  }
}

