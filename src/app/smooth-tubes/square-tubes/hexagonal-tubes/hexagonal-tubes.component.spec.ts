import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HexagonalTubesComponent } from './hexagonal-tubes.component';

describe('HexagonalTubesComponent', () => {
  let component: HexagonalTubesComponent;
  let fixture: ComponentFixture<HexagonalTubesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HexagonalTubesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HexagonalTubesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
