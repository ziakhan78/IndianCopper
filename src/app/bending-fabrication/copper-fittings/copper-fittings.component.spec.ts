import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopperFittingsComponent } from './copper-fittings.component';

describe('CopperFittingsComponent', () => {
  let component: CopperFittingsComponent;
  let fixture: ComponentFixture<CopperFittingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopperFittingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopperFittingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
