import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthComponent } from './auth.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth-service.service';
import { Observable } from 'rxjs/Observable';

describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;
  let authServiceStub: Partial<AuthService>;

  authServiceStub = {
    login: (a, b) => new Observable<boolean>(v => v.next(true)),
    logout: () => {}
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthComponent ],
      imports: [FormsModule],
      providers: [{provide: AuthService, useValue: authServiceStub } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
