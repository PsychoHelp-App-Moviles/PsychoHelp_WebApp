import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsychologistsListComponent } from './psychologists-list.component';

describe('PsychologistsListComponent', () => {
  let component: PsychologistsListComponent;
  let fixture: ComponentFixture<PsychologistsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PsychologistsListComponent]
    });
    fixture = TestBed.createComponent(PsychologistsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
