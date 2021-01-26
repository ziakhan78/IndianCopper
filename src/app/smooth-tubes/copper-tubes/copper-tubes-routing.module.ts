import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CopperCoilsComponent } from './copper-coils/copper-coils.component';
import { CopperFittingsComponent } from './copper-fittings/copper-fittings.component';
import { CopperHelicalCoilsComponent } from './copper-helical-coils/copper-helical-coils.component';

import { CopperTubesComponent } from './copper-tubes.component';
import { PvcCoatedCopperTubesComponent } from './pvc-coated-copper-tubes/pvc-coated-copper-tubes.component';

const routes: Routes = [
  { path: '', component: CopperTubesComponent },
  {path:'copper-coils', component: CopperCoilsComponent},
  {path:'copper-fittings', component: CopperFittingsComponent},
  {path:'copper-helical-coils', component:CopperHelicalCoilsComponent},
  {path:'pvc-coated-copper-tubes', component: PvcCoatedCopperTubesComponent}
  


  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CopperTubesRoutingModule { }
