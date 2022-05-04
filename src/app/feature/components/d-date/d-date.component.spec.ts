import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DDateComponent } from './d-date.component';

describe('DDateComponent', () => {
  let component: DDateComponent;
  let fixture: ComponentFixture<DDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
