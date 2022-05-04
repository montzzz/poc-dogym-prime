import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DDatetimeComponent } from './d-datetime.component';

describe('DDatetimeComponent', () => {
  let component: DDatetimeComponent;
  let fixture: ComponentFixture<DDatetimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DDatetimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DDatetimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
