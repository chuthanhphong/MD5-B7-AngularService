import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DictionaryComponent} from './dictionary/dictionary.component';
import {DictionaryDetailComponentComponent} from './dictionary-detail-component/dictionary-detail-component.component';


const routes: Routes = [ {
  path: 'dictionaries',
  component: DictionaryComponent,
  children: [{
    path: ':key',
    component: DictionaryDetailComponentComponent
  }]
},
  {
    path: 'dictionary',
    component: DictionaryComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
