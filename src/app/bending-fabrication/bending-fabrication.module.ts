import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BendingFabricationRoutingModule } from './bending-fabrication-routing.module';
import { PipeBendsComponent } from './pipe-bends/pipe-bends.component';
import { UTubesComponent } from './u-tubes/u-tubes.component';
import { ComplexPipingSystemsComponent } from './complex-piping-systems/complex-piping-systems.component';
import { CopperManifoldHeaderAssemblyComponent } from './copper-manifold-header-assembly/copper-manifold-header-assembly.component';
import { CopperBrassSleevesComponent } from './copper-brass-sleeves/copper-brass-sleeves.component';
import { TubesWithFormedEndsComponent } from './tubes-with-formed-ends/tubes-with-formed-ends.component';
import { CopperFittingsComponent } from './copper-fittings/copper-fittings.component';
import { SubmenuComponent } from './submenu/submenu.component';


@NgModule({
  declarations: [PipeBendsComponent, UTubesComponent, ComplexPipingSystemsComponent, CopperManifoldHeaderAssemblyComponent, CopperBrassSleevesComponent, TubesWithFormedEndsComponent, CopperFittingsComponent, SubmenuComponent],
  imports: [
    CommonModule,
    BendingFabricationRoutingModule
  ]
})
export class BendingFabricationModule { }
