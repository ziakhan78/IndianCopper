import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrassTubesComponent } from './brass-tubes.component';

describe('BrassTubesComponent', () => {
  let component: BrassTubesComponent;
  let fixture: ComponentFixture<BrassTubesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrassTubesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrassTubesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
