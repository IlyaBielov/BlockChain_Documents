import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormForAddFileComponent } from './form-for-add-file.component';

describe('FormForAddFileComponent', () => {
  let component: FormForAddFileComponent;
  let fixture: ComponentFixture<FormForAddFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormForAddFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormForAddFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
