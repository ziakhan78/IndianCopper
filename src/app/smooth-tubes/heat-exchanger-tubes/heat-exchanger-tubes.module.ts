import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeatExchangerTubesRoutingModule } from './heat-exchanger-tubes-routing.module';
import { HeatExchangerTubesComponent } from './heat-exchanger-tubes.component';
import { SubmenuComponent } from './submenu/submenu.component';


@NgModule({
  declarations: [HeatExchangerTubesComponent, SubmenuComponent],
  imports: [
    CommonModule,
    HeatExchangerTubesRoutingModule
  ]
})
export class HeatExchangerTubesModule { }
