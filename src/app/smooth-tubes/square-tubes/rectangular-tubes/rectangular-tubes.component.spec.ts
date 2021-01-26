import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RectangularTubesComponent } from './rectangular-tubes.component';

describe('RectangularTubesComponent', () => {
  let component: RectangularTubesComponent;
  let fixture: ComponentFixture<RectangularTubesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RectangularTubesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RectangularTubesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
