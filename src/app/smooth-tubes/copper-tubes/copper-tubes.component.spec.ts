import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopperTubesComponent } from './copper-tubes.component';

describe('CopperTubesComponent', () => {
  let component: CopperTubesComponent;
  let fixture: ComponentFixture<CopperTubesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopperTubesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopperTubesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
