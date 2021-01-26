import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopperSubmenuComponent } from './copper-submenu.component';

describe('CopperSubmenuComponent', () => {
  let component: CopperSubmenuComponent;
  let fixture: ComponentFixture<CopperSubmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopperSubmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopperSubmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
