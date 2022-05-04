import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DInputmaskComponent } from './d-inputmask.component';

describe('DInputmaskComponent', () => {
  let component: DInputmaskComponent;
  let fixture: ComponentFixture<DInputmaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DInputmaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DInputmaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
