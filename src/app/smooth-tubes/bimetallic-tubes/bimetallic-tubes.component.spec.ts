import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BimetallicTubesComponent } from './bimetallic-tubes.component';

describe('BimetallicTubesComponent', () => {
  let component: BimetallicTubesComponent;
  let fixture: ComponentFixture<BimetallicTubesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BimetallicTubesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BimetallicTubesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
