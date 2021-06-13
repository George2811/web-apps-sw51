import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewArtworkFormComponent } from './new-artwork-form.component';

describe('NewArtworkFormComponent', () => {
  let component: NewArtworkFormComponent;
  let fixture: ComponentFixture<NewArtworkFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewArtworkFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewArtworkFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
