import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceGroupComponent } from './interface-group.component';

describe('InterfaceGroupComponent', () => {
  let component: InterfaceGroupComponent;
  let fixture: ComponentFixture<InterfaceGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterfaceGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfaceGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
