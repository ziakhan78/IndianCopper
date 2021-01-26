import { NgModule, ɵCodegenComponentFactoryResolver } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BimetallicFintubesComponent } from './bimetallic-fintubes/bimetallic-fintubes.component';
import { CondenserTubesComponent } from './condenser-tubes/condenser-tubes.component';
import { CorrugatedFinTubesComponent } from './corrugated-fin-tubes/corrugated-fin-tubes.component';
import { EndCrossFinTubesComponent } from './end-cross-fin-tubes/end-cross-fin-tubes.component';
import { FinnedCoolingCoilsComponent } from './finned-cooling-coils/finned-cooling-coils.component';
import { FinnedTubesGeometryComponent } from './finned-tubes-geometry/finned-tubes-geometry.component';
import { FinnedUBentTubesComponent } from './finned-u-bent-tubes/finned-u-bent-tubes.component';
import { IntegralFinTubesComponent } from './integral-fin-tubes/integral-fin-tubes.component';
import { InternallyFinnedTubesComponent } from './internally-finned-tubes/internally-finned-tubes.component';
import { TurboChillFinTubesComponent } from './turbo-chill-fin-tubes/turbo-chill-fin-tubes.component';

const routes: Routes = [
{path:'finned-tubes-geometry',component:FinnedTubesGeometryComponent},
{path:'integral-fin-tubes', component:IntegralFinTubesComponent},
{path: 'turbo-chill-fin-tubes', component:TurboChillFinTubesComponent},
{path:'condenser-tubes', component:CondenserTubesComponent},
{path:'corrugated-fin-tubes', component:CorrugatedFinTubesComponent},
{path:'end-cross-fin-tubes', component:EndCrossFinTubesComponent},
{path:'internally-finned-tubes', component:InternallyFinnedTubesComponent},
{path:'finned-cooling-coils', component: FinnedCoolingCoilsComponent},
{path:'finned-u-bent-tubes', component: FinnedUBentTubesComponent},
{path:'bimetallic-fintubes', component:BimetallicFintubesComponent}




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinTubesRoutingModule { }
