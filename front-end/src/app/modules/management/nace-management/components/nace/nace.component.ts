import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NaceService } from '../../services/nace-service.service';
import { INaceModel } from '../../../../../models/nace/INaceModel';
import { ComponentModeEnum } from '../../../../../common/component/ComponentModeEnum';
import { BaseComponent } from '../../../../../common/component/BaseComponent';
import { ReturnResult } from '../../../../../common/service/ReturnResult';
import { Observable } from 'rxjs/Observable';
import { isNullOrUndefined } from 'util';
import { ModalContentComponent } from '../../../../../common/modal/ModalContentComponent';
import { NaceDetailsComponent } from '../nace-details/nace-details.component';


@Component({
  selector: 'app-nace',
  templateUrl: './nace.component.html',
  styleUrls: ['./nace.component.scss']
})
export class NaceComponent extends BaseComponent<INaceModel[]> implements OnInit {
  private static ContinuationTokens: Map<number, string> = new Map();
  private currentPage: Observable<number>;
  private SelectedItem: ModalContentComponent;
  private SelectedTitle: string;
  constructor(private naceService: NaceService) {
    super(ComponentModeEnum.List);
  }
  public model: ReturnResult<INaceModel[]>;
  ngOnInit() {
    NaceComponent.ContinuationTokens.clear();
    this.naceService.Read().subscribe(
      (r: ReturnResult<INaceModel[]>) => {
        this.model = r;
        NaceComponent.ContinuationTokens.set(1, r.requestContinuation);
      },
      (e) => console.log('OOps'));
  }
  onPageChanged(page: number) {
    const token: string = NaceComponent.ContinuationTokens.get(page);
    const isTokenNull = isNullOrUndefined(token);
    this.naceService.Read(isTokenNull ? page : null, token).subscribe(
      (r: ReturnResult<INaceModel[]>) => {
        this.model = r;
        if (page > 0) {
          NaceComponent.ContinuationTokens.set(page + 1, r.requestContinuation);
        }
      },
      (e) => console.log('OOps'));
  }

  onDetails(item: INaceModel): void {
    this.SelectedTitle = item.code + ' Kodlu Faaliyet Kodu Detaylari';
    this.SelectedItem = new ModalContentComponent(NaceDetailsComponent, item);
  }
}
