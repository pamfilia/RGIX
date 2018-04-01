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
  SubmitButtonText: string;
  constructor(private naceService: NaceService) {
    super();
  }

  ngOnInit() {
  }

  Bind(data: INaceModel, componentMode: ComponentModeEnum) {
    this.Model = data ? data : <INaceModel>{};
    this.componentMode = componentMode;
    this.SubmitButtonText = this.componentMode === ComponentModeEnum.Create ? 'Add' : 'Update';
  }

  onSubmit() {
    if (this.componentMode === ComponentModeEnum.Create) {
      this.naceService.Create(this.Model).subscribe(
        r => console.log(r.humanReadableMessage),
        e => console.log(e),
        () => console.log('completed'));
    } else if (this.componentMode === ComponentModeEnum.Edit) {
      this.naceService
        .Update(this.Model)
        .subscribe(
          r => console.log(r.humanReadableMessage),
          e => console.log(e),
          () => console.log('completed'));
    } else if (this.componentMode === ComponentModeEnum.Delete) {
      this.naceService.Delete(this.Model.id).subscribe(
        r => console.log(r.humanReadableMessage),
        e => console.log(e),
        () => console.log('completed'));
    }
  }
}
