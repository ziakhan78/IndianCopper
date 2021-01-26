import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificationsApprovalsComponent } from './certifications-approvals.component';

describe('CertificationsApprovalsComponent', () => {
  let component: CertificationsApprovalsComponent;
  let fixture: ComponentFixture<CertificationsApprovalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificationsApprovalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificationsApprovalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
