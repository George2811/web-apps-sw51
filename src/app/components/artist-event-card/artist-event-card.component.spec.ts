import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistEventCardComponent } from './artist-event-card.component';

describe('ArtistEventCardComponent', () => {
  let component: ArtistEventCardComponent;
  let fixture: ComponentFixture<ArtistEventCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistEventCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistEventCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
