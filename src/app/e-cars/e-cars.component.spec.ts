import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ECarsComponent } from './e-cars.component';

describe('ECarsComponent', () => {
  let component: ECarsComponent;
  let fixture: ComponentFixture<ECarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ECarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ECarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
