import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AluminumBrassTubesComponent } from './aluminum-brass-tubes.component';

describe('AluminumBrassTubesComponent', () => {
  let component: AluminumBrassTubesComponent;
  let fixture: ComponentFixture<AluminumBrassTubesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AluminumBrassTubesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AluminumBrassTubesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
