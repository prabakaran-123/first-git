import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EBikesComponent } from './e-bikes.component';

describe('EBikesComponent', () => {
  let component: EBikesComponent;
  let fixture: ComponentFixture<EBikesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EBikesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EBikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
