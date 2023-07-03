import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorRequstComponent } from './doctor-requst.component';

describe('DoctorRequstComponent', () => {
  let component: DoctorRequstComponent;
  let fixture: ComponentFixture<DoctorRequstComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorRequstComponent]
    });
    fixture = TestBed.createComponent(DoctorRequstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
