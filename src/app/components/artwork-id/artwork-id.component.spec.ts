import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtworkIdComponent } from './artwork-id.component';

describe('ArtworkIdComponent', () => {
  let component: ArtworkIdComponent;
  let fixture: ComponentFixture<ArtworkIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtworkIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtworkIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
