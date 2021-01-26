import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrassOctagonalTubesComponent } from './brass-octagonal-tubes.component';

describe('BrassOctagonalTubesComponent', () => {
  let component: BrassOctagonalTubesComponent;
  let fixture: ComponentFixture<BrassOctagonalTubesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrassOctagonalTubesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrassOctagonalTubesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
