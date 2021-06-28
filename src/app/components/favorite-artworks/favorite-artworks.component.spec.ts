import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteArtworksComponent } from './favorite-artworks.component';

describe('FavoriteArtworksComponent', () => {
  let component: FavoriteArtworksComponent;
  let fixture: ComponentFixture<FavoriteArtworksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteArtworksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteArtworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
