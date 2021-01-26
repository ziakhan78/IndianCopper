import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuproNickelFlangeComponent } from './cupro-nickel-flange.component';

describe('CuproNickelFlangeComponent', () => {
  let component: CuproNickelFlangeComponent;
  let fixture: ComponentFixture<CuproNickelFlangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuproNickelFlangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuproNickelFlangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
