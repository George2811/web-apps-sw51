import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsIdComponent } from './events-id.component';

describe('EventsIdComponent', () => {
  let component: EventsIdComponent;
  let fixture: ComponentFixture<EventsIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
