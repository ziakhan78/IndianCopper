import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { GoalsComponent } from './goals/goals.component';
import { WhyUsComponent } from './why-us/why-us.component';
import { CertificationsApprovalsComponent } from './certifications-approvals/certifications-approvals.component';
import { WhyChooseUsComponent } from './why-choose-us/why-choose-us.component';

const routes: Routes = [
{path:'about-company',component:AboutCompanyComponent},
{path:'profiles', component: ProfilesComponent},
{path:'goals', component:GoalsComponent},
{path:'why-us', component:WhyUsComponent},
{path: 'certifications-approvals', component: CertificationsApprovalsComponent},
{path:'why-choose-us', component:WhyChooseUsComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
