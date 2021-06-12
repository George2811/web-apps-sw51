import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRequestDialogComponent } from './login-request-dialog.component';

describe('LoginRequestDialogComponent', () => {
  let component: LoginRequestDialogComponent;
  let fixture: ComponentFixture<LoginRequestDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginRequestDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginRequestDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
