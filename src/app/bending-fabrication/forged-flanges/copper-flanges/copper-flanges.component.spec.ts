import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopperFlangesComponent } from './copper-flanges.component';

describe('CopperFlangesComponent', () => {
  let component: CopperFlangesComponent;
  let fixture: ComponentFixture<CopperFlangesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopperFlangesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopperFlangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
