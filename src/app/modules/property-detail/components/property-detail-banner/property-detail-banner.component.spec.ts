import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyDetailBannerComponent } from './property-detail-banner.component';

describe('PropertyDetailBannerComponent', () => {
  let component: PropertyDetailBannerComponent;
  let fixture: ComponentFixture<PropertyDetailBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyDetailBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyDetailBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
