import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BimetallicTubesComponent } from './bimetallic-tubes.component';

const routes: Routes = [{ path: '', component: BimetallicTubesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BimetallicTubesRoutingModule { }
