import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSubComponent } from './about-sub.component';

describe('AboutSubComponent', () => {
  let component: AboutSubComponent;
  let fixture: ComponentFixture<AboutSubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutSubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
