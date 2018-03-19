import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NaceService } from '../../services/nace-service.service';
import { INaceModel } from '../../../../../models/nace/INaceModel';
import { ComponentModeEnum } from '../../../../../common/component/ComponentModeEnum';
import { BaseComponent } from '../../../../../common/component/BaseComponent';
import { ReturnResult } from '../../../../../common/service/ReturnResult';


@Component({
  selector: 'app-nace',
  templateUrl: './nace.component.html',
  styleUrls: ['./nace.component.scss']
})
export class NaceComponent extends BaseComponent<INaceModel[]> implements OnInit {

  private readonly _naceService: NaceService;
  constructor(private naceService: NaceService) {
    super(ComponentModeEnum.List);
    this._naceService = naceService;
  }
  public model: ReturnResult<INaceModel[]>;
  ngOnInit() {
    this._naceService.Read().subscribe((r: ReturnResult<INaceModel[]>) => {
      this.model = r;
    });
  }
}
