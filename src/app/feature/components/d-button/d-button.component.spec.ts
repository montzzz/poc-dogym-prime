import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DButtonComponent } from './d-button.component';

describe('DButtonComponent', () => {
  let component: DButtonComponent;
  let fixture: ComponentFixture<DButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
