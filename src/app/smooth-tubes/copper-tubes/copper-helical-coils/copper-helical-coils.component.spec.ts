import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopperHelicalCoilsComponent } from './copper-helical-coils.component';

describe('CopperHelicalCoilsComponent', () => {
  let component: CopperHelicalCoilsComponent;
  let fixture: ComponentFixture<CopperHelicalCoilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopperHelicalCoilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopperHelicalCoilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
