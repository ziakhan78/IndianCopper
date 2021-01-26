import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmiraltyBrassTubesComponent } from './admiralty-brass-tubes.component';

describe('AdmiraltyBrassTubesComponent', () => {
  let component: AdmiraltyBrassTubesComponent;
  let fixture: ComponentFixture<AdmiraltyBrassTubesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmiraltyBrassTubesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmiraltyBrassTubesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
