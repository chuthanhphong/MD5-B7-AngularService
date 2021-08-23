import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DictionayPageComponenComponent } from './dictionay-page-componen.component';

describe('DictionayPageComponenComponent', () => {
  let component: DictionayPageComponenComponent;
  let fixture: ComponentFixture<DictionayPageComponenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DictionayPageComponenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DictionayPageComponenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
