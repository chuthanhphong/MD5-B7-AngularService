import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {YoutubePlayListComponent} from './youtube-play-list/youtube-play-list.component';
import {YoutubePlayerComponent} from './youtube-player/youtube-player.component';


const routes: Routes = [
  {
    path: 'youtube',
    component: YoutubePlayListComponent,
    children: [{
      path: ':id',
      component: YoutubePlayerComponent
    }]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
