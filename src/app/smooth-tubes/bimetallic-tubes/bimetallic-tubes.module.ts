import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BimetallicTubesRoutingModule } from './bimetallic-tubes-routing.module';
import { BimetallicTubesComponent } from './bimetallic-tubes.component';
import { SubMenuComponent } from './sub-menu/sub-menu.component';


@NgModule({
  declarations: [BimetallicTubesComponent, SubMenuComponent],
  imports: [
    CommonModule,
    BimetallicTubesRoutingModule
  ]
})
export class BimetallicTubesModule { }
