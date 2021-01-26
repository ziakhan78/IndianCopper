import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { GoalsComponent } from './goals/goals.component';
import { WhyUsComponent } from './why-us/why-us.component';
import { AboutSubComponent } from './about-sub/about-sub.component';
import { CertificationsApprovalsComponent } from './certifications-approvals/certifications-approvals.component';
import { WhyChooseUsComponent } from './why-choose-us/why-choose-us.component';


@NgModule({
  declarations: [AboutCompanyComponent, ProfilesComponent, GoalsComponent, WhyUsComponent, AboutSubComponent, CertificationsApprovalsComponent, WhyChooseUsComponent],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
