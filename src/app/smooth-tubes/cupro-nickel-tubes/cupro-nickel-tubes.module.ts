import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CuproNickelTubesRoutingModule } from './cupro-nickel-tubes-routing.module';
import { CuproNickelTubesComponent } from './cupro-nickel-tubes.component';
import { SubmenuComponent } from './submenu/submenu.component';
import { CuproNickelTubes9010Component } from './cupro-nickel-tubes9010/cupro-nickel-tubes9010.component';
import { CuproNickelTubes7030Component } from './cupro-nickel-tubes7030/cupro-nickel-tubes7030.component';



@NgModule({
  declarations: [CuproNickelTubesComponent, SubmenuComponent, CuproNickelTubes9010Component, CuproNickelTubes7030Component],
  imports: [
    CommonModule,
    CuproNickelTubesRoutingModule
  ]
})
export class CuproNickelTubesModule { }
