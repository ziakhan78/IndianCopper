import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinnedCoolingCoilsComponent } from './finned-cooling-coils.component';

describe('FinnedCoolingCoilsComponent', () => {
  let component: FinnedCoolingCoilsComponent;
  let fixture: ComponentFixture<FinnedCoolingCoilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinnedCoolingCoilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinnedCoolingCoilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
