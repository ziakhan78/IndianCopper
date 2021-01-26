import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuproNickelTubesComponent } from './cupro-nickel-tubes.component';

describe('CuproNickelTubesComponent', () => {
  let component: CuproNickelTubesComponent;
  let fixture: ComponentFixture<CuproNickelTubesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuproNickelTubesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuproNickelTubesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
