import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedMapComponent } from './shared-map.component';

describe('SharedMapComponent', () => {
  let component: SharedMapComponent;
  let fixture: ComponentFixture<SharedMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
