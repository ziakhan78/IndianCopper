import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BimetallicFintubesComponent } from './bimetallic-fintubes.component';

describe('BimetallicFintubesComponent', () => {
  let component: BimetallicFintubesComponent;
  let fixture: ComponentFixture<BimetallicFintubesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BimetallicFintubesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BimetallicFintubesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
