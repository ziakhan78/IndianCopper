import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TubesWithFormedEndsComponent } from './tubes-with-formed-ends.component';

describe('TubesWithFormedEndsComponent', () => {
  let component: TubesWithFormedEndsComponent;
  let fixture: ComponentFixture<TubesWithFormedEndsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TubesWithFormedEndsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TubesWithFormedEndsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
