import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubePlayListComponent } from './youtube-play-list.component';

describe('YoutubePlayListComponent', () => {
  let component: YoutubePlayListComponent;
  let fixture: ComponentFixture<YoutubePlayListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoutubePlayListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubePlayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
