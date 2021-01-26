import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { from } from 'rxjs';
import { QualityComponent } from './quality/quality.component';
import { ContactComponent } from './contact/contact.component';
import { InfrastructureComponent } from './infrastructure/infrastructure.component';
import { SitemapComponent } from './sitemap/sitemap.component';

const routes: Routes = [
  { path:  '', redirectTo:  'home', pathMatch:  'full',},
  { path: 'home', component: HomeComponent},
  {path:'about', 
  loadChildren: () => import('./about/about.module').then(m => m.AboutModule)},
  { path: 'smooth-tubes', loadChildren: () => import('./smooth-tubes/smooth-tubes.module').then(m => m.SmoothTubesModule) },
  { path: 'smooth-tubes/copper-tubes', loadChildren: () => import('./smooth-tubes/copper-tubes/copper-tubes.module').then(m => m.CopperTubesModule) },
  { path: 'smooth-tubes/brass-tubes', loadChildren: () => import('./smooth-tubes/brass-tubes/brass-tubes.module').then(m => m.BrassTubesModule) },
  { path: 'smooth-tubes/cupro-nickel-tubes', loadChildren: () => import('./smooth-tubes/cupro-nickel-tubes/cupro-nickel-tubes.module').then(m => m.CuproNickelTubesModule) },
  { path: 'smooth-tubes/square-tubes', loadChildren: () => import('./smooth-tubes/square-tubes/square-tubes.module').then(m => m.SquareTubesModule) },
  { path: 'fin-tubes', loadChildren: () => import('./fin-tubes/fin-tubes.module').then(m => m.FinTubesModule) },
  {path:'quality', component:QualityComponent},
  { path: 'bending-fabrication', loadChildren: () => import('./bending-fabrication/bending-fabrication.module').then(m => m.BendingFabricationModule) },
  { path: 'forged-flanges', loadChildren: () => import('./bending-fabrication/forged-flanges/forged-flanges.module').then(m => m.ForgedFlangesModule) },
  {path: 'contact', component:ContactComponent},
{path:'infrastructure', component:InfrastructureComponent},
{path: 'sitemap', component:SitemapComponent},
  { path: 'smooth-tubes/bimetallic-tubes', loadChildren: () => import('./smooth-tubes/bimetallic-tubes/bimetallic-tubes.module').then(m => m.BimetallicTubesModule) },
  { path: 'smooth-tubes/heat-exchanger-tubes', loadChildren: () => import('./smooth-tubes/heat-exchanger-tubes/heat-exchanger-tubes.module').then(m => m.HeatExchangerTubesModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})

export class AppRoutingModule { }
