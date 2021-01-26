import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopperManifoldHeaderAssemblyComponent } from './copper-manifold-header-assembly.component';

describe('CopperManifoldHeaderAssemblyComponent', () => {
  let component: CopperManifoldHeaderAssemblyComponent;
  let fixture: ComponentFixture<CopperManifoldHeaderAssemblyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopperManifoldHeaderAssemblyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopperManifoldHeaderAssemblyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
