import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CondenserTubesComponent } from './condenser-tubes.component';

describe('CondenserTubesComponent', () => {
  let component: CondenserTubesComponent;
  let fixture: ComponentFixture<CondenserTubesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CondenserTubesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CondenserTubesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
