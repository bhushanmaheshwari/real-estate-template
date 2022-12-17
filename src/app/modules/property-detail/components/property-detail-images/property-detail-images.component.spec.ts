import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyDetailImagesComponent } from './property-detail-images.component';

describe('PropertyDetailImagesComponent', () => {
  let component: PropertyDetailImagesComponent;
  let fixture: ComponentFixture<PropertyDetailImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyDetailImagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyDetailImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
