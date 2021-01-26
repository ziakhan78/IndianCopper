import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinTubesRoutingModule } from './fin-tubes-routing.module';
import { FinnedTubesGeometryComponent } from './finned-tubes-geometry/finned-tubes-geometry.component';
import { IntegralFinTubesComponent } from './integral-fin-tubes/integral-fin-tubes.component';
import { TurboChillFinTubesComponent } from './turbo-chill-fin-tubes/turbo-chill-fin-tubes.component';
import { ConsenserTubesComponent } from './consenser-tubes/consenser-tubes.component';
import { CorrugatedFinTubesComponent } from './corrugated-fin-tubes/corrugated-fin-tubes.component';
import { EndCrossFinTubesComponent } from './end-cross-fin-tubes/end-cross-fin-tubes.component';
import { InternallyFinnedTubesComponent } from './internally-finned-tubes/internally-finned-tubes.component';
import { FinnedCoolingCoilsComponent } from './finned-cooling-coils/finned-cooling-coils.component';
import { BimetallicFintubesComponent } from './bimetallic-fintubes/bimetallic-fintubes.component';
import { SubMenuComponent } from './sub-menu/sub-menu.component';
import { CondenserTubesComponent } from './condenser-tubes/condenser-tubes.component';
import { FinnedUBentTubesComponent } from './finned-u-bent-tubes/finned-u-bent-tubes.component';


@NgModule({
  declarations: [FinnedTubesGeometryComponent, IntegralFinTubesComponent, TurboChillFinTubesComponent, ConsenserTubesComponent, CorrugatedFinTubesComponent, EndCrossFinTubesComponent, InternallyFinnedTubesComponent, FinnedCoolingCoilsComponent, BimetallicFintubesComponent, SubMenuComponent, CondenserTubesComponent, FinnedUBentTubesComponent],
  imports: [
    CommonModule,
    FinTubesRoutingModule
  ]
})
export class FinTubesModule { }
