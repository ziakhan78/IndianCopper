import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuproNickelTubes7030Component } from './cupro-nickel-tubes7030.component';

describe('CuproNickelTubes7030Component', () => {
  let component: CuproNickelTubes7030Component;
  let fixture: ComponentFixture<CuproNickelTubes7030Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuproNickelTubes7030Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuproNickelTubes7030Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
