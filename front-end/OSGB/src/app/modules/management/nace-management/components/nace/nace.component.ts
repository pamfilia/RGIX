import { Component, OnInit } from '@angular/core';
import { NaceService } from '../../services/nace-service.service';
import { INaceListModel } from '../../../../../models/nace/INaceListModel';
import { ServiceOperationType } from '../../../../../common/enums/ServiceOperationType';

@Component({
  selector: 'app-nace',
  templateUrl: './nace.component.html',
  styleUrls: ['./nace.component.scss']
})
export class NaceComponent implements OnInit {

  private readonly _naceService: NaceService;
  constructor(private naceService: NaceService) {
    this._naceService = naceService;
  }
  public componentData: INaceListModel[];
  ngOnInit() {
    this._naceService.Read().subscribe(r => this.componentData = r.resultValue);
  }

}
