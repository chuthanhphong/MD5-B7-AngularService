import { Injectable } from '@angular/core';
import {Dictionary} from '../dictionary';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  dictionaries: Dictionary[] = [
    {
      word : 'Xin Chào',
      mean : 'Hello'
    },
    {

      word: 'Tạm Biệt',
      mean : 'goodbye'
    },
    {
      word: 'máy tính',
      mean : 'Computer'
    }
  ];

  constructor() { }
  search(word: string): string {
    if (!word) {
      return '';
    }
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.dictionaries.length; i++) {
      if (this.dictionaries[i].word === word) {
        return this.dictionaries[i].mean;
      }
    }
    return 'Not found';
  }

  getAll() {
    return this.dictionaries;
  }
}
