import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsenserTubesComponent } from './consenser-tubes.component';

describe('ConsenserTubesComponent', () => {
  let component: ConsenserTubesComponent;
  let fixture: ComponentFixture<ConsenserTubesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsenserTubesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsenserTubesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
