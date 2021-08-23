import { Injectable } from '@angular/core';
import {Song} from '../song';


@Injectable({
  providedIn: 'root'
})
export class SongService {
// @ts-ignore
  // @ts-ignore
  playList: Song[] = [
  {
    id: 'CX11yw6YL1w',
    name : 'Céline Dion - Ashes (from the Deadpool 2 Motion Picture Soundtrack)'
  },
    {
      id: 'HBYirj2c_jw',
      name: 'Deadpool 2 - Take on Me'
    },
    {
      id : 'N6O2ncUKvlg',
      name: 'Nelly - Just A Dream'
    },
    {
      id: 'WpYeekQkAdc',
      name: 'The Black Eyed Peas - Where Is The Love?'
    }

];
  constructor() { }
  findById(id: string) {
    return this.playList.find(item => item.id === id);
  }
}

