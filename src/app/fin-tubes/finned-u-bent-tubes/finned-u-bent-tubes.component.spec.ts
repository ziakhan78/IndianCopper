import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinnedUBentTubesComponent } from './finned-u-bent-tubes.component';

describe('FinnedUBentTubesComponent', () => {
  let component: FinnedUBentTubesComponent;
  let fixture: ComponentFixture<FinnedUBentTubesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinnedUBentTubesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinnedUBentTubesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
