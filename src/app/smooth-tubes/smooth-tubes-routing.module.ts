import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  { path: 'smooth-tubes', loadChildren: () => import('./smooth-tubes.module').then(m => m.SmoothTubesModule) },
  { path: 'smooth-tubes/copper-tubes', loadChildren: () => import('./copper-tubes/copper-tubes.module').then(m => m.CopperTubesModule) },
  { path: 'smooth-tubes/brass-tubes', loadChildren: () => import('./brass-tubes/brass-tubes.module').then(m => m.BrassTubesModule) },
  { path: 'smooth-tubes/cupro-nickel-tubes', loadChildren: () => import('./cupro-nickel-tubes/cupro-nickel-tubes.module').then(m => m.CuproNickelTubesModule) },
  { path: 'fin-tubes', loadChildren: () => import('../fin-tubes/fin-tubes.module').then(m => m.FinTubesModule) },
  { path: 'smooth-tubes/bimetallic-tubes', loadChildren: () => import('./bimetallic-tubes/bimetallic-tubes.module').then(m => m.BimetallicTubesModule) },
  { path: 'smooth-tubes/heat-exchanger-tubes', loadChildren: () => import('./heat-exchanger-tubes/heat-exchanger-tubes.module').then(m => m.HeatExchangerTubesModule) }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmoothTubesRoutingModule { }
