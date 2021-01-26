import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurboChillFinTubesComponent } from './turbo-chill-fin-tubes.component';

describe('TurboChillFinTubesComponent', () => {
  let component: TurboChillFinTubesComponent;
  let fixture: ComponentFixture<TurboChillFinTubesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurboChillFinTubesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurboChillFinTubesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
