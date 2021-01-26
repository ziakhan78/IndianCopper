import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternallyFinnedTubesComponent } from './internally-finned-tubes.component';

describe('InternallyFinnedTubesComponent', () => {
  let component: InternallyFinnedTubesComponent;
  let fixture: ComponentFixture<InternallyFinnedTubesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternallyFinnedTubesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternallyFinnedTubesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
