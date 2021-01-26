import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UTubesComponent } from './u-tubes.component';

describe('UTubesComponent', () => {
  let component: UTubesComponent;
  let fixture: ComponentFixture<UTubesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UTubesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UTubesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
