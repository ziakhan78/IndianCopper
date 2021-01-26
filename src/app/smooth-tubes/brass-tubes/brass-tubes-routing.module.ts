import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrassTubesComponent } from './brass-tubes.component';
import { AdmiraltyBrassTubesComponent } from './admiralty-brass-tubes/admiralty-brass-tubes.component';
import { AluminumBrassTubesComponent } from './aluminum-brass-tubes/aluminum-brass-tubes.component';
import { CopperAlloyTubesComponent } from './copper-alloy-tubes/copper-alloy-tubes.component';


const routes: Routes = [
  { path: '', component: BrassTubesComponent },
  {path:'admiralty-brass-tubes', component: AdmiraltyBrassTubesComponent},
  {path:'aluminum-brass-tubes', component:AluminumBrassTubesComponent},
  {path:'copper-alloy-tubes', component:CopperAlloyTubesComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrassTubesRoutingModule { }
