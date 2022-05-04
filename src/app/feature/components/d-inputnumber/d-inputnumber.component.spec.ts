import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DInputnumberComponent } from './d-inputnumber.component';

describe('DInputnumberComponent', () => {
  let component: DInputnumberComponent;
  let fixture: ComponentFixture<DInputnumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DInputnumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DInputnumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
