import { Component, OnInit } from '@angular/core';
import { INaceModel } from '../../../../../models/nace/INaceModel';
import { ActivatedRoute } from '@angular/router';
import { NaceService } from '../../services/nace-service.service';
import { BaseComponent } from '../../../../../common/component/BaseComponent';
import { ComponentModeEnum } from '../../../../../common/component/ComponentModeEnum';
import { Location } from '@angular/common';

@Component({
  selector: 'app-nace-details',
  templateUrl: './nace-details.component.html',
  styleUrls: ['./nace-details.component.scss']
})
export class NaceDetailsComponent extends BaseComponent<INaceModel> implements OnInit {
  model: INaceModel;

  constructor(
    private activatedRouter: ActivatedRoute,
    private naceService: NaceService,
    private location: Location) {
    super(ComponentModeEnum.Edit);
    this.activatedRouter.params.subscribe(p => this.model = this.decodeParams(p.data));
  }

  ngOnInit() {
  }

  onSubmit() {
    this.naceService.Update();
  }

  goBack() {
    this.location.back();
  }
}
