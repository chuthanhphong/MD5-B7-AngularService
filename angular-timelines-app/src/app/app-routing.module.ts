import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TimelineComponentComponent} from './timeline-component/timeline-component.component';


const routes: Routes = [{
  path : 'timelines',
  component : TimelineComponentComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
