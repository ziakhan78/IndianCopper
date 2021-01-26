import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuproNickelTubes9010Component } from './cupro-nickel-tubes9010.component';

describe('CuproNickelTubes9010Component', () => {
  let component: CuproNickelTubes9010Component;
  let fixture: ComponentFixture<CuproNickelTubes9010Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuproNickelTubes9010Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuproNickelTubes9010Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
