import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaceComponent } from './nace.component';
import { NaceService } from '../../services/nace-service.service';
import { GlobalService } from '../../../../../services/global.service';
import { PaginatorComponent } from '../../../../shared/component/paginator/paginator.component';

describe('NaceComponent', () => {
  let component: NaceComponent;
  let fixture: ComponentFixture<NaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PaginatorComponent, NaceComponent ],
      providers: [GlobalService, NaceService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
