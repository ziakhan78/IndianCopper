import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeatExchangerTubesComponent } from './heat-exchanger-tubes.component';

const routes: Routes = [
  { path: '', component: HeatExchangerTubesComponent },
  {path:'heat-exchanger-tubes', component: HeatExchangerTubesComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeatExchangerTubesRoutingModule { }
