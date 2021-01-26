import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SquareTubesRoutingModule } from './square-tubes-routing.module';
import { SquareTubesComponent } from './square-tubes.component';
import { RectangularTubesComponent } from './rectangular-tubes/rectangular-tubes.component';
import { HexagonalTubesComponent } from './hexagonal-tubes/hexagonal-tubes.component';
import { SpecialProfileTubesComponent } from './special-profile-tubes/special-profile-tubes.component';
import { SubMenuComponent } from './sub-menu/sub-menu.component';
import { BrassOctagonalTubesComponent } from './brass-octagonal-tubes/brass-octagonal-tubes.component';


@NgModule({
  declarations: [SquareTubesComponent, RectangularTubesComponent, HexagonalTubesComponent, SpecialProfileTubesComponent, SubMenuComponent, BrassOctagonalTubesComponent],
  imports: [
    CommonModule,
    SquareTubesRoutingModule
  ]
})
export class SquareTubesModule { }
