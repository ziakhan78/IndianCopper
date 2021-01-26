import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopperAlloyTubesComponent } from './copper-alloy-tubes.component';

describe('CopperAlloyTubesComponent', () => {
  let component: CopperAlloyTubesComponent;
  let fixture: ComponentFixture<CopperAlloyTubesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopperAlloyTubesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopperAlloyTubesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
