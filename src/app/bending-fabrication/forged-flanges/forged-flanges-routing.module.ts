import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompositeFlangesComponent } from './composite-flanges/composite-flanges.component';
import { CopperFlangesComponent } from './copper-flanges/copper-flanges.component';
import { CuproNickelFlangeComponent } from './cupro-nickel-flange/cupro-nickel-flange.component';
import { ForgedFlangesGeometryComponent } from './forged-flanges-geometry/forged-flanges-geometry.component';

const routes: Routes = [
{path: 'forged-flanges-geometry', component:ForgedFlangesGeometryComponent},
{path:'cupro-nickel-flange', component:CuproNickelFlangeComponent},
{path:'copper-flanges', component:CopperFlangesComponent},
{path:'composite-flanges', component:CompositeFlangesComponent}



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForgedFlangesRoutingModule { }
