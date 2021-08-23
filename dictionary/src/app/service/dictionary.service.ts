import { Injectable } from '@angular/core';
import {Dictionary} from '../dictionary';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  dictionary: Dictionary[] =[
    {
      id:1,
      vnString : 'Xin Chào',
      enString :'Hello'
    },
    {
      id:2,
      vnString:'Tạm Biệt',
      enString :''
    },
    {}
  ];

  constructor() { }
}
