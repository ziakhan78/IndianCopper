import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexPipingSystemsComponent } from './complex-piping-systems.component';

describe('ComplexPipingSystemsComponent', () => {
  let component: ComplexPipingSystemsComponent;
  let fixture: ComponentFixture<ComplexPipingSystemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplexPipingSystemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplexPipingSystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
