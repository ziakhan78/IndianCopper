import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopperCoilsComponent } from './copper-coils.component';

describe('CopperCoilsComponent', () => {
  let component: CopperCoilsComponent;
  let fixture: ComponentFixture<CopperCoilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopperCoilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopperCoilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
