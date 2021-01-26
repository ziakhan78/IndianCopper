import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SquareTubesComponent } from './square-tubes.component';
import { RectangularTubesComponent } from './rectangular-tubes/rectangular-tubes.component';
import { HexagonalTubesComponent } from './hexagonal-tubes/hexagonal-tubes.component';
import { SpecialProfileTubesComponent } from './special-profile-tubes/special-profile-tubes.component';
import { BrassOctagonalTubesComponent } from './brass-octagonal-tubes/brass-octagonal-tubes.component';


const routes: Routes = [
  { path: '', component: SquareTubesComponent },
  {path:'rectangular-tubes', component: RectangularTubesComponent},
  {path: 'hexagonal-tubes', component: HexagonalTubesComponent},
  {path:'special-profile-tubes', component:SpecialProfileTubesComponent},
  {path:'brass-octagonal-tubes', component: BrassOctagonalTubesComponent}


];





@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SquareTubesRoutingModule { }
