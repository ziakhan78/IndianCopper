import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PvcCoatedCopperTubesComponent } from './pvc-coated-copper-tubes.component';

describe('PvcCoatedCopperTubesComponent', () => {
  let component: PvcCoatedCopperTubesComponent;
  let fixture: ComponentFixture<PvcCoatedCopperTubesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PvcCoatedCopperTubesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PvcCoatedCopperTubesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
