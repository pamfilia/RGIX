import { Component, OnInit } from '@angular/core';
import { INaceModel } from '../../../../../models/nace/INaceModel';
import { NaceService } from '../../services/nace-service.service';
import { BaseComponent } from '../../../../../common/component/BaseComponent';
import { ComponentModeEnum } from '../../../../../common/component/ComponentModeEnum';
import { IItemDetailComponent } from '../../../../../common/component/IItemDetailComponent';

@Component({
  selector: 'app-nace-details',
  templateUrl: './nace-details.component.html',
  styleUrls: ['./nace-details.component.scss']
})
export class NaceDetailsComponent extends BaseComponent<INaceModel> implements OnInit, IItemDetailComponent {
  Model: INaceModel;

  constructor(private naceService: NaceService) {
    super(ComponentModeEnum.Edit);
  }

  ngOnInit() {
  }

  onSubmit() {
  }
}
