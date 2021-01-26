import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgedFlangesGeometryComponent } from './forged-flanges-geometry.component';

describe('ForgedFlangesGeometryComponent', () => {
  let component: ForgedFlangesGeometryComponent;
  let fixture: ComponentFixture<ForgedFlangesGeometryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgedFlangesGeometryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgedFlangesGeometryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
