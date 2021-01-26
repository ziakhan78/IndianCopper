import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopperBrassSleevesComponent } from './copper-brass-sleeves.component';

describe('CopperBrassSleevesComponent', () => {
  let component: CopperBrassSleevesComponent;
  let fixture: ComponentFixture<CopperBrassSleevesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopperBrassSleevesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopperBrassSleevesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
