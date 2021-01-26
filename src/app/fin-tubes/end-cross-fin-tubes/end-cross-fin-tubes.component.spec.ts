import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndCrossFinTubesComponent } from './end-cross-fin-tubes.component';

describe('EndCrossFinTubesComponent', () => {
  let component: EndCrossFinTubesComponent;
  let fixture: ComponentFixture<EndCrossFinTubesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndCrossFinTubesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndCrossFinTubesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
