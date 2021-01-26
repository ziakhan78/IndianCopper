import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CopperTubesRoutingModule } from './copper-tubes-routing.module';
import { CopperTubesComponent } from './copper-tubes.component';
import { CopperCoilsComponent } from './copper-coils/copper-coils.component';
import { PvcCoatedCopperTubesComponent } from './pvc-coated-copper-tubes/pvc-coated-copper-tubes.component';
import { CopperHelicalCoilsComponent } from './copper-helical-coils/copper-helical-coils.component';
import { CopperFittingsComponent } from './copper-fittings/copper-fittings.component';
import { CopperSubmenuComponent } from './copper-submenu/copper-submenu.component';


@NgModule({
  declarations: [
    CopperTubesComponent, 
    CopperCoilsComponent, 
    PvcCoatedCopperTubesComponent, 
    CopperHelicalCoilsComponent, 
    CopperFittingsComponent, 
    CopperSubmenuComponent],
  
    imports: [
    CommonModule,
    CopperTubesRoutingModule
  ]
})
export class CopperTubesModule { }
