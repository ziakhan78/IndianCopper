import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeatExchangerTubesComponent } from './heat-exchanger-tubes.component';

describe('HeatExchangerTubesComponent', () => {
  let component: HeatExchangerTubesComponent;
  let fixture: ComponentFixture<HeatExchangerTubesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeatExchangerTubesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeatExchangerTubesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
