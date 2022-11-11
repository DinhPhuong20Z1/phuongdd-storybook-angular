import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuZoroComponent } from './menu-zoro.component';

describe('MenuZoroComponent', () => {
  let component: MenuZoroComponent;
  let fixture: ComponentFixture<MenuZoroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuZoroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuZoroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
