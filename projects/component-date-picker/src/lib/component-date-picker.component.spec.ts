import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentDatePickerComponent } from './component-date-picker.component';

describe('ComponentDatePickerComponent', () => {
  let component: ComponentDatePickerComponent;
  let fixture: ComponentFixture<ComponentDatePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentDatePickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
