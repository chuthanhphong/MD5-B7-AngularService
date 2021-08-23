import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {YoutubePlayListComponent} from './youtube-play-list/youtube-play-list.component';
import {YoutubePlayerComponent} from './youtube-player/youtube-player.component';


@NgModule({
  declarations: [
    AppComponent,
    YoutubePlayListComponent,
    YoutubePlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
