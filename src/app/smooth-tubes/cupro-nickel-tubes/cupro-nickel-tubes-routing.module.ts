import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuproNickelTubesComponent } from './cupro-nickel-tubes.component';
import { CuproNickelTubes7030Component } from './cupro-nickel-tubes7030/cupro-nickel-tubes7030.component';
import { CuproNickelTubes9010Component } from './cupro-nickel-tubes9010/cupro-nickel-tubes9010.component';

const routes: Routes = [
  { path: '', component: CuproNickelTubesComponent },
{ path:'cupro-nickel-tubes', component: CuproNickelTubesComponent},
{path:'cupro-nickel-tubes9010', component: CuproNickelTubes9010Component},
{path:'cupro-nickel-tubes7030', component: CuproNickelTubes7030Component}



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CuproNickelTubesRoutingModule { }
