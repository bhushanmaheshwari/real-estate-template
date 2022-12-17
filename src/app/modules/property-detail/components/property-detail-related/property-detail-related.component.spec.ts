import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyDetailRelatedComponent } from './property-detail-related.component';

describe('PropertyDetailRelatedComponent', () => {
  let component: PropertyDetailRelatedComponent;
  let fixture: ComponentFixture<PropertyDetailRelatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyDetailRelatedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyDetailRelatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
