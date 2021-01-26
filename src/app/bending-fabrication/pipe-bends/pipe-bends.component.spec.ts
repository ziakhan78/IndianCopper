import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeBendsComponent } from './pipe-bends.component';

describe('PipeBendsComponent', () => {
  let component: PipeBendsComponent;
  let fixture: ComponentFixture<PipeBendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipeBendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeBendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
