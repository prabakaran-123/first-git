import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HVehiclesComponent } from './h-vehicles.component';

describe('HVehiclesComponent', () => {
  let component: HVehiclesComponent;
  let fixture: ComponentFixture<HVehiclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HVehiclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
