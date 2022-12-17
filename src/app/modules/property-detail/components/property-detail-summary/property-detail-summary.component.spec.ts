import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyDetailSummaryComponent } from './property-detail-summary.component';

describe('PropertyDetailSummaryComponent', () => {
  let component: PropertyDetailSummaryComponent;
  let fixture: ComponentFixture<PropertyDetailSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyDetailSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyDetailSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
