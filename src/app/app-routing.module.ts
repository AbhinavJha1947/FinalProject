import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewResearchComponent} from '../app/new-research/new-research.component'

const routes: Routes = [
  { path: 'new-research', component: NewResearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
