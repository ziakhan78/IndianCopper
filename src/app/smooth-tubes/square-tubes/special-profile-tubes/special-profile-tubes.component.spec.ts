import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialProfileTubesComponent } from './special-profile-tubes.component';

describe('SpecialProfileTubesComponent', () => {
  let component: SpecialProfileTubesComponent;
  let fixture: ComponentFixture<SpecialProfileTubesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialProfileTubesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialProfileTubesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
