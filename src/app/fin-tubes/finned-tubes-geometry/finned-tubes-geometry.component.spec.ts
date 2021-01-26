import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinnedTubesGeometryComponent } from './finned-tubes-geometry.component';

describe('FinnedTubesGeometryComponent', () => {
  let component: FinnedTubesGeometryComponent;
  let fixture: ComponentFixture<FinnedTubesGeometryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinnedTubesGeometryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinnedTubesGeometryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
