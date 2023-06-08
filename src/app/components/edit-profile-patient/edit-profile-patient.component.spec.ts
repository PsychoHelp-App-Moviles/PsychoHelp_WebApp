import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfilePatientComponent } from './edit-profile-patient.component';

describe('EditProfilePatientComponent', () => {
  let component: EditProfilePatientComponent;
  let fixture: ComponentFixture<EditProfilePatientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditProfilePatientComponent]
    });
    fixture = TestBed.createComponent(EditProfilePatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
