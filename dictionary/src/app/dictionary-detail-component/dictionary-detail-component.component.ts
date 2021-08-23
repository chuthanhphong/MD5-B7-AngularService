import {Component, OnDestroy, OnInit} from '@angular/core';
import {Dictionary} from '../dictionary';
import {Subscription} from 'rxjs';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {DictionaryService} from '../service/dictionary.service';

@Component({
  selector: 'app-dictionary-detail-component',
  templateUrl: './dictionary-detail-component.component.html',
  styleUrls: ['./dictionary-detail-component.component.css']
})
export class DictionaryDetailComponentComponent implements OnInit, OnDestroy {

  word: Dictionary;
  sub: Subscription;

  constructor(private activatedRoute: ActivatedRoute, private dictionaryService: DictionaryService) {
  }

  ngOnInit() {
    this.sub = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const keyDetail = paramMap.get('key');
      const mean1 = this.dictionaryService.search(keyDetail);
      this.word = {
        word: keyDetail,
        mean: mean1
      };
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }


}
