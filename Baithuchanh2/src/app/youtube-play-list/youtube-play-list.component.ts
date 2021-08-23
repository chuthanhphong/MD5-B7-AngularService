import { Component, OnInit } from '@angular/core';
import {SongService} from '../service/song.service';



@Component({
  selector: 'app-youtube-play-list',
  templateUrl: './youtube-play-list.component.html',
  styleUrls: ['./youtube-play-list.component.css']
})
export class YoutubePlayListComponent implements OnInit {

  constructor(public songService: SongService) {
  }

  ngOnInit() {

  }
}


