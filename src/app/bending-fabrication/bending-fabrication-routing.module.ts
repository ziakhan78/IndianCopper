import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComplexPipingSystemsComponent } from './complex-piping-systems/complex-piping-systems.component';
import { CopperBrassSleevesComponent } from './copper-brass-sleeves/copper-brass-sleeves.component';
import { CopperFittingsComponent } from './copper-fittings/copper-fittings.component';
import { CopperManifoldHeaderAssemblyComponent } from './copper-manifold-header-assembly/copper-manifold-header-assembly.component';
import { PipeBendsComponent } from './pipe-bends/pipe-bends.component';
import { TubesWithFormedEndsComponent } from './tubes-with-formed-ends/tubes-with-formed-ends.component';
import { UTubesComponent } from './u-tubes/u-tubes.component';

const routes: Routes = [
  {path:'pipe-bends',component:PipeBendsComponent},
  {path: 'u-tubes', component: UTubesComponent},
  {path:'complex-piping-systems', component:ComplexPipingSystemsComponent},
  {path:'copper-manifold-header-assembly', component: CopperManifoldHeaderAssemblyComponent},
  {path:'copper-brass-sleeves', component:CopperBrassSleevesComponent},
  {path: 'tubes-with-formed-ends', component:TubesWithFormedEndsComponent},
  {path: 'copper-fittings', component:CopperFittingsComponent},
  { path: 'forged-flanges', loadChildren: () => import('./forged-flanges/forged-flanges.module').then(m => m.ForgedFlangesModule) }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BendingFabricationRoutingModule { }
