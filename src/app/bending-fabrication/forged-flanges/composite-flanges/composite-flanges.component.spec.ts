import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompositeFlangesComponent } from './composite-flanges.component';

describe('CompositeFlangesComponent', () => {
  let component: CompositeFlangesComponent;
  let fixture: ComponentFixture<CompositeFlangesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompositeFlangesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompositeFlangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
