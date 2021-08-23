import { Component, OnInit } from '@angular/core';
import {DictionaryService} from '../service/dictionary.service';

@Component({
  selector: 'app-dictionay-page-componen',
  templateUrl: './dictionay-page-componen.component.html',
  styleUrls: ['./dictionay-page-componen.component.css']
})
export class DictionayPageComponenComponent implements OnInit {

  constructor(public dictionaryService: DictionaryService) { }

  ngOnInit() {
  }

}
