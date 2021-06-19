import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbyistProfileComponent } from './hobbyist-profile.component';

describe('HobbyistProfileComponent', () => {
  let component: HobbyistProfileComponent;
  let fixture: ComponentFixture<HobbyistProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HobbyistProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HobbyistProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
