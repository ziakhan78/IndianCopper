import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareTubesComponent } from './square-tubes.component';

describe('SquareTubesComponent', () => {
  let component: SquareTubesComponent;
  let fixture: ComponentFixture<SquareTubesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SquareTubesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SquareTubesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
