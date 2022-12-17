import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyDetailHomeComponent } from './property-detail-home.component';

describe('PropertyDetailHomeComponent', () => {
  let component: PropertyDetailHomeComponent;
  let fixture: ComponentFixture<PropertyDetailHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyDetailHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyDetailHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
