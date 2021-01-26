import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrassTubesRoutingModule } from './brass-tubes-routing.module';
import { BrassTubesComponent } from './brass-tubes.component';
import { AluminumBrassTubesComponent } from './aluminum-brass-tubes/aluminum-brass-tubes.component';
import { AdmiraltyBrassTubesComponent } from './admiralty-brass-tubes/admiralty-brass-tubes.component';
import { CopperAlloyTubesComponent } from './copper-alloy-tubes/copper-alloy-tubes.component';
import { BrasstubesSubmenuComponent } from './brasstubes-submenu/brasstubes-submenu.component';


@NgModule({
  declarations: [BrassTubesComponent, AluminumBrassTubesComponent, AdmiraltyBrassTubesComponent, CopperAlloyTubesComponent, BrasstubesSubmenuComponent],
  imports: [
    CommonModule,
    BrassTubesRoutingModule
  ]
})
export class BrassTubesModule { }
