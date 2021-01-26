import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgedFlangesRoutingModule } from './forged-flanges-routing.module';
import { ForgedFlangesGeometryComponent } from './forged-flanges-geometry/forged-flanges-geometry.component';
import { CuproNickelFlangeComponent } from './cupro-nickel-flange/cupro-nickel-flange.component';
import { CopperFlangesComponent } from './copper-flanges/copper-flanges.component';
import { CompositeFlangesComponent } from './composite-flanges/composite-flanges.component';
import { SubmenuComponent } from './submenu/submenu.component';


@NgModule({
  declarations: [ForgedFlangesGeometryComponent, CuproNickelFlangeComponent, CopperFlangesComponent, CompositeFlangesComponent, SubmenuComponent],
  imports: [
    CommonModule,
    ForgedFlangesRoutingModule
  ]
})
export class ForgedFlangesModule { }
