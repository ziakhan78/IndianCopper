import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegralFinTubesComponent } from './integral-fin-tubes.component';

describe('IntegralFinTubesComponent', () => {
  let component: IntegralFinTubesComponent;
  let fixture: ComponentFixture<IntegralFinTubesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntegralFinTubesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegralFinTubesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
