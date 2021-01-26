import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrasstubesSubmenuComponent } from './brasstubes-submenu.component';

describe('BrasstubesSubmenuComponent', () => {
  let component: BrasstubesSubmenuComponent;
  let fixture: ComponentFixture<BrasstubesSubmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrasstubesSubmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrasstubesSubmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
