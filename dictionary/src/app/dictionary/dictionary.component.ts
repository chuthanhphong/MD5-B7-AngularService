import { Component, OnInit } from '@angular/core';
import {Dictionary} from '../dictionary';
import {DictionaryService} from '../service/dictionary.service';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent implements OnInit {

  word: Dictionary;

  constructor(private dictionaryService: DictionaryService) {
  }

  ngOnInit() {
  }

  search(word: string) {
    const mean1 = this.dictionaryService.search(word);
    this.word = {
      word,
      mean: mean1
    };
  }

}
