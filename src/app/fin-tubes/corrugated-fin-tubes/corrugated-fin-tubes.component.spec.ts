import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrugatedFinTubesComponent } from './corrugated-fin-tubes.component';

describe('CorrugatedFinTubesComponent', () => {
  let component: CorrugatedFinTubesComponent;
  let fixture: ComponentFixture<CorrugatedFinTubesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrugatedFinTubesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrugatedFinTubesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
